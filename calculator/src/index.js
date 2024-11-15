import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

function Calculator() {

const [calc, setCalc] = React.useState({
current: "0",
total: "0",
isInitial: true,
preOp: ""
});

function handleNumber(value) {
let newValue = value;
if (!calc.isInitial) {
newValue = calc.current + value;
}
setCalc({
...calc,
current: newValue,
isInitial: false
});
}

function handleOperator(value) {
const total = doCalculation();

setCalc({
current: total.toString(),
total: total.toString(),
isInitial: true,
preOp: value // Set operator for next calculation
});
}

function handlePercentage(value) {
const total = doCalculation();

setCalc({
current: total.toString(),
total: total.toString(),
isInitial: true,
preOp: value // Set operator for next calculation
});
}

function doCalculation() {
let total = parseInt(calc.total) || 0;
const current = parseInt(calc.current) || 0;
debugger;
console.log(calc)
switch (calc.preOp) {
case "+":
total += current;
break;
case "-":
total -= current;
break;

case "%":
total = current/100;
break;

case "*":
total *= current;
break;
case "/":
if (current !== 0) {
total /= current;
} else {
alert("Cannot divide by zero");
}
break;
default:
total = current;
}
return total;
}

function handleClear() {
setCalc({
current: "0",
total: "0",
isInitial: true,
preOp: ""
});
}

function handleEquals() {
const total = doCalculation();

setCalc({
current: total.toString(),
total: total.toString(),
isInitial: true,
preOp: "" // Clear preOp after calculation
});
}

return (
<div className='calculator'>
<div className="display">{calc.current}</div>
<CalcButton value="7" onClick={handleNumber} />
<CalcButton value="8" onClick={handleNumber} />
<CalcButton value="9" onClick={handleNumber} />
<CalcButton className="operator" onClick={() => handleOperator("/")} value="/" />

<CalcButton value="4" onClick={handleNumber} />
<CalcButton value="5" onClick={handleNumber} />
<CalcButton value="6" onClick={handleNumber} />
<CalcButton className="operator" onClick={() => handleOperator("*")} value="*" />

<CalcButton value="1" onClick={handleNumber} />
<CalcButton value="2" onClick={handleNumber} />
<CalcButton value="3" onClick={handleNumber} />
<CalcButton className="operator" onClick={() => handleOperator("-")} value="-" />

<CalcButton value="%" onClick={handlePercentage} />
<CalcButton value="0" onClick={handleNumber} />
<CalcButton value="." onClick={handleEquals} />
<CalcButton className="operator" onClick={() => handleOperator("+")} value="+" />

<CalcButton value="C" onClick={handleClear} />
<CalcButton value="=" onClick={handleEquals} />
<CalcButton value="<" onClick={handleEquals} />
<CalcButton className="operator" onClick={() => handleOperator("+")} value="**" />

</div>
);
}

function CalcButton(props) {
return (
<button className={props.className} onClick={() => props.onClick(props.value)}>
{props.value}
</button>
);
}

ReactDOM.render(
<div className='container'><Calculator /></div>,
document.getElementById('root')
);