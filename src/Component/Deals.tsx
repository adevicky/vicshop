import React, { ReactNode } from 'react';
import Accessories12 from '../Assets/accessories (12).png';
import Accessories8 from '../Assets/accessories (8).png';
import Best1 from '../Assets/laptop (7).png';
import Best2 from '../Assets/Best (2).png';
import Best3 from '../Assets/laptop (8).png';
import Best5 from '../Assets/accessories (1).png';
import Item9 from '../Assets/Items (9).png';
import Item8 from '../Assets/laptop (6).png';
import MiniWatch from '../Assets/instax mini 11-min (1).png';
import Laptop from '../Assets/laptop (6).png';
import Visacard from '../Assets/_visa card-min.png';


export default class Deals extends React.Component <any> {

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
<section className="deals-page">
<div className="container deals">
    <h3>todays best deals for you!</h3>
    <div className="deal-grid">
        <div className="deal-wrapper">
        <div><a href="">Furniture</a></div>
        <div><a href="">Toys</a></div>
        <div><a href="">Beauty</a></div>
        <div><a href="">Education</a></div>
        <div><a href="">Fashion</a></div>
        <div><a href="">Sneakers</a></div>
        <div><a href="">Fitness</a></div>
        <div><a href="">Gadgets</a></div>
        </div>
        </div>
    </div>   
    </section>
    <section className="shop">
    <div className="container shop-category"> 
        <div className="deal-grid-wrapper">
            <div className="deal-img-wrapper">
                <div className="zoom-effect">
                    <div className="image-card">
                        <img src={Accessories8} alt="Water Bottle" />
                    </div>
                </div>
                <span className="fav"><i className="fa fa-heart"></i></span>
                <div className="best-txt">
                    <h3>homepod mini &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            className="best-left"><sup>$</sup>239<sup>.00</sup></span></h3>
                    <p>Table with air purifier, stained veneer/black</p>
                    <div className="star">
                        <span className="rating-star"><i className="fa fa-star"></i></span>
                        <span className="rating-star"><i className="fa fa-star"></i></span>
                        <span className="rating-star"><i className="fa fa-star"></i></span>
                        <span className="rating-star"><i className="fa fa-star"></i></span>
                        <span className="rating-star"><i className="fa fa-star"></i></span> &nbsp;(121)
                    </div>
                    <div className="best-btn"><a href="#">Add to Cart</a></div>
                </div>
            </div>
            <div className="deal-img-wrapper">
                <div className="zoom-effect">
                    <div className="image-card">
                        <img src={Accessories12} alt="Snickers" />
                    </div>
                </div>
                <span className="fav"><i className="fa fa-heart"></i></span>
                <div className="best-txt">
                    <h3>homepod mini &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            className="best-left"><sup>$</sup>239<sup>.00</sup></span>
                    </h3>
                    <p>Table with air purifier, stained veneer/black</p>
                    <div className="star">
                        <span className="rating-star"><i className="fa fa-star"></i></span>
                        <span className="rating-star"><i className="fa fa-star"></i></span>
                        <span className="rating-star"><i className="fa fa-star"></i></span>
                        <span className="rating-star"><i className="fa fa-star"></i></span>
                        <span className="rating-star"><i className="fa fa-star"></i></span> &nbsp;(121)
                    </div>
                    <div className="best-btn"><a href="#">Add to Cart</a></div>
                </div>
            </div>
            <div className="deal-img-wrapper">
                <div className="zoom-effect">
                    <div className="image-card">
                        <img src={Item9} alt="Headphones" />
                    </div>
                </div>
                <span className="fav"><i className="fa fa-heart"></i></span>
                <div className="best-txt">
                    <h3>homepod mini &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            className="best-left"><sup>$</sup>239<sup>.00</sup></span>
                    </h3>
                    <p>Table with air purifier, stained veneer/black</p>
                    <div className="star">
                        <span className="rating-star"><i className="fa fa-star"></i></span>
                        <span className="rating-star"><i className="fa fa-star"></i></span>
                        <span className="rating-star"><i className="fa fa-star"></i></span>
                        <span className="rating-star"><i className="fa fa-star"></i></span>
                        <span className="rating-star"><i className="fa fa-star"></i></span> &nbsp;(121)
                    </div>
                    <div className="best-btn"><a href="#">Add to Cart</a></div>
                </div>
            </div>
            <div className="deal-img-wrapper">
                <div className="zoom-effect">
                    <div className="image-card">
                        <img src={Item8} alt="Laptop " />
                    </div>
                </div>
                <span className="fav"><i className="fa fa-heart"></i></span>
                <div className="best-txt">
                    <h3>homepod mini &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            className="best-left"><sup>$</sup>239<sup>.00</sup></span>
                    </h3>
                    <p>Table with air purifier, stained veneer/black</p>
                    <div className="star">
                        <span className="rating-star"><i className="fa fa-star"></i></span>
                        <span className="rating-star"><i className="fa fa-star"></i></span>
                        <span className="rating-star"><i className="fa fa-star"></i></span>
                        <span className="rating-star"><i className="fa fa-star"></i></span>
                        <span className="rating-star"><i className="fa fa-star"></i></span> &nbsp;(121)
                    </div>
                    <div className="best-btn"><a href="#">Add to Cart</a></div>
                </div>
            </div>
        <div className="deal-img-wrapper">
                <div className="zoom-effect">
                    <div className="image-card">
                        <img src={MiniWatch} alt="MiniWatch" />
                    </div>
                </div>
                <span className="fav"><i className="fa fa-heart"></i></span>
                <div className="best-txt">
                    <h3>homepod mini &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            className="best-left"><sup>$</sup>239<sup>.00</sup></span>
                    </h3>
                    <p>Table with air purifier, stained veneer/black</p>
                    <div className="star">
                        <span className="rating-star"><i className="fa fa-star"></i></span>
                        <span className="rating-star"><i className="fa fa-star"></i></span>
                        <span className="rating-star"><i className="fa fa-star"></i></span>
                        <span className="rating-star"><i className="fa fa-star"></i></span>
                        <span className="rating-star"><i className="fa fa-star"></i></span> &nbsp;(121)
                    </div>
                    <div className="best-btn"><a href="#">Add to Cart</a></div>
                </div>
            </div>
        </div>
        </div>
</section>
<section id="get-section-page">
    <div className="get-page">
            <div className="get-grid">
                <div>
                <div className="cash-txt">
                    <h3>Get 5% Cash Back</h3>
                    <p>on Shopcart.com</p>
                    <div className="cash-btn">
                        <a href="#">Learn More</a>
                    </div>
                </div>
                </div>
                <div>
                    <img src={Visacard} alt="" />
                </div>
            </div>
    </div>
        </section>
     <section className="shop-page">
    <div className="container">
    <div className="shop-category">
        <h3>Most Selling Products</h3>
        <div className="best-grid">
            <div className="best-img-wrapper">
                <div className="zoom-effect">
                    <div className="image-card slide">
                        <img src={Best1} alt="" />
                    </div>
                </div>
                <span className="fav"><i className="fa fa-heart"></i></span>
                <div className="best-txt">
                    <h3>homepod mini &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            className="best-left"><sup>$</sup>239<sup>.00</sup></span></h3>
                    <p>Table with air purifier, stained veneer/black</p>
                    <div className="star">
                        <span className="rating-star"><i className="fa fa-star"></i></span>
                        <span className="rating-star"><i className="fa fa-star"></i></span>
                        <span className="rating-star"><i className="fa fa-star"></i></span>
                        <span className="rating-star"><i className="fa fa-star"></i></span>
                        <span className="rating-star"><i className="fa fa-star"></i></span> &nbsp;(121)
                    </div>
                    <div className="best-btn"><a href="#">Add to Cart</a></div>
                </div>
            </div>
            <div className="best-img-wrapper">
                <div className="zoom-effect">
                    <div className="image-card">
                        <img src={Best2} alt="" />
                    </div>
                </div>
                <span className="fav"><i className="fa fa-heart"></i></span>
                <div className="best-txt">
                    <h3>homepod mini &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            className="best-left"><sup>$</sup>239<sup>.00</sup></span>
                    </h3>
                    <p>Table with air purifier, stained veneer/black</p>
                    <div className="star">
                        <span className="rating-star"><i className="fa fa-star"></i></span>
                        <span className="rating-star"><i className="fa fa-star"></i></span>
                        <span className="rating-star"><i className="fa fa-star"></i></span>
                        <span className="rating-star"><i className="fa fa-star"></i></span>
                        <span className="rating-star"><i className="fa fa-star"></i></span> &nbsp;(121)
                    </div>
                    <div className="best-btn"><a href="#">Add to Cart</a></div>
                </div>
            </div>
            <div className="best-img-wrapper">
                <div className="zoom-effect">
                    <div className="image-card">
                        <img src={Best3} alt="" />
                    </div>
                </div>
                <span className="fav"><i className="fa fa-heart"></i></span>
                <div className="best-txt">
                    <h3>homepod mini &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            className="best-left"><sup>$</sup>239<sup>.00</sup></span>
                    </h3>
                    <p>Table with air purifier, stained veneer/black</p>
                    <div className="star">
                        <span className="rating-star"><i className="fa fa-star"></i></span>
                        <span className="rating-star"><i className="fa fa-star"></i></span>
                        <span className="rating-star"><i className="fa fa-star"></i></span>
                        <span className="rating-star"><i className="fa fa-star"></i></span>
                        <span className="rating-star"><i className="fa fa-star"></i></span> &nbsp;(121)
                    </div>
                    <div className="best-btn"><a href="#">Add to Cart</a></div>
                </div>
            </div>
            <div className="best-img-wrapper">
                <div className="zoom-effect">
                    <div className="image-card">
                        <img src={Best5} alt="" />
                    </div>
                </div>
                <span className="fav"><i className="fa fa-heart"></i></span>
                <div className="best-txt">
                    <h3>homepod mini &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            className="best-left"><sup>$</sup>239<sup>.00</sup></span>
                    </h3>
                    <p>Table with air purifier, stained veneer/black</p>
                    <div className="star">
                        <span className="rating-star"><i className="fa fa-star"></i></span>
                        <span className="rating-star"><i className="fa fa-star"></i></span>
                        <span className="rating-star"><i className="fa fa-star"></i></span>
                        <span className="rating-star"><i className="fa fa-star"></i></span>
                        <span className="rating-star"><i className="fa fa-star"></i></span> &nbsp;(121)
                    </div>
                    <div className="best-btn"><a href="#">Add to Cart</a></div>
                </div>
            </div>
            <div className="best-img-wrapper">
                <div className="zoom-effect">
                    <div className="image-card">
                        <img src={Laptop} alt="" />
                    </div>
                </div>
                <span className="fav"><i className="fa fa-heart"></i></span>
                <div className="best-txt">
                    <h3>homepod mini &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            className="best-left"><sup>$</sup>239<sup>.00</sup></span></h3>
                    <p>Table with air purifier, stained veneer/black</p>
                    <div className="star">
                        <span className="rating-star"><i className="fa fa-star"></i></span>
                        <span className="rating-star"><i className="fa fa-star"></i></span>
                        <span className="rating-star"><i className="fa fa-star"></i></span>
                        <span className="rating-star"><i className="fa fa-star"></i></span>
                        <span className="rating-star"><i className="fa fa-star"></i></span> &nbsp;(121)
                    </div>
                    <div className="best-btn"><a href="#">Add to Cart</a></div>
                </div>
            </div>
        </div>
        </div>
    </div>
</section>   
    </>
   );
  }
}