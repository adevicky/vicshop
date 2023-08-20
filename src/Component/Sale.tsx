import React, { ReactNode } from 'react';
import Accessories4 from '../Assets/accessories (4).png';
import Accessories7 from '../Assets/accessories (7).png';
import Accessories10 from '../Assets/accessories (10).png';
import Accessories11 from '../Assets/accessories (11).png';
import Laptop from '../Assets/laptop (3).png';
import Icon from '../Assets/Icon.png';



export default class Sale extends React.Component <any> {

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
     <section className="selling-page">
    <div className="container selling-store">
        <h3>best selling store </h3>
        <div className="selling-store-grid">
            <div className="selling-img-wrapper">
                <div className="image-card sell-img">
                    <img src={Accessories7} alt="" />
                </div>
                <span className="store-brand"><img src={Accessories4} alt="" /></span> 
           <div className="brand-txt">
                <h3>Staples</h3>
                <p className="p1"> Bag. Perfume</p>
                <p><img src={Icon}alt="" /> &nbsp; Delivery with in 24 hours</p>
            </div>
            </div>
            <div className="selling-img-wrapper">
                <div className="image-card sell-img">
                    <img src={Accessories7} alt="" />
                </div>
                <span className="store-brand"><img src={Accessories10} alt="" /></span>
            <div className="brand-txt">
                <h3>Staples</h3>
                <p className="p1"> Bag . Perfume</p>
                <p><img src={Icon}alt="" /> &nbsp; Delivery with in 24 hours</p>
            </div>
            </div>
            <div className="selling-img-wrapper">
                <div className="image-card sell-img">
                    <img src={Accessories11} alt="" />
                </div>
                <span className="store-brand"><img src={Accessories4} alt="" /></span>
            <div className="brand-txt">
                <h3>Staples</h3>
                <p className="p1"> Bag. Perfume</p>
                <p><img src={Icon}alt="" /> &nbsp; Delivery with in 24 hours</p>
            </div>
            </div>
            <div className="selling-img-wrapper">
                <div className="image-card sell-img">
                    <img src={Laptop} alt="" />
                </div>
                <span className="store-brand"><img src={Accessories4} alt="" /></span>
                <div className="brand-txt">
                    <h3>Staples</h3>
                    <p className="p1"> Bag. Perfume</p>
                    <p><img src={Icon}alt="" /> &nbsp; Delivery with in 24 hours</p>
                </div>
            </div>
        </div>
    </div>
</section>
    </>
   );
  }
}