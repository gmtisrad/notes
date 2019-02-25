import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './FolderListItem.css'

class FolderListItem extends Component {
    static defaultProps = {
        title: 'Folder',
        id: '<folder-id>'
    }
    render() {
        return (
            <NavLink className='folderlistitem' activeClassName='is-active' to={`/folder/${this.props.id}`}>
                {this.props.title}
            </NavLink>
        )
    }
}

export default FolderListItem;