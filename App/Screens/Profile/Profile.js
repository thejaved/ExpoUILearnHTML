import { useState } from 'react';
import { View, Text, Image, Modal } from 'react-native';
import AppScreen from '../../components/AppScreen/AppScreen';
import { CircleButton } from '../../components/Buttons/AppButtons';
import AppColors from '../../config/AppColors';
import styles from './ProfileStyle';

import * as ImagePicker from 'expo-image-picker';
const Profile = () =>{
    const [openModal, setOpenModal] = useState(false);
    
    const [ImageGet, setImageGet] = useState(null);

    
    const selectImage = async () =>{
        const result = await ImagePicker.launchImageLibraryAsync();
        
        if(!result.cancelled){
            setImageGet(result.uri);
        }
    }

 return (
        <AppScreen>
            <View style={styles.container}>
                <View style={styles.user_profile_container}>
                    <View style={styles.User_Top}>
                        <CircleButton icon={'facebook'} style={styles.social_icon}/>
                        <CircleButton icon={'instagram'} style={styles.social_icon}/>
                        <CircleButton icon={'youtube'} style={styles.social_icon}/>
                        <CircleButton icon={'twitter'} style={styles.social_icon}/>
                    </View>
                    <View style={styles.user_profile}>
                        {ImageGet == null ? <CircleButton icon={'user'} onPress={selectImage} color={AppColors.white} backgroundColor={AppColors.primary} size={120} style={styles.User_Image_Get_Btn}/> : null}
                        <Image source={{uri : ImageGet}} style={styles.profile_Image}/>
                    </View>
                </View>
                <View style={styles.user_data_container}>
                    <View style={styles.user_profile_design}></View>
                        <Text style={{fontSize:20, color:AppColors.black}}>Javed Khan</Text>
                        <CircleButton icon={'cog'} style={styles.setting_btn} color={AppColors.white} backgroundColor={AppColors.primary} onPress={()=>setOpenModal(true)}/>
                        <View style={styles.user_details_container}>
                            <View>
                                <Text>
                                    All Of Here.
                                </Text>
                            </View>
                        </View>
                </View>
            </View>
            <Modal visible={openModal} animationType={"slide"}>
                <View style={styles.setting_modal_box}>
                    <CircleButton icon={'close'} onPress={()=>setOpenModal(false)} color={AppColors.black} style={styles.modal_close_button}/>
                </View>
            </Modal>
        </AppScreen>
        );
    }

export default Profile;