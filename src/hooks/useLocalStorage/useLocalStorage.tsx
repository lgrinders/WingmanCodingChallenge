import { useEffect, useState } from "react";

export default function useLocalStorage(key: string, defaultValue: string) {
  const [value, setValue] = useState(() => {
    let currentValue;
    try {
      // checks if there is a value in localStorage already and sets it to currentValue if there is
      currentValue = JSON.parse(
        localStorage.getItem(key) || JSON.stringify(defaultValue)
      );
    } catch (error) {
      console.log(error);
      currentValue = defaultValue;
    }

    return currentValue;
  });

  // if key or value are modified it will set the new value to localStorage
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
