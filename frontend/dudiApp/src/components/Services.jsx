import React from 'react'
import './Services.css'
const Services = () => {
    return (
        <div className='services'>
            <div className='container d-flex justify-content-left p-1'>
                <span className='d-inline-block border rounded bg-danger text-white' style={{ height: '20px', lineHeight: '1px' }}>Services</span>

                <p className='ms-5 fs-5'>At our digital marketing agency, we offer a range of services to <br /> help businesses grow and succeed online. These services include</p>
            </div>
            <div className="grid-container container">
                <div className="item item1">
                    <div className='content'> 
                        <div className='left'>
                            <h3>Computer <br />Progamming</h3>
                            <i class="fa fa-arrow-right"></i>
                            <a className='mx-2' href='#'>Learn more</a>
                        </div>
                        <img src="/src/img/img2.jpg" alt="" />
                    </div>
                </div>
                <div className="item item2">
                    <div className='content'>
                        <div className='left'>
                            <h3>Computer <br />Website Design</h3>
                            <i class="fa fa-arrow-right"></i>
                            <a className='mx-2' href='#'>Learn more</a>
                        </div>
                        <img src="/src/img/img3.jpg" alt="" />
                    </div>
                </div>
                <div className="item item3">
                    <div className='content'>
                        <div className='left'>
                            <h3>Computer <br />Progamming Mobile</h3>
                            <i class="fa fa-arrow-right"></i>
                            <a className='mx-2' href='#'>Learn more</a>
                        </div>
                        <img src="/src/img/img2.jpg" alt="" />
                    </div>
                </div>
                <div className="item item4">
                    <div className='content'>
                        <div className='left'>
                            <h3>Computer <br />Consulting & Solution Implementation</h3>
                            <i class="fa fa-arrow-right"></i>
                            <a className='mx-2' href='#'>Learn more</a>
                        </div>
                        <img src="/src/img/img5.jpg" alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Services