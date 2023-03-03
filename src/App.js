import Navbar from './component/navbar';
import './App.css';
import Content from './component/content';


function App() {
  return (
    
    <div className="App">
        <Navbar></Navbar>
        <div className='container'>
        <Content></Content>
        </div>
    </div>
  );
}

export default App;
