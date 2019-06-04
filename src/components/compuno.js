import React from 'react';
import SubCompUno from './subcompuno';




class CompUno extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            optionsChecked: []
        }
    }




    changeEvent(event){
        let checkedArray = this.state.optionsChecked;
        let selectedValue = event.target.value;

        if(event.target.checked === true){
            checkedArray.push(selectedValue);
            this.setState({
                optionsChecked:checkedArray
            });
        } else {
            let valueIndex = checkedArray.indexOf(selectedValue);
            checkedArray.splice(valueIndex, 1);
            this.setState({
                optionsChecked:checkedArray
            });
        }
    }


    render(){

        let checkBoxArray = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];

        let outputCheckboxes = checkBoxArray.map(function(string, i){
            return (<div><SubCompUno value={string} is={'string_' + i} onChange={this.changeEvent.bind(this)}/>
                                        <label htmlFor={'string_' + i}>{string}</label>
                    </div>)
        }, this);

        return(
        <div>
            <div>
                {outputCheckboxes}
            </div>
            <div>
                {JSON.stringify(this.state.optionsChecked)}
            </div>
        </div>
        )
    }
}




export default CompUno;