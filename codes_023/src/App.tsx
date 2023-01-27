import React from 'react';
import { Header } from './components/header';
import { Post } from './components/post';
import { ChangeState } from './components/State';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Hello guys!</h1>
      <Post
        title='Preciso de um emprego'
        content='sou programador'
        qtyLinks={1020}
        tags={['programador', 'dev', 'emprego']}
      />
      <Post
        title='Olá pessoas'
        content='Pois bem...'
        qtyLinks={604}
        tags={['vida', 'oportunidade', 'work']}
      />

      <ChangeState />
    </div>
  );
}

export default App;
