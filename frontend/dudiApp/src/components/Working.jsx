import React, { useState } from "react";
import './Working.css'
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const steps = [
    {
        id: 1,
        title: "Consultation",
        content:
            "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
        id: 2,
        title: "Research and Strategy Development",
        content:
            "We conduct in-depth research and develop a tailored marketing strategy to meet your business objectives.",
    },
    {
        id: 3,
        title: "Implementation",
        content:
            "We execute the strategy with precision, using the latest tools and technologies to ensure success.",
    },
    {
        id: 4,
        title: "Monitoring and Optimization",
        content:
            "We continuously monitor performance and make adjustments to optimize your results over time.",
    },
    {
        id: 5,
        title: "Reporting and Communication ",
        content:
            "We continuously monitor performance and make adjustments to optimize your results over time.",
    },
    {
        id: 6,
        title: "Continual Improvement",
        content:
            "We continuously monitor performance and make adjustments to optimize your results over time.",
    },

];

const Working = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            <div className='container d-flex justify-content-left my-5'>
                <span className='b-block border rounded p-3 bg-danger text-white'>Our Working Process </span>
                <p className='ms-5 fs-5'>Step-by-Step Guide to Achieving Your Business Goals</p>
            </div>
            <div className="accordion">
                {steps.map((step, index) => (
                    <div
                        key={step.id}
                        className={`accordion-item ${activeIndex === index ? "active" : ""}`}
                        onClick={() => toggleAccordion(index)}
                    >
                        <div className="accordion-header">
                            <span className="step-number">{`0${step.id}`}</span>
                            <span className="step-title">{step.title}</span>
                            <div className="icon">
                                <FontAwesomeIcon icon={activeIndex === index ? faMinus : faPlus} />
                            </div>
                        </div>
                        {activeIndex === index && (
                            <div className="accordion-content">{step.content}</div>
                        )}
                    </div>
                ))}
            </div>
        </>
    );

    return (
        <div className='working'>
            <div className='container d-flex justify-content-left'>
                <span className='b-block border rounded p-3 bg-danger text-white'>Our Working Process </span>
                <p className='ms-5 fs-5'>Step-by-Step Guide to Achieving Your Business Goals</p>
                <div className='content'>
                    <div className='item'></div>
                </div>
            </div>
        </div>
    )
}

export default Working