import React from 'react';
import CompUno from './components/compuno';
import './App.css';

class App extends React.Component{

  constructor(){
    super()
      this.state ={
        nombre :''
      }
  }

  onChange(){

  }

  render(){
    return(
      <div>
          <form action="">
              <label htmlFor="nombre">Nombre</label>
              <input  name="nombre" id="nombre"
                      value={this.state.nombre}
                      onChange={this.onChange.bind(this)} type="text"/>
              <CompUno/>

          </form>
      </div>
    );
  }
}

export default App;
