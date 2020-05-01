import React, { Component } from 'react'


class FetchExample extends Component {
    state = {bpi: {}}

    componentDidMount(){
     
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(res => res.json() )
        .then(data =>{
            const {bpi }= data
            this.setState({bpi})
        })

    }



   render(){
      return (
          <div >
            <FetchExample/>
          
          </div>
      )
   }
}


 export default FetchExample ; 

 184.157