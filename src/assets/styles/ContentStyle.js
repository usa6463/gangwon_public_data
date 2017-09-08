import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 150
  },
  scrollContainer: {
    flex: 1,
    paddingTop: 30,
    paddingBottom: 30,
    backgroundColor: '#2c3e50'
  },
  headView: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 30,
  },
  bodyView: {
    flex: 0.6,
    paddingBottom: 20,
  },
  tailView: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headTitle: {
    color: '#e67e22',
    fontSize: 20,
  },
  headSub: {
    color: '#bdc3c7',
    fontSize: 15
  },
  bodyTitle: {
    color: '#bdc3c7',
    fontSize: 16
  },
  bodyText: {
    color: 'white',
    fontSize: 18
  },
  tailText: {
    color: 'white',
    fontSize: 12
  },
  settingIcon: {
    width: 30,
    height: 30,
  },
});