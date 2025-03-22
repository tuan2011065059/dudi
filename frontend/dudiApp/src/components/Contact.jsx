import { useState } from "react";
import "./Contact.css"; // Import file CSS
import anh from "../img/anh.jpg";
const Contact = () => {
    const [selectedOption, setSelectedOption] = useState("say-hi");

    return (
        <div className="contact mt-5">
            <div className="contact-container container">
                <div className="contact-form">
                    {/* Radio Button Group */}
                    <div className="radio-group">
                        <label className="custom-radio">
                            <input
                                type="radio"
                                name="contactType"
                                value="say-hi"
                                checked={selectedOption === "say-hi"}
                                onChange={() => setSelectedOption("say-hi")}
                            />
                            <span className="radio-circle"></span>
                            Say Hi
                        </label>
                        <label className="custom-radio">
                            <input
                                type="radio"
                                name="contactType"
                                value="get-quote"
                                checked={selectedOption === "get-quote"}
                                onChange={() => setSelectedOption("get-quote")}
                            />
                            <span className="radio-circle"></span>
                            Get a Quote
                        </label>
                    </div>

                    {/* Form */}
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" placeholder="Name" />
                    </div>

                    <div className="form-group">
                        <label>Email*</label>
                        <input type="email" placeholder="Email" required />
                    </div>

                    <div className="form-group">
                        <label>Message*</label>
                        <textarea placeholder="Message" required></textarea>
                    </div>

                    <button className="submit-button">Send Message</button>
                </div>

                {/* Hình trang trí */}
                <div className="contact-image">
                    <img src={anh} alt="Decorative" />

                </div>
            </div>
        </div>
    );
};

export default Contact;
