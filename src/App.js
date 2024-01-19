// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './Home';
import About from './About';
// import Service from './Service';
import Example from './Example';
import Footer from './Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      {/* <Service/> */}
      <Example/>
      <Footer/>
    </div>
  );
}
export default App;
