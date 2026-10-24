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

const PLANTOES_FINANCEIRO = [
  {
    id: '1',
    data: '23 OUT',
    local: 'Centro Integrado',
    status: 'A receber',
    isRecebido: false,
    horario: '07:00 - 19:00   •  12h',
    bruto: 'R$ 2.500,00',
    inss: '-  R$ 275,00',
    irrf: '-  R$ 100,00',
    liquido: 'R$ 2.125,00',
  },
  {
    id: '2',
    data: '20 OUT',
    local: 'Hospital Central',
    status: 'Recebido',
    isRecebido: true,
    horario: '07:00 - 19:00   •  12h',
    bruto: 'R$ 2.000,00',
    inss: '-  R$ 220,00',
    irrf: '-   R$ 80,00',
    liquido: 'R$ 1.700,00',
  },
  {
    id: '3',
    data: '16 OUT',
    local: 'Clínica Horizonte',
    status: 'Recebido',
    isRecebido: true,
    horario: '07:00 - 19:00   •  12h',
    bruto: 'R$ 1.500,00',
    inss: '-  R$ 165,00',
    irrf: '-   R$ 60,00',
    liquido: 'R$ 1.275,00',
  },
];

export default function FinanceiroScreen({ navigation }) {
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

          <TouchableOpacity style={styles.circleButton} activeOpacity={0.75}>
            <Feather name="bell" size={22} color="#054441" />
            <View style={styles.notificationDot} />
          </TouchableOpacity>
        </View>

        {/* Título Principal */}
        <View style={styles.headerSection}>
          <Text style={styles.pageTitle}>Resumo financeiro</Text>
          <Text style={styles.pageSubtitle}>
            Outubro de 2026 - 3 plantões cadastrados
          </Text>
        </View>

        {/* Cartão Principal: Líquido Previsto */}
        <View style={styles.summaryCard}>
          <Text style={styles.summaryHeaderLabel}>LÍQUIDO PREVISTO</Text>
          <Text style={styles.summaryMainValue}>R$ 5.100,00</Text>

          <View style={styles.summaryDivider} />

          <View style={styles.breakdownRow}>
            <View style={styles.breakdownCol}>
              <Text style={styles.breakdownLabel}>Bruto</Text>
              <Text style={styles.breakdownValue}>R$ 6.000,00</Text>
            </View>

            <View style={styles.breakdownCol}>
              <Text style={styles.breakdownLabel}>INSS</Text>
              <Text style={styles.breakdownValue}>- R$ 660,00</Text>
            </View>

            <View style={styles.breakdownCol}>
              <Text style={styles.breakdownLabel}>IRRF</Text>
              <Text style={styles.breakdownValue}>- R$ 240,00</Text>
            </View>
          </View>

          <View style={styles.summaryFooterRow}>
            <Text style={styles.summaryFooterText}>
              Recebido  R$ 2.975,00
            </Text>
            <Text style={styles.summaryFooterText}>
              A receber R$ 2.125,00
            </Text>
          </View>
        </View>

        {/* Secção: Detalhes por plantão */}
        <View style={styles.detailsHeader}>
          <Text style={styles.detailsTitle}>Detalhes por plantão</Text>
          <Text style={styles.detailsSubtitle}>
            Descontos informados  •  valores ilustrativos
          </Text>
        </View>

        {/* Lista de Cartões por Plantão */}
        {PLANTOES_FINANCEIRO.map((item) => (
          <View key={item.id} style={styles.shiftFinanceCard}>
            {/* Topo do Cartão: Data + Local + Badge */}
            <View style={styles.cardTopRow}>
              <View style={styles.cardTitleGroup}>
                <Text style={styles.cardDateText}>{item.data}</Text>
                <Text style={styles.cardLocationText}>{item.local}</Text>
              </View>

              <View
                style={[
                  styles.statusBadge,
                  item.isRecebido
                    ? styles.statusBadgeReceived
                    : styles.statusBadgePending,
                ]}
              >
                <Text
                  style={[
                    styles.statusBadgeText,
                    item.isRecebido
                      ? styles.statusTextReceived
                      : styles.statusTextPending,
                  ]}
                >
                  {item.status}
                </Text>
              </View>
            </View>

            {/* Linha Horário e Valor Bruto */}
            <View style={styles.cardLineRow}>
              <Text style={styles.cardMutedText}>{item.horario}</Text>
              <Text style={styles.cardGrossText}>
                <Text style={styles.cardGrossLabel}>Bruto  </Text>
                {item.bruto}
              </Text>
            </View>

            {/* Linha INSS */}
            <View style={styles.cardLineRow}>
              <Text style={styles.cardMutedText}>INSS</Text>
              <Text style={styles.cardDeductionText}>{item.inss}</Text>
            </View>

            {/* Linha Imposto de Renda (IRRF) */}
            <View style={styles.cardLineRow}>
              <Text style={styles.cardMutedText}>Imposto de renda (IRRF)</Text>
              <Text style={styles.cardDeductionText}>{item.irrf}</Text>
            </View>

            <View style={styles.cardDivider} />

            {/* Linha Valor Líquido */}
            <View style={styles.cardNetRow}>
              <Text style={styles.cardNetLabel}>Valor líquido</Text>
              <Text style={styles.cardNetValue}>{item.liquido}</Text>
            </View>
          </View>
        ))}

        {/* Nota Explicativa no Final */}
        <Text style={styles.formulaNote}>
          Bruto - INSS - IRRF = líquido de cada plantão
        </Text>
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

        <TouchableOpacity style={styles.tabItem}>
          <MaterialCommunityIcons
            name="wallet-outline"
            size={28}
            color="#054441"
          />
          <Text style={[styles.tabLabel, styles.tabLabelActive]}>
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
    color: '#000000',
    fontWeight: '400',
  },

  /* --- Cartão Líquido Previsto --- */
  summaryCard: {
    backgroundColor: '#044343',
    borderRadius: 18,
    padding: 18,
    marginBottom: 22,
  },
  summaryHeaderLabel: {
    fontSize: 14,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  summaryMainValue: {
    fontSize: 28,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 12,
  },
  summaryDivider: {
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.28)',
    marginBottom: 12,
  },
  breakdownRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  breakdownCol: {
    flex: 1,
  },
  breakdownLabel: {
    fontSize: 15,
    color: '#EFECE6',
    marginBottom: 6,
  },
  breakdownValue: {
    fontSize: 16,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  summaryFooterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  summaryFooterText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#FFFFFF',
  },

  /* --- Cabeçalho Detalhes por Plantão --- */
  detailsHeader: {
    marginBottom: 12,
  },
  detailsTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#054441',
    marginBottom: 2,
  },
  detailsSubtitle: {
    fontSize: 13,
    color: '#000000',
  },

  /* --- Cartões de Plantão --- */
  shiftFinanceCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
  },
  cardTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardTitleGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardDateText: {
    fontSize: 14,
    fontWeight: '800',
    color: '#8D8D8D',
    marginRight: 12,
  },
  cardLocationText: {
    fontSize: 14,
    fontWeight: '800',
    color: '#054441',
  },
  statusBadge: {
    paddingHorizontal: 14,
    paddingVertical: 5,
    borderRadius: 12,
  },
  statusBadgePending: {
    backgroundColor: '#044343',
  },
  statusBadgeReceived: {
    backgroundColor: '#BCE0D8',
  },
  statusBadgeText: {
    fontSize: 12,
    fontWeight: '800',
  },
  statusTextPending: {
    color: '#FFFFFF',
  },
  statusTextReceived: {
    color: '#054441',
  },
  cardLineRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  cardMutedText: {
    fontSize: 13,
    color: '#8D8D8D',
  },
  cardGrossText: {
    fontSize: 14,
    fontWeight: '800',
    color: '#054441',
  },
  cardGrossLabel: {
    fontWeight: '800',
  },
  cardDeductionText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#FF0000',
  },
  cardDivider: {
    height: 1,
    backgroundColor: '#BDBDBD',
    marginVertical: 8,
  },
  cardNetRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardNetLabel: {
    fontSize: 14,
    fontWeight: '800',
    color: '#054441',
  },
  cardNetValue: {
    fontSize: 18,
    fontWeight: '800',
    color: '#054441',
  },
  formulaNote: {
    fontSize: 13,
    color: '#8D8D8D',
    marginTop: 2,
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