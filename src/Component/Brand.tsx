import React, { ReactNode } from 'react';
import Items6 from '../Assets/Items  (1).png';
import Items1 from '../Assets/Items (1).png';
import Items3 from '../Assets/Items (3).png';
import Items4 from '../Assets/Items (4).png';
import Items2 from '../Assets/Items (2).png';
import Best1 from '../Assets/Best (1).png';
import Best4 from '../Assets/Best (4).png';
import Accessories2 from '../Assets/accessories (2).png';
import Accessories4 from '../Assets/accessories (4).png';
import Accessories10 from '../Assets/accessories (10).png';
import Best6 from '../Assets/Best (6).png';
import Laptop from '../Assets/laptop (6).png';

export default class Brand extends React.Component <any> {

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

<section className="brand">
<div className="container reveal fade-right brand-page">
    <h3>Choose you brand!</h3>
<div className="wrapper-brand">
    <div className="row">
        <div className="img-brand-wrapper">
        <div className="col-1">
            <div className="img-brand zoom-effect">
                <div className="image-card">
                <img src={Best6} alt="" />
            </div>
            </div>
        </div>
        <div className="col-1">
            <div className="brand-txt">
            <h3>Staples</h3>
            <p>"Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
</div>         
<div className="img-brand-wrapper">
    <div className="col-1">
        <div className="img-brand zoom-effect">
            <div className="image-card">
            <img src={Accessories10} alt="" />
        </div>
        </div>
    </div>
    <div className="col-1">
        <div className="brand-txt">
            <h3>Staples</h3>
            <p>"Lorem ipsum dolor sit amet.</p>
        </div>
    </div>
</div>
    <div className="img-brand-wrapper">
        <div className="col-1">
            <div className="img-brand zoom-effect">
                <div className="image-card">
                <img src={Accessories4} alt="" />
            </div>
            </div>
        </div>
        <div className="col-1">
            <div className="brand-txt">
                <h3>Staples</h3>
                <p>"Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
    </div>
    <div className="img-brand-wrapper">
        <div className="col-1">
            <div className="img-brand zoom-effect">
                <div className="image-card">
                <img src={Accessories2} alt="" />
            </div>
            </div>
        </div>
        <div className="col-1">
            <div className="brand-txt">
                <h3>Staples</h3>
                <p>"Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
    </div>

    </div>

<div className="row">
    <div className="img-brand-wrapper">
        <div className="col-1">
            <div className="img-brand zoom-effect">
                <div className="image-card">
                <img src={Best4} alt="" />
            </div>
            </div>
        </div>
        <div className="col-1">
            <div className="brand-txt">
                <h3>Staples</h3>
                <p>"Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
    </div>
    <div className="img-brand-wrapper">
        <div className="col-1">
            <div className="img-brand zoom-effect">
                <div className="image-card">
                <img src={Best6} alt="" />
            </div>
            </div>
        </div>
        <div className="col-1">
            <div className="brand-txt">
                <h3>Staples</h3>
                <p>"Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
    </div>
    <div className="img-brand-wrapper">
        <div className="col-1">
            <div className="img-brand zoom-effect">
                <div className="image-card">
                <img src={Accessories10} alt="" />
            </div>
            </div>
        </div>
        <div className="col-1">
            <div className="brand-txt">
                <h3>Staples</h3>
                <p>"Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
    </div>
    <div className="img-brand-wrapper">
        <div className="col-1">
            <div className="img-brand zoom-effect">
                <div className="image-card">
                <img src={Accessories2} alt="" />
            </div>
            </div>
        </div>
        <div className="col-1">
            <div className="brand-txt">
                <h3>Staples</h3>
                <p>"Lorem ipsum dolor sit amet.</p>
            </div>
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