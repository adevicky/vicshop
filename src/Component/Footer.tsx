import React, { ReactNode } from 'react';
import Accessories3 from '../Assets/accessories (3).png';
import Accessories14 from '../Assets/accessories (14).png';
import Accessories15 from '../Assets/accessories (15).png';
import Accessories16 from '../Assets/accessories (16).png';
import Accessories17 from '../Assets/accessories (17).png';
import Accessories18 from '../Assets/accessories (18).png';
import Accessories19 from '../Assets/accessories (19).png';
import Accessories20 from '../Assets/accessories (20).png';

export default class Footer extends React.Component <any> {

constructor(props){
super(props);
this.state = {
message: '',
}
}

componentDidMount(){

}

render(): ReactNode {
  return (
    <>
   <section id="footer">
<div className="container">
    <div className="footer-wrapper">
        <div className="footer-grid">
            <div>
                <ul>
                <h3>For designers</h3>
                <li><a href="#">Go Pro!</a></li>
                <li><a href="#">Explore design work</a></li>
                <li><a href="">Design blog</a></li>
                <li><a href="#">Overtime podcast</a></li>
                <li><a href="#">Playoffs</a></li>
                <li><a href="#">Code of conduct</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <h3>Hire designers</h3>
                    <li><a href="#">Post a job opening</a> </li>
                    <li><a href="">Post a freelance project</a></li>
                    <li><a href="#">Search for designers</a></li>
                    <li><a href="#"></a>Brands</li>
                    <li><a href="#">Advertise with us</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <h3>Company</h3>
                    <li><a href="#">Advertise with us</a></li>
                    <li><a href="#">Careers</a> </li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Media kit</a></li>
                    <li><a href="#">Testimonials</a></li>
                    <li><a href="#">API</a></li>
                    <li><a href="#">Terms of service</a></li>
                    <li><a href="#">Privacy policy</a></li>
                    <li><a href="#">Cookie policy</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <h3>Directories</h3>
                    <li><a href="#">Design jobs</a></li>
                    <li><a href="#">Designers for hire</a></li>
                    <li><a href="#">Freelance designers for hire</a></li>
                    <li><a href="#">Tags</a></li>
                    <li><a href="#">Places</a></li>
                    <li><a href="#">Design assets</a></li>
                    <li><a href="#">Creative Market</a></li>
                    <li><a href="#">Fontspring</a></li>
                    <li><a href="#">Font Squirrel</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
<hr />
<footer className="footer-design">
    <div className="container social-links">
        <a href="https://www.github.com/adevicky" target="_blank" title="Adenuga Victoria-Github profile"><i
                className="fab fa-github"></i></a>
        <a href="https://www.twitter.com/vicdev01" target="_blank" title="Adenuga Victoria-twitter account">
            <i className="fab fa-twitter"></i></a>
        <a href="https://www.facebook.com/adenugaoluwapelumi" target="_blank" title="Adenuga-Victoria-facebook account">
            <i className="fab fa-facebook"></i></a>
    </div>
    <small className="copyright">Copyright &copy; 2023 All Rights Reserved by <a href="#">VicCodes</a></small>
<div className="payments">
    <div className="deal-grid">
        <div className="deal-wrapper-payment">
            <div><a href="#"><img src={Accessories3} alt="" /></a></div>
            <div><a href="#"><img src={Accessories14} alt="" /></a></div>
            <div><a href="#"><img src={Accessories15} alt="" /></a></div>
            <div><a href="#"><img src={Accessories16} alt="" /></a></div>
            <div><a href="#"><img src={Accessories17} alt="" /></a></div>
            <div><a href="#"><img src={Accessories18} alt="" /></a></div>
            <div><a href="#"><img src={Accessories19} alt="" /></a></div>
            <div><a href="#"><img src={Accessories20} alt="" /></a></div>
        </div>
    </div>
</div>
</footer>
</section>
    </>
   );
  }
}