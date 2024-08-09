import { StyleSheet, Dimensions } from 'react-native'
import Bug from '../../components/Bug'
import SaveButton from '../../components/SaveJournal'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  image: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    height: 50,
    width: 200,
    backgroundColor: '#fcd2f5',
    borderWidth: 2,
    borderColor: 'black',
    fontFamily: 'Consolas',
    fontSize: 16,
    margin: 20,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  flower1: {
    position: 'absolute',
    top: 30,
    right: 30
  },
  flower2: {
    position: 'absolute',
    top: 100,
    right: 80
  },
  flower3: {
    position: 'absolute',
    top: 150,
    right: 12
  },
  flower4: {
    position: 'absolute',
    bottom: 10,
    left: 20
  },
  flower5: {
    position: 'absolute',
    bottom: 90,
    left: 100
  },
  flower6: {
    position: 'absolute',
    bottom: 150,
    left: 30
  },
  bubble: {
    width: 200,
    position: 'absolute',
    bottom: -300,
    right: -60
  },
  bug: {
    position: 'absolute',
    bottom: -250,
    right: -30,
    transform: [{ rotate: '-30deg' }]
  },
  question: {
    position: 'absolute',
    fontFamily: 'PressStart2P',
    width: 180,
    fontSize: 10,
    bottom: -106,
    right: -70
  },
  saveButton: {
    alignItems: 'center'
  }
})

export default styles
