import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffb3f3'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  tree: {
    width: 40,
    height: 50
  },
  blissvalley: {
    width: 200,
    color: 'white',
    fontFamily: 'PressStart2P',
    fontSize: 20,
    textShadowColor: '#a400ff',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 1
  },

  pics: {
    width: 200,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: 60
  }
})

export default styles
