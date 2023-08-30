const https = require("https");

async function fetchData(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (response) => {
        let data = "";
        response.on("data", (chunk) => {
          data += chunk;
        });
        response.on("end", () => {
          try {
            const parsedData = JSON.parse(data);
            resolve(parsedData);
          } catch (e) {
            reject(new Error("Failed to parse JSON"));
          }
        });
      })
      .on("error", (error) => {
        reject(new Error(`Error fetching data: ${error.message}`));
      });
  });
}

async function main() {
  const jsonUrl =
    "https://raw.githubusercontent.com/loggar/note/master/docs/sample-res/sample.astros.json";

  try {
    const jsonData = await fetchData(jsonUrl);
    console.log(jsonData);
  } catch (err) {
    console.error(`An error occurred: ${err.message}`);
    process.exit(1);
  }
}

main();
