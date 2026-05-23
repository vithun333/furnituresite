const ASSET = 'assets/';

const translations = {
  en: {
    skip: 'Skip to main content',
    brand: 'Lumina Home',
    heroKicker: 'The Memorial Day Sale',
    heroTitle: 'Every. Thing. On. Sale.',
    shopNow: 'Shop Now',
    introKicker: 'Curated rooms',
    introTitle: 'Timeless pieces for quiet, crafted living.',
    introBody: 'Explore refined furniture, lighting, rugs, and decor designed to bring warmth, balance, and sanctuary into every room.',
    browseCategories: 'Browse Categories',
    hoverBrowse: 'Hover to browse',
    tapBrowse: 'Tap to shop',
    products: 'products',
    storyKicker: 'The Lumina edit',
    storyTitle: 'A calmer way to furnish your home.',
    storyBody: 'Every piece is selected for material richness, architectural form, and the feeling it brings to daily rituals.',
    storyCta: 'Discover the brand',
    home: 'Home',
    backToProducts: 'Back to products',
    living: 'Living',
    dining: 'Dining',
    bedroom: 'Bedroom',
    bath: 'Bath',
    lighting: 'Lighting',
    outdoor: 'Outdoor',
    decor: 'Decor',
    artMirrors: 'Art & Mirrors',
    rugs: 'Rugs',
    office: 'Office',
    sale: 'Sale',
    trade: 'Trade',
    livingFurniture: 'Living Room Furniture',
    collectionBody: 'Layered silhouettes, softened textures, and storage pieces designed for rooms that feel composed without feeling staged.',
    all: 'All',
    material: 'Material',
    new: 'New',
    color: 'Color',
    moreFilters: 'More Filters',
    wood: 'Wood',
    fabric: 'Fabric',
    leather: 'Leather',
    metal: 'Metal',
    cream: 'Cream',
    brown: 'Brown',
    black: 'Black',
    items: '{count} Items',
    sortBy: 'Sort by',
    featured: 'Featured',
    priceLow: 'Price: Low to High',
    priceHigh: 'Price: High to Low',
    nameAZ: 'Name A-Z',
    noProductsTitle: 'No pieces found',
    noProductsBody: 'Try a different filter to continue browsing the collection.',
    from: 'From',
    inStock: 'In Stock',
    sku: 'SKU',
    baseFinish: 'Base Finish',
    topFinish: 'Top Finish',
    size: 'Size',
    addToBag: 'Add to Bag',
    saveToList: 'Save to List',
    saved: 'Saved',
    dimensions: 'Dimensions',
    specifications: 'Specifications',
    details: 'Details',
    dimensionsText: 'Available in 71" and 84" widths. Designed with generous internal storage and a low architectural profile.',
    specificationsText: 'Crafted with engineered wood veneer, precision hardware, and natural stone top options. Assembly not required.',
    detailsText: 'Finished by hand in small batches. Natural variation in wood grain, marble veining, and tone is expected.',
    completeLook: 'Complete the Look',
    search: 'Search',
    searchPlaceholder: 'Search furniture, lighting, rugs...',
    searchEmpty: 'Start typing to search the collection.',
    searchNoResults: 'No matching pieces found.',
    cart: 'Bag',
    cartEmpty: 'Your bag is empty.',
    subtotal: 'Subtotal',
    checkout: 'Checkout',
    remove: 'Remove',
    qty: 'Qty',
    addedToBag: 'Added to bag',
    addedBody: '{name} is now in your bag.',
    removedFromBag: 'Removed from bag',
    savedToast: 'Saved to list',
    unsavedToast: 'Removed from list',
    newsletter: 'Newsletter',
    newsletterBody: 'Subscribe for curated inspiration and early access.',
    emailPlaceholder: 'Email Address',
    join: 'Join',
    newsletterThanks: 'Thank you for subscribing.',
    company: 'Company',
    customerCare: 'Customer Care',
    clientServices: 'Client Services',
    brandFooter: 'Crafting timeless sanctuaries with quiet materials and enduring forms.',
    ourStory: 'Our Story',
    sustainability: 'Sustainability',
    contact: 'Contact Us',
    tradeProgram: 'Trade Program',
    showrooms: 'Showrooms',
    shipping: 'Shipping & Returns',
    privacy: 'Privacy Policy',
    journal: 'Journal',
    copyright: '© 2024 Lumina Home. Crafted for the Discerning Eye.',
    close: 'Close',
    openSearch: 'Open search',
    openCart: 'Open bag',
    openMenu: 'Open menu',
    zoomImage: 'Zoom image',
    viewProduct: 'View product',
    finishEbony: 'Ebony',
    finishWalnut: 'Walnut',
    finishOak: 'Oak',
    finishCharcoal: 'Charcoal',
    finishCarrara: 'Carrara',
    finishMarquina: 'Marquina'
  },
  fr: {
    skip: 'Aller au contenu principal',
    brand: 'Lumina Maison',
    heroKicker: 'La vente du Memorial Day',
    heroTitle: 'Tout. Est. En. Solde.',
    shopNow: 'Magasiner',
    introKicker: 'Pièces sélectionnées',
    introTitle: 'Des meubles intemporels pour un intérieur calme et raffiné.',
    introBody: 'Découvrez des meubles, luminaires, tapis et objets décoratifs pensés pour apporter chaleur, équilibre et sérénité à chaque pièce.',
    browseCategories: 'Explorer les catégories',
    hoverBrowse: 'Survolez pour parcourir',
    tapBrowse: 'Touchez pour magasiner',
    products: 'produits',
    storyKicker: 'La sélection Lumina',
    storyTitle: 'Une façon plus paisible de meubler votre maison.',
    storyBody: 'Chaque pièce est choisie pour la richesse de ses matériaux, sa forme architecturale et l’atmosphère qu’elle apporte aux gestes du quotidien.',
    storyCta: 'Découvrir la marque',
    home: 'Accueil',
    backToProducts: 'Retour aux produits',
    living: 'Salon',
    dining: 'Salle à manger',
    bedroom: 'Chambre',
    bath: 'Salle de bain',
    lighting: 'Luminaires',
    outdoor: 'Extérieur',
    decor: 'Décor',
    artMirrors: 'Art et miroirs',
    rugs: 'Tapis',
    office: 'Bureau',
    sale: 'Soldes',
    trade: 'Professionnels',
    livingFurniture: 'Meubles de salon',
    collectionBody: 'Des silhouettes superposées, des textures douces et des rangements conçus pour créer des espaces composés sans être figés.',
    all: 'Tout',
    material: 'Matériau',
    new: 'Nouveautés',
    color: 'Couleur',
    moreFilters: 'Plus de filtres',
    wood: 'Bois',
    fabric: 'Tissu',
    leather: 'Cuir',
    metal: 'Métal',
    cream: 'Crème',
    brown: 'Brun',
    black: 'Noir',
    items: '{count} articles',
    sortBy: 'Trier par',
    featured: 'En vedette',
    priceLow: 'Prix : croissant',
    priceHigh: 'Prix : décroissant',
    nameAZ: 'Nom A-Z',
    noProductsTitle: 'Aucune pièce trouvée',
    noProductsBody: 'Essayez un autre filtre pour poursuivre votre exploration.',
    from: 'À partir de',
    inStock: 'En stock',
    sku: 'UGS',
    baseFinish: 'Fini de base',
    topFinish: 'Fini du dessus',
    size: 'Taille',
    addToBag: 'Ajouter au panier',
    saveToList: 'Enregistrer',
    saved: 'Enregistré',
    dimensions: 'Dimensions',
    specifications: 'Caractéristiques',
    details: 'Détails',
    dimensionsText: 'Offert en largeurs de 71 po et 84 po. Conçu avec un grand rangement intérieur et un profil architectural bas.',
    specificationsText: 'Fabriqué avec placage de bois d’ingénierie, quincaillerie de précision et options de dessus en pierre naturelle. Aucun assemblage requis.',
    detailsText: 'Fini à la main en petites séries. Les variations naturelles du grain du bois, du veinage du marbre et des tons sont normales.',
    completeLook: 'Compléter le décor',
    search: 'Recherche',
    searchPlaceholder: 'Rechercher meubles, luminaires, tapis...',
    searchEmpty: 'Commencez à taper pour chercher dans la collection.',
    searchNoResults: 'Aucune pièce correspondante trouvée.',
    cart: 'Panier',
    cartEmpty: 'Votre panier est vide.',
    subtotal: 'Sous-total',
    checkout: 'Passer à la caisse',
    remove: 'Retirer',
    qty: 'Qté',
    addedToBag: 'Ajouté au panier',
    addedBody: '{name} est maintenant dans votre panier.',
    removedFromBag: 'Retiré du panier',
    savedToast: 'Enregistré dans la liste',
    unsavedToast: 'Retiré de la liste',
    newsletter: 'Infolettre',
    newsletterBody: 'Abonnez-vous pour recevoir de l’inspiration sélectionnée et des accès anticipés.',
    emailPlaceholder: 'Adresse courriel',
    join: 'S’inscrire',
    newsletterThanks: 'Merci pour votre inscription.',
    company: 'Entreprise',
    customerCare: 'Service client',
    clientServices: 'Services client',
    brandFooter: 'Des sanctuaires intemporels façonnés par des matériaux calmes et des formes durables.',
    ourStory: 'Notre histoire',
    sustainability: 'Développement durable',
    contact: 'Nous joindre',
    tradeProgram: 'Programme professionnel',
    showrooms: 'Salles d’exposition',
    shipping: 'Livraison et retours',
    privacy: 'Politique de confidentialité',
    journal: 'Journal',
    copyright: '© 2024 Lumina Maison. Créé pour un regard exigeant.',
    close: 'Fermer',
    openSearch: 'Ouvrir la recherche',
    openCart: 'Ouvrir le panier',
    openMenu: 'Ouvrir le menu',
    zoomImage: 'Agrandir l’image',
    viewProduct: 'Voir le produit',
    finishEbony: 'Ébène',
    finishWalnut: 'Noyer',
    finishOak: 'Chêne',
    finishCharcoal: 'Charbon',
    finishCarrara: 'Carrare',
    finishMarquina: 'Marquina'
  }
};

const categories = [
  {
    "id": "outdoor",
    "key": "outdoor",
    "description": {
      "en": "Open-air pieces for patios, balconies, and garden rooms with relaxed indoor comfort.",
      "fr": "Des pièces pour patios, balcons et jardins, avec le confort détendu de l’intérieur."
    },
    "imageSet": [
      "solara-outdoor-sofa.jpg",
      "marin-teak-dining-set.jpg",
      "vale-lounge-chair.jpg",
      "garden-planter-trio.jpg"
    ],
    "count": 4
  },
  {
    "id": "living",
    "key": "living",
    "titleKey": "livingFurniture",
    "description": {
      "en": "Layered silhouettes, softened textures, and storage pieces designed for rooms that feel composed without feeling staged.",
      "fr": "Des silhouettes superposées, des textures douces et des rangements conçus pour créer des espaces composés sans être figés."
    },
    "imageSet": [
      "prod-sideboard.jpg",
      "prod-elowen-sofa.jpg",
      "prod-vera-table.jpg",
      "prod-aurelia-chair.jpg",
      "prod-milo-console.jpg"
    ],
    "count": 5
  },
  {
    "id": "dining",
    "key": "dining",
    "description": {
      "en": "Tables, seating, and storage for gathering spaces that feel warm, practical, and elevated.",
      "fr": "Tables, assises et rangements pour des espaces de repas chaleureux, pratiques et raffinés."
    },
    "imageSet": [
      "astra-dining-table.jpg",
      "luelle-chair.jpg",
      "sora-bar-cabinet.jpg",
      "celine-dining-bench.jpg"
    ],
    "count": 4
  },
  {
    "id": "bedroom",
    "key": "bedroom",
    "description": {
      "en": "Beds, storage, and soft surfaces that turn the bedroom into a calm nightly retreat.",
      "fr": "Lits, rangements et surfaces douces qui transforment la chambre en refuge apaisant."
    },
    "imageSet": [
      "nori-platform-bed.jpg",
      "arlo-nightstand.jpg",
      "selene-dresser.jpg",
      "cloud-linen-headboard.jpg"
    ],
    "count": 4
  },
  {
    "id": "bath",
    "key": "bath",
    "description": {
      "en": "Vanities, mirrors, and finishing details for spa-like bathrooms with everyday function.",
      "fr": "Meubles-lavabos, miroirs et détails de finition pour salles de bain façon spa et usage quotidien."
    },
    "imageSet": [
      "odessa-vanity.jpg",
      "reed-towel-ladder.jpg",
      "stone-bath-stool.jpg",
      "luma-wall-mirror.jpg"
    ],
    "count": 4
  },
  {
    "id": "lighting",
    "key": "lighting",
    "description": {
      "en": "Pendants, sconces, and lamps that create a warmer mood from morning to evening.",
      "fr": "Suspensions, appliques et lampes qui créent une ambiance plus chaude du matin au soir."
    },
    "imageSet": [
      "orbital-pendant.jpg",
      "noa-floor-lamp.jpg",
      "arcus-table-lamp.jpg",
      "mica-sconce.jpg"
    ],
    "count": 4
  },
  {
    "id": "decor",
    "key": "decor",
    "description": {
      "en": "Objects, greenery, pillows, and styling layers that make a room feel finished.",
      "fr": "Objets, verdure, coussins et touches de style qui donnent à une pièce un aspect complet."
    },
    "imageSet": [
      "terra-vase-set.jpg",
      "linen-throw-pillow.jpg",
      "carved-bowl-collection.jpg",
      "willow-faux-olive-tree.jpg"
    ],
    "count": 4
  },
  {
    "id": "art-mirrors",
    "key": "artMirrors",
    "description": {
      "en": "Mirrors and wall art that add depth, contrast, and quiet focal points.",
      "fr": "Miroirs et art mural qui ajoutent profondeur, contraste et points focaux discrets."
    },
    "imageSet": [
      "ori-arch-mirror.jpg",
      "desert-abstract-print.jpg",
      "gallery-wall-set.jpg",
      "kira-round-mirror.jpg"
    ],
    "count": 4
  },
  {
    "id": "rugs",
    "key": "rugs",
    "description": {
      "en": "Natural, wool, and performance rugs that ground each room with texture.",
      "fr": "Tapis naturels, en laine et performance qui ancrent chaque pièce par la texture."
    },
    "imageSet": [
      "mesa-jute-rug.jpg",
      "arden-wool-rug.jpg",
      "strata-indoor-outdoor-rug.jpg",
      "lune-runner.jpg"
    ],
    "count": 4
  },
  {
    "id": "office",
    "key": "office",
    "description": {
      "en": "Desks, seating, storage, and task lighting for focused work in a home setting.",
      "fr": "Bureaux, assises, rangements et éclairage de travail pour se concentrer à la maison."
    },
    "imageSet": [
      "rowan-writing-desk.jpg",
      "idris-office-chair.jpg",
      "cove-bookshelf.jpg",
      "mina-desk-lamp.jpg"
    ],
    "count": 4
  },
  {
    "id": "sale",
    "key": "sale",
    "description": {
      "en": "Selected pieces with limited-time pricing across furniture, lighting, rugs, and decor.",
      "fr": "Pièces sélectionnées à prix limité parmi les meubles, luminaires, tapis et décor."
    },
    "imageSet": [
      "prod-sideboard.jpg",
      "prod-aurelia-chair.jpg",
      "solara-outdoor-sofa.jpg",
      "garden-planter-trio.jpg",
      "sora-bar-cabinet.jpg"
    ],
    "count": 13
  },
  {
    "id": "trade",
    "key": "trade",
    "description": {
      "en": "Project support, sample kits, and curated packages for designers and commercial spaces.",
      "fr": "Soutien de projet, trousses d’échantillons et forfaits sélectionnés pour designers et espaces commerciaux."
    },
    "imageSet": [
      "material-sample-kit.jpg",
      "design-consultation.jpg",
      "contract-lounge-package.jpg",
      "hospitality-dining-package.jpg"
    ],
    "count": 4
  }
];

const collectionTiles = [
  { id: 'new-arrivals', en: 'Living Room New Arrivals', fr: 'Nouveautés salon', img: 'living-arrivals.jpg' },
  { id: 'sectionals', en: 'Sectional Sofas', fr: 'Canapés sectionnels', img: 'sectional-sofas.jpg' },
  { id: 'sofas', en: 'Sofas', fr: 'Canapés', img: 'leather-sofa.jpg' },
  { id: 'chairs', en: 'Chairs', fr: 'Chaises', img: 'woven-chair.jpg' },
  { id: 'tables', en: 'Coffee Tables', fr: 'Tables basses', img: 'prod-vera-table.jpg' }
];

