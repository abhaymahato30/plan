import Plan from './Plan'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, {Component} from "react";

 class App extends Component {
  state = {
    items: [],
    text:""
  }
  handleadd = e =>{
   if ( this.state.text !== "") {
      const items = [...this.state.items, this.state.text];
      this.setState({items: items,text:""});
  }
}
  handlechange = e => {
    this.setState({text: e.target.value})
  }
  handledelete = id => {
    console.log("deleted",id);
    const Olditems =[...this.state.items]
    console.log("Olditems",Olditems);
    const items = Olditems.filter((element,i)=> {
      return i !== id
    })
    this.setState({items:items});
    console.log("newitems,items");
  }
      render(){
        return (
          <div className="container-fluid my-5">
            <div className="row">
              <div className="col-sm-6 mx-auto  text-white shadow-lg p-3">
                <h2 className="text-center">TODAY'S PLAN</h2>
                <div className="row">
                  <div className="col-9">
                    <input type="text"  className='form-control' name="" id="" placeholder='WRITE YOUR PLAN HERE' value={this
                    .state.text} on onChange={this.handlechange}/>
                  </div>
                  <div className="col-2">
                    <button className='btn btn-warning px-5
                    font-weight-bold' onClick={this.handleadd}>Add</button>
                  </div>
                  <div className="container-fluid">
                    <ul className='list-unsttyled row m-s'>
                    {
                  this.state.items.map((value, i)=>{
                    return <Plan key={i} id={i} value={value} 
                    sendData={this.handledelete}/>
                  })
                }
              
                  </ul> 
                  
                
                  
                </div>
                </div>
                
              </div>

            </div>

          </div>

        )
      }
 }
 export default App;