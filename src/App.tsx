import './App.css';
import './components/ListGroup';
import ListGroup from './components/ListGroup';
function App() {
  const items = ['New York', 'Tokyo', 'Paris', 'Sydney', 'Cairo', 'Toronto'];
  const cities = 'Cities';
  return (
    <div>
      <ListGroup items={items} heading={cities} />
    </div>
  );
}

export default App;
