import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'

export default function Home({navegar}){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Bem vindo!
            </Text>

            <TouchableOpacity 
            onPress={() => navegar('Receitas')}
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
        backgroundColor: '#f8f8f8', 
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