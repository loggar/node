import fs from "fs/promises";
import path from "path";

/**
 * @arg fileName In a json file
 * @arg parentPath Under the parent node structure
 * @arg idPath collect ID field values
 * @arg targetPaths if the target child node is missing
 */
const fileName = "data.json";
const parentPath = "a[].b[].c[]";
const idPath = "id";
const targetPaths = "dates.created,dates.modified,details.title,details.label";

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

async function main() {
  const filePath = path.resolve(process.cwd(), fileName);

  try {
    const data = await fs.readFile(filePath, "utf-8");
    const jsonData = JSON.parse(data);
    const nodePaths = parentPath.split(".");
    const missingFieldsTargets = targetPaths.split(",");
    const result = {};

    for (const item of missingFieldsTargets) {
      result[item] = collectIds(jsonData, nodePaths, idPath, item);
    }

    Object.keys(result).forEach((key) => {
      if (Array.isArray(result[key]) && result[key].length > 0) {
        console.log(
          `Missing ${key} (${result[key].length}): ${result[key].join(", ")}`
        );
      } else {
        console.log(`Missing ${key}: not found`);
      }
    });
  } catch (err) {
    console.error(`An error occurred: ${err.message}`);
    process.exit(1);
  }
}

main();
