import React, { ReactNode } from 'react';
import Laptop5 from '../Assets/laptop (5).png';
import Laptop10 from '../Assets/laptop (10).png';


export default class Service extends React.Component <any> {

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
<section id="service">
    <div className="container reveal fade-bottom   service-page">
        <h3>Services To Help You Shop </h3>
        <div className="service-wrapper-grid">
            <div>
                <div className="service-txt">
                    <div className="name">
                        <h3>Frequently Asked Question</h3>
                    </div>
                    <div className="info">
                       Updates on safe Shopping in Stores
                    </div>
                </div>
                <div className="zoom-effect">
                    <div className="image-card">
                        <img src={Laptop5} alt="" />
                    </div>
                </div>
            </div>
            <div>
                <div className="service-txt">
                    <div className="name">
                        <h3>Online Payment Process</h3>
                    </div>
                    <div className="info">
                        Updates on safe Shopping in Stores
                    </div>
                </div>
                <div className="zoom-effect">
                    <div className="image-card">
                         <img src={Laptop10} alt="" />
                    </div>
                </div>
            </div>
            <div>
                <div className="service-txt">
                    <div className="name">
                        <h3>Frequently Asked Question</h3>
                    </div>
                    <div className="info">
                        Updates on safe Shopping in Stores
                    </div>
                </div>
                <div className="zoom-effect">
                    <div className="image-card">
                         <img src={Laptop5} alt="" />
                    </div>
                </div>
            </div>
        
            </div>
    </div>
</section>
<hr />
    </>
   );
  }
}