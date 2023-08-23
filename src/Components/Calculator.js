import React, {useState} from "react";

const Calculator = () => {
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [message, setMessage] = useState("");
    const [result, setResult] = useState("");

    function validateInput(){
        if(input1==="" || input2==="" || isNaN(input1) || isNaN(input2)){
            setMessage("Please enter valid numbers.");
            setResult("");
            return false;
        }
        setMessage(null);
        return true;
    }

    function add(){
        if(validateInput()){
            setResult(parseFloat(input1) + parseFloat(input2));
            setMessage("Success!");
        }
    }
    function subtract(){
        if(validateInput()){
            setResult(parseFloat(input1) - parseFloat(input2));
            setMessage("Success!");
        }
    }
    function multiply(){
        if(validateInput()){
            setResult(parseFloat(input1) * parseFloat(input2));
            setMessage("Success!");
        }
    }
    function divide(){
        if(validateInput()){
            if(input2!="0"){
                setResult(parseFloat(input1) / parseFloat(input2));
                setMessage("Success!");
            }
            else{
                setMessage("Division by zero is not allowed.");
                setResult("");
            }
        }
    }

    return(
        <div className="calculator">
            <h1>React Calculator</h1>
            <input type="text" placeholder="Num 1" value={input1} onChange={(e)=>setInput1(e.target.value)}></input>
            <input type="text" placeholder="Num 2" value={input2} onChange={(e)=>setInput2(e.target.value)}></input>
            <div className="buttons">
                <button onClick={add}>+</button>
                <button onClick={subtract}>-</button>
                <button onClick={multiply}>*</button>
                <button onClick={divide}>/</button>
            </div>
            <div className={message.includes("Success!") ? "success" : "error"}>{message}</div>
            <div className="result">{result === "" ? "" :  `Result : ${result}` }</div>
        </div>
    )
}

export default Calculator;