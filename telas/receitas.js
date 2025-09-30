import { useState } from 'react'
import {View, Text, TouchableOpacity, ScrollView} from 'react-native'

export default function Receitas({navegar}){
    const [view, setView] = useState('lista')
    const [receitas, setReceitas] = useState([])


    return(
        <View>
            <ScrollView>

                <Text>Receitas</Text>

                <TouchableOpacity onPress={() => navegar('Home')}>
                    <Text>Voltar</Text>
                </TouchableOpacity>

            </ScrollView>
        </View>
    )
}