import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear()
    return (
        <footer className='bg-[#071036]'>
            <div className="footer p-10  text-neutral-content">
                <div>
                    <span className="footer-title">Shopping with us</span>
                    <Link to='/' className="link link-hover">Making payments</Link>
                    <Link to='/' className="link link-hover">Delivery options</Link>
                    <Link to='/' className="link link-hover">Buyer Protection</Link>
                </div>
                <div>
                    <span className="footer-title">Customer service</span>
                    <Link to='/' className="link link-hover">Customer service</Link>
                    <Link to='/' className="link link-hover">Transaction Services Agreement</Link>
                    <Link to='/' className="link link-hover">Take our feedback survey</Link>
                </div>
                <div>
                    <span className="footer-title">Collaborate with us</span>
                    <Link to='/' className="link link-hover">Partnerships</Link>
                    <Link to='/' className="link link-hover">Affiliate program</Link>
                </div>

            </div>
            <p className='text-white text-center pb-4'>Copyright © {year} - All right reserved @ Keeyan Manufacturing</p>
        </footer>
    );
};

export default Footer;