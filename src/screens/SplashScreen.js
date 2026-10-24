import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  Animated,
  Easing,
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default function SplashScreen({ navigation }) {
  // Valores animados para girar as órbitas
  const spinTop = useRef(new Animated.Value(0)).current;
  const spinBottom = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animação contínua da órbita superior (sentido horário)
    Animated.loop(
      Animated.timing(spinTop, {
        toValue: 1,
        duration: 8000, // 8 segundos por volta (suave)
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();

    // Animação contínua da órbita inferior (sentido horário)
    Animated.loop(
      Animated.timing(spinBottom, {
        toValue: 1,
        duration: 10000, // 10 segundos por volta
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();

    // Redireciona automaticamente para a tela de Login após 3 segundos
    const timer = setTimeout(() => {
      if (navigation) {
        navigation.replace('Login');
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation, spinTop, spinBottom]);

  // Conversão dos valores para graus de rotação
  const rotateClockwise = spinTop.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const rotateCounterClockwise = spinBottom.interpolate({
    inputRange: [0, 1],
    outputRange: ['360deg', '0deg'], // Gira no sentido contrário para dar dinamismo
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#EFECE6" />

      {/* Órbita Decorativa Superior Esquerda (Girando) */}
      <Animated.View
        style={[
          styles.topOrbitOuter,
          { transform: [{ rotate: rotateClockwise }] },
        ]}
      >
        <View style={styles.topOrbitDot} />
        <View style={styles.topOrbitInner} />
      </Animated.View>

      {/* Órbita Decorativa Inferior Direita (Girando) */}
      <Animated.View
        style={[
          styles.bottomOrbitOuter,
          { transform: [{ rotate: rotateClockwise }] },
        ]}
      >
        <View style={styles.bottomOrbitSmallDot} />

        {/* Círculo interno girando no sentido oposto */}
        <Animated.View
          style={[
            styles.bottomOrbitInner,
            { transform: [{ rotate: rotateCounterClockwise }] },
          ]}
        >
          <View style={styles.bottomOrbitLargeDot} />
        </Animated.View>
      </Animated.View>

      {/* Conteúdo Central: Logomarca + Textos */}
      <View style={styles.centerContent}>
        <View style={styles.brandRow}>
          {/* Logomarca original exportada do Figma */}
          <Image
            source={require('../../assets/logomarcahsync.png')}
            style={styles.logoImage}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.tagline}>Sua rotina, em sintonia.</Text>

        <Text style={styles.subtitle}>
          Agenda, comunicação e finanças{'\n'}para a vida profissional.
        </Text>
      </View>

      {/* Rodapé */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>HEALTHSYNC</Text>
        <View style={styles.bottomIndicator} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFECE6',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
  },

  /* --- Círculos / Órbitas do Topo Esquerdo --- */
  topOrbitOuter: {
    position: 'absolute',
    top: height * 0.08,
    left: -width * 0.35,
    width: width * 0.65,
    height: width * 0.65,
    borderRadius: (width * 0.65) / 2,
    borderWidth: 1.5,
    borderColor: '#B2D8CE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topOrbitInner: {
    width: width * 0.53,
    height: width * 0.53,
    borderRadius: (width * 0.53) / 2,
    borderWidth: 1.5,
    borderColor: '#B2D8CE',
  },
  topOrbitDot: {
    position: 'absolute',
    top: '14%',
    right: '12%',
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#56B3A0',
  },

  /* --- Círculos / Órbitas da Base Direita --- */
  bottomOrbitOuter: {
    position: 'absolute',
    bottom: height * 0.04,
    right: -width * 0.45,
    width: width * 0.9,
    height: width * 0.9,
    borderRadius: (width * 0.9) / 2,
    borderWidth: 2,
    borderColor: '#A9D2C8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomOrbitInner: {
    width: width * 0.72,
    height: width * 0.72,
    borderRadius: (width * 0.72) / 2,
    borderWidth: 2,
    borderColor: '#A9D2C8',
  },
  bottomOrbitSmallDot: {
    position: 'absolute',
    top: '22%',
    left: '11%',
    width: 13,
    height: 13,
    borderRadius: 6.5,
    backgroundColor: '#56B3A0',
  },
  bottomOrbitLargeDot: {
    position: 'absolute',
    bottom: '6%',
    left: '18%',
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#3E6B64',
  },

  /* --- Conteúdo Central --- */
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 28,
    marginTop: -20,
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
  },
  logoImage: {
    width: 240,
    height: 64,
  },
  tagline: {
    fontSize: 22,
    fontWeight: '700',
    color: '#054441',
    textAlign: 'center',
    marginBottom: 14,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#054441',
    textAlign: 'center',
    lineHeight: 23,
  },

  /* --- Rodapé --- */
  footer: {
    alignItems: 'center',
    paddingBottom: 12,
    width: '100%',
  },
  footerText: {
    fontSize: 13,
    fontWeight: '800',
    color: '#054441',
    letterSpacing: 1.2,
    marginBottom: 16,
  },
  bottomIndicator: {
    width: 145,
    height: 5,
    backgroundColor: '#054441',
    borderRadius: 3,
  },
});