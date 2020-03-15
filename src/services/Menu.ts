import { MenuItem } from './MenuItem';

export class Menu {
  static consultaAuditoriaServico = new MenuItem(
    'Consulta auditoria',
    'Consulta auditoria dos serviços',
    'Implantação Ravex',
    ' fa fa-hdd-o',
    'consulta-auditoria'
  );
  static rota = new MenuItem(
    'Rota',
    'Cadastro de trajetos pré-definidos',
    'Cadastros Básicos',
    'MapDirections',
    'rota'
  );
  static consultaInstalacao = new MenuItem(
    'Consulta instalação',
    'Consulta instalação',
    'Implantação Ravex',
    ' fa fa-hdd-o',
    'consulta-instalacao'
  );
  static consultaMovimentacaoVeiculo = new MenuItem(
    'Consulta movimentação do veículo',
    'Consulta movimentação do veículo',
    'Monitoramento',
    ' fa fa-hdd-o',
    'consulta-movimentacao-veiculo'
  );
  static consultaMovimentacaoIgnicao = new MenuItem(
    'Consulta movimentação de ignição',
    'Consulta movimentação de ignição',
    'Monitoramento',
    ' fa fa-hdd-o',
    'consulta-movimentacao-ignicao'
  );
  static veiculo = new MenuItem(
    'Veículo',
    'Cadastro de Veículos',
    'Cadastros Básicos',
    'Car',
    'veiculo'
  );
  static impressaoDigital = new MenuItem(
    'Captura Digital',
    'Captura digital',
    'Implantação Ravex',
    ' ravex-icon-fingerprint',
    'captura-digital'
  );
  static unidade = new MenuItem(
    'Unidade Organizacional',
    'Cadastro de Empresas e Setores',
    'Implantação Ravex',
    'Work',
    'unidade-organizacional'
  );
  static grupoVeiculo = new MenuItem(
    'Grupo de veículos',
    'Cadastro de Grupo de veículoss',
    'Cadastros Básicos',
    'BusSolid',
    'grupo-veiculo'
  );
  static veiculoComposicao = new MenuItem(
    'Composição de Veículo',
    'Cadastro de Cavalos e Carretas',
    'Cadastros Básicos',
    'Link',
    'composicao-veiculo'
  );
  static pontoDeReferencia = new MenuItem(
    'Ponto de referência',
    'Ponto de Referência',
    'Cadastros Básicos',
    'MapPin',
    'ponto-referencia'
  );
  static ocorrenciaVeicular = new MenuItem(
    'Ocorrência de veículo',
    'Ocorrência de veículo',
    'Cadastros Básicos',
    'Sections',
    'ocorrencia-veiculo'
  );
  static pontoDeReferenciaTipo = new MenuItem(
    'Tipo de ponto de referência',
    'Tipo de Ponto de Referência',
    'Cadastros Básicos',
    'MapPin',
    'tipo-ponto-referencia'
  );
  static areaEmEntidade = new MenuItem(
    'Área de Controle',
    'Cadastro de Áreas de Risco e Alvos',
    'Cadastros Básicos',
    'Location',
    'area'
  );
  static grupoArea = new MenuItem(
    'Grupo de Área',
    'Cadastro de Grupo de Área',
    'Cadastros Básicos',
    'LocationFill',
    'grupo-area'
  );
  static veiculoTipo = new MenuItem(
    'Tipo de Veículo',
    'Cadastro de Tipos de Veículos',
    'Implantação Ravex',
    'Sections',
    'tipo-veiculo'
  );
  static ocorrenciaTipo = new MenuItem(
    'Tipo de Ocorrência',
    'Cadastro de Tipos de Ocorrências Veiculares',
    'Implantação Ravex',
    'MailAlert',
    'tipo-ocorrencia'
  );
  static hierarquiaOrganizacional = new MenuItem(
    'Hierarquia Organizacional',
    'Cadastro das Empresas de um Grupo Empresarial',
    'Implantação Ravex',
    'Teamwork',
    'hierarquia-organizacional'
  );
  static icone = new MenuItem(
    'Ícone',
    'Cadastro de Ícone',
    'Implantação Ravex',
    'Photo2',
    'icone'
  );
  static eventoEmbarcado = new MenuItem(
    'Evento Embarcado',
    'Cadastro de Eventos Adicionais do Rastreador',
    'Implantação Ravex',
    'Puzzle',
    'evento-embarcado'
  );
  static equipamentoTipo = new MenuItem(
    'Tipo de Equipamento',
    'Cadastro de Tipos de Equipamento',
    'Desenvolvimento Ravex',
    'Tiles2',
    'tipo-equipamento'
  );
  static macro = new MenuItem(
    'Macro',
    'Cadastro de macros',
    'Equipamentos Ravex',
    'Subscribe',
    'macro'
  );
  static grupoMacro = new MenuItem(
    'Grupo de Macro',
    'Cadastro de grupo de macros',
    'Equipamentos Ravex',
    ' ravex-icon-grupoMacro',
    'grupo-macro'
  );
  static equipamento = new MenuItem(
    'Equipamento',
    'Cadastro de Equipamento',
    'Equipamentos Ravex',
    'GiftCard',
    'equipamento'
  );
  static instalacaoRastreador = new MenuItem(
    'Instalação',
    'Conexão de Rastreador ao Veículo',
    'Equipamentos Ravex',
    'InternetSharing',
    'instalacao'
  );
  static instalacaoTipo = new MenuItem(
    'Tipo de Instalação',
    'Cadastro de Tipo de Instalação de Rastreador',
    'Equipamentos Ravex',
    'AdminSLogo',
    'tipo-instalacao'
  );
  static envioComando = new MenuItem(
    'Envio de Comandos',
    'Envio de Comandos para o Rastreador',
    'Monitoramento',
    ' ravex-icon-envio-comando',
    'envio-comandos'
  );
  static mapaMonitoramento = new MenuItem(
    'Mapa de Monitoramento',
    'Mapa de Monitoramento e Ocorrências',
    'Monitoramento',
    'TVMonitor',
    'mapa-monitoramento'
  );
  static mapaMonitoramentoPoc = new MenuItem(
    'Mapa de Monitoramento (POC)',
    'Mapa de Monitoramento e Ocorrências (POC)',
    'Monitoramento',
    'TVMonitor',
    'mapa-monitoramento-poc'
  );
  static monitoramentoVeiculo = new MenuItem(
    'Monitoramento de Veículo',
    'Monitoramento de Veículo',
    'Monitoramento',
    ' ravex-icon-monitoramento-veiculo',
    'monitoramento-veiculo'
  );
  static historicoVeiculo = new MenuItem(
    'Histórico de Veículo',
    'Histórico de Veículo',
    'Monitoramento',
    'History',
    'historico-veiculo'
  );
  static chat = new MenuItem(
    'Mensagem de Veículo',
    'Comunicação com veículo',
    'Monitoramento',
    'ChatInviteFriend',
    'mensagem-veiculo'
  );
  static contraSenha = new MenuItem(
    'Contra senha',
    'Desbloqueio via senha',
    'Monitoramento',
    ' ravex-icon-contrasenha',
    'contra-senha'
  );
  static regraServidorEmHierarquiaOrganizacional = new MenuItem(
    'Regra do Servidor',
    'Ações após Receber Posição',
    'Monitoramento',
    ' ravex-icon-EMI',
    'regra-servidor'
  );
  static pessoa = new MenuItem(
    'Pessoa',
    'Cadastro de Usuários, Colaboradores e Motoristas',
    ' Segurança',
    'Contact',
    'pessoa'
  );
  static grupoPessoa = new MenuItem(
    'Grupo de Pessoas e Permissão',
    'Cadastro de Grupos de Pessoa e Permissão de Acesso',
    ' Segurança',
    'PeopleAdd',
    'grupo-pessoa'
  );
  static visibilidade = new MenuItem(
    'Visibilidade',
    'Permissão de Visibilidade para Grupo de Usuários',
    ' Segurança',
    'IssueTrackingMirrored',
    'visibilidade'
  );
  static embarqueEmEquipamento = new MenuItem(
    'Embarcar',
    'Embarcar áreas, rotas e regras no veículo',
    'Embarque',
    ' ravex-icon-envio-comando',
    'embarque'
  );
  static regraEmbarcadaEmInstalacaoTipo = new MenuItem(
    'Regra Embarcada',
    'Cadastro da Inteligência Embarcada do Rastreador',
    'Embarque',
    ' ravex-icon-VisioDiagram',
    'regra-embarcada'
  );
  static configuracaoEmbarque = new MenuItem(
    'Configuração de Embarque',
    'Configuração Padrão do Rastreador',
    'Embarque',
    ' ravex-icon-VisioDiagram',
    'configuracao-embarque'
  );
  static comandoCustomizado = new MenuItem(
    'Comando Customizado',
    'Configuração de Comandos Personalizados',
    'Desenvolvimento Ravex',
    ' ravex-icon-VisioDiagram',
    'comando-customizado'
  );
  static som = new MenuItem(
    'Som',
    'Cadastros de sons para o Atuador',
    'Desenvolvimento Ravex',
    ' ravex-icon-VisioDiagram',
    'som'
  );

  static obterLista(): MenuItem[] {
    return Object.values(Menu) as MenuItem[];
  }
}
