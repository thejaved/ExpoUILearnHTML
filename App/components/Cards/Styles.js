import { StyleSheet } from "react-native";
import AppColors from "../../config/AppColors";

const styles = StyleSheet.create({
    container:{
        width:140,
        height:200,
        backgroundColor: AppColors.white,
        margin:5,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10
    },
    Image_Html_Icon:{
        width:70,
        height:70
    },
    cards_heading:{
        color: AppColors.black,
        paddingTop:10
    }
});

export default styles;