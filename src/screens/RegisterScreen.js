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
  Modal,
} from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';

const OPCOES_PERFIL = [
  'Médico(a)',
  'Outro profissional da saúde',
  'Freelancer / Autônomo(a)',
  'Estagiário(a)',
  'Diarista',
  'Outro',
];

export default function RegisterScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [perfil, setPerfil] = useState('');
  const [outroPerfil, setOutroPerfil] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(false);
  const [aceitouTermos, setAceitouTermos] = useState(false);
  const [modalVisivel, setModalVisivel] = useState(false);

  const selecionarPerfil = (opcao) => {
    setPerfil(opcao);
    if (opcao !== 'Outro') setOutroPerfil('');
    setModalVisivel(false);
  };

 const handleCriarConta = () => {
    // Validação simples (opcional)
    if (!nome || !email || !senha) {
      alert('Por favor, preencha os campos obrigatórios.');
      return;
    }

    // Redireciona para a tela de Conta Criada passando o e-mail preenchido
    navigation.navigate('ContaCriada', {
      email: email || 'seuemail@exemple.com',
    });
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
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/logomarcahsync.png')}
            style={styles.logoImage}
            resizeMode="contain"
          />
        </View>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation && navigation.navigate('Login')}
        >
          <Feather name="arrow-left" size={22} color="#054441" />
          <Text style={styles.backButtonText}>Voltar para o login</Text>
        </TouchableOpacity>

        <View style={styles.headerContainer}>
          <Text style={styles.title}>Crie sua conta</Text>
          <Text style={styles.subtitle}>Sua agenda e suas finanças em um só lugar.</Text>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.label}>Nome completo</Text>
          <View style={styles.inputWrapper}>
            <Feather name="user" size={20} color="#054441" style={styles.leftIcon} />
            <TextInput
              style={styles.input}
              placeholder="Como podemos chamar você?"
              placeholderTextColor="#9E9E9E"
              value={nome}
              onChangeText={setNome}
            />
          </View>

          <Text style={styles.label}>E-mail</Text>
          <View style={styles.inputWrapper}>
            <Feather name="mail" size={20} color="#054441" style={styles.leftIcon} />
            <TextInput
              style={styles.input}
              placeholder="seuemail@exemple.com"
              placeholderTextColor="#9E9E9E"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <Text style={styles.label}>Perfil profissional</Text>
          <TouchableOpacity
            style={styles.inputWrapper}
            activeOpacity={0.75}
            onPress={() => setModalVisivel(true)}
          >
            <Feather name="briefcase" size={20} color="#054441" style={styles.leftIcon} />
            <Text style={[styles.selectText, !perfil && styles.placeholderText]}>
              {perfil || 'Selecione seu perfil'}
            </Text>
            <Feather name="arrow-down-circle" size={22} color="#054441" />
          </TouchableOpacity>

          {perfil === 'Outro' && (
            <View>
              <Text style={styles.label}>Qual a sua profissão?</Text>
              <View style={styles.inputWrapper}>
                <Feather name="edit-3" size={20} color="#054441" style={styles.leftIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Informe a sua profissão"
                  placeholderTextColor="#9E9E9E"
                  value={outroPerfil}
                  onChangeText={setOutroPerfil}
                />
              </View>
            </View>
          )}

          <Text style={styles.label}>Senha</Text>
          <View style={styles.inputWrapper}>
            <Feather name="lock" size={20} color="#054441" style={styles.leftIcon} />
            <TextInput
              style={styles.input}
              placeholder="Crie sua senha"
              placeholderTextColor="#9E9E9E"
              secureTextEntry={!mostrarSenha}
              value={senha}
              onChangeText={setSenha}
            />
            <TouchableOpacity onPress={() => setMostrarSenha(!mostrarSenha)}>
              <Feather name={mostrarSenha ? 'eye-off' : 'eye'} size={20} color="#054441" />
            </TouchableOpacity>
          </View>
          <Text style={styles.helperText}>Use uma senha longa e exclusiva.</Text>

          <Text style={styles.label}>Confirmar senha</Text>
          <View style={styles.inputWrapper}>
            <Feather name="lock" size={20} color="#054441" style={styles.leftIcon} />
            <TextInput
              style={styles.input}
              placeholder="Digite a senha novamente"
              placeholderTextColor="#9E9E9E"
              secureTextEntry={!mostrarConfirmarSenha}
              value={confirmarSenha}
              onChangeText={setConfirmarSenha}
            />
            <TouchableOpacity onPress={() => setMostrarConfirmarSenha(!mostrarConfirmarSenha)}>
              <Feather name={mostrarConfirmarSenha ? 'eye-off' : 'eye'} size={20} color="#054441" />
            </TouchableOpacity>
          </View>

          <View style={styles.termsRow}>
            <TouchableOpacity
              style={[styles.checkbox, aceitouTermos && styles.checkboxChecked]}
              onPress={() => setAceitouTermos(!aceitouTermos)}
            >
              {aceitouTermos && <Feather name="check" size={16} color="#FFFFFF" />}
            </TouchableOpacity>
            <Text style={styles.termsText}>
              Aceito os <Text style={styles.termsBold}>Termo de uso</Text> e li a{'\n'}
              <Text style={styles.termsBold}>Politica de privacidade</Text>
            </Text>
          </View>

          <TouchableOpacity
            style={styles.submitButton}
            activeOpacity={0.85}
            onPress={() =>
              navigation.navigate('ContaCriada', {
                email: email || 'seuemail@exemple.com',
              })
            }
          >
            <Text style={styles.submitButtonText}>Criar minha conta</Text>
            <Feather
              name="arrow-right"
              size={24}
              color="#FFFFFF"
              style={styles.submitArrow}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity onPress={() => navigation && navigation.navigate('Login')}>
            <Text style={styles.footerText}>
              Já tem uma conta? <Text style={styles.footerBold}>Entrar</Text>
            </Text>
          </TouchableOpacity>
          <Image
            source={require('../../assets/Linha.png')}
            style={styles.bottomLine}
            resizeMode="contain"
          />
        </View>
      </ScrollView>

      <Modal
        visible={modalVisivel}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisivel(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setModalVisivel(false)}
        >
          <View style={styles.modalCard}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Selecione seu perfil</Text>
              <TouchableOpacity onPress={() => setModalVisivel(false)}>
                <Ionicons name="close" size={24} color="#054441" />
              </TouchableOpacity>
            </View>
            {OPCOES_PERFIL.map((opcao, idx) => (
              <TouchableOpacity
                key={idx}
                style={[styles.optionItem, perfil === opcao && styles.optionItemSelected]}
                onPress={() => selecionarPerfil(opcao)}
              >
                <Text style={[styles.optionText, perfil === opcao && styles.optionTextSelected]}>
                  {opcao}
                </Text>
                {perfil === opcao && <Feather name="check-circle" size={18} color="#054441" />}
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#EFECE6' },
  scrollContent: { flexGrow: 1, paddingHorizontal: 26, paddingTop: 42, paddingBottom: 16 },
  logoContainer: { alignItems: 'center', marginBottom: 18 },
  logoImage: { width: 230, height: 60 },
  backButton: { flexDirection: 'row', alignItems: 'center', marginBottom: 14 },
  backButtonText: { fontSize: 14, fontWeight: '700', color: '#054441', marginLeft: 8 },
  headerContainer: { marginBottom: 18 },
  title: { fontSize: 32, fontWeight: '800', color: '#054441', marginBottom: 4 },
  subtitle: { fontSize: 15, fontWeight: '300', color: '#263238' },
  formContainer: { width: '100%' },
  label: { fontSize: 16, fontWeight: '800', color: '#054441', marginBottom: 6 },
  inputWrapper: {
    width: '100%',
    height: 54,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: '#BFD8D2',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    marginBottom: 14,
  },
  leftIcon: { marginRight: 12 },
  input: { flex: 1, fontSize: 15, color: '#054441' },
  selectText: { flex: 1, fontSize: 15, color: '#054441' },
  placeholderText: { color: '#9E9E9E' },
  helperText: { fontSize: 14, color: '#054441', marginTop: -6, marginBottom: 14 },
  termsRow: { flexDirection: 'row', alignItems: 'center', marginTop: 6, marginBottom: 22 },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 1.2,
    borderColor: '#757575',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  checkboxChecked: { backgroundColor: '#054441', borderColor: '#054441' },
  termsText: { fontSize: 14, color: '#054441', lineHeight: 19 },
  termsBold: { fontWeight: '800' },
  submitButton: {
    width: '100%',
    height: 58,
    backgroundColor: '#044343',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  submitButtonText: { color: '#FFFFFF', fontSize: 20, fontWeight: '700' },
  submitArrow: { position: 'absolute', right: 24 },
  footer: { alignItems: 'center', marginTop: 22 },
  footerText: { fontSize: 15, color: '#054441', marginBottom: 14 },
  footerBold: { fontWeight: '800' },
  bottomLine: { width: 145, height: 5 },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.45)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  modalCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    borderWidth: 1.5,
    borderColor: '#BFD8D2',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  modalTitle: { fontSize: 18, fontWeight: '800', color: '#054441' },
  optionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginBottom: 4,
  },
  optionItemSelected: { backgroundColor: '#E3F2EE' },
  optionText: { fontSize: 16, color: '#263238' },
  optionTextSelected: { fontWeight: '700', color: '#054441' },
});