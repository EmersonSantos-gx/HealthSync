import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    console.log('Login com:', email);
    navigation.navigate('Home');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#EFECE6" />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Logomarca + Ilustração Minha Agenda */}
        <View style={styles.heroContainer}>
          <Image
            source={require('../../assets/LOGOMARCAINICIO.png')}
            style={styles.heroImage}
            resizeMode="contain"
          />
        </View>

        {/* Títulos de Boas-vindas */}
        <View style={styles.headerTextContainer}>
          <Text style={styles.title}>Sua rotina, em sintonia.</Text>
          <Text style={styles.subtitle}>
            Entre para organizar seu dia de trabalho.
          </Text>
        </View>

        {/* Formulário de E-mail e Senha */}
        <View style={styles.formContainer}>
          <Text style={styles.label}>E-mail</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
          />

          <TouchableOpacity style={styles.forgotPasswordButton}>
            <Text style={styles.forgotPasswordText}>Esqueceu sua senha?</Text>
          </TouchableOpacity>

          {/* Botão Entrar (LINKADO PARA A ROTA 'Home') */}
          <TouchableOpacity
            style={styles.loginButton}
            activeOpacity={0.85}
            onPress={handleLogin}
          >
            <Text style={styles.loginButtonText}>Entrar</Text>
            <Text style={styles.loginButtonArrow}>→</Text>
          </TouchableOpacity>
        </View>

        {/* Secção Criar Conta (LINKADA PARA A ROTA 'Cadastro') */}
        <View style={styles.registerSection}>
          <Text style={styles.noAccountText}>Ainda não tem uma conta?</Text>

          <TouchableOpacity
            style={styles.createAccountButton}
            activeOpacity={0.75}
            onPress={() => navigation.navigate('Cadastro')}
          >
            <Text style={styles.createAccountText}>Criar minha conta</Text>
          </TouchableOpacity>
        </View>

        {/* Rodapé e Links Legais */}
        <View style={styles.footer}>
          <TouchableOpacity>
            <Text style={styles.legalLink}>Termo de uso</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.legalLink}>Politica de privacidade</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.helpButton}>
            <Text style={styles.helpText}>Precisa de ajuda ?</Text>
          </TouchableOpacity>

          <Image
            source={require('../../assets/Linha.png')}
            style={styles.bottomLine}
            resizeMode="contain"
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
    paddingTop: 36,
    paddingBottom: 14,
    justifyContent: 'space-between',
  },
  heroContainer: {
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 10,
  },
  heroImage: {
    width: '92%',
    height: 270,
  },
  headerTextContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: '#054441',
    textAlign: 'center',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '300',
    color: '#263238',
    textAlign: 'center',
  },
  formContainer: {
    width: '100%',
  },
  label: {
    fontSize: 20,
    fontWeight: '800',
    color: '#054441',
    marginBottom: 8,
  },
  input: {
    width: '100%',
    height: 54,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: '#BFD8D2',
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#054441',
    marginBottom: 16,
  },
  forgotPasswordButton: {
    alignSelf: 'flex-end',
    marginTop: -6,
    marginBottom: 20,
  },
  forgotPasswordText: {
    fontSize: 15,
    color: '#054441',
    fontWeight: '400',
  },
  loginButton: {
    width: '100%',
    height: 58,
    backgroundColor: '#044343',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '700',
  },
  loginButtonArrow: {
    position: 'absolute',
    right: 26,
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: '400',
  },
  registerSection: {
    alignItems: 'center',
    marginTop: 18,
  },
  noAccountText: {
    fontSize: 16,
    color: '#054441',
    marginBottom: 14,
  },
  createAccountButton: {
    width: '100%',
    height: 56,
    backgroundColor: '#E9E6DF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#5B706B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  createAccountText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#054441',
  },
  footer: {
    alignItems: 'center',
    marginTop: 22,
  },
  legalLink: {
    fontSize: 14,
    color: '#054441',
    textDecorationLine: 'underline',
    lineHeight: 19,
  },
  helpButton: {
    marginTop: 14,
    marginBottom: 16,
  },
  helpText: {
    fontSize: 15,
    color: '#054441',
  },
  bottomLine: {
    width: 145,
    height: 5,
  },
});