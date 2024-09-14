import { useState } from 'react';
import { AiFillFire } from 'react-icons/ai';
import './App.css';
import Alert from './components/Alert';
import ButtonList from './components/ButtonList';
import Dismissing from './components/Dismissing';
import GamPlayer from './components/GamPlayer';
import Like from './components/Like';
import ListGroup from './components/ListGroup';
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
function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  const handleButtonClick = (buttonName: string) => {
    console.log(`${buttonName} button clicked`);
    setAlertVisibility((prevVisibilityState) => !prevVisibilityState);
  };
  const handelAlertClose = () => {
    setAlertVisibility((prevVisibilityState) => !prevVisibilityState);
  };

  const [liked, setLiked] = useState(true);
  const onLikeHandeler = () => {
    setLiked((prevState) => !prevState);
    console.log(liked);
  };
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: 'John',
      score: 200,
    },
  });
  const handlePlayerNameUpdate = () => {
    setGame((prevGame) => ({
      ...prevGame,
      player: {
        ...prevGame.player,
        name: 'Jane',
      },
    }));
  };
  return (
    <>
      <ListGroup items={items} heading={cities} />
      <Alert>
        Hello <span>World</span>
      </Alert>
      {alertVisible && <Dismissing onClose={handelAlertClose} />}
      <ButtonList buttons={buttons} onClick={handleButtonClick} />
      <AiFillFire color="red" size="70" />
      <Like onLikeHandeler={onLikeHandeler} isLiked={liked} />
      <GamPlayer game={game} onPlayerNameUpdate={handlePlayerNameUpdate} />
    </>
  );
}

export default App;
