import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Footer from './components/Footer'

function App() {
  return (
    <div className='App'>
      {/* Browser Routing */}
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage/>}/>
          <Route path='/sign-in' element={<SignIn className="sign-in"/>}/>
          <Route path='/sign-up' element={<SignUp/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
