import React, { ReactNode } from 'react';
import Items6 from '../Assets/Items  (1).png';
import Item1 from '../Assets/Items (6).png';
import Item3 from '../Assets/Items  (3).png';
import Item4 from '../Assets/Items  (4).png';
import Items from '../Assets/Items  (2).png';
import Item5 from '../Assets/Items  (5).png';


export default class Category extends React.Component <any> {

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
<section className="category">
    <div className="container shop-category">
<h3>Shop our top categories</h3>
<div className="shop-category-grid">
    <div className="category-img-wrapper">
        <div className="zoom-effect">
            <div className="image-card">
        <img src={Item1} alt="" />
    </div>
    </div>
    <span className="items">Hand bags</span>
</div>
<div className="category-img-wrapper">
    <div className="zoom-effect">
    <div className="image-card">
    <img src={Items} alt="" />
</div>
</div>
    <span className="items">Sneakers</span>
</div>
<div className="category-img-wrapper">
    <div className="zoom-effect">
        <div className="image-card">
    <img src={Item3} alt="" />
</div>
</div>
    <span className="items">Books</span>
</div>
<div className="category-img-wrapper">
    <div className="zoom-effect">
        <div className="image-card">
    <img src={Item4} alt="" />
</div>
</div>
    <span className="items">tech</span>
</div>
<div className="category-img-wrapper">
    <div className="zoom-effect">
        <div className="image-card">
    <img src={Item5} alt="" />
</div>
</div>
    <span className="items">travel</span>
</div>
<div className="category-img-wrapper">
    <div className="zoom-effect">
        <div className="image-card">
    <img src={Items6} alt="" />
</div>
</div>
    <span className="items">Furniture</span>
</div>
</div>
    </div>
</section>

    </>
   );
  }
}