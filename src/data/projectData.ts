import { AreaLayer, FaqItem, PhaseItem, ResearchQuestion, StakeholderGroup, StatusStep } from '../types';

export const AREA_LAYERS: AreaLayer[] = [
  {
    id: 'energie',
    name: 'Energie',
    color: '#63B9BB',
    accent: 'bg-[#63B9BB]/15 text-[#509799] border-[#63B9BB]/30',
    description: 'Bestaande netkoppeling, potentiële multimodale energiehub, lokale batterijopslag en slimme vermogensverdeling.',
    spatialRole: 'Fungeert als energetische ruggengraat die lokale vraag en aanbod harmoniseert voordat er aanspraak wordt gemaakt op het landelijk hoogspanningsnet.',
    elements: ['Bestaande 10kV aansluitlocatie', 'Energiehub schakelpunt', 'Modulaire batterijopslag (indicatief)', 'Regionale netaansluiting TenneT/Liander']
  },
  {
    id: 'wonen',
    name: 'Wonen',
    color: '#D97706',
    accent: 'bg-[#D97706]/15 text-[#B45309] border-[#D97706]/30',
    description: 'Toekomstige woonopgaven rondom Zeewolde-Noord en eventuele nabijgelegen duurzame woonvormen.',
    spatialRole: 'Behoefte aan stabiele, net-onafhankelijke energiezekerheid voor huishoudens, all-electric verwarming en warmtepompen.',
    elements: ['Zeewolde-Noord woonvisie', 'Lokaal buurtniveau stroomverbruik', 'Slimme warmte-koppeling', 'Verminderde piekvraag in de avonduren']
  },
  {
    id: 'bedrijven',
    name: 'Bedrijven',
    color: '#4F46E5',
    accent: 'bg-[#4F46E5]/15 text-[#4338CA] border-[#4F46E5]/30',
    description: 'Bestaande agrarische en lokaal-economische bedrijvigheid langs de Ossenkampweg en bedrijventerrein Horsterparc.',
    spatialRole: 'Mogelijkheid tot energie-uitwisseling (peak shaving, opwekbenutting) en collectief lokaal kabelbeheer (energy hub consortia).',
    elements: ['Agrarische bedrijfsprocessen', 'MKB-gebruikersprofielen', 'Gecombineerde netaansluiting', 'Flexibele stroomafnamecontracten']
  },
  {
    id: 'mobiliteit',
    name: 'Mobiliteit',
    color: '#059669',
    accent: 'bg-[#059669]/15 text-[#047857] border-[#059669]/30',
    description: 'Verduurzaming van transport over de N305/Gooiseweg en lokale agrarische/zakelijke logistiek.',
    spatialRole: 'Integratie van slimme laadinfra die kan bufferen en laden tijdens momenten van lokale overproductie van zon en wind.',
    elements: ['Snelladen personenvervoer', 'Heavy-duty transport laadinfra', 'Bidirectioneel laden (V2G perspectief)', 'Polder-mobiliteitsas']
  },
  {
    id: 'groen',
    name: 'Groen & landschap',
    color: '#557A64',
    accent: 'bg-[#557A64]/15 text-[#557A64] border-[#557A64]/30',
    description: 'Karakteristieke Flevolandse landschapslijnen, open zichtlijnen, boomsingels en ecologische windschermen.',
    spatialRole: 'Landschap is geen restcategorie, maar het uitgangspunt: installaties blijven laag, transparant en ingebed in de polderstructuur.',
    elements: ['Inheemse windsingels en populieren', 'Lage bebouwingshoogte conform poldernorm', 'Behoud weids horizontaal zicht', 'Faunapassages en akkerranden']
  },
  {
    id: 'water',
    name: 'Water',
    color: '#0284C7',
    accent: 'bg-[#0284C7]/15 text-[#0369A1] border-[#0284C7]/30',
    description: 'Polderwaterlopen, retentievijvers, tochten en ecologische waterberging van het Waterschap Zuiderzeeland.',
    spatialRole: 'Klimaatadaptieve wateropvang rondom de percelen met potentie voor thermische energie uit oppervlaktewater (aquathermie / TEO).',
    elements: ['Bestaande watergangen en kavelsloten', 'Buffer- en infiltratiebekkens', 'Watersysteem Waterschap Zuiderzeeland', 'Mogelijke aquathermie-koppeling']
  },
  {
    id: 'infrastructuur',
    name: 'Infrastructuur',
    color: '#99336F',
    accent: 'bg-[#99336F]/15 text-[#99336F] border-[#99336F]/30',
    description: 'Ontsluiting via Ossenkampweg, nabijheid N305 (Gooiseweg), ondergrondse kabeltracés en transformatorstations.',
    spatialRole: 'Hergebruik van bestaande kabelcapaciteit en versterken van corridors zonder nieuwe bovengrondse barrières op te werpen.',
    elements: ['Kabeltracé naar onderstation Liander', 'Bestaande zware transformatorfundering', 'Ontsluiting zwaar materieel Ossenkampweg', 'Verbinding met N305']
  }
];

