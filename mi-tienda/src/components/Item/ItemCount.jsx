import React, {Component } from 'react'
import './ItemCount.css';


class Contador extends Component{
    state = {
        count: 0,
        stock:5 
    }
    agregar = () =>{
        if(this.state.stock>0){
            this.setState({stock: this.state.stock-1})
            this.setState({count:this.state.count + 1})        
        }     
    }
    eliminar = () =>{
        if(this.state.count>0){
            this.setState({count: this.state.count - 1})
            this.setState({stock: this.state.stock+1})
        }
    }
   
    render(){
        return(
            <div className='ItemCountArea'>
  
                    <button onClick={this.agregar} className='ItemCountArea__AddButton'>Agregar</button>
                    <p className='ItemCountArea__Count'>{this.state.count}</p>
                    <button onClick={this.eliminar} className='ItemCountArea__QuitButton'>Quitar</button>        

              
            </div>
        )
    }
}

export default Contador;