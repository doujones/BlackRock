import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header'
import Searchbar from '../components/Boxes/boxWrapper'
import Hero from './Hero';


const App = () => {
  return (
    <>
    <p style={{marginLeft: "10%", marginTop: ".9em"}} className="para1">
    1) User logs into the Home Page
    </p>
    <Header/>
    <p style={{marginLeft: '12%', marginBottom: ".4em"}} className="para1">
    2) User clicks on Create New Task link
    </p>
    <Searchbar/>
    <Hero/>
  </>
 
 
)
}

export default App;