export const TIMELINE_PHASES: PhaseItem[] = [
  {
    number: '01',
    period: '2025 – 2027',
    title: 'De Bestaande Energiepositie',
    focus: 'Behoud & Verdiepend Vooronderzoek',
    statusLabel: 'Lopend vooronderzoek',
    items: [
      'Sanering en ontmanteling van de verouderde windturbine',
      'Behoud en borging van de fysieke fundatie en 10kV aansluitcapaciteit',
      'Netbeheerder dialoog (Liander & TenneT) over contractuele benuttingsruimte',
      'Ruimtelijke inpassingsverkenning en ecologische nulmeting'
    ]
  },
  {
    number: '02',
    period: '2027 – 2029',
    title: 'Van Aansluiting naar Multi-Hub',
    focus: 'Proof of Concept & Lokale Koppeling',
    statusLabel: 'Onderzoeksperspectief',
    items: [
      'Onderzoek naar modulaire batterij-opslag op de bestaande fundatie',
      'Aansluiting van eerste lokale agrarische en MKB-gebruikers',
      'Implementatie van eerste generatie Energy Management System (EMS)',
      'Onderzoek naar lokale balancering en contractuele microgrid-vormen'
    ]
  },
  {
    number: '03',
    period: '2028 – 2030',
    title: 'Multimodale Energy Hub',
    focus: 'Gebiedsverknoping & Mobiliteit',
    statusLabel: 'Ontwikkelperspectief',
    items: [
      'Koppeling met laadinfrastructuur voor zwaar materieel en elektrisch vervoer',
      'Verkenning van aansluiting op toekomstige woningbouwplannen Zeewolde-Noord',
      'Mogelijke warmte-integratie (warmtepompen / seizoensopslag)',
      'Collectieve energie-uitwisseling tussen naburige percelen'
    ]
  },
  {
    number: '04',
    period: '2030 – 2035+',
    title: 'Gebiedssysteem & Energieplanologie',
    focus: 'Volwaardig Decentraal Ecosysteem',
    statusLabel: 'Langetermijnvisie',
    items: [
      'Schaalbare microgrid met autonome eilandbedrijf-capaciteit bij netuitval',
      'Mogelijke moleculaire opslag / waterstoftoepassingen op lange termijn',
      'Bredere sociaal-economische en circulaire integratie in Zuidelijk Flevoland',
      'Kennisdeling als reproduceerbare blauwdruk voor andere polderlocaties'
    ]
  }
];

