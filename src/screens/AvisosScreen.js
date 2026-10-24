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

export default function AvisosScreen({ navigation }) {
  const [filtro, setFiltro] = useState('Todos');
  const [todosLidos, setTodosLidos] = useState(false);

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
            {!todosLidos && <View style={styles.notificationDot} />}
          </TouchableOpacity>
        </View>

        {/* Título e Subtítulo */}
        <View style={styles.headerSection}>
          <Text style={styles.pageTitle}>Avisos</Text>
          <Text style={styles.pageSubtitle}>
            Acompanhe o que importa na sua rotina.
          </Text>
        </View>

        {/* Botões de Filtro: Todos / Não lidos */}
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
              filtro === 'NaoLidos' && styles.filterPillActive,
            ]}
            activeOpacity={0.8}
            onPress={() => setFiltro('NaoLidos')}
          >
            <Text
              style={[
                styles.filterText,
                filtro === 'NaoLidos' && styles.filterTextActive,
              ]}
            >
              Não lidos {todosLidos ? '0' : '2'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Secção: HOJE - 22 OUT */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>HOJE - 22 OUT</Text>
          <TouchableOpacity onPress={() => setTodosLidos(true)}>
            <Text style={styles.markReadText}>Marcar todos como lidos</Text>
          </TouchableOpacity>
        </View>

        {/* Cartão 1: Seu próximo plantão */}
        <TouchableOpacity
          style={styles.noticeCardWhite}
          activeOpacity={0.85}
          onPress={() => navigation && navigation.navigate('Agenda')}
        >
          {!todosLidos && <View style={styles.unreadDot} />}

          <View style={styles.cardTopContent}>
            <View style={styles.iconBox}>
              <Ionicons name="calendar-outline" size={24} color="#054441" />
            </View>

            <View style={styles.cardTextGroup}>
              <Text style={styles.cardTitle}>Seu próximo plantão</Text>
              <Text style={styles.cardBodyText}>
                Amanhã, 24 OUT - 07:00 às 19:00{'\n'}Centro Integrado - 12 horas
              </Text>
            </View>
          </View>

          <Text style={styles.cardTimeText}>Hoje, 08:00</Text>
        </TouchableOpacity>

        {/* Cartão 2: Recebimento previsto amanhã */}
        <TouchableOpacity
          style={styles.noticeCardWhite}
          activeOpacity={0.85}
          onPress={() => navigation && navigation.navigate('Financeiro')}
        >
          {!todosLidos && <View style={styles.unreadDot} />}

          <View style={styles.cardTopContent}>
            <View style={styles.iconBox}>
              <MaterialCommunityIcons
                name="wallet-outline"
                size={26}
                color="#054441"
              />
            </View>

            <View style={styles.cardTextGroup}>
              <Text style={styles.cardTitle}>Recebimento previsto amanhã</Text>
              <Text style={styles.cardBodyText}>
                R$ 2.125,00 líquidos previstos{'\n'}Referente ao plantão de 23
                de Outubro
              </Text>
            </View>
          </View>

          <Text style={styles.cardTimeText}>Hoje, 09:00</Text>
        </TouchableOpacity>

        {/* Secção: ANTERIORES */}
        {filtro === 'Todos' && (
          <>
            <View style={styles.previousHeader}>
              <Text style={styles.sectionTitle}>ANTERIORES</Text>
            </View>

            {/* Cartão 3: Confira os descontos */}
            <TouchableOpacity
              style={styles.noticeCardTinted}
              activeOpacity={0.85}
              onPress={() => navigation && navigation.navigate('Financeiro')}
            >
              <View style={styles.cardTopContent}>
                <View style={styles.iconBoxTinted}>
                  <Feather name="check" size={24} color="#054441" />
                </View>

                <View style={styles.cardTextGroup}>
                  <Text style={styles.cardTitle}>Confira os descontos</Text>
                  <Text style={styles.cardBodyText}>
                    Revise INSS e IRRF antes de{'\n'}confirmar o recebimento do
                    plantão
                  </Text>
                </View>
              </View>

              <Text style={styles.cardTimeText}>18 OUT, 19:22</Text>
            </TouchableOpacity>
          </>
        )}

        {/* Botão Voltar para o Início */}
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

        <Text style={styles.upToDateText}>
          Você está em dia com os avisos anteriores.
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
    color: '#000000',
    fontWeight: '400',
  },
  filterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  filterPill: {
    minWidth: 112,
    height: 44,
    paddingHorizontal: 20,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  filterPillActive: {
    backgroundColor: '#044343',
  },
  filterText: {
    fontSize: 15,
    fontWeight: '800',
    color: '#8D8D8D',
  },
  filterTextActive: {
    color: '#FFFFFF',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  previousHeader: {
    marginTop: 8,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#054441',
  },
  markReadText: {
    fontSize: 13,
    fontWeight: '400',
    color: '#054441',
  },
  noticeCardWhite: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
    position: 'relative',
  },
  noticeCardTinted: {
    backgroundColor: '#DCE8E3',
    borderRadius: 16,
    padding: 16,
    marginBottom: 26,
  },
  unreadDot: {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 9,
    height: 9,
    borderRadius: 4.5,
    backgroundColor: '#BCE0D8',
  },
  cardTopContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
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
  iconBoxTinted: {
    width: 44,
    height: 44,
    borderRadius: 10,
    backgroundColor: '#AAD5CB',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  cardTextGroup: {
    flex: 1,
    paddingRight: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#054441',
    marginBottom: 6,
  },
  cardBodyText: {
    fontSize: 13,
    color: '#054441',
    lineHeight: 18,
  },
  cardTimeText: {
    fontSize: 13,
    color: '#000000',
    marginLeft: 4,
  },
  backHomeButton: {
    width: '82%',
    height: 44,
    backgroundColor: '#6EBDB0',
    borderRadius: 12,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: 22,
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
  upToDateText: {
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