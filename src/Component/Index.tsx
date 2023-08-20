import React, { ReactNode } from 'react';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import Shop from '../Component/Shop';
import Homepage from '../Component/Homepage';
import Category from '../Component/Category';
import Brand from '../Component/Brand';
import Bonus from '../Component/Bonus';
import Deals from '../Component/Deals';
import Store from '../Component/Store';
import Product from '../Component/Product';
import Sale from '../Component/Sale';
import Service from '../Component/Service';


class Index extends React.Component <any> {

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
    
    <Header />

    <Homepage />
    <Category />
    <Shop />
    <Brand />
    <Bonus />
    <Deals />
    <Product />
    <Store />
    <Sale />
    <Service />
    <Footer />
   
    </>
   );
  }
}

export default Index;