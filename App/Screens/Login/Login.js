import { View } from 'react-native';
import AppColors from '../../config/AppColors';
import styles from './loginStyle';
import * as Yup from "yup";
import { CircleButton } from '../../components/Buttons/AppButtons';
import {AppForm, AppFormField, SubmitButton} from '../../components/Form';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("email"),
    password: Yup.string().required().min(5).matches()
})


const Login = () =>{
 return (
        <View style={styles.container}>
            <View style={styles.Circle_design_Top}></View>
            <View style={styles.body_content}>
                <CircleButton icon={'user'} color={AppColors.white} backgroundColor={AppColors.primary} size={150} style={styles.user_icon}/>
                <AppForm
                initialValues={{ email: '', password: ''}}
                onSubmit={ values => alert(values)}
                validationSchema={validationSchema}
                >

                    <AppFormField 
                    name="email"
                    IconName={'envelope'} 
                    autoCapitalize="none" 
                    autoCorrect={false}
                    placeholder='Email' 
                    keyboardType="email-address" 
                    textContentType="emailAddress"
                    />
                    <AppFormField 
                    name="password"
                    IconName={'lock'} placeholder='Password' 
                    secureTextEntry style={styles.user_password_input} 
                    autoCapitalize="none" 
                    autoCorrect={false} 
                    textContentType="password"
                    />
                    <SubmitButton title={'Login'}/>
                </AppForm>

            </View>
            <View style={styles.Circle_design_Bottom}></View>
        </View>
        );
    }
export default Login;