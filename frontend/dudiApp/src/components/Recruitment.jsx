import React from 'react'
import './Recruitment.css'
const Recruitment = () => {
    return (
        <div className='recruitment my-5'>
            <div className='container d-flex justify-content-left'>
                <span className='b-block border rounded p-3 bg-danger text-white'>Case Studies</span>
            </div>
            <div className="grid-container container">
                <div className="item item1">
                    <div className='content'>
                        <div className='left'>
                            <h3>Senior Javascript Developer </h3>
                            <p>DuDi is hiring a Senior JavaScript Developer to design and implement user interfaces, collaborate with Back-End developers, and lead a team in building and enhancing mission-critical applications.</p>
                            <i class="fa fa-arrow-right"></i>
                            <a className='mx-2' href='#'>Learn more</a>
                        </div>

                    </div>
                </div>
                <div className="item item2">
                    <div className='content'>
                        <div className='left'>
                            <h3>Senior WordPress Developer </h3>
                            <p>We seek a talented WordPress developer to help expand our global reach. As a digital-first team, we're always enhancing our online presence. With your expertise, you'll build fast, beautiful, and functional websites while collaborating and thinking creatively. </p>
                            <i class="fa fa-arrow-right"></i>
                            <a className='mx-2' href='#'>Learn more</a>
                        </div>

                    </div>
                </div>
                <div className="item item3">
                    <div className='content'>
                        <div className='left'>
                            <h3>Account Director </h3>
                            <p>We seek an ambitious Account Director to lead our account team, oversee operations, and set an example. Your role will focus on delivering exceptional client experiences and driving customer satisfaction. </p>
                            <i class="fa fa-arrow-right"></i>
                            <a className='mx-2' href='#'>Learn more</a>
                        </div>

                    </div>
                </div>
                <div className="item item4">
                    <div className='content'>
                        <div className='left'>
                            <h3>UI/UX Designer </h3>
                            <p>As a Senior UI/UX Designer, you will lead the company's Ul strategy, manage a design team, and provide mentorship. Working with the UX team, you'll foster a design-thinking culture and drive innovative user experiences. </p>
                            <i class="fa fa-arrow-right"></i>
                            <a className='mx-2' href='#'>Learn more</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recruitment