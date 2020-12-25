import React, { Component } from 'react'
import TodoInput from './components/TodoInput';  
import TodoList from './components/TodoList'


export class App extends Component {
  state={
    items:[],
    id:'',
    item:'',
    editItem:false
  }
  handleChange=(e)=>{
    this.setState({
      item:e.target.value,
      id:Math.random()*10000
    })
  };
  handleSubmit=(e)=>{
    e.preventDefault();

    const newItem={
      id:this.state.id,
      title:this.state.item
    }
    const updateItem=[...this.state.items,newItem];
    console.log(updateItem);

    this.setState({
      items:updateItem,
      item:'',
      id:'',
      editItem:false
    })
  }
  clearList=()=>{
    this.setState({
      items:[]
    })
  }

  handleDelete=(id)=>{
    const filterItem=this.state.items.filter(item=>(item.id!==id));
    this.setState({
      items:filterItem
    })
  }
  
  handleEdit=(id)=>{
    const filterItem=this.state.items.filter(item=>(item.id!==id));
    const selectedItem=this.state.items.find(item=>(item.id===id));
    
    this.setState({
      items:filterItem,
      item:selectedItem.title,
      editItem:true,
      id:id
    })
    
  }

  render() {
    return (
      
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-4">
              <h3 className="text-capitalize text-center">Todo Input</h3>
                <TodoInput edit={this.state.editItem} handleSubmit={this.handleSubmit} item={this.state.item} handleChange={this.handleChange}/>
                <TodoList handleEdit={this.handleEdit} handleDelete={this.handleDelete} items={this.state.items} clearList={this.clearList}/>
            </div>
          </div>
        </div>
      
    )
  }
}

export default App;
