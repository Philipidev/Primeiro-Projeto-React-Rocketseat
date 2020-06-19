import React from 'react';
import Header from './components/Headers'
import api from './services/api'
import Main from './pages/main'

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Main></Main>
    </div>
  );
}

export default App;
