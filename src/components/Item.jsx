import React, { Component } from 'react';
import './styles/style.css';
class Item extends Component {

    render() {
        const item=this.props.item;
        return ( <div onClick={()=>this.props.clickHandler(item)} className="menuitem">
            <span className='textItem'>{item.mission_name}</span>
        </div> );
    }
}
 
export default Item;