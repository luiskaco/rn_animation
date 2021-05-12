import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, Animated} from 'react-native';


// Animate.timing() 
const Animacion1 = () => {

    const [ animacion ] = useState( new Animated.Value(0)); // Valor inicial

    // Nota: Siempre el valor inical va estar en el statre

    useEffect(() => {
        Animated.timing(
            animacion,  
            {
                toValue:1,     // Valor que llega
                duracion: 500 // cantidad de tiempo en llegar
            }
        ).start(); // Iniciar la animaicon

    }, []);

    return ( 
        
        <Animated.View
            style={
                {
                    opacity: animacion
                }
            }
        >
                <Text style={styles.texto}>Animacion 1</Text>
        </Animated.View>

        
     );
}


const styles = StyleSheet.create({
    texto:{
        fontSize:30,
        textAlign: 'center'
    }
});
 
export default Animacion1;