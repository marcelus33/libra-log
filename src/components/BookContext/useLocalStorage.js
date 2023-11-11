import { useEffect, useState } from "react";
/**
 * Generates a function comment for the given function body in a markdown code block with the correct language syntax.
 *
 * @param {string} itemName - The name of the item to be stored in the local storage.
 * @param {any} initialValue - The initial value to be stored in the local storage if the item does not exist.
 * @return {array} An array containing the stored item and a function to update the stored item.
 */
function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  //
  useEffect(() => {
    setTimeout(() => {
      try {
        const storageItem = localStorage.getItem(itemName);
        let parsedItem;
        //
        if (!!storageItem) {
          parsedItem = JSON.parse(storageItem);
        } else {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        }
        //
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 1111);
  });
  //
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };
  //
  return [item, saveItem, loading, error];
}

export { useLocalStorage };
