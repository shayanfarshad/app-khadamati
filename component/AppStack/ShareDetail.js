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

class ShareDetail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isModalVisible: false,
            Adv: { subject: "", loc: "", about: "", email: "", field: '', cost: '', phone: "" },

            error: { subject: "", loc: "", about: "", email: "", field: '', cost: '', phone: "" },

            image: null,
            images: null

        }
    }

    _confirmButton = () => {

        if (this.state.Adv.subject === "" || this.state.Adv.email === "" || this.state.Adv.phone === "" || this.state.Adv.about === "" || this.state.Adv.address) {

            let subject = "";
            let email = "";
            let phone = "";
            let about = "";


            if (this.state.Adv.subject === "") { subject = "نام را وارد کنید" };

            if (this.state.Adv.email === "") { NationalCode = "ایمیل را وارد کنید" };

            if (this.state.Adv.phone === "") { Subject = "موبایل خود را وارد کنید" };

            if (this.state.Adv.about === "") { City = "درباره من نمی تواند خالی باشد" };

            if (this.state.Adv.address === "") { Phone = "آدرس خود را وارد کنید" };

            this.setState({ error: { ...this.state.error, subject: subject, email: email, phone: phone, about: about, address: address } });

        } else {

            this._savePersonalData();

        }

    };

    async _savePersonalData() {
        AsyncStorage.setItem('Adv', this.state.Adv)
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
    cleanupImages = () => {
        ImagePicker.clean().then(() => {
            // console.log('removed tmp images from tmp directory');
            alert('Temporary images history cleared')
        }).catch(e => {
            alert(e);
        });
    }
    _ImagePicker = () => {

        ImagePicker.openPicker({
            width: 500,
            height: 500,
            multiple: true,
            cropping: true,
            freeStyleCropEnabled: true,
            forceJpg: true,
            //   cropperCircleOverlay: true,
            includeBase64: true,
        }).then(images => {
            this.setState({
                image: null,
                images: images.map(i => {
                    // console.log('received image', i);
                    return { uri: i.path, width: i.width, height: i.height, mime: i.mime };
                })
            });
        }).catch(e => alert(e));
    };

    renderImage = () => {
        return (
            <View style={{ width: '100%', marginTop: 10, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                <FlatList
                    horizontal={true}
                    data={this.state.images}
                    keyExtractor={item => item.uri}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ width: 150, height: 150, borderWidth: 1, borderRadius: 10, elevation: 2, overflow: 'hidden', marginHorizontal: 10 }}>
                                <Image source={item} style={{ width: 150, height: 150, resizeMode: 'cover' }} />
                            </View>
                        )
                    }}
                >

                </FlatList>
            </View>
        )
    }
    addLocation = () => {
        this.props.navigation.navigate('Loc')
    }

    addResume = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible })
    }
    render() {
        return (
            <View style={{ flex: 1, paddingTop: 30, backgroundColor: 'white', justifyContent: 'flex-end' }}>
                <ScrollView
                    keyboardShouldPersistTaps='handled'>
                    <View style={{ flex: 0.08, borderRadius: 5, backgroundColor: "white", justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity style={{ width: '60%', height: 40, flexDirection: 'row', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', elevation: 2, borderRadius: 10 }} onPress={() => this._ImagePicker()}>
                            <Text>عکس آگهی خود را انتخاب کنید</Text>
                            <Icon name='plus' type='FontAwesome5' style={{ fontSize: 16, color: "black", marginHorizontal: 10 }} />
                        </TouchableOpacity>
                    </View>
                    <ScrollView horizontal='true'>
                        {this.renderImage()}
                    </ScrollView>
                    <View style={{ flex: 1 }}>

                        <TextField
                            label='عنوان آگهی *'
                            ref={(ref) => this.subject = (ref)}
                            fontSize={18}
                            labelOffset={{ x1: 190 }}
                            containerStyle={{ flex: 1, marginHorizontal: 10, direction: 'rtl' }}
                            titleTextStyle={{ textAlign: 'right', width: '98%' }}
                            style={{ fontFamily: 'IRANSansMobile_Light', fontSize: 15 }}
                            labelTextStyle={{ paddingTop: 10, direction: 'rtl', textAlign: 'right', fontFamily: 'IRANSansMobile_Medium' }}
                            keyboardType={'default'}
                            returnKeyType={'next'}
                            baseColor='purple'
                            tintColor='#ff1654'
                            maxLength={40}
                            error={this.state.error.subject}
                            onSubmitEditing={() => this.email.focus()}
                            onChangeText={(text) => this.setState({ Adv: { ...this.state.Adv, subject: text }, error: { ...this.state.error, subject: "" } })}
                            value={this.state.Adv.subject}
                        />


                        <TextField
                            label='شماره موبایل *'
                            ref={(ref) => this.phone = (ref)}
                            fontSize={18}
                            inputContainerStyle={{ flex: 1, flexDirection: 'column', alignItems: 'flex-end' }}
                            labelOffset={{ x1: 190 }}
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
                            onChangeText={(text) => this.setState({ Adv: { ...this.state.Adv, phone: text }, error: { ...this.state.error, phone: "" } })}
                            value={this.state.Adv.phone}
                        />
                        <TextField
                            label='انتخاب محله'
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
                            onChangeText={(text) => this.setState({ Adv: { ...this.state.Adv, about: text }, error: { ...this.state.error, about: "" } })}
                            value={this.state.Adv.about}
                        />


                    </View>
                    <TextField
                        label='توضیحات'
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
                        onChangeText={(text) => this.setState({ Adv: { ...this.state.Adv, about: text }, error: { ...this.state.error, about: "" } })}
                        value={this.state.Adv.about}
                    />

                    <View style={{ flexDirection: 'row-reverse', justifyContent: 'space-around', marginVertical: 20 }}>
                        <TouchableOpacity onPress={this.addLocation} style={{ borderWidth: 1, borderColor: "#ff1654", width: '30%', alignItems: 'center', borderRadius: 10, height: 50, justifyContent: 'center' }}>
                            <Text style={{ fontFamily: 'IRANSansMobile_Medium', fontSize: 16, color: "#ff1654" }}>محدوده آگهی</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0.4, width: '100%', alignItems: 'center' }}>
                        <TouchableOpacity style={{ backgroundColor: "#ff1654", width: '50%', alignItems: 'center', borderRadius: 10, height: 50, justifyContent: 'center' }} onPress={() => this._confirmButton()} >
                            <Text style={{ fontSize: 18, color: "#ffffff" }}>ثبت آگهی</Text>
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
export { ShareDetail }
