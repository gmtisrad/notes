import React, { Component } from 'react'
import NotesListItem from '../NotesListItem/NotesListItem.js'
import './NoteContent.css'

class NoteContent extends Component {
    render () {
        let note = this.props.notes.find(note => {
            return note.id === this.props.match.params.noteId
        })
        return (
            <>
                <NotesListItem 
                    id={note.id}
                    title={note.name}
                    modified={note.modified}
                    folderId={note.folderId}
                    content={note.content} />
                <span
                    className='notescontent__content'>
                    {note.content}    
                </span>
            </>
        )
    }
}

export default NoteContent