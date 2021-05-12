import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, Animated} from 'react-native';


// Animate.timing() 
const Animacion2 = () => {

    const [ animacion ] = useState( new Animated.Value(0)); // Valor inicial

    useEffect(() => {
        Animated.timing(
            animacion,  
            {
                toValue: 450,     // Valor que llega
                duracion: 3000 // cantidad de tiempo en llegar
            }
        ).start(); // Iniciar la animaicon

    }, []);

    return ( 
        
        <Animated.View
            style={[
                styles.caja,
                { 
                    width: animacion,
                    height: animacion
                }
            ]}
        >
                
        </Animated.View>

        
     );
}


const styles = StyleSheet.create({
    caja:{
        width:100,
        height: 100,
        backgroundColor: 'cornflowerblue'
    }
});
 
export default Animacion2;