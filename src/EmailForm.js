import axios from 'axios';
import React, { useState } from 'react';
import './EmailForm.css';

const EmailForm = () => {
    const [email, setEmail] = useState("");
    const [submitStatus, setSubmitStatus] = useState(false);
    const [responseMessage, setResponseMessage] = useState("Congratulations! You're now on the waitlist 🎉");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    
    const handleSubmit = e => {
        e.preventDefault();
        setLoading(true);
        setSubmitStatus(false);
        let scriptURL = "https://script.google.com/macros/s/AKfycbxvkx8Ftkjm0Mk3TZRZjyxIjAjiSG5y7IRk0wdD6jV-gJn9a6w/exec" 
        let formData = new FormData();    //formdata object
        formData.append('email', email);
        const config = {     
            headers: { 'content-type': 'multipart/form-data' }
        }
        axios.post(scriptURL, formData, config)
            .then(response => {
                setLoading(false)
                setSubmitStatus(true)
                setSuccess(true)
                console.log(response);
            })
            .catch(error => {
                setSubmitStatus(true)
                setResponseMessage("Oops, that's my bad, try again please 💩")
                console.log(error);
            });
      }
    
  
    return (
        <div className="form-container">
            {loading && 
            <div class="sk-circle">
                <div class="sk-circle1 sk-child"></div>
                <div class="sk-circle2 sk-child"></div>
                <div class="sk-circle3 sk-child"></div>
                <div class="sk-circle4 sk-child"></div>
                <div class="sk-circle5 sk-child"></div>
                <div class="sk-circle6 sk-child"></div>
                <div class="sk-circle7 sk-child"></div>
                <div class="sk-circle8 sk-child"></div>
                <div class="sk-circle9 sk-child"></div>
                <div class="sk-circle10 sk-child"></div>
                <div class="sk-circle11 sk-child"></div>
                <div class="sk-circle12 sk-child"></div>
            </div>
            }
            <h2 className="form-title">Join the iOS Beta Waitlist</h2>
            <form className="form">
                <div className="input">
                    <input
                            type="email" 
                            name="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="input-text"
                            placeholder="hermann.ebbinghaus@barmen.de"
                    />
                </div>
                    <a 
                        onClick={handleSubmit} 
                        type="submit"
                        value="Submit"
                        className="submit-button"
                    >
                        Submit
                    </a>
            </form>
                <div className={submitStatus ? "submit-status" : "submit-status hidden" }>
                    <p className={success ? "submit-status-text success" : "submit-status-text failure" }>{responseMessage}</p>
                </div>
            
        </div>
    );
}

export default EmailForm;