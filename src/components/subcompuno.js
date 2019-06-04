import React from 'react';






class SubCompUno extends React.Component{
    render(){
        return(
            <input type="checkbox" id={this.props.id} value={this.props.value} onChange={this.props.onChange} />
        );
    }
}


export default SubCompUno;