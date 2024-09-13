import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d1d2ff',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    marginHorizontal: 15,
    fontFamily: 'PressStart2P',
    marginVertical: 5,
    color: '#5d17cf',
    textShadowColor: '#ca9de3',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2
  },
  generalQuestion: {
    fontSize: 17,
    fontFamily: 'Consolas',
    letterSpacing: -0.5,
    marginVertical: 5,
    width: '95%',
    marginHorizontal: 15,
    color: '#410091'
  },
  upView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  indicator: {
    fontFamily: 'PressStart2P',
    fontSize: 10,
    marginHorizontal: 15,
    marginVertical: 10,
    color: '#866fd9'
  },
  questionContainer: {
    marginVertical: 30,
    alignItems: 'center'
  },
  question: {
    fontSize: 22,
    marginVertical: 15,
    textAlign: 'center',
    fontFamily: 'Consolas',
    letterSpacing: -1,
    color: '#5d17cf',
    marginHorizontal: 15
  },
  answerBox: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 7,
    width: '65%',
    height: 50,
    borderWidth: 2,
    borderColor: '#170036',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    marginHorizontal: 15
  },
  selectedAnswerBox: {
    backgroundColor: '#e5b5ff'
  },
  answerText: {
    fontSize: 16,
    fontFamily: 'Consolas'
  },
  TouchableOpacityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '75%',
    marginVertical: 20,
    alignItems: 'center',
    marginLeft: 40
  },
  TouchableOpacityText: {
    fontFamily: 'PressStart2P',
    fontSize: 13,
    marginTop: 5
  },
  quiz: {
    position: 'absolute'
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default styles