const products = [
  {
    "slug": "finnley-sideboard",
    "name": {
      "en": "Finnley Sideboard",
      "fr": "Buffet Finnley"
    },
    "category": {
      "en": "Case Goods",
      "fr": "Meubles de rangement"
    },
    "room": "living",
    "type": "storage",
    "material": "wood",
    "color": "black",
    "isNew": false,
    "price": 2520,
    "oldPrice": 3600,
    "from": false,
    "sku": "40FIN71ECRKT",
    "image": "prod-sideboard.jpg",
    "swatches": [
      "#171514",
      "#5a422a",
      "#b19a7b",
      "#5a5b5a"
    ],
    "finishes": [
      "finishEbony",
      "finishWalnut",
      "finishOak",
      "finishCharcoal"
    ],
    "topFinishes": [
      "finishCarrara",
      "finishMarquina"
    ],
    "sizes": [
      "71\"",
      "84\""
    ],
    "description": {
      "en": "A low architectural sideboard with warm storage and stone-top restraint.",
      "fr": "Un buffet bas et architectural avec rangement chaleureux et dessus en pierre élégant."
    },
    "detailCopy": {
      "en": {
        "dimensions": "Designed for living settings with balanced proportions and a residential scale that feels generous without overwhelming the room.",
        "specifications": "Crafted with durable joinery, hand-finished surfaces, and materials selected for daily use. Minor tone and texture variation is expected.",
        "details": "Finnley Sideboard brings a calm, layered look to the collection and pairs naturally with warm woods, textured textiles, and simple architectural forms."
      },
      "fr": {
        "dimensions": "Conçu pour les espaces living, avec des proportions équilibrées et une échelle résidentielle généreuse sans alourdir la pièce.",
        "specifications": "Fabriqué avec des assemblages durables, des surfaces finies à la main et des matériaux choisis pour l’usage quotidien. De légères variations de ton et de texture sont normales.",
        "details": "Finnley Sideboard apporte un aspect calme et superposé à la collection et s’accorde naturellement avec les bois chauds, les textiles texturés et les formes architecturales simples."
      }
    },
    "gallery": [
      "prod-sideboard.jpg",
      "prod-elowen-sofa.jpg",
      "prod-vera-table.jpg",
      "prod-aurelia-chair.jpg"
    ]
  },
  {
    "slug": "elowen-sofa",
    "name": {
      "en": "Elowen Sofa",
      "fr": "Canapé Elowen"
    },
    "category": {
      "en": "Seating",
      "fr": "Assises"
    },
    "room": "living",
    "type": "sofas",
    "material": "fabric",
    "color": "cream",
    "isNew": true,
    "price": 4200,
    "oldPrice": null,
    "from": true,
    "sku": "ELW96LNN",
    "image": "prod-elowen-sofa.jpg",
    "swatches": [
      "#f1eee9",
      "#d8d2ca"
    ],
    "finishes": [
      "finishOak",
      "finishWalnut"
    ],
    "topFinishes": [
      "finishCarrara"
    ],
    "sizes": [
      "84\"",
      "96\""
    ],
    "description": {
      "en": "A generous sofa with relaxed linen texture and a softened profile.",
      "fr": "Un canapé généreux au toucher lin détendu et au profil adouci."
    },
    "detailCopy": {
      "en": {
        "dimensions": "Designed for living settings with balanced proportions and a residential scale that feels generous without overwhelming the room.",
        "specifications": "Crafted with durable joinery, hand-finished surfaces, and materials selected for daily use. Minor tone and texture variation is expected.",
        "details": "Elowen Sofa brings a calm, layered look to the collection and pairs naturally with warm woods, textured textiles, and simple architectural forms."
      },
      "fr": {
        "dimensions": "Conçu pour les espaces living, avec des proportions équilibrées et une échelle résidentielle généreuse sans alourdir la pièce.",
        "specifications": "Fabriqué avec des assemblages durables, des surfaces finies à la main et des matériaux choisis pour l’usage quotidien. De légères variations de ton et de texture sont normales.",
        "details": "Elowen Sofa apporte un aspect calme et superposé à la collection et s’accorde naturellement avec les bois chauds, les textiles texturés et les formes architecturales simples."
      }
    },
    "gallery": [
      "prod-elowen-sofa.jpg",
      "prod-sideboard.jpg",
      "prod-vera-table.jpg",
      "prod-aurelia-chair.jpg"
    ]
  },
  {
    "slug": "vera-coffee-table",
    "name": {
      "en": "Vera Coffee Table",
      "fr": "Table basse Vera"
    },
    "category": {
      "en": "Tables",
      "fr": "Tables"
    },
    "room": "living",
    "type": "tables",
    "material": "wood",
    "color": "brown",
    "isNew": false,
    "price": 1850,
    "oldPrice": null,
    "from": false,
    "sku": "VERA48WAL",
    "image": "prod-vera-table.jpg",
    "swatches": [
      "#7b4d2d",
      "#b19a7b"
    ],
    "finishes": [
      "finishWalnut",
      "finishOak"
    ],
    "topFinishes": [
      "finishCarrara"
    ],
    "sizes": [
      "48\"",
      "56\""
    ],
    "description": {
      "en": "A sculptural walnut coffee table with a rounded square silhouette.",
      "fr": "Une table basse sculpturale en noyer à silhouette carrée arrondie."
    },
    "detailCopy": {
      "en": {
        "dimensions": "Designed for living settings with balanced proportions and a residential scale that feels generous without overwhelming the room.",
        "specifications": "Crafted with durable joinery, hand-finished surfaces, and materials selected for daily use. Minor tone and texture variation is expected.",
        "details": "Vera Coffee Table brings a calm, layered look to the collection and pairs naturally with warm woods, textured textiles, and simple architectural forms."
      },
      "fr": {
        "dimensions": "Conçu pour les espaces living, avec des proportions équilibrées et une échelle résidentielle généreuse sans alourdir la pièce.",
        "specifications": "Fabriqué avec des assemblages durables, des surfaces finies à la main et des matériaux choisis pour l’usage quotidien. De légères variations de ton et de texture sont normales.",
        "details": "Vera Coffee Table apporte un aspect calme et superposé à la collection et s’accorde naturellement avec les bois chauds, les textiles texturés et les formes architecturales simples."
      }
    },
    "gallery": [
      "prod-vera-table.jpg",
      "prod-sideboard.jpg",
      "prod-elowen-sofa.jpg",
      "prod-aurelia-chair.jpg"
    ]
  },
  {
    "slug": "aurelia-occasional-chair",
    "name": {
      "en": "Aurelia Occasional Chair",
      "fr": "Fauteuil d’appoint Aurelia"
    },
    "category": {
      "en": "Seating",
      "fr": "Assises"
    },
    "room": "living",
    "type": "chairs",
    "material": "fabric",
    "color": "cream",
    "isNew": true,
    "price": 950,
    "oldPrice": 1200,
    "from": false,
    "sku": "AUR32CRM",
    "image": "prod-aurelia-chair.jpg",
    "swatches": [
      "#efebe3",
      "#2e322f"
    ],
    "finishes": [
      "finishOak",
      "finishCharcoal"
    ],
    "topFinishes": [
      "finishCarrara"
    ],
    "sizes": [
      "32\"",
      "36\""
    ],
    "description": {
      "en": "A rounded lounge chair that balances comfort and visual quiet.",
      "fr": "Un fauteuil aux formes arrondies, entre confort et calme visuel."
    },
    "detailCopy": {
      "en": {
        "dimensions": "Designed for living settings with balanced proportions and a residential scale that feels generous without overwhelming the room.",
        "specifications": "Crafted with durable joinery, hand-finished surfaces, and materials selected for daily use. Minor tone and texture variation is expected.",
        "details": "Aurelia Occasional Chair brings a calm, layered look to the collection and pairs naturally with warm woods, textured textiles, and simple architectural forms."
      },
      "fr": {
        "dimensions": "Conçu pour les espaces living, avec des proportions équilibrées et une échelle résidentielle généreuse sans alourdir la pièce.",
        "specifications": "Fabriqué avec des assemblages durables, des surfaces finies à la main et des matériaux choisis pour l’usage quotidien. De légères variations de ton et de texture sont normales.",
        "details": "Aurelia Occasional Chair apporte un aspect calme et superposé à la collection et s’accorde naturellement avec les bois chauds, les textiles texturés et les formes architecturales simples."
      }
    },
    "gallery": [
      "prod-aurelia-chair.jpg",
      "prod-sideboard.jpg",
      "prod-elowen-sofa.jpg",
      "prod-vera-table.jpg"
    ]
  },
  {
    "slug": "milo-media-console",
    "name": {
      "en": "Milo Media Console",
      "fr": "Console média Milo"
    },
    "category": {
      "en": "Storage",
      "fr": "Rangement"
    },
    "room": "living",
    "type": "storage",
    "material": "wood",
    "color": "cream",
    "isNew": false,
    "price": 2100,
    "oldPrice": null,
    "from": false,
    "sku": "MILO72OAK",
    "image": "prod-milo-console.jpg",
    "swatches": [
      "#f2e9dc",
      "#c6b38d"
    ],
    "finishes": [
      "finishOak",
      "finishWalnut"
    ],
    "topFinishes": [
      "finishCarrara"
    ],
    "sizes": [
      "72\"",
      "84\""
    ],
    "description": {
      "en": "A woven-front console that hides technology behind a natural tactile surface.",
      "fr": "Une console à façade tressée qui dissimule la technologie derrière une surface naturelle et tactile."
    },
    "detailCopy": {
      "en": {
        "dimensions": "Designed for living settings with balanced proportions and a residential scale that feels generous without overwhelming the room.",
        "specifications": "Crafted with durable joinery, hand-finished surfaces, and materials selected for daily use. Minor tone and texture variation is expected.",
        "details": "Milo Media Console brings a calm, layered look to the collection and pairs naturally with warm woods, textured textiles, and simple architectural forms."
      },
      "fr": {
        "dimensions": "Conçu pour les espaces living, avec des proportions équilibrées et une échelle résidentielle généreuse sans alourdir la pièce.",
        "specifications": "Fabriqué avec des assemblages durables, des surfaces finies à la main et des matériaux choisis pour l’usage quotidien. De légères variations de ton et de texture sont normales.",
        "details": "Milo Media Console apporte un aspect calme et superposé à la collection et s’accorde naturellement avec les bois chauds, les textiles texturés et les formes architecturales simples."
      }
    },
    "gallery": [
      "prod-milo-console.jpg",
      "prod-sideboard.jpg",
      "prod-elowen-sofa.jpg",
      "prod-vera-table.jpg"
    ]
  },
  {
    "slug": "solara-outdoor-sofa",
    "name": {
      "en": "Solara Outdoor Sofa",
      "fr": "Canapé extérieur Solara"
    },
    "category": {
      "en": "Outdoor Seating",
      "fr": "Assises extérieures"
    },
    "room": "outdoor",
    "type": "sofas",
    "material": "fabric",
    "color": "cream",
    "isNew": true,
    "price": 2890,
    "oldPrice": 3400,
    "from": false,
    "sku": "SOL84SAN",
    "image": "solara-outdoor-sofa.jpg",
    "swatches": [
      "#ded7c8",
      "#8a613e"
    ],
    "finishes": [
      "finishOak",
      "finishWalnut"
    ],
    "topFinishes": [
      "finishCarrara"
    ],
    "sizes": [
      "84\"",
      "96\""
    ],
    "description": {
      "en": "A low outdoor sofa with quick-dry cushions and a warm teak-inspired frame.",
      "fr": "Un canapé extérieur bas avec coussins à séchage rapide et structure au ton teck chaleureux."
    },
    "detailCopy": {
      "en": {
        "dimensions": "Designed for outdoor settings with balanced proportions and a residential scale that feels generous without overwhelming the room.",
        "specifications": "Crafted with durable joinery, hand-finished surfaces, and materials selected for daily use. Minor tone and texture variation is expected.",
        "details": "Solara Outdoor Sofa brings a calm, layered look to the collection and pairs naturally with warm woods, textured textiles, and simple architectural forms."
      },
      "fr": {
        "dimensions": "Conçu pour les espaces outdoor, avec des proportions équilibrées et une échelle résidentielle généreuse sans alourdir la pièce.",
        "specifications": "Fabriqué avec des assemblages durables, des surfaces finies à la main et des matériaux choisis pour l’usage quotidien. De légères variations de ton et de texture sont normales.",
        "details": "Solara Outdoor Sofa apporte un aspect calme et superposé à la collection et s’accorde naturellement avec les bois chauds, les textiles texturés et les formes architecturales simples."
      }
    },
    "gallery": [
      "solara-outdoor-sofa.jpg",
      "marin-teak-dining-set.jpg",
      "vale-lounge-chair.jpg",
      "garden-planter-trio.jpg"
    ]
  },
  {
    "slug": "marin-teak-dining-set",
    "name": {
      "en": "Marin Teak Dining Set",
      "fr": "Ensemble repas Marin en teck"
    },
    "category": {
      "en": "Outdoor Dining",
      "fr": "Repas extérieur"
    },
    "room": "outdoor",
    "type": "tables",
    "material": "wood",
    "color": "brown",
    "isNew": false,
    "price": 3650,
    "oldPrice": null,
    "from": false,
    "sku": "MAR7TEK",
    "image": "marin-teak-dining-set.jpg",
    "swatches": [
      "#b88758",
      "#d6d0c0"
    ],
    "finishes": [
      "finishOak",
      "finishWalnut"
    ],
    "topFinishes": [
      "finishCarrara"
    ],
    "sizes": [
      "Seats 6",
      "Seats 8"
    ],
    "description": {
      "en": "An outdoor dining set made for slow meals, shaded patios, and relaxed entertaining.",
      "fr": "Un ensemble repas extérieur pour les repas lents, les patios ombragés et les réceptions détendues."
    },
    "detailCopy": {
      "en": {
        "dimensions": "Designed for outdoor settings with balanced proportions and a residential scale that feels generous without overwhelming the room.",
        "specifications": "Crafted with durable joinery, hand-finished surfaces, and materials selected for daily use. Minor tone and texture variation is expected.",
        "details": "Marin Teak Dining Set brings a calm, layered look to the collection and pairs naturally with warm woods, textured textiles, and simple architectural forms."
      },
      "fr": {
        "dimensions": "Conçu pour les espaces outdoor, avec des proportions équilibrées et une échelle résidentielle généreuse sans alourdir la pièce.",
        "specifications": "Fabriqué avec des assemblages durables, des surfaces finies à la main et des matériaux choisis pour l’usage quotidien. De légères variations de ton et de texture sont normales.",
        "details": "Marin Teak Dining Set apporte un aspect calme et superposé à la collection et s’accorde naturellement avec les bois chauds, les textiles texturés et les formes architecturales simples."
      }
    },
    "gallery": [
      "marin-teak-dining-set.jpg",
      "solara-outdoor-sofa.jpg",
      "vale-lounge-chair.jpg",
      "garden-planter-trio.jpg"
    ]
  },
  {
    "slug": "vale-lounge-chair",
    "name": {
      "en": "Vale Lounge Chair",
      "fr": "Chaise longue Vale"
    },
    "category": {
      "en": "Outdoor Seating",
      "fr": "Assises extérieures"
    },
    "room": "outdoor",
    "type": "chairs",
    "material": "fabric",
    "color": "cream",
    "isNew": false,
    "price": 1180,
    "oldPrice": null,
    "from": false,
    "sku": "VALECHR",
    "image": "vale-lounge-chair.jpg",
    "swatches": [
      "#ded7c8",
      "#8a613e"
    ],
    "finishes": [
      "finishOak",
      "finishCharcoal"
    ],
    "topFinishes": [
      "finishCarrara"
    ],
    "sizes": [
      "Standard"
    ],
    "description": {
      "en": "A deep patio lounge chair with woven texture and tailored weather-ready cushions.",
      "fr": "Une chaise longue de patio profonde avec texture tressée et coussins adaptés aux intempéries."
    },
    "detailCopy": {
      "en": {
        "dimensions": "Designed for outdoor settings with balanced proportions and a residential scale that feels generous without overwhelming the room.",
        "specifications": "Crafted with durable joinery, hand-finished surfaces, and materials selected for daily use. Minor tone and texture variation is expected.",
        "details": "Vale Lounge Chair brings a calm, layered look to the collection and pairs naturally with warm woods, textured textiles, and simple architectural forms."
      },
      "fr": {
        "dimensions": "Conçu pour les espaces outdoor, avec des proportions équilibrées et une échelle résidentielle généreuse sans alourdir la pièce.",
        "specifications": "Fabriqué avec des assemblages durables, des surfaces finies à la main et des matériaux choisis pour l’usage quotidien. De légères variations de ton et de texture sont normales.",
        "details": "Vale Lounge Chair apporte un aspect calme et superposé à la collection et s’accorde naturellement avec les bois chauds, les textiles texturés et les formes architecturales simples."
      }
    },
    "gallery": [
      "vale-lounge-chair.jpg",
      "solara-outdoor-sofa.jpg",
      "marin-teak-dining-set.jpg",
      "garden-planter-trio.jpg"
    ]
  },
  {
    "slug": "garden-planter-trio",
    "name": {
      "en": "Garden Planter Trio",
      "fr": "Trio de jardinières Garden"
    },
    "category": {
      "en": "Outdoor Decor",
      "fr": "Décor extérieur"
    },
    "room": "outdoor",
    "type": "decor",
    "material": "metal",
    "color": "brown",
    "isNew": true,
    "price": 420,
    "oldPrice": 520,
    "from": false,
    "sku": "PLNTR03",
    "image": "garden-planter-trio.jpg",
    "swatches": [
      "#c3b8a7",
      "#58714f"
    ],
    "finishes": [
      "finishCharcoal",
      "finishOak"
    ],
    "topFinishes": [
      "finishCarrara"
    ],
    "sizes": [
      "Small",
      "Medium",
      "Large"
    ],
    "description": {
      "en": "Three sculptural planters for adding greenery to balconies, patios, and entryways.",
      "fr": "Trois jardinières sculpturales pour ajouter de la verdure aux balcons, patios et entrées."
    },
    "detailCopy": {
      "en": {
        "dimensions": "Designed for outdoor settings with balanced proportions and a residential scale that feels generous without overwhelming the room.",
        "specifications": "Crafted with durable joinery, hand-finished surfaces, and materials selected for daily use. Minor tone and texture variation is expected.",
        "details": "Garden Planter Trio brings a calm, layered look to the collection and pairs naturally with warm woods, textured textiles, and simple architectural forms."
      },
      "fr": {
        "dimensions": "Conçu pour les espaces outdoor, avec des proportions équilibrées et une échelle résidentielle généreuse sans alourdir la pièce.",
        "specifications": "Fabriqué avec des assemblages durables, des surfaces finies à la main et des matériaux choisis pour l’usage quotidien. De légères variations de ton et de texture sont normales.",
        "details": "Garden Planter Trio apporte un aspect calme et superposé à la collection et s’accorde naturellement avec les bois chauds, les textiles texturés et les formes architecturales simples."
      }
    },
    "gallery": [
      "garden-planter-trio.jpg",
      "solara-outdoor-sofa.jpg",
      "marin-teak-dining-set.jpg",
      "vale-lounge-chair.jpg"
    ]
  },
  {
    "slug": "astra-dining-table",
    "name": {
      "en": "Astra Dining Table",
      "fr": "Table à manger Astra"
    },
    "category": {
      "en": "Dining Tables",
      "fr": "Tables à manger"
    },
    "room": "dining",
    "type": "tables",
    "material": "wood",
    "color": "black",
    "isNew": false,
    "price": 4800,
    "oldPrice": null,
    "from": false,
    "sku": "ASTRA90EBN",
    "image": "astra-dining-table.jpg",
    "swatches": [
      "#191817",
      "#6a4a32"
    ],
    "finishes": [
      "finishEbony",
      "finishWalnut"
    ],
    "topFinishes": [
      "finishCarrara"
    ],
    "sizes": [
      "84\"",
      "96\""
    ],
    "description": {
      "en": "A grounding dining table with a monolithic base and deep ebony finish.",
      "fr": "Une table à manger ancrée, avec base monolithique et fini ébène profond."
    },
    "detailCopy": {
      "en": {
        "dimensions": "Designed for dining settings with balanced proportions and a residential scale that feels generous without overwhelming the room.",
        "specifications": "Crafted with durable joinery, hand-finished surfaces, and materials selected for daily use. Minor tone and texture variation is expected.",
        "details": "Astra Dining Table brings a calm, layered look to the collection and pairs naturally with warm woods, textured textiles, and simple architectural forms."
      },
      "fr": {
        "dimensions": "Conçu pour les espaces dining, avec des proportions équilibrées et une échelle résidentielle généreuse sans alourdir la pièce.",
        "specifications": "Fabriqué avec des assemblages durables, des surfaces finies à la main et des matériaux choisis pour l’usage quotidien. De légères variations de ton et de texture sont normales.",
        "details": "Astra Dining Table apporte un aspect calme et superposé à la collection et s’accorde naturellement avec les bois chauds, les textiles texturés et les formes architecturales simples."
      }
    },
    "gallery": [
      "astra-dining-table.jpg",
      "luelle-chair.jpg",
      "sora-bar-cabinet.jpg",
      "celine-dining-bench.jpg"
    ]
  },
  {
    "slug": "luelle-dining-chair",
    "name": {
      "en": "Luelle Dining Chair",
      "fr": "Chaise de salle à manger Luelle"
    },
    "category": {
      "en": "Dining Chairs",
      "fr": "Chaises de salle à manger"
    },
    "room": "dining",
    "type": "chairs",
    "material": "fabric",
    "color": "cream",
    "isNew": true,
    "price": 850,
    "oldPrice": null,
    "from": false,
    "sku": "LUECRM",
    "image": "luelle-chair.jpg",
    "swatches": [
      "#f4f0e8",
      "#b69a78"
    ],
    "finishes": [
      "finishOak",
      "finishWalnut"
    ],
    "topFinishes": [
      "finishCarrara"
    ],
    "sizes": [
      "Standard",
      "Counter"
    ],
    "description": {
      "en": "A plush dining chair with a curved back and tactile upholstery.",
      "fr": "Une chaise de salle à manger moelleuse avec dossier courbé et tissu texturé."
    },
    "detailCopy": {
      "en": {
        "dimensions": "Designed for dining settings with balanced proportions and a residential scale that feels generous without overwhelming the room.",
        "specifications": "Crafted with durable joinery, hand-finished surfaces, and materials selected for daily use. Minor tone and texture variation is expected.",
        "details": "Luelle Dining Chair brings a calm, layered look to the collection and pairs naturally with warm woods, textured textiles, and simple architectural forms."
      },
      "fr": {
        "dimensions": "Conçu pour les espaces dining, avec des proportions équilibrées et une échelle résidentielle généreuse sans alourdir la pièce.",
        "specifications": "Fabriqué avec des assemblages durables, des surfaces finies à la main et des matériaux choisis pour l’usage quotidien. De légères variations de ton et de texture sont normales.",
        "details": "Luelle Dining Chair apporte un aspect calme et superposé à la collection et s’accorde naturellement avec les bois chauds, les textiles texturés et les formes architecturales simples."
      }
    },
    "gallery": [
      "luelle-chair.jpg",
      "astra-dining-table.jpg",
      "sora-bar-cabinet.jpg",
      "celine-dining-bench.jpg"
    ]
  },
  {
    "slug": "sora-bar-cabinet",
    "name": {
      "en": "Sora Bar Cabinet",
      "fr": "Armoire-bar Sora"
    },
    "category": {
      "en": "Storage",
      "fr": "Rangement"
    },
    "room": "dining",
    "type": "storage",
    "material": "wood",
    "color": "brown",
    "isNew": false,
    "price": 2650,
    "oldPrice": 3100,
    "from": false,
    "sku": "SORA72WAL",
    "image": "sora-bar-cabinet.jpg",
    "swatches": [
      "#7b5636",
      "#1f211e"
    ],
    "finishes": [
      "finishWalnut",
      "finishEbony"
    ],
    "topFinishes": [
      "finishCarrara"
    ],
    "sizes": [
      "72\""
    ],
    "description": {
      "en": "A tall bar cabinet with warm interior shelving for glassware and serving pieces.",
      "fr": "Une armoire-bar haute avec rayonnage intérieur chaleureux pour verres et pièces de service."
    },
    "detailCopy": {
      "en": {
        "dimensions": "Designed for dining settings with balanced proportions and a residential scale that feels generous without overwhelming the room.",
        "specifications": "Crafted with durable joinery, hand-finished surfaces, and materials selected for daily use. Minor tone and texture variation is expected.",
        "details": "Sora Bar Cabinet brings a calm, layered look to the collection and pairs naturally with warm woods, textured textiles, and simple architectural forms."
      },
      "fr": {
        "dimensions": "Conçu pour les espaces dining, avec des proportions équilibrées et une échelle résidentielle généreuse sans alourdir la pièce.",
        "specifications": "Fabriqué avec des assemblages durables, des surfaces finies à la main et des matériaux choisis pour l’usage quotidien. De légères variations de ton et de texture sont normales.",
        "details": "Sora Bar Cabinet apporte un aspect calme et superposé à la collection et s’accorde naturellement avec les bois chauds, les textiles texturés et les formes architecturales simples."
      }
    },
    "gallery": [
      "sora-bar-cabinet.jpg",
      "astra-dining-table.jpg",
      "luelle-chair.jpg",
      "celine-dining-bench.jpg"
    ]
  },
  {
    "slug": "celine-dining-bench",
    "name": {
      "en": "Celine Dining Bench",
      "fr": "Banc de salle à manger Celine"
    },
    "category": {
      "en": "Benches",
      "fr": "Bancs"
    },
    "room": "dining",
    "type": "benches",
    "material": "fabric",
    "color": "cream",
    "isNew": true,
    "price": 760,
    "oldPrice": null,
    "from": false,
    "sku": "CELN60",
    "image": "celine-dining-bench.jpg",
    "swatches": [
      "#e6ded1",
      "#8c6042"
    ],
    "finishes": [
      "finishOak",
      "finishWalnut"
    ],
    "topFinishes": [
      "finishCarrara"
    ],
    "sizes": [
      "60\"",
      "72\""
    ],
    "description": {
      "en": "A softly upholstered bench that brings casual comfort to dining rooms.",
      "fr": "Un banc rembourré doux qui apporte un confort décontracté à la salle à manger."
    },
    "detailCopy": {
      "en": {
        "dimensions": "Designed for dining settings with balanced proportions and a residential scale that feels generous without overwhelming the room.",
        "specifications": "Crafted with durable joinery, hand-finished surfaces, and materials selected for daily use. Minor tone and texture variation is expected.",
        "details": "Celine Dining Bench brings a calm, layered look to the collection and pairs naturally with warm woods, textured textiles, and simple architectural forms."
      },
      "fr": {
        "dimensions": "Conçu pour les espaces dining, avec des proportions équilibrées et une échelle résidentielle généreuse sans alourdir la pièce.",
        "specifications": "Fabriqué avec des assemblages durables, des surfaces finies à la main et des matériaux choisis pour l’usage quotidien. De légères variations de ton et de texture sont normales.",
        "details": "Celine Dining Bench apporte un aspect calme et superposé à la collection et s’accorde naturellement avec les bois chauds, les textiles texturés et les formes architecturales simples."
      }
    },
    "gallery": [
      "celine-dining-bench.jpg",
      "astra-dining-table.jpg",
      "luelle-chair.jpg",
      "sora-bar-cabinet.jpg"
    ]
  },
  {
    "slug": "nori-platform-bed",
    "name": {
      "en": "Nori Platform Bed",
      "fr": "Lit plateforme Nori"
    },
    "category": {
      "en": "Beds",
      "fr": "Lits"
    },
    "room": "bedroom",
    "type": "beds",
    "material": "fabric",
    "color": "cream",
    "isNew": true,
    "price": 3280,
    "oldPrice": null,
    "from": false,
    "sku": "NORI-QN",
    "image": "nori-platform-bed.jpg",
    "swatches": [
      "#e8dfd2",
      "#7b5636"
    ],
    "finishes": [
      "finishOak",
      "finishWalnut"
    ],
    "topFinishes": [
      "finishCarrara"
    ],
    "sizes": [
      "Queen",
      "King"
    ],
    "description": {
      "en": "A quiet platform bed with an upholstered headboard and low wood plinth.",
      "fr": "Un lit plateforme calme avec tête de lit rembourrée et socle bas en bois."
    },
    "detailCopy": {
      "en": {
        "dimensions": "Designed for bedroom settings with balanced proportions and a residential scale that feels generous without overwhelming the room.",
        "specifications": "Crafted with durable joinery, hand-finished surfaces, and materials selected for daily use. Minor tone and texture variation is expected.",
        "details": "Nori Platform Bed brings a calm, layered look to the collection and pairs naturally with warm woods, textured textiles, and simple architectural forms."
      },
      "fr": {
        "dimensions": "Conçu pour les espaces bedroom, avec des proportions équilibrées et une échelle résidentielle généreuse sans alourdir la pièce.",
        "specifications": "Fabriqué avec des assemblages durables, des surfaces finies à la main et des matériaux choisis pour l’usage quotidien. De légères variations de ton et de texture sont normales.",
        "details": "Nori Platform Bed apporte un aspect calme et superposé à la collection et s’accorde naturellement avec les bois chauds, les textiles texturés et les formes architecturales simples."
      }
    },
    "gallery": [
      "nori-platform-bed.jpg",
      "arlo-nightstand.jpg",
      "selene-dresser.jpg",
      "cloud-linen-headboard.jpg"
    ]
  },
  {
    "slug": "arlo-nightstand",
    "name": {
      "en": "Arlo Nightstand",
      "fr": "Table de nuit Arlo"
    },
    "category": {
      "en": "Nightstands",
      "fr": "Tables de nuit"
    },
    "room": "bedroom",
    "type": "storage",
    "material": "wood",
    "color": "brown",
    "isNew": false,
    "price": 780,
    "oldPrice": 920,
    "from": false,
    "sku": "ARLO24",
    "image": "arlo-nightstand.jpg",
    "swatches": [
      "#8b613c",
      "#d7d1c8"
    ],
    "finishes": [
      "finishOak",
      "finishWalnut"
    ],
    "topFinishes": [
      "finishCarrara"
    ],
    "sizes": [
      "24\""
    ],
    "description": {
      "en": "A compact nightstand with soft-close storage and a beveled stone-inspired top.",
      "fr": "Une table de nuit compacte avec rangement à fermeture douce et dessus inspiré de la pierre biseautée."
    },
    "detailCopy": {
      "en": {
        "dimensions": "Designed for bedroom settings with balanced proportions and a residential scale that feels generous without overwhelming the room.",
        "specifications": "Crafted with durable joinery, hand-finished surfaces, and materials selected for daily use. Minor tone and texture variation is expected.",
        "details": "Arlo Nightstand brings a calm, layered look to the collection and pairs naturally with warm woods, textured textiles, and simple architectural forms."
      },
      "fr": {
        "dimensions": "Conçu pour les espaces bedroom, avec des proportions équilibrées et une échelle résidentielle généreuse sans alourdir la pièce.",
        "specifications": "Fabriqué avec des assemblages durables, des surfaces finies à la main et des matériaux choisis pour l’usage quotidien. De légères variations de ton et de texture sont normales.",
        "details": "Arlo Nightstand apporte un aspect calme et superposé à la collection et s’accorde naturellement avec les bois chauds, les textiles texturés et les formes architecturales simples."
      }
    },
    "gallery": [
      "arlo-nightstand.jpg",
      "nori-platform-bed.jpg",
      "selene-dresser.jpg",
      "cloud-linen-headboard.jpg"
    ]
  },
  {
    "slug": "selene-dresser",
    "name": {
      "en": "Selene Dresser",
      "fr": "Commode Selene"
    },
    "category": {
      "en": "Dressers",
      "fr": "Commodes"
    },
    "room": "bedroom",
    "type": "storage",
    "material": "wood",
    "color": "cream",
    "isNew": false,
    "price": 2380,
    "oldPrice": null,
    "from": false,
    "sku": "SELN64OAK",
    "image": "selene-dresser.jpg",
    "swatches": [
      "#c6b38d",
      "#f2e9dc"
    ],
    "finishes": [
      "finishOak",
      "finishWalnut"
    ],
    "topFinishes": [
      "finishCarrara"
    ],
    "sizes": [
      "64\""
    ],
    "description": {
      "en": "A six-drawer dresser with rounded edges and calm oak tonality.",
      "fr": "Une commode à six tiroirs avec bords arrondis et tonalité chêne apaisante."
    },
    "detailCopy": {
      "en": {
        "dimensions": "Designed for bedroom settings with balanced proportions and a residential scale that feels generous without overwhelming the room.",
        "specifications": "Crafted with durable joinery, hand-finished surfaces, and materials selected for daily use. Minor tone and texture variation is expected.",
        "details": "Selene Dresser brings a calm, layered look to the collection and pairs naturally with warm woods, textured textiles, and simple architectural forms."
      },
      "fr": {
        "dimensions": "Conçu pour les espaces bedroom, avec des proportions équilibrées et une échelle résidentielle généreuse sans alourdir la pièce.",
        "specifications": "Fabriqué avec des assemblages durables, des surfaces finies à la main et des matériaux choisis pour l’usage quotidien. De légères variations de ton et de texture sont normales.",
        "details": "Selene Dresser apporte un aspect calme et superposé à la collection et s’accorde naturellement avec les bois chauds, les textiles texturés et les formes architecturales simples."
      }
    },
    "gallery": [
      "selene-dresser.jpg",
      "nori-platform-bed.jpg",
      "arlo-nightstand.jpg",
      "cloud-linen-headboard.jpg"
    ]
  },
  {
    "slug": "cloud-linen-headboard",
    "name": {
      "en": "Cloud Linen Headboard",
      "fr": "Tête de lit Cloud en lin"
    },
    "category": {
      "en": "Headboards",
      "fr": "Têtes de lit"
    },
    "room": "bedroom",
    "type": "beds",
    "material": "fabric",
    "color": "cream",
    "isNew": true,
    "price": 1240,
    "oldPrice": null,
    "from": false,
    "sku": "CLOUDKG",
    "image": "cloud-linen-headboard.jpg",
    "swatches": [
      "#ded7ce",
      "#c7baaa"
    ],
    "finishes": [
      "finishOak"
    ],
    "topFinishes": [
      "finishCarrara"
    ],
    "sizes": [
      "Queen",
      "King"
    ],
    "description": {
      "en": "A tall linen headboard that creates a soft hotel-like backdrop.",
      "fr": "Une grande tête de lit en lin qui crée un fond doux digne d’un hôtel."
    },
    "detailCopy": {
      "en": {
        "dimensions": "Designed for bedroom settings with balanced proportions and a residential scale that feels generous without overwhelming the room.",
        "specifications": "Crafted with durable joinery, hand-finished surfaces, and materials selected for daily use. Minor tone and texture variation is expected.",
        "details": "Cloud Linen Headboard brings a calm, layered look to the collection and pairs naturally with warm woods, textured textiles, and simple architectural forms."
      },
      "fr": {
        "dimensions": "Conçu pour les espaces bedroom, avec des proportions équilibrées et une échelle résidentielle généreuse sans alourdir la pièce.",
        "specifications": "Fabriqué avec des assemblages durables, des surfaces finies à la main et des matériaux choisis pour l’usage quotidien. De légères variations de ton et de texture sont normales.",
        "details": "Cloud Linen Headboard apporte un aspect calme et superposé à la collection et s’accorde naturellement avec les bois chauds, les textiles texturés et les formes architecturales simples."
      }
    },
    "gallery": [
      "cloud-linen-headboard.jpg",
      "nori-platform-bed.jpg",
      "arlo-nightstand.jpg",
      "selene-dresser.jpg"
    ]
  },
  {
    "slug": "odessa-vanity",
    "name": {
      "en": "Odessa Vanity",
      "fr": "Meuble-lavabo Odessa"
    },
    "category": {
      "en": "Vanities",
      "fr": "Meubles-lavabos"
    },
    "room": "bath",
    "type": "storage",
    "material": "wood",
    "color": "cream",
    "isNew": true,
    "price": 2200,
    "oldPrice": null,
    "from": false,
    "sku": "ODESSA48",
    "image": "odessa-vanity.jpg",
    "swatches": [
      "#d7d1c8",
      "#b58b61"
    ],
    "finishes": [
      "finishOak",
      "finishWalnut"
    ],
    "topFinishes": [
      "finishCarrara"
    ],
    "sizes": [
      "48\"",
      "60\""
    ],
    "description": {
      "en": "A refined vanity with generous drawers and a softly rounded mirror pairing.",
      "fr": "Un meuble-lavabo raffiné avec grands tiroirs et miroir aux contours doux."
    },
    "detailCopy": {
      "en": {
        "dimensions": "Designed for bath settings with balanced proportions and a residential scale that feels generous without overwhelming the room.",
        "specifications": "Crafted with durable joinery, hand-finished surfaces, and materials selected for daily use. Minor tone and texture variation is expected.",
        "details": "Odessa Vanity brings a calm, layered look to the collection and pairs naturally with warm woods, textured textiles, and simple architectural forms."
      },
      "fr": {
        "dimensions": "Conçu pour les espaces bath, avec des proportions équilibrées et une échelle résidentielle généreuse sans alourdir la pièce.",
        "specifications": "Fabriqué avec des assemblages durables, des surfaces finies à la main et des matériaux choisis pour l’usage quotidien. De légères variations de ton et de texture sont normales.",
        "details": "Odessa Vanity apporte un aspect calme et superposé à la collection et s’accorde naturellement avec les bois chauds, les textiles texturés et les formes architecturales simples."
      }
    },
    "gallery": [
      "odessa-vanity.jpg",
      "reed-towel-ladder.jpg",
      "stone-bath-stool.jpg",
      "luma-wall-mirror.jpg"
    ]
  },
  {
    "slug": "reed-towel-ladder",
    "name": {
      "en": "Reed Towel Ladder",
      "fr": "Échelle à serviettes Reed"
    },
    "category": {
      "en": "Bath Accessories",
      "fr": "Accessoires de bain"
    },
    "room": "bath",
    "type": "storage",
    "material": "wood",
    "color": "brown",
    "isNew": false,
    "price": 390,
    "oldPrice": 460,
    "from": false,
    "sku": "REEDLAD",
    "image": "reed-towel-ladder.jpg",
    "swatches": [
      "#8b613c",
      "#e5ded2"
    ],
    "finishes": [
      "finishOak",
      "finishWalnut"
    ],
    "topFinishes": [
      "finishCarrara"
    ],
    "sizes": [
      "One size"
    ],
    "description": {
      "en": "A slim ladder rack for towels, textiles, and spa-like layering.",
      "fr": "Une échelle mince pour serviettes, textiles et superpositions façon spa."
    },
    "detailCopy": {
      "en": {
        "dimensions": "Designed for bath settings with balanced proportions and a residential scale that feels generous without overwhelming the room.",
        "specifications": "Crafted with durable joinery, hand-finished surfaces, and materials selected for daily use. Minor tone and texture variation is expected.",
        "details": "Reed Towel Ladder brings a calm, layered look to the collection and pairs naturally with warm woods, textured textiles, and simple architectural forms."
      },
      "fr": {
        "dimensions": "Conçu pour les espaces bath, avec des proportions équilibrées et une échelle résidentielle généreuse sans alourdir la pièce.",
        "specifications": "Fabriqué avec des assemblages durables, des surfaces finies à la main et des matériaux choisis pour l’usage quotidien. De légères variations de ton et de texture sont normales.",
        "details": "Reed Towel Ladder apporte un aspect calme et superposé à la collection et s’accorde naturellement avec les bois chauds, les textiles texturés et les formes architecturales simples."
      }
    },
    "gallery": [
      "reed-towel-ladder.jpg",
      "odessa-vanity.jpg",
      "stone-bath-stool.jpg",
      "luma-wall-mirror.jpg"
    ]
  },
  {
    "slug": "stone-bath-stool",
    "name": {
      "en": "Stone Bath Stool",
      "fr": "Tabouret de bain Stone"
    },
    "category": {
      "en": "Stools",
      "fr": "Tabourets"
    },
    "room": "bath",
    "type": "stools",
    "material": "wood",
    "color": "cream",
    "isNew": false,
    "price": 520,
    "oldPrice": null,
    "from": false,
    "sku": "STNSTL",
    "image": "stone-bath-stool.jpg",
    "swatches": [
      "#d6d0c8",
      "#b58b61"
    ],
    "finishes": [
      "finishOak",
      "finishCharcoal"
    ],
    "topFinishes": [
      "finishCarrara"
    ],
    "sizes": [
      "16\""
    ],
    "description": {
      "en": "A sculptural stool for towels, candles, or a quiet bath-side moment.",
      "fr": "Un tabouret sculptural pour serviettes, bougies ou un moment calme près du bain."
    },
    "detailCopy": {
      "en": {
        "dimensions": "Designed for bath settings with balanced proportions and a residential scale that feels generous without overwhelming the room.",
        "specifications": "Crafted with durable joinery, hand-finished surfaces, and materials selected for daily use. Minor tone and texture variation is expected.",
        "details": "Stone Bath Stool brings a calm, layered look to the collection and pairs naturally with warm woods, textured textiles, and simple architectural forms."
      },
      "fr": {
        "dimensions": "Conçu pour les espaces bath, avec des proportions équilibrées et une échelle résidentielle généreuse sans alourdir la pièce.",
        "specifications": "Fabriqué avec des assemblages durables, des surfaces finies à la main et des matériaux choisis pour l’usage quotidien. De légères variations de ton et de texture sont normales.",
        "details": "Stone Bath Stool apporte un aspect calme et superposé à la collection et s’accorde naturellement avec les bois chauds, les textiles texturés et les formes architecturales simples."
      }
    },
    "gallery": [
      "stone-bath-stool.jpg",
      "odessa-vanity.jpg",
      "reed-towel-ladder.jpg",
      "luma-wall-mirror.jpg"
    ]
  },
  {
    "slug": "luma-wall-mirror",
    "name": {
      "en": "Luma Wall Mirror",
      "fr": "Miroir mural Luma"
    },
    "category": {
      "en": "Mirrors",
      "fr": "Miroirs"
    },
    "room": "bath",
    "type": "decor",
    "material": "metal",
    "color": "brown",
    "isNew": true,
    "price": 690,
    "oldPrice": null,
    "from": false,
    "sku": "LUMA30",
    "image": "luma-wall-mirror.jpg",
    "swatches": [
      "#ccb99e",
      "#dfe5e0"
    ],
    "finishes": [
      "finishWalnut",
      "finishCharcoal"
    ],
    "topFinishes": [
      "finishCarrara"
    ],
    "sizes": [
      "30\"",
      "36\""
    ],
    "description": {
      "en": "A slim rounded mirror that brings lightness above vanities and consoles.",
      "fr": "Un miroir arrondi mince qui apporte de la légèreté au-dessus des lavabos et consoles."
    },
    "detailCopy": {
      "en": {
        "dimensions": "Designed for bath settings with balanced proportions and a residential scale that feels generous without overwhelming the room.",
        "specifications": "Crafted with durable joinery, hand-finished surfaces, and materials selected for daily use. Minor tone and texture variation is expected.",
        "details": "Luma Wall Mirror brings a calm, layered look to the collection and pairs naturally with warm woods, textured textiles, and simple architectural forms."
      },
      "fr": {
        "dimensions": "Conçu pour les espaces bath, avec des proportions équilibrées et une échelle résidentielle généreuse sans alourdir la pièce.",
        "specifications": "Fabriqué avec des assemblages durables, des surfaces finies à la main et des matériaux choisis pour l’usage quotidien. De légères variations de ton et de texture sont normales.",
        "details": "Luma Wall Mirror apporte un aspect calme et superposé à la collection et s’accorde naturellement avec les bois chauds, les textiles texturés et les formes architecturales simples."
      }
    },
    "gallery": [
      "luma-wall-mirror.jpg",
      "odessa-vanity.jpg",
      "reed-towel-ladder.jpg",
      "stone-bath-stool.jpg"
    ]
  },
  {
    "slug": "orbital-pendant",
    "name": {
      "en": "Orbital Pendant",
      "fr": "Suspension Orbital"
    },
    "category": {
      "en": "Pendants",
      "fr": "Suspensions"
    },
    "room": "lighting",
    "type": "pendants",
    "material": "metal",
    "color": "brown",
    "isNew": true,
    "price": 1200,
    "oldPrice": null,
    "from": false,
    "sku": "ORB8GLD",
    "image": "orbital-pendant.jpg",
    "swatches": [
      "#b88648",
      "#f4e7d4"
    ],
    "finishes": [
      "finishWalnut",
      "finishCharcoal"
    ],
    "topFinishes": [
      "finishCarrara"
    ],
    "sizes": [
      "8 light",
      "10 light"
    ],
    "description": {
      "en": "A celestial pendant with glowing glass spheres and a warm metallic frame.",
      "fr": "Une suspension céleste avec sphères lumineuses en verre et structure métallique chaude."
    },
    "detailCopy": {
      "en": {
        "dimensions": "Designed for lighting settings with balanced proportions and a residential scale that feels generous without overwhelming the room.",
        "specifications": "Crafted with durable joinery, hand-finished surfaces, and materials selected for daily use. Minor tone and texture variation is expected.",
        "details": "Orbital Pendant brings a calm, layered look to the collection and pairs naturally with warm woods, textured textiles, and simple architectural forms."
      },
      "fr": {
        "dimensions": "Conçu pour les espaces lighting, avec des proportions équilibrées et une échelle résidentielle généreuse sans alourdir la pièce.",
        "specifications": "Fabriqué avec des assemblages durables, des surfaces finies à la main et des matériaux choisis pour l’usage quotidien. De légères variations de ton et de texture sont normales.",
        "details": "Orbital Pendant apporte un aspect calme et superposé à la collection et s’accorde naturellement avec les bois chauds, les textiles texturés et les formes architecturales simples."
      }
    },
    "gallery": [
      "orbital-pendant.jpg",
      "noa-floor-lamp.jpg",
      "arcus-table-lamp.jpg",
      "mica-sconce.jpg"
    ]
  },
  {
    "slug": "noa-floor-lamp",
    "name": {
      "en": "Noa Floor Lamp",
      "fr": "Lampadaire Noa"
    },
    "category": {
      "en": "Floor Lamps",
      "fr": "Lampadaires"
    },
    "room": "lighting",
    "type": "lamps",
    "material": "metal",
    "color": "black",
    "isNew": false,
    "price": 760,
    "oldPrice": 880,
    "from": false,
    "sku": "NOAFLR",
    "image": "noa-floor-lamp.jpg",
    "swatches": [
      "#1f211e",
      "#f3e6d0"
    ],
    "finishes": [
      "finishCharcoal",
      "finishWalnut"
    ],
    "topFinishes": [
      "finishCarrara"
    ],
    "sizes": [
      "62\""
    ],
    "description": {
      "en": "A tall floor lamp with a linen shade and a lean bronze-black stem.",
      "fr": "Un grand lampadaire avec abat-jour en lin et tige bronze-noir élancée."
    },
    "detailCopy": {
      "en": {
        "dimensions": "Designed for lighting settings with balanced proportions and a residential scale that feels generous without overwhelming the room.",
        "specifications": "Crafted with durable joinery, hand-finished surfaces, and materials selected for daily use. Minor tone and texture variation is expected.",
        "details": "Noa Floor Lamp brings a calm, layered look to the collection and pairs naturally with warm woods, textured textiles, and simple architectural forms."
      },
      "fr": {
        "dimensions": "Conçu pour les espaces lighting, avec des proportions équilibrées et une échelle résidentielle généreuse sans alourdir la pièce.",
        "specifications": "Fabriqué avec des assemblages durables, des surfaces finies à la main et des matériaux choisis pour l’usage quotidien. De légères variations de ton et de texture sont normales.",
        "details": "Noa Floor Lamp apporte un aspect calme et superposé à la collection et s’accorde naturellement avec les bois chauds, les textiles texturés et les formes architecturales simples."
      }
    },
    "gallery": [
      "noa-floor-lamp.jpg",
      "orbital-pendant.jpg",
      "arcus-table-lamp.jpg",
      "mica-sconce.jpg"
    ]
  },
  {
    "slug": "arcus-table-lamp",
    "name": {
      "en": "Arcus Table Lamp",
      "fr": "Lampe de table Arcus"
    },
    "category": {
      "en": "Table Lamps",
      "fr": "Lampes de table"
    },
    "room": "lighting",
    "type": "lamps",
    "material": "metal",
    "color": "brown",
    "isNew": false,
    "price": 420,
    "oldPrice": null,
    "from": false,
    "sku": "ARCUS18",
    "image": "arcus-table-lamp.jpg",
    "swatches": [
      "#b88648",
      "#f4e7d4"
    ],
    "finishes": [
      "finishWalnut",
      "finishOak"
    ],
    "topFinishes": [
      "finishCarrara"
    ],
    "sizes": [
      "18\""
    ],
    "description": {
      "en": "A compact table lamp with a warm sculptural base and soft glow.",
      "fr": "Une lampe de table compacte avec base sculpturale chaude et lueur douce."
    },
    "detailCopy": {
      "en": {
        "dimensions": "Designed for lighting settings with balanced proportions and a residential scale that feels generous without overwhelming the room.",
        "specifications": "Crafted with durable joinery, hand-finished surfaces, and materials selected for daily use. Minor tone and texture variation is expected.",
        "details": "Arcus Table Lamp brings a calm, layered look to the collection and pairs naturally with warm woods, textured textiles, and simple architectural forms."
      },
      "fr": {
        "dimensions": "Conçu pour les espaces lighting, avec des proportions équilibrées et une échelle résidentielle généreuse sans alourdir la pièce.",
        "specifications": "Fabriqué avec des assemblages durables, des surfaces finies à la main et des matériaux choisis pour l’usage quotidien. De légères variations de ton et de texture sont normales.",
        "details": "Arcus Table Lamp apporte un aspect calme et superposé à la collection et s’accorde naturellement avec les bois chauds, les textiles texturés et les formes architecturales simples."
      }
    },
    "gallery": [
      "arcus-table-lamp.jpg",
      "orbital-pendant.jpg",
      "noa-floor-lamp.jpg",
      "mica-sconce.jpg"
    ]
  },
  {
    "slug": "mica-sconce",
    "name": {
      "en": "Mica Sconce",
      "fr": "Applique Mica"
    },
    "category": {
      "en": "Sconces",
      "fr": "Appliques"
    },
    "room": "lighting",
    "type": "sconces",
    "material": "metal",
    "color": "cream",
    "isNew": true,
    "price": 340,
    "oldPrice": null,
    "from": false,
    "sku": "MICA2",
    "image": "mica-sconce.jpg",
    "swatches": [
      "#f4e7d4",
      "#a4825b"
    ],
    "finishes": [
      "finishOak",
      "finishCharcoal"
    ],
    "topFinishes": [
      "finishCarrara"
    ],
    "sizes": [
      "Single",
      "Pair"
    ],
    "description": {
      "en": "A pairable wall sconce for hallways, bedsides, and quiet corners.",
      "fr": "Une applique à associer en paire pour couloirs, chevets et coins calmes."
    },
    "detailCopy": {
      "en": {
        "dimensions": "Designed for lighting settings with balanced proportions and a residential scale that feels generous without overwhelming the room.",
        "specifications": "Crafted with durable joinery, hand-finished surfaces, and materials selected for daily use. Minor tone and texture variation is expected.",
        "details": "Mica Sconce brings a calm, layered look to the collection and pairs naturally with warm woods, textured textiles, and simple architectural forms."
      },
      "fr": {
        "dimensions": "Conçu pour les espaces lighting, avec des proportions équilibrées et une échelle résidentielle généreuse sans alourdir la pièce.",
        "specifications": "Fabriqué avec des assemblages durables, des surfaces finies à la main et des matériaux choisis pour l’usage quotidien. De légères variations de ton et de texture sont normales.",
        "details": "Mica Sconce apporte un aspect calme et superposé à la collection et s’accorde naturellement avec les bois chauds, les textiles texturés et les formes architecturales simples."
      }
    },
    "gallery": [
      "mica-sconce.jpg",
      "orbital-pendant.jpg",
      "noa-floor-lamp.jpg",
      "arcus-table-lamp.jpg"
    ]
  },
  {
    "slug": "terra-vase-set",
    "name": {
      "en": "Terra Vase Set",
      "fr": "Ensemble de vases Terra"
    },
    "category": {
      "en": "Vases",
      "fr": "Vases"
    },
    "room": "decor",
    "type": "decor",
    "material": "ceramic",
    "color": "brown",
    "isNew": true,
    "price": 260,
    "oldPrice": null,
    "from": false,
    "sku": "TERRA3",
    "image": "terra-vase-set.jpg",
    "swatches": [
      "#a78866",
      "#6a5642",
      "#d6cec0"
    ],
    "finishes": [
      "finishWalnut",
      "finishOak"
    ],
    "topFinishes": [
      "finishCarrara"
    ],
    "sizes": [
      "Set of 3"
    ],
    "description": {
      "en": "Three hand-finished vessels for branches, stems, or sculptural styling.",
      "fr": "Trois récipients finis à la main pour branches, tiges ou mise en scène sculpturale."
    },
    "detailCopy": {
      "en": {
        "dimensions": "Designed for decor settings with balanced proportions and a residential scale that feels generous without overwhelming the room.",
        "specifications": "Crafted with durable joinery, hand-finished surfaces, and materials selected for daily use. Minor tone and texture variation is expected.",
        "details": "Terra Vase Set brings a calm, layered look to the collection and pairs naturally with warm woods, textured textiles, and simple architectural forms."
      },
      "fr": {
        "dimensions": "Conçu pour les espaces decor, avec des proportions équilibrées et une échelle résidentielle généreuse sans alourdir la pièce.",
        "specifications": "Fabriqué avec des assemblages durables, des surfaces finies à la main et des matériaux choisis pour l’usage quotidien. De légères variations de ton et de texture sont normales.",
        "details": "Terra Vase Set apporte un aspect calme et superposé à la collection et s’accorde naturellement avec les bois chauds, les textiles texturés et les formes architecturales simples."
      }
    },
    "gallery": [
      "terra-vase-set.jpg",
      "linen-throw-pillow.jpg",
      "carved-bowl-collection.jpg",
      "willow-faux-olive-tree.jpg"
    ]
  },
  {
    "slug": "linen-throw-pillow",
    "name": {
      "en": "Linen Throw Pillow",
      "fr": "Coussin décoratif en lin"
    },
    "category": {
      "en": "Pillows",
      "fr": "Coussins"
    },
    "room": "decor",
    "type": "decor",
    "material": "fabric",
    "color": "cream",
    "isNew": false,
    "price": 145,
    "oldPrice": 180,
    "from": false,
    "sku": "LINPIL",
    "image": "linen-throw-pillow.jpg",
    "swatches": [
      "#ded3c7",
      "#a67251",
      "#efe9dd"
    ],
    "finishes": [
      "finishOak"
    ],
    "topFinishes": [
      "finishCarrara"
    ],
    "sizes": [
      "20\"",
      "24\""
    ],
    "description": {
      "en": "A layered linen pillow for soft contrast on sofas, beds, and reading chairs.",
      "fr": "Un coussin en lin superposé pour créer un contraste doux sur canapés, lits et fauteuils de lecture."
    },
    "detailCopy": {
      "en": {
        "dimensions": "Designed for decor settings with balanced proportions and a residential scale that feels generous without overwhelming the room.",
        "specifications": "Crafted with durable joinery, hand-finished surfaces, and materials selected for daily use. Minor tone and texture variation is expected.",
        "details": "Linen Throw Pillow brings a calm, layered look to the collection and pairs naturally with warm woods, textured textiles, and simple architectural forms."
      },
      "fr": {
        "dimensions": "Conçu pour les espaces decor, avec des proportions équilibrées et une échelle résidentielle généreuse sans alourdir la pièce.",
        "specifications": "Fabriqué avec des assemblages durables, des surfaces finies à la main et des matériaux choisis pour l’usage quotidien. De légères variations de ton et de texture sont normales.",
        "details": "Linen Throw Pillow apporte un aspect calme et superposé à la collection et s’accorde naturellement avec les bois chauds, les textiles texturés et les formes architecturales simples."
      }
    },
    "gallery": [
      "linen-throw-pillow.jpg",
      "terra-vase-set.jpg",
      "carved-bowl-collection.jpg",
      "willow-faux-olive-tree.jpg"
    ]
  },
  {
    "slug": "carved-bowl-collection",
    "name": {
      "en": "Carved Bowl Collection",
      "fr": "Collection de bols sculptés"
    },
    "category": {
      "en": "Decorative Objects",
      "fr": "Objets décoratifs"
    },
    "room": "decor",
    "type": "decor",
    "material": "wood",
    "color": "brown",
    "isNew": false,
    "price": 180,
    "oldPrice": null,
    "from": false,
    "sku": "BOWLSET",
    "image": "carved-bowl-collection.jpg",
    "swatches": [
      "#8b613c",
      "#cdb996"
    ],
    "finishes": [
      "finishWalnut",
      "finishOak"
    ],
    "topFinishes": [
      "finishCarrara"
    ],
    "sizes": [
      "Set of 2",
      "Set of 4"
    ],
    "description": {
      "en": "A small collection of hand-shaped bowls for tables, shelves, and consoles.",
      "fr": "Une petite collection de bols façonnés à la main pour tables, étagères et consoles."
    },
    "detailCopy": {
      "en": {
        "dimensions": "Designed for decor settings with balanced proportions and a residential scale that feels generous without overwhelming the room.",
        "specifications": "Crafted with durable joinery, hand-finished surfaces, and materials selected for daily use. Minor tone and texture variation is expected.",
        "details": "Carved Bowl Collection brings a calm, layered look to the collection and pairs naturally with warm woods, textured textiles, and simple architectural forms."
      },
      "fr": {
        "dimensions": "Conçu pour les espaces decor, avec des proportions équilibrées et une échelle résidentielle généreuse sans alourdir la pièce.",
        "specifications": "Fabriqué avec des assemblages durables, des surfaces finies à la main et des matériaux choisis pour l’usage quotidien. De légères variations de ton et de texture sont normales.",
        "details": "Carved Bowl Collection apporte un aspect calme et superposé à la collection et s’accorde naturellement avec les bois chauds, les textiles texturés et les formes architecturales simples."
      }
    },
    "gallery": [
      "carved-bowl-collection.jpg",
      "terra-vase-set.jpg",
      "linen-throw-pillow.jpg",
      "willow-faux-olive-tree.jpg"
    ]
  },
  {
    "slug": "willow-faux-olive-tree",
    "name": {
      "en": "Willow Faux Olive Tree",
      "fr": "Olivier artificiel Willow"
    },
    "category": {
      "en": "Greenery",
      "fr": "Verdure"
    },
    "room": "decor",
    "type": "decor",
    "material": "fabric",
    "color": "cream",
    "isNew": true,
    "price": 520,
    "oldPrice": null,
    "from": false,
    "sku": "OLIVE84",
    "image": "willow-faux-olive-tree.jpg",
    "swatches": [
      "#637655",
      "#2d2a25"
    ],
    "finishes": [
      "finishCharcoal"
    ],
    "topFinishes": [
      "finishCarrara"
    ],
    "sizes": [
      "72\"",
      "84\""
    ],
    "description": {
      "en": "A tall olive tree silhouette for adding greenery without maintenance.",
      "fr": "Une grande silhouette d’olivier pour ajouter de la verdure sans entretien."
    },
    "detailCopy": {
      "en": {
        "dimensions": "Designed for decor settings with balanced proportions and a residential scale that feels generous without overwhelming the room.",
        "specifications": "Crafted with durable joinery, hand-finished surfaces, and materials selected for daily use. Minor tone and texture variation is expected.",
        "details": "Willow Faux Olive Tree brings a calm, layered look to the collection and pairs naturally with warm woods, textured textiles, and simple architectural forms."
      },
      "fr": {
        "dimensions": "Conçu pour les espaces decor, avec des proportions équilibrées et une échelle résidentielle généreuse sans alourdir la pièce.",
        "specifications": "Fabriqué avec des assemblages durables, des surfaces finies à la main et des matériaux choisis pour l’usage quotidien. De légères variations de ton et de texture sont normales.",
        "details": "Willow Faux Olive Tree apporte un aspect calme et superposé à la collection et s’accorde naturellement avec les bois chauds, les textiles texturés et les formes architecturales simples."
      }
    },
    "gallery": [
      "willow-faux-olive-tree.jpg",
      "terra-vase-set.jpg",
      "linen-throw-pillow.jpg",
      "carved-bowl-collection.jpg"
    ]
  },
  {
    "slug": "ori-arch-mirror",
    "name": {
      "en": "Ori Arch Mirror",
      "fr": "Miroir arche Ori"
    },
    "category": {
      "en": "Mirrors",
      "fr": "Miroirs"
    },
    "room": "art-mirrors",
    "type": "decor",
    "material": "metal",
    "color": "brown",
    "isNew": true,
    "price": 980,
    "oldPrice": null,
    "from": false,
    "sku": "ORIARCH",
    "image": "ori-arch-mirror.jpg",
    "swatches": [
      "#ccb99e",
      "#dfe5e0"
    ],
    "finishes": [
      "finishWalnut",
      "finishCharcoal"
    ],
    "topFinishes": [
      "finishCarrara"
    ],
    "sizes": [
      "36\" x 72\""
    ],
    "description": {
      "en": "A tall arched mirror that opens narrow rooms with a quiet reflective frame.",
      "fr": "Un grand miroir arqué qui ouvre les pièces étroites avec un cadre réfléchissant discret."
    },
    "detailCopy": {
      "en": {
        "dimensions": "Designed for art and mirror settings with balanced proportions and a residential scale that feels generous without overwhelming the room.",
        "specifications": "Crafted with durable joinery, hand-finished surfaces, and materials selected for daily use. Minor tone and texture variation is expected.",
        "details": "Ori Arch Mirror brings a calm, layered look to the collection and pairs naturally with warm woods, textured textiles, and simple architectural forms."
      },
      "fr": {
        "dimensions": "Conçu pour les espaces art and mirror, avec des proportions équilibrées et une échelle résidentielle généreuse sans alourdir la pièce.",
        "specifications": "Fabriqué avec des assemblages durables, des surfaces finies à la main et des matériaux choisis pour l’usage quotidien. De légères variations de ton et de texture sont normales.",
        "details": "Ori Arch Mirror apporte un aspect calme et superposé à la collection et s’accorde naturellement avec les bois chauds, les textiles texturés et les formes architecturales simples."
      }
    },
    "gallery": [
      "ori-arch-mirror.jpg",
      "desert-abstract-print.jpg",
      "gallery-wall-set.jpg",
      "kira-round-mirror.jpg"
    ]
  },
  {
    "slug": "desert-abstract-print",
    "name": {
      "en": "Desert Abstract Print",
      "fr": "Impression abstraite Desert"
    },
    "category": {
      "en": "Wall Art",
      "fr": "Art mural"
    },
    "room": "art-mirrors",
    "type": "decor",
    "material": "fabric",
    "color": "brown",
    "isNew": false,
    "price": 640,
    "oldPrice": 790,
    "from": false,
    "sku": "DSRT40",
    "image": "desert-abstract-print.jpg",
    "swatches": [
      "#b98a5c",
      "#4b3a2d"
    ],
    "finishes": [
      "finishCharcoal"
    ],
    "topFinishes": [
      "finishCarrara"
    ],
    "sizes": [
      "40\" x 50\""
    ],
    "description": {
      "en": "A large neutral abstract print with layered desert tones and a thin black frame.",
      "fr": "Une grande impression abstraite neutre avec tons désertiques superposés et cadre noir mince."
    },
    "detailCopy": {
      "en": {
        "dimensions": "Designed for art and mirror settings with balanced proportions and a residential scale that feels generous without overwhelming the room.",
        "specifications": "Crafted with durable joinery, hand-finished surfaces, and materials selected for daily use. Minor tone and texture variation is expected.",
        "details": "Desert Abstract Print brings a calm, layered look to the collection and pairs naturally with warm woods, textured textiles, and simple architectural forms."
      },
      "fr": {
        "dimensions": "Conçu pour les espaces art and mirror, avec des proportions équilibrées et une échelle résidentielle généreuse sans alourdir la pièce.",
        "specifications": "Fabriqué avec des assemblages durables, des surfaces finies à la main et des matériaux choisis pour l’usage quotidien. De légères variations de ton et de texture sont normales.",
        "details": "Desert Abstract Print apporte un aspect calme et superposé à la collection et s’accorde naturellement avec les bois chauds, les textiles texturés et les formes architecturales simples."
      }
    },
    "gallery": [
      "desert-abstract-print.jpg",
      "ori-arch-mirror.jpg",
      "gallery-wall-set.jpg",
      "kira-round-mirror.jpg"
    ]
  },
  {
    "slug": "gallery-wall-set",
    "name": {
      "en": "Gallery Wall Set",
      "fr": "Ensemble galerie murale"
    },
    "category": {
      "en": "Wall Art",
      "fr": "Art mural"
    },
    "room": "art-mirrors",
    "type": "decor",
    "material": "fabric",
    "color": "cream",
    "isNew": false,
    "price": 1120,
    "oldPrice": null,
    "from": false,
    "sku": "GALL6",
    "image": "gallery-wall-set.jpg",
    "swatches": [
      "#efe7dc",
      "#2d2a25"
    ],
    "finishes": [
      "finishOak",
      "finishCharcoal"
    ],
    "topFinishes": [
      "finishCarrara"
    ],
    "sizes": [
      "Set of 6"
    ],
    "description": {
      "en": "A six-piece gallery set curated in soft earth tones and simple frames.",
      "fr": "Un ensemble galerie de six pièces en tons terre doux et cadres simples."
    },
    "detailCopy": {
      "en": {
        "dimensions": "Designed for art and mirror settings with balanced proportions and a residential scale that feels generous without overwhelming the room.",
        "specifications": "Crafted with durable joinery, hand-finished surfaces, and materials selected for daily use. Minor tone and texture variation is expected.",
        "details": "Gallery Wall Set brings a calm, layered look to the collection and pairs naturally with warm woods, textured textiles, and simple architectural forms."
      },
      "fr": {
        "dimensions": "Conçu pour les espaces art and mirror, avec des proportions équilibrées et une échelle résidentielle généreuse sans alourdir la pièce.",
        "specifications": "Fabriqué avec des assemblages durables, des surfaces finies à la main et des matériaux choisis pour l’usage quotidien. De légères variations de ton et de texture sont normales.",
        "details": "Gallery Wall Set apporte un aspect calme et superposé à la collection et s’accorde naturellement avec les bois chauds, les textiles texturés et les formes architecturales simples."
      }
    },
    "gallery": [
      "gallery-wall-set.jpg",
      "ori-arch-mirror.jpg",
      "desert-abstract-print.jpg",
      "kira-round-mirror.jpg"
    ]
  },
  {
    "slug": "kira-round-mirror",
    "name": {
      "en": "Kira Round Mirror",
      "fr": "Miroir rond Kira"
    },
    "category": {
      "en": "Mirrors",
      "fr": "Miroirs"
    },
    "room": "art-mirrors",
    "type": "decor",
    "material": "metal",
    "color": "black",
    "isNew": false,
    "price": 720,
    "oldPrice": null,
    "from": false,
    "sku": "KIRA36",
    "image": "kira-round-mirror.jpg",
    "swatches": [
      "#1f211e",
      "#dfe5e0"
    ],
    "finishes": [
      "finishCharcoal",
      "finishWalnut"
    ],
    "topFinishes": [
      "finishCarrara"
    ],
    "sizes": [
      "36\"",
      "42\""
    ],
    "description": {
      "en": "A round mirror with a dark frame that sharpens soft neutral rooms.",
      "fr": "Un miroir rond avec cadre foncé qui structure les intérieurs neutres et doux."
    },
    "detailCopy": {
      "en": {
        "dimensions": "Designed for art and mirror settings with balanced proportions and a residential scale that feels generous without overwhelming the room.",
        "specifications": "Crafted with durable joinery, hand-finished surfaces, and materials selected for daily use. Minor tone and texture variation is expected.",
        "details": "Kira Round Mirror brings a calm, layered look to the collection and pairs naturally with warm woods, textured textiles, and simple architectural forms."
      },
      "fr": {
        "dimensions": "Conçu pour les espaces art and mirror, avec des proportions équilibrées et une échelle résidentielle généreuse sans alourdir la pièce.",
        "specifications": "Fabriqué avec des assemblages durables, des surfaces finies à la main et des matériaux choisis pour l’usage quotidien. De légères variations de ton et de texture sont normales.",
        "details": "Kira Round Mirror apporte un aspect calme et superposé à la collection et s’accorde naturellement avec les bois chauds, les textiles texturés et les formes architecturales simples."
      }
    },
    "gallery": [
      "kira-round-mirror.jpg",
      "ori-arch-mirror.jpg",
      "desert-abstract-print.jpg",
      "gallery-wall-set.jpg"
    ]
  },
  {
    "slug": "mesa-jute-rug",
    "name": {
      "en": "Mesa Jute Rug",
      "fr": "Tapis Mesa en jute"
    },
    "category": {
      "en": "Area Rugs",
      "fr": "Tapis de salon"
    },
    "room": "rugs",
    "type": "rugs",
    "material": "fabric",
    "color": "brown",
    "isNew": false,
    "price": 890,
    "oldPrice": 1120,
    "from": false,
    "sku": "MESA8X10",
    "image": "mesa-jute-rug.jpg",
    "swatches": [
      "#d2bd95",
      "#b39a72"
    ],
    "finishes": [
      "finishOak"
    ],
    "topFinishes": [
      "finishCarrara"
    ],
    "sizes": [
      "8 x 10",
      "9 x 12"
    ],
    "description": {
      "en": "A natural jute rug with visible weave and grounded texture.",
      "fr": "Un tapis en jute naturel avec tissage visible et texture ancrée."
    },
    "detailCopy": {
      "en": {
        "dimensions": "Designed for rug settings with balanced proportions and a residential scale that feels generous without overwhelming the room.",
        "specifications": "Crafted with durable joinery, hand-finished surfaces, and materials selected for daily use. Minor tone and texture variation is expected.",
        "details": "Mesa Jute Rug brings a calm, layered look to the collection and pairs naturally with warm woods, textured textiles, and simple architectural forms."
      },
      "fr": {
        "dimensions": "Conçu pour les espaces rug, avec des proportions équilibrées et une échelle résidentielle généreuse sans alourdir la pièce.",
        "specifications": "Fabriqué avec des assemblages durables, des surfaces finies à la main et des matériaux choisis pour l’usage quotidien. De légères variations de ton et de texture sont normales.",
        "details": "Mesa Jute Rug apporte un aspect calme et superposé à la collection et s’accorde naturellement avec les bois chauds, les textiles texturés et les formes architecturales simples."
      }
    },
    "gallery": [
      "mesa-jute-rug.jpg",
      "arden-wool-rug.jpg",
      "strata-indoor-outdoor-rug.jpg",
      "lune-runner.jpg"
    ]
  },
  {
    "slug": "arden-wool-rug",
    "name": {
      "en": "Arden Wool Rug",
      "fr": "Tapis Arden en laine"
    },
    "category": {
      "en": "Area Rugs",
      "fr": "Tapis de salon"
    },
    "room": "rugs",
    "type": "rugs",
    "material": "fabric",
    "color": "cream",
    "isNew": true,
    "price": 1290,
    "oldPrice": null,
    "from": false,
    "sku": "ARDEN9X12",
    "image": "arden-wool-rug.jpg",
    "swatches": [
      "#e5d2ac",
      "#8a7152"
    ],
    "finishes": [
      "finishOak"
    ],
    "topFinishes": [
      "finishCarrara"
    ],
    "sizes": [
      "8 x 10",
      "9 x 12"
    ],
    "description": {
      "en": "A plush wool rug with a low-contrast pattern for quiet rooms.",
      "fr": "Un tapis en laine moelleux avec motif discret pour pièces calmes."
    },
    "detailCopy": {
      "en": {
        "dimensions": "Designed for rug settings with balanced proportions and a residential scale that feels generous without overwhelming the room.",
        "specifications": "Crafted with durable joinery, hand-finished surfaces, and materials selected for daily use. Minor tone and texture variation is expected.",
        "details": "Arden Wool Rug brings a calm, layered look to the collection and pairs naturally with warm woods, textured textiles, and simple architectural forms."
      },
      "fr": {
        "dimensions": "Conçu pour les espaces rug, avec des proportions équilibrées et une échelle résidentielle généreuse sans alourdir la pièce.",
        "specifications": "Fabriqué avec des assemblages durables, des surfaces finies à la main et des matériaux choisis pour l’usage quotidien. De légères variations de ton et de texture sont normales.",
        "details": "Arden Wool Rug apporte un aspect calme et superposé à la collection et s’accorde naturellement avec les bois chauds, les textiles texturés et les formes architecturales simples."
      }
    },
    "gallery": [
      "arden-wool-rug.jpg",
      "mesa-jute-rug.jpg",
      "strata-indoor-outdoor-rug.jpg",
      "lune-runner.jpg"
    ]
  },
  {
    "slug": "strata-indoor-outdoor-rug",
    "name": {
      "en": "Strata Indoor/Outdoor Rug",
      "fr": "Tapis intérieur/extérieur Strata"
    },
    "category": {
      "en": "Performance Rugs",
      "fr": "Tapis performance"
    },
    "room": "rugs",
    "type": "rugs",
    "material": "fabric",
    "color": "black",
    "isNew": false,
    "price": 640,
    "oldPrice": null,
    "from": false,
    "sku": "STRATA8",
    "image": "strata-indoor-outdoor-rug.jpg",
    "swatches": [
      "#8a7152",
      "#1f211e"
    ],
    "finishes": [
      "finishCharcoal"
    ],
    "topFinishes": [
      "finishCarrara"
    ],
    "sizes": [
      "6 x 9",
      "8 x 10"
    ],
    "description": {
      "en": "A durable flatweave rug for patios, kitchens, and high-traffic rooms.",
      "fr": "Un tapis tissé plat durable pour patios, cuisines et pièces à fort passage."
    },
    "detailCopy": {
      "en": {
        "dimensions": "Designed for rug settings with balanced proportions and a residential scale that feels generous without overwhelming the room.",
        "specifications": "Crafted with durable joinery, hand-finished surfaces, and materials selected for daily use. Minor tone and texture variation is expected.",
        "details": "Strata Indoor/Outdoor Rug brings a calm, layered look to the collection and pairs naturally with warm woods, textured textiles, and simple architectural forms."
      },
      "fr": {
        "dimensions": "Conçu pour les espaces rug, avec des proportions équilibrées et une échelle résidentielle généreuse sans alourdir la pièce.",
        "specifications": "Fabriqué avec des assemblages durables, des surfaces finies à la main et des matériaux choisis pour l’usage quotidien. De légères variations de ton et de texture sont normales.",
        "details": "Strata Indoor/Outdoor Rug apporte un aspect calme et superposé à la collection et s’accorde naturellement avec les bois chauds, les textiles texturés et les formes architecturales simples."
      }
    },
    "gallery": [
      "strata-indoor-outdoor-rug.jpg",
      "mesa-jute-rug.jpg",
      "arden-wool-rug.jpg",
      "lune-runner.jpg"
    ]
  },
  {
    "slug": "lune-runner",
    "name": {
      "en": "Lune Runner",
      "fr": "Passage Lune"
    },
    "category": {
      "en": "Runners",
      "fr": "Passages"
    },
    "room": "rugs",
    "type": "rugs",
    "material": "fabric",
    "color": "cream",
    "isNew": true,
    "price": 480,
    "oldPrice": null,
    "from": false,
    "sku": "LUNERUN",
    "image": "lune-runner.jpg",
    "swatches": [
      "#d2bd95",
      "#e5d2ac"
    ],
    "finishes": [
      "finishOak"
    ],
    "topFinishes": [
      "finishCarrara"
    ],
    "sizes": [
      "2.5 x 8",
      "3 x 10"
    ],
    "description": {
      "en": "A narrow woven runner for hallways, bedsides, and entry paths.",
      "fr": "Un passage tissé étroit pour couloirs, chevets et entrées."
    },
    "detailCopy": {
      "en": {
        "dimensions": "Designed for rug settings with balanced proportions and a residential scale that feels generous without overwhelming the room.",
        "specifications": "Crafted with durable joinery, hand-finished surfaces, and materials selected for daily use. Minor tone and texture variation is expected.",
        "details": "Lune Runner brings a calm, layered look to the collection and pairs naturally with warm woods, textured textiles, and simple architectural forms."
      },
      "fr": {
        "dimensions": "Conçu pour les espaces rug, avec des proportions équilibrées et une échelle résidentielle généreuse sans alourdir la pièce.",
        "specifications": "Fabriqué avec des assemblages durables, des surfaces finies à la main et des matériaux choisis pour l’usage quotidien. De légères variations de ton et de texture sont normales.",
        "details": "Lune Runner apporte un aspect calme et superposé à la collection et s’accorde naturellement avec les bois chauds, les textiles texturés et les formes architecturales simples."
      }
    },
    "gallery": [
      "lune-runner.jpg",
      "mesa-jute-rug.jpg",
      "arden-wool-rug.jpg",
      "strata-indoor-outdoor-rug.jpg"
    ]
  },
  {
    "slug": "rowan-writing-desk",
    "name": {
      "en": "Rowan Writing Desk",
      "fr": "Bureau d’écriture Rowan"
    },
    "category": {
      "en": "Desks",
      "fr": "Bureaux"
    },
    "room": "office",
    "type": "desks",
    "material": "wood",
    "color": "brown",
    "isNew": true,
    "price": 1680,
    "oldPrice": null,
    "from": false,
    "sku": "ROWAN60",
    "image": "rowan-writing-desk.jpg",
    "swatches": [
      "#7b5636",
      "#f2e9dc"
    ],
    "finishes": [
      "finishOak",
      "finishWalnut"
    ],
    "topFinishes": [
      "finishCarrara"
    ],
    "sizes": [
      "60\""
    ],
    "description": {
      "en": "A clean writing desk with soft storage and a warm oak work surface.",
      "fr": "Un bureau d’écriture épuré avec rangement discret et surface de travail en chêne chaleureux."
    },
    "detailCopy": {
      "en": {
        "dimensions": "Designed for office settings with balanced proportions and a residential scale that feels generous without overwhelming the room.",
        "specifications": "Crafted with durable joinery, hand-finished surfaces, and materials selected for daily use. Minor tone and texture variation is expected.",
        "details": "Rowan Writing Desk brings a calm, layered look to the collection and pairs naturally with warm woods, textured textiles, and simple architectural forms."
      },
      "fr": {
        "dimensions": "Conçu pour les espaces office, avec des proportions équilibrées et une échelle résidentielle généreuse sans alourdir la pièce.",
        "specifications": "Fabriqué avec des assemblages durables, des surfaces finies à la main et des matériaux choisis pour l’usage quotidien. De légères variations de ton et de texture sont normales.",
        "details": "Rowan Writing Desk apporte un aspect calme et superposé à la collection et s’accorde naturellement avec les bois chauds, les textiles texturés et les formes architecturales simples."
      }
    },
    "gallery": [
      "rowan-writing-desk.jpg",
      "idris-office-chair.jpg",
      "cove-bookshelf.jpg",
      "mina-desk-lamp.jpg"
    ]
  },
  {
    "slug": "idris-office-chair",
    "name": {
      "en": "Idris Office Chair",
      "fr": "Chaise de bureau Idris"
    },
    "category": {
      "en": "Office Chairs",
      "fr": "Chaises de bureau"
    },
    "room": "office",
    "type": "chairs",
    "material": "fabric",
    "color": "black",
    "isNew": false,
    "price": 920,
    "oldPrice": 1100,
    "from": false,
    "sku": "IDRISCHR",
    "image": "idris-office-chair.jpg",
    "swatches": [
      "#1f211e",
      "#c7baaa"
    ],
    "finishes": [
      "finishCharcoal",
      "finishOak"
    ],
    "topFinishes": [
      "finishCarrara"
    ],
    "sizes": [
      "Standard"
    ],
    "description": {
      "en": "A task chair with residential softness and a supportive curved back.",
      "fr": "Une chaise de travail au confort résidentiel et dossier courbé soutenant."
    },
    "detailCopy": {
      "en": {
        "dimensions": "Designed for office settings with balanced proportions and a residential scale that feels generous without overwhelming the room.",
        "specifications": "Crafted with durable joinery, hand-finished surfaces, and materials selected for daily use. Minor tone and texture variation is expected.",
        "details": "Idris Office Chair brings a calm, layered look to the collection and pairs naturally with warm woods, textured textiles, and simple architectural forms."
      },
      "fr": {
        "dimensions": "Conçu pour les espaces office, avec des proportions équilibrées et une échelle résidentielle généreuse sans alourdir la pièce.",
        "specifications": "Fabriqué avec des assemblages durables, des surfaces finies à la main et des matériaux choisis pour l’usage quotidien. De légères variations de ton et de texture sont normales.",
        "details": "Idris Office Chair apporte un aspect calme et superposé à la collection et s’accorde naturellement avec les bois chauds, les textiles texturés et les formes architecturales simples."
      }
    },
    "gallery": [
      "idris-office-chair.jpg",
      "rowan-writing-desk.jpg",
      "cove-bookshelf.jpg",
      "mina-desk-lamp.jpg"
    ]
  },
  {
    "slug": "cove-bookshelf",
    "name": {
      "en": "Cove Bookshelf",
      "fr": "Bibliothèque Cove"
    },
    "category": {
      "en": "Bookcases",
      "fr": "Bibliothèques"
    },
    "room": "office",
    "type": "storage",
    "material": "wood",
    "color": "brown",
    "isNew": false,
    "price": 2150,
    "oldPrice": null,
    "from": false,
    "sku": "COVE84",
    "image": "cove-bookshelf.jpg",
    "swatches": [
      "#7b5636",
      "#1f211e"
    ],
    "finishes": [
      "finishWalnut",
      "finishEbony"
    ],
    "topFinishes": [
      "finishCarrara"
    ],
    "sizes": [
      "84\""
    ],
    "description": {
      "en": "A tall open bookcase with display shelves and lower concealed storage.",
      "fr": "Une grande bibliothèque ouverte avec étagères d’exposition et rangement inférieur fermé."
    },
    "detailCopy": {
      "en": {
        "dimensions": "Designed for office settings with balanced proportions and a residential scale that feels generous without overwhelming the room.",
        "specifications": "Crafted with durable joinery, hand-finished surfaces, and materials selected for daily use. Minor tone and texture variation is expected.",
        "details": "Cove Bookshelf brings a calm, layered look to the collection and pairs naturally with warm woods, textured textiles, and simple architectural forms."
      },
      "fr": {
        "dimensions": "Conçu pour les espaces office, avec des proportions équilibrées et une échelle résidentielle généreuse sans alourdir la pièce.",
        "specifications": "Fabriqué avec des assemblages durables, des surfaces finies à la main et des matériaux choisis pour l’usage quotidien. De légères variations de ton et de texture sont normales.",
        "details": "Cove Bookshelf apporte un aspect calme et superposé à la collection et s’accorde naturellement avec les bois chauds, les textiles texturés et les formes architecturales simples."
      }
    },
    "gallery": [
      "cove-bookshelf.jpg",
      "rowan-writing-desk.jpg",
      "idris-office-chair.jpg",
      "mina-desk-lamp.jpg"
    ]
  },
  {
    "slug": "mina-desk-lamp",
    "name": {
      "en": "Mina Desk Lamp",
      "fr": "Lampe de bureau Mina"
    },
    "category": {
      "en": "Desk Lighting",
      "fr": "Éclairage de bureau"
    },
    "room": "office",
    "type": "lamps",
    "material": "metal",
    "color": "brown",
    "isNew": true,
    "price": 360,
    "oldPrice": null,
    "from": false,
    "sku": "MINALMP",
    "image": "mina-desk-lamp.jpg",
    "swatches": [
      "#a4825b",
      "#f3e6d0"
    ],
    "finishes": [
      "finishWalnut",
      "finishCharcoal"
    ],
    "topFinishes": [
      "finishCarrara"
    ],
    "sizes": [
      "18\""
    ],
    "description": {
      "en": "A focused desk lamp with a compact shade and warm metal detail.",
      "fr": "Une lampe de bureau précise avec abat-jour compact et détail métallique chaud."
    },
    "detailCopy": {
      "en": {
        "dimensions": "Designed for office settings with balanced proportions and a residential scale that feels generous without overwhelming the room.",
        "specifications": "Crafted with durable joinery, hand-finished surfaces, and materials selected for daily use. Minor tone and texture variation is expected.",
        "details": "Mina Desk Lamp brings a calm, layered look to the collection and pairs naturally with warm woods, textured textiles, and simple architectural forms."
      },
      "fr": {
        "dimensions": "Conçu pour les espaces office, avec des proportions équilibrées et une échelle résidentielle généreuse sans alourdir la pièce.",
        "specifications": "Fabriqué avec des assemblages durables, des surfaces finies à la main et des matériaux choisis pour l’usage quotidien. De légères variations de ton et de texture sont normales.",
        "details": "Mina Desk Lamp apporte un aspect calme et superposé à la collection et s’accorde naturellement avec les bois chauds, les textiles texturés et les formes architecturales simples."
      }
    },
    "gallery": [
      "mina-desk-lamp.jpg",
      "rowan-writing-desk.jpg",
      "idris-office-chair.jpg",
      "cove-bookshelf.jpg"
    ]
  },
  {
    "slug": "material-sample-kit",
    "name": {
      "en": "Material Sample Kit",
      "fr": "Trousse d’échantillons"
    },
    "category": {
      "en": "Trade Services",
      "fr": "Services professionnels"
    },
    "room": "trade",
    "type": "services",
    "material": "fabric",
    "color": "cream",
    "isNew": false,
    "price": 95,
    "oldPrice": null,
    "from": false,
    "sku": "TRADEKIT",
    "image": "material-sample-kit.jpg",
    "swatches": [
      "#d8cab8",
      "#8a6242"
    ],
    "finishes": [
      "finishOak",
      "finishWalnut",
      "finishCharcoal"
    ],
    "topFinishes": [
      "finishCarrara"
    ],
    "sizes": [
      "Standard kit"
    ],
    "description": {
      "en": "A curated kit of fabric, wood, stone, and metal samples for project planning.",
      "fr": "Une trousse d’échantillons de tissu, bois, pierre et métal pour planifier vos projets."
    },
    "detailCopy": {
      "en": {
        "dimensions": "Designed for trade settings with balanced proportions and a residential scale that feels generous without overwhelming the room.",
        "specifications": "Crafted with durable joinery, hand-finished surfaces, and materials selected for daily use. Minor tone and texture variation is expected.",
        "details": "Material Sample Kit brings a calm, layered look to the collection and pairs naturally with warm woods, textured textiles, and simple architectural forms."
      },
      "fr": {
        "dimensions": "Conçu pour les espaces trade, avec des proportions équilibrées et une échelle résidentielle généreuse sans alourdir la pièce.",
        "specifications": "Fabriqué avec des assemblages durables, des surfaces finies à la main et des matériaux choisis pour l’usage quotidien. De légères variations de ton et de texture sont normales.",
        "details": "Material Sample Kit apporte un aspect calme et superposé à la collection et s’accorde naturellement avec les bois chauds, les textiles texturés et les formes architecturales simples."
      }
    },
    "gallery": [
      "material-sample-kit.jpg",
      "design-consultation.jpg",
      "contract-lounge-package.jpg",
      "hospitality-dining-package.jpg"
    ]
  },
  {
    "slug": "design-consultation",
    "name": {
      "en": "Design Consultation",
      "fr": "Consultation design"
    },
    "category": {
      "en": "Trade Services",
      "fr": "Services professionnels"
    },
    "room": "trade",
    "type": "services",
    "material": "fabric",
    "color": "cream",
    "isNew": false,
    "price": 250,
    "oldPrice": null,
    "from": false,
    "sku": "CONSULT01",
    "image": "design-consultation.jpg",
    "swatches": [
      "#eee7db",
      "#8a6242"
    ],
    "finishes": [
      "finishOak",
      "finishWalnut"
    ],
    "topFinishes": [
      "finishCarrara"
    ],
    "sizes": [
      "60 min",
      "90 min"
    ],
    "description": {
      "en": "A guided consultation for designers, stylists, and project teams.",
      "fr": "Une consultation guidée pour designers, stylistes et équipes de projet."
    },
    "detailCopy": {
      "en": {
        "dimensions": "Designed for trade settings with balanced proportions and a residential scale that feels generous without overwhelming the room.",
        "specifications": "Crafted with durable joinery, hand-finished surfaces, and materials selected for daily use. Minor tone and texture variation is expected.",
        "details": "Design Consultation brings a calm, layered look to the collection and pairs naturally with warm woods, textured textiles, and simple architectural forms."
      },
      "fr": {
        "dimensions": "Conçu pour les espaces trade, avec des proportions équilibrées et une échelle résidentielle généreuse sans alourdir la pièce.",
        "specifications": "Fabriqué avec des assemblages durables, des surfaces finies à la main et des matériaux choisis pour l’usage quotidien. De légères variations de ton et de texture sont normales.",
        "details": "Design Consultation apporte un aspect calme et superposé à la collection et s’accorde naturellement avec les bois chauds, les textiles texturés et les formes architecturales simples."
      }
    },
    "gallery": [
      "design-consultation.jpg",
      "material-sample-kit.jpg",
      "contract-lounge-package.jpg",
      "hospitality-dining-package.jpg"
    ]
  },
  {
    "slug": "contract-lounge-package",
    "name": {
      "en": "Contract Lounge Package",
      "fr": "Forfait salon contractuel"
    },
    "category": {
      "en": "Trade Packages",
      "fr": "Forfaits professionnels"
    },
    "room": "trade",
    "type": "services",
    "material": "fabric",
    "color": "cream",
    "isNew": true,
    "price": 7800,
    "oldPrice": 9200,
    "from": false,
    "sku": "LOUNGE-PKG",
    "image": "contract-lounge-package.jpg",
    "swatches": [
      "#c7baaa",
      "#7b5636"
    ],
    "finishes": [
      "finishOak",
      "finishWalnut"
    ],
    "topFinishes": [
      "finishCarrara"
    ],
    "sizes": [
      "Small",
      "Large"
    ],
    "description": {
      "en": "A bundled lounge set for boutique lobbies, studios, and hospitality spaces.",
      "fr": "Un ensemble salon groupé pour halls boutique, studios et espaces hôteliers."
    },
    "detailCopy": {
      "en": {
        "dimensions": "Designed for trade settings with balanced proportions and a residential scale that feels generous without overwhelming the room.",
        "specifications": "Crafted with durable joinery, hand-finished surfaces, and materials selected for daily use. Minor tone and texture variation is expected.",
        "details": "Contract Lounge Package brings a calm, layered look to the collection and pairs naturally with warm woods, textured textiles, and simple architectural forms."
      },
      "fr": {
        "dimensions": "Conçu pour les espaces trade, avec des proportions équilibrées et une échelle résidentielle généreuse sans alourdir la pièce.",
        "specifications": "Fabriqué avec des assemblages durables, des surfaces finies à la main et des matériaux choisis pour l’usage quotidien. De légères variations de ton et de texture sont normales.",
        "details": "Contract Lounge Package apporte un aspect calme et superposé à la collection et s’accorde naturellement avec les bois chauds, les textiles texturés et les formes architecturales simples."
      }
    },
    "gallery": [
      "contract-lounge-package.jpg",
      "material-sample-kit.jpg",
      "design-consultation.jpg",
      "hospitality-dining-package.jpg"
    ]
  },
  {
    "slug": "hospitality-dining-package",
    "name": {
      "en": "Hospitality Dining Package",
      "fr": "Forfait repas hôtellerie"
    },
    "category": {
      "en": "Trade Packages",
      "fr": "Forfaits professionnels"
    },
    "room": "trade",
    "type": "services",
    "material": "wood",
    "color": "brown",
    "isNew": false,
    "price": 9600,
    "oldPrice": null,
    "from": false,
    "sku": "DINE-PKG",
    "image": "hospitality-dining-package.jpg",
    "swatches": [
      "#7b5636",
      "#d8cab8"
    ],
    "finishes": [
      "finishOak",
      "finishWalnut"
    ],
    "topFinishes": [
      "finishCarrara"
    ],
    "sizes": [
      "Seats 12",
      "Seats 24"
    ],
    "description": {
      "en": "A coordinated dining package for cafés, amenity rooms, and private projects.",
      "fr": "Un ensemble repas coordonné pour cafés, salles communes et projets privés."
    },
    "detailCopy": {
      "en": {
        "dimensions": "Designed for trade settings with balanced proportions and a residential scale that feels generous without overwhelming the room.",
        "specifications": "Crafted with durable joinery, hand-finished surfaces, and materials selected for daily use. Minor tone and texture variation is expected.",
        "details": "Hospitality Dining Package brings a calm, layered look to the collection and pairs naturally with warm woods, textured textiles, and simple architectural forms."
      },
      "fr": {
        "dimensions": "Conçu pour les espaces trade, avec des proportions équilibrées et une échelle résidentielle généreuse sans alourdir la pièce.",
        "specifications": "Fabriqué avec des assemblages durables, des surfaces finies à la main et des matériaux choisis pour l’usage quotidien. De légères variations de ton et de texture sont normales.",
        "details": "Hospitality Dining Package apporte un aspect calme et superposé à la collection et s’accorde naturellement avec les bois chauds, les textiles texturés et les formes architecturales simples."
      }
    },
    "gallery": [
      "hospitality-dining-package.jpg",
      "material-sample-kit.jpg",
      "design-consultation.jpg",
      "contract-lounge-package.jpg"
    ]
  }
];

