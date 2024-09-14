interface Player {
  name: string;
  score: number;
}

interface Game {
  id: number;
  player: Player;
}

interface GameProps {
  game: Game;
  onPlayerNameUpdate: () => void;
}
const GamPlayer: React.FC<GameProps> = ({ game, onPlayerNameUpdate }) => {
  return (
    <div>
      <h1>{game.player.name}</h1>
      <button onClick={onPlayerNameUpdate}>Add Player Name</button>
    </div>
  );
};

export default GamPlayer;
