import React from 'react';
import {View} from 'react-native';
import Navigation from './Navigation';
import { GamesProvider } from './contexts/GameContext';


function App(): React.JSX.Element {
  return (
    <GamesProvider>
      <View
        style={{
          flex: 1,
        }}>
        <Navigation />
      </View>
    </GamesProvider>
  );
}

export default App;
