import React, { Component } from 'react';
import Header from './Header/Header.js';
import { Route } from 'react-router-dom'
import STORE from './dummy-store'
import MainSidebar from './MainSidebar/MainSidebar.js'
import NotesSection from './NotesSection/NotesSection.js'
import NoteSidebar from './NoteSidebar/NoteSidebar.js'
import NoteContent from './NoteContent/NoteContent.js'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      STORE
    }
  }

  render() {
    return (
      <div className='app'>
        <Header />

        <div className='sidebar'>
          <Route 
            exact path='/' 
            render={() => {
              return <MainSidebar folders={this.state.STORE.folders} />
            }}/>
          <Route
            exact path='/folder/:folderId'
            render={() => {
              return <MainSidebar folders={this.state.STORE.folders}/>
            }}/>
          <Route
            exact path='/note/:noteId'
            component={(props) => {
              return <NoteSidebar history={props.history} match={props.match} store={this.state.STORE}/>
            }}/>
        </div>

        <main className='main'>
            <Route
              exact path='/'
              render={() => {
                return <NotesSection notes={this.state.STORE.notes} />
              }}/>
            <Route
              exact path='/folder/:folderId'
              component={(props) => {
                return <NotesSection match={props.match} notes={this.state.STORE.notes}/>
            }}/>
            <Route
              exact path='/note/:noteId'
              component={props => {
                return <NoteContent match={props.match} notes={this.state.STORE.notes}/>
              }}/>
        </main>

      </div>
    )
  }
}

export default App;
