import React, { Component } from "react";
import Scents from './Scents';
import Scent from './Scent';

class ScentSelector extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const ScentList = Scents.map((scent, index) => {
            return (
                <Scent key={index} 
                src={scent.logoURL} 
                handleClick={() => this.props.handleClick(scent)} 
                />
            )
            })
        return(
            <div data-modal-target="scentsMenu" className="" id="scents">
                {ScentList}
            </div>
            
        )
    }
}

export default ScentSelector