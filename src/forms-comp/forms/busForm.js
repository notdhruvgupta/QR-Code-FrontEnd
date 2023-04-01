import React from "react";
import "./allForms.css"


export default function BusForm() {
    return (
        <div className="form-div">
                <h1>Business</h1>
                
                <form className="per--form">
                    <label>Company Name</label>
                        <input type="text" placeholder="Your company here"/>
                    <label>Job Designation</label>
                        <input type="text" placeholder="Your job designation here"/>
                    <label>Address</label>
                        <input type="text" placeholder="Your address here"/>
                    <label>Website</label>
                        <input type="text" placeholder="Paste link here"/>
                </form>
        </div>
    )
}