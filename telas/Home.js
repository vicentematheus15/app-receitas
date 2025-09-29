import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'

export default function Home(){
    return (
        <View>
            <Text>
                Bem vindo!
            </Text>

            <TouchableOpacity>
                <Text>
                    Ver Receitas
                </Text>
            </TouchableOpacity>
        </View>
    )
}