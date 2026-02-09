import { useState, useEffect } from 'react';

// A small hook to persist state in localStorage. It stores JSON-serializable values.
// Key is the localStorage key, initialValue is used if no value is stored.
export default function useLocalStorage(key, initialValue) {
  const isClient = typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';

  const readValue = () => {
    if (!isClient) return initialValue;
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`useLocalStorage: error reading key "${key}":`, error);
      return initialValue;
    }
  };

  const [storedValue, setStoredValue] = useState(readValue);

  useEffect(() => {
    if (!isClient) return;
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.warn(`useLocalStorage: error setting key "${key}":`, error);
    }
  }, [key, storedValue, isClient]);

  return [storedValue, setStoredValue];
}
