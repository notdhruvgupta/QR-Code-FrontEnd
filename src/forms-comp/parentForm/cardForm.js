import React, {useState} from "react";
// import logo from "../images/progress.png"
// import logo2 from "../images/tick.png"
import BusForm from "../forms/busForm";
import NoteForm from "../forms/noteForm";
import PerForm from "../forms/perForm";
import SocForm from "../forms/socForm"
import "./cardForm.css"
import StepComp from "./stepComp";
import mutliStepProgressArray from "../data/mutliStepProgressArray.js"

export default function CardForm() {
    const [formPage, setFormPage] = useState(1)

    function addFormPage() {
        if(formPage < 4){
            setFormPage(prevPage => prevPage + 1)
        }
    }
    function minFormPage() {
        if(formPage > 1){
            setFormPage(prevPage => prevPage - 1)
        }
    }
    
    const [isTick, setIsTick] = useState(mutliStepProgressArray)
    
    // function toggle(id) {
    //     setIsTick( prevState => {
    //         return prevState.map((step) => {
    //             // return step.id === id ? {...step, on: !step.on} : step
    //         })
    //     })
    // }

    const steps = isTick.map( step => (
        <StepComp
            setName={step.name}
            id={step.id}
            key={step.id}
            ticked={step.on}
        />
    ))

    return(
        <div className="contain--two">
            <div className="left--div">
                {steps}
            </div>
            <div className="right--div">
                {formPage === 1 && <PerForm />}
                {formPage === 2 && <BusForm />}
                {formPage === 3 && <SocForm />}
                {formPage === 4 && <NoteForm />}

                {/* <BusForm /> */}
            </div>
            <div className="btn--div">
                <button className="next-btn" onClick={minFormPage}>Back</button>
                <button className="next-btn" onClick={addFormPage}>Next</button>
            </div>
        </div>
    )
}