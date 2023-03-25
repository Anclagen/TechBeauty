import { useState } from "react";

const usePopup = () => {
  const [popups, setPopups] = useState([]);

  const showPopup = (message) => {
    // keep track of the popup id so we can remove it after 3 seconds
    const popupId = new Date().getTime();
    // add the popup to the state
    setPopups((prevPopups) => [...prevPopups, { id: popupId, message }]);
    // remove the popup after 3 seconds
    setTimeout(() => {
      setPopups((prevPopups) => prevPopups.filter((popup) => popup.id !== popupId));
    }, 3000);
  };

  return { popups, showPopup };
};

export default usePopup;
