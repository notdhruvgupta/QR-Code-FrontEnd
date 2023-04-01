import React from "react";
import "./allForms.css"

export default function NoteForm() {
    return (
        <div className="form-div">
                <h1>Notes</h1>
                
                <form className="per--form">
                    <label>Title</label>
                        <input type="text" placeholder="Add a title"/>
                    <label>Note</label>
                        <textarea placeholder="Add Information"/>
                   
                </form>
        </div>
    )
}