const state = {
  lang: localStorage.getItem('lumina-lang') || 'en',
  mobileOpen: false,
  searchOpen: false,
  searchQuery: '',
  cartOpen: false,
  lightboxOpen: false,
  filter: { material: 'all', color: 'all', newOnly: false },
  sort: 'featured',
  selectedImage: 0,
  selectedFinish: 0,
  selectedTop: 0,
  selectedSize: 0,
  quantity: 1,
  openAccordions: new Set(['dimensions']),
  saved: new Set(JSON.parse(localStorage.getItem('lumina-saved') || '[]')),
  cart: JSON.parse(localStorage.getItem('lumina-cart') || '[]'),
  slideshowTimers: []
};

function t(key, vars = {}) {
  let value = translations[state.lang][key] ?? translations.en[key] ?? key;
  Object.entries(vars).forEach(([name, replacement]) => {
    value = value.replaceAll(`{${name}}`, replacement);
  });
  return value;
}

function formatPrice(value) {
  return new Intl.NumberFormat(state.lang === 'fr' ? 'fr-CA' : 'en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(value);
}

function getRoute() {
  const raw = window.location.hash.replace('#', '') || 'home';
  const [page, slug] = raw.split('/');
  return { page, slug };
}

let isPageTransitioning = false;
let pageTransitionTimer = null;

function startPageTransition(route) {
  const app = document.getElementById('app');

  clearTimeout(pageTransitionTimer);

  if (!app || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.location.hash = route;
    return;
  }

  if (isPageTransitioning) return;

  isPageTransitioning = true;
  app.classList.remove('page-enter');
  app.classList.add('page-exit');

  pageTransitionTimer = setTimeout(() => {
    window.location.hash = route;
  }, 240);
}

function finishPageTransition() {
  const app = document.getElementById('app');
  if (!app) return;

  app.classList.remove('page-exit');
  app.classList.add('page-enter');

  setTimeout(() => {
    app.classList.remove('page-enter');
    isPageTransitioning = false;
  }, 540);
}

function go(route) {
  if (window.location.hash === `#${route}`) {
    renderApp();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    finishPageTransition();
    return;
  }

  startPageTransition(route);
}

function image(src) {
  return `${ASSET}${src}`;
}

function icon(name) {
  const icons = {
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg>',
    user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20 21a8 8 0 0 0-16 0"></path><circle cx="12" cy="8" r="4"></circle></svg>',
    bag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M6 8h12l-1 13H7L6 8Z"></path><path d="M9 8a3 3 0 0 1 6 0"></path></svg>',
    globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="9"></circle><path d="M3 12h18"></path><path d="M12 3a14 14 0 0 1 0 18"></path><path d="M12 3a14 14 0 0 0 0 18"></path></svg>',
    chevron: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m6 9 6 6 6-6"></path></svg>',
    plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 5v14M5 12h14"></path></svg>',
    minus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 12h14"></path></svg>',
    heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"></path></svg>',
    heartFill: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"></path></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m6 6 12 12M18 6 6 18"></path></svg>',
    zoom: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5M11 8v6M8 11h6"></path></svg>',
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 11.5 12 4l9 7.5"></path><path d="M5.5 10.5V20h13v-9.5"></path><path d="M9.5 20v-6h5v6"></path></svg>',
    arrowLeft: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M19 12H5M11 5l-7 7 7 7"></path></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 12h14M13 5l7 7-7 7"></path></svg>'
  };
  return icons[name] || '';
}

function productName(product) {
  return product.name[state.lang];
}


function sizeLabel(value) {
  const map = {
    'Standard': { en: 'Standard', fr: 'Standard' },
    'Counter': { en: 'Counter', fr: 'Comptoir' },
    '1 room': { en: '1 room', fr: '1 pièce' },
    'Full home': { en: 'Full home', fr: 'Maison complète' }
  };
  return map[value]?.[state.lang] || value;
}

function categoryName(cat) {
  return t(cat.titleKey || cat.key);
}

function saveStorage() {
  localStorage.setItem('lumina-lang', state.lang);
  localStorage.setItem('lumina-saved', JSON.stringify([...state.saved]));
  localStorage.setItem('lumina-cart', JSON.stringify(state.cart));
}

function resetProductState() {
  state.selectedImage = 0;
  state.selectedFinish = 0;
  state.selectedTop = 0;
  state.selectedSize = 0;
  state.quantity = 1;
  state.openAccordions = new Set(['dimensions']);
}

function renderApp() {
  clearSlideshows();
  document.documentElement.lang = state.lang;
  const route = getRoute();
  const app = document.getElementById('app');
  app.innerHTML = `
    <a class="skip-link" href="#main">${t('skip')}</a>
    <div class="site-shell">
      ${renderHeader(route)}
      <main id="main" class="main" tabindex="-1">
        ${renderMain(route)}
      </main>
      ${renderFooter()}
      ${renderSearchModal()}
      ${renderCartDrawer()}
      ${renderLightbox(route)}
      <div id="toastWrap" class="toast-wrap"></div>
    </div>
  `;
  document.body.classList.toggle('no-scroll', state.searchOpen || state.cartOpen || state.lightboxOpen);
  attachEvents();
  if (state.searchOpen) {
    const input = document.getElementById('searchInput');
    if (input) {
      input.focus();
      input.setSelectionRange(input.value.length, input.value.length);
    }
  }
}

function renderHeader(route) {
  const navItems = ['outdoor', 'living', 'dining', 'bedroom', 'bath', 'lighting', 'decor', 'artMirrors', 'rugs', 'office', 'sale', 'trade'];
  const categoryRoutes = {
    outdoor: 'category/outdoor', living: 'category/living', dining: 'category/dining', bedroom: 'category/bedroom', bath: 'category/bath',
    lighting: 'category/lighting', decor: 'category/decor', artMirrors: 'category/art-mirrors', rugs: 'category/rugs', office: 'category/office', sale: 'category/sale', trade: 'category/trade'
  };
  const nav = navItems.map(key => {
    const isActive = route.page === 'category' && categoryRoutes[key] === `category/${route.slug}`;
    return `<button class="nav-link ${isActive ? 'is-active' : ''}" data-route="${categoryRoutes[key]}">${t(key)}</button>`;
  }).join('');

  return `
    <header class="site-header">
      <div class="header-inner">
        <button class="mobile-menu-btn" data-action="toggle-menu" aria-label="${t('openMenu')}" aria-expanded="${state.mobileOpen}"><span></span><span></span></button>
        <button class="home-icon-btn" data-route="home" aria-label="${t('home')}">${icon('home')}</button>
        <nav class="nav" aria-label="Primary navigation">${nav}</nav>
        <div class="header-actions">
          <button class="lang-toggle" data-action="toggle-lang" aria-label="EN FR language toggle"><span class="${state.lang === 'en' ? 'is-current' : ''}">EN</span> / <span class="${state.lang === 'fr' ? 'is-current' : ''}">FR</span></button>
          <button class="utility-btn" data-action="open-search" aria-label="${t('openSearch')}">${icon('search')}</button>
          <button class="utility-btn" aria-label="Account">${icon('user')}</button>
          <button class="utility-btn" data-action="open-cart" aria-label="${t('openCart')}">${icon('bag')}<span class="cart-pill">${cartCount()}</span></button>
        </div>
      </div>
      <div class="mobile-menu ${state.mobileOpen ? 'is-open' : ''}">
        ${navItems.map(key => `<button class="mobile-nav-link" data-route="${categoryRoutes[key]}">${t(key)}</button>`).join('')}
      </div>
    </header>
  `;
}

function renderMain(route) {
  if (route.page === 'category') return renderListingPage(route.slug || 'living');
  if (route.page === 'product') return renderProductPage(route.slug);
  return renderHomePage();
}

function renderHomePage() {
  return `
    <section class="hero hero-reveal">
      <img src="${image('hero-living-room.jpg')}" alt="Luxury living room with sectional sofa, coffee table and warm daylight" />
      <div class="hero-content">
        <div class="kicker">${t('heroKicker')}</div>
        <h1 class="display-title">${t('heroTitle')}</h1>
        <div class="hero-actions"><button class="button" data-route="category/living">${t('shopNow')}</button></div>
      </div>
    </section>

    <section class="home-intro container scroll-reveal">
      <div class="home-intro-grid">
        <div>
          <div class="kicker">${t('introKicker')}</div>
          <h2 class="section-title">${t('introTitle')}</h2>
        </div>
        <p>${t('introBody')}</p>
      </div>
    </section>

    <section class="category-section container scroll-reveal" aria-labelledby="categoryTitle">
      <div class="kicker" id="categoryTitle">${t('browseCategories')}</div>
      <div class="category-grid">
        ${categories.map(renderCategoryCard).join('')}
      </div>
    </section>

    <section class="story-band scroll-reveal">
      <div class="story-band-grid">
        <div class="story-copy">
          <div class="kicker">${t('storyKicker')}</div>
          <h2 class="section-title">${t('storyTitle')}</h2>
          <p>${t('storyBody')}</p>
          <div style="margin-top: 30px"><button class="ghost-button" data-route="category/living">${t('storyCta')}</button></div>
        </div>
        <div class="story-image" role="img" aria-label="Warm media console interior vignette"></div>
      </div>
    </section>
  `;
}

function renderCategoryCard(cat) {
  return `
    <button class="category-card scroll-reveal" data-category-card="${cat.id}" data-route="category/${cat.id}" aria-label="${categoryName(cat)}">
      <div class="progress-dots">${cat.imageSet.map((_, i) => `<span class="dot ${i === 0 ? 'is-active' : ''}"></span>`).join('')}</div>
      ${cat.imageSet.map((img, i) => `<img class="slide-img ${i === 0 ? 'is-active' : ''}" src="${image(img)}" alt="${categoryName(cat)} ${i + 1}" loading="lazy" />`).join('')}
      <div class="category-card-content">
        <h3>${categoryName(cat)}</h3>
        <div class="kicker"><span>${t('hoverBrowse')}</span><span>${cat.count} ${t('products')}</span></div>
      </div>
    </button>
  `;
}

function renderListingPage(categorySlug) {
  const cat = categories.find(c => c.id === categorySlug) || categories.find(c => c.id === 'living');
  categorySlug = cat.id;
  const title = categoryName(cat);
  const filtered = getFilteredProducts(categorySlug);
  const baseProducts = getBaseProductsForCategory(categorySlug);
  const collectionItems = baseProducts.slice(0, 5);
  const body = cat.description?.[state.lang] || t('collectionBody');

  return `
    <section class="container collection-header">
      <div class="breadcrumb">
        <button data-route="home">${t('home')}</button><span>›</span><span>${title}</span>
      </div>
      <div class="collection-title-row">
        <h1 class="display-title">${title}</h1>
        <p>${body}</p>
      </div>
      <div class="collection-strip" aria-label="Collection categories">
        ${collectionItems.map(product => `
          <button class="collection-tile" data-product="${product.slug}">
            <span class="collection-tile-img"><img src="${image(product.image)}" alt="${productName(product)}" loading="lazy"></span>
            <span>${productName(product)}</span>
          </button>
        `).join('')}
      </div>
    </section>

    <section class="toolbar" aria-label="Product filters">
      <div class="toolbar-inner">
        <div class="filters">
          ${renderFilterButton('all', t('all'), isDefaultFilter())}
          ${renderFilterButton('material:wood', t('wood'), state.filter.material === 'wood')}
          ${renderFilterButton('material:fabric', t('fabric'), state.filter.material === 'fabric')}
          ${renderFilterButton('material:leather', t('leather'), state.filter.material === 'leather')}
          ${renderFilterButton('material:metal', t('metal'), state.filter.material === 'metal')}
          ${renderFilterButton('new', t('new'), state.filter.newOnly)}
          ${renderFilterButton('color:cream', t('cream'), state.filter.color === 'cream')}
          ${renderFilterButton('color:brown', t('brown'), state.filter.color === 'brown')}
          ${renderFilterButton('color:black', t('black'), state.filter.color === 'black')}
        </div>
        <div class="sort-area">
          <div class="item-count">${t('items', { count: filtered.length })}</div>
          <label class="label-caps" for="sortSelect">${t('sortBy')}</label>
          <select id="sortSelect" class="sort-select">
            <option value="featured" ${state.sort === 'featured' ? 'selected' : ''}>${t('featured')}</option>
            <option value="price-low" ${state.sort === 'price-low' ? 'selected' : ''}>${t('priceLow')}</option>
            <option value="price-high" ${state.sort === 'price-high' ? 'selected' : ''}>${t('priceHigh')}</option>
            <option value="name" ${state.sort === 'name' ? 'selected' : ''}>${t('nameAZ')}</option>
          </select>
        </div>
      </div>
    </section>

    <section class="container product-grid">
      ${filtered.length ? filtered.map(renderProductCard).join('') : `
        <div class="empty-state">
          <div>
            <h2 class="headline">${t('noProductsTitle')}</h2>
            <p>${t('noProductsBody')}</p>
            <div style="margin-top: 24px"><button class="button" data-filter="all">${t('all')}</button></div>
          </div>
        </div>
      `}
    </section>
  `;
}

function renderFilterButton(filter, label, active) {
  return `<button class="filter-btn ${active ? 'is-active' : ''}" data-filter="${filter}">${label}</button>`;
}

function isDefaultFilter() {
  return state.filter.material === 'all' && state.filter.color === 'all' && !state.filter.newOnly;
}

function getBaseProductsForCategory(categorySlug = 'living') {
  if (categorySlug === 'sale') return products.filter(product => product.oldPrice);
  return products.filter(product => product.room === categorySlug);
}

function getFilteredProducts(categorySlug = 'living') {
  let list = getBaseProductsForCategory(categorySlug);

  if (state.filter.material !== 'all') list = list.filter(product => product.material === state.filter.material);
  if (state.filter.color !== 'all') list = list.filter(product => product.color === state.filter.color);
  if (state.filter.newOnly) list = list.filter(product => product.isNew);

  const sorted = [...list];
  if (state.sort === 'price-low') sorted.sort((a, b) => a.price - b.price);
  if (state.sort === 'price-high') sorted.sort((a, b) => b.price - a.price);
  if (state.sort === 'name') sorted.sort((a, b) => productName(a).localeCompare(productName(b)));
  return sorted;
}

function renderProductCard(product) {
  return `
    <button class="product-card" data-product="${product.slug}" aria-label="${t('viewProduct')}: ${productName(product)}">
      <span class="product-img-wrap">
        <img src="${image(product.image)}" alt="${productName(product)}" loading="lazy" />
        ${product.isNew ? `<span class="product-card-badge label-caps">${t('new')}</span>` : ''}
      </span>
      <span class="product-card-meta">
        <span class="product-category">${product.category[state.lang]}</span>
        <span class="product-card-title-row">
          <h3>${productName(product)}</h3>
          <span class="price">${product.from ? `<span class="from">${t('from')}</span>` : ''}${formatPrice(product.price)}${product.oldPrice ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>` : ''}</span>
        </span>
        <span class="swatches">${product.swatches.map((sw, i) => `<span class="swatch ${i === 0 ? 'is-selected' : ''}" style="--swatch:${sw}"></span>`).join('')}</span>
      </span>
    </button>
  `;
}

function renderProductPage(slug) {
  const product = products.find(item => item.slug === slug) || products[0];
  const gallery = product.gallery || [product.image];
  const activeImage = gallery[state.selectedImage] || gallery[0];

  return `
    <section class="container product-page">
      <button class="detail-back" data-route="category/${product.room || 'living'}">${icon('arrowLeft')}<span>${t('backToProducts')}</span></button>
      <div class="detail-grid">
        <div class="gallery">
          <div class="gallery-main">
            <img src="${image(activeImage)}" alt="${productName(product)}" />
            <button class="zoom-btn" data-action="open-lightbox" aria-label="${t('zoomImage')}">${icon('zoom')}</button>
          </div>
          <div class="gallery-thumbs">
            ${gallery.slice(0, 4).map((img, index) => `
              <button class="thumb-btn ${index === state.selectedImage ? 'is-active' : ''}" data-gallery-index="${index}" aria-label="${productName(product)} image ${index + 1}">
                <img src="${image(img)}" alt="" />
              </button>
            `).join('')}
          </div>
        </div>

        <aside class="product-info">
          <h1>${productName(product)}</h1>
          <div class="detail-price-row">
            <span>${product.from ? `${t('from')} ` : ''}${formatPrice(product.price)}</span>
            ${product.oldPrice ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>` : ''}
          </div>
          <div class="sku-stock-row">
            <span class="label-caps">${t('sku')}: ${product.sku}</span>
            <span class="stock label-caps">• ${t('inStock')}</span>
          </div>

          <div class="option-block">
            <div class="option-row"><span class="option-label">${t('baseFinish')}</span><span class="option-value">${t(product.finishes[state.selectedFinish] || product.finishes[0])}</span></div>
            <div class="color-options">
              ${product.finishes.map((finish, i) => `<button class="color-option ${i === state.selectedFinish ? 'is-active' : ''}" data-finish-index="${i}" style="--finish:${product.swatches[i] || '#ddd'}" aria-label="${t(finish)}"></button>`).join('')}
            </div>
          </div>

          <div class="option-block">
            <div class="option-row"><span class="option-label">${t('topFinish')}</span><span class="option-value">${t(product.topFinishes[state.selectedTop] || product.topFinishes[0])}</span></div>
            <div class="color-options">
              ${product.topFinishes.map((finish, i) => `<button class="color-option ${i === state.selectedTop ? 'is-active' : ''}" data-top-index="${i}" style="--finish:${i === 0 ? '#f4f1ec' : '#181818'}" aria-label="${t(finish)}"></button>`).join('')}
            </div>
          </div>

          <div class="option-block">
            <div class="option-row"><span class="option-label">${t('size')}</span><span class="option-value">${sizeLabel(product.sizes[state.selectedSize] || product.sizes[0])}</span></div>
            <div class="size-options">
              ${product.sizes.map((size, i) => `<button class="size-option ${i === state.selectedSize ? 'is-active' : ''}" data-size-index="${i}">${sizeLabel(size)}</button>`).join('')}
            </div>
          </div>

          <div class="purchase-row">
            <div class="quantity-stepper" aria-label="Quantity selector">
              <button data-action="qty-minus" aria-label="Decrease quantity">${icon('minus')}</button>
              <span>${state.quantity}</span>
              <button data-action="qty-plus" aria-label="Increase quantity">${icon('plus')}</button>
            </div>
            <button class="button" data-action="add-cart" data-product-slug="${product.slug}">${t('addToBag')}</button>
          </div>

          <button class="save-btn label-caps" data-action="toggle-save" data-product-slug="${product.slug}">${state.saved.has(product.slug) ? icon('heartFill') : icon('heart')} ${state.saved.has(product.slug) ? t('saved') : t('saveToList')}</button>
          ${renderAccordions(product)}
        </aside>
      </div>
    </section>

    <section class="container related-section">
      <h2 class="section-title">${t('completeLook')}</h2>
      <div class="related-grid">
        ${getRelatedProducts(product).map(renderProductCard).join('')}
      </div>
    </section>
  `;
}

function renderAccordions(product) {
  const copy = product.detailCopy?.[state.lang] || product.detailCopy?.en || {};
  const items = [
    ['dimensions', copy.dimensions || t('dimensionsText')],
    ['specifications', copy.specifications || t('specificationsText')],
    ['details', copy.details || t('detailsText')]
  ];
  return `<div class="accordion">${items.map(([key, panel]) => `
    <div class="accordion-item ${state.openAccordions.has(key) ? 'is-open' : ''}">
      <button class="accordion-button" data-accordion="${key}"><span>${t(key)}</span><span class="accordion-icon">${icon('chevron')}</span></button>
      <div class="accordion-panel">${panel}</div>
    </div>
  `).join('')}</div>`;
}

function getRelatedProducts(currentProduct) {
  const sameRoom = products.filter(p => p.slug !== currentProduct.slug && p.room === currentProduct.room).slice(0, 3);
  if (sameRoom.length >= 3) return sameRoom;
  return [...sameRoom, ...products.filter(p => p.slug !== currentProduct.slug && p.room !== currentProduct.room)].slice(0, 3);
}

function renderFooter() {
  return `
    <footer class="footer">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="brand">${t('brand')}</div>
          <p>${t('brandFooter')}</p>
        </div>
        <div>
          <div class="footer-title">${t('clientServices')}</div>
          <button data-action="footer-toast">${t('contact')}</button>
          <button data-action="footer-toast">${t('shipping')}</button>
          <button data-action="footer-toast">${t('tradeProgram')}</button>
          <button data-action="footer-toast">${t('showrooms')}</button>
        </div>
        <div>
          <div class="footer-title">${t('company')}</div>
          <button data-action="footer-toast">${t('sustainability')}</button>
          <button data-action="footer-toast">${t('privacy')}</button>
          <button data-action="footer-toast">${t('ourStory')}</button>
        </div>
        <form class="newsletter" data-action="newsletter">
          <div class="footer-title">${t('journal')}</div>
          <p>${t('newsletterBody')}</p>
          <div class="newsletter-row">
            <input type="email" name="email" placeholder="${t('emailPlaceholder')}" aria-label="${t('emailPlaceholder')}" required />
            <button type="submit">${t('join')}</button>
          </div>
        </form>
      </div>
      <div class="footer-bottom">
        <div class="footer-bottom-inner">
          <span>${t('copyright')}</span>
          <span>EN / FR · ${icon('globe')}</span>
        </div>
      </div>
    </footer>
  `;
}

function renderSearchModal() {
  return `
    <div class="modal-backdrop ${state.searchOpen ? 'is-open' : ''}" data-action="close-modals"></div>
    <section class="search-modal ${state.searchOpen ? 'is-open' : ''}" role="dialog" aria-modal="true" aria-label="${t('search')}">
      <div class="modal-head">
        <input id="searchInput" type="search" value="${state.searchQuery}" placeholder="${t('searchPlaceholder')}" aria-label="${t('search')}" />
        <button class="icon-close" data-action="close-search" aria-label="${t('close')}">${icon('close')}</button>
      </div>
      <div id="searchResults" class="search-results">${renderSearchResults(state.searchQuery)}</div>
    </section>
  `;
}

function renderSearchResults(query) {
  const q = query.trim().toLowerCase();
  if (!q) return `<p>${t('searchEmpty')}</p>`;
  const matches = products.filter(product => {
    return product.name.en.toLowerCase().includes(q) || product.name.fr.toLowerCase().includes(q) || product.category.en.toLowerCase().includes(q) || product.category.fr.toLowerCase().includes(q) || product.room.toLowerCase().includes(q) || product.description.en.toLowerCase().includes(q) || product.description.fr.toLowerCase().includes(q);
  });
  if (!matches.length) return `<p>${t('searchNoResults')}</p>`;
  return matches.map(product => `
    <button class="search-result" data-product="${product.slug}">
      <img src="${image(product.image)}" alt="${productName(product)}" />
      <span><span class="product-category">${product.category[state.lang]}</span><strong>${productName(product)}</strong></span>
      <span class="price">${formatPrice(product.price)}</span>
    </button>
  `).join('');
}

function renderCartDrawer() {
  return `
    <div class="drawer-backdrop ${state.cartOpen ? 'is-open' : ''}" data-action="close-modals"></div>
    <aside class="cart-drawer ${state.cartOpen ? 'is-open' : ''}" role="dialog" aria-modal="true" aria-label="${t('cart')}">
      <div class="drawer-head">
        <h2>${t('cart')}</h2>
        <button class="icon-close" data-action="close-cart" aria-label="${t('close')}">${icon('close')}</button>
      </div>
      <div class="cart-items">
        ${state.cart.length ? state.cart.map(renderCartLine).join('') : `<p>${t('cartEmpty')}</p>`}
      </div>
      <div class="drawer-foot">
        <div class="subtotal-row"><strong>${t('subtotal')}</strong><strong>${formatPrice(cartSubtotal())}</strong></div>
        <button class="button" style="width:100%" data-action="checkout">${t('checkout')}</button>
      </div>
    </aside>
  `;
}

function renderCartLine(line, index) {
  const product = products.find(p => p.slug === line.slug) || products[0];
  return `
    <div class="cart-line">
      <img src="${image(product.image)}" alt="${productName(product)}" />
      <div>
        <h3>${productName(product)}</h3>
        <div class="cart-meta">${sizeLabel(line.size || product.sizes[0])} · ${t(product.finishes[line.finish] || product.finishes[0])} · ${t('qty')} ${line.qty}</div>
        <strong>${formatPrice(product.price * line.qty)}</strong>
      </div>
      <button class="remove-cart" data-remove-cart="${index}">${t('remove')}</button>
    </div>
  `;
}

function renderLightbox(route) {
  let src = '';
  if (route.page === 'product') {
    const product = products.find(item => item.slug === route.slug) || products[0];
    src = image((product.gallery || [product.image])[state.selectedImage] || product.image);
  }
  return `
    <div class="lightbox ${state.lightboxOpen ? 'is-open' : ''}" role="dialog" aria-modal="true">
      <button class="icon-close" data-action="close-lightbox" aria-label="${t('close')}">${icon('close')}</button>
      ${src ? `<img src="${src}" alt="Expanded product image" />` : ''}
    </div>
  `;
}

function cartCount() {
  return state.cart.reduce((sum, line) => sum + line.qty, 0);
}

function cartSubtotal() {
  return state.cart.reduce((sum, line) => {
    const product = products.find(p => p.slug === line.slug);
    return sum + (product ? product.price * line.qty : 0);
  }, 0);
}

function attachEvents() {
  document.querySelectorAll('[data-route]').forEach(button => {
    button.addEventListener('click', () => {
      state.mobileOpen = false;
      state.searchOpen = false;
      state.cartOpen = false;
      state.lightboxOpen = false;
      if (button.dataset.route?.startsWith('product/')) resetProductState();
      go(button.dataset.route);
    });
  });

  document.querySelectorAll('[data-product]').forEach(button => {
    button.addEventListener('click', () => {
      state.searchOpen = false;
      state.cartOpen = false;
      state.mobileOpen = false;
      resetProductState();
      go(`product/${button.dataset.product}`);
    });
  });

  document.querySelector('[data-action="toggle-menu"]')?.addEventListener('click', () => {
    state.mobileOpen = !state.mobileOpen;
    renderApp();
  });

  document.querySelector('[data-action="toggle-lang"]')?.addEventListener('click', () => {
    state.lang = state.lang === 'en' ? 'fr' : 'en';
    saveStorage();
    renderApp();
  });

  document.querySelector('[data-action="open-search"]')?.addEventListener('click', () => {
    state.searchOpen = true;
    state.cartOpen = false;
    renderApp();
  });

  document.querySelector('[data-action="open-cart"]')?.addEventListener('click', () => {
    state.cartOpen = true;
    state.searchOpen = false;
    renderApp();
  });

  document.querySelectorAll('[data-action="close-modals"], [data-action="close-search"], [data-action="close-cart"]').forEach(button => {
    button.addEventListener('click', () => {
      state.searchOpen = false;
      state.cartOpen = false;
      renderApp();
    });
  });

  document.querySelector('[data-action="close-lightbox"]')?.addEventListener('click', () => {
    state.lightboxOpen = false;
    renderApp();
  });

  document.querySelector('[data-action="open-lightbox"]')?.addEventListener('click', () => {
    state.lightboxOpen = true;
    renderApp();
  });

  document.onkeydown = handleEscape;

  attachCategorySlideshows();
  attachListingEvents();
  attachProductEvents();
  attachScrollReveals();
  attachSearchEvents();
  attachFooterEvents();
}

function handleEscape(event) {
  if (event.key === 'Escape' && (state.searchOpen || state.cartOpen || state.lightboxOpen)) {
    state.searchOpen = false;
    state.cartOpen = false;
    state.lightboxOpen = false;
    renderApp();
  }
}

function attachCategorySlideshows() {
  document.querySelectorAll('.category-card').forEach(card => {
    const images = [...card.querySelectorAll('.slide-img')];
    const dots = [...card.querySelectorAll('.dot')];
    let current = 0;
    const show = index => {
      current = index;
      images.forEach((img, i) => img.classList.toggle('is-active', i === current));
      dots.forEach((dot, i) => dot.classList.toggle('is-active', i === current));
    };
    const start = () => {
      if (card.dataset.running === 'true') return;
      card.dataset.running = 'true';
      show((current + 1) % images.length);
      const timer = window.setInterval(() => show((current + 1) % images.length), 950);
      state.slideshowTimers.push(timer);
      card.dataset.timer = timer;
    };
    const stop = () => {
      card.dataset.running = 'false';
      window.clearInterval(Number(card.dataset.timer));
      current = 0;
      show(0);
    };
    card.addEventListener('mouseenter', start);
    card.addEventListener('focus', start);
    card.addEventListener('mouseleave', stop);
    card.addEventListener('blur', stop);
  });
}

function clearSlideshows() {
  state.slideshowTimers.forEach(timer => clearInterval(timer));
  state.slideshowTimers = [];
}

function attachListingEvents() {
  document.querySelectorAll('[data-filter]').forEach(button => {
    button.addEventListener('click', event => {
      event.stopPropagation();
      const value = button.dataset.filter;
      if (value === 'all') {
        state.filter = { material: 'all', color: 'all', newOnly: false };
      } else if (value === 'new') {
        state.filter.newOnly = !state.filter.newOnly;
      } else if (value.startsWith('material:')) {
        const material = value.split(':')[1];
        state.filter.material = state.filter.material === material ? 'all' : material;
      } else if (value.startsWith('color:')) {
        const color = value.split(':')[1];
        state.filter.color = state.filter.color === color ? 'all' : color;
      }
      renderApp();
    });
  });

  document.getElementById('sortSelect')?.addEventListener('change', event => {
    state.sort = event.target.value;
    renderApp();
  });

  document.querySelectorAll('[data-subcategory]').forEach(button => {
    button.addEventListener('click', () => {
      showToast(t('browseCategories'), button.textContent.trim());
    });
  });
}

function attachProductEvents() {
  document.querySelectorAll('[data-gallery-index]').forEach(button => {
    button.addEventListener('click', () => {
      state.selectedImage = Number(button.dataset.galleryIndex);
      renderApp();
    });
  });

  document.querySelectorAll('[data-finish-index]').forEach(button => {
    button.addEventListener('click', () => {
      state.selectedFinish = Number(button.dataset.finishIndex);
      renderApp();
    });
  });

  document.querySelectorAll('[data-top-index]').forEach(button => {
    button.addEventListener('click', () => {
      state.selectedTop = Number(button.dataset.topIndex);
      renderApp();
    });
  });

  document.querySelectorAll('[data-size-index]').forEach(button => {
    button.addEventListener('click', () => {
      state.selectedSize = Number(button.dataset.sizeIndex);
      renderApp();
    });
  });

  document.querySelector('[data-action="qty-minus"]')?.addEventListener('click', () => {
    state.quantity = Math.max(1, state.quantity - 1);
    renderApp();
  });

  document.querySelector('[data-action="qty-plus"]')?.addEventListener('click', () => {
    state.quantity = Math.min(9, state.quantity + 1);
    renderApp();
  });

  document.querySelector('[data-action="add-cart"]')?.addEventListener('click', button => {
    const slug = button.currentTarget.dataset.productSlug;
    const product = products.find(p => p.slug === slug);
    const size = product?.sizes[state.selectedSize] || '';
    const existing = state.cart.find(line => line.slug === slug && line.size === size && line.finish === state.selectedFinish);
    if (existing) existing.qty += state.quantity;
    else state.cart.push({ slug, qty: state.quantity, size, finish: state.selectedFinish });
    saveStorage();
    state.cartOpen = true;
    renderApp();
    showToast(t('addedToBag'), t('addedBody', { name: productName(product) }));
  });

  document.querySelector('[data-action="toggle-save"]')?.addEventListener('click', button => {
    const slug = button.currentTarget.dataset.productSlug;
    if (state.saved.has(slug)) {
      state.saved.delete(slug);
      saveStorage();
      renderApp();
      showToast(t('unsavedToast'), '');
      return;
    } else {
      state.saved.add(slug);
      saveStorage();
      renderApp();
      showToast(t('savedToast'), '');
      return;
    }
  });

  document.querySelectorAll('[data-accordion]').forEach(button => {
    button.addEventListener('click', () => {
      const key = button.dataset.accordion;
      if (state.openAccordions.has(key)) state.openAccordions.delete(key);
      else state.openAccordions.add(key);
      renderApp();
    });
  });

  document.querySelectorAll('[data-remove-cart]').forEach(button => {
    button.addEventListener('click', () => {
      state.cart.splice(Number(button.dataset.removeCart), 1);
      saveStorage();
      renderApp();
      showToast(t('removedFromBag'), '');
    });
  });

  document.querySelector('[data-action="checkout"]')?.addEventListener('click', () => {
    showToast(t('checkout'), state.lang === 'fr' ? 'Prototype interactif — aucune transaction réelle.' : 'Interactive prototype — no real transaction.');
  });
}


function attachScrollReveals() {
  const elements = document.querySelectorAll('.scroll-reveal');
  if (!elements.length) return;

  if (!('IntersectionObserver' in window)) {
    elements.forEach(element => element.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16, rootMargin: '0px 0px -8% 0px' });

  elements.forEach((element, index) => {
    element.style.setProperty('--reveal-delay', `${Math.min(index * 45, 260)}ms`);
    observer.observe(element);
  });
}

function attachSearchEvents() {
  const input = document.getElementById('searchInput');
  input?.addEventListener('input', event => {
    state.searchQuery = event.target.value;
    const results = document.getElementById('searchResults');
    if (results) {
      results.innerHTML = renderSearchResults(state.searchQuery);
      results.querySelectorAll('[data-product]').forEach(button => {
        button.addEventListener('click', () => {
          state.searchOpen = false;
          resetProductState();
          go(`product/${button.dataset.product}`);
        });
      });
    }
  });
}

function attachFooterEvents() {
  document.querySelector('[data-action="newsletter"]')?.addEventListener('submit', event => {
    event.preventDefault();
    event.currentTarget.reset();
    showToast(t('newsletter'), t('newsletterThanks'));
  });

  document.querySelectorAll('[data-action="footer-toast"]').forEach(button => {
    button.addEventListener('click', () => showToast(button.textContent.trim(), state.lang === 'fr' ? 'Section de démonstration.' : 'Demo section.'));
  });
}

function showToast(title, body = '') {
  const wrap = document.getElementById('toastWrap');
  if (!wrap) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<div class="toast-kicker">${title}</div>${body ? `<p>${body}</p>` : ''}`;
  wrap.appendChild(toast);
  setTimeout(() => toast.remove(), 2800);
}

window.addEventListener('hashchange', () => {
  state.mobileOpen = false;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  renderApp();
  finishPageTransition();
});

renderApp();
finishPageTransition();
