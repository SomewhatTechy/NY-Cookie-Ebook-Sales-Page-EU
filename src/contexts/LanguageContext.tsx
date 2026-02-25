import React, { createContext, useContext, useState, useMemo, ReactNode } from 'react';

type Language = 'fr' | 'de' | 'it' | 'nl' | 'pl';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    // Preloader
    preloaderText: "Chargement de votre succès sucré...",
    
    // Sticky Bar
    stickyCtaText: "Je veux ma copie",
    priceIncreasesTo: "L'offre spéciale se termine dans",
    
    // Hero
    heroTitle: "Apprenez à Faire des Cookies Style New York Parfaits — Épais, Hauts et Fondants Dès la Première Fournée",
    heroSubtitle: "27 recettes pas à pas avec des temps, températures et techniques exactes pour un cœur fondant et une finition de pâtisserie premium — même si vous êtes débutante",
    
    // Effort Minimizers (Hormozi)
    effortMinimizer1: "Seulement $30 pour commencer",
    effortMinimizer2: "Pas d'équipement spécial",
    effortMinimizer3: "2 heures pour le premier lot",
    watchVideoPrompt: "Regardez la Vidéo Complète",
    heroCta: "Je veux ma copie maintenant",
    instantDownload: "Téléchargement instantané",
    beginnerFriendly: "Idéal pour débutants",
    secureCheckoutHotmart: "Paiement sécurisé via Hotmart",

    // Pain Points
    painIdentity: "Il y a deux types de femmes qui aiment pâtisser : celles qui suivent des recettes au hasard en espérant le meilleur... et celles qui apprennent la méthode derrière des résultats de pâtisserie. Vous savez déjà laquelle vous voulez être.",
    painEyebrow: "Ça vous parle?",
    painTitle: "Ça vous arrive quand vous essayez de faire des cookies style New York ?",
    painSubtitle: "Ce sont les frustrations les plus courantes avant de maîtriser des cookies épais, moelleux et de qualité premium.",
    painQ1: "Vos cookies s'étalent et restent plats au lieu d'être hauts et épais ?",
    painQ2: "Vous perdez du temps et des ingrédients avec des recettes internet qui ne marchent jamais?",
    painQ3: "Le centre n'est jamais fondant — soit trop cru, soit trop sec ?",
    painQ4: "Vous voulez des cookies qui marchent À CHAQUE FOIS — avec des résultats constants et dignes d'une pâtisserie ?",
    painQ5: "Le résultat change chaque fois que vous refaites la même recette ?",
    painQ6: "Quand quelque chose ne va pas, vous ne savez pas quoi ajuster ?",
    painBridge: "Ce n'est pas un manque de talent. C'est un manque de méthode.",
    painBridgeCta: "Cet ebook vous donne la méthode exacte pour des résultats style New York constants.",

    // Transformation Section (Brunson - Old Way vs New Way)
    transformEyebrow: "Le Secret Que Personne Ne Vous Dit",
    transformTitle: "Il y a Deux Façons d'Apprendre les Cookies Style New York",
    transformSubtitle: "Le chemin frustrant... ou le chemin confiant",
    oldWayLabel: "L'Ancien Chemin",
    newWayLabel: "Le Nouveau Chemin",
    transform1Old: "Suivre des recettes au hasard sur internet en espérant que cette fois ça marche",
    transform1New: "Savoir exactement quoi faire — et se sentir confiante dès votre première fournée",
    transform2Old: "Deviner ce qui n'a pas marché et continuer à répéter les mêmes erreurs",
    transform2New: "Comprendre le pourquoi de chaque étape — pour corriger n'importe quoi en minutes",
    transform3Old: "Dépenser $500-$2000 en cours en espérant que quelqu'un explique enfin clairement",
    transform3New: "Passer de débutante à qualité pâtisserie pour moins de $10 — garanti",
    transformCta: "C'est la méthode qui transforme les doutes en certitude.",
    
    // What You Get
    wygTag: "TOUT CE QUI EST INCLUS",
    wygTitle: "Ce Que Vous Recevrez Aujourd'hui (Et Pourrez Utiliser Immédiatement)",
    wygSubtitle: "Un système complet de cookies style New York pour la régularité, la confiance et des résultats reproductibles.",
    wyg1Title: "27 Recettes NY (Testées et Vendables)",
    wyg1Desc: "Cookies épais, moelleux à l'intérieur avec des garnitures irrésistibles - ceux que les gens achètent sans réfléchir.",
    wyg2Title: "La Méthode NY Pas à Pas",
    wyg2Desc: "Temps, températures et techniques exactes pour obtenir hauteur, texture et cœur fondant - sans deviner.",
    wyg3Title: "Plan de Vente Maison",
    wyg3Desc: "Quoi vendre en premier, comment présenter et obtenir vos premières ventes avec un plan simple et répétable.",
    wyg4Title: "La Carte Complète: De Votre Cuisine à un Produit Premium",
    wyg4Desc: "Pourquoi ces cookies ont l'air sortis d'une vitrine, comment ils doivent être et comment les transformer en offre qui fait revenir les clients.",
    wyg5Title: "Guide des Prix (Pour Bien Facturer)",
    wyg5Desc: "Comment calculer les coûts, fixer les prix et augmenter votre panier moyen en confiance - avec des marges réelles et une logique simple.",
    wyg6Title: "Guide Fournisseurs + Substitutions",
    wyg6Desc: "Comment trouver des ingrédients de qualité localement (et quoi utiliser si vous ne trouvez pas quelque chose).",
    wyg7Title: "Emballage Qui Vend",
    wyg7Desc: "Présentation qui justifie un prix premium et rend vos cookies parfaits pour offrir et partager.",
    wyg8Title: "Commencez Sans Bloquer",
    wyg8Desc: "Mindset + checklist de lancement pour passer de je veux à j'ai commencé sans se compliquer.",
    wyg9Title: "Collection de Cookies Thématiques",
    wyg9Desc: "Idées saisonnières et dates clés pour avoir de la variété et des ventes toute l'année.",
    wyg10Title: "Personnalisation + Résolution de Problèmes",
    wyg10Desc: "Garnitures, variations de saveurs et ajustements rapides pour corriger texture, hauteur et cuisson en minutes.",
    wyg11Title: "Section Vegan Style NY (5 Recettes)",
    wyg11Desc: "Options vegan centrées sur une vraie texture - pas des substitutions aléatoires.",
    wyg12Title: "Business Sans Avoir l'Air de Vendre",
    wyg12Desc: "Coûts, photos, emballage et offre: comment vendre sans supplier, sans insister et sans se sentir mal à l'aise.",
    wygBridgeTitle: "Et Si Vous Décidez de Les Vendre...",
    wygBridgeText: "Beaucoup de gens commencent par faire des cookies chez eux. Puis les amis commencent à demander des boîtes. C'est pourquoi, si vous le souhaitez, le guide inclut aussi :",

    // Bonuses
    bonusTag: "+ $135.96 DE BONUS",
    bonusesTitle: "Bonus Exclusifs Inclus",
    bonusesSubtitle: "Bonus d'une valeur de $135.96+ - à vous aujourd'hui sans frais supplémentaires",
    bonus1Title: "Mini Livre de Recettes: Desserts Sains pour Enfants",
    bonus1Desc: "15 recettes nutritives et délicieuses que les mamans refont (et recommandent).",
    bonus1Value: "$27",
    bonus2Title: "Guide: Desserts Sans Four",
    bonus2Desc: "Options délicieuses sans four - idéales pour la chaleur ou peu d'équipement.",
    bonus2Value: "$17",
    bonus3Title: "Combinaisons de Saveurs Qui Vendent",
    bonus3Desc: "Combos gagnants + idées de garnitures/toppings pour des commandes répétées.",
    bonus3Value: "$13",
    bonus4Title: "Encyclopédie de 200 Recettes Exclusives",
    bonus4Desc: "200 idées pour élargir votre menu sans jamais être à court d'options.",
    bonus4Value: "$24.99",
    bonus5Title: "Desserts Vegan Faits Maison",
    bonus5Desc: "Desserts vegan avec un vrai goût et une super texture.",
    bonus5Value: "$17.99",
    bonus6Title: "Desserts Frais Réduits en Sucre",
    bonus6Desc: "Desserts froids plus légers - sans perdre l'envie.",
    bonus6Value: "$17.99",
    bonus7Title: "L'Art et la Science de Vendre",
    bonus7Desc: "Présentation, noms et offre pour que ça paraisse premium et clair.",
    bonus7Value: "$17.99",
    bonus8Title: "Desserts Adaptés aux Allergies",
    bonus8Desc: "Guide des adaptations courantes. Toujours vérifier les allergies spécifiques.",
    bonus8Value: "BONUS EXTRA",
    bonusesTotalAmount: "$135.96+",
    value: "Valeur:",
    yoursFree: "GRATUIT pour vous!",
    totalBonusValue: "Valeur totale des bonus",
    freeToday: "GRATUIT quand vous commandez aujourd'hui!",
    
    // Price Drop - Active Countdown
    offerEndsIn: "Cette offre spéciale se termine dans:",
    hours: "Heures",
    minutes: "Min",
    seconds: "Sec",
    originalPrice: "$27",
    currentPrice: "$6.97",
    priceNote: "Paiement unique - Accès instantané",
    priceDropReason: "Prix de lancement actif aujourd'hui: se termine après 7 achats.",
    priceDropTitle: "Offre Spéciale Limitée",
    priceDropSubtitle: "Prix de lancement actif - obtenez votre copie avant la fin du temps",
    priceDropCta: "Je veux ma copie maintenant",

    // Price Drop - Expired State (kept for compatibility)
    priceDropTitleExpired: "Offre Spéciale Limitée",
    priceDropSubtitleExpired: "Obtenez votre copie au prix de lancement avant qu'il ne soit trop tard.",
    offerExpiredMessage: "Offre limitée dans le temps",
    
    // Pricing (legacy keys)
    pricingTitle: "Offre Spéciale Limitée",
    pricingSubtitle: "Un petit investissement pour lancer votre business aujourd'hui",
    pricingBefore: "Prix normal",
    pricingToday: "Aujourd'hui seulement",
    getInstantAccess: "Je veux ma copie maintenant",
    secureCheckout: "Paiement sécurisé",
    instantDelivery: "Livraison instantanée",
    availableWorldwide: "Disponible dans le monde entier",
    
    // Delivery
    deliveryTitle: "Comment Ça Marche",
    deliverySubtitle: "Accès instantané en 3 étapes simples",
    step: "Étape",
    deliveryStep1Title: "Complétez votre achat en sécurité",
    deliveryStep1Desc: "Paiement 100% sécurisé via Hotmart",
    deliveryStep2Title: "Vérifiez votre email",
    deliveryStep2Desc: "Vous recevrez un accès instantané dans votre boîte de réception",
    deliveryStep3Title: "Téléchargez et commencez",
    deliveryStep3Desc: "Suivez les étapes et faites votre première fournée",
    deviceCompatibility: "Compatible mobile, tablette et PC",
    
    // Testimonials
    testimonialsTitle: "Regardez Ce Que D'autres Pâtissiers Maison Disent",
    testimonialsSubtitle: "Des femmes comme vous qui ont commencé à pâtisser et ne se sont jamais arrêtées",
    testimonial1: "J'ai fait ma première vente en seulement 3 jours! Les recettes sont claires et le plan de vente m'a donné la confiance dont j'avais besoin. J'ai déjà des clientes qui repassent commande.",
    testimonial2: "Je n'aurais jamais pensé pouvoir vendre mes cookies. Maintenant je reçois des commandes chaque week-end et mes enfants sont fiers de leur maman entrepreneuse.",
    testimonial3: "J'ai récupéré le coût de l'ebook dès mon premier lot. La méthode de cuisson est de l'or pur.",
    testimonial4: "J'ai commencé avec $25 d'ingrédients et zéro expérience. Maintenant mes cookies sont les plus demandés de ma zone.",
    testimonial5: "Ces recettes sont incroyables! La texture style NYC était exactement ce que je cherchais. J'ai déjà 12 clients qui commandent chaque semaine.",
    testimonial6: "J'ai commencé comme hobby en vendant aux voisins. 4 mois plus tard c'est devenu mon activité régulière du week-end.",
    testimonial7: "Guide brillant! Le pas à pas a rendu tout facile. Dès la première semaine j'avais des commandes sans expérience préalable.",
    testimonial8: "Recettes incroyables et un plan business super clair! Je reçois déjà des commandes régulières et j'ai commencé il y a seulement 3 semaines.",
    testimonial9: "Je me sens enfin confiante pour vendre mes cookies. Le guide des prix m'a aidée à facturer leur vraie valeur au lieu de brader mon travail.",

    // Country names
    countryFrance: "France",
    countryBelgium: "Belgique",
    countrySwitzerland: "Suisse",
    countryGermany: "Allemagne",
    countryAustria: "Autriche",
    countryItaly: "Italie",
    countryNetherlands: "Pays-Bas",
    countryPoland: "Pologne",
    countryLuxembourg: "Luxembourg",

    // Guarantee
    guaranteeTitle: "La Garantie de Confiance Première Fournée",
    guaranteeSubtitle: "Vous Ne Risquez Rien",
    guaranteeText: "Téléchargez l'ebook. Faites les recettes. Suivez la méthode. Si vous ne vous sentez pas confiante pour faire des cookies style New York épais et fondants chez vous, demandez votre remboursement directement sur Hotmart — ils le traitent en 24-48 heures. Sans questions, sans complications. Vous ne risquez rien.",
    guaranteeCta: "Je veux ma copie maintenant",

    // FAQ
    faqTitle: "Questions Fréquentes",
    faq1Question: "Ai-je besoin d'expérience en pâtisserie?",
    faq1Answer: "Non. La méthode est faite pour les débutants. Chaque recette est détaillée pas à pas avec des astuces pour éviter les erreurs courantes.",
    faq2Question: "Est-ce que ça inclut un guide pour vendre (optionnel) ?",
    faq2Answer: "Oui. D'abord vous apprenez la méthode et les recettes. Et si vous décidez de vendre, le guide inclut les prix, les offres simples, l'emballage et comment obtenir vos premières commandes sans insister.",
    faq3Question: "C'est un téléchargement instantané?",
    faq3Answer: "Oui. Après l'achat via Hotmart, vous recevez un accès instantané par email.",
    faq4Question: "Ça marchera dans mon pays?",
    faq4Answer: "Oui. Les recettes utilisent des ingrédients courants et nous incluons des alternatives. Les principes business fonctionnent partout.",
    faq5Question: "De quel équipement ai-je besoin?",
    faq5Answer: "Un four ménager, des bols, un batteur (manuel ou électrique) et des plaques de cuisson - équipement basique.",
    faq6Question: "Combien d'argent faut-il pour commencer?",
    faq6Answer: "Environ $15-$30 d'ingrédients selon votre localisation et ce que vous avez déjà chez vous.",
    faq7Question: "Ai-je besoin d'un four professionnel?",
    faq7Answer: "Non. La méthode est optimisée pour les fours domestiques standards.",
    faq8Question: "Comment accéder aux bonus?",
    faq8Answer: "Ils sont livrés avec l'ebook - téléchargement instantané dans le même email.",
    faq9Question: "Y a-t-il un abonnement ou des frais mensuels?",
    faq9Answer: "Non. Paiement unique. Le contenu est à vous pour toujours.",
    faq10Question: "Je peux vendre en ligne ou seulement localement?",
    faq10Answer: "Les deux. Nous couvrons les ventes locales et comment étendre aux commandes en ligne et livraisons.",
    faq11Question: "Les recettes conviennent-elles à la vente commerciale?",
    faq11Answer: "Oui. Elles sont conçues pour la production et la vente, avec des conseils sur les coûts et les marges.",
    faq12Question: "Y a-t-il du support si j'ai des questions?",
    faq12Answer: "Oui. Vous aurez accès à un email de support pour les questions sur le contenu de l'ebook.",

    // Reassurance Section
    objectionsPill: "Pour acheter en toute tranquillité",
    objectionsTitle: "Tout est conçu pour que vous réussissiez",
    objectionsSubtitle: "Chaque partie de l'ebook répond aux doutes les plus courants avant de commencer.",
    objectionsLead: "Pas d'improvisation. Vous suivez un système.",

    objection1Title: "Résultats clairs dès la première fournée",
    objection1Body: "Suivez la méthode pas à pas avec des mesures, temps et processus exacts. Pas de devinettes. Pas de tests aléatoires - juste l'exécution.",
    objection1Inside: "Inclut: méthode complète + solutions aux erreurs courantes.",

    objection2Title: "Recettes qui ne gaspillent ni temps ni ingrédients",
    objection2Body: "Chaque recette est écrite clairement pour que vous reproduisiez le même résultat encore et encore - sans gaspillage.",
    objection2Inside: "Inclut: 27 recettes testées + ajustements précis.",

    objection3Title: "Un chemin clair si vous décidez de vendre",
    objection3Body: "Vous n'avez rien à inventer. Si vous décidez de vendre, suivez un plan simple de prix, d'offre et de premières commandes.",
    objection3Inside: "Inclut: guide des prix + plan de vente.",

    objection4Title: "Variété sans compliquer ni perdre en qualité",
    objection4Body: "Apprenez à créer différentes saveurs et thèmes sans changer la texture de base qui fait vendre ces cookies.",
    objection4Inside: "Inclut: idées thématiques + personnalisation.",

    objection5Title: "Options vegan avec une vraie texture",
    objection5Body: "L'accent est mis sur le même look et la même bouchée - pas des substitutions improvisées.",
    objection5Inside: "Inclut: section vegan style NY (5 recettes).",

    objection6Title: "Partager (ou vendre) avec confiance",
    objection6Body: "Vos cookies parlent d'eux-mêmes. Apprenez à les présenter joliment — et si vous voulez vendre, le plan est inclus.",
    objection6Inside: "Inclut: fondamentaux de marque, prix et présentation.",

    // Final CTA
    finalCtaTitle: "Dans 2 Heures, Votre Premier Lot Refroidira sur le Comptoir",
    finalCtaSubtitle: "Dans 2 heures, votre premier lot de cookies de qualité professionnelle refroidira sur le comptoir",
    finalCtaRecap: "Tout ce dont vous avez besoin pour seulement $6.97 :",
    finalBenefit1: "27 recettes testées et vendables",
    finalBenefit2: "Méthode complète de cookies pas à pas",
    finalBenefit3: "8 bonus exclusifs",
    finalBenefit4: "Accès instantané pour toujours",
    finalBenefit5: "Guide de vente optionnel inclus",
    finalCtaButton: "Je veux ma copie maintenant",
    finalCtaNote: "Paiement sécurisé - Accès instantané - Garantie 7 jours",
    choiceTitle: "Vous avez deux choix maintenant :",
    choiceA: "Fermer cette page. Continuer à regarder des vidéos de pâtisserie. Vous dire \"un jour peut-être.\" Dans six mois, rien n'a changé.",
    choiceB: "Commencer aujourd'hui pour $6.97. Faire votre premier lot ce soir. Les partager demain. Le week-end prochain, tout le monde veut la recette.",
    choiceQuestion: "Lequel vous ressemble le plus ?",
    finalCtaPS: "P.S. Quand vous téléchargez, allez directement au Chapitre 3 — c'est là que se trouve la recette la plus populaire. La plupart font leur premier lot le soir même.",
    futurePacingTitle: "Imaginez Ceci...",
    futurePacingText: "C'est samedi matin. Votre cuisine sent le chocolat chaud et la vanille. Sur le comptoir, 36 cookies épais style New York refroidissent parfaitement. Vous en ouvrez un — le centre est fondant et crémeux. On dirait une pâtisserie. Vous n'avez pas deviné. Vous avez suivi la méthode. Voilà à quoi peut ressembler votre premier week-end.",
    offerValidFor: "Offre spéciale valable seulement pour",

    // Footer
    footerDisclaimer: "Ce site ne fait pas partie de Facebook ou Meta. Les résultats individuels peuvent varier. Cet ebook est éducatif et ne garantit pas de revenus spécifiques.",
    footerContact: "Contact",
    footerCopyright: "2026 ECommerce Shop Cart. Tous droits réservés.",

    // Floating CTA
    floatingCta: "Je veux ma copie",
  },
  de: {
    // Preloader
    preloaderText: "Lade deinen süßen Erfolg...",
    
    // Sticky Bar
    stickyCtaText: "Ich will mein Exemplar",
    priceIncreasesTo: "Sonderangebot endet in",
    
    // Hero
    heroTitle: "Lerne Perfekte NY-Style Cookies zu Backen — Dick, Hoch und Cremig Ab der Ersten Charge",
    heroSubtitle: "27 Schritt-für-Schritt-Rezepte mit genauen Zeiten, Temperaturen und Techniken für einen cremigen Kern und Konditorei-Qualität — auch wenn du komplette Anfängerin bist",
    
    // Effort Minimizers (Hormozi)
    effortMinimizer1: "Nur $30 zum Starten",
    effortMinimizer2: "Keine Spezialausrüstung",
    effortMinimizer3: "2 Stunden für die erste Charge",
    watchVideoPrompt: "Sieh Dir das Komplette Video an",
    heroCta: "Ich will mein Exemplar jetzt",
    instantDownload: "Sofortiger Download",
    beginnerFriendly: "Anfängerfreundlich",
    secureCheckoutHotmart: "Sichere Zahlung über Hotmart",

    // Pain Points
    painIdentity: "Es gibt zwei Arten von Frauen, die das Backen lieben: die, die zufällige Rezepte ausprobieren und auf das Beste hoffen... und die, die die Methode hinter Konditorei-Ergebnissen lernen. Du weißt bereits, welche du sein willst.",
    painEyebrow: "Kommt dir das bekannt vor?",
    painTitle: "Passiert dir das, wenn du NY-Style Cookies backen willst?",
    painSubtitle: "Das sind die häufigsten Frustrationen, bevor man dicke, saftige Cookies in Premium-Qualität meistert.",
    painQ1: "Laufen deine Cookies auseinander und bleiben flach statt hoch und dick?",
    painQ2: "Du verschwendest Zeit und Zutaten mit Internet-Rezepten, die nie funktionieren?",
    painQ3: "Wird die Mitte nie cremig — entweder zu roh oder zu trocken?",
    painQ4: "Willst du Cookies, die JEDES MAL gelingen — mit konstanten Ergebnissen in Konditorei-Qualität?",
    painQ5: "Ändert sich das Ergebnis jedes Mal, wenn du dasselbe Rezept wiederholst?",
    painQ6: "Wenn etwas schiefgeht, weißt du nicht, was du anpassen sollst?",
    painBridge: "Das ist kein Mangel an Talent. Es ist ein Mangel an Struktur.",
    painBridgeCta: "Dieses Ebook gibt dir die exakte Methode für konstante NY-Style Ergebnisse.",

    // Transformation Section
    transformEyebrow: "Das Geheimnis, das Dir Niemand Verrät",
    transformTitle: "Es Gibt Zwei Wege, NY-Style Cookies Zu Lernen",
    transformSubtitle: "Der frustrierende Weg... oder der sichere Weg",
    oldWayLabel: "Der Alte Weg",
    newWayLabel: "Der Neue Weg",
    transform1Old: "Zufällige Rezepte aus dem Internet befolgen und hoffen, dass es diesmal klappt",
    transform1New: "Genau wissen, was zu tun ist — und sich ab der ersten Charge sicher fühlen",
    transform2Old: "Raten, was schiefgelaufen ist, und dieselben Fehler wiederholen",
    transform2New: "Das Warum hinter jedem Schritt verstehen — um alles in Minuten zu korrigieren",
    transform3Old: "$500-$2000 in Kurse investieren und hoffen, dass es endlich jemand verständlich erklärt",
    transform3New: "Von Anfängerin zu Konditorei-Qualität für unter $10 — garantiert",
    transformCta: "Das ist die Methode, die Raten in Wissen verwandelt.",
    
    // What You Get
    wygTag: "ALLES WAS ENTHALTEN IST",
    wygTitle: "Was Du Heute Bekommst (Und Sofort Nutzen Kannst)",
    wygSubtitle: "Ein komplettes NY-Style Cookie-System für Konstanz, Sicherheit und wiederholbare Ergebnisse.",
    wyg1Title: "27 NY-Style Rezepte (Getestet und Verkaufbar)",
    wyg1Desc: "Dicke Cookies, weich innen mit unwiderstehlichen Füllungen - die Art, die Leute ohne Nachdenken kaufen.",
    wyg2Title: "Die NY-Methode Schritt für Schritt",
    wyg2Desc: "Exakte Zeiten, Temperaturen und Techniken für Höhe, Textur und saftigen Kern - ohne Raten.",
    wyg3Title: "Verkaufsplan von Zu Hause",
    wyg3Desc: "Was zuerst verkaufen, wie präsentieren und erste Verkäufe mit einem einfachen, wiederholbaren Plan erzielen.",
    wyg4Title: "Die Komplette Karte: Von Deiner Küche zum Premium-Produkt",
    wyg4Desc: "Warum diese Cookies wie aus der Konditorei aussehen, wie sie sein sollten und wie man sie in ein Angebot verwandelt, das Kunden zurückbringt.",
    wyg5Title: "Preisguide (Um Richtig zu Berechnen)",
    wyg5Desc: "Wie man Kosten kalkuliert, Preise festlegt und sein Ticket selbstbewusst erhöht - mit echten Margen und einfacher Logik.",
    wyg6Title: "Lieferanten + Smarte Ersatzmöglichkeiten",
    wyg6Desc: "Wie man lokal Qualitäts-Zutaten findet (und was man nimmt, wenn man etwas nicht findet).",
    wyg7Title: "Verpackung Die Verkauft",
    wyg7Desc: "Präsentation, die Premium-Preise rechtfertigt und deine Cookies geschenktauglich und teilenswert macht.",
    wyg8Title: "Starte Ohne Überlegen",
    wyg8Desc: "Mindset + Start-Checkliste um von ich will zu ich habe angefangen zu kommen - ohne Komplikationen.",
    wyg9Title: "Themen-Cookie-Kollektion",
    wyg9Desc: "Saisonale Ideen und wichtige Termine für Abwechslung und Verkäufe das ganze Jahr.",
    wyg10Title: "Anpassung + Problemlösung",
    wyg10Desc: "Füllungen, Geschmacks-Upgrades und schnelle Fixes um Textur, Höhe und Backzeit in Minuten zu korrigieren.",
    wyg11Title: "NY-Style Vegane Sektion (5 Rezepte)",
    wyg11Desc: "Vegane Optionen fokussiert auf echte Textur - keine zufälligen Ersatzstoffe.",
    wyg12Title: "Business Ohne Sich Wie Ein Verkäufer Zu Fühlen",
    wyg12Desc: "Kosten, Fotos, Verpackung und Angebote - wie man verkauft ohne zu betteln, zu drängen oder sich unwohl zu fühlen.",
    wygBridgeTitle: "Und Wenn Du Sie Verkaufen Möchtest...",
    wygBridgeText: "Viele fangen an, zu Hause zu backen. Dann fragen Freunde nach Boxen. Deshalb enthält der Guide auch, wenn du möchtest:",

    // Bonuses
    bonusTag: "+ $135.96 AN BONI",
    bonusesTitle: "Exklusive Boni Inklusive",
    bonusesSubtitle: "Boni im Wert von $135.96+ - heute für dich ohne zusätzliche Kosten",
    bonus1Title: "Mini-Rezeptbuch: Gesunde Desserts für Kinder",
    bonus1Desc: "15 nahrhafte, leckere Rezepte, die Mamas wiederholen (und empfehlen).",
    bonus1Value: "$27",
    bonus2Title: "Guide: Desserts Ohne Backen",
    bonus2Desc: "Leckere Optionen ohne Ofen - ideal für heiße Tage oder wenig Ausrüstung.",
    bonus2Value: "$17",
    bonus3Title: "Geschmackskombinationen Die Verkaufen",
    bonus3Desc: "Gewinnende Kombis + Füllungs-/Topping-Ideen für wiederkehrende Bestellungen.",
    bonus3Value: "$13",
    bonus4Title: "Enzyklopädie mit 200 Exklusiven Rezepten",
    bonus4Desc: "200 Ideen um dein Menü zu erweitern ohne dass dir die Optionen ausgehen.",
    bonus4Value: "$24.99",
    bonus5Title: "Hausgemachte Vegane Desserts",
    bonus5Desc: "Vegane Desserts mit echtem Geschmack und toller Textur.",
    bonus5Value: "$17.99",
    bonus6Title: "Gekühlte Desserts Mit Weniger Zucker",
    bonus6Desc: "Leichtere kalte Desserts - ohne den Genuss-Faktor zu verlieren.",
    bonus6Value: "$17.99",
    bonus7Title: "Die Kunst und Wissenschaft des Verkaufens",
    bonus7Desc: "Präsentation, Namensgebung und Angebote damit es premium und klar wirkt.",
    bonus7Value: "$17.99",
    bonus8Title: "Allergikerfreundliche Dessert-Ideen",
    bonus8Desc: "Guide für übliche Anpassungen. Immer spezifische Allergien verifizieren.",
    bonus8Value: "EXTRA BONUS",
    bonusesTotalAmount: "$135.96+",
    value: "Wert:",
    yoursFree: "GRATIS für dich!",
    totalBonusValue: "Gesamtwert der Boni",
    freeToday: "GRATIS wenn du heute bestellst!",
    
    // Price Drop - Active Countdown
    offerEndsIn: "Dieses Sonderangebot endet in:",
    hours: "Stunden",
    minutes: "Min",
    seconds: "Sek",
    originalPrice: "$27",
    currentPrice: "$6.97",
    priceNote: "Einmalige Zahlung - Sofortiger Zugang",
    priceDropReason: "Launch-Preis heute aktiv: endet nach 7 Käufen.",
    priceDropTitle: "Zeitlich Begrenztes Sonderangebot",
    priceDropSubtitle: "Launch-Preis aktiv - sichere dir dein Exemplar bevor die Zeit abläuft",
    priceDropCta: "Ich will mein Exemplar jetzt",

    // Price Drop - Expired State (kept for compatibility)
    priceDropTitleExpired: "Zeitlich Begrenztes Sonderangebot",
    priceDropSubtitleExpired: "Sichere dir dein Exemplar zum Launch-Preis bevor es zu spät ist.",
    offerExpiredMessage: "Zeitlich begrenztes Angebot",
    
    // Pricing (legacy keys)
    pricingTitle: "Zeitlich Begrenztes Sonderangebot",
    pricingSubtitle: "Eine kleine Investition um dein Business heute zu starten",
    pricingBefore: "Normalpreis",
    pricingToday: "Nur heute",
    getInstantAccess: "Ich will mein Exemplar jetzt",
    secureCheckout: "Sichere Zahlung",
    instantDelivery: "Sofortige Lieferung",
    availableWorldwide: "Weltweit verfügbar",
    
    // Delivery
    deliveryTitle: "So Funktioniert Es",
    deliverySubtitle: "Sofortiger Zugang in 3 einfachen Schritten",
    step: "Schritt",
    deliveryStep1Title: "Schließe deinen Kauf sicher ab",
    deliveryStep1Desc: "100% sichere Zahlung über Hotmart",
    deliveryStep2Title: "Prüfe deine E-Mail",
    deliveryStep2Desc: "Du erhältst sofortigen Zugang in deinem Posteingang",
    deliveryStep3Title: "Lade herunter und starte",
    deliveryStep3Desc: "Folge den Schritten und backe deine erste Charge",
    deviceCompatibility: "Funktioniert auf Handy, Tablet und PC",
    
    // Testimonials
    testimonialsTitle: "Schau, Was Andere Hobbybäcker Sagen",
    testimonialsSubtitle: "Frauen wie du, die angefangen haben zu backen und nicht mehr aufgehört haben",
    testimonial1: "Ich habe meinen ersten Verkauf in nur 3 Tagen gemacht! Die Rezepte sind klar und der Verkaufsplan gab mir das Vertrauen, das ich brauchte. Ich habe schon Stammkundinnen.",
    testimonial2: "Ich hätte nie gedacht, dass ich meine Cookies verkaufen könnte. Jetzt bekomme ich jedes Wochenende Bestellungen und meine Kinder sind stolz auf ihre Unternehmerin-Mama.",
    testimonial3: "Ich habe die Kosten für das Ebook schon mit meiner ersten Charge wieder reingeholt. Die Backmethode ist reines Gold.",
    testimonial4: "Ich habe mit $25 an Zutaten und null Erfahrung angefangen. Jetzt sind meine Cookies die meistgefragten in meiner Gegend.",
    testimonial5: "Diese Rezepte sind unglaublich! Die NYC-Textur war genau das, was ich gesucht habe. Ich habe bereits 12 Kunden, die jede Woche bestellen.",
    testimonial6: "Ich habe als Hobby angefangen und an Nachbarn verkauft. 4 Monate später ist es meine feste Wochenend-Beschäftigung geworden.",
    testimonial7: "Brillanter Guide! Die Schritt-für-Schritt-Anleitung machte alles so einfach. In der ersten Woche hatte ich schon Bestellungen ohne vorherige Erfahrung.",
    testimonial8: "Unglaubliche Rezepte und ein super klarer Business-Plan! Ich bekomme schon regelmäßige Bestellungen und habe erst vor 3 Wochen angefangen.",
    testimonial9: "Endlich fühle ich mich sicher beim Verkaufen meiner Cookies. Der Preisguide hat mir geholfen, den richtigen Preis zu verlangen statt meine Arbeit zu verschenken.",

    // Country names
    countryFrance: "Frankreich",
    countryBelgium: "Belgien",
    countrySwitzerland: "Schweiz",
    countryGermany: "Deutschland",
    countryAustria: "Österreich",
    countryItaly: "Italien",
    countryNetherlands: "Niederlande",
    countryPoland: "Polen",
    countryLuxembourg: "Luxemburg",

    // Guarantee
    guaranteeTitle: "Die Erste-Charge-Vertrauensgarantie",
    guaranteeSubtitle: "Du Riskierst Nichts",
    guaranteeText: "Lade das Ebook herunter. Backe die Rezepte. Folge der Methode. Wenn du dich nicht sicher fühlst, dicke, saftige NY-Style Cookies zu Hause zu machen, fordere deine Rückerstattung direkt bei Hotmart an — sie bearbeiten es in 24-48 Stunden. Keine Fragen, kein Ärger. Du riskierst nichts.",
    guaranteeCta: "Ich will mein Exemplar jetzt",

    // FAQ
    faqTitle: "Häufig Gestellte Fragen",
    faq1Question: "Brauche ich Backerfahrung?",
    faq1Answer: "Nein. Die Methode ist anfängerfreundlich. Jedes Rezept ist Schritt für Schritt mit Tipps zur Vermeidung üblicher Fehler.",
    faq2Question: "Enthält es einen Verkaufsguide (optional)?",
    faq2Answer: "Ja. Zuerst lernst du die Methode und die Rezepte. Und wenn du dich entscheidest zu verkaufen, enthält es Preise, einfache Angebote, Verpackung und wie du deine ersten Bestellungen bekommst, ohne zu drängen.",
    faq3Question: "Ist es ein sofortiger Download?",
    faq3Answer: "Ja. Nach dem Kauf über Hotmart erhältst du sofortigen Zugang per E-Mail.",
    faq4Question: "Funktioniert es in meinem Land?",
    faq4Answer: "Ja. Die Rezepte nutzen übliche Zutaten und wir bieten Alternativen. Die Business-Prinzipien funktionieren überall.",
    faq5Question: "Welche Ausrüstung brauche ich?",
    faq5Answer: "Einen Haushaltsofen, Schüssel, einen Mixer (Hand oder Stand) und Backbleche - Basis-Equipment.",
    faq6Question: "Wie viel Geld brauche ich zum Starten?",
    faq6Answer: "Ungefähr $15-$30 an Zutaten je nach Standort und was du schon zu Hause hast.",
    faq7Question: "Brauche ich einen Profi-Ofen?",
    faq7Answer: "Nein. Die Methode ist für Standard-Haushaltsbacköfen optimiert.",
    faq8Question: "Wie greife ich auf die Boni zu?",
    faq8Answer: "Sie werden mit dem Ebook geliefert - sofortiger Download in derselben E-Mail.",
    faq9Question: "Gibt es ein Abo oder monatliche Gebühren?",
    faq9Answer: "Nein. Einmalige Zahlung. Deins für immer - keine versteckten Kosten.",
    faq10Question: "Kann ich online oder nur lokal verkaufen?",
    faq10Answer: "Beides. Wir behandeln lokale Verkäufe und wie man zu Online-Bestellungen und Versand erweitert.",
    faq11Question: "Sind die Rezepte für den Verkauf geeignet?",
    faq11Answer: "Ja. Sie sind für Produktion und Verkauf konzipiert, inkl. Kosten- und Margenberatung.",
    faq12Question: "Gibt es Support bei Fragen?",
    faq12Answer: "Ja. Du bekommst Zugang zu einer Support-E-Mail für Fragen zum Ebook-Inhalt.",

    // Reassurance Section
    objectionsPill: "Damit du vertrauensvoll kaufen kannst",
    objectionsTitle: "Alles ist so gestaltet, dass du Ergebnisse erzielst",
    objectionsSubtitle: "Jeder Teil des Ebooks adressiert die häufigsten Zweifel vor dem Start.",
    objectionsLead: "Kein Improvisieren. Du folgst einem System.",

    objection1Title: "Klare Ergebnisse ab der ersten Charge",
    objection1Body: "Folge der Methode Schritt für Schritt mit exakten Maßen, Zeiten und Prozessen. Kein Raten. Keine zufälligen Tests - nur Ausführung.",
    objection1Inside: "Enthält: komplette Methode + Lösungen für übliche Fehler.",

    objection2Title: "Rezepte die keine Zutaten oder Zeit verschwenden",
    objection2Body: "Jedes Rezept ist klar geschrieben, damit du das gleiche Ergebnis immer wieder erzielst - ohne Verschwendung.",
    objection2Inside: "Enthält: 27 getestete Rezepte + präzise Anpassungen.",

    objection3Title: "Ein klarer Weg, wenn du verkaufen möchtest",
    objection3Body: "Du musst nichts erfinden. Wenn du verkaufen möchtest, folge einem einfachen Plan für Preise, Angebote und erste Bestellungen.",
    objection3Inside: "Enthält: Preisguide + Verkaufsplan.",

    objection4Title: "Vielfalt ohne Qualität zu verlieren",
    objection4Body: "Lerne verschiedene Geschmäcker und Themen zu kreieren ohne die Basis-Textur zu ändern, die diese Cookies verkauft.",
    objection4Inside: "Enthält: Themen-Ideen + Anpassung.",

    objection5Title: "Vegane Optionen mit echter Textur",
    objection5Body: "Der Fokus liegt auf dem gleichen Look und Biss - keine improvisierten Ersatzstoffe.",
    objection5Inside: "Enthält: NY-Style Vegan-Sektion (5 Rezepte).",

    objection6Title: "Teilen (oder verkaufen) mit Selbstvertrauen",
    objection6Body: "Deine Cookies sprechen für sich. Lerne sie schön zu präsentieren — und wenn du verkaufen willst, ist der Plan enthalten.",
    objection6Inside: "Enthält: Marken-Grundlagen, Preise und Präsentation.",

    // Final CTA
    finalCtaTitle: "In 2 Stunden Kühlt Deine Erste Charge Auf der Theke Ab",
    finalCtaSubtitle: "In 2 Stunden kühlt deine erste Ladung Cookies in Profi-Qualität auf der Theke ab",
    finalCtaRecap: "Alles was du brauchst für nur $6.97:",
    finalBenefit1: "27 getestete, verkaufbare Rezepte",
    finalBenefit2: "Komplette Schritt-für-Schritt Cookie-Methode",
    finalBenefit3: "8 exklusive Bonus-Geschenke",
    finalBenefit4: "Sofortiger Zugang für immer",
    finalBenefit5: "Optionaler Verkaufsguide inklusive",
    finalCtaButton: "Ich will mein Exemplar jetzt",
    finalCtaNote: "Sichere Zahlung - Sofortiger Zugang - 7-Tage-Garantie",
    choiceTitle: "Du hast jetzt zwei Möglichkeiten:",
    choiceA: "Diese Seite schließen. Weiter Backvideos schauen. Dir sagen \"irgendwann mal.\" In sechs Monaten hat sich nichts geändert.",
    choiceB: "Heute für $6.97 starten. Heute Abend deine erste Charge backen. Morgen teilen. Nächstes Wochenende will jeder das Rezept.",
    choiceQuestion: "Was klingt mehr nach dir?",
    finalCtaPS: "P.S. Wenn du herunterlädst, geh direkt zu Kapitel 3 — dort ist das beliebteste Rezept. Die meisten backen ihre erste Charge noch am selben Abend.",
    futurePacingTitle: "Stell Dir Das Vor...",
    futurePacingText: "Es ist Samstagmorgen. Deine Küche riecht nach warmer Schokolade und Vanille. Auf der Theke kühlen 36 dicke NY-Style Cookies perfekt ab. Du brichst einen auf — die Mitte ist weich und cremig. Wie aus der Konditorei. Du hast nicht geraten. Du hast die Methode befolgt. So kann dein erstes Wochenende aussehen.",
    offerValidFor: "Sonderangebot nur gültig für",

    // Footer
    footerDisclaimer: "Diese Seite ist nicht Teil von Facebook oder Meta. Individuelle Ergebnisse können variieren. Dieses Ebook ist lehrreich und garantiert keine bestimmten Einnahmen.",
    footerContact: "Kontakt",
    footerCopyright: "2026 ECommerce Shop Cart. Alle Rechte vorbehalten.",

    // Floating CTA
    floatingCta: "Ich will mein Exemplar",
  },
  it: {
    // Preloader
    preloaderText: "Caricamento del tuo dolce successo...",
    
    // Sticky Bar
    stickyCtaText: "Voglio la mia copia",
    priceIncreasesTo: "L'offerta speciale termina tra",
    
    // Hero
    heroTitle: "Impara a Fare Cookies Stile New York Perfetti — Spessi, Alti e Cremosi Dal Primo Lotto",
    heroSubtitle: "27 ricette passo passo con tempi, temperature e tecniche esatte per un centro cremoso e una finitura da pasticceria premium — anche se sei una principiante assoluta",
    
    // Effort Minimizers (Hormozi)
    effortMinimizer1: "Solo $30 per iniziare",
    effortMinimizer2: "Nessuna attrezzatura speciale",
    effortMinimizer3: "2 ore per il primo lotto",
    watchVideoPrompt: "Guarda il Video Completo",
    heroCta: "Voglio la mia copia adesso",
    instantDownload: "Download istantaneo",
    beginnerFriendly: "Ideale per principianti",
    secureCheckoutHotmart: "Pagamento sicuro via Hotmart",

    // Pain Points
    painIdentity: "Ci sono due tipi di donne che amano fare dolci: quelle che seguono ricette a caso sperando nel meglio... e quelle che imparano il metodo dietro risultati da pasticceria. Sai già quale vuoi essere.",
    painEyebrow: "Ti suona familiare?",
    painTitle: "Ti succede questo quando provi a fare cookies stile New York?",
    painSubtitle: "Queste sono le frustrazioni più comuni prima di padroneggiare cookies spessi, morbidi e di qualità premium.",
    painQ1: "I tuoi cookies si allargano e restano bassi invece di essere alti e spessi?",
    painQ2: "Perdi tempo e ingredienti con ricette da internet che non funzionano mai?",
    painQ3: "Il centro non viene mai cremoso — o troppo crudo o troppo secco?",
    painQ4: "Vuoi cookies che vengano bene OGNI VOLTA — con risultati costanti e da pasticceria?",
    painQ5: "Il risultato cambia ogni volta che ripeti la stessa ricetta?",
    painQ6: "Quando qualcosa va storto, non sai cosa correggere?",
    painBridge: "Non è mancanza di talento. È mancanza di metodo.",
    painBridgeCta: "Questo ebook ti dà il metodo esatto per risultati stile New York costanti.",

    // Transformation Section
    transformEyebrow: "Il Segreto Che Nessuno Ti Dice",
    transformTitle: "Ci Sono Due Modi Per Imparare i Cookies Stile New York",
    transformSubtitle: "Il percorso frustrante... o il percorso sicuro",
    oldWayLabel: "La Vecchia Strada",
    newWayLabel: "La Nuova Strada",
    transform1Old: "Seguire ricette a caso da internet sperando che questa volta funzioni",
    transform1New: "Sapere esattamente cosa fare — e sentirti sicura dal primo lotto",
    transform2Old: "Indovinare cosa è andato storto e continuare a ripetere gli stessi errori",
    transform2New: "Capire il perché di ogni passaggio — per correggere qualsiasi cosa in minuti",
    transform3Old: "Spendere $500-$2000 in corsi sperando che qualcuno lo spieghi finalmente bene",
    transform3New: "Passare da principiante a qualità da pasticceria per meno di $10 — garantito",
    transformCta: "Questo è il metodo che trasforma i dubbi in sicurezza.",
    
    // What You Get
    wygTag: "TUTTO CIÒ CHE È INCLUSO",
    wygTitle: "Cosa Riceverai Oggi (E Potrai Usare Subito)",
    wygSubtitle: "Un sistema completo di cookies stile New York per costanza, sicurezza e risultati ripetibili.",
    wyg1Title: "27 Ricette Stile NY (Testate e Vendibili)",
    wyg1Desc: "Cookies spessi, morbidi dentro con ripieni irresistibili - quelli che la gente compra senza pensarci.",
    wyg2Title: "Il Metodo NY Passo Dopo Passo",
    wyg2Desc: "Tempi, temperature e tecniche esatte per ottenere altezza, consistenza e cuore morbido - senza indovinare.",
    wyg3Title: "Piano Vendite da Casa",
    wyg3Desc: "Cosa vendere prima, come presentare e ottenere le prime vendite con un piano semplice e ripetibile.",
    wyg4Title: "La Mappa Completa: Dalla Tua Cucina a un Prodotto Premium",
    wyg4Desc: "Perché questi cookies sembrano da vetrina, come devono essere e come trasformarli in un'offerta che fa tornare i clienti.",
    wyg5Title: "Guida ai Prezzi (Per Farti Pagare Bene)",
    wyg5Desc: "Come calcolare i costi, fissare i prezzi e aumentare lo scontrino con sicurezza - con margini reali e logica semplice.",
    wyg6Title: "Fornitori + Sostituzioni Intelligenti",
    wyg6Desc: "Come trovare ingredienti di qualità localmente (e cosa usare se non trovi qualcosa).",
    wyg7Title: "Packaging Che Vende",
    wyg7Desc: "Presentazione che giustifica prezzi premium e rende i tuoi cookies perfetti da regalare e condividere.",
    wyg8Title: "Inizia Senza Bloccarti",
    wyg8Desc: "Mindset + checklist di avvio per passare da voglio a ho iniziato senza complicarti.",
    wyg9Title: "Collezione Cookies a Tema",
    wyg9Desc: "Idee stagionali e date chiave per avere varietà e vendite tutto l'anno.",
    wyg10Title: "Personalizzazione + Risoluzione Problemi",
    wyg10Desc: "Ripieni, variazioni di gusto e aggiustamenti rapidi per correggere consistenza, altezza e cottura in minuti.",
    wyg11Title: "Sezione Vegana Stile NY (5 Ricette)",
    wyg11Desc: "Opzioni vegane focalizzate sulla vera consistenza - non sostituzioni casuali.",
    wyg12Title: "Business Senza Sembrare un Venditore",
    wyg12Desc: "Costi, foto, packaging e offerte - come vendere senza supplicare, insistere o sentirti a disagio.",
    wygBridgeTitle: "E Se Decidi di Venderli...",
    wygBridgeText: "Molti iniziano a farli a casa. Poi gli amici cominciano a chiedere scatole. Per questo, se vuoi, la guida include anche:",

    // Bonuses
    bonusTag: "+ $135.96 DI BONUS",
    bonusesTitle: "Bonus Esclusivi Inclusi",
    bonusesSubtitle: "Bonus del valore di $135.96+ - tuoi oggi senza costi aggiuntivi",
    bonus1Title: "Mini Ricettario: Dessert Sani per Bambini",
    bonus1Desc: "15 ricette nutrienti e deliziose che le mamme ripetono (e raccomandano).",
    bonus1Value: "$27",
    bonus2Title: "Guida: Dessert Senza Forno",
    bonus2Desc: "Opzioni deliziose senza forno - ideali per il caldo o poco equipaggiamento.",
    bonus2Value: "$17",
    bonus3Title: "Combinazioni di Gusti Che Vendono",
    bonus3Desc: "Combinazioni vincenti + idee per ripieni/topping per ordini ripetuti.",
    bonus3Value: "$13",
    bonus4Title: "Enciclopedia di 200 Ricette Esclusive",
    bonus4Desc: "200 idee per espandere il menu senza rimanere mai senza opzioni.",
    bonus4Value: "$24.99",
    bonus5Title: "Dessert Vegani Fatti in Casa",
    bonus5Desc: "Dessert vegani con vero sapore e ottima consistenza.",
    bonus5Value: "$17.99",
    bonus6Title: "Dessert Freddi con Meno Zucchero",
    bonus6Desc: "Dessert freddi più leggeri - senza perdere il fattore golosità.",
    bonus6Value: "$17.99",
    bonus7Title: "L'Arte e la Scienza di Vendere",
    bonus7Desc: "Presentazione, naming e offerte per sembrare premium e chiaro.",
    bonus7Value: "$17.99",
    bonus8Title: "Dessert per Allergici",
    bonus8Desc: "Guida agli adattamenti comuni. Sempre verificare allergie specifiche.",
    bonus8Value: "BONUS EXTRA",
    bonusesTotalAmount: "$135.96+",
    value: "Valore:",
    yoursFree: "GRATIS per te!",
    totalBonusValue: "Valore totale bonus",
    freeToday: "GRATIS quando ordini oggi!",
    
    // Price Drop - Active Countdown
    offerEndsIn: "Questa offerta speciale termina tra:",
    hours: "Ore",
    minutes: "Min",
    seconds: "Sec",
    originalPrice: "$27",
    currentPrice: "$6.97",
    priceNote: "Pagamento unico - Accesso istantaneo",
    priceDropReason: "Prezzo di lancio attivo oggi: si chiude dopo 7 acquisti.",
    priceDropTitle: "Offerta Speciale a Tempo Limitato",
    priceDropSubtitle: "Prezzo di lancio attivo - ottieni la tua copia prima che il tempo scada",
    priceDropCta: "Voglio la mia copia adesso",

    // Price Drop - Expired State (kept for compatibility)
    priceDropTitleExpired: "Offerta Speciale a Tempo Limitato",
    priceDropSubtitleExpired: "Ottieni la tua copia al prezzo di lancio prima che sia troppo tardi.",
    offerExpiredMessage: "Offerta a tempo limitato",
    
    // Pricing (legacy keys)
    pricingTitle: "Offerta Speciale a Tempo Limitato",
    pricingSubtitle: "Un piccolo investimento per avviare il tuo business oggi",
    pricingBefore: "Prezzo normale",
    pricingToday: "Solo oggi",
    getInstantAccess: "Voglio la mia copia adesso",
    secureCheckout: "Pagamento sicuro",
    instantDelivery: "Consegna istantanea",
    availableWorldwide: "Disponibile in tutto il mondo",
    
    // Delivery
    deliveryTitle: "Come Funziona",
    deliverySubtitle: "Accesso istantaneo in 3 semplici passaggi",
    step: "Passo",
    deliveryStep1Title: "Completa il tuo acquisto in sicurezza",
    deliveryStep1Desc: "Pagamento 100% sicuro tramite Hotmart",
    deliveryStep2Title: "Controlla la tua email",
    deliveryStep2Desc: "Riceverai accesso istantaneo nella tua casella di posta",
    deliveryStep3Title: "Scarica e inizia",
    deliveryStep3Desc: "Segui i passaggi e prepara il tuo primo lotto",
    deviceCompatibility: "Funziona su telefono, tablet e PC",
    
    // Testimonials
    testimonialsTitle: "Guarda Cosa Dicono Altri Appassionati di Pasticceria",
    testimonialsSubtitle: "Donne come te che hanno iniziato a cucinare e non si sono più fermate",
    testimonial1: "Ho fatto la mia prima vendita in soli 3 giorni! Le ricette sono chiare e il piano vendite mi ha dato la fiducia di cui avevo bisogno. Ho già clienti che riordinano.",
    testimonial2: "Non avrei mai pensato di poter vendere i miei cookies. Ora ricevo ordini ogni fine settimana e i miei figli sono orgogliosi della loro mamma imprenditrice.",
    testimonial3: "Ho recuperato il costo dell'ebook con il mio primo lotto. Il metodo di cottura è oro puro.",
    testimonial4: "Ho iniziato con $25 di ingredienti e zero esperienza. Ora i miei cookies sono i più richiesti della mia zona.",
    testimonial5: "Queste ricette sono incredibili! La consistenza stile NYC era esattamente quello che cercavo. Ho già 12 clienti che ordinano ogni settimana.",
    testimonial6: "Ho iniziato come hobby vendendo ai vicini. 4 mesi dopo è diventata la mia attività fissa del fine settimana.",
    testimonial7: "Guida brillante! Il passo dopo passo ha reso tutto facile. La prima settimana avevo già ordini senza esperienza precedente.",
    testimonial8: "Ricette incredibili e un piano business super chiaro! Ricevo già ordini regolari e ho iniziato solo 3 settimane fa.",
    testimonial9: "Finalmente mi sento sicura di vendere i miei cookies. La guida ai prezzi mi ha aiutato a farmi pagare il giusto invece di svalutare il mio lavoro.",

    // Country names
    countryFrance: "Francia",
    countryBelgium: "Belgio",
    countrySwitzerland: "Svizzera",
    countryGermany: "Germania",
    countryAustria: "Austria",
    countryItaly: "Italia",
    countryNetherlands: "Paesi Bassi",
    countryPoland: "Polonia",
    countryLuxembourg: "Lussemburgo",

    // Guarantee
    guaranteeTitle: "La Garanzia di Sicurezza del Primo Lotto",
    guaranteeSubtitle: "Non Rischi Nulla",
    guaranteeText: "Scarica l'ebook. Prepara le ricette. Segui il metodo. Se non ti senti sicura di fare cookies stile New York spessi e cremosi a casa, richiedi il rimborso direttamente su Hotmart — lo elaborano in 24-48 ore. Senza domande, senza complicazioni. Non rischi nulla.",
    guaranteeCta: "Voglio la mia copia adesso",

    // FAQ
    faqTitle: "Domande Frequenti",
    faq1Question: "Ho bisogno di esperienza in pasticceria?",
    faq1Answer: "No. Il metodo è pensato per principianti. Ogni ricetta è passo dopo passo con consigli per evitare errori comuni.",
    faq2Question: "Include una guida per vendere (opzionale)?",
    faq2Answer: "Sì. Prima impari il metodo e le ricette. E se decidi di vendere, include prezzi, offerte semplici, packaging e come ottenere i primi ordini senza insistere.",
    faq3Question: "È un download istantaneo?",
    faq3Answer: "Sì. Dopo l'acquisto tramite Hotmart, ricevi accesso istantaneo via email.",
    faq4Question: "Funzionerà nel mio paese?",
    faq4Answer: "Sì. Le ricette usano ingredienti comuni e includiamo alternative. I principi di business funzionano ovunque.",
    faq5Question: "Di che attrezzatura ho bisogno?",
    faq5Answer: "Un forno domestico, ciotole, uno sbattitore (manuale o elettrico) e teglie - attrezzatura base.",
    faq6Question: "Quanti soldi servono per iniziare?",
    faq6Answer: "Circa $15-$30 di ingredienti a seconda della tua zona e di cosa hai già a casa.",
    faq7Question: "Ho bisogno di un forno professionale?",
    faq7Answer: "No. Il metodo è ottimizzato per forni domestici standard.",
    faq8Question: "Come accedo ai bonus?",
    faq8Answer: "Vengono consegnati con l'ebook - download istantaneo nella stessa email.",
    faq9Question: "C'è un abbonamento o costi mensili?",
    faq9Answer: "No. Pagamento unico. Tuo per sempre - nessun costo nascosto.",
    faq10Question: "Posso vendere online o solo localmente?",
    faq10Answer: "Entrambi. Copriamo le vendite locali e come espandere agli ordini online e spedizioni.",
    faq11Question: "Le ricette sono adatte alla vendita commerciale?",
    faq11Answer: "Sì. Sono pensate per produzione e vendita, inclusa guida su costi e margini.",
    faq12Question: "C'è supporto se ho domande?",
    faq12Answer: "Sì. Avrai accesso a un'email di supporto per domande sul contenuto dell'ebook.",

    // Reassurance Section
    objectionsPill: "Per acquistare con tranquillità",
    objectionsTitle: "Tutto è progettato per farti ottenere risultati",
    objectionsSubtitle: "Ogni parte dell'ebook affronta i dubbi più comuni prima di iniziare.",
    objectionsLead: "Niente improvvisazione. Segui un sistema.",

    objection1Title: "Risultati chiari dal primo lotto",
    objection1Body: "Segui il metodo passo dopo passo con misure, tempi e processi esatti. Niente ipotesi. Niente test casuali - solo esecuzione.",
    objection1Inside: "Include: metodo completo + soluzioni per errori comuni.",

    objection2Title: "Ricette che non sprecano ingredienti o tempo",
    objection2Body: "Ogni ricetta è scritta chiaramente per ripetere lo stesso risultato ogni volta - senza sprechi.",
    objection2Inside: "Include: 27 ricette testate + regolazioni precise.",

    objection3Title: "Un percorso chiaro se decidi di vendere",
    objection3Body: "Non devi inventare nulla. Se decidi di vendere, segui un piano semplice di prezzi, offerta e primi ordini.",
    objection3Inside: "Include: guida ai prezzi + piano vendite.",

    objection4Title: "Varietà senza perdere qualità",
    objection4Body: "Impara a creare gusti e temi diversi senza cambiare la consistenza base che fa vendere questi cookies.",
    objection4Inside: "Include: idee a tema + personalizzazione.",

    objection5Title: "Opzioni vegane con vera consistenza",
    objection5Body: "Il focus è lo stesso aspetto e morso - non sostituzioni improvvisate.",
    objection5Inside: "Include: sezione vegana stile NY (5 ricette).",

    objection6Title: "Condividere (o vendere) con sicurezza",
    objection6Body: "I tuoi cookies parlano da soli. Impara a presentarli bene — e se vuoi vendere, il piano è incluso.",
    objection6Inside: "Include: fondamentali di brand, prezzi e presentazione.",

    // Final CTA
    finalCtaTitle: "In 2 Ore, Il Tuo Primo Lotto Si Raffredderà Sul Bancone",
    finalCtaSubtitle: "Tra 2 ore, il tuo primo lotto di cookies di qualità professionale si raffredderà sul bancone",
    finalCtaRecap: "Tutto ciò di cui hai bisogno per soli $6.97:",
    finalBenefit1: "27 ricette testate e vendibili",
    finalBenefit2: "Metodo completo di cookies passo dopo passo",
    finalBenefit3: "8 bonus esclusivi",
    finalBenefit4: "Accesso istantaneo per sempre",
    finalBenefit5: "Guida di vendita opzionale inclusa",
    finalCtaButton: "Voglio la mia copia adesso",
    finalCtaNote: "Pagamento sicuro - Accesso istantaneo - Garanzia 7 giorni",
    choiceTitle: "Hai due scelte adesso:",
    choiceA: "Chiudere questa pagina. Continuare a guardare video di pasticceria. Dirti \"forse un giorno.\" Tra sei mesi, niente è cambiato.",
    choiceB: "Iniziare oggi per $6.97. Preparare il primo lotto stasera. Condividerli domani. Il prossimo fine settimana, tutti vogliono la ricetta.",
    choiceQuestion: "Quale ti somiglia di più?",
    finalCtaPS: "P.S. Quando scarichi, vai direttamente al Capitolo 3 — lì trovi la ricetta più popolare. La maggior parte prepara il primo lotto quella sera stessa.",
    futurePacingTitle: "Immagina Questo...",
    futurePacingText: "È sabato mattina. La tua cucina profuma di cioccolato caldo e vaniglia. Sul bancone, 36 cookies spessi stile New York si raffreddano perfettamente. Ne apri uno — il centro è morbido e cremoso. Sembra da pasticceria. Non hai indovinato. Hai seguito il metodo. Così può essere il tuo primo fine settimana.",
    offerValidFor: "Offerta speciale valida solo per",

    // Footer
    footerDisclaimer: "Questo sito non fa parte di Facebook o Meta. I risultati individuali possono variare. Questo ebook è educativo e non garantisce guadagni specifici.",
    footerContact: "Contatto",
    footerCopyright: "2026 ECommerce Shop Cart. Tutti i diritti riservati.",

    // Floating CTA
    floatingCta: "Voglio la mia copia",
  },
  nl: {
    // Preloader
    preloaderText: "Je zoete succes wordt geladen...",
    
    // Sticky Bar
    stickyCtaText: "Ik wil mijn exemplaar",
    priceIncreasesTo: "Speciale aanbieding eindigt over",
    
    // Hero
    heroTitle: "Leer Perfecte NY-Style Cookies Maken — Dik, Hoog en Zacht Vanaf Je Eerste Batch",
    heroSubtitle: "27 stap-voor-stap recepten met exacte tijden, temperaturen en technieken voor een romig centrum en bakkerijkwaliteit — ook als je een complete beginner bent",
    
    // Effort Minimizers (Hormozi)
    effortMinimizer1: "Slechts $30 om te starten",
    effortMinimizer2: "Geen speciale apparatuur",
    effortMinimizer3: "2 uur voor de eerste batch",
    watchVideoPrompt: "Bekijk de Volledige Video",
    heroCta: "Ik wil mijn exemplaar nu",
    instantDownload: "Directe download",
    beginnerFriendly: "Geschikt voor beginners",
    secureCheckoutHotmart: "Veilig betalen via Hotmart",

    // Pain Points
    painIdentity: "Er zijn twee soorten vrouwen die van bakken houden: zij die willekeurige recepten volgen en op het beste hopen... en zij die de methode achter bakkerijkwaliteit leren. Je weet al welke je wilt zijn.",
    painEyebrow: "Herkenbaar?",
    painTitle: "Overkomt dit je wanneer je NY-style cookies probeert te maken?",
    painSubtitle: "Dit zijn de meest voorkomende frustraties voordat je dikke, zachte cookies van premium kwaliteit onder de knie krijgt.",
    painQ1: "Lopen je cookies uit en blijven ze plat in plaats van hoog en dik?",
    painQ2: "Verspil je tijd en ingrediënten aan internetrecepten die nooit werken?",
    painQ3: "Wordt het centrum nooit romig — of te rauw of te droog?",
    painQ4: "Wil je cookies die ELKE KEER lukken — met constante resultaten van bakkerijkwaliteit?",
    painQ5: "Verandert het resultaat elke keer dat je hetzelfde recept herhaalt?",
    painQ6: "Als er iets misgaat, weet je niet wat je moet aanpassen?",
    painBridge: "Dat is geen gebrek aan talent. Het is een gebrek aan structuur.",
    painBridgeCta: "Dit ebook geeft je de exacte methode voor constante NY-style resultaten.",

    // Transformation Section
    transformEyebrow: "Het Geheim Dat Niemand Je Vertelt",
    transformTitle: "Er Zijn Twee Manieren Om NY-Style Cookies Te Leren",
    transformSubtitle: "De frustrerende manier... of de zekere manier",
    oldWayLabel: "De Oude Manier",
    newWayLabel: "De Nieuwe Manier",
    transform1Old: "Willekeurige recepten van internet volgen en hopen dat het deze keer lukt",
    transform1New: "Precies weten wat je moet doen — en je zelfverzekerd voelen vanaf je eerste batch",
    transform2Old: "Raden wat er misging en dezelfde fouten blijven herhalen",
    transform2New: "Het waarom achter elke stap begrijpen — om alles in minuten te corrigeren",
    transform3Old: "$500-$2000 uitgeven aan cursussen en hopen dat iemand het eindelijk duidelijk uitlegt",
    transform3New: "Van beginner naar bakkerijkwaliteit voor minder dan $10 — gegarandeerd",
    transformCta: "Dit is de methode die gissen verandert in weten.",
    
    // What You Get
    wygTag: "ALLES WAT INBEGREPEN IS",
    wygTitle: "Wat Je Vandaag Krijgt (En Direct Kunt Gebruiken)",
    wygSubtitle: "Een compleet NY-style cookie-systeem voor consistentie, zelfvertrouwen en herhaalbare resultaten.",
    wyg1Title: "27 NY-Style Recepten (Getest en Verkoopbaar)",
    wyg1Desc: "Dikke cookies, zacht van binnen met onweerstaanbare vullingen - het soort dat mensen kopen zonder na te denken.",
    wyg2Title: "De NY-Methode Stap voor Stap",
    wyg2Desc: "Exacte tijden, temperaturen en technieken voor hoogte, textuur en een smeuïg centrum - zonder gissen.",
    wyg3Title: "Verkoopplan Vanuit Huis",
    wyg3Desc: "Wat eerst te verkopen, hoe te presenteren en je eerste sales te krijgen met een simpel, herhaalbaar plan.",
    wyg4Title: "De Complete Kaart: Van Je Keuken naar een Premium Product",
    wyg4Desc: "Waarom deze cookies eruitzien als uit een bakkerij, hoe ze moeten zijn en hoe je ze verandert in een aanbod dat klanten terugbrengt.",
    wyg5Title: "Prijsgids (Om Goed Te Rekenen)",
    wyg5Desc: "Hoe je kosten berekent, prijzen bepaalt en je ticket zelfverzekerd verhoogt - met echte marges en simpele logica.",
    wyg6Title: "Leveranciers + Slimme Vervangers",
    wyg6Desc: "Hoe je lokaal kwaliteitsingrediënten vindt (en wat te gebruiken als je iets niet kunt vinden).",
    wyg7Title: "Verpakking Die Verkoopt",
    wyg7Desc: "Presentatie die premium prijzen rechtvaardigt en je cookies cadeauwaardig en deelbaar maakt.",
    wyg8Title: "Start Zonder Overthinking",
    wyg8Desc: "Mindset + startchecklist om van ik wil naar ik ben begonnen te gaan - zonder complicaties.",
    wyg9Title: "Thema Cookie Collectie",
    wyg9Desc: "Seizoensgebonden ideeën en belangrijke data voor variatie en sales het hele jaar door.",
    wyg10Title: "Aanpassing + Probleemoplossing",
    wyg10Desc: "Vullingen, smaak-upgrades en snelle fixes om textuur, hoogte en baktijd in minuten te corrigeren.",
    wyg11Title: "NY-Style Vegan Sectie (5 Recepten)",
    wyg11Desc: "Vegan opties gefocust op echte textuur - geen willekeurige vervangers.",
    wyg12Title: "Business Zonder Je Als Verkoper Te Voelen",
    wyg12Desc: "Kosten, foto's, verpakking en aanbiedingen - hoe te verkopen zonder te smeken, pushen of je ongemakkelijk te voelen.",
    wygBridgeTitle: "En Als Je Ze Wilt Verkopen...",
    wygBridgeText: "Veel mensen beginnen met thuis bakken. Dan beginnen vrienden om dozen te vragen. Daarom bevat de gids ook, als je wilt:",

    // Bonuses
    bonusTag: "+ $135.96 AAN BONUSSEN",
    bonusesTitle: "Exclusieve Bonussen Inbegrepen",
    bonusesSubtitle: "Bonussen ter waarde van $135.96+ - vandaag van jou zonder extra kosten",
    bonus1Title: "Mini Receptenboek: Gezonde Desserts voor Kinderen",
    bonus1Desc: "15 voedzame, heerlijke recepten die moeders herhalen (en aanbevelen).",
    bonus1Value: "$27",
    bonus2Title: "Gids: Desserts Zonder Oven",
    bonus2Desc: "Heerlijke opties zonder oven - ideaal voor warm weer of weinig apparatuur.",
    bonus2Value: "$17",
    bonus3Title: "Smaakcombinaties Die Verkopen",
    bonus3Desc: "Winnende combo's + vulling/topping ideeën voor herhaalaankopen.",
    bonus3Value: "$13",
    bonus4Title: "Encyclopedie van 200 Exclusieve Recepten",
    bonus4Desc: "200 ideeën om je menu uit te breiden zonder ooit zonder opties te zitten.",
    bonus4Value: "$24.99",
    bonus5Title: "Zelfgemaakte Vegan Desserts",
    bonus5Desc: "Vegan desserts met echte smaak en geweldige textuur.",
    bonus5Value: "$17.99",
    bonus6Title: "Gekoelde Desserts Met Minder Suiker",
    bonus6Desc: "Lichtere koude desserts - zonder de crave-factor te verliezen.",
    bonus6Value: "$17.99",
    bonus7Title: "De Kunst en Wetenschap van Verkopen",
    bonus7Desc: "Presentatie, naamgeving en aanbiedingen zodat het premium en duidelijk voelt.",
    bonus7Value: "$17.99",
    bonus8Title: "Allergievriendelijke Dessert Ideeën",
    bonus8Desc: "Gids voor veelvoorkomende aanpassingen. Altijd specifieke allergieën verifiëren.",
    bonus8Value: "EXTRA BONUS",
    bonusesTotalAmount: "$135.96+",
    value: "Waarde:",
    yoursFree: "GRATIS voor jou!",
    totalBonusValue: "Totale bonuswaarde",
    freeToday: "GRATIS wanneer je vandaag bestelt!",
    
    // Price Drop - Active Countdown
    offerEndsIn: "Deze speciale aanbieding eindigt over:",
    hours: "Uren",
    minutes: "Min",
    seconds: "Sec",
    originalPrice: "$27",
    currentPrice: "$6.97",
    priceNote: "Eenmalige betaling - Directe toegang",
    priceDropReason: "Lanceerprijs vandaag actief: sluit na 7 aankopen.",
    priceDropTitle: "Tijdelijke Speciale Aanbieding",
    priceDropSubtitle: "Lanceerprijs actief - pak je exemplaar voordat de tijd op is",
    priceDropCta: "Ik wil mijn exemplaar nu",

    // Price Drop - Expired State (kept for compatibility)
    priceDropTitleExpired: "Tijdelijke Speciale Aanbieding",
    priceDropSubtitleExpired: "Pak je exemplaar tegen de lanceerprijs voordat het te laat is.",
    offerExpiredMessage: "Tijdelijke aanbieding",
    
    // Pricing (legacy keys)
    pricingTitle: "Tijdelijke Speciale Aanbieding",
    pricingSubtitle: "Een kleine investering om je business vandaag te starten",
    pricingBefore: "Normale prijs",
    pricingToday: "Alleen vandaag",
    getInstantAccess: "Ik wil mijn exemplaar nu",
    secureCheckout: "Veilige betaling",
    instantDelivery: "Directe levering",
    availableWorldwide: "Wereldwijd beschikbaar",
    
    // Delivery
    deliveryTitle: "Hoe Het Werkt",
    deliverySubtitle: "Directe toegang in 3 simpele stappen",
    step: "Stap",
    deliveryStep1Title: "Voltooi je aankoop veilig",
    deliveryStep1Desc: "100% veilige betaling via Hotmart",
    deliveryStep2Title: "Check je email",
    deliveryStep2Desc: "Je ontvangt directe toegang in je inbox",
    deliveryStep3Title: "Download en start",
    deliveryStep3Desc: "Volg de stappen en bak je eerste batch",
    deviceCompatibility: "Werkt op telefoon, tablet en PC",
    
    // Testimonials
    testimonialsTitle: "Kijk Wat Andere Thuisbakkers Zeggen",
    testimonialsSubtitle: "Vrouwen zoals jij die begonnen met bakken en nooit meer zijn gestopt",
    testimonial1: "Ik maakte mijn eerste sale in slechts 3 dagen! De recepten zijn duidelijk en het verkoopplan gaf me het vertrouwen dat ik nodig had. Ik heb al vaste klanten.",
    testimonial2: "Ik had nooit gedacht dat ik mijn cookies kon verkopen. Nu krijg ik elk weekend bestellingen en mijn kinderen zijn trots op hun ondernemer-mama.",
    testimonial3: "Ik verdiende de kosten van het ebook terug met mijn eerste batch. De bakmethode is puur goud.",
    testimonial4: "Ik begon met $25 aan ingrediënten en nul ervaring. Nu zijn mijn cookies de meest gevraagde in mijn gebied.",
    testimonial5: "Deze recepten zijn ongelooflijk! De NYC textuur was precies wat ik zocht. Ik heb al 12 klanten die elke week bestellen.",
    testimonial6: "Ik begon als hobby met verkopen aan buren. 4 maanden later is het mijn vaste weekendactiviteit geworden.",
    testimonial7: "Briljante gids! De stap-voor-stap maakte het zo makkelijk. In de eerste week had ik al bestellingen zonder eerdere ervaring.",
    testimonial8: "Ongelooflijke recepten en een super duidelijk businessplan! Ik krijg al regelmatige bestellingen en ik ben pas 3 weken geleden begonnen.",
    testimonial9: "Eindelijk voel ik me zelfverzekerd om mijn cookies te verkopen. De prijsgids hielp me de juiste prijs te vragen in plaats van mijn werk te onderwaarderen.",

    // Country names
    countryFrance: "Frankrijk",
    countryBelgium: "België",
    countrySwitzerland: "Zwitserland",
    countryGermany: "Duitsland",
    countryAustria: "Oostenrijk",
    countryItaly: "Italië",
    countryNetherlands: "Nederland",
    countryPoland: "Polen",
    countryLuxembourg: "Luxemburg",

    // Guarantee
    guaranteeTitle: "De Eerste-Batch Vertrouwensgarantie",
    guaranteeSubtitle: "Je Riskeert Niets",
    guaranteeText: "Download het ebook. Bak de recepten. Volg de methode. Als je je niet zelfverzekerd voelt om dikke, zachte NY-style cookies thuis te maken, vraag dan je geld terug direct bij Hotmart — zij verwerken het in 24-48 uur. Geen vragen, geen gedoe. Je riskeert niets.",
    guaranteeCta: "Ik wil mijn exemplaar nu",

    // FAQ
    faqTitle: "Veelgestelde Vragen",
    faq1Question: "Heb ik bakervaring nodig?",
    faq1Answer: "Nee. De methode is beginnervriendelijk. Elk recept is stap-voor-stap met tips om veelgemaakte fouten te voorkomen.",
    faq2Question: "Bevat het een verkoopgids (optioneel)?",
    faq2Answer: "Ja. Eerst leer je de methode en recepten. En als je besluit te verkopen, bevat het prijzen, simpele aanbiedingen, verpakking en hoe je je eerste bestellingen krijgt zonder te pushen.",
    faq3Question: "Is het een directe download?",
    faq3Answer: "Ja. Na aankoop via Hotmart ontvang je direct toegang per email.",
    faq4Question: "Werkt het in mijn land?",
    faq4Answer: "Ja. De recepten gebruiken gangbare ingrediënten en we bieden alternatieven. De businessprincipes werken overal.",
    faq5Question: "Welke apparatuur heb ik nodig?",
    faq5Answer: "Een huishoudoven, kommen, een mixer (hand of staand) en bakplaten - basisapparatuur.",
    faq6Question: "Hoeveel geld heb ik nodig om te starten?",
    faq6Answer: "Ongeveer $15-$30 aan ingrediënten afhankelijk van je locatie en wat je al thuis hebt.",
    faq7Question: "Heb ik een professionele oven nodig?",
    faq7Answer: "Nee. De methode is geoptimaliseerd voor standaard huishoudovens.",
    faq8Question: "Hoe krijg ik toegang tot de bonussen?",
    faq8Answer: "Ze worden geleverd met het ebook - directe download in dezelfde email.",
    faq9Question: "Is er een abonnement of maandelijkse kosten?",
    faq9Answer: "Nee. Eenmalige betaling. Voor altijd van jou - geen verborgen kosten.",
    faq10Question: "Kan ik online of alleen lokaal verkopen?",
    faq10Answer: "Beide. We behandelen lokale verkoop en hoe uit te breiden naar online bestellingen en verzending.",
    faq11Question: "Zijn de recepten geschikt voor commerciële verkoop?",
    faq11Answer: "Ja. Ze zijn ontworpen voor productie en verkoop, inclusief kosten- en margebegeleiding.",
    faq12Question: "Is er ondersteuning als ik vragen heb?",
    faq12Answer: "Ja. Je krijgt toegang tot een support-email voor vragen over de ebook-inhoud.",

    // Reassurance Section
    objectionsPill: "Zodat je met vertrouwen kunt kopen",
    objectionsTitle: "Alles is gebouwd zodat je resultaten krijgt",
    objectionsSubtitle: "Elk deel van het ebook adresseert de meest voorkomende twijfels voor het starten.",
    objectionsLead: "Geen improviseren. Je volgt een systeem.",

    objection1Title: "Duidelijke resultaten vanaf je eerste batch",
    objection1Body: "Volg de methode stap-voor-stap met exacte maten, tijden en processen. Geen gissen. Geen willekeurige tests - alleen uitvoering.",
    objection1Inside: "Bevat: complete methode + fixes voor veelgemaakte fouten.",

    objection2Title: "Recepten die geen ingrediënten of tijd verspillen",
    objection2Body: "Elk recept is duidelijk geschreven zodat je hetzelfde resultaat keer op keer herhaalt - zonder verspilling.",
    objection2Inside: "Bevat: 27 geteste recepten + precieze aanpassingen.",

    objection3Title: "Een duidelijk pad als je besluit te verkopen",
    objection3Body: "Je hoeft niets te verzinnen. Als je besluit te verkopen, volg een simpel plan voor prijzen, aanbod en eerste bestellingen.",
    objection3Inside: "Bevat: prijsgids + verkoopplan.",

    objection4Title: "Variatie zonder kwaliteit te verliezen",
    objection4Body: "Leer verschillende smaken en thema's te creëren zonder de basistextuur te veranderen die deze cookies verkoopt.",
    objection4Inside: "Bevat: thema-ideeën + aanpassing.",

    objection5Title: "Vegan opties met echte textuur",
    objection5Body: "De focus is dezelfde look en bite - geen geïmproviseerde vervangers.",
    objection5Inside: "Bevat: NY-style vegan sectie (5 recepten).",

    objection6Title: "Delen (of verkopen) met zelfvertrouwen",
    objection6Body: "Je cookies spreken voor zich. Leer ze mooi te presenteren — en als je wilt verkopen, is het plan inbegrepen.",
    objection6Inside: "Bevat: merkfundamenten, prijzen en presentatie.",

    // Final CTA
    finalCtaTitle: "Over 2 Uur Koelt Je Eerste Batch Af Op Het Aanrecht",
    finalCtaSubtitle: "Over 2 uur koelt je eerste batch professionele cookies af op het aanrecht",
    finalCtaRecap: "Alles wat je nodig hebt voor slechts $6.97:",
    finalBenefit1: "27 geteste, verkoopbare recepten",
    finalBenefit2: "Complete stap-voor-stap cookie-methode",
    finalBenefit3: "8 exclusieve bonuscadeaus",
    finalBenefit4: "Directe toegang voor altijd",
    finalBenefit5: "Optionele verkoopgids inbegrepen",
    finalCtaButton: "Ik wil mijn exemplaar nu",
    finalCtaNote: "Veilige betaling - Directe toegang - 7-dagen garantie",
    choiceTitle: "Je hebt nu twee keuzes:",
    choiceA: "Deze pagina sluiten. Verder bakvideo's kijken. Jezelf vertellen \"misschien ooit.\" Over zes maanden is er niets veranderd.",
    choiceB: "Vandaag beginnen voor $6.97. Vanavond je eerste batch bakken. Morgen delen. Volgend weekend wil iedereen het recept.",
    choiceQuestion: "Welke klinkt meer als jij?",
    finalCtaPS: "P.S. Als je downloadt, ga dan direct naar Hoofdstuk 3 — daar staat het populairste recept. De meesten bakken hun eerste batch diezelfde avond.",
    futurePacingTitle: "Stel Je Dit Voor...",
    futurePacingText: "Het is zaterdagochtend. Je keuken ruikt naar warme chocolade en vanille. Op het aanrecht koelen 36 dikke NY-style cookies perfect af. Je breekt er een open — het centrum is zacht en romig. Het lijkt uit een bakkerij. Je hebt niet geraden. Je volgde de methode. Zo kan jouw eerste weekend eruitzien.",
    offerValidFor: "Speciale aanbieding alleen geldig voor",

    // Footer
    footerDisclaimer: "Deze site maakt geen deel uit van Facebook of Meta. Individuele resultaten kunnen variëren. Dit ebook is educatief en garandeert geen specifiek inkomen.",
    footerContact: "Contact",
    footerCopyright: "2026 ECommerce Shop Cart. Alle rechten voorbehouden.",

    // Floating CTA
    floatingCta: "Ik wil mijn exemplaar",
  },
  pl: {
    // Preloader
    preloaderText: "Ładowanie Twojego słodkiego sukcesu...",
    
    // Sticky Bar
    stickyCtaText: "Chcę moją kopię",
    priceIncreasesTo: "Oferta specjalna kończy się za",
    
    // Hero
    heroTitle: "Naucz Się Piec Perfekcyjne Ciasteczka w Stylu NY — Grube, Wysokie i Kremowe Od Pierwszej Partii",
    heroSubtitle: "27 przepisów krok po kroku z dokładnymi czasami, temperaturami i technikami na kremowe wnętrze i wykończenie jak z cukierni — nawet jeśli jesteś zupełną początkującą",
    
    // Effort Minimizers (Hormozi)
    effortMinimizer1: "Tylko $30 na start",
    effortMinimizer2: "Bez specjalnego sprzętu",
    effortMinimizer3: "2 godziny na pierwszą partię",
    watchVideoPrompt: "Obejrzyj Pełne Wideo",
    heroCta: "Chcę moją kopię teraz",
    instantDownload: "Natychmiastowe pobranie",
    beginnerFriendly: "Przyjazne dla początkujących",
    secureCheckoutHotmart: "Bezpieczna płatność przez Hotmart",

    // Pain Points
    painIdentity: "Są dwa rodzaje kobiet, które kochają piec: te, które próbują losowych przepisów i mają nadzieję na najlepsze... i te, które uczą się metody stojącej za wynikami jak z cukierni. Już wiesz, którą chcesz być.",
    painEyebrow: "Brzmi znajomo?",
    painTitle: "Zdarza ci się to, gdy próbujesz piec ciasteczka w stylu New York?",
    painSubtitle: "To są najczęstsze frustracje przed opanowaniem grubych, miękkich ciasteczek o jakości premium.",
    painQ1: "Twoje ciasteczka się rozlewają i zostają płaskie zamiast być wysokie i grube?",
    painQ2: "Tracisz czas i składniki na internetowe przepisy, które nigdy nie działają?",
    painQ3: "Środek nigdy nie jest kremowy — albo za surowy, albo za suchy?",
    painQ4: "Chcesz ciasteczka, które wychodzą ZA KAŻDYM RAZEM — ze stałymi wynikami na poziomie cukierni?",
    painQ5: "Wynik zmienia się za każdym razem, gdy powtarzasz ten sam przepis?",
    painQ6: "Gdy coś idzie nie tak, nie wiesz co poprawić?",
    painBridge: "To nie brak talentu. To brak struktury.",
    painBridgeCta: "Ten ebook daje ci dokładną metodę na stałe wyniki w stylu New York.",

    // Transformation Section
    transformEyebrow: "Sekret, Którego Nikt Ci Nie Mówi",
    transformTitle: "Są Dwa Sposoby Na Naukę Ciasteczek w Stylu New York",
    transformSubtitle: "Frustrujący sposób... lub pewny sposób",
    oldWayLabel: "Stara Droga",
    newWayLabel: "Nowa Droga",
    transform1Old: "Podążanie za losowymi przepisami z internetu i nadzieja, że tym razem się uda",
    transform1New: "Wiedzieć dokładnie co robić — i czuć się pewnie od pierwszej partii",
    transform2Old: "Zgadywanie co poszło nie tak i powtarzanie tych samych błędów",
    transform2New: "Zrozumienie dlaczego za każdym krokiem — żeby naprawić cokolwiek w minuty",
    transform3Old: "Wydawanie $500-$2000 na kursy z nadzieją, że ktoś wreszcie wyjaśni to jasno",
    transform3New: "Przejście od początkującej do jakości cukierniczej za mniej niż $10 — gwarantowane",
    transformCta: "To jest metoda, która zmienia zgadywanie w wiedzę.",
    
    // What You Get
    wygTag: "WSZYSTKO CO ZAWIERA",
    wygTitle: "Co Otrzymasz Dzisiaj (I Możesz Użyć Od Razu)",
    wygSubtitle: "Kompletny system ciasteczek w stylu New York dla stałości, pewności i powtarzalnych wyników.",
    wyg1Title: "27 Przepisów w Stylu NY (Przetestowane i Sprzedawalne)",
    wyg1Desc: "Grube ciasteczka, miękkie w środku z nieodpartymi nadzieniami - takie, które ludzie kupują bez namysłu.",
    wyg2Title: "Metoda NY Krok po Kroku",
    wyg2Desc: "Dokładne czasy, temperatury i techniki dla wysokości, tekstury i kremowego wnętrza - bez zgadywania.",
    wyg3Title: "Plan Sprzedaży z Domu",
    wyg3Desc: "Co sprzedawać najpierw, jak prezentować i uzyskać pierwsze sprzedaże z prostym, powtarzalnym planem.",
    wyg4Title: "Kompletna Mapa: Od Twojej Kuchni do Produktu Premium",
    wyg4Desc: "Dlaczego te ciasteczka wyglądają jak z cukierni, jak powinny wyglądać i jak zamienić je w ofertę, która przyciąga klientów.",
    wyg5Title: "Przewodnik Cenowy (Żeby Dobrze Liczyć)",
    wyg5Desc: "Jak liczyć koszty, ustalać ceny i pewnie podnosić kwotę - z realnymi marżami i prostą logiką.",
    wyg6Title: "Dostawcy + Mądre Zamienniki",
    wyg6Desc: "Jak znaleźć lokalne składniki wysokiej jakości (i co użyć, jeśli czegoś nie znajdziesz).",
    wyg7Title: "Opakowanie Które Sprzedaje",
    wyg7Desc: "Prezentacja, która usprawiedliwia ceny premium i sprawia, że Twoje ciasteczka nadają się na prezent i do dzielenia.",
    wyg8Title: "Zacznij Bez Przemyślenia",
    wyg8Desc: "Nastawienie + checklista startowa, żeby przejść od chcę do zaczynam bez komplikacji.",
    wyg9Title: "Kolekcja Ciasteczek Tematycznych",
    wyg9Desc: "Sezonowe pomysły i kluczowe daty dla różnorodności i sprzedaży przez cały rok.",
    wyg10Title: "Personalizacja + Rozwiązywanie Problemów",
    wyg10Desc: "Nadzienia, ulepszenia smaków i szybkie poprawki tekstury, wysokości i pieczenia w minuty.",
    wyg11Title: "Sekcja Wegańska w Stylu NY (5 Przepisów)",
    wyg11Desc: "Opcje wegańskie skupione na prawdziwej teksturze - nie przypadkowe zamienniki.",
    wyg12Title: "Biznes Bez Czucia Się Jak Sprzedawca",
    wyg12Desc: "Koszty, zdjęcia, opakowanie i oferty - jak sprzedawać bez błagania, naciskania czy czucia się niekomfortowo.",
    wygBridgeTitle: "A Jeśli Zdecydujesz Się Sprzedawać...",
    wygBridgeText: "Wiele osób zaczyna od pieczenia w domu. Potem znajomi zaczynają prosić o pudełka. Dlatego, jeśli chcesz, przewodnik zawiera też:",

    // Bonuses
    bonusTag: "+ $135.96 W BONUSACH",
    bonusesTitle: "Ekskluzywne Bonusy W Zestawie",
    bonusesSubtitle: "Bonusy o wartości $135.96+ - Twoje dzisiaj bez dodatkowych kosztów",
    bonus1Title: "Mini Książka z Przepisami: Zdrowe Desery dla Dzieci",
    bonus1Desc: "15 odżywczych, pysznych przepisów, które mamy powtarzają (i polecają).",
    bonus1Value: "$27",
    bonus2Title: "Przewodnik: Desery Bez Pieczenia",
    bonus2Desc: "Pyszne opcje bez piekarnika - idealne na upały lub mało sprzętu.",
    bonus2Value: "$17",
    bonus3Title: "Kombinacje Smaków Które Sprzedają",
    bonus3Desc: "Zwycięskie kombinacje + pomysły na nadzienia/dodatki dla powracających zamówień.",
    bonus3Value: "$13",
    bonus4Title: "Encyklopedia 200 Ekskluzywnych Przepisów",
    bonus4Desc: "200 pomysłów na rozszerzenie menu bez braku opcji.",
    bonus4Value: "$24.99",
    bonus5Title: "Domowe Desery Wegańskie",
    bonus5Desc: "Desery wegańskie z prawdziwym smakiem i świetną teksturą.",
    bonus5Value: "$17.99",
    bonus6Title: "Schłodzone Desery z Mniejszą Ilością Cukru",
    bonus6Desc: "Lżejsze zimne desery - bez utraty czynnika zachcianki.",
    bonus6Value: "$17.99",
    bonus7Title: "Sztuka i Nauka Sprzedawania",
    bonus7Desc: "Prezentacja, nazewnictwo i oferty, żeby wyglądało premium i jasno.",
    bonus7Value: "$17.99",
    bonus8Title: "Pomysły na Desery Przyjazne Alergikom",
    bonus8Desc: "Przewodnik po popularnych adaptacjach. Zawsze weryfikuj konkretne alergie.",
    bonus8Value: "EXTRA BONUS",
    bonusesTotalAmount: "$135.96+",
    value: "Wartość:",
    yoursFree: "GRATIS dla Ciebie!",
    totalBonusValue: "Łączna wartość bonusów",
    freeToday: "GRATIS gdy zamawiasz dzisiaj!",
    
    // Price Drop - Active Countdown
    offerEndsIn: "Ta specjalna oferta kończy się za:",
    hours: "Godziny",
    minutes: "Min",
    seconds: "Sek",
    originalPrice: "$27",
    currentPrice: "$6.97",
    priceNote: "Jednorazowa płatność - Natychmiastowy dostęp",
    priceDropReason: "Cena startowa aktywna dzisiaj: zamyka się po 7 zakupach.",
    priceDropTitle: "Specjalna Oferta Czasowa",
    priceDropSubtitle: "Cena startowa aktywna - złap swoją kopię zanim skończy się czas",
    priceDropCta: "Chcę moją kopię teraz",

    // Price Drop - Expired State (kept for compatibility)
    priceDropTitleExpired: "Specjalna Oferta Czasowa",
    priceDropSubtitleExpired: "Złap swoją kopię w cenie startowej zanim będzie za późno.",
    offerExpiredMessage: "Oferta czasowa",
    
    // Pricing (legacy keys)
    pricingTitle: "Specjalna Oferta Czasowa",
    pricingSubtitle: "Mała inwestycja, żeby dzisiaj rozpocząć swój biznes",
    pricingBefore: "Normalna cena",
    pricingToday: "Tylko dzisiaj",
    getInstantAccess: "Chcę moją kopię teraz",
    secureCheckout: "Bezpieczna płatność",
    instantDelivery: "Natychmiastowa dostawa",
    availableWorldwide: "Dostępne na całym świecie",
    
    // Delivery
    deliveryTitle: "Jak To Działa",
    deliverySubtitle: "Natychmiastowy dostęp w 3 prostych krokach",
    step: "Krok",
    deliveryStep1Title: "Bezpiecznie sfinalizuj zakup",
    deliveryStep1Desc: "100% bezpieczna płatność przez Hotmart",
    deliveryStep2Title: "Sprawdź swój email",
    deliveryStep2Desc: "Otrzymasz natychmiastowy dostęp w skrzynce odbiorczej",
    deliveryStep3Title: "Pobierz i zacznij",
    deliveryStep3Desc: "Postępuj zgodnie z krokami i upiecz pierwszą partię",
    deviceCompatibility: "Działa na telefonie, tablecie i PC",
    
    // Testimonials
    testimonialsTitle: "Zobacz Co Mówią Inni Domowi Piekarze",
    testimonialsSubtitle: "Kobiety takie jak Ty, które zaczęły piec i już nie przestały",
    testimonial1: "Zrobiłam pierwszą sprzedaż w zaledwie 3 dni! Przepisy są jasne, a plan sprzedaży dał mi pewność, której potrzebowałam. Mam już stałe klientki.",
    testimonial2: "Nigdy nie myślałam, że mogłabym sprzedawać moje ciasteczka. Teraz dostaję zamówienia w każdy weekend, a moje dzieci są dumne z mamy-przedsiębiorcy.",
    testimonial3: "Odzyskałam koszt ebooka z pierwszej partii. Metoda pieczenia to czyste złoto.",
    testimonial4: "Zaczęłam z $25 na składniki i zerowym doświadczeniem. Teraz moje ciasteczka są najbardziej poszukiwane w mojej okolicy.",
    testimonial5: "Te przepisy są niesamowite! Tekstura w stylu NYC to dokładnie to, czego szukałam. Mam już 12 klientów, którzy zamawiają co tydzień.",
    testimonial6: "Zaczęłam jako hobby sprzedając sąsiadom. 4 miesiące później to moja stała weekendowa działalność.",
    testimonial7: "Genialny przewodnik! Krok po kroku sprawił, że wszystko było łatwe. W pierwszym tygodniu miałam już zamówienia bez wcześniejszego doświadczenia.",
    testimonial8: "Niesamowite przepisy i super jasny plan biznesowy! Już dostaję regularne zamówienia, a zaczęłam tylko 3 tygodnie temu.",
    testimonial9: "W końcu czuję się pewnie sprzedając moje ciasteczka. Przewodnik cenowy pomógł mi naliczać odpowiednią cenę zamiast zaniżać wartość mojej pracy.",

    // Country names
    countryFrance: "Francja",
    countryBelgium: "Belgia",
    countrySwitzerland: "Szwajcaria",
    countryGermany: "Niemcy",
    countryAustria: "Austria",
    countryItaly: "Włochy",
    countryNetherlands: "Holandia",
    countryPoland: "Polska",
    countryLuxembourg: "Luksemburg",

    // Guarantee
    guaranteeTitle: "Gwarancja Pewności od Pierwszej Partii",
    guaranteeSubtitle: "Niczym Nie Ryzykujesz",
    guaranteeText: "Pobierz ebook. Zrób przepisy. Postępuj zgodnie z metodą. Jeśli nie czujesz się pewnie, żeby piec grube, kremowe ciasteczka w stylu New York w domu, poproś o zwrot pieniędzy bezpośrednio w Hotmart — przetwarzają to w 24-48 godzin. Bez pytań, bez problemów. Niczym nie ryzykujesz.",
    guaranteeCta: "Chcę moją kopię teraz",

    // FAQ
    faqTitle: "Często Zadawane Pytania",
    faq1Question: "Czy potrzebuję doświadczenia w pieczeniu?",
    faq1Answer: "Nie. Metoda jest przyjazna dla początkujących. Każdy przepis jest krok po kroku z poradami, jak unikać typowych błędów.",
    faq2Question: "Czy zawiera przewodnik sprzedażowy (opcjonalny)?",
    faq2Answer: "Tak. Najpierw uczysz się metody i przepisów. A jeśli zdecydujesz się sprzedawać, zawiera ceny, proste oferty, pakowanie i jak zdobyć pierwsze zamówienia bez naciskania.",
    faq3Question: "Czy to natychmiastowe pobranie?",
    faq3Answer: "Tak. Po zakupie przez Hotmart otrzymujesz natychmiastowy dostęp przez email.",
    faq4Question: "Czy to zadziała w moim kraju?",
    faq4Answer: "Tak. Przepisy używają powszechnych składników i oferujemy alternatywy. Zasady biznesowe działają wszędzie.",
    faq5Question: "Jakiego sprzętu potrzebuję?",
    faq5Answer: "Domowy piekarnik, miski, mikser (ręczny lub stojący) i blachy do pieczenia - podstawowy sprzęt.",
    faq6Question: "Ile pieniędzy potrzebuję na start?",
    faq6Answer: "Około $15-$30 na składniki w zależności od lokalizacji i tego, co już masz w domu.",
    faq7Question: "Czy potrzebuję profesjonalnego piekarnika?",
    faq7Answer: "Nie. Metoda jest zoptymalizowana pod standardowe piekarniki domowe.",
    faq8Question: "Jak uzyskam dostęp do bonusów?",
    faq8Answer: "Są dostarczane z ebookiem - natychmiastowe pobranie w tym samym emailu.",
    faq9Question: "Czy jest subskrypcja lub miesięczne opłaty?",
    faq9Answer: "Nie. Jednorazowa płatność. Twój na zawsze - bez ukrytych kosztów.",
    faq10Question: "Czy mogę sprzedawać online czy tylko lokalnie?",
    faq10Answer: "Oba. Omawiamy sprzedaż lokalną i jak rozszerzyć na zamówienia online i wysyłkę.",
    faq11Question: "Czy przepisy nadają się do sprzedaży komercyjnej?",
    faq11Answer: "Tak. Są zaprojektowane do produkcji i sprzedaży, włączając wskazówki dotyczące kosztów i marży.",
    faq12Question: "Czy jest wsparcie jeśli mam pytania?",
    faq12Answer: "Tak. Otrzymasz dostęp do emaila wsparcia dla pytań o zawartość ebooka.",

    // Reassurance Section
    objectionsPill: "Żebyś mogła kupić z zaufaniem",
    objectionsTitle: "Wszystko jest zbudowane, żebyś uzyskała rezultaty",
    objectionsSubtitle: "Każda część ebooka odnosi się do najczęstszych wątpliwości przed startem.",
    objectionsLead: "Bez improwizacji. Podążasz za systemem.",

    objection1Title: "Jasne rezultaty od pierwszej partii",
    objection1Body: "Podążaj za metodą krok po kroku z dokładnymi miarami, czasami i procesami. Bez zgadywania. Bez losowych testów - tylko wykonanie.",
    objection1Inside: "Zawiera: kompletną metodę + rozwiązania typowych błędów.",

    objection2Title: "Przepisy które nie marnują składników ani czasu",
    objection2Body: "Każdy przepis jest jasno napisany, żebyś powtarzała ten sam rezultat raz po raz - bez marnowania.",
    objection2Inside: "Zawiera: 27 przetestowanych przepisów + precyzyjne dostosowania.",

    objection3Title: "Jasna ścieżka, jeśli zdecydujesz się sprzedawać",
    objection3Body: "Nie musisz niczego wymyślać. Jeśli zdecydujesz się sprzedawać, podążaj za prostym planem cenowym, ofertowym i pierwszych zamówień.",
    objection3Inside: "Zawiera: przewodnik cenowy + plan sprzedaży.",

    objection4Title: "Różnorodność bez utraty jakości",
    objection4Body: "Naucz się tworzyć różne smaki i motywy bez zmiany podstawowej tekstury, która sprawia, że te ciasteczka się sprzedają.",
    objection4Inside: "Zawiera: pomysły tematyczne + personalizacja.",

    objection5Title: "Opcje wegańskie z prawdziwą teksturą",
    objection5Body: "Skupienie jest na tym samym wyglądzie i smaku - nie na improwizowanych zamiennikach.",
    objection5Inside: "Zawiera: sekcję wegańską w stylu NY (5 przepisów).",

    objection6Title: "Dzielenie się (lub sprzedawanie) z pewnością",
    objection6Body: "Twoje ciasteczka mówią same za siebie. Naucz się je pięknie prezentować — a jeśli chcesz sprzedawać, plan jest w zestawie.",
    objection6Inside: "Zawiera: podstawy marki, ceny i prezentacja.",

    // Final CTA
    finalCtaTitle: "Za 2 Godziny Twoja Pierwsza Partia Będzie Stygnąć na Blacie",
    finalCtaSubtitle: "Za 2 godziny Twoja pierwsza partia profesjonalnych ciasteczek będzie stygnąć na blacie",
    finalCtaRecap: "Wszystko czego potrzebujesz za jedyne $6.97:",
    finalBenefit1: "27 przetestowanych, sprzedawalnych przepisów",
    finalBenefit2: "Kompletna metoda ciasteczek krok po kroku",
    finalBenefit3: "8 ekskluzywnych prezentów bonusowych",
    finalBenefit4: "Natychmiastowy dostęp na zawsze",
    finalBenefit5: "Opcjonalny przewodnik sprzedażowy w zestawie",
    finalCtaButton: "Chcę moją kopię teraz",
    finalCtaNote: "Bezpieczna płatność - Natychmiastowy dostęp - 7-dniowa gwarancja",
    choiceTitle: "Masz teraz dwie opcje:",
    choiceA: "Zamknij tę stronę. Dalej oglądaj filmy o pieczeniu. Powiedz sobie \"może kiedyś.\" Za sześć miesięcy nic się nie zmieniło.",
    choiceB: "Zacznij dziś za $6.97. Upiecz pierwszą partię dziś wieczorem. Podziel się jutro. W następny weekend wszyscy chcą przepis.",
    choiceQuestion: "Która opcja brzmi bardziej jak Ty?",
    finalCtaPS: "P.S. Kiedy pobierzesz, idź prosto do Rozdziału 3 — tam jest najpopularniejszy przepis. Większość piecze pierwszą partię tego samego wieczoru.",
    futurePacingTitle: "Wyobraź Sobie To...",
    futurePacingText: "Jest sobota rano. Twoja kuchnia pachnie ciepłą czekoladą i wanilią. Na blacie stygnie 36 grubych ciasteczek w stylu New York — perfekcyjnie. Łamiesz jedno — środek jest miękki i kremowy. Wygląda jak z cukierni. Nie zgadywałaś. Postępowałaś zgodnie z metodą. Tak może wyglądać Twój pierwszy weekend.",
    offerValidFor: "Specjalna oferta ważna tylko przez",

    // Footer
    footerDisclaimer: "Ta strona nie jest częścią Facebooka ani Meta. Indywidualne wyniki mogą się różnić. Ten ebook jest edukacyjny i nie gwarantuje konkretnych zarobków.",
    footerContact: "Kontakt",
    footerCopyright: "2026 ECommerce Shop Cart. Wszelkie prawa zastrzeżone.",

    // Floating CTA
    floatingCta: "Chcę moją kopię",
  },
} as const;

