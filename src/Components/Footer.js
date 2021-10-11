import React from 'react'
import { Button } from './Button'
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>

                </p>
                <p className='footer-subscription-text'>
                    <div className="input-areas">
                        <form>
                            <input type="email" name="email" placeholder="Your Email" className="footer-input" />
                            <Button byttonStyle='bitn-online'>
                                Sub
                            </Button>
                        </form>
                    </div>
                </p>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Contact Information</h2>
                        <Link to='/'>campbellmatt646@gmail.com</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='social-icons'>
                        <Link to='/' className='social-icon-link linkedin'>
                            LinkedIn <i className='fab fa-linkedin' />
                        </Link>
                    </div>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            GitHub <i className='fab fa-github' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
