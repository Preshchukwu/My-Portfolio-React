import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div className="footer" id='footer'>
       <div className="footerContentsContainer">
            <div className="footerTopContentsContainer">
                <div className="footerLeftContentsContainer">
                    <div className="myNameContainer">
                        <h3>PRECIOUS NWACHUKWU</h3>
                    </div>

                    <div className="myDescriptionContainer">
                        <p>Dedicated Frontend Web Developer specializing in crafting compelling and user-friendly interfaces for websites and web applications. Committed to enhancing overall product success through seamless and intuitive frontend experiences.</p>
                    </div>
                </div>

                <div className="footerRightContentsContainer">
                    <div className="footerSocialTextContainer">
                        <h3>SOCIALS</h3>
                    </div>

                    <div className="footerLinkImagesContainer">
                        <Link to={'mailto:preciousnwachukwu.c@gmail.com'} className="socialLink" target="_blank">
                            <img src="public/basil_gmail-solid.svg" alt=""/>
                        </Link>
                        {/* <a href="mailto:preciousnwachukwu.c@gmail.com" className="socialLink" target="_blank">
                            <img src="./Images/basil_gmail-solid.svg" alt=""/>
                        </a> */}

                        <Link to={'https://github.com/Preshchukwu'} className="socialLink" target="_blank">
                            <img src="public/ant-design_github-outlined.svg" alt="" className="socialIcon"/>
                        </Link>

                        {/* <a href="https://github.com/Preshchukwu" className="socialLink" target="_blank">
                            <img className="socialIcon" src="./Images/ant-design_github-outlined.svg" alt=""/>
                        </a> */}

                        <Link to={'https://www.linkedin.com/in/preciouschukwu/'} className="socialLink" target="_blank">
                            <img src="public/bi_linkedin.svg" alt="" />
                        </Link>

                        {/* <a href="https://www.linkedin.com/in/preciouschukwu/" className="socialLink" target="_blank">
                            <img src="./Images/bi_linkedin.svg" alt=""/>
                        </a> */}

                        <Link to={'https://twitter.com/Presh_chukwu'} className="socialLink" target="_blank">
                            <img src="public/pajamas_twitter.svg" alt="" />
                        </Link>

                        {/* <a href="https://twitter.com/Presh_chukwu" className="socialLink" target="_blank">
                            <img src="./Images/pajamas_twitter.svg" alt=""/>
                        </a> */}

                        <Link to={'https://www.behance.net/preciouschukwu'} className="socialLink" target="_blank">
                            <img src="public/mage_behance.svg" alt="" />
                        </Link>

                        {/* <a href="https://www.behance.net/preciouschukwu" className="socialLink" target="_blank">
                            <img src="./Images/mage_behance.svg" alt=""/>
                        </a> */}
                    </div>
                </div>
            </div>

            <div className="footerBottomContentsContainer">
                <div className="footerLineContainer">
                    <hr className="line"/>
                </div>

                <div className="copyRightContainer">
                    <p>Copywrite 2024. Made by Precious Nwachukwu</p>
                </div>
            </div>
        </div>
    </div>

    <section className="footerTwo" >
        <div className="footerContentsContainer">
            <div className="footerTopContentsContainer">
                <div className="footerRightContentsContainer">
                    <div className="footerSocialTextContainer">
                        <h3>SOCIALS</h3>
                    </div>

                    <div className="footerLinkImagesContainer">
                        <a href="mailto:preciousnwachukwu.c@gmail.com" className="socialLink" target="_blank">
                            <img src="public/basil_gmail-solid.svg" alt=""/>
                        </a>

                        <a href="https://github.com/Preshchukwu" className="socialLink" target="_blank">
                            <img className="socialIcon" src="public/ant-design_github-outlined.svg" alt=""/>
                        </a>

                        <a href="https://www.linkedin.com/in/preciouschukwu/" className="socialLink" target="_blank">
                            <img src="public/bi_linkedin.svg" alt=""/>
                        </a>

                        <a href="https://twitter.com/Presh_chukwu" className="socialLink" target="_blank">
                            <img src="public/pajamas_twitter.svg" alt=""/>
                        </a>

                        <a href="https://www.behance.net/preciouschukwu" className="socialLink" target="_blank">
                            <img src="public/mage_behance.svg" alt=""/>
                        </a>
                    </div>
                </div>

                <div className="footerLeftContentsContainer">
                    <div className="myNameContainer">
                        <h3>PRECIOUS NWACHUKWU</h3>
                    </div>

                    <div className="myDescriptionContainer">
                        <p>Dedicated Frontend Web Developer specializing in crafting compelling and user-friendly interfaces for websites and web applications. Committed to enhancing overall product success through seamless and intuitive frontend experiences.</p>
                    </div>
                </div>
            </div>

            <div className="footerBottomContentsContainer">
                <div className="footerLineContainer">
                    <hr className="line"/>
                </div>

                <div className="copyRightContainer">
                    <p>Copywrite 2024. Made by Precious Nwachukwu</p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Footer
