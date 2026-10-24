import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Modal,
} from 'react-native';
import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const CABECALHO_DIAS = ['SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB', 'DOM'];

const MESES = [
  { nome: 'Outubro 2026', mesNum: '10', ano: 2026, diasNoMes: 31, offsetInicio: 3 },
  { nome: 'Novembro 2026', mesNum: '11', ano: 2026, diasNoMes: 30, offsetInicio: 6 },
  { nome: 'Dezembro 2026', mesNum: '12', ano: 2026, diasNoMes: 31, offsetInicio: 1 },
];

const HORARIOS_RAPIDOS = [
  '06:00', '07:00', '08:00', '12:00', '13:00', '14:00', '18:00', '19:00', '20:00', '24:00',
];

export default function AdicionarPlantaoScreen({ navigation }) {
  const [local, setLocal] = useState('Centro Integrado');
  const [dataInicio, setDataInicio] = useState('26/10/2026');
  const [dataTermino, setDataTermino] = useState('26/10/2026');
  const [horaInicio, setHoraInicio] = useState('07:00');
  const [horaTermino, setHoraTermino] = useState('19:00');

  const [valorBruto, setValorBruto] = useState('R$ 2.500,00');
  const [inss, setInss] = useState('R$ 275,00');
  const [irrf, setIrrf] = useState('R$ 100,00');
  const [recebimentoPrevisto, setRecebimentoPrevisto] = useState('30/10/2026');

  const [lembreteAtivo, setLembreteAtivo] = useState(true);
  const [mostrarObservacoes, setMostrarObservacoes] = useState(false);
  const [observacoes, setObservacoes] = useState('');

  // Estados do Modal de Calendário
  const [modalCalendarioVisivel, setModalCalendarioVisivel] = useState(false);
  const [campoDataAtivo, setCampoDataAtivo] = useState(null); // 'inicio' | 'termino' | 'recebimento'
  const [indiceMes, setIndiceMes] = useState(0);

  // Estados do Modal de Relógio / Horário
  const [modalRelogioVisivel, setModalRelogioVisivel] = useState(false);
  const [campoHoraAtivo, setCampoHoraAtivo] = useState(null); // 'inicio' | 'termino'

  // Formata digitação de horário automaticamente em números (HH:MM)
  const formatarHorarioNumerico = (texto, setter) => {
    const apenasNumeros = texto.replace(/\D/g, '').slice(0, 4);
    if (apenasNumeros.length <= 2) {
      setter(apenasNumeros);
    } else {
      const hh = apenasNumeros.slice(0, 2);
      const mm = apenasNumeros.slice(2, 4);
      setter(`${hh}:${mm}`);
    }
  };

  // Abre o calendário para o campo clicado
  const abrirCalendario = (campo) => {
    setCampoDataAtivo(campo);
    setModalCalendarioVisivel(true);
  };

  // Seleciona o dia no calendário e preenche no formato DD/MM/AAAA
  const selecionarDataNoCalendario = (dia) => {
    const mesAtual = MESES[indiceMes];
    const diaFormatado = String(dia).padStart(2, '0');
    const dataCompleta = `${diaFormatado}/${mesAtual.mesNum}/${mesAtual.ano}`;

    if (campoDataAtivo === 'inicio') setDataInicio(dataCompleta);
    if (campoDataAtivo === 'termino') setDataTermino(dataCompleta);
    if (campoDataAtivo === 'recebimento') setRecebimentoPrevisto(dataCompleta);

    setModalCalendarioVisivel(false);
  };

  // Abre o seletor de relógio
  const abrirRelogio = (campo) => {
    setCampoHoraAtivo(campo);
    setModalRelogioVisivel(true);
  };

  const selecionarHorarioRapido = (horario) => {
    if (campoHoraAtivo === 'inicio') setHoraInicio(horario);
    if (campoHoraAtivo === 'termino') setHoraTermino(horario);
    setModalRelogioVisivel(false);
  };

  // Cálculo automático da duração em horas
  const calcularDuracao = () => {
    if (horaInicio.length < 5 || horaTermino.length < 5) return '12 horas';
    const [h1, m1] = horaInicio.split(':').map(Number);
    const [h2, m2] = horaTermino.split(':').map(Number);
    if (isNaN(h1) || isNaN(m1) || isNaN(h2) || isNaN(m2)) return '12 horas';

    let diffMinutos = (h2 * 60 + m2) - (h1 * 60 + m1);
    if (diffMinutos <= 0) diffMinutos += 24 * 60; // Caso passe da meia-noite
    const horas = Math.round(diffMinutos / 60);
    return `${horas} horas`;
  };

  // Cálculo automático do valor líquido
  const extrairNumero = (texto) => {
    if (!texto) return 0;
    const limpo = texto.replace(/[^\d,]/g, '').replace(',', '.');
    return parseFloat(limpo) || 0;
  };

  const formatarMoeda = (valor) => {
    return (
      'R$ ' +
      valor
        .toFixed(2)
        .replace('.', ',')
        .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    );
  };

  const liquidoCalculado = Math.max(
    0,
    extrairNumero(valorBruto) - extrairNumero(inss) - extrairNumero(irrf)
  );

  // Gera a matriz de dias do mês para o Modal de Calendário
  const gerarGrelhaCalendario = () => {
    const { diasNoMes, offsetInicio } = MESES[indiceMes];
    const celulas = [];
    for (let i = 0; i < offsetInicio; i++) celulas.push(null);
    for (let d = 1; d <= diasNoMes; d++) celulas.push(d);
    while (celulas.length % 7 !== 0) celulas.push(null);

    const semanas = [];
    for (let i = 0; i < celulas.length; i += 7) {
      semanas.push(celulas.slice(i, i + 7));
    }
    return semanas;
  };

  const handleSalvarPlantao = () => {
    if (!local || !dataInicio || !valorBruto) {
      Alert.alert('Atenção', 'Preencha os campos obrigatórios (*)');
      return;
    }
    Alert.alert('Sucesso', 'Plantão salvo com sucesso!');
    if (navigation) navigation.navigate('Agenda');
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
        {/* Barra Superior: Botão Voltar + Logo */}
        <View style={styles.topBar}>
          <TouchableOpacity
            style={styles.circleButton}
            activeOpacity={0.75}
            onPress={() =>
              navigation && navigation.canGoBack()
                ? navigation.goBack()
                : navigation.navigate('Agenda')
            }
          >
            <Feather name="arrow-left" size={24} color="#054441" />
          </TouchableOpacity>

          <Image
            source={require('../../assets/logomarcahsync.png')}
            style={styles.logoImage}
            resizeMode="contain"
          />

          <View style={styles.circleSpacer} />
        </View>

        {/* Título e Subtítulo */}
        <View style={styles.headerSection}>
          <Text style={styles.pageTitle}>Adicionar plantão</Text>
          <Text style={styles.pageSubtitle}>
            Organize sua agenda e seus recebimentos.
          </Text>
        </View>

        {/* Secção: JORNADA */}
        <Text style={styles.sectionCategory}>JORNADA</Text>

        <Text style={styles.label}>Local ou contratante *</Text>
        <View style={styles.inputFullWrapper}>
          <TextInput
            style={styles.inputTextRegular}
            value={local}
            onChangeText={setLocal}
            placeholder="Ex: Centro Integrado"
            placeholderTextColor="#9E9E9E"
          />
        </View>

        {/* Linha: Data de início e Data de término (ABREM O CALENDÁRIO) */}
        <View style={styles.twoColumnsRow}>
          <View style={styles.columnItem}>
            <Text style={styles.label}>Data de início *</Text>
            <TouchableOpacity
              style={styles.inputHalfWrapper}
              activeOpacity={0.75}
              onPress={() => abrirCalendario('inicio')}
            >
              <Text style={styles.inputTextRegular}>{dataInicio}</Text>
              <Ionicons name="calendar-outline" size={22} color="#054441" />
            </TouchableOpacity>
          </View>

          <View style={styles.columnItem}>
            <Text style={styles.label}>Data de término *</Text>
            <TouchableOpacity
              style={styles.inputHalfWrapper}
              activeOpacity={0.75}
              onPress={() => abrirCalendario('termino')}
            >
              <Text style={styles.inputTextRegular}>{dataTermino}</Text>
              <Ionicons name="calendar-outline" size={22} color="#054441" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Linha: Hora de início e Hora de término (TECLADO NUMÉRICO + SELETOR DE RELÓGIO) */}
        <View style={styles.twoColumnsRow}>
          <View style={styles.columnItem}>
            <Text style={styles.label}>Hora de início *</Text>
            <View style={styles.inputHalfWrapper}>
              <TextInput
                style={styles.inputTextRegular}
                value={horaInicio}
                onChangeText={(t) => formatarHorarioNumerico(t, setHoraInicio)}
                keyboardType="numeric"
                maxLength={5}
                placeholder="07:00"
                placeholderTextColor="#9E9E9E"
              />
              <TouchableOpacity onPress={() => abrirRelogio('inicio')}>
                <Feather name="clock" size={22} color="#054441" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.columnItem}>
            <Text style={styles.label}>Hora de término *</Text>
            <View style={styles.inputHalfWrapper}>
              <TextInput
                style={styles.inputTextRegular}
                value={horaTermino}
                onChangeText={(t) => formatarHorarioNumerico(t, setHoraTermino)}
                keyboardType="numeric"
                maxLength={5}
                placeholder="19:00"
                placeholderTextColor="#9E9E9E"
              />
              <TouchableOpacity onPress={() => abrirRelogio('termino')}>
                <Feather name="clock" size={22} color="#054441" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Barra de Duração Total */}
        <View style={styles.durationBar}>
          <View style={styles.durationLeft}>
            <Feather name="clock" size={20} color="#054441" />
            <Text style={styles.durationLabel}>Duração total</Text>
          </View>
          <Text style={styles.durationValue}>{calcularDuracao()}</Text>
        </View>

        {/* Secção: VALORES DO PLANTÃO */}
        <Text style={styles.sectionCategory}>VALORES DO PLANTÃO</Text>

        <Text style={styles.label}>Valor bruto *</Text>
        <View style={[styles.inputFullWrapper, styles.inputGrossWidth]}>
          <TextInput
            style={styles.inputTextBold}
            value={valorBruto}
            onChangeText={setValorBruto}
            keyboardType="numeric"
          />
        </View>

        {/* Linha: INSS e IRRF */}
        <View style={styles.twoColumnsRow}>
          <View style={styles.columnItem}>
            <Text style={styles.label}>INSS (opcional)</Text>
            <View style={styles.inputHalfWrapper}>
              <TextInput
                style={styles.inputTextBold}
                value={inss}
                onChangeText={setInss}
                keyboardType="numeric"
              />
            </View>
          </View>

          <View style={styles.columnItem}>
            <Text style={styles.label}>IRRF (opcional)</Text>
            <View style={styles.inputHalfWrapper}>
              <TextInput
                style={styles.inputTextBold}
                value={irrf}
                onChangeText={setIrrf}
                keyboardType="numeric"
              />
            </View>
          </View>
        </View>

        <Text style={styles.helperText}>
          Informe os descontos em reais, se houver.
        </Text>

        {/* Cartão Valor Líquido Previsto */}
        <View style={styles.netValueCard}>
          <View>
            <Text style={styles.netCardTitle}>Valor líquido previsto</Text>
            <Text style={styles.netCardFormula}>Bruto - INSS - IRRF</Text>
          </View>
          <Text style={styles.netCardAmount}>
            {formatarMoeda(liquidoCalculado)}
          </Text>
        </View>

        {/* Recebimento Previsto (ABRE O CALENDÁRIO) */}
        <Text style={styles.label}>Recebimento previsto (opcional)</Text>
        <TouchableOpacity
          style={styles.inputPaymentWrapper}
          activeOpacity={0.75}
          onPress={() => abrirCalendario('recebimento')}
        >
          <Text style={styles.inputPaymentText}>{recebimentoPrevisto}</Text>
          <Ionicons name="calendar-outline" size={22} color="#054441" />
        </TouchableOpacity>

        {/* Cartão Lembrete do Plantão */}
        <View style={styles.reminderCard}>
          <View style={styles.reminderLeft}>
            <Feather
              name="bell"
              size={22}
              color="#054441"
              style={styles.reminderIcon}
            />
            <View>
              <Text style={styles.reminderTitle}>Lembrete do plantão</Text>
              <Text style={styles.reminderSubtitle}>1 hora antes</Text>
            </View>
          </View>

          <TouchableOpacity
            style={[
              styles.customSwitch,
              !lembreteAtivo && styles.customSwitchOff,
            ]}
            activeOpacity={0.8}
            onPress={() => setLembreteAtivo(!lembreteAtivo)}
          >
            <View
              style={[
                styles.switchThumb,
                !lembreteAtivo && styles.switchThumbOff,
              ]}
            />
          </TouchableOpacity>
        </View>

        {/* + Adicionar observações */}
        <TouchableOpacity
          style={styles.addNotesButton}
          onPress={() => setMostrarObservacoes(!mostrarObservacoes)}
        >
          <Text style={styles.addNotesText}>+ Adicionar observações</Text>
        </TouchableOpacity>

        {mostrarObservacoes && (
          <View style={styles.notesInputWrapper}>
            <TextInput
              style={styles.notesInput}
              placeholder="Digite observações sobre este plantão..."
              placeholderTextColor="#8D8D8D"
              multiline
              value={observacoes}
              onChangeText={setObservacoes}
            />
          </View>
        )}

        {/* Botão Salvar Plantão */}
        <TouchableOpacity
          style={styles.saveButton}
          activeOpacity={0.85}
          onPress={handleSalvarPlantao}
        >
          <Feather
            name="check"
            size={20}
            color="#FFFFFF"
            style={styles.saveIcon}
          />
          <Text style={styles.saveButtonText}>Salvar plantão</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* MODAL DE CALENDÁRIO INTERATIVO */}
      <Modal
        visible={modalCalendarioVisivel}
        transparent
        animationType="fade"
        onRequestClose={() => setModalCalendarioVisivel(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setModalCalendarioVisivel(false)}
        >
          <View style={styles.calendarModalCard}>
            <View style={styles.calendarModalHeader}>
              <Text style={styles.calendarModalTitle}>
                {MESES[indiceMes].nome}
              </Text>
              <View style={styles.calendarArrowsRow}>
                <TouchableOpacity
                  onPress={() => setIndiceMes((prev) => Math.max(0, prev - 1))}
                  style={styles.arrowBtn}
                >
                  <Feather name="chevron-left" size={22} color="#054441" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    setIndiceMes((prev) => Math.min(MESES.length - 1, prev + 1))
                  }
                  style={styles.arrowBtn}
                >
                  <Feather name="chevron-right" size={22} color="#054441" />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.weekHeaderRow}>
              {CABECALHO_DIAS.map((d) => (
                <Text key={d} style={styles.weekHeaderText}>
                  {d}
                </Text>
              ))}
            </View>

            {gerarGrelhaCalendario().map((semana, idxSemana) => (
              <View key={idxSemana} style={styles.daysRow}>
                {semana.map((dia, idxDia) => {
                  if (!dia) return <View key={idxDia} style={styles.dayCell} />;
                  return (
                    <TouchableOpacity
                      key={idxDia}
                      style={styles.dayCell}
                      onPress={() => selecionarDataNoCalendario(dia)}
                    >
                      <Text style={styles.dayCellText}>{dia}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>

      {/* MODAL DE RELÓGIO (HORÁRIOS EM NÚMEROS) */}
      <Modal
        visible={modalRelogioVisivel}
        transparent
        animationType="fade"
        onRequestClose={() => setModalRelogioVisivel(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setModalRelogioVisivel(false)}
        >
          <View style={styles.clockModalCard}>
            <Text style={styles.calendarModalTitle}>Selecione o horário</Text>
            <View style={styles.clockGrid}>
              {HORARIOS_RAPIDOS.map((h) => (
                <TouchableOpacity
                  key={h}
                  style={styles.clockPill}
                  onPress={() => selecionarHorarioRapido(h)}
                >
                  <Text style={styles.clockPillText}>{h}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </TouchableOpacity>
      </Modal>

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
          <Ionicons name="calendar-outline" size={26} color="#054441" />
          <Text style={[styles.tabLabel, styles.tabLabelActive]}>Agenda</Text>
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
    </KeyboardAvoidingView>
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
    marginBottom: 16,
  },
  circleButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleSpacer: {
    width: 48,
    height: 48,
  },
  logoImage: {
    width: 190,
    height: 48,
  },

  /* --- Cabeçalho --- */
  headerSection: {
    marginBottom: 16,
  },
  pageTitle: {
    fontSize: 30,
    fontWeight: '800',
    color: '#054441',
    marginBottom: 2,
  },
  pageSubtitle: {
    fontSize: 14,
    color: '#263238',
    fontWeight: '300',
  },
  sectionCategory: {
    fontSize: 13,
    fontWeight: '800',
    color: '#8D8D8D',
    letterSpacing: 0.4,
    marginBottom: 8,
  },

  /* --- Campos de Formulário --- */
  label: {
    fontSize: 15,
    fontWeight: '800',
    color: '#054441',
    marginBottom: 6,
  },
  inputFullWrapper: {
    width: '100%',
    height: 52,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: '#BFD8D2',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  inputGrossWidth: {
    width: '90%',
  },
  twoColumnsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  columnItem: {
    width: '47.5%',
  },
  inputHalfWrapper: {
    width: '100%',
    height: 52,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: '#BFD8D2',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
  },
  inputTextRegular: {
    flex: 1,
    fontSize: 15,
    color: '#054441',
    fontWeight: '400',
  },
  inputTextBold: {
    flex: 1,
    fontSize: 16,
    color: '#054441',
    fontWeight: '800',
  },

  /* --- Barra de Duração --- */
  durationBar: {
    width: '100%',
    height: 40,
    backgroundColor: '#AAD5CB',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    marginTop: 2,
    marginBottom: 16,
  },
  durationLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  durationLabel: {
    fontSize: 13,
    color: '#5B706B',
    marginLeft: 8,
  },
  durationValue: {
    fontSize: 13,
    color: '#5B706B',
  },

  /* --- Texto Auxiliar e Valor Líquido --- */
  helperText: {
    fontSize: 13,
    color: '#8D8D8D',
    marginTop: -4,
    marginBottom: 10,
  },
  netValueCard: {
    width: '100%',
    backgroundColor: '#044343',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  netCardTitle: {
    fontSize: 13,
    color: '#FFFFFF',
    marginBottom: 2,
  },
  netCardFormula: {
    fontSize: 12,
    color: '#EFECE6',
  },
  netCardAmount: {
    fontSize: 22,
    fontWeight: '800',
    color: '#FFFFFF',
  },

  /* --- Recebimento Previsto --- */
  inputPaymentWrapper: {
    width: '100%',
    height: 44,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: '#BFD8D2',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  inputPaymentText: {
    flex: 1,
    fontSize: 15,
    fontWeight: '800',
    color: '#000000',
  },

  /* --- Cartão de Lembrete --- */
  reminderCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  reminderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reminderIcon: {
    marginRight: 12,
  },
  reminderTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: '#054441',
  },
  reminderSubtitle: {
    fontSize: 14,
    color: '#054441',
  },
  customSwitch: {
    width: 44,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#044343',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 2,
  },
  customSwitchOff: {
    backgroundColor: '#BDBDBD',
    alignItems: 'flex-start',
  },
  switchThumb: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#BDBDBD',
  },
  switchThumbOff: {
    backgroundColor: '#FFFFFF',
  },

  /* --- Observações e Botão Salvar --- */
  addNotesButton: {
    marginBottom: 10,
  },
  addNotesText: {
    fontSize: 13,
    fontWeight: '800',
    color: '#054441',
  },
  notesInputWrapper: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#BFD8D2',
    padding: 12,
    marginBottom: 12,
  },
  notesInput: {
    fontSize: 14,
    color: '#054441',
    minHeight: 60,
    textAlignVertical: 'top',
  },
  saveButton: {
    width: '100%',
    height: 46,
    backgroundColor: '#044343',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveIcon: {
    marginRight: 10,
  },
  saveButtonText: {
    fontSize: 15,
    fontWeight: '800',
    color: '#FFFFFF',
  },

  /* --- Modais de Calendário e Relógio --- */
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.45)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 22,
  },
  calendarModalCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 18,
    borderWidth: 1.5,
    borderColor: '#BFD8D2',
  },
  calendarModalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  calendarModalTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#054441',
  },
  calendarArrowsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrowBtn: {
    marginLeft: 12,
    padding: 4,
  },
  weekHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 8,
  },
  weekHeaderText: {
    width: 36,
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
    width: 36,
    height: 38,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayCellText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#054441',
  },
  clockModalCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    borderWidth: 1.5,
    borderColor: '#BFD8D2',
  },
  clockGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 14,
  },
  clockPill: {
    width: '30%',
    paddingVertical: 12,
    backgroundColor: '#EFECE6',
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 10,
  },
  clockPillText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#054441',
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