import React, { useState } from 'react';
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

export default function NotificacoesScreen({ navigation }) {
  const [filtro, setFiltro] = useState('Todos');
  const [todasLidas, setTodasLidas] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#EFECE6" />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Barra Superior */}
        <View style={styles.topBar}>
          <TouchableOpacity style={styles.circleButton} activeOpacity={0.75}>
            <Feather name="menu" size={24} color="#054441" />
          </TouchableOpacity>

          <Image
            source={require('../../assets/logomarcahsync.png')}
            style={styles.logoImage}
            resizeMode="contain"
          />

          <TouchableOpacity style={styles.circleButton} activeOpacity={0.75}>
            <Feather name="bell" size={22} color="#054441" />
            {!todasLidas && <View style={styles.notificationDot} />}
          </TouchableOpacity>
        </View>

        {/* Título e Subtítulo */}
        <View style={styles.headerSection}>
          <Text style={styles.pageTitle}>Notificações</Text>
          <Text style={styles.pageSubtitle}>
            Atualizações, melhorias e novas parcerias.
          </Text>
        </View>

        {/* Filtros: Todos / Atualizações / Melhorias */}
        <View style={styles.filterRow}>
          <TouchableOpacity
            style={[
              styles.filterPill,
              filtro === 'Todos' && styles.filterPillActive,
            ]}
            activeOpacity={0.8}
            onPress={() => setFiltro('Todos')}
          >
            <Text
              style={[
                styles.filterText,
                filtro === 'Todos' && styles.filterTextActive,
              ]}
            >
              Todos
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.filterPill,
              filtro === 'Atualizações' && styles.filterPillActive,
            ]}
            activeOpacity={0.8}
            onPress={() => setFiltro('Atualizações')}
          >
            <Text
              style={[
                styles.filterText,
                filtro === 'Atualizações' && styles.filterTextActive,
              ]}
            >
              Atualizações
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.filterPill,
              filtro === 'Melhorias' && styles.filterPillActive,
            ]}
            activeOpacity={0.8}
            onPress={() => setFiltro('Melhorias')}
          >
            <Text
              style={[
                styles.filterText,
                filtro === 'Melhorias' && styles.filterTextActive,
              ]}
            >
              Melhorias
            </Text>
          </TouchableOpacity>
        </View>

        {/* Banner Destaque: Sempre em Evolução */}
        <View style={styles.bannerCard}>
          <View style={styles.bannerTextGroup}>
            <Text style={styles.bannerTag}>SEMPRE EM EVOLUÇÃO</Text>
            <Text style={styles.bannerTitle}>Mais possibilidades</Text>
            <Text style={styles.bannerSubtitle}>
              para sua rotina profissional.
            </Text>
          </View>
          <Feather name="refresh-cw" size={32} color="#63B9A8" />
        </View>

        {/* Cabeçalho Contador e Marcar Lidas */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            {todasLidas ? '0 não lidas' : '3 não lidas'}
          </Text>
          <TouchableOpacity onPress={() => setTodasLidas(true)}>
            <Text style={styles.markReadText}>Marcar todas como lidas</Text>
          </TouchableOpacity>
        </View>

        {/* Notificação 1: Atualização */}
        {(filtro === 'Todos' || filtro === 'Atualizações') && (
          <View style={styles.notificationCard}>
            {!todasLidas && <View style={styles.unreadDot} />}
            <View style={styles.cardTopContent}>
              <View style={styles.iconBox}>
                <Feather name="refresh-cw" size={22} color="#054441" />
              </View>
              <View style={styles.cardTextGroup}>
                <Text style={styles.cardTypeLabel}>ATUALIZAÇÃO</Text>
                <Text style={styles.cardTitle}>
                  Uma nova experiência de agenda
                </Text>
                <Text style={styles.cardBodyText}>
                  Confira os dias com jornadas cadastradas e encontre seus
                  compromissos no calendário.
                </Text>
              </View>
            </View>

            <View style={styles.cardFooterRow}>
              <Text style={styles.cardTimeText}>23 out · 09:00</Text>
              <TouchableOpacity
                onPress={() => navigation && navigation.navigate('Agenda')}
              >
                <Text style={styles.actionLinkText}>Conhecer atualização</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* Notificação 2: Melhoria */}
        {(filtro === 'Todos' || filtro === 'Melhorias') && (
          <View style={styles.notificationCard}>
            {!todasLidas && <View style={styles.unreadDot} />}
            <View style={styles.cardTopContent}>
              <View style={styles.iconBox}>
                <Feather name="file-text" size={22} color="#054441" />
              </View>
              <View style={styles.cardTextGroup}>
                <Text style={styles.cardTypeLabel}>MELHORIA</Text>
                <Text style={styles.cardTitle}>Seu financeiro, mais claro</Text>
                <Text style={styles.cardBodyText}>
                  Veja o valor bruto, os descontos e o líquido de cada plantão
                  em um só lugar.
                </Text>
              </View>
            </View>

            <View style={styles.cardFooterRow}>
              <Text style={styles.cardTimeText}>22 out · 15:30</Text>
              <TouchableOpacity
                onPress={() => navigation && navigation.navigate('Financeiro')}
              >
                <Text style={styles.actionLinkText}>Ver o que mudou</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* Notificação 3: Parceria */}
        {filtro === 'Todos' && (
          <View style={styles.notificationCard}>
            {!todasLidas && <View style={styles.unreadDot} />}
            <View style={styles.cardTopContent}>
              <View style={styles.iconBox}>
                <Feather name="link" size={22} color="#054441" />
              </View>
              <View style={styles.cardTextGroup}>
                <Text style={styles.cardTypeLabel}>PARCERIA</Text>
                <Text style={styles.cardTitle}>
                  Novas conexões para sua rotina
                </Text>
                <Text style={styles.cardBodyText}>
                  Conheça os serviços dos nossos parceiros e os benefícios
                  disponíveis para você.
                </Text>
              </View>
            </View>

            <View style={styles.cardFooterRow}>
              <Text style={styles.cardTimeText}>21 out · 10:15</Text>
              <TouchableOpacity>
                <Text style={styles.actionLinkText}>Conhecer parceiros</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* Botão de Retorno ao Início */}
        <TouchableOpacity
          style={styles.backHomeButton}
          activeOpacity={0.85}
          onPress={() => navigation && navigation.navigate('Home')}
        >
          <Feather
            name="arrow-left"
            size={22}
            color="#FFFFFF"
            style={styles.backHomeArrow}
          />
          <Text style={styles.backHomeText}>Início</Text>
        </TouchableOpacity>

        <Text style={styles.footerNoteText}>
          Estas são as novidades mais recentes.
        </Text>
      </ScrollView>

      {/* Barra de Navegação Inferior */}
      <View style={styles.bottomTabBar}>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => navigation && navigation.navigate('Home')}
        >
          <Ionicons name="home-outline" size={26} color="#054441" />
          <Text style={[styles.tabLabel, styles.tabLabelActive]}>Início</Text>
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
          <Ionicons name="person-circle-outline" size={28} color="#8D8D8D" />
          <Text style={styles.tabLabel}>Perfil</Text>
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
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
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
  headerSection: {
    marginBottom: 18,
  },
  pageTitle: {
    fontSize: 30,
    fontWeight: '800',
    color: '#054441',
    marginBottom: 4,
  },
  pageSubtitle: {
    fontSize: 15,
    color: '#263238',
    fontWeight: '400',
  },
  filterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  filterPill: {
    paddingHorizontal: 18,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  filterPillActive: {
    backgroundColor: '#044343',
  },
  filterText: {
    fontSize: 14,
    fontWeight: '800',
    color: '#8D8D8D',
  },
  filterTextActive: {
    color: '#FFFFFF',
  },
  bannerCard: {
    backgroundColor: '#044343',
    borderRadius: 18,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  bannerTextGroup: {
    flex: 1,
    paddingRight: 10,
  },
  bannerTag: {
    fontSize: 11,
    fontWeight: '800',
    color: '#63B9A8',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  bannerTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 2,
  },
  bannerSubtitle: {
    fontSize: 14,
    color: '#EFECE6',
    fontWeight: '400',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: '#054441',
  },
  markReadText: {
    fontSize: 13,
    color: '#054441',
    fontWeight: '500',
  },
  notificationCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
    position: 'relative',
  },
  unreadDot: {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 9,
    height: 9,
    borderRadius: 4.5,
    backgroundColor: '#56B3A0',
  },
  cardTopContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  iconBox: {
    width: 44,
    height: 44,
    borderRadius: 10,
    backgroundColor: '#BCE0D8',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  cardTextGroup: {
    flex: 1,
    paddingRight: 10,
  },
  cardTypeLabel: {
    fontSize: 11,
    fontWeight: '800',
    color: '#5B706B',
    marginBottom: 2,
    letterSpacing: 0.4,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#054441',
    marginBottom: 4,
  },
  cardBodyText: {
    fontSize: 13,
    color: '#263238',
    lineHeight: 18,
  },
  cardFooterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    paddingTop: 10,
  },
  cardTimeText: {
    fontSize: 12,
    color: '#8D8D8D',
  },
  actionLinkText: {
    fontSize: 13,
    fontWeight: '800',
    color: '#054441',
  },
  backHomeButton: {
    width: '82%',
    height: 46,
    backgroundColor: '#6EBDB0',
    borderRadius: 12,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginTop: 10,
    marginBottom: 16,
  },
  backHomeArrow: {
    position: 'absolute',
    left: 42,
  },
  backHomeText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  footerNoteText: {
    fontSize: 13,
    color: '#8D8D8D',
    textAlign: 'center',
  },
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