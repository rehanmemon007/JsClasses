function inputCaloriesByDay(day){
    if(day === 'Monday'){
        return 3500
    }else if (day === 'Tuesday'){
        return 1500
    }else if (day === 'Wednesday'){
        return 1800
    }else if (day === 'Thursday'){
        return 2300
    }else if (day === 'Friday'){
        return 2300
    }else if (day === 'Saturday'){
        return 1600
    }else if (day === 'Sunday'){
        return 1600
    }else{
        return 'Please Choose valid day'
    }
}
// console.log(inputCaloriesByDay('Monday'))

function getTotalCalories() {
    return inputCaloriesByDay('Monday') +
    inputCaloriesByDay('Tuesday') +
    inputCaloriesByDay('Wednesday') +
    inputCaloriesByDay('Thurday') +
    inputCaloriesByDay('Friday') +
    inputCaloriesByDay('Saturday') +
    inputCaloriesByDay('Sunday');
}
// console.log(getTotalCalories())

function getIdealCalories(){
    var idealDailyCalories = 2000;
    return idealDailyCalories * 7

}
// console.log(getTotalCalories())

function getIdealCalories(){
    var actualCalries = getTotalCalories
    var idealCalories = getIdealCalories
}

function CalculateHealthPlan(){
    var actualCalries = getTotalCalories
    var idealCalories = getIdealCalories
    if(actualCalries === idealCalories){
        return ' you ate just the right amount!'
    }
    if(actualCalries > idealCalories){
        return 'Time to head to the Gym'
    }else{
        return 'Time for Seconds!'
    }
}
console.log(CalculateHealthPlan())
