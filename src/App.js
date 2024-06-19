import Provider from './context/Provider';
import './index.css';
import Router1 from './routers/Router1';

function App() {
  return (
    <div className="App">
      <Provider>
        <Router1 />
      </Provider>
    </div>
  );
}

export default App;
