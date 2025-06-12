import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomTabNavigator } from './BottomTabNavigator';
import { StyleSheet } from 'react-native';
import { memo } from 'react';

export const RootNavigator = memo(() => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
});

export default RootNavigator;

RootNavigator.displayName = 'RootNavigator';

const styles = StyleSheet.create({
  container: { flex: 1 },
});
