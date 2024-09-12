import { nanoid } from 'nanoid';
// This defines the shape of a single Button object, meaning any object that adheres to this interface must have a className and a name, both of which are strings.
interface Button {
  className: string;
  name: string;
}
/*ButtonListProps: this interface is for the props that the ButtonList component will receive. It expects two props:
buttons: The Button[] part means that buttons is an array where each element must match the shape defined by the Button interface.
Button represents a single button object.
Button[] represents an array of button objects.
onClick: A function that gets triggered when a button is clicked. It accepts the button’s name as an argument.*/

interface ButtonListProps {
  buttons: Button[];
  onClick: (name: string) => void; // Function to handle the click, it could pass the button's name
}

const ButtonList: React.FC<ButtonListProps> = ({ buttons, onClick }) => {
  return (
    <>
      {buttons.map(({ className, name }) => (
        <button
          key={nanoid()}
          className={className}
          onClick={() => onClick(name)}
        >
          {name}
        </button>
      ))}
    </>
  );
};

export default ButtonList;
