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

const DIAS_SEMANA = [
  { label: 'SEG', num: '19' },
  { label: 'TER', num: '20' },
  { label: 'QUA', num: '21' },
  { label: 'QUI', num: '22' },
  { label: 'SEX', num: '23' },
  { label: 'SÁB', num: '24' },
  { label: 'DOM', num: '25' },
];

export default function HomeScreen({ navigation }) {
  const [diaSelecionado, setDiaSelecionado] = useState('22');
  const [mostrarValores, setMostrarValores] = useState(true);
  const [abaAtiva, setAbaAtiva] = useState('Início');

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#EFECE6" />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Barra Superior: Menu + Logo + Notificação */}
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

          {/* Botão do Sino linkado para a tela de Avisos */}
          <TouchableOpacity
            style={styles.circleButton}
            activeOpacity={0.75}
            onPress={() => navigation && navigation.navigate('Notificacoes')}
          >
            <Feather name="bell" size={22} color="#054441" />
            <View style={styles.notificationDot} />
          </TouchableOpacity>
        </View>

        {/* Saudação e Botão + Novo */}
        <View style={styles.greetingSection}>
          <View style={styles.greetingTextContainer}>
            <Text style={styles.dateLabel}>QUINTA-FEIRA, 22 DE OUTUBRO</Text>
            <Text style={styles.greetingTitle}>Olá, Paul Nekz</Text>
            <Text style={styles.greetingSubtitle}>
              Seu trabalho, bem organizado.
            </Text>
          </View>

          <TouchableOpacity
         style={styles.newButton}
          activeOpacity={0.85}
           onPress={() => navigation && navigation.navigate('AdicionarPlantao')}
>
          <Text style={styles.newButtonText}>+ Novo</Text>
</TouchableOpacity>
        </View>

        {/* Calendário Semanal */}
        <View style={styles.weekRow}>
          {DIAS_SEMANA.map((item) => {
            const ativo = diaSelecionado === item.num;
            return (
              <TouchableOpacity
                key={item.num}
                style={[styles.dayPill, ativo && styles.dayPillActive]}
                activeOpacity={0.8}
                onPress={() => setDiaSelecionado(item.num)}
              >
                <Text style={[styles.dayLabel, ativo && styles.dayTextActive]}>
                  {item.label}
                </Text>
                <Text style={[styles.dayNumber, ativo && styles.dayTextActive]}>
                  {item.num}
                </Text>
                {ativo && <View style={styles.activeDayDot} />}
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Secção: Próxima jornada */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Próxima jornada</Text>
          <TouchableOpacity
            onPress={() => navigation && navigation.navigate('Agenda')}
          >
            <Text style={styles.sectionLink}>Ver agenda</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.shiftCard}>
          <View style={styles.shiftTopRow}>
            <View style={styles.dateBadge}>
              <Text style={styles.dateBadgeMonth}>OUT</Text>
              <Text style={styles.dateBadgeDay}>23</Text>
            </View>

            <View style={styles.shiftInfo}>
              <Text style={styles.shiftTitle}>Plantão</Text>
              <Text style={styles.shiftLocation}>Centro Integrado</Text>
            </View>

            <View style={styles.statusBadge}>
              <Text style={styles.statusBadgeText}>Confirmado</Text>
            </View>
          </View>

          <View style={styles.shiftMiddleRow}>
            <View style={styles.timeRow}>
              <Feather name="clock" size={16} color="#8D8D8D" />
              <Text style={styles.timeText}>08:00 - 14:00</Text>
            </View>
            <Text style={styles.shiftPrice}>
              {mostrarValores ? 'R$ 450,00' : 'R$ •••••'}
            </Text>
          </View>

          <View style={styles.dividerLight} />

          <TouchableOpacity
            style={styles.shiftDetailRow}
            activeOpacity={0.7}
            onPress={() => navigation && navigation.navigate('Agenda')}
          >
            <Text style={styles.shiftDetailText}>Ver detalhe da jornada</Text>
            <Feather name="chevron-right" size={20} color="#054441" />
          </TouchableOpacity>
        </View>

        {/* Secção: Seu financeiro */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Seu financeiro</Text>
          <TouchableOpacity
            onPress={() => navigation && navigation.navigate('Financeiro')}
          >
            <Text style={styles.sectionLink}>Ver resumo</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.financeCard}>
          <View style={styles.financeTopRow}>
            <Text style={styles.financeLabel}>Previsto em Outubro</Text>
            <TouchableOpacity
              onPress={() => setMostrarValores(!mostrarValores)}
            >
              <Feather
                name={mostrarValores ? 'eye' : 'eye-off'}
                size={20}
                color="#FFFFFF"
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.financeTotal}>
            {mostrarValores ? 'R$ 6.000,00' : 'R$ •••••••'}
          </Text>

          <View style={styles.financeDivider} />

          <View style={styles.financeBottomRow}>
            <View style={styles.financeCol}>
              <View style={styles.financeIndicatorRow}>
                <View
                  style={[styles.statusDot, { backgroundColor: '#63B9A8' }]}
                />
                <Text style={styles.financeSubLabel}>Recebido</Text>
              </View>
              <Text style={styles.financeSubValue}>
                {mostrarValores ? 'R$ 4.200,00' : 'R$ •••••'}
              </Text>
            </View>

            <View style={styles.financeCol}>
              <View style={styles.financeIndicatorRow}>
                <View
                  style={[styles.statusDot, { backgroundColor: '#D32F2F' }]}
                />
                <Text style={styles.financeSubLabel}>A Receber</Text>
              </View>
              <Text style={styles.financeSubValue}>
                {mostrarValores ? 'R$ 1.800,00' : 'R$ •••••'}
              </Text>
            </View>
          </View>
        </View>

        {/* Secção: Avisos (Link "Ver todos" direciona para a tela de Avisos) */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Avisos</Text>
          <TouchableOpacity
            onPress={() => navigation && navigation.navigate('Avisos')}
          >
            <Text style={styles.sectionLink}>Ver todos</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.alertCard}
          activeOpacity={0.8}
          onPress={() => navigation && navigation.navigate('Avisos')}
        >
          <View style={styles.alertIconBox}>
            <MaterialCommunityIcons
              name="wallet-outline"
              size={26}
              color="#054441"
            />
          </View>
          <View style={styles.alertTextContainer}>
            <Text style={styles.alertTitle}>Recebimento previsto amanhã</Text>
            <Text style={styles.alertSubtitle}>
              R$ 300,00 - Diária de 15 de Outubro
            </Text>
          </View>
          <Feather name="chevron-right" size={22} color="#2E6F65" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.alertCard}
          activeOpacity={0.8}
          onPress={() => navigation && navigation.navigate('Avisos')}
        >
          <View style={styles.alertIconBox}>
            <MaterialCommunityIcons
              name="wallet-outline"
              size={26}
              color="#054441"
            />
          </View>
          <View style={styles.alertTextContainer}>
            <Text style={styles.alertTitle}>Recebimento previsto amanhã</Text>
            <Text style={styles.alertSubtitle}>
              R$ 500,00 - Diária de 13 de Outubro
            </Text>
          </View>
          <Feather name="chevron-right" size={22} color="#2E6F65" />
        </TouchableOpacity>
      </ScrollView>

      {/* Barra de Navegação Inferior (Bottom Tab Bar) */}
      <View style={styles.bottomTabBar}>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => setAbaAtiva('Início')}
        >
          <Ionicons
            name="home-outline"
            size={26}
            color={abaAtiva === 'Início' ? '#054441' : '#8D8D8D'}
          />
          <Text
            style={[
              styles.tabLabel,
              abaAtiva === 'Início' && styles.tabLabelActive,
            ]}
          >
            Início
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => {
            setAbaAtiva('Agenda');
            if (navigation) navigation.navigate('Agenda');
          }}
        >
          <Ionicons
            name="calendar-outline"
            size={26}
            color={abaAtiva === 'Agenda' ? '#054441' : '#8D8D8D'}
          />
          <Text
            style={[
              styles.tabLabel,
              abaAtiva === 'Agenda' && styles.tabLabelActive,
            ]}
          >
            Agenda
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => {
            setAbaAtiva('Financeiro');
            if (navigation) navigation.navigate('Financeiro');
          }}
        >
          <MaterialCommunityIcons
            name="wallet-outline"
            size={28}
            color={abaAtiva === 'Financeiro' ? '#054441' : '#8D8D8D'}
          />
          <Text
            style={[
              styles.tabLabel,
              abaAtiva === 'Financeiro' && styles.tabLabelActive,
            ]}
          >
            Financeiro
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.tabItem}
            onPress={() => navigation && navigation.navigate('Perfil')}
