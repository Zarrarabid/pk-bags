// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import {Route, Routes} from 'react-router-dom'
import {Home,About ,Contact,Error, LogIn} from './components'

function App() {
  return (
    <div id='main' className="App">
      <Routes>
        <Route exact path='https://Zarrarabid.github.io/pk-bags/' element={<Home/>} />
        <Route exact path='https://Zarrarabid.github.io/pk-bags/about' element={<About/>} />
        <Route exact path='https://Zarrarabid.github.io/pk-bags/contact' element={<Contact/>} />
        <Route exact path='https://Zarrarabid.github.io/pk-bags/LogIn' element={<LogIn/>} />
        <Route exact path='*' element={<Error/>} />
      </Routes>
    </div>
  );
}

export default App;
