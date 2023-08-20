import React, { ReactNode } from 'react';
import Accessories13 from '../Assets/accessories (13).png';
import Best1 from '../Assets/accessories (9).png';
import Best2 from '../Assets/accessories (6).png';
import Best3 from '../Assets/Best (3).png';
import Best5 from '../Assets/Best (5).png';
import Laptop from '../Assets/laptop (6).png';
import Laptop1 from '../Assets/laptop (1).png';
import Laptop2 from '../Assets/laptop (2).png';
import Laptop4 from '../Assets/laptop (4).png';


export default class Bonus extends React.Component <any> {

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


<section className="bonus">
<div className="container bonus-page">
    <h3>Get Up to 50% Off </h3>
    <div className="bonus-wrapper-grid">
        <div>
            <div className="bonus-txt-1">
        <div className="name">
        <h3>Save <br />
            <span><sup>$</sup>29</span>
        </h3>
        </div>
        <div className="info">
            Explore Our Furniture & Home Furnishing Range
        </div>
        </div>
        <div className="zoom-effect">
            <div className="image-card">
        <img src={Laptop1} alt="" />
    </div>
    </div>
        </div>
        <div>
            <div className="bonus-txt-2">
            <div className="name">
                <h3>Save <br />
                <span><sup>$</sup>100</span></h3>
            </div>
            <div className="info">
                Explore Our Furniture & Home Furnishing Range
            </div>
            </div>
            <div className="zoom-effect">
                <div className="image-card">
            <img src={Laptop2} alt="" />
        </div>
        </div>
        </div>
        <div>
            <div className="bonus-txt-3">
            <div className="name">
                <h3>Save <br />
                    <span><sup>$</sup>67</span>
                </h3>
            </div>
            <div className="info">
            Explore Our Furniture & Home Furnishing Range
            </div>
            </div>
            <div className="zoom-effect">
                <div className="image-card">
            <img src={Accessories13} alt="" />
        </div>
        </div>
        </div>
        <div>
            <div className="bonus-txt-4">
            <div className="name">
                <h3>Save <br />
                    <span><sup>$</sup>29</span>
                </h3>
            </div>
            <div className="info">
            Explore Our Furniture & Home Furnishing Range
            </div>
            </div>
            <div className="zoom-effect">
                <div className="image-card">
            <img src={Laptop4} alt="" />
        </div>
        </div>
        </div>
    </div>
</div>
</section>

<section className="shop-page">
    <div className="container">
    <div className="shop-category">
        <h3>weekly products for you!</h3>
        <div className="best-grid">
            <div className="best-img-wrapper">
                <div className="zoom-effect">
                    <div className="image-card">
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
<section className="cash">
<div className="cash-page">
    <div className="cash-wrapper">
        <div className="cash-txt">
            <h3>Get 5% Cash Back On $200</h3>
            <p>Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.
        </p>
            <div className="cash-btn">
                <a href="#">Learn More</a>
            </div>
        </div>
    </div>
</div>
</section>

    </>
   );
  }
}