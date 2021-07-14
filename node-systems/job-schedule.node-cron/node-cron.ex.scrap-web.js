const nodeCron = require("node-cron");
const puppeteer = require("puppeteer");
const ora = require("ora");
const chalk = require("chalk");

const url = "https://www.worldometers.info/world-population/";

async function scrapeWorldPopulation() {
  // Log a message on the terminal as the scheduled job starts
  // We are using chalk to make the message on the terminal look colorful
  console.log(chalk.green("Running scheduled job"));
  // Launch a loading spinner with an appropriate message on the terminal
  // It provides a good user experience as the scraping process takes a bit of time
  const spinner = ora({
    text: "Launcing puppeteer",
    color: "blue",
    hideCursor: false,
  }).start();

  try {
    // This will help us compute the duration of the job later
    const date = Date.now();
    // Launch puppeteeer
    const browser = await puppeteer.launch();
    // Change the message on the terminal as we launch
    // a new headless browser page
    spinner.text = "Launching headless browser page";
    // Launch a new headless browser page
    const newPage = await browser.newPage();
    // Change the message on the terminal as we navigate
    // to the URL of the page we are scraping
    spinner.text = "Navigating to URL";
    // Navigate to the URL of the page we are scraping. This takes a bit of time
    // You can change the timeout to an appropriate value if you wish otherwise
    // we wait until the page loads
    await newPage.goto(url, { waitUntil: "load", timeout: 0 });

    // Change the message on the terminal as we start scraping the page
    spinner.text = "Scraping page";
    // Start scraping the page
    // If world population is 7,876,395,914 then digitGroups will be
    // ["7", "876", "395", "914"]
    const digitGroups = await newPage.evaluate(() => {
      const digitGroupsArr = [];
      // For selecting span elements containing digit groups
      const selector =
        "#maincounter-wrap .maincounter-number .rts-counter span";
      const digitSpans = document.querySelectorAll(selector);
      // Loop through the digit spans selected above
      digitSpans.forEach((span) => {
        if (!isNaN(parseInt(span.textContent))) {
          digitGroupsArr.push(span.textContent);
        }
      });
      return JSON.stringify(digitGroupsArr);
    });
    // Change the message on the terminal since we are about
    // to close the headless browser
    spinner.text = "Closing headless browser";
    // Close the headless browser
    await browser.close();
    // Print success message with duration it took to scrape the data in ms
    spinner.succeed(`Page scraping successfull after ${Date.now() - date}ms`);
    // Remove the spinner from the terminal
    spinner.clear();
    // Print world population on the terminal if scraping is successful
    console.log(
      chalk.yellow.bold(`World population on ${new Date().toISOString()}:`),
      chalk.blue.bold(JSON.parse(digitGroups).join(","))
    );
  } catch (error) {
    // Print failed on the terminal if scraping is unsuccessful
    spinner.fail({ text: "Scraping failed" });
    // Remove the spinner from the terminal
    spinner.clear();
    // Print the error message on the terminal
    console.log(error);
  }
}
// Schedule a job to run every two minutes
const job = nodeCron.schedule("*/2 * * * *", scrapeWorldPopulation);
