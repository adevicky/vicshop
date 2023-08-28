import React, { ReactNode } from 'react';
import Accessories13 from '../Assets/accessories (13).png';
import Bg from '../Assets/bg.png';



export default class Product extends React.Component <any> {

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

<section className="trending">
        <div className="container reveal fade-left trending-page">
            <h3>Trending products For You! </h3>
            <div className="trend-grid">
                <div className="trend-wrapper ">
                    <img src={Accessories13} alt="" />
                    <div className="trend-txt">
                    <div className="trend-name">
                       <h3>Furniture Village</h3> 
                    </div>
                    <div className="trend-info">
                        Updates on safe Shopping in Stores
                    </div>
                    </div>
                </div>
                <div className="trend-wrapper">
                    <img src={Bg} alt="" />
                    <div className="trend-txt">
                    <div className="trend-name">
                       <h3>Furniture Village</h3> 
                    </div>
                    <div className="trend-info">
                        Updates on safe Shopping in Stores
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