// import React from 'react'
// import './Make.css'
// const Make = () => {

//     gsap.registerPlugin(ScrollTrigger);

//     useEffect(() => {
//         gsap.from('.make', { 
//             opacity: 0, 
//             y: 50, 
//             duration: 1, 
//             stagger: 0.3, 
//             scrollTrigger: {
//                 trigger: '.make', 
//                 start: 'top 80%', 
//                 toggleActions: 'play none none none' 
//             }
//         });
//     }, []);

//   return (
//     <div className='make my-5'>
//         <div className='container'>
//             <div className='content'>
//                 <div className='left'>
//                     <h3>Let's make things happen </h3>
//                     <p>Contact us today to learn more about how our digital <br /> marketing services can help your business grow and <br /> succeed online. </p>
//                     <button className='btn btn-dark'>Get your free proposal</button>
//                 </div>
//                 <div className='right'>
//                     <img src="/src/img/img4.jpg" alt="" />
//                 </div>
//             </div>
//         </div>
//     </div>
//   ) 
// }

// export default Make



import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Make.css';

gsap.registerPlugin(ScrollTrigger);

const Make = () => {
    useEffect(() => {
        gsap.from('.make', { 
            opacity: 0, 
            y: 50, 
            duration: 3.5, 
            scrollTrigger: {
                trigger: '.make', 
                start: 'top 80%', 
                toggleActions: 'play none none none' 
            }
        });
    }, []);

    return (
        <div className='make my-5'>
            <div className='container'>
                <div className='content'>
                    <div className='left'>
                        <h3>Let's make things happen</h3>
                        <p>Contact us today to learn more about how our digital <br /> 
                        marketing services can help your business grow and <br /> succeed online.</p>
                        <button className='btn btn-dark'>Get your free proposal</button>
                    </div>
                    <div className='right'>
                        <img src="/src/img/img4.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    ); 
};

export default Make;