>
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

  /* --- Topo --- */
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 22,
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

  /* --- Saudação --- */
  greetingSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greetingTextContainer: {
    flex: 1,
  },
  dateLabel: {
    fontSize: 12,
    fontWeight: '800',
    color: '#054441',
    letterSpacing: 0.4,
    marginBottom: 4,
  },
  greetingTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#054441',
    marginBottom: 2,
  },
  greetingSubtitle: {
    fontSize: 15,
    color: '#263238',
    fontWeight: '400',
  },
  newButton: {
    backgroundColor: '#044343',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 12,
  },
  newButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },

  /* --- Calendário Semanal --- */
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  dayPill: {
    width: 46,
    height: 66,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  dayPillActive: {
    backgroundColor: '#044343',
  },
  dayLabel: {
    fontSize: 12,
    fontWeight: '800',
    color: '#054441',
    marginBottom: 2,
  },
  dayNumber: {
    fontSize: 18,
    fontWeight: '800',
    color: '#054441',
  },
  dayTextActive: {
    color: '#FFFFFF',
  },
  activeDayDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#56B3A0',
    marginTop: 4,
  },

  /* --- Cabeçalhos de Secção --- */
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#054441',
  },
  sectionLink: {
    fontSize: 15,
    fontWeight: '500',
    color: '#054441',
  },

  /* --- Cartão Próxima Jornada --- */
  shiftCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 16,
    marginBottom: 24,
  },
  shiftTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  dateBadge: {
    width: 54,
    height: 58,
    backgroundColor: '#E5E5E5',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  dateBadgeMonth: {
    fontSize: 12,
    fontWeight: '800',
    color: '#054441',
  },
  dateBadgeDay: {
    fontSize: 20,
    fontWeight: '800',
    color: '#054441',
  },
  shiftInfo: {
    flex: 1,
  },
  shiftTitle: {
    fontSize: 19,
    fontWeight: '800',
    color: '#054441',
  },
  shiftLocation: {
    fontSize: 14,
    color: '#8D8D8D',
  },
  statusBadge: {
    backgroundColor: '#BCE3DA',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
  },
  statusBadgeText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#054441',
  },
  shiftMiddleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#8D8D8D',
    marginLeft: 6,
  },
  shiftPrice: {
    fontSize: 20,
    fontWeight: '800',
    color: '#054441',
  },
  dividerLight: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginBottom: 10,
  },
  shiftDetailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  shiftDetailText: {
    fontSize: 15,
    color: '#054441',
    fontWeight: '500',
  },

  /* --- Cartão Financeiro --- */
  financeCard: {
    backgroundColor: '#044343',
    borderRadius: 18,
    padding: 18,
    marginBottom: 24,
  },
  financeTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  financeLabel: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '400',
  },
  financeTotal: {
    fontSize: 28,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 14,
  },
  financeDivider: {
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.35)',
    marginBottom: 12,
  },
  financeBottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  financeCol: {
    flex: 1,
  },
  financeIndicatorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  statusDot: {
    width: 9,
    height: 9,
    borderRadius: 4.5,
    marginRight: 6,
  },
  financeSubLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  financeSubValue: {
    fontSize: 16,
    fontWeight: '800',
    color: '#FFFFFF',
  },

  /* --- Avisos --- */
  alertCard: {
    backgroundColor: '#BCE0D8',
    borderRadius: 16,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  alertIconBox: {
    width: 46,
    height: 46,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  alertTextContainer: {
    flex: 1,
  },
  alertTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: '#054441',
    marginBottom: 2,
  },
  alertSubtitle: {
    fontSize: 13,
    color: '#6D7E7A',
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