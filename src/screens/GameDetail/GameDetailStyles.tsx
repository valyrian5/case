import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
    width: 50,
    height: 50,
  },
  buttonText: {
    color: '#fff',
  },
  contentContainer: {
    gap: 70,
  },
  banner: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  infoContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  icon: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: -50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  rating: {
    fontSize: 18,
    marginVertical: 5,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default styles;
