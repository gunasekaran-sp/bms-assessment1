import React from 'react';
import Result from "./result";

const defaultExistingArray = [7000, 7001, 7002, 7003, 7004];

const UniqueNumber = ({inputFromUser="", existingArray = defaultExistingArray}) => {
    const [inputValue, setInputValue] = React.useState(inputFromUser);
    const [duplicateValues, setDuplicates] = React.useState([]);
    const [uniqueValues, setUniques] = React.useState([]);
    const handleKeyUp = (e) => {
        setInputValue(e.target.value);
    }
    const checkDuplicates = () => {
        if(inputValue) {
            const inputItemArray = inputValue.split(",");
            let inputs = [], inputsRange = [], duplicates=[], uniques=[]; 
            inputItemArray.forEach(input => {
                let trimmedInput = input.trim();
                if(trimmedInput.trim().split('-').length > 1) {
                    inputsRange.push(trimmedInput);
                }
                else {
                    inputs.push(trimmedInput);
                }
            });
            
            inputs.forEach((input) => {
                console.log(existingArray);
                const exists = existingArray.some(existingItem => existingItem == input);
                if(exists) {
                    console.log(exists, "exists");
                    duplicates.push(input);
                }
                else {
                    uniques.push(input);
                }
            });

            inputsRange.forEach(range => {
                let [from, to] = range.split('-');
                from = parseInt(from);
                to = parseInt(to);
                for(let currentValue =from; currentValue<= to; currentValue++) {
                    const exists = existingArray.some(existingItem => existingItem == currentValue);
                    if(exists) {
                        duplicates.push(currentValue);
                    }
                    else {
                        uniques.push(currentValue);
                    }
                }
            });
            setUniques(uniques);
            setDuplicates(duplicates);
        }
    }
    return (
        <form className={"unique-numbers-wrapper"}>
            <label>Enter the range of numbers</label>
            <input type="text" value={inputValue} onChange= {handleKeyUp} onKeyUp={checkDuplicates}/>
            <Result duplicates= {duplicateValues} uniques={uniqueValues}></Result>
        </form>
    )
}

export default UniqueNumber;