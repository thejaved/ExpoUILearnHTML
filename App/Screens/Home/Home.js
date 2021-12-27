import { View, Text, ScrollView, FlatList } from 'react-native';
import AppInput from '../../components/AppInput/AppInput';
import AppScreen from '../../components/AppScreen/AppScreen';
import Cards from '../../components/Cards/Cards';
import CardsData from '../../data/CardsData';
import styles from './HomeStyle';

const Home = () =>{
 return (
        <AppScreen>
            <View style={styles.container}>
                <AppInput IconName={'search'} placeholder={'Type Anything!'}/>
                <Text style={styles.heading}>Learn HTML</Text>
                <ScrollView>
                    <View style={styles.Cards_Container}>
                        {
                            CardsData.map((items)=>{
                                return <Cards key={items.key} Cards_title={items.title}/>
                            })
                        }
                    </View>
                </ScrollView>
            </View>
        </AppScreen>
        );
    }
export default Home;