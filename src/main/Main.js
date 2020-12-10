import React from 'react';
import FirstPage from "./FirstPage/MainFirstPage"
import SecondPage from "./SecondPage/MainSecond"


export default function Main() {
    return (<>
        <div className="Main_FirstContainer">
            <FirstPage />
        </div>
        <div className="Main_Second_Container">
            <SecondPage />
        </div>


    </>)
}