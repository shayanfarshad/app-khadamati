/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { AnimatedCircleBarComponent } from 'react-navigation-custom-bottom-tab-component/AnimatedCircleBarComponent';
import { FlexibleTabBarComponent } from 'react-navigation-custom-bottom-tab-component/FlexibleTabBarComponent';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';
import { HomeScreen } from './component/AppStack/HomeScreen';
import { AddScreen } from './component/AppStack/AddScreen';
import { ProfileScreen } from './component/AppStack/ProfileScreen';
import { CatScreen } from './component/AppStack/CatScreen';
import { SearchScreen } from './component/AppStack/SearchScreen';
import { Login } from './component/AuthStack/Login';
import { Auth } from './component/AuthStack/Auth';
import { Walk } from './component/Walk';
import { LoadScreen } from './component/LoadScreen';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    let oldRender = Text.render;
    Text.render = function (...args) {
      let origin = oldRender.call(this, ...args);
      return React.cloneElement(origin, {
        style: [{ fontFamily: 'IRANSansMobile_Light' }, origin.props.style],
      });
    };
  }

  render() {
    return (
      <SafeAreaProvider>
        <AppContainer />
      </SafeAreaProvider>
    )
  }

}

const TabNavigator = createMaterialTopTabNavigator(
  {
    Pro: { screen: ProfileScreen, navigationOptions: { title: 'کاربری' } },
    Search: { screen: SearchScreen, navigationOptions: { title: 'جستجو' } },
    Add: { screen: AddScreen, navigationOptions: { title: 'آگهی' } },
    Cat: { screen: CatScreen, navigationOptions: { title: 'دسته بندی' } },
    Home: { screen: HomeScreen, navigationOptions: { title: 'خانه' } },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({

      tabBarIcon: ({ focused, horizontal, tintColor, props }) => {
        const { routeName } = navigation.state;
        let IconComponent = FontAwesome5;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'home';
          // IconComponent = ConsultationIconWithBadge;
        } else if (routeName === 'Cat') {
          iconName = 'bars'
        } else if (routeName === 'Add') {
          iconName = 'plus-circle';
        } else if (routeName === 'Search') {
          iconName = 'search';
        }
        else if (routeName === 'Pro') {
          iconName = 'user-cog';
        }
        return (
          <IconComponent {...props} name={iconName} style={{ fontSize: 25 }} color={focused ? '#FF1654' : '#faa7be'} />
        );
        // You can return any component that you like here!
      },

      initialRouteName: 'Home',

      tabBarComponent: props => <AnimatedCircleBarComponent {...props} style={{paddingVertical:10 , backgroundColor:'white',borderTopWidth:0, borderColor:'white',elevation:5}} labelStyle={{ backgroundColor: 'white',borderRadius:5 , paddingHorizontal:5, paddingVertical:5,color:'white' }} />,
      tabBarPosition: 'bottom',
      tabBarOptions: {
        showLabel: false,
        swipeEnabled: true,
        showIcon: true,
        labelStyle: {
          fontSize: 10,
          fontFamily: 'IRANSansMobile_Bold',
        },
        iconStyle: {
          width: '100%',
        },
        indicatorStyle: {
          opacity: 0,
        },
      }
    }),
  }
);

const AuthStack = createStackNavigator(
  { Login: Login, Auth: Auth, Walk: Walk },
  {
    initialRouteName: 'Walk',
    headerMode: 'none',
  });

const AppStack = createStackNavigator({ Tab: TabNavigator }, {
  headerMode: 'none',
  initialRouteName: 'Tab'
});

const AppContainer = createAppContainer(createAnimatedSwitchNavigator(
  {
    Load: LoadScreen,
    Auth: AuthStack,
    App: AppStack,

  },
  {
    initialRouteName: 'Load',
    // The previous screen will slide to the bottom while the next screen will fade in
    transition: (
      <Transition.Together>
        <Transition.Out
          type="fade"
          durationMs={400}
          interpolation="easeIn"
        />
        <Transition.In type="fade" durationMs={500} />
      </Transition.Together>
    ),
  },
),
);

const styles = StyleSheet.create({

});

export default App;
