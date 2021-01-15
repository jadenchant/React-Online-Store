import React, { useEffect } from 'react';
import Navbar from './Components/Navbar';
import Content from './Components/Content';
import './css/index.css';

function App() {
  const [scrolled,setScrolled] = React.useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if(offset > 40){
        setScrolled(true);
        }
        else{
        setScrolled(false);
        }
    }
    useEffect( () => {
        window.addEventListener('scroll',handleScroll)
    });

  return (
    <div className="App">
      <Navbar scrolled={scrolled} />
      <Content scrolled={scrolled} />
    </div>
  );
}

export default App;