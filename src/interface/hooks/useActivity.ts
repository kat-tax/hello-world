import {useState, useEffect} from 'react';
import {AppState} from 'react-native';

export function useActivity() {
  const [isActive, setActive] = useState(
    AppState.currentState === 'active' || AppState.currentState === 'background'
  );

  useEffect(() =>
    AppState.addEventListener('change', e =>
      setActive(e === 'active' || e === 'background')
    ).remove
  , []);
  return isActive;
}
