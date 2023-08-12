import React, { useState } from "react";

const Calculator = () => {
    let [inputValue1, setInputValue1] = useState("");
    let [inputValue2, setInputValue2] = useState("");
    let [result, setResult] = useState("");
    let [message, setMessage] = useState("");


    const performCalculation = (e) => {
        if(inputValue1==""){
            setMessage("Num 1 cannot be empty");
            setResult("");
            return;
        }
        else if(inputValue2==""){
            setMessage("Num 2 cannot be empty");
            setResult("");
            return;
        }
        
            const num1 = Number(inputValue1);
            const num2 = Number(inputValue2);
            let calculatedResult = "";

            if(Number.isNaN(num1) || Number.isNaN(num2)){
                setMessage("Enter valid numbers");
            }
            else{
            switch (e.target.innerText) {
                case '+':
                    calculatedResult = (num1 + num2);
                    break;
                case '-':
                    calculatedResult = (num1 - num2);
                    break;
                case '*':
                    calculatedResult = (num1 * num2);
                    break;
                case '/':
                    calculatedResult = (num1 / num2);
                    break;
            }
            setResult(calculatedResult);
            setMessage("Success!");
            }      
    }

    return(
        <div>
            <h2>React Calculator</h2>
            <input type="text" placeholder="Num1" onChange={(e)=>setInputValue1(e.target.value)}></input>
            <br></br>
            <input type="text" placeholder="Num2" onChange={(e)=>setInputValue2(e.target.value)}></input>
            <br></br>
            <button onClick={performCalculation}>+</button>
            <button onClick={performCalculation}>-</button>
            <button onClick={performCalculation}>*</button>
            <button onClick={performCalculation}>/</button>


        <div className={message.includes("Success!") ? "success" : "error"}>{message}</div>
        <div className='res'>{result === "" ? "" : <h3> Result : {result}</h3> }</div>
        </div>
    )

}

export default Calculator;