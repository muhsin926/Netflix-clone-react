
import './App.css';
import React from 'react';
import NavBar from './Components/navBar/navBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import { orginals,action, comedy, horror, romance } from './Urls';
function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Banner/>
      <RowPost url={orginals} title='Netflix Orginals'/>
      <RowPost url={action} title='Action' isSmall/>
      <RowPost url={comedy} title='Comedy' isSmall/>
      <RowPost url={horror} title='Horror' isSmall/>
      <RowPost url={romance} title='Romance' isSmall/>
      
    </div>
  );
}

export default App;
