import { StyleSheet } from "react-native";
import AppColors from "../../config/AppColors";
const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:"100%",
        backgroundColor: AppColors.blueWhite,
        padding:20,
    },
    heading:{
        textAlign:"center",
        paddingVertical:10,
        color: AppColors.white,
        backgroundColor: AppColors.primary,
        margin:10,
        borderRadius:20,
        elevation:5
    },
    Cards_Container:{
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"center",
        paddingBottom: 200
    }
});
export default styles;