import React from 'react';
import { Accordion } from 'react-bootstrap';
import Aboutimg from "../../../Banner/about-01.png"
import Aboutimg2 from "../../../Banner/about2.png"
import Testomunial from "../../../Banner/testomunial.JPG"
const About = () => {
    return (
        <div>
            <h1 className="text-primary mt-3"><i class="fab fa-angellist me-3"></i>About Us</h1>
            <hr className="mx-auto w-25 border border-1 border-primary" />
            {/* Top About */}
            <div className="container row">
                {/* Left Top */}
                <div className="col-md-7 col-12">
                    <h3 className="mt-4">ABOUT OUR TRAVEL GURU</h3>
                    <p className="mt-4 text-dark">Why is travel website important?
                        Best travel agency websites are a great source of information for travelers.The most significant advantage of a travel website is that it gives you a chance to present tour packages and sell them from your own platform. Due to an easy-to-manage website, you can post manage, and publish tour packages.The World Travel Guide (WTG) is the flagship digital consumer brand within the Columbus Travel Media portfolio. A comprehensive guide to the world’s best travel destinations, its print heritage stretches back 30 years, with the online portal reaching its 19-year anniversary in 2018. Available in English, German, French and Spanish versions, the WTG provides detailed and accurate travel content designed to inspire global travellers.</p>
                </div>
                {/* Right Top */}
                <div className="col-md-5 col-12">
                    <img className="img-fluid ms-4" src={Aboutimg} alt="" />
                </div>
            </div>
            {/* What we give */}
            <div className="row container">
                {/* Left Side */}
                <div className="col-md-6 col-12 p-3">
                    <h5 className="text-primary">What We Give</h5>
                    <h2 className="mb-4">Best Gift From Us</h2>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header> <i class="fas fa-dice-four text-info  me-2"></i> Tour Gide</Accordion.Header>
                            <Accordion.Body>
                            Tour guides ensure that itineraries are met and that customers are being informed in an entertaining manner the location they are touring. They are also responsible for ensuring the safety of the group and ensuring that tour groups remain together. Tour guides are employed by tour companies, resorts and attractions.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header><i class="fas fa-mitten text-info  me-2"></i>Provide specifics</Accordion.Header>
                            <Accordion.Body>
                            When online users ran on your site, they want immediate access to information. If they don't find what they're looking for, they'll bounce to another site. Online users do not read pages word for word. Overall, bullet points are a really effective tool to help you organize and highlight key information on your website.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header> <i class="fas fa-hand-holding-usd text-info  me-2"></i>Reailabe Price</Accordion.Header>
                            <Accordion.Body>
                            Breakfast at the hotel, you will spend the day venturing around beautiful Florence, the “Cradle of Renaissance, where, with the help of Michelangelo, Italian art reached its pinnacle. Based on etruscan-roman origins, the city flourished in the Middle Ages as a free “Comune” and was further refined during the Renaissance. You will be fascinated by the uncountable monuments, churches and buildings as Santa Maria del Fiore, more commonly referred to as the Duomo. On your visit, you will be amazed by its magnificent dome built by Filippo Brunelleschi. Cross a small piazza to see the “Campanile” tower (partly designed by Giotto) and the Baptistery, with its bronze doors where Michelangelo imagined the “Gates of Paradise.” In the heart of the city, you will see Piazza della Signoria, Palazzo della Signoria (also known as Palazzo Vecchio), and the Basilica of Santa Croce. Lunch in a typical Tu
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header><i class="fas fa-hotel text-info  me-2"></i>Five Star Hotel</Accordion.Header>
                            <Accordion.Body>
                            When online users ran on your site, they want immediate access to information. If they don't find what they're looking for, they'll bounce to another site. Online users do not read pages word for word. Overall, bullet points are a really effective tool to help you organize and highlight key information on your website.cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                             est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header><i class="fas fa-plane-departure text-info  me-2"></i>Air Tricket</Accordion.Header>
                            <Accordion.Body>
                            Breakfast at the hotel, you will spend the day venturing around beautiful Florence, the “Cradle of Renaissance, where, with the help of Michelangelo, Italian art reached its pinnacle. Based on etruscan-roman origins, the city flourished in the Middle Ages as a free “Comune” and was further refined during the Renaissance. You will be fascinated by the uncountable monuments, churches and buildings as Santa Maria del Fiore, more commonly referred to as the Duomo. On your visit, you will be amazed by its magnificent dome built by Filippo Brunelleschi. Cross a small piazza to see the “Campanile” tower (partly designed by Giotto) and the Baptistery, with its bronze doors where Michelangelo imagined the “Gates of Paradise.” In the heart of the city, you will see Piazza della Signoria, Palazzo della Signoria (also known as Palazzo Vecchio), and the Basilica of Santa Croce. Lunch in a typical Tu
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                {/* Right Side */}
                <div className="col-md-6 col-12 ps-5">
                    <img className="img-fluid" src={Aboutimg2} alt="" />
                </div>
            </div>
            
            {/* Testumunial */}
            <div>
                <img className="img-fluid" src={Testomunial} alt="" />
            </div>
        </div>
    );
};

export default About;