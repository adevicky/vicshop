import React, { ReactNode } from 'react';
import Best1 from '../Assets/watch-min.png';
import Best2 from '../Assets/Best (1).png';
import Best3 from '../Assets/laptop (9).png';
import Best5 from '../Assets/Items (9).png';
import Cabin from '../Assets/cabin-min.png';
import Laptop from '../Assets/laptop (6).png';

export default class Shop extends React.Component <any> {

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
<section className="shop-page">
    <div className="container reveal fade-bottom">
    <div className="shop-category">
        <h3>todays best deals for you!</h3>
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
                        <div className="best-img-wrapper">
                <div className="zoom-effect">
                    <div className="image-card">
                        <img src={Cabin} alt="" />
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