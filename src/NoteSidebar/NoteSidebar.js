import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './NoteSidebar.css'

class NoteSidebar extends Component {
    render() {
        let note = this.props.store.notes.find(note => {
            return this.props.match.params.noteId === note.id
        })
        let folder = this.props.store.folders.find(folder => {
            return folder.id === note.folderId
        })
        return (
            <>
                <button 
                    onClick={this.props.history.goBack}
                    className='notesidebar__back'>
                    Go Back    
                </button>
                <span
                    className='notesidebar__folder'>
                    {folder.name}
                </span>
            </>
        )
    }
}

export default withRouter(NoteSidebar);