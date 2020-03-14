import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, PixelRatio, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { Icon } from 'native-base';
class ProfileScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    selectPhotoTapped = () => {
        const options = {
            title: 'Select Avatar',
            allowsEditing: 'true',
            cancelButtonTitle: 'انصراف',
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        ImagePicker.showImagePicker(options, response => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled photo picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                let source = { uri: response.uri };

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource: source,
                });
            }
        });
    }

    render() {
        return (
            <View style={{ flex: 1, paddingTop: 20, backgroundColor: 'white' }}>
                <View style={{ flex: 0.2, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                    <View style={{ flex: 0.4, height: 100, paddingHorizontal: '5%', paddingTop: 10 }}>
                        <TouchableOpacity onPress={this.selectPhotoTapped}>
                            <View
                                style={[styles.avatar, styles.avatarContainer, { marginBottom: 40, marginLeft: '5%' }]}>
                                {this.state.avatarSource == null ? (
                                    <Text style={{ fontSize: 20, color: 'white' }}>آپلود عکس</Text>
                                ) : (
                                        <Image style={styles.avatar} source={this.state.avatarSource} />
                                    )}
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0.6, height: 100, paddingRight: '5%', paddingTop: 10 }}>
                        <Text style={{ fontFamily: 'IRANSansMobile_Bold', color: '#3d3638', fontSize: 20 }}>شایان فرشادفر</Text>
                        <Text style={{ color: '#3d3638', fontSize: 16 }}>مهندس برق الکترونیک</Text>
                        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'flex-end', marginTop: 20 }}>
                            <TouchableOpacity style={[styles.infbtn, { backgroundColor: 'gray', marginRight: '25%', }]}>
                                <Icon name='cog' type='FontAwesome5' style={{ color: 'white' }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.infbtn, { marginRight: '4%', }]}>
                                <Icon name='phone' type='FontAwesome5' style={{ color: 'white' }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.infbtn, { marginRight: '4%', }]}>
                                <Icon name='comment-dots' type='FontAwesome5' style={{ color: 'white' }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.infbtn}>
                                <Icon name='map-marker-alt' type='FontAwesome5' style={{ color: 'white' }} />
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
                <View style>
                    <View></View>
                    <View></View>  
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    avatarContainer: {
        backgroundColor: '#ff1654',
        borderColor: '#ff1654',
        borderWidth: 1 / PixelRatio.get(),
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2
    },
    avatar: {
        borderRadius: 10,
        width: 100,
        height: 120,
    },
    infbtn: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2,
        borderRadius: 5,
        backgroundColor: '#ff1654',

    }
})
export { ProfileScreen }