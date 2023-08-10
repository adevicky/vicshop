import React, { Fragment, ReactNode } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from './Component/Index';
import NotFound from './Pages/NotFound';
import Shop from './Component/Shop';
import "./Css/App.scss";

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