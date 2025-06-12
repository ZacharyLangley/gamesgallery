import React, { memo } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Routes } from './routes';
import { MemoryMatch } from '../screens/MemoryMatch';
import { ReactionTimer } from '../screens/ReactionTimer';
import { NumberGuessing } from '../screens/NumberGuessing';
import { RockPaperScissors } from '../screens/RockPaperScissors';
import { TicTacToe } from '../screens/TicTacToe';
import {
  screenOptions,
  ReactTimerConfig,
  MemoryMatchConfig,
  NumberGuessingConfig,
  RockPaperScissorsConfig,
  TicTacToeConfig,
} from './tabConfigs';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = memo(() => (
  <Tab.Navigator initialRouteName={Routes.ReactionTimer} screenOptions={screenOptions}>
    <Tab.Screen name={Routes.ReactionTimer} component={ReactionTimer} options={ReactTimerConfig} />
    <Tab.Screen name={Routes.MemoryMatch} component={MemoryMatch} options={MemoryMatchConfig} />
    <Tab.Screen
      name={Routes.NumberGuessing}
      component={NumberGuessing}
      options={NumberGuessingConfig}
    />
    <Tab.Screen
      name={Routes.RockPaperScissors}
      component={RockPaperScissors}
      options={RockPaperScissorsConfig}
    />
    <Tab.Screen name={Routes.TicTacToe} component={TicTacToe} options={TicTacToeConfig} />
  </Tab.Navigator>
));
