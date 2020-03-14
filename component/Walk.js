import React, { Component } from 'react';
import { View, Text, TouchableOpacity ,StyleSheet,Image, StatusBar} from 'react-native';
import LottieView from 'lottie-react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

class Walk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false
    }
  }

  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
    this.props.navigation.navigate('Login')
  }
  render() {

    return (
      <View style={{ flex: 1 }}>
        <AppIntroSlider
          buttonTextStyle={{color:'#F3FFBD'}}
          buttonStyle={{backgroundColor:'#FF1654',borderRadius:5,height:40, justifyContent:'center',alignItems:'center',elevation:5 }}
          dotStyle={{backgroundColor:'#FF1654'}}
          nextLabel='بعدی'
          doneLabel='ورود'
          activeDotStyle={{backgroundColor:'#F3FFBD'}}
          renderItem={({ item }) => {
            return (
              <View style={styles.slide}>
                <StatusBar hidden />
                <Text style={styles.title}>{item.title}</Text>
                <Image source={item.image} style={{width:'60%', height:200}} />
                <Text style={styles.text}>{item.text}</Text>
              </View>
            );
          }}
          onDone={this._onDone}
          slides={slides}

        />
      </View>
    )
  }
}

const slides = [
  {
    key: 'somethun',
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: require('../assets/img/1.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 'somethun-dos',
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require('../assets/img/2.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 'somethun1',
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    image: require('../assets/img/3.png'),
    backgroundColor: '#22bcb5',
  }
];

const styles = StyleSheet.create({
  slide:{
    flex:1,
    width:'100%',
    backgroundColor:'white',
    justifyContent:'space-around',
    alignItems:'center',
    paddingVertical:'10%'
  },
  title: {
    fontSize: 22,
    color: 'black',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 16,
  },
})
export { Walk }