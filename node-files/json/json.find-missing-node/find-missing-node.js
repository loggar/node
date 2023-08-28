import fs from "fs/promises";
import path from "path";

function resolveNestedField(obj, nestedField) {
  const fields = nestedField.split(".");
  let value = obj;
  for (const field of fields) {
    if (value && value[field] !== undefined) {
      value = value[field];
    } else {
      return undefined;
    }
  }
  return value;
}

// Recursive function to collect id values based on the path
function collectIds(
  obj,
  pathArray,
  idFieldPath,
  targetFieldPath,
  strict = true
) {
  const results = [];

  if (pathArray.length === 0 && obj) {
    const fieldValue = resolveNestedField(obj, idFieldPath);
    if (
      resolveNestedField(obj, targetFieldPath) === undefined &&
      fieldValue !== undefined
    ) {
      results.push(fieldValue);
    }
    return results;
  }

  const [current, ...remaining] = pathArray;

  if (current.endsWith("[]")) {
    const key = current.slice(0, -2);
    if (strict && !Array.isArray(obj[key])) {
      return results;
    }
    if (Array.isArray(obj[key])) {
      for (const item of obj[key]) {
        results.push(
          ...collectIds(item, remaining, idFieldPath, targetFieldPath, strict)
        );
      }
    }
  } else {
    if (strict && (obj[current] === undefined || Array.isArray(obj[current]))) {
      return results;
    }
    if (obj[current] !== undefined) {
      results.push(
        ...collectIds(
          obj[current],
          remaining,
          idFieldPath,
          targetFieldPath,
          strict
        )
      );
    }
  }

  return results;
}

const fileName = "data.json";
const parentPath = "a[].b[].c[]";
const idPath = "id";
const targetPath = "dates.modified";

async function main() {
  const filePath = path.resolve(process.cwd(), fileName);

  try {
    const data = await fs.readFile(filePath, "utf-8");
    const jsonData = JSON.parse(data);
    const nodePaths = parentPath.split(".");
    const results = collectIds(jsonData, nodePaths, idPath, targetPath);

    if (results.length > 0) {
      console.log(`Missing node: ${parentPath}.${targetPath}`);
      console.log(`Found ${results.length}: ${results.join(", ")}`);
    } else {
      console.log(`Not found.`);
    }
  } catch (err) {
    console.error(`An error occurred: ${err.message}`);
    process.exit(1);
  }
}

main();
