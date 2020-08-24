import * as React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import {
  Appbar,
  BottomNavigation,
  Text,
} from 'react-native-paper';


import Home from './app/components/Home/index'

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const App: () => React$Node = () => {

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Food', icon: 'food-fork-drink' },
    { key: 'recents', title: 'History', icon: 'history' },
    { key: 'chart', title: 'Chart', icon: 'chart-line' },
    { key: 'albums', title: 'Preference', icon: 'cog' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    albums: AlbumsRoute,
    recents: RecentsRoute,
  });

  return (
    <>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
