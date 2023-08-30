import React, { Fragment, ReactNode } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from './Component/Index';
import NotFound from './Pages/NotFound';
import Shop from './Component/Shop';
import "./Css/App.scss";
import Category from './Component/Category';
import Deals from './Component/Deals';
import Brand from './Component/Brand';
import Bonus from './Component/Bonus';
import Product from './Component/Product';
import Sale from './Component/Sale';
import Service from './Component/Service';

class App extends React.Component <any> {

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
    <div className="App">
    <BrowserRouter>
    <Fragment>
    <Routes>
   <Route path="/" element={<Index />}></Route>
   <Route path="/index" element={<Index />}></Route>
    <Route path="/shop" element={<Shop />}></Route>
    <Route path="/shop" element={<Category />}></Route>
    <Route path="/shop" element={<Brand />}></Route>
    <Route path="/shop" element={<Bonus />}></Route>
    <Route path="/shop" element={<Deals />}></Route>
    <Route path="/shop" element={<Product />}></Route>
    <Route path="/shop" element={<Sale />}></Route>
    <Route path="/shop" element={<Service />}></Route>
   <Route path="*" element={<NotFound />}></Route>
        </Routes>
        </Fragment>
   </BrowserRouter>
   </div>
    </>
   );
  }
}

export default App;