import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, Animated, View} from 'react-native';


// Animate.timing() 
const Animacion3 = () => {

    const [ animacion ] = useState( new Animated.Value(0)); // Valor inicial

    useEffect(() => {
        Animated.timing(
            animacion,  
            {
                toValue: 360,     // Valor que llega
                duracion: 3000 // cantidad de tiempo en llegar
            }
        ).start(); // Iniciar la animaicon

    }, []);

    // Metodo interpolacion: se va encargar solo de asignar los valovres
    const interpolacion = animacion.interpolate({
        inputRange: [0, 360],
        outputRange: ['0deg', '360deg']
    });

    const estiloAnimacion = {
        transform: [{ rotate: interpolacion }]
    }
    // Nota: La interpolacion te genera una salida que nos ayuda a iterar los valores definidos


    return ( 
        <View>
            <Animated.View 
                style={[styles.caja, estiloAnimacion ]}
            ></Animated.View>
        </View>
     );
}


const styles = StyleSheet.create({
    caja:{
        width:100,
        height: 100,
        backgroundColor: 'cornflowerblue'
    }
});
 
export default Animacion3;