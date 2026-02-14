import Carousel from 'react-bootstrap/Carousel';
import { CarouselItem } from 'react-bootstrap';
import TestimonialImg1 from '../assets/images/Testimonial1.jfif';
import TestimonialImg2 from '../assets/images/Testimonial2.jfif';
import TestimonialImg3 from '../assets/images/Testimonial3.jfif';
import TestimonialImg4 from '../assets/images/Testimonial4.jfif';

import "../Css/Testimonial-Section.css"

function Testimonial(){

    return(
        <>
            <div className="TestimonialSection">
            <h1>Testimonial</h1>   
            <Carousel className='TestimonialContainer' interval={3000} pause="hover">
            {/* Testimonial-1 */}
            <Carousel.Item className='Testimonial-1'>
                <div className="Testimonial-img">
                    <img src={TestimonialImg1} alt="" />
                </div>
                <div className="testimonial-1Content">
                    <h3>John Wick</h3>
                    <p>"NutriPro has completely shifted my perspective on fitness tracking. The seamless integration of the BMI tool with personalized meal suggestions is a game changer I haven’t seen elsewhere. It’s not just a website; it’s a digital coach that keeps me accountable every single day."</p>
                </div>
            </Carousel.Item>

            {/* Testimonial-2 */}
            <Carousel.Item className='Testimonial-2'>
                <div className="Testimonial-img">
                    <img src={TestimonialImg2} alt="" />
                </div>
                <div className="testimonial-2Content">
                    <h3>Emma Watson</h3>
                    <p>"As someone who values both aesthetics and functionality, this platform is a breath of fresh air. The dark purple UI is stunning, but it’s the accuracy of the data that really impressed me. I’ve recommended it to my entire yoga community in London for its precision and ease of use."</p>
                </div>

            </Carousel.Item>

            {/* Testimonial-3 */}
            <Carousel.Item className='Testimonial-3'>
                <div className="Testimonial-img">
                    <img src={TestimonialImg3} alt="" />
                </div>
                <div className="testimonial-3Content">
                    <h3>Alex Rivera</h3>
                    <p>"I’ve tried dozens of fitness apps over the years, but most are too cluttered. This platform keeps it simple yet powerful, focusing on what actually matters for muscle recovery and fat loss. The responsive design means I can track my stats at the gym or at home without any lag."</p>
                </div>
            </Carousel.Item>

            {/* Testimonial-4 */}
            <Carousel.Item className='Testimonial-4'>
                <div className="Testimonial-img">
                    <img src={TestimonialImg4} alt="" />
                </div>
                <div className="testimonial-4Content">
                    <h3>Sophia Müller</h3>
                    <p>"The consistency I’ve achieved using this tool is remarkable. The intuitive layout makes it incredibly easy to navigate through complex health metrics without feeling overwhelmed. It is rare to find a free resource that offers this much professional value to the global fitness community."</p>
                </div>
            </Carousel.Item>
            </Carousel>
            </div>
        </>
    )

}

export default Testimonial
