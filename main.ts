import inquirer from "inquirer";

import {differenceInSeconds} from "date-fns";

const answers = await inquirer.prompt({
    name : "userInput",
    type : "number",
    message : "please enter the amount of second:",
    validate : (input)=>{
        if(isNaN(input)){
            return "please enter valid number"
        }else if (input > 60){
            return "seconds must be in 60"
        }else {
            return true;
        }
    }
})

let input = answers.userInput

function startTime (value : number){
    const intTime = new Date().setSeconds(new Date().getSeconds() + value)
    const intervalTime = new Date (intTime)
    setInterval((()=>{
        const currentTime = new Date();
        const timeDiffrence = differenceInSeconds (intervalTime , currentTime);
        if (timeDiffrence <= 0){
            console.log("Timer has expired");
            process.exit();
        }
        const min = Math.floor((timeDiffrence %(3600*24))/3600);
        const sec = Math.floor(timeDiffrence % 60)
        console.log(`${min.toString().padStart(2 , "0")} : ${sec.toString().padStart(2 , "0")}`);
        
    }),1000)

}
startTime(input);