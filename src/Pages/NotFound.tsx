import React, { ReactNode } from 'react';

class NotFound extends React.Component <any> {

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
<h3>404 NotFound</h3>
   </div>
    </>
   );
  }
}

export default NotFound;