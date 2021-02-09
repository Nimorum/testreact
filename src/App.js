
import './App.css';
import Item from './components/Item'
import React, { Component } from 'react';
import Mission from './components/Mission';
class App extends Component {

  constructor(props){
    super(props);
    this.state={
      items:[],
      isLoaded:false,
      displayedItem:{}
    }
  }

  url ="https://api.spacexdata.com/v3/launches";

  componentDidMount(){

    fetch(this.url)
    .then((res)=>res.json())
    .then((res)=>{
      //data in json format

      res.pop();


      this.setState({
        isLoaded:true,
        items:res,
        displayedItem:res[0]
      })
      console.log(res);
    }).catch((e)=>{
      console.log(e);
    })
  }

  render() { 

    let {isLoaded,items,displayedItem}=this.state;
    
    if(!isLoaded){
      return (<div>loading...</div>);
    }
    console.log(displayedItem);
    return (<div className= "App">
      <div className='Menu'>
          {items.map((item)=><Item key={item.flight_number} item={item} clickHandler={this.itemClick} />)}
      </div>
      <div className='Content'>
        {<Mission key={'info container'} item={displayedItem}/>}
      </div>
    </div>  );
  }

  itemClick=(item)=>{

    this.setState({
      displayedItem:item
    })

  }

}
 
export default App;
