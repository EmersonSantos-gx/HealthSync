# HealthSync

<img src="docs/marca/logomarca-hs.png" width="340" alt="Logomarca HealthSync">

**Conexões que organizam sua rotina.**

Agenda e finanças para sua rotina profissional.

O **HealthSync** é a evolução da GestMed. O aplicativo foi concebido para organizar plantões, diárias e jornadas, acompanhar recebimentos e reunir informações úteis para profissionais de diferentes áreas.

> **Status:** produto em definição e prototipação visual. Este README reúne as decisões recuperadas da conversa “Criar logotipo HealthSync” as telas produzidas para importação no Figma e as imagens enviadas nesta revisão. As imagens documentam o design; não comprovam funcionalidades implementadas em código.

## Sumário

- [Visão e público-alvo](#visão-e-público-alvo)
- [Decisões consolidadas](#decisões-consolidadas)
- [Telas do aplicativo](#telas-do-aplicativo)
- [Fluxos e funcionalidades](#fluxos-e-funcionalidades)
- [Financeiro por plantão](#financeiro-por-plantão)
- [Navegação e comunicação](#navegação-e-comunicação)
- [Identidade visual](#identidade-visual)
- [Arquivos e uso no Figma](#arquivos-e-uso-no-figma)
- [Próximas definições](#próximas-definições)
- [Desenvolvimento e execução](#desenvolvimento-e-execução)
- [Referências e histórico](#referências-e-histórico)
- [Contribuição e licença](#contribuição-e-licença)

## Visão e público-alvo

Reunir agenda, compromissos, avisos e valores em uma experiência clara para quem precisa organizar a rotina de trabalho.

O público inclui **médicos, freelancers, estagiários, diaristas e outros profissionais** compatíveis com a proposta. O termo geral da comunicação é **profissional**. “Plantão”, “diária” e “jornada” devem acompanhar o contexto de cada atividade.

O nome mantém a conexão com a origem da GestMed na saúde, enquanto o produto passa a contemplar outras profissões.

## Decisões consolidadas

| Área | Definição para o produto |
| --- | --- |
| Agenda | Calendário com destaque para os dias que possuem jornadas cadastradas e consulta dos compromissos do dia. |
| Financeiro | Resumo do período e detalhes de cada plantão: bruto, INSS, imposto de renda (IRRF) e líquido. |
| Avisos | Informações da rotina: próximos plantões, recebimentos, alterações de horário e pendências. |
| Notificações | Novidades do HealthSync: atualizações, melhorias e novas parcerias. |
| Cadastro de plantão | Local/contratante, datas, horários, valor bruto, descontos opcionais, recebimento previsto, lembrete e observações. |
| Perfil | Foto do usuário no topo, dados pessoais e profissionais, preferências e segurança. |
| Navegação | Abas inferiores Início, Agenda, Financeiro e Perfil; menu hambúrguer solicitado para o cabeçalho da Home. |

**Avisos e Notificações são áreas distintas.** A separação acima segue a decisão posterior da conversa e substitui a definição genérica usada na primeira versão deste README. O canal de entrega de mensagens, como push ou e-mail, é uma decisão técnica separada.

## Telas do aplicativo

As telas enviadas nesta revisão aparecem primeiro. Os PNGs foram inseridos preservando os arquivos originais. Os protótipos anteriores e seus SVGs continuam disponíveis na seção de referência abaixo.

Os nomes, datas, estabelecimentos e valores exibidos são conteúdo demonstrativo das telas. Algumas telas representam momentos diferentes da exploração visual e não formam uma única base de dados sincronizada.

### Telas enviadas nesta revisão

| Splash | Login | Início |
| --- | --- | --- |
| <img src="docs/telas/atualizadas/splash.png" width="240" alt="Splash HealthSync com a mensagem Sua rotina, em sintonia"> | <img src="docs/telas/atualizadas/login.png" width="240" alt="Login HealthSync com e-mail, senha e acesso à criação de conta"> | <img src="docs/telas/atualizadas/inicio.png" width="240" alt="Home enviada com menu hambúrguer, próxima jornada, financeiro e avisos"> |
| [Abrir PNG](docs/telas/atualizadas/splash.png) | [Abrir PNG](docs/telas/atualizadas/login.png) | [Abrir PNG](docs/telas/atualizadas/inicio.png) |

| Minha agenda | Adicionar plantão | Avisos |
| --- | --- | --- |
| <img src="docs/telas/atualizadas/agenda.png" width="240" alt="Agenda enviada com calendário mensal e jornada do dia selecionado"> | <img src="docs/telas/atualizadas/adicionar-plantao.png" width="240" alt="Cadastro de plantão enviado com datas, horários, valores e lembrete"> | <img src="docs/telas/atualizadas/avisos.png" width="240" alt="Avisos enviados com lembretes de plantão, recebimento e revisão de descontos"> |
| [Abrir PNG](docs/telas/atualizadas/agenda.png) | [Abrir PNG](docs/telas/atualizadas/adicionar-plantao.png) | [Abrir PNG](docs/telas/atualizadas/avisos.png) |

As telas de criação de conta, confirmação de cadastro, resumo financeiro, notificações e perfil permanecem disponíveis entre os protótipos de referência. Os SVGs existentes correspondem às versões anteriores; não são versões vetoriais dos novos PNGs enviados.

### Protótipos anteriores e SVGs de referência

<details>
<summary>Consultar a galeria anterior e os arquivos para Figma</summary>

### Acesso e perfil

| Criar conta | Confirmação de cadastro | Meu perfil |
| --- | --- | --- |
| <img src="docs/telas/criar-conta.png" width="240" alt="Formulário de criação de conta do HealthSync"> | <img src="docs/telas/confirmacao-cadastro.png" width="240" alt="Confirmação de cadastro com verificação de e-mail"> | <img src="docs/telas/perfil.png" width="240" alt="Perfil com foto no topo e opções de conta"> |
| [SVG para Figma](docs/figma/criar-conta.svg) | [SVG para Figma](docs/figma/confirmacao-cadastro.svg) | [SVG para Figma](docs/figma/perfil.svg) |

### Agenda e financeiro

| Início — versão V2 | Minha agenda | Resumo financeiro |
| --- | --- | --- |
| <img src="docs/telas/inicio.png" width="240" alt="Home V2 com agenda semanal, resumo de valores e próxima jornada"> | <img src="docs/telas/agenda.png" width="240" alt="Agenda mensal com os dias de jornadas cadastradas"> | <img src="docs/telas/resumo-financeiro.png" width="240" alt="Resumo financeiro com bruto, INSS, IRRF e líquido por plantão"> |
| [SVG para Figma](docs/figma/inicio.svg) | [SVG para Figma](docs/figma/agenda.svg) | [SVG para Figma](docs/figma/resumo-financeiro.svg) |

### Comunicação e cadastro de jornada

| Avisos da rotina | Notificações da HealthSync | Adicionar plantão |
| --- | --- | --- |
| <img src="docs/telas/avisos.png" width="240" alt="Avisos de plantões, recebimentos e revisão de descontos"> | <img src="docs/telas/notificacoes.png" width="240" alt="Novidades com categorias Atualizações, Melhorias e Parcerias"> | <img src="docs/telas/adicionar-plantao.png" width="240" alt="Cadastro de plantão com datas, horários, descontos e lembrete"> |
| [SVG para Figma](docs/figma/avisos.svg) | [SVG para Figma](docs/figma/notificacoes.svg) | [SVG para Figma](docs/figma/adicionar-plantao.svg) |

**Home com menu hambúrguer:** a variante posterior solicitada está em [inicio-menu-hamburguer.png](docs/telas/inicio-menu-hamburguer.png). Ela documenta o menu à esquerda, a marca central e o sino à direita. O SVG `inicio.svg` corresponde à Home V2 exibida na galeria; não inclui essa alteração posterior.

</details>

## Fluxos e funcionalidades

As descrições desta seção documentam decisões e elementos visíveis dos protótipos. A conexão entre telas e o comportamento do aplicativo precisam ser implementados e validados.

### 1. Acesso, conta e verificação de e-mail

A Splash enviada apresenta a marca e a mensagem “Sua rotina, em sintonia.”. A tela de Login reúne e-mail, senha, recuperação de senha, ação “Entrar”, acesso a “Criar minha conta”, termos, política de privacidade e ajuda.

O cadastro de conta, detalhado no protótipo de referência, apresenta:

- Nome completo e e-mail.
- Perfil profissional opcional.
- Senha e confirmação de senha, com controle de visualização.
- Aceite dos Termos de uso e ciência da Política de privacidade.
- Acesso ao login para quem já possui conta.

Após o cadastro, a tela orienta o usuário a verificar o e-mail para ativar a conta. Ela oferece abrir o e-mail, reenviar a mensagem, corrigir o endereço e voltar ao login, além de lembrar a verificação da pasta de spam.

O fluxo visual pretendido é: **criar conta → receber a orientação de verificação → confirmar o e-mail → acessar o aplicativo**. Os critérios de ativação, validade do link e limites de reenvio ainda precisam ser especificados.

### 2. Início

A Home reúne a visão geral da rotina:

- Saudação ao profissional e agenda semanal.
- Próxima jornada com local, horário e valor.
- Resumo do período, com valores recebidos e a receber.
- Acesso à agenda e ao resumo financeiro.
- Ação para adicionar uma jornada; o rótulo varia entre “Novo” e “Adicionar jornada” nas versões existentes.
- A variante com menu hambúrguer também apresenta um aviso de recebimento e o atalho “Ver todos”.

### 3. Minha agenda

- Calendário mensal com navegação entre meses.
- Destaque para dias com jornadas, dia atual e dia selecionado.
- Alternativas visuais “Calendário” e “Lista”. O controle “Hoje” aparece no protótipo anterior; a tela enviada apresenta um segundo controle com o rótulo “Lista”, cuja função precisa ser consolidada.
- Quantidade de jornadas e total de horas do período.
- Compromissos do dia selecionado com tipo, local, horário, duração, valor bruto e situação.
- Ação “Adicionar jornada”.

O calendário é o modo detalhado no protótipo incluído. O conteúdo completo do modo Lista ainda precisa ser consolidado.

### 4. Adicionar plantão

| Campo ou ação | Representação no protótipo |
| --- | --- |
| Local ou contratante | Campo obrigatório com seleção. |
| Data de início e de término | Campos obrigatórios separados. |
| Hora de início e de término | Campos obrigatórios separados. |
| Duração total | Resumo do intervalo informado. |
| Valor bruto | Campo obrigatório em reais. |
| INSS e IRRF | Campos opcionais, informados em reais. |
| Valor líquido previsto | Resumo do bruto menos os descontos informados. |
| Recebimento previsto | Data opcional. |
| Lembrete do plantão | Controle de ativação; exemplo visual de “1 hora antes”. |
| Observações | Ação para adicionar informações complementares. |
| Salvar / Cancelar | Ações de conclusão ou saída do formulário. |

O horário de lembrete exibido é uma referência do protótipo; as opções configuráveis e o canal de entrega ainda precisam ser definidos. Cadastro de locais, tipos de atividade, edição e cancelamento de jornadas também precisam de regras e fluxos próprios.

### 5. Avisos da rotina

Esta área concentra informações relacionadas ao trabalho do profissional, como:

- Próximo plantão e alterações de horário.
- Recebimento previsto e recebimento registrado.
- Pendências e revisão dos descontos informados.

A tela enviada inclui filtros “Todos” e “Não lidos”, organização por data, indicador de leitura, ação “Marcar todos como lidos” e botão de retorno ao Início. O filtro “Financeiro” e os atalhos “Ver jornada”, “Ver financeiro” e “Ver resumo” aparecem no protótipo anterior de referência.

### 6. Notificações da HealthSync

Esta área comunica novidades do aplicativo:

- **Atualizações:** novas versões e mudanças de funcionalidades.
- **Melhorias:** aperfeiçoamentos da experiência de uso.
- **Parcerias:** novos parceiros, serviços e benefícios apresentados pela plataforma.

O protótipo inclui filtros “Todas”, “Atualizações”, “Melhorias” e “Parcerias”, contagem de não lidas e ação “Marcar todas como lidas”. Os exemplos de parceiros e novidades são demonstrativos, sem comprovar parcerias ou lançamentos ativos.

### 7. Meu perfil

A tela apresenta foto no topo com ícone de câmera, nome, e-mail, profissão/forma de atuação e botão “Editar perfil”.

As opções estão organizadas em:

- **Minha conta:** Dados pessoais e Dados profissionais.
- **Preferências e segurança:** Avisos da rotina, Notificações da HealthSync e Privacidade e segurança.
- **Suporte:** Ajuda e suporte.
- **Sessão:** Sair da conta.

O envio e a troca de foto, os formulários de edição e o funcionamento das preferências devem ser especificados na implementação.

## Financeiro por plantão

O resumo financeiro mostra o período selecionado, a quantidade de plantões, o total bruto, os descontos informados, o líquido previsto e a divisão entre recebido e a receber.

Cada plantão apresenta local, data, horário, duração, situação do recebimento e composição do valor:

```text
Líquido previsto = Valor bruto - INSS informado - IRRF informado
```

Exemplo demonstrativo da tela de cadastro:

| Item | Valor |
| --- | ---: |
| Valor bruto | R$ 2.500,00 |
| INSS informado | R$ 275,00 |
| IRRF informado | R$ 100,00 |
| Líquido previsto | R$ 2.125,00 |

No protótipo, os descontos são valores inseridos pelo usuário em reais. Esses números não definem alíquotas nem tabelas tributárias. Não há cálculo automático de tributos especificado nesta documentação.

O **líquido previsto** é uma estimativa baseada nos registros. O **valor recebido** depende da confirmação do recebimento; as regras para confirmação, pagamentos parciais e ajustes permanecem pendentes.

## Navegação e comunicação

| Elemento | Destino ou finalidade prevista |
| --- | --- |
| Início | Visão geral da rotina. |
| Agenda | Calendário e compromissos. |
| Financeiro | Resumo e detalhes por plantão. |
| Perfil | Conta e preferências. |
| Menu hambúrguer | Acesso complementar; itens internos a definir. |
| Sino | Acesso à área de Notificações; roteamento a validar na implementação. |

Usar linguagem direta e inclusiva, datas e valores consistentes e distinção clara entre Avisos e Notificações. Prever estados de carregamento, ausência de dados, sucesso e erro, sem depender apenas de cores para comunicar informações.

**Mensagens de marca:** “Conexões que organizam sua rotina.”, “Agenda e finanças para sua rotina profissional.” e “Sua rotina, em sintonia.”

## Identidade visual

### Logomarcas enviadas

| Assinatura HealthSync | Composição com ilustração de agenda |
| --- | --- |
| <img src="docs/marca/logomarca-hs.png" width="320" alt="Assinatura horizontal HealthSync em PNG transparente"> | <img src="docs/marca/logomarca-inicio.png" width="320" alt="Composição HealthSync com ilustração de agenda e financeiro"> |
| [Abrir logomarca](docs/marca/logomarca-hs.png) | [Abrir composição](docs/marca/logomarca-inicio.png) |

As duas imagens foram fornecidas em PNG com transparência e inseridas sem alterações. A composição com agenda reúne a assinatura e uma ilustração de apoio; o arquivo horizontal contém a assinatura da marca.

### Nome e conceito

Usar **HealthSync**, em uma única palavra, com **H** e **S** maiúsculos.

- **Health:** mantém a associação com a saúde e com a origem da GestMed.
- **Sync:** expressa a conexão entre agenda, comunicação e finanças.
- **Elos:** representam a conexão entre compromissos, informações e valores; a leitura visual de um “S” reforça o conceito de Sync.

### Paleta de cores

| Cor | HEX | RGB | Aplicação prevista no guia |
| --- | --- | --- | --- |
| Cyprus | `#004741` | `0, 71, 65` | Símbolo, nome, títulos e ações principais. |
| Sand | `#F0EDE4` | `240, 237, 228` | Fundos claros e áreas de leitura. |
| Verde-água | `#65BFAF` | `101, 191, 175` | Detalhes, gráficos e indicadores de apoio. |

Cyprus e Sand formam a assinatura principal. O verde-água é complementar e não substitui o Cyprus na assinatura.

Exemplo de variáveis CSS para uso em uma interface web:

```css
:root {
  --healthsync-cyprus: #004741;
  --healthsync-sand: #f0ede4;
  --healthsync-verde-agua: #65bfaf;
}
```

As combinações de texto e fundo devem ter sua legibilidade verificada durante o desenvolvimento da interface. A paleta da marca não define, por si só, cores para todos os estados funcionais.

### Tipografia

A família de apoio proposta no guia é **DejaVu Sans**:

- **Bold:** títulos e botões.
- **Regular:** textos, campos e legendas.

A fonte exata do logotipo não foi identificada no guia. Preservar a arte aprovada da assinatura, sem reconstruí-la digitando o nome com a fonte de apoio.

### Aplicação da marca

- Preservar proporções, orientação, posição dos elos e cores.
- Manter o espaço negativo entre os elos aberto e reconhecível.
- Reservar uma margem livre equivalente a **1/4 da altura visível do símbolo**, sem considerar bordas transparentes do arquivo.
- Evitar sombras, gradientes, distorções, rotações e espelhamentos.
- Usar como ponto de partida as larguras de **32 px** para o símbolo isolado e **180 px** para a assinatura completa.
- Para símbolos menores que 32 px, preparar uma variante óptica antes do uso.

As medidas de redução são diretrizes iniciais, sujeitas à validação na arte final. Para impressão, o guia sugere 8 mm para o símbolo e 35 mm para a assinatura completa, ainda sem homologação.

### Arquivos da marca

PNG transparente é adequado para aplicações digitais e importação no Figma, mas não é um vetor editável. O guia indica como próxima etapa a vetorização da arte aprovada em SVG/PDF e a preparação das versões negativa e monocromática, com preenchimentos sólidos.

## Arquivos e uso no Figma

O pacote de documentação contém:

| Caminho | Conteúdo |
| --- | --- |
| `README.md` | Visão do produto, requisitos recuperados e galeria das telas. |
| `docs/telas/atualizadas/` | Seis telas PNG enviadas: Splash, Login, Home, Agenda, Adicionar plantão e Avisos. |
| `docs/marca/` | As duas logomarcas PNG enviadas, com transparência preservada. |
| `docs/telas/` | Dez PNGs anteriores, mantidos como referência visual. |
| `docs/figma/` | Nove SVGs dos protótipos anteriores. |
| `docs/guia/` | Guia da Marca em PDF fornecido como referência. |

Para consultar a documentação, extraia o ZIP e abra o README em um visualizador Markdown, como a prévia do VS Code, mantendo a pasta `docs` ao lado dele. As imagens e os links usam caminhos relativos para funcionar também em um repositório.

Para usar as telas no Figma:

1. Extraia o pacote completo.
2. Arraste os SVGs de `docs/figma/` para a página desejada do projeto.
3. Confira fontes, enquadramento e agrupamento dos elementos após a importação.
4. Use os PNGs de `docs/telas/` como referência visual.

Os SVGs são arquivos para importação, não um projeto nativo `.fig`. A importação não cria automaticamente componentes, Auto Layout, estados ou conexões de protótipo. O tratamento de textos e fontes deve ser conferido no Figma.

## Próximas definições

- Consolidar as variações da Home, incluindo o menu hambúrguer, em um único fluxo aprovado.
- Padronizar “Novo”, “Adicionar jornada” e “Adicionar plantão” conforme o perfil profissional.
- Completar o modo Lista e os fluxos de detalhes, edição e cancelamento de jornadas.
- Definir recorrência, conflitos de horário e compromissos que atravessam dias.
- Detalhar recebimentos, pagamentos parciais, ajustes e regras de totais financeiros.
- Especificar preferências, antecedência e canais de entrega dos avisos.
- Definir gerenciamento e publicação das novidades da HealthSync.
- Completar edição de perfil, foto, suporte e segurança da conta.
- Definir se o uso inicial será individual ou também contemplará equipes e instituições.
- Validar acessibilidade, legibilidade, navegação e comportamento em diferentes telas.

## Desenvolvimento e execução

Não foi fornecido um repositório de código nesta atualização. A existência dos protótipos não confirma uma stack técnica nem permite verificar instalação ou execução do aplicativo.

| Item | Situação |
| --- | --- |
| Plataforma e framework | A definir. |
| Backend, API e banco de dados | A definir. |
| Autenticação e verificação de e-mail | Fluxo visual documentado; solução técnica a definir. |
| Armazenamento de fotos | A definir. |
| Entrega de avisos e novidades | Canais e serviços a definir. |
| Variáveis de ambiente | Documentar a partir da implementação, sem credenciais reais. |
| Instalação, execução e testes | Documentar com comandos verificados do repositório. |
| Publicação | Ambiente e processo a definir. |

## Referências e histórico

- **[Guia da Marca HealthSync v1.1](docs/guia/Health_Sync_Guia_da_Marca.pdf)**, outubro de 2026: conceito, paleta, tipografia e diretrizes de aplicação.
- **Conversa “Criar logotipo HealthSync” / “Criando Logotipo HealthSync”:** evolução da GestMed, público ampliado, decisões de interface e separação entre Avisos e Notificações.
- **Telas PNG e SVG recuperadas do projeto:** cadastro, confirmação de e-mail, Home, agenda, financeiro, avisos, notificações, adicionar plantão e perfil.

### Arquivos inseridos nesta revisão

- Duas logomarcas na seção de identidade visual, com a assinatura também no topo do documento.
- Seis telas enviadas em uma galeria principal: Splash, Login, Início, Agenda, Adicionar plantão e Avisos.
- Guia da Marca em PDF com link de consulta.
- Galeria anterior e SVGs preservados como referência, separados dos PNGs enviados.

### Alterações da revisão anterior

- Atualizada a finalidade de Avisos e Notificações conforme a decisão da conversa.
- Incluídos calendário com dias cadastrados e detalhamento financeiro por plantão.
- Documentados os campos de cadastro de plantão e o perfil com foto no topo.
- Adicionada a galeria de nove telas com links para os SVGs.
- Incluída a variante da Home com menu hambúrguer.
- Mantidas explícitas as definições técnicas e regras funcionais ainda pendentes.

O guia contém diretrizes iniciais. As telas são referências de design e devem ser consolidadas e validadas antes de servirem como critérios finais de implementação.

## Contribuição e licença

O processo de contribuição, o canal de contato e a licença de uso do código ainda precisam ser definidos pelo responsável pelo projeto. Este README não estabelece uma licença de distribuição do software ou dos arquivos da marca.
