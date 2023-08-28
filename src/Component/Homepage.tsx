import React, { ReactNode } from 'react';
import HeadSet4 from '../Assets/HeadSet_4.jpg';
import HeadSet3 from '../Assets/HeadSet_3.jpg';
import HeadSet2 from '../Assets/HeadSet_2.jpg';
import Lady4 from '../Assets/lady_3.jpg';

export default class Homepage extends React.Component <any> {

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
   <section className="homepage-page">
    <div className="homepage">  
<div className="homepage-text reveal fade-left">
    <h1>Shopping and Department Store.</h1>
    <p>Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.</p>
    <div className="cash-btn">
    <a href="#">Learn More</a>
</div>
</div>
</div>
</section>

    </>
   );
  }
}