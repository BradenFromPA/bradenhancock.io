import './Nav.css'
import Desktop from './Desktop';
import Mobile from './Mobile';

const Nav = (props) => {
  const deviceWidth = props.deviceWidth;
  const breakpoint = props.breakpoint;

  return (
    <div className='Nav'>
      <div id='width-flex'>
        <h1 id='logo'>Braden Hancock</h1>
        { deviceWidth < breakpoint ?
          <Mobile/> : <Desktop/>
        }
      </div>
    </div>
  );
};

export default Nav;