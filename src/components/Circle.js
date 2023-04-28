
import React, { Component } from "react";

const Circle = ({number, onCircle, id}) =>{

    return (
        <>
            <div id={id} onClick={onCircle} className="circle">
                {number}
            </div>
        </>
    );
}

export default Circle;

