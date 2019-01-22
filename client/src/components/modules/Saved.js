import React, { Component } from 'react';
import {Icon} from 'semantic-ui-react';

const iconStyle = {
    float: 'right',
    position: 'inherit',
 }

class Saved extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
}
render() {
    return(
        
        <Icon name = 'bookmark outline' style={iconStyle}/>
    );
}
}


export default Saved;