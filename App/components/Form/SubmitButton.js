import { useFormikContext } from 'formik';
import {StyleSheet } from 'react-native';
import AppButton from '../Buttons/AppButtons';
import AppColors from '../../config/AppColors';

const SubmitButton = ({title}) =>{
    const {handleSubmit} = useFormikContext();
 return (
        <AppButton
        onPress={handleSubmit}
        title={title}
        backgroundColor={AppColors.primary}
        style={{width:"90%", marginTop:20, paddingVertical:15}}/>
        );
    }

const styles = StyleSheet.create({
    container:{}
});

export default SubmitButton;