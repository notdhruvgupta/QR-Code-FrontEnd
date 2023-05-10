import React from "react";
import avatar from "../images/avatar.png"
import addSvg from "../images/address.svg"
import mailSvg from "../images/mail.svg"
import phoneSvg from "../images/phone.svg"
import ageSvg from "../images/age.svg"
import twitterSvg from "../images/twitter.svg"
import instaSvg from "../images/insta.svg"
import linkSvg from "../images/linked.svg"
import gitSvg from "../images/github.svg"
import fbSvg from "../images/fb.svg"
import "./finalOutput.css";

export default function FinalOutput() {
    return(
        <div className="bg--div">
            <br/>
            <br/>
            <div className="parent-div">
                <img className="img-div" src={avatar}/>
                <div className="top-col">
                    <h1>Full Name</h1>
                    <h2>Designation</h2>
                    <h3>Company Name</h3>
                </div>
                <div className="mid-col">
                    <h3><img src={mailSvg}/>Email</h3>
                    <p>email@email.com</p>
                    <h3><img src={ageSvg}/>Age</h3>
                    <p>21</p>
                    <h3><img src={phoneSvg}/>Mobile</h3>
                    <p>+91-5859214416</p>
                    <h3><img src={addSvg}/>Address</h3>
                    <p>Gzb, UP</p>
                </div>
                <div className="bot-col">
                    <img src={twitterSvg}/>
                    <img src={instaSvg}/>
                    <img src={linkSvg}/>
                    <img src={gitSvg}/>
                    <img src={fbSvg}/>
                </div>
            </div>
            <br/>
            <br/>
        </div>

    )
}