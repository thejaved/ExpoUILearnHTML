import { StyleSheet } from "react-native";
import AppColors from "../../config/AppColors";

const styles = StyleSheet.create({
    container:{
        width:"100%",
        backgroundColor: AppColors.white,
        display:"flex",
        flexDirection:"row",
        padding: 10,
        alignItems:"center",
        borderRadius:20
    },
    InputIcons:{
        marginRight:10,
    }
});
export default styles;