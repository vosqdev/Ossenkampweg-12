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
      title: 'Gecontroleerde demontage van de rotorbladen',
      phaseLabel: 'Foto 3 · Sanering: Rotor & wieken',
      badge: 'Saneringsfase 2',
      dateLabel: 'Fase van ontkoppeling',
      imageUrl: 'https://www.image2url.com/r2/default/images/1790598852128-1555d586-bb08-4f92-b783-658852192f11.jpeg',
      caption: 'Tijdens een windstil venster zijn de drie composiet rotorbladen en het wiekenkruis losgeschroefd en stuk voor stuk gecontroleerd naar het maaiveld gehesen voor circulaire verwerking.',
      details: 'De bladen worden afgevoerd naar gespecialiseerde verwerkers voor hoogwaardig hergebruik van composietmaterialen.',
      isStockPlaceholder: false
    },
    {
      id: 4,
      title: 'Hijsen en afvoeren van de machinekamer en mastdelen',
      phaseLabel: 'Foto 4 · Sanering: Gondel & toren',
      badge: 'Saneringsfase 3',
      dateLabel: 'Zware hijswerkzaamheden',
      imageUrl: 'https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=1600&q=80',
      caption: 'De generator, tandwielkast en behuizing (nacelle) zijn in één zware hijsbeweging neergehaald. Aansluitend zijn de stalen torendelen segment voor segment ontmanteld en per dieplader afgevoerd.',
      details: 'Hiermee verdween het verticale silhouet van de windmolen uit het polderlandschap, conform de provinciale doelstelling voor sanering van solitaire molens.',
      isStockPlaceholder: true
    },
    {
      id: 5,
      title: 'Vrijgekomen terrein met intacte betonfundatie & 10kV kabel',
      phaseLabel: 'Foto 5 · Sanering: Oplevering terrein',
      badge: 'Gereed voor ontwerpend onderzoek',
      dateLabel: 'Huidige situatie op locatie',
      imageUrl: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1600&q=80',
      caption: 'Het opgeleverde terrein na afronding van de sanering: een opgeruimd maaiveld met de gewapende betonfundering en het compacte transformatorstation. Een unieke kans voor netontlasting.',
      details: 'Door de fundatie en de netaansluiting niet te slopen maar te behouden, kan hier zonder nieuwe netverzwaring een modulaire batterij en energiehub worden onderzocht.',
      isStockPlaceholder: true
    }
  ]
};
