import logo from './logo.svg';
import './App.css';
import Question from './components/Question';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>STAR WARS QUIZ</h2>
        </div>
        <Question content="What is a Death Start?"/>
    </div>
  );
}

export default App;

