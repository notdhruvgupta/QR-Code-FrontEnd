import './App.css';
import Navbar from './comp/navbar.js';
import Content from './comp/content';
// import SplineEx from './comp/splineEx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
        <Content></Content>
        {/* <SplineEx></SplineEx> */}
      </header>
    </div>
  );
}

export default App;
