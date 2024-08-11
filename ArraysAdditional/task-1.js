const goals = [8, 1, 1, 3, 2, -1, 5];

// 1.
let bestMatchIndex = goals.indexOf(Math.max(...goals));
alert(`Самый результативный матч был под номером ${bestMatchIndex + 1}. В нем было забито ${goals[bestMatchIndex]} гол(ов).`);

// 2.
let worstMatch = Math.min(...goals.filter(element => element >= 0));
let worsMatchNumbers = goals.reduce((acc, element, index) => {
    if(element === worstMatch) {
        acc.push(index + 1);
    }
    return acc;
}, []);
alert(`Cамые нерезультативные матчи были под номерами ${worsMatchNumbers}. В каждом из них было забито по  ${worstMatch} мячу(а).`)

// 3.
let numberOfGoals = goals.filter(element => element >= 0).reduce((acc, element) => acc + element, 0);
alert(`Общее количество голов за сезон равно ${numberOfGoals}`);

// 4.
alert(`Были автоматические поражения: ${goals.some(element => element < 0) ? "да" : "нет"}`)

// 5. 
let averageGoalAmount = Math.round(numberOfGoals / goals.filter(element => element >= 0).length);
alert(`Среднее количество голов за матч равно ${averageGoalAmount}`);

// 6.
alert([...goals].sort());