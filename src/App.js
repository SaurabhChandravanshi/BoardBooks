import './App.css';
import Header from './BasicComponents/Header';
import Home from './BasicComponents/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './BasicComponents/Footer';
import Class from './MyComponent/Class';

function App() {
  return (
    <>
    <Router>
    <Header/>
    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/ebooks' element={<Class myClass='9th' medium='Hindi'/>}></Route>
    </Routes>
    <Footer/>
    </Router>
    </>

  );
}

export default App;
