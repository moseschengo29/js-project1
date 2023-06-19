const butttonMarks = document.querySelector(".submit-marks");
let gradeAvg = document.querySelector(".final-grade");

// console.log(marks);

butttonMarks.addEventListener("click", () => {
  const marks = document.querySelector(".marks-input").value;
  let grade;
  console.log(marks);
  if (marks === "") {
    // checks if the input entered is empty or not
    gradeAvg.classList.remove("hidden"); //removes the 'hidden property'
    gradeAvg.textContent = `Empty Field! Please put in the marks you got.`; //output if true
  } else {
    if (marks > 79) {
      //checks for the marks entered in the input field
      grade = "A";
    } else if (marks >= 60 && marks <= 79) {
      grade = "B";
    } else if (marks >= 49 && marks <= 59) {
      grade = "C";
    } else if (marks >= 40 && marks < 49) {
      grade = "C";
    } else {
      grade = "E";
    }

    gradeAvg.classList.remove("hidden"); //removes the 'hidden property'
    gradeAvg.textContent = `You have an average grade of: ${grade}`; //output
  }
});
//CHALLENGE 2: Speed Detector

const buttonSpeed = document.querySelector(".submit-speed");

buttonSpeed.addEventListener("click", () => {
  const speed = document.querySelector(".speed-input").value;
  let demeritPoints = document.querySelector(".demerit-points");
  //   console.log("clicked");
  if (speed === "") {
    // checks if the input entered is empty or not
    demeritPoints.classList.remove("hidden"); //removes the 'hidden property'
    demeritPoints.textContent = "Empty Field! Please put in a speed."; //feedback
  } else {
    let speedLimit = 70;
    let points = 5;

    if (speed <= speedLimit) {
      //checks if speed is below or equalt to the speed limit (seventy)
      demeritPoints.classList.remove("hidden"); //removes the hidden property so that it can be visible to the browser
      demeritPoints.textContent = "Ok!"; //output
    } else {
      //   executes if the speed limit is above 70
      const demeritPoints = Math.floor((speed - speedLimit) / points); // calculates the demerit points and
      // rounds it down to the nearest whole number

      if (demeritPoints <= 12) {
        // checks if the demerit points are less than 12
        document.querySelector(".demerit-points").classList.remove("hidden");
        document.querySelector(
          ".demerit-points"
        ).textContent = `You have ${demeritPoints} demerit points.`;
      } else {
        // executes if the points are more than 12
        document.querySelector(".demerit-points").classList.remove("hidden");
        document.querySelector(
          ".demerit-points"
        ).textContent = `License Suspended!`;
      }
    }
  }
});

// // CHALLENGE 3: Net Salary Calculator
// Definition of  constants for basic salary, tax rate NHIF and NSSF rates

const TAX_RATE = 0.3;
const NHIF_RATE = 0.025;
const NSSF_RATE = 0.06;

// Getting user input for basic salary and benefits
const buttonSalary = document.querySelector(".submit-salary");

buttonSalary.addEventListener("click", () => {
  const basicSalary = Number(document.querySelector(".basic-salary").value);
  const benefits = Number(document.querySelector(".benefits-input").value);

  // //calculating gross salary
  const grossSalary = basicSalary + benefits;

  //caluculating nssf deduction
  const nssf = 0.06 * grossSalary;

  //finding the nhif deductions
  let nhif = 0;

  if (grossSalary <= 5999) {
    nhif = 150;
  } else if (grossSalary >= 6000 && grossSalary <= 7999) {
    nhif = 300;
  } else if (grossSalary >= 8000 && grossSalary <= 11999) {
    nhif = 400;
  } else if (grossSalary >= 12000 && grossSalary <= 14999) {
    nhif = 500;
  } else if (grossSalary > 14999 && grossSalary <= 19999) {
    nhif = 600;
  } else if (grossSalary > 19999 && grossSalary <= 24999) {
    nhif = 750;
  } else if (grossSalary > 24999 && grossSalary <= 29999) {
    nhif = 850;
  } else if (grossSalary > 29999 && grossSalary <= 34999) {
    nhif = 900;
  } else if (grossSalary > 34999 && grossSalary <= 39999) {
    nhif = 950;
  } else if (grossSalary > 39999 && grossSalary <= 44999) {
    nhif = 1000;
  } else if (grossSalary > 44999 && grossSalary <= 49999) {
    nhif = 1100;
  } else if (grossSalary > 49999 && grossSalary <= 59999) {
    nhif = 1200;
  } else if (grossSalary > 59999 && grossSalary <= 69999) {
    nhif = 1300;
  } else if (grossSalary > 69999 && grossSalary <= 79999) {
    nhif = 1400;
  } else if (grossSalary > 79999 && grossSalary <= 89999) {
    nhif = 1500;
  } else if (grossSalary > 89999 && grossSalary <= 99999) {
    nhif = 1600;
  } else {
    nhif = 1700;
  }

  //Calculating the net tax
  let payee = 0;
  if (grossSalary <= 24000) {
    payee = grossSalary * 0.1;
  } else if (grossSalary > 24000 && grossSalary <= 32333) {
    payee = grossSalary * 0.25;
  } else {
    payee = grossSalary * 0.3;
  }

  // Calculating the  net salary
  let netSalary = grossSalary - (nssf + nhif + payee);

  const grossSalaryText = document.querySelector(".gross-salary");
  const netSalaryText = document.querySelector(".net-salary");
  const taxDeductionText = document.querySelector(".tax-ded");
  const nhifDeductionText = document.querySelector(".nhif-ded");
  const nssfDeductionText = document.querySelector(".nssf-ded");

  // outputing the values of the operations
  grossSalaryText.classList.remove("hidden");
  grossSalaryText.textContent = `Your gross salary is: ${grossSalary}ksh`;

  netSalaryText.classList.remove("hidden");
  netSalaryText.textContent = `Your net salary is: ${netSalary}ksh`;

  taxDeductionText.classList.remove("hidden");
  taxDeductionText.textContent = `Your P.A.Y.E(tax deduction) is: ${payee}ksh`;

  nhifDeductionText.classList.remove("hidden");
  nhifDeductionText.textContent = `Your nhif deduction is: ${nhif}ksh`;

  nssfDeductionText.classList.remove("hidden");
  nssfDeductionText.textContent = `Your nssf deduction is: ${nssf}ksh`;
});
