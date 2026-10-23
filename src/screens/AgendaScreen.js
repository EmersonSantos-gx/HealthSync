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

const CABECALHO_DIAS = ['SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB', 'DOM'];

const SEMANAS_OUTUBRO = [
  [null, null, null, 1, 2, 3, 4],
  [5, 6, 7, 8, 9, 10, 11],
  [12, 13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24, 25],
  [26, 27, 28, 29, 30, 31, null],
];

export default function AgendaScreen({ navigation }) {
  const [modoVista, setModoVista] = useState('Calendário');
  const [diaSelecionado, setDiaSelecionado] = useState(24);

  // Dias com eventos/jornadas e dia atual conforme o Figma
  const diasComJornada = [20, 24];
  const diaHoje = 23;

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
            <View style={styles.notificationDot} />
          </TouchableOpacity>
        </View>

        {/* Título e Subtítulo */}
        <View style={styles.headerSection}>
          <Text style={styles.pageTitle}>Minha agenda</Text>
          <Text style={styles.pageSubtitle}>
            Seus plantões, diárias e compromissos.
          </Text>
        </View>

        {/* Botões de Filtro / Visualização */}
        <View style={styles.filterRow}>
          <View style={styles.leftFilters}>
            <TouchableOpacity
              style={[
                styles.filterPill,
                modoVista === 'Calendário' && styles.filterPillActive,
              ]}
              activeOpacity={0.8}
              onPress={() => setModoVista('Calendário')}
            >
              <Text
                style={[
                  styles.filterText,
                  modoVista === 'Calendário' && styles.filterTextActive,
                ]}
              >
                Calendário
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.filterPill,
                modoVista === 'Lista' && styles.filterPillActive,
              ]}
              activeOpacity={0.8}
              onPress={() => setModoVista('Lista')}
            >
              <Text
                style={[
                  styles.filterText,
                  modoVista === 'Lista' && styles.filterTextActive,
                ]}
              >
                Lista
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.filterPillRight} activeOpacity={0.8}>
            <Text style={styles.filterText}>Lista</Text>
          </TouchableOpacity>
        </View>

        {/* Cartão do Calendário Mensal */}
        <View style={styles.calendarCard}>
          <View style={styles.calendarHeader}>
            <Text style={styles.monthTitle}>Outubro 2026</Text>
            <View style={styles.monthArrows}>
              <TouchableOpacity style={styles.arrowBtn}>
                <Feather name="chevron-left" size={22} color="#054441" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.arrowBtn}>
                <Feather name="chevron-right" size={22} color="#054441" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Cabeçalho dos Dias da Semana */}
          <View style={styles.weekHeaderRow}>
            {CABECALHO_DIAS.map((dia) => (
              <Text key={dia} style={styles.weekHeaderText}>
                {dia}
              </Text>
            ))}
          </View>

          {/* Grelha de Dias do Mês */}
          {SEMANAS_OUTUBRO.map((semana, idxSemana) => (
            <View key={idxSemana} style={styles.daysRow}>
              {semana.map((dia, idxDia) => {
                if (!dia) {
                  return <View key={idxDia} style={styles.dayCell} />;
                }

                const isSelected = dia === diaSelecionado;
                const isToday = dia === diaHoje;
                const hasShift = diasComJornada.includes(dia);
                const isLightShift = dia === 20 && !isSelected;

                return (
                  <TouchableOpacity
                    key={idxDia}
                    style={[
                      styles.dayCell,
                      isLightShift && styles.dayCellLightGreen,
                      isToday && !isSelected && styles.dayCellToday,
                      isSelected && styles.dayCellSelected,
                    ]}
                    activeOpacity={0.75}
                    onPress={() => setDiaSelecionado(dia)}
                  >
                    <Text
                      style={[
                        styles.dayNumber,
                        isLightShift && styles.dayNumberLightGreen,
                        isSelected && styles.dayNumberSelected,
                      ]}
                    >
                      {dia}
                    </Text>

                    {hasShift && (
                      <View
                        style={[
                          styles.shiftDot,
                          isSelected && styles.shiftDotSelected,
                        ]}
                      />
                    )}
                  </TouchableOpacity>
                );
              })}
            </View>
          ))}

          {/* Legenda do Calendário */}
          <View style={styles.legendRow}>
            <View style={styles.legendItem}>
              <View style={styles.legendDot} />
              <Text style={styles.legendText}>Com jornada</Text>
            </View>

            <View style={styles.legendItem}>
              <View style={styles.legendBoxToday} />
              <Text style={styles.legendText}>Hoje</Text>
            </View>
          </View>
        </View>

        {/* Barra de Resumo no Mês */}
        <View style={styles.summaryBar}>
          <Text style={styles.summaryBold}>3 Jornadas</Text>
          <Text style={styles.summaryBold}>36 Horas</Text>
          <Text style={styles.summaryRegular}>No mês</Text>
        </View>

        {/* Cabeçalho do Dia Selecionado */}
        <View style={styles.selectedDateHeader}>
          <Text style={styles.selectedDateTitle}>
            Sábado, {diaSelecionado} de Outubro
          </Text>
          <Text style={styles.selectedDateCount}>1 Jornada</Text>
        </View>

        {/* Cartão de Detalhe do Plantão */}
        <View style={styles.shiftDetailCard}>
          <View style={styles.shiftLeftAccent} />

          <View style={styles.shiftCardContent}>
            <Text style={styles.shiftCardTitle}>
              Plantão - Centro Integrado
            </Text>

            <View style={styles.shiftTimeRow}>
              <Feather name="clock" size={16} color="#EFECE6" />
              <Text style={styles.shiftTimeText}>07:00 - 19:00 | 12 Horas</Text>
            </View>

            <View style={styles.shiftBottomRow}>
              <Text style={styles.shiftValueText}>R$ 2.500,00 bruto</Text>

              <View style={styles.confirmedBadge}>
                <Text style={styles.confirmedBadgeText}>Confirmado</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Botão + Adicionar jornada */}
        <TouchableOpacity style={styles.addShiftButton} activeOpacity={0.85}>
          <Feather
            name="plus"
            size={20}
            color="#FFFFFF"
            style={styles.addShiftIcon}
          />
          <Text style={styles.addShiftButtonText}>Adicionar jornada</Text>
        </TouchableOpacity>
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

        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="calendar-outline" size={26} color="#054441" />
          <Text style={[styles.tabLabel, styles.tabLabelActive]}>Agenda</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>
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

  /* --- Topo --- */
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

  /* --- Cabeçalho --- */
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

  /* --- Botões de Filtro --- */
  filterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  leftFilters: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterPill: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 22,
    backgroundColor: '#FFFFFF',
    marginRight: 10,
  },
  filterPillActive: {
    backgroundColor: '#044343',
  },
  filterPillRight: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 22,
    backgroundColor: '#FFFFFF',
  },
  filterText: {
    fontSize: 15,
    fontWeight: '800',
    color: '#054441',
  },
  filterTextActive: {
    color: '#FFFFFF',
  },

  /* --- Cartão do Calendário --- */
  calendarCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 18,
    marginBottom: 16,
  },
  calendarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  monthTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#054441',
  },
  monthArrows: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrowBtn: {
    marginLeft: 14,
    padding: 2,
  },
  weekHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  weekHeaderText: {
    width: 38,
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '800',
    color: '#054441',
  },
  daysRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 6,
  },
  dayCell: {
    width: 38,
    height: 44,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  dayCellLightGreen: {
    backgroundColor: '#B8DDD4',
  },
  dayCellToday: {
    borderWidth: 1.5,
    borderColor: '#054441',
  },
  dayCellSelected: {
    backgroundColor: '#044343',
  },
  dayNumber: {
    fontSize: 17,
    fontWeight: '800',
    color: '#054441',
  },
  dayNumberLightGreen: {
    color: '#2E6F65',
  },
  dayNumberSelected: {
    color: '#FFFFFF',
  },
  shiftDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#054441',
    position: 'absolute',
    bottom: 4,
  },
  shiftDotSelected: {
    backgroundColor: '#56B3A0',
  },

  /* --- Legenda --- */
  legendRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    paddingTop: 6,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 28,
  },
  legendDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#054441',
    marginRight: 8,
  },
  legendBoxToday: {
    width: 15,
    height: 15,
    borderRadius: 4,
    borderWidth: 1.2,
    borderColor: '#054441',
    marginRight: 8,
  },
  legendText: {
    fontSize: 13,
    color: '#5B706B',
    fontWeight: '400',
  },

  /* --- Barra de Resumo --- */
  summaryBar: {
    backgroundColor: '#BCE0D8',
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  summaryBold: {
    fontSize: 16,
    fontWeight: '800',
    color: '#054441',
  },
  summaryRegular: {
    fontSize: 16,
    fontWeight: '400',
    color: '#054441',
  },

  /* --- Detalhe do Dia --- */
  selectedDateHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  selectedDateTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#054441',
  },
  selectedDateCount: {
    fontSize: 15,
    color: '#054441',
    fontWeight: '400',
  },
  shiftDetailCard: {
    backgroundColor: '#044343',
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingRight: 18,
    marginBottom: 20,
    overflow: 'hidden',
  },
  shiftLeftAccent: {
    width: 6,
    height: '78%',
    backgroundColor: '#63B9A8',
    borderRadius: 4,
    marginRight: 12,
  },
  shiftCardContent: {
    flex: 1,
  },
  shiftCardTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  shiftTimeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  shiftTimeText: {
    fontSize: 14,
    color: '#EFECE6',
    marginLeft: 8,
  },
  shiftBottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  shiftValueText: {
    fontSize: 19,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  confirmedBadge: {
    backgroundColor: '#3E8E7E',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 12,
  },
  confirmedBadgeText: {
    fontSize: 13,
    fontWeight: '800',
    color: '#FFFFFF',
  },

  /* --- Botão Adicionar Jornada --- */
  addShiftButton: {
    width: '100%',
    height: 52,
    backgroundColor: '#044343',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addShiftIcon: {
    marginRight: 10,
  },
  addShiftButtonText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#FFFFFF',
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