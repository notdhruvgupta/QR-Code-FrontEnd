import React from "react";
import "./allForms.css"

export default function SocForm() {
    return (
        <div className="form-div">
                <h1>Socials</h1>
                
                <form className="per--form">
                    <label>Twitter</label>
                        <input type="text" placeholder="Paste link here"/>
                    <label>LinkedIn</label>
                        <input type="text" placeholder="Paste link here"/>
                    <label>Github</label>
                        <input type="text" placeholder="Paste link here"/>
                    <label>Instagram</label>
                        <input type="text" placeholder="Paste link here"/>
                    <label>Facebook</label>
                        <input type="text" placeholder="Paste link here"/>
                </form>
        </div>
    )
}