import logo from './logo.svg';
import './App.css';
import React from 'react'
import PostList from './PostList'
import Form from './Form'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form/>
      <PostList
        title = "Hello everyone"
          description = "I dont know what i am doing"/>
      </header>
    </div>
  );
}

export default App;
