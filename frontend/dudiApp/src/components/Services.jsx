import React from 'react'
import './Services.css'
const Services = () => {
    return (
        <div className='services'>
            <div className='container d-flex justify-content-left'>
                <span className='b-block border rounded p-3 bg-danger text-white'>Services</span>
                <p className='ms-5 fs-5'>At our digital marketing agency, we offer a range of services to <br /> help businesses grow and succeed online. These services include</p>
            </div>
            <div className="grid-container container">
                <div className="item item1">
                    <div className='content'>
                        <div className='left'>
                            <h3>Computer <br />Progamming</h3>
                            <i class="icomoon icon-arrow-up-right-2"></i>
                            <span>Learn more</span>
                        </div>
                        <img src="/src/img/img2.jpg" alt="" />
                    </div>
                </div>
                <div className="item item2">
                    <div className='content'>
                        <div className='left'>
                            <h3>Computer <br />Website Design</h3>
                            <i class="icomoon icon-arrow-up-right-2"></i>
                            <span>Learn more</span>
                        </div>
                        <img src="/src/img/img3.jpg" alt="" />
                    </div>
                </div>
                <div className="item item3">
                    <div className='content'>
                        <div className='left'>
                            <h3>Computer <br />Progamming Mobile</h3>
                            <i class="icomoon icon-arrow-up-right-2"></i>
                            <span>Learn more</span>
                        </div>
                        <img src="/src/img/img2.jpg" alt="" />
                    </div>
                </div>
                <div className="item item4">
                    <div className='content'>
                        <div className='left'>
                            <h3>Computer <br />Consulting & Solution Implementation</h3>
                            <i class="icomoon icon-arrow-up-right-2"></i>
                            <span>Learn more</span>
                        </div>
                        <img src="/src/img/img4.jpg" alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Services