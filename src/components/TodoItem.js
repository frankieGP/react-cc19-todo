import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    //creates a 
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }

        
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            //stylizes the todo list items
            <div style={this.getStyle()}>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {''}
               <p>{ title }</p> 
            </div>
        )
    }
}


//Prop Types
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
  }
export default TodoItem
