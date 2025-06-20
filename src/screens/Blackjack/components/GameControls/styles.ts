import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  gameControls: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 15,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  hitButton: {
    backgroundColor: '#4CAF50',
  },
  standButton: {
    backgroundColor: '#F44336',
  },
  doubleButton: {
    backgroundColor: '#FF9800',
  },
  insuranceButton: {
    backgroundColor: '#2196F3',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 8,
  },
});
