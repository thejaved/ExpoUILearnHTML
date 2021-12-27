import { Platform, StatusBar, StyleSheet } from "react-native";
import AppColors from "../../config/AppColors";
const styles = StyleSheet.create({container:{paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,backgroundColor: AppColors.blueWhite}});
export default styles;