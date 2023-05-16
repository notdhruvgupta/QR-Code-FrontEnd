import React, {useState, useEffect} from "react";
import Navbar from "../../main-comp/navbar";
import CardForm from "./cardForm";
import "./formApp.css"


export default function FormApp() {
    return (
        <div className="form--main">
            <Navbar/>
            <CardForm/>
        </div>
    )
}
