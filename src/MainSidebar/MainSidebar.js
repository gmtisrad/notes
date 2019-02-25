import React, { Component } from 'react'
import FolderList from '../FolderList/FolderList.js'
import './MainSidebar.css'

class MainSidebar extends Component {
    render() {
        return(
            <> 
                <FolderList folders={this.props.folders} />
                <button 
                    className='mainsidebar__add'>
                    Add Folder
                </button>
            </>
        )
    }
}

export default MainSidebar;