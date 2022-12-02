import {
  Assets,
  Deposit,
  Pay,
  ProtectedPages,
  SignIn,
  SignUp,
  Trade,
  HookForm,
} from './pages';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Dashboard } from './components';
import { UserProvider } from './contexts/UserContext';
import { DarkThemeContext } from './components/Button';
import DarkModeToggle from "react-dark-mode-toggle";
import {useContext} from 'react'
import { AuthContextProvider } from './components/Auth/Google';

function App() {
  const {turnOn, setTurnOn, mainColor} = useContext(DarkThemeContext);
  return (
    <div className="App" style={{ backgroundColor: mainColor.background, color: mainColor.text }}>
      <AuthContextProvider>
      <UserProvider>
        <Routes>
          <Route path='/' element={<Navigate to='/assets' />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route element={<ProtectedPages />}>
            <Route path='/' element={<Dashboard />}>
              <Route path='assets' element={<Assets />} />
              <Route path='trade' element={<Trade />} />
              <Route path='pay' element={<Pay />} />
              <Route path='deposit' element={<Deposit />} />
              <Route path='contact' element={<HookForm />} />
              <Route path='*' element={<Assets />} />
            </Route>
          </Route>
        </Routes>
      </UserProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
