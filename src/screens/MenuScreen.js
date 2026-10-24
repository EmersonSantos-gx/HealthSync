import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
  ScrollView,
} from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

export default function MenuScreen({ navigation }) {
  const handleClose = () => {
    if (navigation && navigation.canGoBack()) {
      navigation.goBack();
    } else if (navigation) {
      navigation.navigate('Home');
    }
  };

  const handleLogout = () => {
    if (navigation) {
      navigation.replace('Login');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#EFECE6" />

      {/* Cabeçalho Creme com Canto Inferior Direito Arredondado */}
      <View style={styles.topHeader}>
        <TouchableOpacity
          style={styles.closeButton}
          activeOpacity={0.7}
          onPress={handleClose}
        >
          <Feather name="x" size={32} color="#054441" />
        </TouchableOpacity>

        <Image
          source={require('../../assets/logomarcahsync.png')}
          style={styles.logoImage}
          resizeMode="contain"
        />

        <Text style={styles.tagline}>
          Sua rotina profissional, em sintonia.
        </Text>
      </View>

      {/* Corpo do Menu em Verde-Escuro */}
      <ScrollView
        contentContainerStyle={styles.menuScrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Secção: AJUDA */}
        <Text style={styles.sectionTitle}>AJUDA</Text>

        <TouchableOpacity style={styles.menuRow} activeOpacity={0.7}>
          <View style={styles.menuLeft}>
            <MaterialCommunityIcons
              name="headset"
              size={28}
              color="#FFFFFF"
              style={styles.menuIcon}
            />
            <Text style={styles.menuLabel}>Central de suporte</Text>
          </View>
          <Feather name="chevron-right" size={22} color="#FFFFFF" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuRow} activeOpacity={0.7}>
          <View style={styles.menuLeft}>
            <Feather
              name="help-circle"
              size={26}
              color="#FFFFFF"
              style={styles.menuIcon}
            />
            <Text style={styles.menuLabel}>Perguntas frequentes</Text>
          </View>
          <Feather name="chevron-right" size={22} color="#FFFFFF" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuRow} activeOpacity={0.7}>
          <View style={styles.menuLeft}>
            <MaterialCommunityIcons
              name="message-processing-outline"
              size={26}
              color="#FFFFFF"
              style={styles.menuIcon}
            />
            <Text style={styles.menuLabel}>Enviar feedback</Text>
          </View>
          <Feather name="chevron-right" size={22} color="#FFFFFF" />
        </TouchableOpacity>

        <View style={styles.divider} />

        {/* Secção: INFORMAÇÕES */}
        <Text style={styles.sectionTitle}>INFORMAÇÕES</Text>

        <TouchableOpacity style={styles.menuRow} activeOpacity={0.7}>
          <View style={styles.menuLeft}>
            <MaterialCommunityIcons
              name="shield-lock-outline"
              size={28}
              color="#FFFFFF"
              style={styles.menuIcon}
            />
            <Text style={styles.menuLabel}>Política de privacidade</Text>
          </View>
          <Feather name="chevron-right" size={22} color="#FFFFFF" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuRow} activeOpacity={0.7}>
          <View style={styles.menuLeft}>
            <MaterialCommunityIcons
              name="file-multiple-outline"
              size={26}
              color="#FFFFFF"
              style={styles.menuIcon}
            />
            <Text style={styles.menuLabel}>Termos de uso</Text>
          </View>
          <Feather name="chevron-right" size={22} color="#FFFFFF" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuRow} activeOpacity={0.7}>
          <View style={styles.menuLeft}>
            <Feather
              name="info"
              size={26}
              color="#FFFFFF"
              style={styles.menuIcon}
            />
            <Text style={styles.menuLabel}>Sobre a HealthSync</Text>
          </View>
          <Feather name="chevron-right" size={22} color="#FFFFFF" />
        </TouchableOpacity>

        <View style={styles.divider} />

        {/* Secção: SAIR DA CONTA */}
        <Text style={styles.sectionTitle}>INFORMAÇÕES</Text>

        <TouchableOpacity
          style={styles.menuRow}
          activeOpacity={0.7}
          onPress={handleLogout}
        >
          <View style={styles.menuLeft}>
            <MaterialCommunityIcons
              name="logout-variant"
              size={28}
              color="#FFFFFF"
              style={styles.menuIcon}
            />
            <Text style={styles.menuLabel}>Sair da conta</Text>
          </View>
          <Feather name="chevron-right" size={22} color="#FFFFFF" />
        </TouchableOpacity>

        {/* Rodapé */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>HEALTHSYNC</Text>
          <View style={styles.bottomIndicator} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03443C',
  },

  /* --- Cabeçalho Superior Creme --- */
  topHeader: {
    backgroundColor: '#EFECE6',
    paddingTop: 48,
    paddingBottom: 32,
    paddingHorizontal: 26,
    borderBottomRightRadius: 85,
    alignItems: 'center',
    position: 'relative',
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginBottom: 4,
    padding: 4,
  },
  logoImage: {
    width: 240,
    height: 62,
    marginBottom: 14,
  },
  tagline: {
    fontSize: 16,
    fontWeight: '300',
    color: '#054441',
    textAlign: 'center',
  },

  /* --- Lista de Opções do Menu --- */
  menuScrollContent: {
    flexGrow: 1,
    paddingHorizontal: 28,
    paddingTop: 28,
    paddingBottom: 18,
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontSize: 19,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 0.5,
    marginBottom: 16,
  },
  menuRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 13,
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    width: 36,
    marginRight: 14,
  },
  menuLabel: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.35)',
    marginVertical: 20,
  },

  /* --- Rodapé --- */
  footer: {
    alignItems: 'center',
    marginTop: 40,
  },
  footerText: {
    fontSize: 13,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 1,
    marginBottom: 14,
  },
  bottomIndicator: {
    width: 145,
    height: 4,
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
  },
});