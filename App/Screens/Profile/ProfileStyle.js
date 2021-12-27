import { StyleSheet } from "react-native";
import AppColors from "../../config/AppColors";
const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:"100%",
        backgroundColor: AppColors.blueWhite,
        padding: 20,
        paddingBottom: 350
    },
    user_profile_container:{
        width:"100%",
        height: 200,
        backgroundColor: AppColors.white,
        alignItems:"center",
        borderRadius:10,
        padding:20,
    },
    User_Top:{
        width:"100%",
        height:"100%",
        backgroundColor: AppColors.primary,
        borderRadius:20,
        alignItems:"center",
        padding: 20,
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"center"
    },
    social_icon:{
        marginLeft:10
    },
    setting_btn:{
        position: "absolute",
        top: 15,
        right: 15
    },
    user_profile_design:{
        width:160,
        height:160,
        backgroundColor: AppColors.blueWhite,
        borderRadius:80,
        position:"absolute",
        top:-110,
    },
    user_profile:{
        width:160,
        height:160,
        backgroundColor: AppColors.blueWhite,
        borderRadius:80,
        position:"absolute",
        bottom:-80,
        padding:10,
        justifyContent:"center",
        alignItems:"center",
        overflow:"hidden"
    },
    profile_Image:{
        width:"100%",
        height:"100%",
        borderRadius:80
    },
    User_Image_Get_Btn:{
        top:"50%"
    },
    user_data_container:{
        width:"100%",
        height:"100%",
        backgroundColor: AppColors.white,
        marginTop:20,
        zIndex:-5,
        alignItems:"center",
        borderRadius:10,
        paddingTop:80,
        padding:20
    },
    user_details_container:{
        width:"100%",
        height:200,
        backgroundColor: AppColors.primary,
        marginTop:20,
        borderRadius:20,
        justifyContent:"center",
        alignItems:"center"
    },
    setting_modal_box:{
        width: "100%",
        height:"100%",
        backgroundColor: AppColors.blueWhite,
        padding:20
    },
    modal_close_button:{
        position:"absolute",
        top:"3%",
        right:"3%"
    }
});

export default styles;