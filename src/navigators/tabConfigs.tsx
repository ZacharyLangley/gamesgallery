import FontAwesome from 'react-native-vector-icons/FontAwesome6';

type IconProps = {
  color: string;
  size: number;
};

export const screenOptions = {
  headerShown: false,
  tabBarShowLabel: false,
};

export const ReactTimerConfig = {
  tabBarIcon: ({ color, size }: IconProps) => (
    <FontAwesome name="bolt" size={size} color={color} iconStyle="solid" />
  ),
};
export const MemoryMatchConfig = {
  tabBarIcon: ({ color, size }: IconProps) => (
    <FontAwesome name="clone" size={size} color={color} iconStyle="solid" />
  ),
};
export const NumberGuessingConfig = {
  tabBarIcon: ({ color, size }: IconProps) => (
    <FontAwesome name="circle-question" size={size} color={color} iconStyle="solid" />
  ),
};
export const RockPaperScissorsConfig = {
  tabBarIcon: ({ color, size }: IconProps) => (
    <FontAwesome name="hand" size={size} color={color} iconStyle="solid" />
  ),
};
export const TicTacToeConfig = {
  tabBarIcon: ({ color, size }: IconProps) => (
    <FontAwesome name="hashtag" size={size} color={color} iconStyle="solid" />
  ),
};
