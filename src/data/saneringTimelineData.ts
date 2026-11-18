export interface SaneringMilestone {
  id: string;
  date: string;
  shortDate: string;
  shortTitle: string;
  year: '2025' | '2026';
  monthOrder: number; // for chronological sorting
  title: string;
  category: 'visie' | 'bestuur' | 'provincie' | 'sanering' | 'deadline';
  categoryLabel: string;
  badge: string;
  iconKey:
    | 'compass'
    | 'scale'
    | 'send'
    | 'fileCheck'
    | 'mailAlert'
    | 'landmark'
    | 'presentation'
    | 'fileText'
    | 'zap'
    | 'building'
    | 'wrench'
    | 'plugZap'
    | 'megaphone'
    | 'alert';
  description: string;
  highlight?: boolean;
  isUrgent?: boolean;
  link?: {
    label: string;
    url: string;
  };
  note?: string;
}

export const SANERING_TIMELINE_EVENTS: SaneringMilestone[] = [
  {
    id: 'planvisie-2025',
    date: '2025',
    shortDate: '2025',
    shortTitle: 'Planvisie',
    year: '2025',
    monthOrder: 1,
    title: 'Ontwikkeling planvisie en aanpak',
    category: 'visie',
    categoryLabel: 'Planvisie & Strategie',
    badge: 'Conceptontwikkeling',
    iconKey: 'compass',
    description:
      'Integrale verkenning en formulering van de planvisie: van solitaire windturbinelocatie naar een netbewuste energiehub en proeftuin voor de toekomstige leefomgeving van Zeewolde.',
    note: 'Startpunt van het initiatief voor behoud van maatschappelijke waarde.'
  },
  {
    id: 'maatwerk-nov-2025',
    date: 'November 2025',
    shortDate: "Nov '25",
    shortTitle: 'Maatwerk',
    year: '2025',
    monthOrder: 11,
    title: 'Voorbereiding verzoek om maatwerk bij sanering',
    category: 'bestuur',
    categoryLabel: 'Juridisch & Procedureel',
    badge: 'Maatwerktraject',
    iconKey: 'scale',
    description:
      'Voorbereiding van een formeel verzoek om beleidsmatig en ruimtelijk maatwerk bij de saneringsverplichting, met als doel het behoud van de kostbare 10kV netaansluiting en fundatie veilig te stellen.',
    note: 'Onderzoek naar tijdelijke ontheffingsmogelijkheden.'
  },
  {
    id: 'principeverzoek-jan-2026',
    date: '22 januari 2026',
    shortDate: '22 jan',
    shortTitle: 'Ontheffing',
    year: '2026',
    monthOrder: 13,
    title: 'Indiening principeverzoek / tijdelijke ontheffing',
    category: 'bestuur',
    categoryLabel: 'Formeel Verzoek',
    badge: 'Principeverzoek B&W',
    iconKey: 'send',
    highlight: true,
    description:
      'Officiële indiening van het principeverzoek bij het College van B&W van Gemeente Zeewolde voor een tijdelijke ontheffing van de volledige amovatieverplichting ten behoeve van een innovatieve proeftuin.',
    note: 'Formele start van het ambtelijke beoordelingstraject.'
  },
  {
    id: 'reactie-gemeente-maart-2026',
    date: '5 maart 2026',
    shortDate: '5 mrt',
    shortTitle: 'Reactie gem.',
    year: '2026',
    monthOrder: 15,
    title: 'Ruimtelijke beoordelingsreactie gemeente',
    category: 'bestuur',
    categoryLabel: 'Gemeentelijke Reactie',
    badge: 'Beoordelingsreactie',
    iconKey: 'fileCheck',
    description:
      'Eerste ruimtelijke beoordeling door de gemeente Zeewolde. Er wordt inhoudelijk gereageerd op de ruimtelijke aspecten, maar een inhoudelijk antwoord op het specifieke verzoek om tijdelijke ontheffing blijft vooralsnog uit.',
    note: 'Aandachtspunt: geen formeel standpunt over de ontheffing geformuleerd.'
  },
  {
    id: 'urgentiebrief-maart-2026',
    date: '25 maart 2026',
    shortDate: '25 mrt',
    shortTitle: 'Brief B&W',
    year: '2026',
    monthOrder: 15.8,
    title: 'Brief aan college gemeente i.v.m. urgentie ontheffingsverzoek',
    category: 'bestuur',
    categoryLabel: 'Bestuurlijke Urgentie',
    badge: 'Urgentiebrief',
    iconKey: 'mailAlert',
    description:
      'Dringende brief verzonden aan het College van B&W van Zeewolde om aandacht te vragen voor de naderende saneringsdeadline en de noodzaak tot een tijdige en gemotiveerde beslissing over het ontheffingsverzoek.',
    note: 'Waarschuwing voor onherstelbaar verlies van de netaansluiting bij stilzitten.'
  },
  {
    id: 'bestuursakkoord-zeewolde',
    date: 'Juni 2026',
    shortDate: "Jun '26",
    shortTitle: 'Akkoord',
    year: '2026',
    monthOrder: 18.5,
    title: 'Bestuursakkoord Gemeente Zeewolde (2026 – 2030)',
    category: 'bestuur',
    categoryLabel: 'Gemeentelijk Beleid',
    badge: 'Coalitieakkoord',
    iconKey: 'landmark',
    description:
      'Vaststelling Coalitieakkoord 2026–2030: de gemeente Zeewolde zoekt nadrukkelijk naar innovatieve mogelijkheden en slimme oplossingen om toch te kunnen bouwen ondanks netcongestie, passend bij de voorbereidingen voor het A-gebied (Fortenveld en Vestingveld) en het Omgevingsprogramma.',
    link: {
      label: 'Bekijk Coalitieakkoord Zeewolde (PDF)',
      url: 'https://www.zeewolde.nl/fileadmin/Site_Zeewolde/documenten/college_b_en_w/Coalitieakkoord_2026_-_2030.pdf'
    },
    note: 'Directe aansluiting bij de doelstellingen van Ossenkampweg 12.'
  },
  {
    id: 'provinciale-presentatie-juni-2026',
    date: '30 juni 2026',
    shortDate: '30 jun',
    shortTitle: 'Pres. prov.',
    year: '2026',
    monthOrder: 18.9,
    title: 'Provinciale presentatie Energie Eilanden',
    category: 'provincie',
    categoryLabel: 'Provinciaal Overleg',
    badge: 'Kaderpresentatie',
    iconKey: 'presentation',
    description:
      'Uitgebreide presentatie voor de provinciale energie- en omgevingsafdelingen over de rol van Energie Eilanden als oplossing voor acute netcongestie en versnelling van maatschappelijke projecten in Flevoland.',
    note: 'Draagvlakvergroting op provinciaal strategisch niveau.'
  },
  {
    id: 'perspectief-juli-2026',
    date: 'Juli 2026',
    shortDate: "Jul '26",
    shortTitle: 'Perspectief',
    year: '2026',
    monthOrder: 19.1,
    title: 'Perspectief- en agenderingsdocument',
    category: 'visie',
    categoryLabel: 'Documentatie & Agendering',
    badge: 'Strategisch Document',
    iconKey: 'fileText',
    description:
      'Vastlegging van het ruimtelijke, maatschappelijke en energetische perspectief. Formulering van de agendering rondom netcongestie, energie-eilanden en kansen voor Zeewolde-Noord.',
    note: 'Inhoudelijke onderbouwing voor bestuurlijke dialogen.'
  },
  {
    id: 'energie-eilanden-juli-2026',
    date: 'Juli 2026',
    shortDate: "Jul '26",
    shortTitle: 'E. Eilanden',
    year: '2026',
    monthOrder: 19.2,
    title: 'Presentatie Energie Eilanden aanpak',
    category: 'provincie',
    categoryLabel: 'Provinciaal Overleg',
    badge: 'Presentatie Provincie',
    iconKey: 'zap',
    description:
      'Inhoudelijke presentatie aan Provincie Flevoland over de Energie Eilanden-aanpak: decentrale balancering, batterijopslag en slimme netinpassing.',
    note: 'Verbinding met provinciaal energiebeleid en netwerkdruk.'
  },
  {
    id: 'overleg-provincie-juli-2026',
    date: 'Juli 2026',
    shortDate: "Jul '26",
    shortTitle: 'Overleg prov.',
    year: '2026',
    monthOrder: 19.3,
    title: 'Overleg provincie Flevoland over planinitiatief',
    category: 'provincie',
    categoryLabel: 'Bestuurlijk Overleg',
    badge: 'Ambtelijk & Bestuurlijk',
    iconKey: 'building',
    description:
      'Verdiepend ambtelijk en bestuurlijk overleg met Provincie Flevoland over het concrete planinitiatief Ossenkampweg 12, de juridische kaders en mogelijke experimenteerruimte.',
    note: 'Onderzoek naar provinciale instrumenten en innovatiepilots.'
  },
  {
    id: 'brief-provincie-aug-2026',
    date: '31 augustus 2026',
    shortDate: '31 aug',
    shortTitle: 'Brief prov.',
    year: '2026',
    monthOrder: 20,
    title: 'Brief provincie – bestuurlijke agendering wegens urgentie',
    category: 'provincie',
    categoryLabel: 'Bestuurlijke Agendering',
    badge: 'Formele Brief Provincie',
    iconKey: 'send',
    highlight: true,
    description:
      'Officiële brief aan de provincie Flevoland met het verzoek tot bestuurlijke agendering wegens de acute tijdsdruk en de naderende ontmantelingsplanning aan de Ossenkampweg.',
    note: 'Oproep tot regie en gezamenlijke afstemming tussen gemeente en provincie.'
  },
  {
    id: 'sanering-bovenbouw-sep-2026',
    date: 'September 2026',
    shortDate: "Sep '26",
    shortTitle: 'Sloop molen',
    year: '2026',
    monthOrder: 21,
    title: 'Sanering en sloop bovenbouw windmolen Ossenkampweg',
    category: 'sanering',
    categoryLabel: 'Realisatie & Uitvoering',
    badge: 'Sloop Bovenbouw',
    iconKey: 'wrench',
    highlight: true,
    description:
      'Fysieke ontmanteling van de solitaire windturbine: wieken, gondel (nacelle) en stalen mastdelen worden deskundig gedemonteerd en afgevoerd conform afspraak.',
    note: 'Bovengronds vrij; terrein gereed voor vervolg.'
  },
  {
    id: 'behoud-netaansluiting-okt-2026',
    date: 'Oktober 2026',
    shortDate: "Okt '26",
    shortTitle: 'Behoud net',
    year: '2026',
    monthOrder: 22,
    title: 'Behoud van de netaansluiting & ondergrondse fundatie',
    category: 'sanering',
    categoryLabel: 'Infrastructuur Behoud',
    badge: 'Proeftuin Status',
    iconKey: 'plugZap',
    highlight: true,
    description:
      'De solitaire turbine is verdwenen; de 10kV netaansluiting (inclusief transformatorstation) en de ondergrondse betonfundering blijven nog tot 1 december 2026 geconserveerd voor de proeftuinfase, bij geen ontheffing zal toch gesloopt moeten worden na 1 dec 2026.',
    note: 'Kostbaar maatschappelijk kapitaal'
  },
  {
    id: 'vvd-nov-2026',
    date: 'November 2026',
    shortDate: "Nov '26",
    shortTitle: 'VVD steun',
    year: '2026',
    monthOrder: 23,
    title: 'VVD Zeewolde wil bestaande netaansluiting behouden voor onderzoek',
    category: 'bestuur',
    categoryLabel: 'Politieke Steun',
    badge: 'Zeewolde Actueel',
    iconKey: 'megaphone',
    highlight: true,
    description:
      'De VVD in Zeewolde spreekt zich uit om de bestaande 10kV netaansluiting aan de Ossenkampweg te behouden voor verkennend onderzoek, zodat deze schaarse energie-infrastructuur in tijden van netcongestie niet verloren gaat.',
    link: {
      label: 'Lees bericht op Zeewolde Actueel',
      url: 'https://www.zeewolde-actueel.nl/politiek/politiek/376314/vvd-wil-bestaande-netaansluiting-aan-ossenkampweg-behouden-voor-onderzoek'
    },
    note: 'Lokale politieke steun voor behoud van netcapaciteit voor onderzoek.'
  },
  {
    id: 'saneringsdeadline-dec-2026',
    date: '1 december 2026',
    shortDate: '1 dec',
    shortTitle: 'Deadline',
    year: '2026',
    monthOrder: 24,
    title: 'Urgente saneringsdeadline',
    category: 'deadline',
    categoryLabel: 'Cruciale Deadline',
    badge: 'Formele Peildatum',
    iconKey: 'alert',
    isUrgent: true,
    highlight: true,
    description:
      'Formele en juridische peildatum voor de sanering van solitaire windturbines. Cruciale deadline voor het afronden van de afstemming en het definitief borgen van de netaansluiting als proeftuinlocatie.',
    note: 'Besluitvormend kantelpunt voor de toekomst van Ossenkampweg 12.'
  }
];
