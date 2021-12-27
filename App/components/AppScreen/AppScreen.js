import {SafeAreaView, style } from 'react-native';
import styles from './Styles';
const AppScreen = ({children}) =><SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>;
export default AppScreen;