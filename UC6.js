const Emp_PartTime=0;
const Emp_FullTime=1;
const Emp_Absent=2;

const PartTime_Hours=4;
const FullTime_hours=8;
const Absent_hours=0;
const Total_workingHours=8;
const WagePerHr=20;
const TotalWorkDays=20;
let Emp_TodayWorkingHR=0;
let DailyWage=0;
let monthlywage=0;
let TotalHrs=0;
let DailyWAgesArray = [];

function Employe_DailyWage(Emp_AttenDance){

    switch (Emp_AttenDance) {
        case Emp_PartTime:
            Emp_TodayWorkingHR=PartTime_Hours;
    
            break;
        case Emp_FullTime:
                Emp_TodayWorkingHR=FullTime_hours;
            break;
       case Emp_Absent:
                    Emp_TodayWorkingHR=Absent_hours;
            break;
        default:
            console.log("there is an Error");
            break;
    }
    return Emp_TodayWorkingHR;

}
function calcDailyWage(Emp_TodayWorkingHR){
    return Emp_TodayWorkingHR*WagePerHr;
}

let Monthdays=0
while(Monthdays<TotalWorkDays && TotalHrs<160 ){
    Emp_AttenDance=Math.floor(Math.random()*3);
    Emp_TodayWorkingHR=Employe_DailyWage(Emp_AttenDance);
    DailyWAgesArray.push(calcDailyWage(Emp_TodayWorkingHR));
    TotalHrs += Emp_TodayWorkingHR;

   
Monthdays++;
}

let TotalEmpWage=calcDailyWage(TotalHrs);
console.log(DailyWAgesArray);
console.log("Total Days : "+TotalWorkDays  +"\nTotal Hrs : "+TotalHrs+"\nEmpWage : "+ TotalEmpWage);