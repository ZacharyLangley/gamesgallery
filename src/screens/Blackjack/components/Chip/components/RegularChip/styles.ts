import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  chip: {
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  chipDisabled: {
    opacity: 0.5,
  },
  oneInnerRing: {
    borderWidth: 2,
    borderColor: '#333',
    borderRadius: 30,
    paddingVertical: 8,
    paddingHorizontal: 8,
    backgroundColor: 'white',
  },
  fiveInnerRing: {
    borderWidth: 2,
    borderColor: '#333',
    borderRadius: 30,
    paddingVertical: 9,
    paddingHorizontal: 8,
    backgroundColor: 'white',
  },
  twentyFiveInnerRing: {
    borderWidth: 2,
    borderColor: '#333',
    borderRadius: 30,
    paddingVertical: 9,
    paddingHorizontal: 4,
    backgroundColor: 'white',
  },
  oneHundredInnerRing: {
    borderWidth: 2,
    borderColor: '#333',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 1,
    backgroundColor: 'white',
  },
});
