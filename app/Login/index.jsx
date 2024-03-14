import { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext.js'
import { Image, StatusBar, Text, View } from 'react-native'
import { styles } from './style.js'
import Input from '../../components/Input'
import Button from '../../components/Button'

export default function Login({ navigation }) {

    const [error, setError] = useState("");

    const [email, setEmail] = useState("teste@teste.com");
    const [senha, setSenha] = useState("123456");

    const {login} = useContext(AuthContext)

    function handleLogin(){
        if(login(email, senha) === 'ok'){
            navigation.navigate('Comanda')
        }else {
            setError('Acesso negado.')
        }
    }


    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../assets/home.png')} />
            <Text>Sistema</Text>
            <Text style={styles.title}>Comanda</Text>
            <Input placeholder="email" value={email} onChangeText={setEmail} />
            <Input placeholder='senha' value={senha} onChangeText={setSenha} secureTextEntry />
            <Button onPress={handleLogin} >entrar</Button>
            <Text>{error}</Text>
           
            <StatusBar style="auto" />

        </View>
    )
}

