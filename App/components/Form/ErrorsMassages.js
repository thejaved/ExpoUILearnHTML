import { StyleSheet, Text } from 'react-native';
const ErrorsMassages = ({errors,visible}) =>{
    if(!visible || !errors) return null;
 return (
            <Text style={styles.errors}>{errors}</Text>
        );
    }
const styles = StyleSheet.create({
    errors:{
        textAlign: "center",
        color: "red"
    }
});
export default ErrorsMassages;