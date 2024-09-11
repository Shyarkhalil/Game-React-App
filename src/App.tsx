import './App.css';
import Alert from './components/Alert';
import './components/ListGroup';
import ListGroup from './components/ListGroup';
function App() {
  const items = ['New York', 'Tokyo', 'Paris', 'Sydney', 'Cairo', 'Toronto'];
  const cities = 'Cities';
  const text = 'Alert';
  return (
    <div>
      <ListGroup items={items} heading={cities} />
      <Alert text={text} />
    </div>
  );
}

export default App;
