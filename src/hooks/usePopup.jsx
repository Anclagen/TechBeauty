import { useState } from "react";

/**
 * Manages the state of popups  (e.g. "Added to cart")
 * @returns {Object} popups: array of popups, showPopup: function to add a popup to the state
 * @example
 * const { popups, showPopup } = usePopup(); // in a component
 *
 * showPopup("Added to cart"); // to add a popup
 */
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
