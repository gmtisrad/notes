import React, { Component } from 'react'
import NotesListItem from '../NotesListItem/NotesListItem.js'
import './NotesList.css'

class NotesList extends Component {
    render() {
        let notesList = this.props.notes.map(note => {
            return (
                <NotesListItem 
                    key={note.id}
                    id={note.id}
                    title={note.name}
                    modified={note.modified}
                    folderId={note.folderId}
                    content={note.content} />
            )
        })
        return (
            <div className='noteslist'>
                {notesList}
            </div>
        )
    }
}

export default NotesList;