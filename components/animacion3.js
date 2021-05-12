import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, Animated, View} from 'react-native';


// Animate.timing() 
const Animacion3 = () => {

    const [ animacion ] = useState( new Animated.Value(14)); // Valor inicial

    useEffect(() => {
        Animated.timing(
            animacion,  
            {
                toValue: 40,     // Valor que llega
                duracion: 3000 // cantidad de tiempo en llegar
            }
        ).start(); // Iniciar la animaicon

    }, []);

    return ( 
        
        <View>
                <Animated.Text 
                    style={[styles.texto, {fontSize: animacion}]}>
                        Animacion 3
                </Animated.Text>
        </View>

        
     );
}


const styles = StyleSheet.create({
    texto:{
        fontSize:30,
        textAlign: 'center'
    }
});
 
export default Animacion3;