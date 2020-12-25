import React, { Component } from 'react'
import TodoInput from './TodoInput'
import TodoItems from './TodoItems'

export class TodoList extends Component {
    render() {
        const {items,clearList,handleDelete,handleEdit}=this.props;
        return (
            <ul className="list-group my-5">
                <h3 className=" text-capitalize text-center">Todo List</h3>
                
                {items.map((item,i)=>(

                <TodoItems handleEdit={()=>handleEdit(item.id)} handleDelete={()=>handleDelete(item.id)} title={item.title} key={item.id} />
                ))}

                <button type="button" onClick={clearList} className="btn btn-danger btn-block text-capitalize my-5">clear list</button>
            </ul>


        )
    }
}

export default TodoList
