
import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableWithoutFeedback, Animated } from 'react-native';


const Animacion5 = () => {


    const [ animacion ] = useState( new Animated.Value(1));

    const presionarBtn = () =>{  // Animacion de entrada
        Animated.spring( animacion, {
            toValue: .8
        } ).start();

        // Spring se encarga de la duracion de la animaicion
    };

    const soltarBtn = () => {   // Animacion de salida
        Animated.spring(animacion , {
            toValue: 1,
            friction: 4,// mas bajo, mayor rebote, Controla el reboto , por default 7
            tension:10
        }).start();
    };

    // Objeto de stilos
    const estiloAnimacion = {
        transform: [{ scale: animacion }]
    }

    return ( 
        <View style={styles.contenedor}>
        <TouchableWithoutFeedback
            onPressIn={ () => presionarBtn() }
            onPressOut={ () => soltarBtn() }
        >
            <Animated.View style={[styles.btn, estiloAnimacion]}>
                <Text style={styles.texto} >Iniciar Sesión</Text>
            </Animated.View>
        </TouchableWithoutFeedback>
    </View>

     );
}

const styles = StyleSheet.create({
    contenedor:{
        alignItems: 'center',
    },
    btn:{
        backgroundColor: 'cornflowerblue',
        width:280,
        height:80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    texto:{
        color:'#fff',
        fontWeight:'bold',
        textTransform:'uppercase',
        fontSize:28
    }
});

export default Animacion5;