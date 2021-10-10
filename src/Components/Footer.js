import React from 'react'
import { Button } from './Button'

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
        </div>
    )
}

export default Footer
