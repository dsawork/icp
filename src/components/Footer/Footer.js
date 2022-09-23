import { useState } from 'react';
import logo from '../../assets/Logo.png';
import './Footer.scss';

const Footer = () => {
    const [ inputEmail, setInputEmail ] = useState('');

    const sendEmail = (email) => {
        setInputEmail('');
    }

    return (
        <div className='footer-container'>
            <div className='footer-container-links'>
                <div className='links-docs'>
                    <div className='links-docs-logo'>
                        <img src={logo} alt='logo' />
                    </div>
                    <div className='sent content-1'>Legal documents</div>
                    <div className='sent content-1'>Data protection notice</div>
                    <div className='sent content-1'>Privacy policy</div>
                    <div className='sent content-1'>AML policy</div>
                </div>

                <div className='links-other'>
                    <div className='links-other-relation'>
                        <div className='sent content-1'>support@getinvest.com</div>
                        <div className='sent content-1'>+1 11111 111 111</div>
                        <div className='sent content-1'>Facebook</div>
                        <div className='sent content-1'>Instagram</div>
                        <div className='sent content-1'>Twitter</div>
                        <div className='sent content-1'>Linkedin</div>
                    </div>

                    <div className='links-other-info'>
                        <div className='sent content-1'>Start Trading</div>
                        <div className='sent content-1'>Trading Platforms</div>
                        <div className='sent content-1'>Edu & Tools</div>
                        <div className='sent content-1'>About Us</div>
                        <div className='sent content-1'>Partners</div>
                        <div className='sent content-1'>Support</div>
                    </div>
                </div>
            </div>

            <div className='footer-container-footer'>
                <div className='footer-container-footer-notice'>
                    <div className='notice-text content-1'>
                        Do you want to be noticed about the news?
                    </div>

                    <div className='notice-send content-1'>
                        <div className='notice-send-input'>
                            <input
                                className='input content-1'
                                type='text'
                                placeholder='Your email address'
                                value={inputEmail}
                                onChange={(event) => setInputEmail(event.target.value)}
                            />
                        </div>
                        <div 
                            className='notice-send-button'
                            onClick={() => sendEmail(inputEmail)}
                        >
                            Send email
                        </div>
                    </div>
                </div>
                
                <div className='footer-container-footer-containers'>
                    <div className='restriction'>
                        <div className='restriction-header content-6'>
                            Regional Restrictions
                        </div>
                        <div className='restriction-desc content-6'>
                            We do not offer our services to residents of certain jurisdictions such as North Korea, Japan, the United States, or other regions. For more information, please refer to our FAQ page. The information on this site and the products and services offered are not intended for distribution to any person in any country or jurisdiction where such distribution or use would be contrary to local law or regulation. While the Authority has granted a securities or derivatives investment business license to the Licensee, the Authority does not endorse or vouch for the merits of the products offered by the Licensee.
                        </div>
                    </div>

                    <div className='warning'>
                        <div className='warning-header content-6'>
                            Risk Warning
                        </div>
                        <div className='warning-desc content-6'>
                            Trading derivatives carries significant risks. It is unsuitable for all investors, and if you are a professional client, you could lose substantially more than your initial investment. When acquiring our derivative products, you have no entitlement, right, or obligation to the underlying financial assets. Past performance indicates future performance, and tax laws are subject to change. The website's information is general and doesn't consider your personal objectives, financial circumstances, or needs. Accordingly, before acting on the advice, you should consider whether the advice is suitable for you regarding your objectives, financial situation, and needs. We encourage you to seek independent advice if necessary. Please read our legal documents and ensure that you fully understand the risks before you make any trading decisions.
                        </div>

                        <div className='copyright content-1'>
                            Copyright © 2022 ICP iNvest. All rights reserved.
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;
