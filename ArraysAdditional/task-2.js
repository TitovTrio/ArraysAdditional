function getMathResult(expression) {
    let [a, operator, b] = processArray(expression);
    switch(operator) {
        case "Ошибка":
            return operator
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "/":
            return a / b;
        case "*":
            return a * b;
        case ">":
            return a > b;
        case "<":
            return a < b;
        case "=":
            return a === b;
    }
}

function processArray(array) {
    let operators = ["+", "-", "/", "*", ">", "<", "="]

    array = array.reduce((a, e) => {
        if(a.length === 0 && !isNaN(e)) {
            a.push(Number(e))
        }
        if (a.length === 1 && operators.includes(e)) {
            a.push(e)
        }
        if (a.length === 2 && !isNaN(e)) {
            a.push(Number(e))
        }
        return a
    }, [])
    if (array.length < 3) {
        return [,"Ошибка",]
    } else {
        return array
    }
}

console.log(getMathResult(['100', 'hello', 'javascript', 'help200', '>', 'kek', 2]))