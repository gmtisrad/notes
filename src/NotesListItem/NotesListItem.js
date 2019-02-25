import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './NotesListItem.css'

class NotesListItem extends Component {
    render() {
        let modified = new Date(Date.parse(this.props.modified));
        return (
            <Link 
                className='noteslistitem'
                to={`/note/${this.props.id}`}>
                <h2>{this.props.title}</h2>
                <div className='noteslistitem__info'>
                    <span>Last modified on: {modified.toDateString()}</span>
                    <button
                        className='noteslistitem__delete'>
                        Delete    
                    </button>
                </div>
            </Link>
        )
    }
}

export default NotesListItem;