import React, { Component } from 'react'

export class TodoInput extends Component {
    render() {
        const { item, handleChange,handleSubmit,edit } = this.props;
     
        return (
            <div className="card card-body my-3">
                <form onSubmit={(e)=>handleSubmit(e)}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fa fa-book" aria-hidden="true"></i>
                            </div>
                        </div>
                        <input type="text" placeholder="add a todo item" className="form-control text-capitalize" value={item} onChange={(e)=>handleChange(e)} />
                    </div>
                    <button type="submit" className={edit?"btn btn-block btn-success my-3":"btn btn-block btn-primary my-3"} >{edit ? "Edit Item":'Add Item'}</button>
                </form>
            </div>

        )
    }
}

export default TodoInput;
