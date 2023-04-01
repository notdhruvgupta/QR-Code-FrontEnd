import React, { useState } from "react";
import formDataset from "../data/formDataset";
import "./allForms.css"

export default function PerForm() {
    const [formData, setFormData] = useState(formDataset)

    function handleChange(event) {
        setFormData(prevData => {
            return {
                ...prevData,
                [event.target.name]: event.target.value
            }
        })
    }
    console.log(formData)

    return (
        <div className="form-div">
                <h1>Personal Information</h1>
                
                <form className="per--form">
                    <label>Full Name</label>
                        <input 
                            name="fullName"
                            value={formData.fullName}
                            type="text" 
                            placeholder="Enter you name"
                            onChange={handleChange}
                        />
                    <label>Email</label>
                        <input 
                            name="email"
                            value={formData.email}
                            type="text" 
                            placeholder="example@email.com"
                            onChange={handleChange}
                        />
                    <label>Contact</label>
                        <input 
                            name="contact"
                            value={formData.contact}
                            type="text" 
                            placeholder="123-456-7890"
                            onChange={handleChange}
                        />
                    <label>Image</label>
                        <input 
                            type="text" 
                            placeholder="Choose Image"
                        />
                    <label>Date of Birth</label>
                        <input 
                            type="date" 
                            placeholder="Choose Image"
                        />
                </form>
        </div>
    )
}