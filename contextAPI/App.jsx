import logo from "./logo.svg";
import "./App.css";
import Example1 from "./components/Example1";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <Example1 />
      </header>
    </div>
  );
}

export default App;
