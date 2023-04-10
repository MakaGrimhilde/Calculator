import {useState} from "react";


const Buttons = () => {

    const [values, setValues] = useState({
        current: "0",
        total: "0",
        initial: true,
        op: ""
    })
    
    const ButtonValues = ({value, className, onClick}) => {

        return (
    
            <button className={className} onClick={() => onClick(value)}>{value}</button>
        )
    }
    
    const handlerNumber = (value) => {

        let newValue = value

        if(!values.initial){

            newValue = values.current + value
        }
        setValues({
            current: newValue, 
            total: values.total, 
            initial: false,
            op: values.op
        })
    }

    const handlerOperator = (value) => {

        let resultTotal = operations()
    
        setValues({
            current: resultTotal.toString(), 
            total: resultTotal.toString(), 
            initial: true, 
            op: value
        })
    }

    const operations = () => {

        let result = parseInt(values.total)

        switch(values.op){
            case "+":
                result += parseInt(values.current)
                break;
            case "-":
                result -= parseInt(values.current)
                break;
            case "x":
                result *= parseInt(values.current)
                break;
            case "÷":
                result /= parseInt(values.current)
                break;
            default:
                result = parseInt(values.current)           
        }

        if(result % 1 !== 0){

            return result.toFixed(5)

        } else {

            return result
        }   
    }

    const handlerReset = () => {

        setValues({
            current: "0",
            total: "0",
            initial: true
        })
    }

    /*const renderDisplay = () => {

        return values.current
    }*/

    return (
        <>
            <div className="display">{values.current}</div>
            <div className="buttons">
                <ButtonValues value="7" onClick={handlerNumber}/>
                <ButtonValues value="8" onClick={handlerNumber}/>
                <ButtonValues value="9" onClick={handlerNumber}/>
                <ButtonValues className="operator" value="÷" onClick={handlerOperator}/>

                <ButtonValues value="4" onClick={handlerNumber}/>
                <ButtonValues value="5" onClick={handlerNumber}/>
                <ButtonValues value="6" onClick={handlerNumber}/>
                <ButtonValues className="operator" value="x" onClick={handlerOperator}/>

                <ButtonValues value="1" onClick={handlerNumber}/>
                <ButtonValues value="2" onClick={handlerNumber}/>
                <ButtonValues value="3" onClick={handlerNumber}/>
                <ButtonValues className="operator" value="-" onClick={handlerOperator}/>

                <ButtonValues value="C" onClick={handlerReset}/>
                <ButtonValues value="0" onClick={handlerNumber}/>
                <ButtonValues value="=" onClick={handlerOperator}/>
                <ButtonValues className="operator" value="+" onClick={handlerOperator}/>
            </div>
        </>
    )

}

export default Buttons