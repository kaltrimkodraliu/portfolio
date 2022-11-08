import "./FormStyles.css"
import React from "react"

const Form = () => {
    return (
        <div className="form">
            <form action="https://formspree.io/f/xvoydgqj"
                method="POST">
                <label>Your Name</label>
                <input type="text"></input>
                <label>Email</label>
                <input type="email" name="email"></input>
                <label>Message</label>
                <textarea rows="6" placeholder="Type your message here" name="message"></textarea>
                <button className="btn" type="submit">Submit</button>
            </form>
        </div>
    )
};
export default Form;