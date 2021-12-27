import { View, Text, Image } from 'react-native';
import AppColors from '../../config/AppColors';
import AppButton from '../Buttons/AppButtons';
import styles from './Styles';
const Cards = ({Cards_title}) =>{
 return (
        <View style={styles.container}>
            <Image source={require('../../assets/htmlIcon.png')} style={styles.Image_Html_Icon}/>
            <Text style={styles.cards_heading}>{Cards_title}</Text>
            <AppButton title='Read More' underlayColor='#71DFE7' backgroundColor={AppColors.primary} color={AppColors.white}/>
        </View>
        );
    }

export default Cards;