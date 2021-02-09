import React, { Component } from 'react';
import './styles/style.css';

class Mission extends Component {

    render() {
        const item=this.props.item;
        
        return ( 
        <div>
            <h1>{item.mission_name}</h1>
            <div className= 'mission_patch'>
                <img src={item.links.mission_patch_small} height={300} width={300} />
            </div>
            <div className='mission_details'>
                <span>{item.details}</span>
            </div>
            <div>
                <table className="info_table">
                    <tr>
                        <th>rocket type</th>
                        <th>rocket name</th>
                        <th>launch site</th>
                        <th>launch date</th>
                        <th>successful</th>
                    </tr>
                    <tr>
                        <td>{item.rocket.rocket_type}</td>
                        <td>{item.rocket.rocket_name}</td>
                        <td>{item.launch_site.site_name}</td>
                        <td>{item.launch_date_local}</td>
                        <td>{this.launchSuccessful(item.launch_success) }</td>
                    </tr>
                </table>
            </div>
            <div>
                {this.getLinks(item.links.flickr_images)}
            </div>
            <div>
                <a href={item.links.video_link} target="new">Youtube video</a>
            </div>
        </div>
            );
    }

    getLinks=(links)=>{
        return links.map((link)=><img className='images' src={link} />)
    }

    launchSuccessful=(success)=>{
        if(success){
            return 'yes'
        }
        return 'no'
    }
}


 
export default Mission;