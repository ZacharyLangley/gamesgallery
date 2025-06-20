import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  chip: {
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  allInChip: {
    borderColor: '#333',
    borderWidth: 3,
  },
  chipDisabled: {
    opacity: 0.5,
  },
  allInCenterText: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#333',
    borderRadius: 30,
    paddingVertical: 4,
    paddingHorizontal: 6,
    backgroundColor: 'white',
  },
  allInText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#333',
    lineHeight: 12,
  },
});
