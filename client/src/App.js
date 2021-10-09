import { useEffect, useState } from 'react';
import './App.css';
import Nav from './components/nav/Nav';

const App = () => {
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
  const breakpoint = 1400;

  useEffect(() => {
    window.addEventListener('resize', () => setDeviceWidth(window.innerWidth));
  }, []);

  return (
    <div className='App'>
      <Nav deviceWidth={ deviceWidth } breakpoint={ breakpoint }/>
    </div>
  );
}

export default App;