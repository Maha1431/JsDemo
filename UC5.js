const MAX_HRS_IN_MONTH = 100;
const NUM_OF_WORKING_DAYS =10;
let totalEmpHrs = 0;
let totalWorkingdays = 0;
while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingdays < NUM_OF_WORKING_DAYS)
{
    totalWorkingdays++;
    let empCheck = Math.floor(Math.random() * 10) %3;
    totalEmpHrs += getWorkingHours(empCheck);

}
let empWege = totalEmpHrs * WEGE_PER_HOUR;
console.log("UC5 Total Days :" + totalWorkingdays + "Total Hrs :" + empHrs + "Emp Wage :" + empWege);