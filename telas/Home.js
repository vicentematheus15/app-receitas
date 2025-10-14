import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'

// Função que representa a tela Home
export default function Home({navigation}){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Bem vindo!
            </Text>

{/* Botão que, ao ser pressionado, vai para a tela Receitas */}
            <TouchableOpacity 
            onPress={() => navigation.navigate('Receitas')}
            style={styles.button}>
                <Text style={styles.textButton}>
                    Ver Receitas
                </Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
        textAlign: 'center'
    },
    button: {
        backgroundColor: '#435cf9ff',
        padding: 15,
        borderRadius: 10
    },
    textButton: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    }

})