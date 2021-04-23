import React, {Component } from 'react'
import './ItemCount.css';


class Contador extends Component{
    state = {
        count: 0,
        stock:5 
    }
    agregar = () =>{
        if(this.state.stock===0){
            this.setState({count:0});
            
        }else{
            this.setState({stock: this.state.stock-1})
            this.setState({count:this.state.count + 1})
           
        }
       
    }
    eliminar = () =>{
        this.setState({count: this.state.count - 1})
    }
   
    render(){
        return(
            <div className='ItemCountArea'>
                <p className='ItemCountArea__Count'>{this.state.count}</p>
                <button onClick={this.agregar} className='ItemCountArea__Button'>Agregar</button>
                <button onClick={this.eliminar} className='ItemCountArea__Button'>Quitar</button>
                <p className='ItemCountArea__Count'>Stock: {this.state.stock}</p>
            </div>
        )
    }
}

export default Contador;