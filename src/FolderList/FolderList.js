import React, { Component } from 'react'
import './FolderList.css'
import FolderListItem from '../FolderListItem/FolderListItem.js';

class FolderList extends Component {
    render () {
        let folderList = this.props.folders.map((folder) => {
            return <FolderListItem key={folder.id} id={folder.id} title={folder.name} />
        })
        return (
            <div className='folderlist'>
                {folderList}
            </div>
        )
    }
}

export default FolderList;