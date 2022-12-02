import './Header.css';

import { Button, Logo, Text } from '..';

import Avvvatars from 'avvvatars-react';
import { IoMenuSharp } from 'react-icons/io5';
import { ModalContext } from '../../contexts/ModalContext';
import { UserContext } from '../../contexts/UserContext';
import { useContext } from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';
import usePath from '../../hooks/usePath';
import { getAuth } from 'firebase/auth';


const Header = () => {
  let isWidthMin800 = useMediaQuery('(min-width: 800px)');
  const { page } = usePath();
  const { handleOpen } = useContext(ModalContext);
  const { user } = useContext(UserContext);
  function getProfile() {
    return getAuth().currentUser.photoURL || './profile_placeholder.png'
  }


  return (
    <header className='Header'>
      {!isWidthMin800 && <Logo />}
      <Text h1>{page}</Text>
      {isWidthMin800 && (
        <div className='header__right'>
          <Button color='primary' onClick={() => handleOpen('trade')}>
            Buy / Sell
          </Button>
          <Button color='secondary' onClick={() => handleOpen('pay')}>
            Send / Receive
          </Button>
          <div className='header__verticalLine'></div>
          <div className='header__avatar' >
            {/* <Avvvatars value={user?.email  || 'Guest'} size={55}></Avvvatars>  */}
            <img className='profileImg' type="text" name='photo' onClick={() => handleOpen('profile')} value={user.photoURL } size={55}></img>
          </div>
        </div>
      )}
      {!isWidthMin800 && (
        <div className='header__right'>
          <IoMenuSharp
            className='header__menu'
            onClick={() => handleOpen('menuMobile')}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
