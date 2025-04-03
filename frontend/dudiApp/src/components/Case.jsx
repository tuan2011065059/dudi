import React from "react";
import "./Case.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const cards = [
  {
    text: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  },
  {
    text: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
  },
  {
    text: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
  },
];
const Case = () => {
  return (
    <div id="case" className="case my-5">
      <div className='container d-flex justify-content-left'>
      <span className='d-inline-block border rounded bg-danger text-white' style={{ height: '20px', lineHeight: '1px' }}>Case Studies</span>
        <p className='ms-5 fs-5'>Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies</p>
      </div>
      <div className="case-container container my-5">
        {cards.map((card, index) => (
          <div key={index} className="case-card">
            <p>{card.text}</p>
            <a href="#">
              Learn more <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Case