import React from "react";
import "../App.css";

export const ClickButton = (props) => {

    function handleClick(e){
        props.onClick(e.target.innerText)
    }

    return (
        <div>
           
            {/* <button onClick={()=> setCount(count + 1)}> {props.name}</button> */}
            <button className={"button"} type="button" onClick={handleClick}> {props.name}</button>
        </div>
            
    );
}
