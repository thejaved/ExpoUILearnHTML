import { View, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';
import AppColors from '../../config/AppColors';
import styles from './Styles';
const AppInput = ({IconName, style ,...otherObject}) =>{
 return (
        <View style={[styles.container, style]}>
            {IconName && <Icon name={IconName} type="font-awesome" color={AppColors.primary} style={styles.InputIcons}/>}
            <TextInput {...otherObject} />
        </View>
        );
    }

export default AppInput;