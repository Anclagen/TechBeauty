import { Popup } from "./styles";

const PopupMessage = ({ message }) => {
  return (
    <Popup>
      <p>{message}</p>
    </Popup>
  );
};

export default PopupMessage;
