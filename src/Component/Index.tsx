import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import Shop from '../Component/Shop';
import Homepage from '../Component/Homepage';
import Category from '../Component/Category';
import Brand from './Brand';
import Bonus from './Bonus';

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
    <Brand/>
    <Bonus/>

    <Footer />
   
    </>
   );
  }
}

export default Index;