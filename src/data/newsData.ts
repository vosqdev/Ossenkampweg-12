export interface NewsPhoto {
  id: number;
  title: string;
  phaseLabel: string;
  badge: string;
  dateLabel: string;
  imageUrl: string;
  caption: string;
  details: string;
  isStockPlaceholder: boolean;
}

export interface NewsArticle {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  category: string;
  readTime: string;
  summary: string;
  photos: NewsPhoto[];
}

export const SANERING_NEWS_ARTICLE: NewsArticle = {
  id: 'sanering-solitaire-windturbine',
  title: 'Sanering solitaire windturbine Ossenkampweg voltooid',
  subtitle: 'Fysieke ontmanteling gereed met behoud van robuuste betonfundatie en 10kV netaansluiting voor ontwerpend onderzoek',
  date: 'Zomer 2026',
  category: 'Locatie-update & Sanering',
  readTime: '3 min leestijd',
  summary:
    'In het kader van de saneringsregeling voor solitaire windturbines in de provincie Flevoland is de windturbine aan de Ossenkampweg 12, vakkundig en veilig ontmanteld.',
  photos: [
    {
      id: 1,
      title: 'Actieve windturbine in oorspronkelijke opstelling',
      phaseLabel: 'Foto 1 · Oorspronkelijke situatie',
      badge: 'Historisch / Operationeel',
      dateLabel: 'Voorafgaand aan sanering',
      imageUrl: 'https://www.image2url.com/r2/default/images/1790598737623-0eb10c0e-2b69-4e45-95dc-a66da6b142c3.jpeg',
      caption: 'Jarenlang wekte de solitaire windturbine aan de Ossenkampweg 12 duurzame elektriciteit op in het open polderlandschap, direct verbonden met het middenspanningsnet van Liander via een eigen 10kV transformatorstation.',
      details: 'De turbine had een gevestigde netaansluiting en een bestaand recht op transportvermogen. Dit infrastructurele kapitaal vormt het uitgangspunt voor het huidige initiatief.',
      isStockPlaceholder: false
    },
    {
      id: 2,
      title: 'Aankomst zwaar materieel & inrichting kraanopstelplaats',
      phaseLabel: 'Foto 2 · Sanering: Voorbereiding',
      badge: 'Saneringsfase 1',
      dateLabel: 'Start ontmanteling',
      imageUrl: 'https://www.image2url.com/r2/default/images/1790598811737-77e6b908-18b5-468d-96ce-413a55e024e9.jpeg',
      caption: 'Inrichting van het werkterrein met stalen rijplaten en opbouw van de zware telescopische mobiele kraan om de ontmanteling met uiterste precisie en veiligheid uit te voeren.',
      details: 'Rondom de torenvoet werd de werkzone afgezet en beveiligd. De transformator en kabelinvoer naar het middenspanningsnet werden zorgvuldig afgeschermd tegen beschadiging.',
      isStockPlaceholder: false
    },
    {
      id: 3,
      title: 'Hijsen en afvoeren van machinekamer en mastdelen',
      phaseLabel: 'Foto 3 · Sanering: Gondel & toren',
      badge: 'Saneringsfase 2',
      dateLabel: 'Zware hijswerkzaamheden',
      imageUrl: 'https://www.image2url.com/r2/default/images/1790600098715-6e1fd9d9-728f-4b19-8283-7a7a9910e8d2.jpeg',
      caption: 'De generator, tandwielkast en behuizing (nacelle) zijn in één zware hijsbeweging neergehaald. Aansluitend zijn de stalen torendelen segment voor segment ontmanteld en per dieplader afgevoerd.',
      details: 'Hiermee verdween het verticale silhouet van de windmolen uit het polderlandschap, conform de provinciale doelstelling voor sanering van solitaire molens.',
      isStockPlaceholder: false
    },
    {
      id: 4,
      title: 'Vrijgekomen terrein met intacte betonfundatie',
      phaseLabel: 'Foto 4 · Sanering: Maaiveld & fundering',
      badge: 'Saneringsfase 3',
      dateLabel: 'Afronding ontmanteling',
      imageUrl: 'https://www.image2url.com/r2/default/images/1790600199201-d029add3-0d19-4e3c-9a8f-3441a54a2c52.jpeg',
      caption: 'Overzicht van het terrein na demontage van de toren: een opgeruimd maaiveld waarbij de gewapende betonfundatie en aansluitingsinfrastructuur onaangetast zijn gebleven.',
      details: 'Door deze constructieve basis niet te slopen maar te behouden, kan de locatie zonder nieuw zwaar grondverzet fungeren als fysieke basis voor een lokale energiehub.',
      isStockPlaceholder: false
    },
    {
      id: 5,
      title: 'Intacte 10kV aansluiting & transformator gereed voor onderzoek',
      phaseLabel: 'Foto 5 · Sanering: Oplevering terrein',
      badge: 'Gereed voor ontwerpend onderzoek',
      dateLabel: 'Huidige situatie op locatie',
      imageUrl: 'https://www.image2url.com/r2/default/images/1790600474416-fc1c0a27-5fee-4ee4-b98f-820c72d41298.jpg',
      caption: 'Het opgeleverde terrein aan de Ossenkampweg 12 na afronding van de sanering: een schoon perceel met de intacte 10kV-aansluiting en compacte transformatorinfrastructuur.',
      details: 'Zonder noodzaak tot nieuwe netverzwaring biedt deze bestaande kabelpositie een directe kans voor een modulaire batterij, slimme sturing en netontlasting in Zeewolde.',
      isStockPlaceholder: false
    }
  ]
};
