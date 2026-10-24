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
import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function PerfilScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#EFECE6" />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Barra Superior */}
        <View style={styles.topBar}>
          <TouchableOpacity style={styles.circleButton} activeOpacity={0.75}
          onPress={() => navigation && navigation.navigate('Menu')}
          >
            
            <Feather name="menu" size={24} color="#054441" />
          </TouchableOpacity>

          <Image
            source={require('../../assets/logomarcahsync.png')}
            style={styles.logoImage}
            resizeMode="contain"
          />

          <TouchableOpacity
            style={styles.circleButton}
            activeOpacity={0.75}
            onPress={() => navigation && navigation.navigate('Notificacoes')}
          >
            <Feather name="bell" size={22} color="#054441" />
            <View style={styles.notificationDot} />
          </TouchableOpacity>
        </View>

        {/* Título da Página */}
        <Text style={styles.pageTitle}>Meu perfil</Text>

        {/* Bloco Central de Identificação */}
        <View style={styles.profileHeader}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatarOuterRing}>
              <Image
                source={require('../../assets/perfil_paul.png')}
                style={styles.avatarImage}
                resizeMode="cover"
              />
            </View>

            {/* Botão flutuante da câmara */}
            <TouchableOpacity
              style={styles.cameraBadge}
              activeOpacity={0.85}
            >
              <Feather name="camera" size={16} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          <Text style={styles.userName}>Paul Nekz</Text>
          <Text style={styles.userEmail}>paul.nekz@exemple.com</Text>
          <Text style={styles.userRole}>Médico - Centro Integrado</Text>

          <TouchableOpacity style={styles.editProfileButton} activeOpacity={0.85}>
            <Text style={styles.editProfileButtonText}>Editar perfil</Text>
          </TouchableOpacity>
        </View>

        {/* Secção: MINHA CONTA */}
        <Text style={styles.sectionLabel}>MINHA CONTA</Text>

        <View style={styles.menuCard}>
          <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
            <View style={styles.menuIconBox}>
              <MaterialCommunityIcons
                name="account-edit-outline"
                size={24}
                color="#054441"
              />
            </View>
            <View style={styles.menuTextGroup}>
              <Text style={styles.menuTitle}>Dados pessoais</Text>
              <Text style={styles.menuSubtitle}>Nome, e-mail e telefone</Text>
            </View>
            <Feather name="chevron-right" size={22} color="#054441" />
          </TouchableOpacity>

          <View style={styles.menuDivider} />

          <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
            <View style={styles.menuIconBox}>
              <Feather name="briefcase" size={20} color="#054441" />
            </View>
            <View style={styles.menuTextGroup}>
              <Text style={styles.menuTitle}>Dados profissionais</Text>
              <Text style={styles.menuSubtitle}>
                Profissão e forma de atuação
              </Text>
            </View>
            <Feather name="chevron-right" size={22} color="#054441" />
          </TouchableOpacity>
        </View>

        {/* Secção: PREFERÊNCIAS E SEGURANÇA */}
        <Text style={styles.sectionLabel}>PREFERÊNCIAS E SEGURANÇA</Text>

        <View style={styles.menuCard}>
          <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
            <View style={styles.menuIconBox}>
              <Feather name="map-pin" size={20} color="#054441" />
            </View>
            <View style={styles.menuTextGroup}>
              <Text style={styles.menuTitle}>Locais de trabalho</Text>
              <Text style={styles.menuSubtitle}>
                Gerencie seus locais e contratantes
              </Text>
            </View>
            <Feather name="chevron-right" size={22} color="#054441" />
          </TouchableOpacity>

          <View style={styles.menuDivider} />

          <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
            <View style={styles.menuIconBox}>
              <MaterialCommunityIcons
                name="calendar-heart"
                size={22}
                color="#054441"
              />
            </View>
            <View style={styles.menuTextGroup}>
              <Text style={styles.menuTitle}>Preferências da agenda</Text>
              <Text style={styles.menuSubtitle}>
                Visualização e lembretes de jornadas
              </Text>
            </View>
            <Feather name="chevron-right" size={22} color="#054441" />
          </TouchableOpacity>

          <View style={styles.menuDivider} />

          <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
            <View style={styles.menuIconBox}>
              <MaterialCommunityIcons
                name="cash-multiple"
                size={22}
                color="#054441"
              />
            </View>
            <View style={styles.menuTextGroup}>
              <Text style={styles.menuTitle}>Preferências financeiras</Text>
              <Text style={styles.menuSubtitle}>
                Moeda e exibição de valores
              </Text>
            </View>
            <Feather name="chevron-right" size={22} color="#054441" />
          </TouchableOpacity>
        </View>

        {/* Cartão Isolado: Acesso à conta */}
        <View style={[styles.menuCard, { marginTop: 4 }]}>
          <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
            <View style={styles.menuIconBox}>
              <Feather name="shield" size={20} color="#054441" />
            </View>
            <View style={styles.menuTextGroup}>
              <Text style={styles.menuTitle}>Acesso à conta</Text>
              <Text style={styles.menuSubtitle}>
                E-mail de acesso e alteração de senha
              </Text>
            </View>
            <Feather name="chevron-right" size={22} color="#054441" />
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Barra de Navegação Inferior */}
      <View style={styles.bottomTabBar}>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => navigation && navigation.navigate('Home')}
        >
          <Ionicons name="home-outline" size={26} color="#8D8D8D" />
          <Text style={styles.tabLabel}>Início</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => navigation && navigation.navigate('Agenda')}
        >
          <Ionicons name="calendar-outline" size={26} color="#8D8D8D" />
          <Text style={styles.tabLabel}>Agenda</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => navigation && navigation.navigate('Financeiro')}
        >
          <MaterialCommunityIcons
            name="wallet-outline"
            size={28}
            color="#8D8D8D"
          />
          <Text style={styles.tabLabel}>Financeiro</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="person-circle-outline" size={28} color="#054441" />
          <Text style={[styles.tabLabel, styles.tabLabelActive]}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFECE6',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 42,
    paddingBottom: 110,
  },

  /* --- Topo --- */
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  circleButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  logoImage: {
    width: 190,
    height: 48,
  },
  notificationDot: {
    position: 'absolute',
    top: 6,
    right: 6,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#E53935',
  },

  /* --- Título e Cabeçalho de Perfil --- */
  pageTitle: {
    fontSize: 30,
    fontWeight: '800',
    color: '#054441',
    marginBottom: 14,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 24,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 12,
  },
  avatarOuterRing: {
    width: 136,
    height: 136,
    borderRadius: 68,
    borderWidth: 3.5,
    borderColor: '#9ED2C6',
    backgroundColor: '#FFFFFF',
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
    borderRadius: 64,
  },
  cameraBadge: {
    position: 'absolute',
    bottom: 2,
    right: 4,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#044343',
    borderWidth: 2,
    borderColor: '#9ED2C6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userName: {
    fontSize: 28,
    fontWeight: '800',
    color: '#054441',
    marginBottom: 2,
  },
  userEmail: {
    fontSize: 15,
    color: '#8D8D8D',
    marginBottom: 4,
  },
  userRole: {
    fontSize: 14,
    fontWeight: '600',
    color: '#054441',
    marginBottom: 14,
  },
  editProfileButton: {
    backgroundColor: '#044343',
    paddingHorizontal: 28,
    paddingVertical: 11,
    borderRadius: 12,
  },
  editProfileButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },

  /* --- Secções e Cartões de Menu --- */
  sectionLabel: {
    fontSize: 13,
    fontWeight: '800',
    color: '#8D8D8D',
    letterSpacing: 0.4,
    marginBottom: 10,
  },
  menuCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 6,
    marginBottom: 18,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  menuIconBox: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: '#BCE0D8',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  menuTextGroup: {
    flex: 1,
    paddingRight: 8,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#054441',
    marginBottom: 2,
  },
  menuSubtitle: {
    fontSize: 13,
    color: '#8D8D8D',
  },
  menuDivider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginLeft: 56,
  },

  /* --- Barra de Navegação Inferior --- */
  bottomTabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 76,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 8,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: '#8D8D8D',
    marginTop: 2,
  },
  tabLabelActive: {
    color: '#054441',
    fontWeight: '800',
  },
});