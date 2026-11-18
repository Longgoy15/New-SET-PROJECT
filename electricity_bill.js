/**
 * Electricity Bill Calculator System
 * Console-based procedural program using Node.js and readline.
 *
 * Run with: node electricity_bill.js
 */
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const answerQueue = [];
const waitingAnswers = [];

rl.on("line", (answer) => {
  if (waitingAnswers.length > 0) {
    waitingAnswers.shift().resolve(answer);
  } else {
    answerQueue.push(answer);
  }
});

rl.on("close", () => {
  while (waitingAnswers.length > 0) {
    waitingAnswers
      .shift()
      .reject(new Error("Input ended before all values were entered."));
  }
});

function ask(question) {
  process.stdout.write(question);
  return new Promise((resolve, reject) => {
    if (answerQueue.length > 0) {
      resolve(answerQueue.shift());
    } else {
      waitingAnswers.push({ resolve, reject });
    }
  });
}

function parseNonNegativeNumber(input, label) {
  const text = input.trim();
  const decimalNumber = /^[+-]?(?:(?:\d+\.?\d*)|(?:\.\d+))(?:[eE][+-]?\d+)?$/;
  const value = Number(text);
  if (
    text === "" ||
    !decimalNumber.test(text) ||
    !Number.isFinite(value) ||
    value < 0
  ) {
    throw new Error(`${label} must be a valid non-negative number.`);
  }
  return value;
}

function calculateConsumption(previousReading, currentReading) {
  return currentReading - previousReading;
}

function calculateBill(consumption, ratePerKwh) {
  return consumption * ratePerKwh;
}

function formatNumber(value) {
  return value.toLocaleString("en-US", { maximumFractionDigits: 12 });
}

function formatPesos(value) {
  return `₱${value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}

async function main() {
  try {
    const previousReading = parseNonNegativeNumber(
      await ask("Enter previous meter reading in kWh: "),
      "Previous meter reading",
    );
    const currentReading = parseNonNegativeNumber(
      await ask("Enter current meter reading in kWh: "),
      "Current meter reading",
    );

    if (currentReading < previousReading) {
      throw new Error(
        "Current meter reading cannot be lower than previous meter reading.",
      );
    }

    const ratePerKwh = parseNonNegativeNumber(
      await ask("Enter electricity rate per kWh in pesos: "),
      "Electricity rate",
    );
    const consumption = calculateConsumption(previousReading, currentReading);
    const totalBill = calculateBill(consumption, ratePerKwh);

    console.log("\nELECTRICITY BILL CALCULATOR");
    console.log(`Previous meter reading: ${formatNumber(previousReading)} kWh`);
    console.log(`Current meter reading: ${formatNumber(currentReading)} kWh`);
    console.log(`Electricity consumption: ${formatNumber(consumption)} kWh`);
    console.log(`Rate per kWh: ${formatPesos(ratePerKwh)}`);
    console.log(`Estimated total bill: ${formatPesos(totalBill)}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exitCode = 1;
  } finally {
    rl.close();
  }
}

main();
