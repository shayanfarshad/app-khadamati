import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, PixelRatio, Image, FlatList, ScrollView, Linking, TextInput, AsyncStorage } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { Icon } from 'native-base';
import {
    TextField,
    FilledTextField,
    OutlinedTextField,
} from 'react-native-material-textfield';
import Modal from "react-native-modal";

class EditProfile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isModalVisible: false,
            profile: { name: "", loc: "", about: "", email: "", field: '', cost: '', phone: "", pic: "", address: "" },

            error: { name: "", loc: "", about: "", email: "", field: '', cost: '', phone: "", pic: "", address: "" },



        }
    }

    _confirmButton = () => {

        if (this.state.profile.name === "" || this.state.profile.email === "" || this.state.profile.phone === "" || this.state.profile.about === "" || this.state.profile.address) {

            let name = "";
            let email = "";
            let phone = "";
            let about = "";
            let address = "";


            if (this.state.profile.name === "") { name = "نام را وارد کنید" };

            if (this.state.profile.email === "") { NationalCode = "ایمیل را وارد کنید" };

            if (this.state.profile.phone === "") { Subject = "موبایل خود را وارد کنید" };

            if (this.state.profile.about === "") { City = "درباره من نمی تواند خالی باشد" };

            if (this.state.profile.address === "") { Phone = "آدرس خود را وارد کنید" };

            this.setState({ error: { ...this.state.error, name: name, email: email, phone: phone, about: about, address: address } });

        } else {

            this._savePersonalData();

        }

    };

    async _savePersonalData() {
        AsyncStorage.setItem('profile', this.state.profile)
        // this.setState({ saveLoading: true });

        // let fetchData = new FormData();
        // fetchData.append("UserID", this.state.userData.UserID);
        // fetchData.append("Personal_Information_String", JSON.stringify(this.state.Personal_Information));
        // fetchData.append("Image_String", this.state.ImageData);

        // try {

        //   let response = await fetch('http://cvproject.rasahr.com/Job/AddPersonalInformation', {
        //     method: 'POST',
        //     headers: {
        //       'Accept': 'application/json',
        //       'Content-Type': 'multipart/form-data',
        //     },
        //     body: fetchData,
        //   });

        //   let responseJson = await response.json();

        //   this.setState({ saveLoading: false });

        // } catch (error) {

        // };

    };
    _ImagePicker = () => {

        ImagePicker.openPicker({
            width: 500,
            height: 500,
            cropping: true,
            freeStyleCropEnabled: true,
            //   cropperCircleOverlay: true,
            includeBase64: true,
        })
            .then(image => {

                this.setState({ profile: { ...this.state.profile, pic: image.path }, ImageData: image.data });

            });

    };
    addLocation = () => {
        this.props.navigation.navigate('Loc')
    }

    addResume = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible })
    }
    render() {
        return (
            <View style={{ flex: 1, paddingTop: 10, backgroundColor: 'white', justifyContent: 'flex-end' }}>

                <ScrollView
                    keyboardShouldPersistTaps='handled'>
                    <View style={{ flex: 0.2, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 10 }} >

                        {this.state.profile.pic ?
                            <Image
                                style={{ width: 100, height: 100, borderRadius: 10, resizeMode: 'cover' }}
                                source={{ uri: this.state.profile.pic }}
                            />
                            :
                            <Image style={{ width: 100, height: 100, borderRadius: 10, resizeMode: 'cover' }}
                                source={require('../../assets/img/user.png')} />
                        }

                        <View style={{ height: 25, width: 25, position: 'absolute', bottom: '1%', right: '39%', borderRadius: 5, backgroundColor: "#fafafa" }}>
                            <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} onPress={() => this._ImagePicker()}>
                                <Icon name='plus' type='FontAwesome5' style={{ fontSize: 16, color: "#2c25ff" }} />
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 0.3, flexDirection: 'row-reverse' }}>
                            <TextField
                                label='نام *'
                                ref={(ref) => this.name = (ref)}
                                fontSize={18}
                                labelOffset={{ x1: 90 }}
                                containerStyle={{ flex: 1, marginHorizontal: 10, direction: 'rtl' }}
                                titleTextStyle={{ textAlign: 'right', width: '98%' }}
                                style={{ fontFamily: 'IRANSansMobile_Light', fontSize: 15 }}
                                labelTextStyle={{ paddingTop: 10, direction: 'rtl', textAlign: 'right', fontFamily: 'IRANSansMobile_Medium' }}
                                keyboardType={'default'}
                                returnKeyType={'next'}
                                baseColor='purple'
                                tintColor='#ff1654'
                                maxLength={40}
                                error={this.state.error.name}
                                onSubmitEditing={() => this.email.focus()}
                                onChangeText={(text) => this.setState({ profile: { ...this.state.profile, name: text }, error: { ...this.state.error, name: "" } })}
                                value={this.state.profile.name}
                            />


                            <TextField
                                label='ایمیل *'
                                ref={(ref) => this.email = (ref)}
                                fontSize={18}
                                labelOffset={{ x1: 90 }}
                                inputContainerStyle={{ flex: 1 }}
                                style={{ fontFamily: 'IRANSansMobile_Light', fontSize: 15 }}
                                containerStyle={{ flex: 1, marginHorizontal: 10, direction: 'rtl' }}
                                titleTextStyle={{ textAlign: 'right', width: '98%' }}
                                labelTextStyle={{ paddingTop: 10, direction: 'rtl', textAlign: 'right', fontFamily: 'IRANSansMobile_Medium' }}
                                keyboardType={'email-address'}
                                returnKeyType={'next'}
                                baseColor='purple'
                                tintColor='#ff1654'
                                error={this.state.error.email}
                                onSubmitEditing={() => this.phone.focus()}
                                onChangeText={(text) => this.setState({ profile: { ...this.state.profile, email: text }, error: { ...this.state.error, email: "" } })}
                                value={this.state.profile.email}
                            />
                        </View>
                        <View style={{ flex: 0.3, flexDirection: 'row-reverse' }}>

                            <TextField
                                label='شماره تماس *'
                                ref={(ref) => this.phone = (ref)}
                                fontSize={18}
                                inputContainerStyle={{ flex: 1, flexDirection: 'column', alignItems: 'flex-end' }}
                                labelOffset={{ x1: 90 }}
                                containerStyle={{ flex: 1, marginHorizontal: 10 }}
                                style={{ fontFamily: 'IRANSansMobile_Light', fontSize: 15 }}
                                titleTextStyle={{ textAlign: 'right', width: '98%' }}
                                labelTextStyle={{ paddingTop: 10, direction: 'rtl', textAlign: 'right', fontFamily: 'IRANSansMobile_Medium' }}
                                keyboardType={'phone-pad'}
                                returnKeyType={'next'}
                                baseColor='purple'
                                tintColor='#ff1654'
                                maxLength={11}
                                error={this.state.error.phone}
                                onSubmitEditing={() => this.field.focus()}
                                onChangeText={(text) => this.setState({ profile: { ...this.state.profile, phone: text }, error: { ...this.state.error, phone: "" } })}
                                value={this.state.profile.phone}
                            />
                            <TextField
                                label='زمینه فعالیت *'
                                ref={(ref) => this.field = (ref)}
                                fontSize={18}
                                inputContainerStyle={{ flex: 1, flexDirection: 'column', alignItems: 'flex-end' }}
                                labelOffset={{ x1: 90 }}
                                containerStyle={{ flex: 1, marginHorizontal: 10 }}
                                style={{ fontFamily: 'IRANSansMobile_Light', fontSize: 15 }}
                                titleTextStyle={{ textAlign: 'right', width: '98%' }}
                                labelTextStyle={{ paddingTop: 10, direction: 'rtl', textAlign: 'right', fontFamily: 'IRANSansMobile_Medium' }}
                                keyboardType={'default'}
                                returnKeyType={'next'}
                                baseColor='purple'
                                tintColor='#ff1654'
                                maxLength={11}
                                error={this.state.error.field}
                                onSubmitEditing={() => this.cost.focus()}
                                onChangeText={(text) => this.setState({ profile: { ...this.state.profile, field: text }, error: { ...this.state.error, field: "" } })}
                                value={this.state.profile.field}
                            />
                        </View>
                    </View>

                    <TextField
                        label='دریافتی *'
                        ref={(ref) => this.cost = (ref)}
                        fontSize={18}
                        inputContainerStyle={{ flex: 1, flexDirection: 'column', alignItems: 'flex-end' }}
                        labelOffset={{ x1: 190 }}
                        containerStyle={{ flex: 1, marginHorizontal: 10 }}
                        style={{ fontFamily: 'IRANSansMobile_Light', fontSize: 15 }}
                        titleTextStyle={{ textAlign: 'right', width: '98%' }}
                        labelTextStyle={{ paddingTop: 10, direction: 'rtl', textAlign: 'right', fontFamily: 'IRANSansMobile_Medium' }}
                        keyboardType={'numeric'}
                        returnKeyType={'next'}
                        baseColor='purple'
                        tintColor='#ff1654'
                        maxLength={11}
                        error={this.state.error.cost}
                        onSubmitEditing={() => this.about.focus()}
                        onChangeText={(text) => this.setState({ profile: { ...this.state.profile, cost: text }, error: { ...this.state.error, cost: "" } })}
                        value={this.state.profile.cost}
                    />

                    <TextField
                        label='درباره من *'
                        ref={(ref) => this.about = (ref)}
                        fontSize={18}
                        labelOffset={{ x1: 190 }}
                        style={{ fontFamily: 'IRANSansMobile_Light', fontSize: 15 }}
                        inputContainerStyle={{ flex: 1, flexDirection: 'column', alignItems: 'flex-end' }}
                        containerStyle={{ flex: 1, marginHorizontal: 10 }}
                        titleTextStyle={{ fontFamily: 'IRANSansMobile_Bold', textAlign: 'right', width: '99%', color: 'red' }}
                        labelTextStyle={{ paddingTop: 10, direction: 'rtl', textAlign: 'right', fontFamily: 'IRANSansMobile_Medium' }}
                        baseColor='purple'
                        tintColor='#ff1654'
                        keyboardType={'default'}
                        returnKeyType={'next'}
                        multiline
                        error={this.state.error.about}
                        onSubmitEditing={() => this.address.focus()}
                        onChangeText={(text) => this.setState({ profile: { ...this.state.profile, about: text }, error: { ...this.state.error, about: "" } })}
                        value={this.state.profile.about}
                    />


                    <TextField
                        label='آدرس *'
                        ref={(ref) => this.address = (ref)}
                        fontSize={18}
                        labelOffset={{ x1: 190 }}
                        inputContainerStyle={{ flex: 1, flexDirection: 'column', alignItems: 'flex-end' }}
                        containerStyle={{ flex: 1.5, marginHorizontal: 10 }}
                        style={{ fontFamily: 'IRANSansMobile_Light', fontSize: 15 }}
                        titleTextStyle={{ textAlign: 'right', width: '99%' }}
                        labelTextStyle={{ paddingTop: 10, direction: 'rtl', textAlign: 'right', fontFamily: 'IRANSansMobile_Medium' }}
                        baseColor='purple'
                        tintColor='#ff1654'
                        keyboardType={'default'}
                        returnKeyType={'next'}
                        multiline
                        error={this.state.error.address}
                        onSubmitEditing={() => this.address.focus()}
                        onChangeText={(text) => this.setState({ profile: { ...this.state.profile, address: text }, error: { ...this.state.error, address: "" } })}
                        value={this.state.profile.address}
                    />
                
                    <View style={{ flexDirection: 'row-reverse', justifyContent: 'space-around', marginVertical: 20 }}>
                        <TouchableOpacity onPress={this.addLocation} style={{ borderWidth: 1, borderColor: "#ff1654", width: '30%', alignItems: 'center', borderRadius: 10, height: 50, justifyContent: 'center' }}>
                            <Text style={{ fontFamily: 'IRANSansMobile_Medium', fontSize: 16, color: "#ff1654" }}>محدوده جغرافیایی</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.addResume} style={{ borderWidth: 1, borderColor: "#ff1654", width: '30%', alignItems: 'center', borderRadius: 10, height: 50, justifyContent: 'center' }}>
                            <Text style={{ fontFamily: 'IRANSansMobile_Medium', fontSize: 16, color: "#ff1654" }}>افزودن سوابق +</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0.4, width: '100%', alignItems: 'center' }}>
                        <TouchableOpacity style={{ backgroundColor: "#ff1654", width: '50%', alignItems: 'center', borderRadius: 10, height: 50, justifyContent: 'center' }} onPress={() => this._confirmButton()} >
                            <Text style={{ fontSize: 18, color: "#ffffff" }}>ذخیره تغییرات</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

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

    },
    cost: {
        flex: 0.5,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'gray',
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5
    },
    rate: {
        flex: 0.5,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 0.5,
        borderColor: 'gray',
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5
    },
    flatitem: {
        width: 240,
        height: 200,
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        borderRadius: 10,
        backgroundColor: 'white',
        elevation: 2,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        paddingBottom: 10,
        overflow: 'hidden',
        marginBottom: 5
    },
    scroll: {
        backgroundColor: 'transparent',
    },

    container: {
        margin: 8,
        marginTop: Platform.select({ ios: 8, android: 32 }),
        flex: 1,
    },

    contentContainer: {
        padding: 8,
    },

    buttonContainer: {
        paddingTop: 8,
        margin: 8,
    },

    safeContainer: {
        flex: 1,
        backgroundColor: '#E8EAF6',
    },


})
export { EditProfile }
