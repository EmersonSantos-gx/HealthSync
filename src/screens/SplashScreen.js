import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    // Redireciona automaticamente para a tela de Login após 3 segundos
    const timer = setTimeout(() => {
      if (navigation) {
        navigation.replace('Login');
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#EFECE6" />

      {/* Órbita Decorativa Superior Esquerda */}
      <View style={styles.topOrbitOuter}>
        <View style={styles.topOrbitDot} />
        <View style={styles.topOrbitInner} />
      </View>

      {/* Órbita Decorativa Inferior Direita */}
      <View style={styles.bottomOrbitOuter}>
        <View style={styles.bottomOrbitSmallDot} />
        <View style={styles.bottomOrbitInner}>
          <View style={styles.bottomOrbitLargeDot} />
        </View>
      </View>

      {/* Conteúdo Central: Logo + Textos */}
      <View style={styles.centerContent}>
        <View style={styles.brandRow}>
          {/* 
            DICA: Exporte o ícone do logo do Figma como PNG (ex: logo-icon.png),
            coloque na pasta "assets" e descomente o componente <Image /> abaixo:
          */}
          {/* <Image source={require('../../assets/logo-icon.png')} style={styles.logoImage} resizeMode="contain" /> */}

          {/* Ícone provisório estilizado caso ainda não tenha exportado o PNG */}
          <View style={styles.logoIconPlaceholder}>
            <View style={styles.logoShapeLeft} />
            <View style={styles.logoShapeRight} />
          </View>

          <Text style={styles.brandTitle}>
            <Text style={styles.brandBold}>Health</Text>
            <Text style={styles.brandLight}>Sync</Text>
          </Text>
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
    backgroundColor: '#EFECE6', // Fundo bege claro fiel ao layout
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
    width: 68,
    height: 68,
    marginRight: 14,
  },
  logoIconPlaceholder: {
    width: 64,
    height: 64,
    marginRight: 14,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  logoShapeLeft: {
    position: 'absolute',
    left: 4,
    top: 6,
    width: 34,
    height: 38,
    borderWidth: 10,
    borderColor: '#054441',
    borderRightWidth: 0,
    borderTopLeftRadius: 18,
    borderBottomLeftRadius: 18,
    transform: [{ rotate: '-15deg' }],
  },
  logoShapeRight: {
    position: 'absolute',
    right: 4,
    bottom: 6,
    width: 34,
    height: 38,
    borderWidth: 10,
    borderColor: '#054441',
    borderLeftWidth: 0,
    borderTopRightRadius: 18,
    borderBottomRightRadius: 18,
    transform: [{ rotate: '-15deg' }],
  },
  brandTitle: {
    fontSize: 42,
    color: '#054441',
    letterSpacing: -0.5,
  },
  brandBold: {
    fontWeight: '800',
  },
  brandLight: {
    fontWeight: '400',
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