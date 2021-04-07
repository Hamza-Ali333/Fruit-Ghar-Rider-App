import React, { useState } from 'react';
import {
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';



import MyButton from '../components/MyButton';
import MyTextInput from '../components/MyTextInput';
import Colors from '../constants/Colors';
import Paddings from '../constants/Paddings';
import NormalText from '../components/NormalText';
import ErrorText from '../components/RedColorText';



const LoginScreen = props => {
    const [errorVisibility, setErrorVisibility] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    

    return (

        <View style={styles.screen}>

            <Image
                resizeMode='contain'
                style={styles.logoImageStyle}
                source={require('../assets/images/logo.png')}
            />

            {
                errorVisibility ? (<ErrorText style={styles.errorText}>
                    Oh no! Your account or password is incorrect, please check again.
                </ErrorText>) : null
            }

            <MyTextInput
                style={
                    {
                        marginTop: '15%'
                    }
                }
                placeholder="User Name"
                onChangeText={(email) => { setUserEmail(email) }}
                value={userEmail}
            />

            <MyTextInput
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={(password) => { setUserPassword(password) }}
                value={userPassword}
            />

            <View style={styles.forgetTextContainer}>
                <TouchableOpacity onPress={() => {
                    props.navigation.navigate('forgotPasswordScreen')
                }}>
                    <NormalText style={styles.forgetPasswordtext}>
                        Forget Password?
                </NormalText>
                </TouchableOpacity>
            </View>


            <MyButton
                onPress={
                    () => {}
                }
            >
                Login
                    </MyButton>



            <View style={styles.imagesContainer}>

                <TouchableOpacity onPress={()=> { }}>
                    <Image
                        style={styles.containerImageSize}
                        resizeMode='contain'
                        source={require('../assets/images/facebook.png')}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {}}>
                    <Image
                        style={styles.containerImageSize}
                        resizeMode='contain'
                        source={require('../assets/images/google.png')}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { }}>
                    <Image
                        style={styles.containerImageSize}
                        resizeMode='contain'
                        source={require('../assets/images/twitter.png')}
                    />
                </TouchableOpacity>

            </View>


            <View style={styles.notHaveAcountTextContainer}>
                <TouchableOpacity
                    onPress={() => {
                        props.navigation.push('createAccountScreen')
                    }}
                   
                    style={styles.newAcountText}> 

                    <NormalText>
                        You don’t have an account?
    </NormalText>

                    <ErrorText
                        style={{
                            marginLeft: 5,
                        }}>
                        Sign up
    </ErrorText>

                </TouchableOpacity>
            </View>




        </View>


    )
}



const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: Paddings.normalPadding,
        alignItems: 'center',
    },
    logoImageStyle: {
        height: '20%',
        width: '100%',
        marginTop: '20%'
    },
    forgetTextContainer: {
        width: '90%',
    },
    forgetPasswordtext: {
        textAlign: 'right',
        color: Colors.textGrayColor,
    },
    errorText: {
        marginLeft: 8,
        marginTop: 40,
    },
    imagesContainer: {
        flexDirection: 'row',
        width: '60%',
        marginTop: 30,
        height: 60,
        justifyContent: 'space-between'
    },
    containerImageSize: {
        width: 40,
        height: 40,
    },
    newAcountText: {
        flexDirection: 'row',
        width: '60%',
        alignContent: 'flex-end',
        justifyContent: 'space-between'
    },
    loginButton: {
        marginTop: 20
    },
    notHaveAcountTextContainer: {
        height: 100,
        width: '90%',
        marginTop: '5%',
        alignItems: 'center'
    }
});

export default LoginScreen;