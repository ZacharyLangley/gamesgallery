import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    marginHorizontal: 2,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  cardBack: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  cardBackPattern: {
    flex: 1,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderWidth: 1.5,
    borderRadius: 6,
    margin: 3,
    borderColor: '#0000FF',
  },
  cardBackText: {
    includeFontPadding: false,
    fontSize: 16,
    overflow: 'visible',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#0000FF',
  },
});
