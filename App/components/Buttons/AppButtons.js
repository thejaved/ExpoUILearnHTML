import { Text, TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements';
import styles from './ButtonStyles';
const AppButton = ({title, onPress = ()=>{alert('Button Clicked')}, style, backgroundColor = '#000', color = '#fff', ...otherprops}) =>{
 return (
        <TouchableHighlight style={[styles.AppBtn,{backgroundColor}, style]} underlayColor="#71DFE7" onPress={onPress} {...otherprops}>
            <Text style={{color,textAlign:"center"}}>{title}</Text>
        </TouchableHighlight>
        );
    }

const CircleButton = ({title, icon, onPress = ()=>{alert("working fine!")}, size = 50, color = "#000", backgroundColor = "#fff", style, ...otherprops}) =>{
    return(
        <TouchableHighlight style={[{width : size , height : size, backgroundColor, alignItems: 'center',justifyContent:'center', borderRadius: size / 2}, style]} underlayColor="#71DFE7" onPress={onPress} {...otherprops}>
            <Icon type='font-awesome' name={icon} size={size/2} color={color}/>
        </TouchableHighlight>
    )
}
export default AppButton;
export { CircleButton };