export const RESEARCH_QUESTIONS: ResearchQuestion[] = [
  {
    id: 'energiesysteem',
    number: '01',
    title: 'Energiesysteem',
    question: 'Welke concrete energetische waarde heeft de bestaande aansluiting?',
    importance: 'Cruciaal vertrekpunt',
    focus: [
      'Grootte en belastbaarheid van de bestaande 10kV netkoppeling',
      'Profielen van lokale opwek (zon, wind) versus verbruikspatronen',
      'Piekmomenten en balanceringsbehoefte op uurbasis over het jaar'
    ]
  },
  {
    id: 'techniek',
    number: '02',
    title: 'Techniek & Veiligheid',
    question: 'Hoe kunnen opwek, opslag en gebruikers veilig en redundant worden gekoppeld?',
    importance: 'Technische borging',
    focus: [
      'Certificering en brandveiligheid van energieopslagsystemen (EOS)',
      'EMS-sturingssoftware en fail-safe afschakelprotocollen',
      'Hergebruik en draagkracht van de bestaande turbinefundatie'
    ]
  },
  {
    id: 'netbeheer',
    number: '03',
    title: 'Netbeheer & Contracten',
    question: 'Welke technische en contractuele mogelijkheden bestaan met de netbeheerder?',
    importance: 'Juridisch-operationeel',
    focus: [
      'Capaciteitsbeperkende contracten (CBC) en groepscontracten',
      'Cable pooling met nabijgelegen duurzame opwekkers',
      'Voorkomen van teruglevering tijdens congestie-uren op het hoofdnet'
    ]
  },
  {
    id: 'ruimte',
    number: '04',
    title: 'Ruimte & Landschap',
    question: 'Hoe kan het concept zorgvuldig worden ingepast in de polderstructuur?',
    importance: 'Ruimtelijke kwaliteit',
    focus: [
      'Aansluiting bij het polderidioom van Zeewolde en open horizonnen',
      'Groen-blauwe landschappelijke inpassing met inheemse beplanting',
      'Geluids- en veiligheidsafstanden tot omliggende functies'
    ]
  },
  {
    id: 'organisatie',
    number: '05',
    title: 'Organisatie & Governance',
    question: 'Welke samenwerkingsvorm past bij gezamenlijk lokaal energiegebruik?',
    importance: 'Bestuurlijk draagvlak',
    focus: [
      'Energiegemeenschap (Energy Hub Coöperatie) versus publiek-private entiteit',
      'Zeggenschap van omwonenden, ondernemers en overheden',
      'Eerlijke verdeling van kosten, baten en flexibiliteitsopbrengsten'
    ]
  },
  {
    id: 'businesscase',
    number: '06',
    title: 'Businesscase & Haalbaarheid',
    question: 'Welke onderdelen zijn technisch, juridisch en economisch zelfdragend?',
    importance: 'Economische continuïteit',
    focus: [
      'Investeringskosten versus besparingen op netverzwaring',
      'Waardecreatie door peak-shaving en vermeden congestieverliezen',
      'Fasering van investeringen synchroon met de gebiedsvraag'
    ]
  }
];

export const STAKEHOLDERS: StakeholderGroup[] = [
  {
    id: 'gemeente',
    name: 'Gemeente Zeewolde',
    role: 'Regierol ruimtelijke ordening, Omgevingsvisie & lokale verduurzaming',
    perspective: 'Onderzoekt hoe energieplanologie kan bijdragen aan gemeentelijke doelen voor woningbouw en een leefbare polder.',
    iconName: 'Landmark'
  },
  {
    id: 'provincie',
    name: 'Provincie Flevoland',
    role: 'Bovenlokale energie- en gebiedsregie & Provinciaal Meerjarenprogramma Energie (pMIEK)',
    perspective: 'Monitort pilots die de druk op het provinciale stroomnetwerk kunnen verlichten en bijdragen aan economische vitaliteit.',
    iconName: 'Compass'
  },
  {
    id: 'netbeheerder',
    name: 'Netbeheerder (Liander / TenneT)',
    role: 'Beheerder van het openbare elektriciteitsnet & transportcapaciteit',
    perspective: 'Cruciale gesprekspartner voor slimme aansluitovereenkomsten, vermogenssturing en congestiemanagement.',
    iconName: 'Zap'
  },
  {
    id: 'grondeigenaren',
    name: 'Grondeigenaren',
    role: 'Locatie-inbreng & agrarische rentmeesterschap Ossenkampweg',
    perspective: 'Verkennen toekomstbestendig hergebruik van de vrijkomende energiepositie na sanering van de windturbine.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'bewoners',
    name: 'Inwoners & Omgeving',
    role: 'Omwonenden van Ossenkampweg en inwoners van Zeewolde',
    perspective: 'Hechten aan behoud van open polderlandschap, rust, transparante communicatie en betaalbare energiezekerheid.',
    iconName: 'Users'
  },
  {
    id: 'ondernemers',
    name: 'Ondernemers & Agrariërs',
    role: 'Bedrijvigheid in de directe polderomgeving en Horsterparc',
    perspective: 'Zoeken oplossingen tegen stroomaansluitstops voor elektrificatie van machines, koeling en wagenparken.',
    iconName: 'Building2'
  },
  {
    id: 'ontwikkelaars',
    name: 'Gebiedsontwikkelaars',
    role: 'Initiatiefnemers woningbouw en bedrijventerreinen Zeewolde-Noord',
    perspective: 'Willen tijdig energiezekerheid inbouwen in stedenbouwkundige plannen zonder te wachten op netverzwaring tot 2035+.',
    iconName: 'MapPin'
  },
  {
    id: 'kennisinstellingen',
    name: 'Kennisinstellingen',
    role: 'Onderzoekers naar smart grids, energieplanologie en governance',
    perspective: 'Benutten de locatie als empirische proeftuin voor meetdata, netinteractie en wetenschappelijke monitoring.',
    iconName: 'GraduationCap'
  },
  {
    id: 'energiepartners',
    name: 'Energiepartners & Technici',
    role: 'Specialisten in EMS-software, batterijtechnologie en veiligheid',
    perspective: 'Leveren betrouwbare technische modules voor energiesturing, certificering en redundantie.',
    iconName: 'Cpu'
  }
];

