import { Popup } from "./styles";

/**
 * Creates a popup message
 * @param {Sting} message The message to display
 * @returns {JSX.Element} Popup message
 */
const PopupMessage = ({ message }) => {
  return (
    <Popup>
      <p>{message}</p>
    </Popup>
  );
};

export default PopupMessage;
