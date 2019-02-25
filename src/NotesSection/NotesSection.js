import React, { Component } from 'react'
import NotesList from '../NotesList/NotesList.js'
import './NotesSection.css'

class NotesSection extends Component {
    render() { 
        let filteredNotes = this.props.notes
        if (this.props.match){
            filteredNotes = this.props.notes.filter(note => note.folderId === this.props.match.params.folderId)
        }
        

        return (
            <div className='notessection'>
                <NotesList notes={filteredNotes} />
                <div className='notessection__add'>
                    Add note
                </div>
            </div>
        )
    }
}

export default NotesSection;