import React from 'react'
import Banner from './component/Banner/Banner'
import NavBar from './component/navBar/NavBar'
import RowPost from './component/RowPost/RowPost'

import './App.css'

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Banner/>
    <RowPost title='Netflix Original'/>
    <RowPost title='Action' isSmall/>

    </div>
  );
}

export default App;
