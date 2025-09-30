import {View, Text, TouchableOpacity} from 'react-native'

export default function Receitas({navegar}){
    return(
        <View>
            <Text>Receitas</Text>

            <TouchableOpacity onPress={() => navegar('Home')}>
                <Text>Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}