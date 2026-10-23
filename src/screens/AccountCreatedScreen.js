import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
  ScrollView,
  Linking,
  Alert,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function AccountCreatedScreen({ navigation, route }) {
  // Recebe o e-mail preenchido no ecrã de Registo ou usa o valor padrão do Figma
  const emailUsuario = route?.params?.email || 'seuemail@exemple.com';

  const handleAbrirEmail = async () => {
    try {
      await Linking.openURL('mailto:');
    } catch (error) {
      Alert.alert('Aviso', 'Não foi possível abrir a aplicação de e-mail.');
    }
  };

  const handleReenviarEmail = () => {
    Alert.alert(
      'E-mail reenviado',
      `Enviámos um novo link de verificação para ${emailUsuario}.`
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#EFECE6" />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Logomarca no Topo */}
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/LOGOMARCAHS.png')}
            style={styles.logoImage}
            resizeMode="contain"
          />
        </View>

        {/* Ilustração Central do E-mail */}
        <View style={styles.illustrationContainer}>
          <Image
            source={require('../../assets/Iconeemail.png')}
            style={styles.emailIllustration}
            resizeMode="contain"
          />
        </View>

        {/* Textos Principais */}
        <View style={styles.textSection}>
          <Text style={styles.title}>Cadastro realizado!</Text>
          <Text style={styles.subtitle}>Agora, verifique seu e-mail.</Text>
          <Text style={styles.helperLabel}>
            Enviamos um link de verificação para:
          </Text>
        </View>

        {/* Caixa de Exibição do E-mail */}
        <View style={styles.emailBox}>
          <Feather
            name="mail"
            size={22}
            color="#054441"
            style={styles.mailIcon}
          />
          <Text style={styles.emailText} numberOfLines={1}>
            {emailUsuario}
          </Text>
        </View>

        {/* Instrução de Ativação */}
        <Text style={styles.instructionText}>
          Acesse sua caixa de entrada e toque no link{'\n'}para confirmar seu
          e-mail e ativar sua conta.
        </Text>

        {/* Botões de Ação */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.primaryButton}
            activeOpacity={0.85}
            onPress={handleAbrirEmail}
          >
            <Text style={styles.primaryButtonText}>Abrir meu e-mail</Text>
            <Feather
              name="arrow-right"
              size={24}
              color="#FFFFFF"
              style={styles.buttonArrow}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            activeOpacity={0.75}
            onPress={handleReenviarEmail}
          >
            <Text style={styles.secondaryButtonText}>Reenviar e-mail</Text>
          </TouchableOpacity>
        </View>

        {/* Secção de Ajuda / Spam */}
        <View style={styles.spamSection}>
          <Text style={styles.spamTitle}>Não encontrou a mensagem?</Text>
          <Text style={styles.spamSubtitle}>
            Confirma também o spam ou lixo eletrônico.
          </Text>

          <TouchableOpacity
            style={styles.correctEmailButton}
            onPress={() => navigation && navigation.goBack()}
          >
            <Text style={styles.correctEmailText}>
              Corrigir endereço de e-mail
            </Text>
          </TouchableOpacity>
        </View>

        {/* Rodapé */}
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={() => navigation && navigation.navigate('Login')}
          >
            <Text style={styles.footerText}>
              Já confirmou?{' '}
              <Text style={styles.footerBold}>Voltar para Login</Text>
            </Text>
          </TouchableOpacity>

          <Image
            source={require('../../assets/Linha.png')}
            style={styles.bottomLine}
            resizeMode="contain"
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFECE6',
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 26,
    paddingTop: 42,
    paddingBottom: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  /* --- Topo e Ilustração --- */
  logoContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  logoImage: {
    width: 230,
    height: 60,
  },
  illustrationContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  emailIllustration: {
    width: 230,
    height: 230,
  },

  /* --- Títulos --- */
  textSection: {
    alignItems: 'center',
    marginBottom: 14,
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    color: '#054441',
    textAlign: 'center',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#054441',
    textAlign: 'center',
    marginBottom: 12,
  },
  helperLabel: {
    fontSize: 16,
    fontWeight: '400',
    color: '#5B706B',
    textAlign: 'center',
  },

  /* --- Caixa de E-mail --- */
  emailBox: {
    width: '100%',
    height: 56,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: '#BFD8D2',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 18,
  },
  mailIcon: {
    marginRight: 14,
  },
  emailText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '700',
    color: '#054441',
  },
  instructionText: {
    fontSize: 15,
    color: '#5B706B',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 22,
  },

  /* --- Botões --- */
  buttonsContainer: {
    width: '100%',
    marginBottom: 20,
  },
  primaryButton: {
    width: '100%',
    height: 58,
    backgroundColor: '#044343',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: 14,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
  },
  buttonArrow: {
    position: 'absolute',
    right: 24,
  },
  secondaryButton: {
    width: '100%',
    height: 56,
    backgroundColor: '#EFECE6',
    borderRadius: 16,
    borderWidth: 1.2,
    borderColor: '#054441',
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondaryButtonText: {
    fontSize: 19,
    fontWeight: '700',
    color: '#054441',
  },

  /* --- Spam e Corrigir E-mail --- */
  spamSection: {
    alignItems: 'center',
    marginBottom: 18,
  },
  spamTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#054441',
    marginBottom: 4,
  },
  spamSubtitle: {
    fontSize: 15,
    color: '#5B706B',
    marginBottom: 18,
    textAlign: 'center',
  },
  correctEmailButton: {
    paddingVertical: 4,
  },
  correctEmailText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#054441',
  },

  /* --- Rodapé --- */
  footer: {
    alignItems: 'center',
    width: '100%',
  },
  footerText: {
    fontSize: 15,
    color: '#054441',
    marginBottom: 14,
  },
  footerBold: {
    fontWeight: '800',
  },
  bottomLine: {
    width: 145,
    height: 5,
  },
});