 //Formulario react no recomendado con input y button
 import React, { Component } from 'react'
 
  export default class Forms extends Component {
   handleClick(e){
     e.preventDefault()
     const name = document.getElementById('name').value
     const email = document.getElementById('email').value
     console.log({name,email})
     

   }
  
 }

function App() {
  render(){
   
  return (
    <div className="App">
      <h4>FORMULARIOS NO RECOMENDADO</h4>
        <forms>
          <p>
              <label>Nombre</label>
              <input id='name' 
                     name='userName'
                     placeholder='introduce tu nombre'/>     
          </p>
         <p>
              <label>Twitter</label>
              <input id='twitter' 
                     name='twitterAccount'
                     placeholder='introduce tu twitter'/>     
          </p>
        
                <button onClick={this.handleClick}>Enviar</button>
        </forms>
   
    </div>
  )
}
}