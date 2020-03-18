import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  FlatList,
  Dimensions
} from 'react-native';
import {Icon} from 'native-base';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import flag from '../../assets/img/flag.png'
import Modal from 'react-native-modal';
class AddLoaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapRegion: null,
      lastLat: null,
      lastLong: null,
      isVisible: false,
    };
  }
  static navigationOptions = {
    header: false,
  };
  componentDidMount() {
    this.watchID = Geolocation.getCurrentPosition(
      position => {
        // Create the object to update this.state.mapRegion through the onRegionChange function
        let region = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.00922 * 1.5,
          longitudeDelta: 0.00421 * 1.5,
        };
        this.onRegionChange(region, region.latitude, region.longitude);
      },
      error => console.log(error),
    );
  }

  onRegionChange(region, lastLat, lastLong) {
    this.setState({
      mapRegion: region,
      // If there are no new values set the current ones
      lastLat: lastLat || this.state.lastLat,
      lastLong: lastLong || this.state.lastLong,
    });
  }
  _onMapReady = () => {
    this.setState({marginBottom: 0});
  };

  onMapPress(e) {
    let region = {
      latitude: e.nativeEvent.coordinate.latitude,
      longitude: e.nativeEvent.coordinate.longitude,
      latitudeDelta: 0.00922 * 1.5,
      longitudeDelta: 0.00421 * 1.5,
    };
    this.onRegionChange(region, region.latitude, region.longitude);
  }
  goToFull = () => {
    this.setState({isVisible: false});
    this.props.navigation.navigate('Edit', {
      lat: this.state.lastLat,
      lng: this.state.lastLong,
    });
  };
  render() {
    return (
      <View style={{flex:1}}>
        <MapView
          provider={PROVIDER_GOOGLE}
          region={this.state.mapRegion}
          followsUserLocation={true}
          showsUserLocation={true}
          style={styles.map}
          onPress={e => this.onMapPress(e)}>
          <MapView.Marker
            image={flag}
            coordinate={{
              latitude: this.state.lastLat + 0.0006 || -36.82339,
              longitude: this.state.lastLong + 0.0002 || -73.03569,
            }}>
          
          </MapView.Marker>
        </MapView>
        
        <View
          style={{
            width: '100%',
            height: 50,
            backgroundColor: '#48c2a5',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity onPress={() => this.setState({isVisible: true})}>
            <Text style={{color: 'white', textAlign: 'center'}}>
              تایید و ادامه ی ثبت آدرس
            </Text>
          </TouchableOpacity>
        </View>
        <Modal
          isVisible={this.state.isVisible}
          onBackButtonPress={() => this.setState({isVisible: false})}
          onBackdropPress={() => this.setState({isVisible: false})}>
          <View style={styles.Modal}>
            <View
              style={{
                borderBottomWidth: 1,
                borderColor: '#acbfbb',
                justifyContent: 'space-between',
                flexDirection: 'row-reverse',
                width: '100%',
                paddingHorizontal: '5%',
                alignItems: 'center',
                height: 40,
              }}>
              <Text> تایید مکان </Text>
              <Icon
                name="close"
                type="Ionicons"
                style={{color: '#8d9996', fontSize: 18}}
              />
            </View>
            <View>
              <Text style={{fontSize: 14}}>
                آیا از انتخاب مکان بر روی نقشه مطمئن هستید؟
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row-reverse',
                justifyContent: 'space-around',
                alignItems: 'center',
                width: '100%',
                paddingBottom: '5%',
              }}>
              <TouchableOpacity
                onPress={() => this.goToFull()}
                style={{
                  backgroundColor: '#181c1b',
                  justifyContent: 'center',
                  borderRadius: 10,
                  alignItems: 'center',
                  width: 110,
                  height: 40,
                }}>
                <Text style={{color: 'white'}}> بله </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: '#181c1b',
                  justifyContent: 'center',
                  borderRadius: 10,
                  alignItems: 'center',
                  width: 110,
                  height: 40,
                }}>
                <Text style={{color: 'white'}}> خیر </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 0,
  },
  map: {
    
    flex:1,
    width,
    height
  },

  Modal: {
    backgroundColor: 'white',
    borderRadius: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginHorizontal: '10%',
    height: 200,
  },
});
export {AddLoaction};
