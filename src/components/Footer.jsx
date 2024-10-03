// Footer.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../css/Footer.css';

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4 mt-5">
            <Container>
                <Row>
                    <Col md={3} className="mb-3">
                        <h5>Company Info</h5>
                        <p>
                            Your Local Store offers a wide range of high-quality electronics at affordable prices. We are committed to customer satisfaction and trust.
                        </p>
                    </Col>
                    <Col md={3} className="mb-3">
                        <h5>Customer Service</h5>
                        <ul className="list-unstyled">
                            <li><a href="#orders" className="text-light">Order Tracking</a></li>
                            <li><a href="#shipping" className="text-light">Shipping & Delivery</a></li>
                            <li><a href="#returns" className="text-light">Returns & Refunds</a></li>
                            <li><a href="#faq" className="text-light">FAQs</a></li>
                        </ul>
                    </Col>
                    <Col md={3} className="mb-3">
                        <h5>Contact Us</h5>
                        <p><FontAwesomeIcon icon={faPhone} /> +1 234 567 890</p>
                        <p><FontAwesomeIcon icon={faEnvelope} /> support@localstore.com</p>
                    </Col>
                    <Col md={3} className="mb-3">
                        <h5>Follow Us</h5>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light me-3">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light me-3">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <p className="mt-3">&copy; 2024 Your Local Store. All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
