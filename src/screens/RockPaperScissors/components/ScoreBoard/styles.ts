import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  scoreContainer: {
    flex: 1,
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    color: '#666',
  },
  score: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
  },
  vsContainer: {},
  vs: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#666',
  },
});
