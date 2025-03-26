import React from 'react'
import './Foodter.css'
const Foodter = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='content'>
                    <ul>
                        <li>
                            <h3>Contact Us</h3>
                        </li>
                        <li className='d-flex'>
                            <i class="fa fa-home"></i>
                            <p> DUDI SOFTWARE TECHNOLOGY CO., LTD</p>
                        </li>
                        <li className='d-flex'>
                            <i class="fa fa-map-marker-alt"></i>
                            <p>232 Nguyen Thi Minh Khai, Vo Thi Sau Ward, <br /> District 3, Ho Chi Minh City, Vietnam</p>
                        </li>
                        <li className='d-flex'>
                            <i class="fa fa-phone"></i>
                            <p>0318776997</p>
                        </li>
                        <li className='d-flex'>
                            <i class="fa fa-envelope"></i>
                            <p>dudisoftware@gmail.com</p>
                        </li>
                        <li className='d-flex'>
                            <input class="form-control w-75" placeholder='Email' type="text" />
                            <button className='btn btn-danger'>Subscribe</button>
                        </li>
                        <li className="mxh">
                            <i className="fab fa-facebook" />
                            <i className="fab fa-linkedin-in" />
                            <i className="fab fa-twitter" />
                        </li>

                    </ul>
                    <ul className='mobile'>
                        <li>
                            <h3>Service</h3>
                        </li>
                        <li>
                            <p>Computer Programming</p>
                        </li>
                        <li>
                            <p>Wholesale of Computers, <br /> Peripherals and Software</p>
                        </li>
                        <li>
                            <p>Software Publishing</p>
                        </li>
                        <li>
                            <p>Specialized Design Activities</p>
                        </li>
                    </ul>
                    <ul className='mobile'>
                        <li>
                            <h3>Address</h3>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.548889611719!2d106.68725507480491!3d10.774380389374315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3b69674b85%3A0xb155180a3cf86135!2zMjMyIMSQLiBOZ3V54buFbiBUaOG7iyBNaW5oIEtoYWksIFBoxrDhu51uZyA2LCBRdeG6rW4gMywgSOG7kyBDaMOtIE1pbmggNzAwMDAwLCBWaeG7h3QgTmFt!5e1!3m2!1svi!2s!4v1742670635507!5m2!1svi!2s"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Foodter