export const STATUS_STEPS: StatusStep[] = [
  {
    step: 1,
    title: 'Eerste conceptvorming',
    statusText: 'Voltooid',
    state: 'completed',
    explanation: 'Verkenning van het initiatief: constatering sanering windturbine en inventarisatie van de potentiële waarde van de bestaande energieaansluiting en fundatie.'
  },
  {
    step: 2,
    title: 'Perspectief en agendering',
    statusText: 'In ontwikkeling / overleg',
    state: 'in_progress',
    explanation:
      'Actieve fase waarin het ontwikkelperspectief sinds begin 2026 is gedeeld met zowel de ambtelijke als bestuurlijke lagen binnen de Gemeente en Provincie, (in)direct ook als belanghebbenden. Waarvan sinds april 2026 aanvraag voor tijdelijke ontheffing voor ontwerpend onderzoek.'
  },
  {
    step: 3,
    title: 'Ontwerpend onderzoek',
    statusText: 'Voorgenomen',
    state: 'planned',
    explanation: 'Beoogd gezamenlijk onderzoekstraject naar ruimtelijke inpassing, systeemarchitectuur, juridische structuren en landschappelijke inbedding.'
  },
  {
    step: 4,
    title: 'Technische & ruimtelijke haalbaarheid',
    statusText: 'Nog te onderzoeken',
    state: 'pending',
    explanation: 'Gedetailleerde engineering, bodemonderzoek, netberekeningen met Liander en formele participatietrajecten.'
  },
  {
    step: 5,
    title: 'Besluitvorming',
    statusText: 'Nog niet doorlopen',
    state: 'pending',
    explanation: 'Formele publieke en bestuurlijke procedures bij gemeente en provincie. Er is nog géén aanvraag of ruimtelijk besluit genomen.'
  },
  {
    step: 6,
    title: 'Realisatie',
    statusText: 'Geen besluit',
    state: 'pending',
    explanation: 'Eventuele gefaseerde uitvoering is volledig afhankelijk van de uitkomsten van voorgaande stappen en formele goedkeuring.'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'algemeen',
    question: 'Wat wordt er precies ontwikkeld?',
    answer: 'Er wordt op dit moment geen definitief bouwplan ontwikkeld. Het betreft een verkennend ontwikkelperspectief en onderzoeksrichting waarin wordt onderzocht of de bestaande energiepositie aan de Ossenkampweg 12 in Zeewolde — waar een windturbine wordt gesaneerd — kan worden behouden en getransformeerd tot een lokaal energiesysteem (energy hub) ter ontlasting van het elektriciteitsnet.'
  },
  {
    id: 'faq-2',
    category: 'planning',
    question: 'Is er al een definitief plan?',
    answer: 'Nee, er is uitdrukkelijk géén sprake van een definitief ontwerp, verleende vergunning of bestuurlijk goedgekeurd plan. Alle gepresenteerde modellen, faseringen en beelden zijn indicatief en dienen om het gesprek over ontwerpend onderzoek te voeren met overheden, netbeheerder, omwonenden en ondernemers.'
  },
  {
    id: 'faq-3',
    category: 'omgeving',
    question: 'Waarom wordt de windturbine verwijderd?',
    answer: 'De bestaande solitaire windturbine aan de Ossenkampweg 12 heeft het einde van haar levensduur bereikt en past binnen het provinciale en gemeentelijke saneringsbeleid voor solitaire windmolens in Flevoland (opschaling en bundeling in windparken). De turbine wordt daarom conform afspraken gesaneerd.'
  },
  {
    id: 'faq-4',
    category: 'techniek',
    question: 'Waarom zou de bestaande fundatie behouden blijven?',
    answer: 'De zware betonnen fundatie en de bijbehorende 10kV netaansluiting vertegenwoordigen een aanzienlijke infrastructurele waarde. In plaats van sloop en vernietiging van kapitaal wordt onderzocht of deze fundatie circulair hergebruikt kan worden als stabiele, veilige ondergrond voor modulaire energieopslag (batterijen) of technische besturingsunits, zonder nieuwe grond te verstoren.'
  },
  {
    id: 'faq-5',
    category: 'techniek',
    question: 'Wat is een multimodale energiehub?',
    answer: 'Een multimodale energiehub is een knooppunt waar verschillende energievormen (elektriciteit, warmte, eventueel moleculen) en functies (opwek, opslag, verbruik door woningen, bedrijven en mobiliteit) lokaal op elkaar worden afgestemd via een slim Energy Management System. Het doel is om stroom zoveel mogelijk lokaal te benutten en niet ongecontroleerd op het overbelaste openbare net te dumpen.'
  },
  {
    id: 'faq-6',
    category: 'techniek',
    question: 'Komt hier een groot batterijpark?',
    answer: 'Nee, er is geen sprake van een gigantisch industrieel batterijpark. Het onderzoek richt zich op een compacte, landschappelijk ingepaste batterijvoorziening die nauwkeurig is gedimensioneerd op de bestaande aansluitcapaciteit en lokale gebruikers. Doel is lokale balancering, niet grootschalige speculatieve netopslag.'
  },
  {
    id: 'faq-7',
    category: 'techniek',
    question: 'Wordt hier waterstof geproduceerd?',
    answer: 'Op korte en middellange termijn is hier geen sprake van waterstofproductie. Waterstof of moleculaire opslag wordt uitsluitend als mogelijk langetermijnperspectief (fase 4, 2030–2035+) benoemd, mocht daar in de regio concrete behoefte aan zijn voor zwaar agrarisch transport en de technologie en regelgeving daar klaar voor zijn.'
  },
  {
    id: 'faq-8',
    category: 'omgeving',
    question: 'Welke relatie heeft het initiatief met woningbouw?',
    answer: 'Gemeente Zeewolde heeft plannen voor toekomstige gebiedsontwikkeling, waaronder mogelijke woningbouw rond Zeewolde-Noord. Nieuwe woningen hebben stroom nodig voor warmtepompen en elektrisch koken, terwijl het elektriciteitsnet vol zit. Door de energiepositie aan de Ossenkampweg netbewust in te zetten, kan mogelijk extra flexibiliteit en capaciteit voor de bebouwde omgeving worden ontsloten.'
  },
  {
    id: 'faq-9',
    category: 'techniek',
    question: 'Wat betekent het initiatief voor het elektriciteitsnet?',
    answer: 'Het initiatief vervangt het openbare net niet, maar ontlast het. Door lokaal balanceren als eerste principe te hanteren (eerst zelf opwekken, opslaan en lokaal verbruiken), wordt voorkomen dat piekstromen het openbare net overbelasten. Het regionale net wordt alleen aangesproken wanneer dat noodzakelijk is en wanneer er transportruimte beschikbaar is.'
  },
  {
    id: 'faq-10',
    category: 'omgeving',
    question: 'Hoe wordt rekening gehouden met landschap en omgeving?',
    answer: 'Landschap is geen sluitpost. Het polderlandschap van Flevoland kenmerkt zich door openheid, rust en strakke zichtlijnen. Eventuele installaties worden laag bij de grond gehouden, omsloten door inheemse boomsingels en rietkragen conform het landschapsbeleid. De locatie behoudt haar open, agrarische uitstraling en wordt beslist géén anoniem industrieterrein.'
  },
  {
    id: 'faq-11',
    category: 'planning',
    question: 'Wanneer wordt hierover besloten?',
    answer: 'Er is geen acute besluitvorming gepland. Het initiatief bevindt zich in de agenderende fase. Een eventueel formeel besluit volgt pas na grondig ontwerpend onderzoek, overleg met netbeheerder en overheden, en formele participatietrajecten. Dit is een proces van meerdere jaren waarin zorgvuldigheid vooropstaat.'
  },
  {
    id: 'faq-12',
    category: 'algemeen',
    question: 'Kunnen bewoners en ondernemers betrokken worden?',
    answer: 'Jazeker. Het uitgangspunt is dat een gebiedssysteem alleen succesvol kan zijn als het samen met de omgeving wordt vormgegeven. Inwoners, agrariërs en ondernemers worden uitgenodigd om mee te denken over de onderzoeksvragen, behoeften en randvoorwaarden via ontwerpend onderzoek.'
  }
];
