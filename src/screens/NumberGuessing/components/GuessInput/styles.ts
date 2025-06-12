import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    padding: 20,
  },
  input: {
    width: '60%',
    height: 50,
    borderWidth: 2,
    borderRadius: 10,
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  inputFocused: {
    borderColor: '#007AFF',
    shadowColor: '#007AFF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  inputCorrect: {
    borderColor: '#4CD964',
    shadowColor: '#4CD964',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  inputWrong: {
    borderColor: '#FF3B30',
    shadowColor: '#FF3B30',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  submitButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
  },
  submitText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  winContainer: {
    alignItems: 'center',
  },
  winIcon: {
    marginBottom: 20,
  },
  attemptsText: {
    fontSize: 18,
    color: '#666',
  },
});
