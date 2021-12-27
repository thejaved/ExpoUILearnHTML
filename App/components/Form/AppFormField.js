import { View, StyleSheet } from 'react-native';
import AppInput from '../AppInput/AppInput';
import ErrorsMassages from './ErrorsMassages';
import { useFormikContext } from 'formik';

const AppFormField = ({name, ...otherProps}) =>{
    const {handleChange, errors, setFieldTouched, touched} = useFormikContext()
 return (
        <View style={styles.container}>
            <AppInput
                onChangeText={handleChange(name)} 
                onBlur={()=>setFieldTouched(name)}
                {...otherProps}
            />
            <ErrorsMassages visible={touched[name]} errors={errors[name]}/>
        </View>
        );
    }

const styles = StyleSheet.create({
    container:{
        width:"100%"
    }
});

export default AppFormField;