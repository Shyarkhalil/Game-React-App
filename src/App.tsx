import './App.css';
import Alert from './components/Alert';
import ButtonList from './components/ButtonList';
import ListGroup from './components/ListGroup';
function App() {
  const items = ['New York', 'Tokyo', 'Paris', 'Sydney', 'Cairo', 'Toronto'];
  const cities = 'Cities';
  const buttons = [
    { className: 'btn btn-primary', name: 'Primary' },
    { className: 'btn btn-secondary', name: 'Secondary' },
    { className: 'btn btn-success', name: 'Success' },
    { className: 'btn btn-danger', name: 'Danger' },
    { className: 'btn btn-warning', name: 'Warning' },
    { className: 'btn btn-info', name: 'Info' },
    { className: 'btn btn-light', name: 'Light' },
    { className: 'btn btn-dark', name: 'Dark' },
  ];

  const handleButtonClick = (buttonName: string) => {
    console.log(`${buttonName} button clicked`);
  };
  return (
    <>
      <ListGroup items={items} heading={cities} />
      <Alert>
        Hello <span>World</span>
      </Alert>
      <ButtonList buttons={buttons} onClick={handleButtonClick} />
    </>
  );
}

export default App;
