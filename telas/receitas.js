import { useState } from 'react'
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native'

export default function Receitas({navegar}){
    const [view, setView] = useState('lista')
    const [receitas, setReceitas] = useState([])


    return(
        <View>
            <ScrollView>
                <View>
                    <TouchableOpacity onPress={() => navegar('Home')}>
                        <Image source={require('../assets/arrow-bg.png')}/>
                    </TouchableOpacity>
                   <Text>Receitas</Text>
                </View>



            </ScrollView>
        </View>
    )
}