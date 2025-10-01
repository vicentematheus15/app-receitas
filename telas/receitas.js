import { useState } from 'react'
import {View, Text, TouchableOpacity, ScrollView, Image, StyleSheet} from 'react-native'

export default function Receitas({navegar}){
    const [view, setView] = useState('lista')
    const [receitas, setReceitas] = useState([12])


    return(
        <View>
            <ScrollView>
                <View>
                    <TouchableOpacity onPress={() => navegar('Home')}>
                        <Image 
                      
                        source={require('../assets/arrow-bg.png')}
                        />
                    </TouchableOpacity>
                   <Text>Receitas</Text>
                </View>

                {(view === 'lista') ? (
                    <View>
                        {(receitas.length === 0) ? (
                            <Text>Nenhuma receita cadastrada</Text>
                        ) : (
                            <View></View>
                        )}
                    </View>
                ) : (
                    <View></View>
                )}
            </ScrollView>
        </View>
    )
}
