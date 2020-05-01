/* 
/* function Hello (props){
    return  <h2> {props.title}</h2>
}
 */

//const Hello = {props} => <h2>{props.title}</h2> ;

/* class Hello extends Component {
    render(){
      return <h2>{this.props.title}</h2>
    }
}
class Text extends Component {

   render(){
       // const mappedNumbers = this.props.arrayOfNumbers.map(n => n*2 )
       const { isActivated,arrayOfNumbers,multiply,objectWhitInfo,title} = this.props
        const mappedNumbers = arrayOfNumbers.map(this.props.multiply)
      //  const textoBool = isActivated ? 'On' :'Off '


        
      return (
        <div>
        {title}
        <p>{mappedNumbers.join(', ')}</p> 
        <p>{objectWhitInfo.key}</p> 
        </div>
      )
   }
}
   *//* DENTRO DEL HEADER CONTIENE LOS ATRIBUTOS DEL PROPS
       <Hello title="Hola VV"/>
             <div>
                  <Text 
                  arrayOfNumbers={[2,3,155]}
                  objectWhitInfo={{key: 'Fisrt value',key2: 'otherValue'}}
                  multiply={(number)=> number *4}
                  number={2}
                  boolean={false}
                  text='Texto Props'
                  title= {<h1>Titulo de Reactjs</h1>}/>
             </div>
               */
//Props por defecto 

/* class Title extends Component {

   render(){
      return (<h1>{this.props.text}</h1>)
   }
}

Title.defaultProps ={
  text : 'Props por defecto'
} */
/*  //Inicializar el state de un componente usando class Properties 
 class Contador extends Component {
   state = {contador: 0};
    render(){
       return (
         <di>
            <h2>el contador esta a {this.state.Contador}.</h2>
         </di>
       )
    }
 }
 */

 //Componente con estado con contador incremental
/* class Contador  extends Component {
    constructor (props) {
      super(props)
        this.state = {contador : this.props.contadorInicial}
        setInterval(() => {
            this.setState({contador: this.state.contador +1})
        },1000);
    }

   render(){ 
      return <ContadorNumero numero ={this.state.contador} />
   }
}
class ContadorNumero extends Component {

   render(){
        return <span>{this.props.numero}</span>
      
   }
} */
/* //Se puede asignar por default un props 
Contador.defaultProps= {
  contadorInicial:0
}
 */

//import React ,{Component} from 'react';
//import ConditionalSectiom from './sections/conditional'

// APP RAIZ CON  EN BLANCO  
/* function App() {
  
   
  return (
    <div className="App">
      
   
    </div>
  );
}
export default App;
 */

///Tranformar una lista en elementos de react y indentificar una key para cada uno de ellos
/* function App() {
  
    const numbers =[1,1,2,3,4]
   
  return (
    <div className="App">
      {numbers.map((number,index)=> { return <p key={index}>Hola soy rl nro{number}</p>})}
   
    </div>
  );
}
export default App;

 */

/*  //Recorrer lista de objetos con un array
import React, { Component } from 'react';
import cars from './data/cars.json'

class CarItem extends Component {
  render () {
    const { car, id } = this.props

    return (
      <li>
        <p>Key: {id}</p>
        <p><strong>Nombre: </strong>{car.name}</p>
        <p><strong>Marca: </strong>{car.company}</p>
      </li>
    )
  }
}

export default class CarsList extends Component {
  render () {
    return (
      <ul>
        {
          cars.map(car => {
            return <CarItem id={car.id} key={car.id} car={car} />
          })
        }
      </ul>
    )
  }
}




 */

/*  import React, { Component } from 'react' */

/* export default class Events extends Component {
  constructor () {
    super()
    this.state = { mouseX: 0, mouseY: 0 }
    // this.handleMouseMove = this.handleMouseMove.bind(this)
  }
// Arrow funcion en metodo de la clase  enlazar el metodo al componenete que controla el elemento
  handleMouseMove = (e) => {
    const { clientX, clientY } = e
    this.setState({ mouseX: clientX, mouseY: clientY })
  }

  handleClick (e) {
    console.log(e)
    console.log(e.nativeEvent)
    alert('Hi here!')
  }

  render () {
    return (
      <div>
        <h4>Eventos</h4>
        <button onClick={this.handleClick}>Hi there!</button>
        <div
          onMouseMove={this.handleMouseMove}
          style={{ border: '1px solid #000', marginTop: 10, padding: 10 }}>
          <p>{this.state.mouseX}, {this.state.mouseY}</p>
        </div>
      </div>
    )
  }
}


 */


//importar desde otra pagina
/* import React ,{Component} from 'react';
/* import Constructor from './sections/constructor';
import ComponentWillMount from './sections/ComponentWillMount';
import EjemploDeComponentDidMount from './sections/ComponentDidMount'; */

/* 

function App() {
  
   
  return (
    <div className="App">
           <Constructor/>
           <ComponentWillMount/>
           <EjemploDeComponentDidMount/>

     
    </div>
  );
}
export default App;
 */
 


import React ,{Component} from 'react';
import FetchExample from './sections/fetch-example';


function App() {
  
   
  return (
    <div className="App">
          <FetchExample/>
    </div>
  );
}
export default App;

