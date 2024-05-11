import React from 'react'
import '../../styles/Footer/footer.css'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <>
     <div className="navya_footer">
            <h2 className="nav1_h1">HARLEY<span>-</span><span>-</span>DAVIDSON</h2>
            <div className="inner_div">
                <div className="wrap_div">
                    <div>
                        <h3>LEARN TO RIDE</h3>
                        {/* Replace anchor tag with Link */}
                        <Link to="/motorcycle-training">Motorcycle Training</Link>
                    </div>
                    <div>
                        <h3>MOTORCYCLE SERVICES</h3>
                        {/* Replace anchor tags with Link components */}
                        <Link to="/authorized-service">Authorized Service</Link>
                        <Link to="/owners-manuals">Owner's Manuals</Link>
                        <Link to="/maintenance-schedules">Maintenance Schedules</Link>
                        <Link to="/software-updates">Software Updates</Link>
                        <Link to="/roadside-assistance">Roadside Assistance</Link>
                    </div>
                    <div>
                    <h3>ABOUT US</h3>
        <Link to="">Our Company</Link>

        <Link to="">Careers</Link>

        <Link to="">Investors</Link>

        <Link to="">Sustainability</Link>

        <Link to="">Become a Dealer</Link>

        <Link to="">Factory Tours</Link>
                    <Link to="">Museum</Link>
                </div>
                <div>
                    <h3>CUSTOMER SUPPORT</h3>
                    <Link to="">Contact Us</Link>
                    <Link to="">Offers</Link>
                    
                </div>
                <div>
                    <h3>FINANCING</h3>
                    <Link to="">Motorcycle Financing</Link>
                   
                    <Link to="">Apply for Financing</Link>
                </div>
                </div>
            </div>
            <div className="inner_div2">
                <div className="inner_div21">
                    <pre>Sitemap    |   Disclaimers</pre>
                    <pre style={{ marginTop: '-13px' }}>Terms of Use   |   Privacy Policy   |   Cookie Policy   |   Manage Cookie Preferences</pre>
                </div>
            </div>
            <div className="inner_div3">
                <div className="dropdown">
                    <select name="countries" id="countries">
                        <option value="">Select Country</option>
                        <option value="India">India - Hindi</option>
                        <option value="USA">USA - English</option>
                    </select>
                </div>
                <div className="div2">
                    <span>©2024 H-D or its affiliates. HARLEY-DAVIDSON, HARLEY, H-D, and the Bar and Shield Logo are among
                        the trademarks of H-D U.S.A., LLC. Third-party trademarks are the property of their respective
                        owners.
                    </span>
                </div>
                <div className="navya_icon">
                    <div><img src="https://assets.nobroker.in/nb-new/public/Common/social/facebook.svg" alt="" /></div>
                    <div><img src="https://assets.nobroker.in/nb-new/public/Common/social/twitter.svg" alt="" /></div>
                    <div><img src="https://assets.nobroker.in/nb-new/public/Common/social/instagram.svg" alt="" /></div>
                    <div><img src="https://assets.nobroker.in/nb-new/public/Common/social/linkedin.svg" alt="" /></div>
                </div>
            </div>
        </div>
    </>
  )
}