const LANGUAGE_STORAGE_KEY = 'preferred_lang';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const inferLanguageFromBrowser = (): Language => {
    if (typeof navigator === 'undefined') return 'fr';

    const langs = (navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language])
      .filter(Boolean)
      .map((l) => l.toLowerCase());

    const isFrench = langs.some((l) => l === 'fr' || l.startsWith('fr-'));
    if (isFrench) return 'fr';

    const isGerman = langs.some((l) => l === 'de' || l.startsWith('de-'));
    if (isGerman) return 'de';

    const isItalian = langs.some((l) => l === 'it' || l.startsWith('it-'));
    if (isItalian) return 'it';

    const isDutch = langs.some((l) => l === 'nl' || l.startsWith('nl-'));
    if (isDutch) return 'nl';

    const isPolish = langs.some((l) => l === 'pl' || l.startsWith('pl-'));
    if (isPolish) return 'pl';

    return 'fr';
  };

  const getInitialLanguage = (): Language => {
    if (typeof window === 'undefined') return 'fr';

    try {
      const saved = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
      if (saved === 'fr' || saved === 'de' || saved === 'it' || saved === 'nl' || saved === 'pl') return saved;
    } catch {
      // Ignore storage access errors and fall back to browser inference.
    }

    return inferLanguageFromBrowser();
  };

  const [language, _setLanguage] = useState<Language>(getInitialLanguage);

  const setLanguage = (lang: Language) => {
    _setLanguage(lang);
    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    } catch {
      // Ignore storage write errors.
    }
  };

  const t = useMemo(() => {
    return (key: string): string => {
      const langTable = translations[language] as Record<string, string>;
      if (langTable && key in langTable) return String(langTable[key]);
      const fallback = translations.fr as Record<string, string>;
      if (fallback && key in fallback) return String(fallback[key]);
      return key;
    };
  }, [language]);

  const value: LanguageContextType = useMemo(
    () => ({ language, setLanguage, t }),
    [language, t]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
};
