import { StyleSheet } from 'react-native';
import AppColors from '../../config/AppColors';
const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:"100%",
        backgroundColor: AppColors.primary,
        justifyContent:"center",
        alignItems:"center",
        overflow:"hidden"
    },
    Circle_design_Top:{
        width:"120%",
        height:"50%",
        backgroundColor: AppColors.white,
        borderRadius:500,
        position:"absolute",
        top:-80
    },
    body_content:{
        width:"85%",
        minHeight:"60%",
        backgroundColor: AppColors.blueWhite,
        zIndex:5,
        borderRadius:20,
        padding:20,
        alignItems:"center",
        paddingTop:120,
        position:"absolute"
    },
    user_icon:{
        position:"absolute",
        top:-60
    },
    Circle_design_Bottom:{
        width:"120%",
        height:"50%",
        backgroundColor: AppColors.white,
        borderRadius:500,
        position:"absolute",
        bottom:-80
    },
    user_password_input:{
        marginTop:20
    }
});
export default styles;