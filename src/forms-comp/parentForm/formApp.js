import React, {useState}from "react";
import Navbar from "../../main-comp/navbar";
import CardForm from "./cardForm";
import "./formApp.css"

export default function FormApp() {
    return (
        <div className="form--main">
            <Navbar/>
            <CardForm/>
            <div className="def-form">
                <h1>Profile Card</h1>
                <p>When Scanned Users will be redirected to these details</p>
            </div>
        </div>
    )
}
