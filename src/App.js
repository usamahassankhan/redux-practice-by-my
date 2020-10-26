
import React from 'react';
import './App.css';
import {connect}  from 'react-redux';
import {anotherName} from './actions/myaction';
class  App extends React.Component {
  
 render(){

 
  console.log(this.props.myname);
  console.log(this.props.mywish)
  const mywished =this.props.mywish.map(item=>{
    return <h1 key={Math.random()}>{item}</h1>
  })
  return (
  
    <div className="App">
 <h1>this is redux</h1>
 <h1>this is {this.props.myname}</h1>
 <h1>{mywished}</h1>
 
  <button onClick={()=>{this.props.changeName()}}>chnage it</button>
  </div>
  );
}
}
const mapStateToProps=(state)=>{
return {
  myname:state.name,
  mywish:state.wish
}
}
const mapDispatchToProps=(dispatch)=>{
  return{
    changeName:()=>{dispatch(anotherName())}
   }
}
export default connect(mapStateToProps,mapDispatchToProps) (App);
