import React, { memo } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome6';
import { Routes } from './routes';
import { MemoryMatch } from '../screens/MemoryMatch';
import { ReactionTimer } from '../screens/ReactionTimer';
import { NumberGuessing } from '../screens/NumberGuessing';
import { RockPaperScissors } from '../screens/RockPaperScissors';
import { TicTacToe } from '../screens/TicTacToe';

const Tab = createBottomTabNavigator();

type IconProps = {
  color: string;
  size: number;
};

const screenOptions = {
  headerShown: false,
  tabBarShowLabel: false,
};

const ReactTimerConfig = {
  tabBarIcon: ({ color, size }: IconProps) => (
    <FontAwesome name="bolt" size={size} color={color} iconStyle="solid" />
  ),
};
const MemoryMatchConfig = {
  tabBarIcon: ({ color, size }: IconProps) => (
    <FontAwesome name="clone" size={size} color={color} iconStyle="solid" />
  ),
};
const NumberGuessingConfig = {
  tabBarIcon: ({ color, size }: IconProps) => (
    <FontAwesome name="circle-question" size={size} color={color} iconStyle="solid" />
  ),
};
const RockPaperScissorsConfig = {
  tabBarIcon: ({ color, size }: IconProps) => (
    <FontAwesome name="hand" size={size} color={color} iconStyle="solid" />
  ),
};
const TicTacToeConfig = {
  tabBarIcon: ({ color, size }: IconProps) => (
    <FontAwesome name="hashtag" size={size} color={color} iconStyle="solid" />
  ),
};

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
