import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
const resources = {
  "en": {
    "translation": {

            
      "navbarButtonCallToAction":"Book A Demo",
      "navbarButton1":"Company",
      "navbarButton2":"Startup",
      "navbarButton3":"Due Diligence Consultant", 

      
      "heroTitle1": "Your Due Diligence Copilot to Rapidly Assess",
      "heroTitle2": " Deal Redlags",
      "heroDescription": "Our data room AI connects with your existing data room provider. It transforms the folder structure and filenames to align with your internal standards, including highlighting any missing data. We also provide a generative AI chatbot for buy-side Q&A of the data room.",
      "heroButton1": "Get In Touch",
      "heroButton2": "Subscribe",


      "section1Title": "Experience Fast Red Flag Reporting",
      "section1Subtitle": "Browse 1000's of unstructured documents in your Data Room to find underlying risks in real time.",
      "section1List1": "Connect to your Data Room",
      "section1List2": "Generate your Risk Reports",
      "section1List3": "Chat with your Data Room to get additional information",
      "button1Section1": "Tell me more",
      "target1Section1": "For Due Diligence Consultants",
      


      "section2Title": "Build Qualitative Data Room",
      "section2Subtitle": "Since your Data Room mirrors your company's organization, we ensure the identification of potential risks in your Data Room, helping your company stay well-organized and always prepared for future fundraising and acquisitions.",
      "section2List1": "Upload or start building your Data Room",
      "section2List2": "Detect missing documents upfront",
      "section2List3": "Improve your Data Room's Quality Scoring",
      "button1Section2": "Tell me more",
      "section2Link": "Download Your Personal Data Room Checklist",
      "target1Section2": "For Startups & SMEs",



      "section3Title": "Experience Fast Red Flag Reporting",
      "section3Subtitle": "Browse 1000's of unstructured documents in your Data Room to find underlying risks in real time.",
      "section3List1": "Connect to your Data Room",
      "section3List2": "Generate your Risk Reports",
      "section3List3": "Chat with your Data Room to get additional information",
      "button1Section3": "Tell me more",
      "target1Section3": "For Due Diligence Consultants",
      


      "section4Title": "Build Qualitative Data Room",
      "section4Subtitle": "Since your Data Room mirrors your company's organization, we ensure the identification of potential risks in your Data Room, helping your company stay well-organized and always prepared for future fundraising and acquisitions.",
      "section4List1": "Upload or start building your Data Room",
      "section4List2": "Detect missing documents upfront",
      "section4List3": "Improve your Data Room's Quality Scoring",
      "button1Section4": "Tell me more",
      "section4Link": "Download Your Personal Data Room Checklist",
      "target1Section4": "For Startups & SMEs",



      "partners":"Trusted by innovative teams",
      "marque":"© 2024 Logiciels Hadaly Inc. All rights reserved.",
      "newsletterButton":"Subscribe",
      "newsletterPlaceholder":"Enter Your Email",
      "newsletterTitle":"Newsletter",
      "slogan":"Enhance your Due Diligence process with AI",


      "aboutTitle1": "OUR VISION",
      "aboutIntro": "HADALY is redefining due diligence in capital markets through advanced AI technology. The platform integrates with existing data rooms, enhancing data organization and identifying gaps. Focused on empowering startups, SMEs, and due diligence advisors, HADALY offers tools for swift risk assessment and red flag identification. Its capability to process extensive, unstructured data ensures comprehensive risk analysis and improves the quality of DataRooms. The objective is to streamline the due diligence process, making it more efficient and insightful for all involved parties.",
      "aboutTitle2": "ABOUT US",
      "aboutDescription": "Chez Hadaly, nous avons identifié un défi majeur dans le processus d'investissement et d'acquisition d'entreprises : la revue diligente est souvent un parcours long et coûteux. Tandis que les grandes compagnies disposent des ressources nécessaires pour mener à bien ces évaluations, la majorité des entrepreneurs se retrouve contrainte d'effectuer ces vérifications de manière personnelle, une approche non sans risques. Conscients de cette réalité, nous avons créé Hadaly, une solution innovante destinée à transformer radicalement cette dynamique. Notre outil de pointe analyse et synthétise les informations des entreprises mises en vente, produisant des rapports de valorisation précis pour les potentiels acheteurs. Cette approche vise à minimiser les coûts associés à la revue diligente, rendant le processus plus accessible et efficace pour tous. L'expérience nous a montré qu'il était particulièrement ardu pour nos clients de dénicher la perle rare en matière d'acquisition. En réponse à ce constat, Hadaly a intégré à son offre un service de sourcing accompagné d'une revue diligente automatisée, simplifiant ainsi la recherche et l'évaluation des opportunités d'investissement. Notre mission s'étend au-delà de la facilitation des transactions. Nous avons aussi pour ambition de rendre l'accès aux informations privées des entreprises aussi simple et transparent que possible. En rassemblant et en analysant méticuleusement les données d'entreprise, Hadaly a initialement développé un moteur de recherche avancé, avant d'élargir son portefeuille de services pour offrir un accès direct et simplifié à la vie des entreprises. Notre engagement est de continuer à innover pour fournir à nos utilisateurs les outils les plus efficaces et intuitifs, permettant une compréhension et une exploration approfondies du paysage entrepreneurial Canadien, tout en démocratisant l'accès à des analyses de qualité professionnelle. ",
    
      "termsOfUseTitle":"Conditions Générales d'utilisation",
      "termsOfUseintro":"Votre acte affirmatif d'utiliser notre site Web situé à www.hadaly.ca (et tous les sites associés qui y sont liés) ou nos services ('Hadaly') signifie que vous acceptez les termes et conditions suivants d'utilisation ('Conditions d'Utilisation'). Si vous n'êtes pas d'accord, ne pas utiliser Hadaly ('nous', 'notre').",
      "termsOfUse1Title":"1. Modifications des conditions d'utilisation",
      "termsOfUse2Title":"2. Modifications de Hadaly",
      "termsOfUse3Title":"3. La base de données Hadaly",
      "termsOfUse4Title":"4. Redistribution des données",
      "termsOfUse5Title":"5. Droits d'auteur et propriété",
      "termsOfUse6Title":"6. Sites tiers et annonceurs ",
      "termsOfUse7Title":"7. Utilisateurs enregistrés ",
      "termsOfUse8Title":"8. Accès et sécurité ",
      "termsOfUse81Title":"8.1 Modification des conditions d'utilisation",
      "termsOfUse82Title":"8.2 Droit applicable et juridiction",
      "termsOfUse83Title":"8.3 Renonciation et divisibilité",
      "termsOfUse84Title":"8.4 Intégralité de l'accord",
      "termsOfUse9Title":"9. Vos commentaires et préoccupations",
      "termsOfUse10Title":"10. Résiliation",
      "termsOfUse11Title":"11. E-mails",

      "termsOfUse1Content":"Nous pouvons modifier ces Conditions d'Utilisation à tout moment. Si vous continuez à utiliser Hadaly après que nous ayons publié des modifications à ces Conditions d'Utilisation, vous signifiez votre acceptation des nouveaux termes. Vous aurez toujours accès à nos Conditions d'Utilisation et pourrez les vérifier à tout moment. En rechargeant cette page, vous disposerez de la version la plus à jour disponible.",
      "termsOfUse2Content":"Nous pouvons interrompre ou changer tout service ou fonctionnalité sur Hadaly à tout moment sans avis préalable. ",
      "termsOfUse3Content":"Nous obtenons des informations pour notre base de données à partir de sources gouvernementales et autres de diverses manières, y compris : directement à partir de sites et d'APIs gouvernementaux, de jeux de données publiques ou via des demandes de Liberté d'Information. Nous consacrons beaucoup de temps, d'effort et même d'argent pour obtenir ces données et les transformer en une ressource exploitable et utilisable. Nous ne revendiquons aucun droit sur les informations que nous recevons de sources gouvernementales, et nous les attribuons chaque fois que possible. Nous revendiquons cependant des droits sur notre base de données contenant ces informations. La loi sur le droit d'auteur canadienne exige que vous attribuiez l'utilisation de notre base de données. C'est important car cela nous permet (et à son tour à la communauté) de bénéficier de la réutilisation de notre travail, et donc de continuer à fournir ce service. L'utilisation de toutes données doit être accompagnée d'un hyperlien indiquant 'de Hadaly' et renvoyant soit à la page d'accueil de Hadaly, soit à la page faisant référence à l'information en question. L'attribution doit être suffisamment grande et claire pour être clairement associée à l'utilisation, et doit dans tous les cas être pas plus petite que 70% de la plus grande police se rapportant à l'information ou 7px, selon la plus grande. Si l'information de Hadaly constitue la partie substantielle de la page web, vous devriez utiliser la balise rel-canonical pour indiquer aux moteurs de recherche que la page Hadaly pour l'entreprise est la page centrale pour ce sujet (sinon les sites de données ouvertes risquent de se retrouver dans des batailles SEO). Nous citer dans un rapport ou mentionner la source dans un article de journal que vous écrivez soutient directement notre travail et nous permet de créer un produit encore meilleur. La loi sur le droit d'auteur canadienne exige également que vous partagiez toute amélioration que vous apportez à nos bases de données sous la loi canadienne sur le droit d'auteur également. Par exemple, si vous combinez les informations avec vos propres données, les informations résultantes doivent être publiées sous la même loi canadienne sur le droit d'auteur. Cela signifie que toute la communauté peut bénéficier de notre travail sur la base de données. Si vous avez un contrat payant pour utiliser Hadaly, ces restrictions ne s'appliquent pas.",
      "termsOfUse4Content":"Vous ne pouvez pas utiliser de techniques d'extraction de données, de robots ou d'outils similaires de collecte et d'extraction de données sur le contenu de Hadaly, sous-licencier, assigner, transférer, vendre, prêter ou autrement distribuer contre paiement le contenu de Hadaly sans notre consentement écrit préalable. Vous ne pouvez pas contourner les mécanismes inclus dans le contenu de Hadaly pour prévenir la reproduction ou la distribution non autorisée du contenu de Hadaly. Pour plus d'informations sur les demandes commerciales et de partenariat avec nous, veuillez nous contacter.Sauf autorisation expresse contraire par le paragraphe précédent, vous acceptez de ne pas vendre aucun des services ou matériaux de quelque manière ou à quelque fin que ce soit, sans le consentement écrit préalable exprimé de Hadaly. En outre, vous ne devez pas, sans le consentement écrit préalable exprimé de Hadaly, faire des copies de tout logiciel ou documentation qui pourrait être fourni, électroniquement ou autrement, y compris, mais sans s'y limiter, en traduisant, décompilant, désassemblant ou créant des œuvres dérivées.     Sauf autorisation expresse contraire par accord supplémentaire, nous n'autorisons pas l'utilisation commerciale de l'un de nos produits ou services. Ceci inclut, sans limitation, la revente d'accès à notre base de données ou son utilisation pour des services payants, ou l'utilisation de Hadaly pour générer des revenus publicitaires ou pour toute autre entreprise.",
      "termsOfUse5Content":"Tout le contenu sur Hadaly, y compris, mais sans s'y limiter, les textes, graphiques, logos, icônes de boutons, images, clips audio, compilations de données et logiciels, et leur sélection et arrangement, est la propriété de Hadaly ou de ses fournisseurs de contenu, et est protégé par les lois canadiennes et internationales sur le droit d'auteur. La compilation de tout le contenu sur Hadaly est la propriété exclusive de Hadaly et est protégée par les lois canadiennes et internationales sur le droit d'auteur.",
      "termsOfUse6Content":"Hadaly peut inclure des liens vers des sites Web tiers. Vous acceptez que Hadaly ne soit pas tenu responsable des activités se déroulant sur tout site Web auquel vous accédez par le biais de liens sur Hadaly. Toutes les transactions que vous avez avec des annonceurs trouvés sur Hadaly se font entre vous et l'annonceur, et vous reconnaissez et acceptez que nous ne sommes pas responsables de toute perte ou réclamation que vous pourriez avoir contre un annonceur.",
      "termsOfUse7Content": "Certains services, tels que la revendication d'une entreprise ou la possibilité d'ajouter des avis d'entreprise, sont disponibles uniquement pour les utilisateurs enregistrés du site Web Hadaly et nécessitent que vous vous connectiez avec un email et un mot de passe pour les utiliser.  Si vous vous inscrivez en tant qu'utilisateur (un 'Abonné') de l'une des fonctionnalités de Hadaly, lors du processus d'inscription, il peut vous être demandé de cliquer sur  'S'inscrire maintenant', 'Soumettre' ou un bouton similaire ; cliquer sur un tel bouton confirmera davantage votre accord pour être légalement lié par ces Conditions d'Utilisation. En considération de votre utilisation du site Web Hadaly, vous déclarez que vous avez l'âge légal pour former un contrat contraignant et que vous n'êtes pas une personne interdite de recevoir les services Hadaly en vertu des lois du Canada ou de toute autre juridiction applicable. Vous acceptez également de : (a) fournir des informations vraies, précises, actuelles et complètes sur vous-même comme le demande le formulaire d'inscription de Hadaly (les 'Données d'Inscription'), (b) maintenir et mettre à jour rapidement les Données d'Inscription pour les garder vraies, précises, actuelles et complètes. Si vous fournissez des informations fausses, inexactes, non actuelles ou incomplètes, ou si Hadaly a des motifs raisonnables de suspecter que de telles informations sont fausses, inexactes, non actuelles ou incomplètes, Hadaly a le droit de suspendre ou de résilier votre compte et de refuser toute utilisation actuelle ou future des services Hadaly (ou de toute partie de ceux-ci).Vous déclarez et garantissez que vous détenez tous les droits de propriété intellectuelle, y compris tous les brevets, marques, secrets commerciaux, droits d'auteur ou autres droits de propriété, sur et dans votre contenu. Si vous utilisez des matériaux de tiers, vous déclarez et garantissez que vous avez le droit de distribuer le matériel de tiers dans le contenu. Vous acceptez de ne pas soumettre de matériel soumis au droit d'auteur, protégé par le secret commercial ou autrement soumis à des droits de propriété de tiers, y compris les brevets, les droits à la vie privée et à la publicité, à moins que vous ne soyez le propriétaire de tels droits ou que vous ayez l'autorisation de leur propriétaire légitime pour soumettre le matériel. Nous pouvons retirer votre contenu sans préavis si nous estimons raisonnablement que vous violez nos Conditions d'Utilisation.",
      "termsOfUse8Content":"Vous acceptez la responsabilité de la confidentialité et de l'utilisation de toute adresse e-mail que vous utilisez pour vous inscrire pour votre accès et utilisation de nos services. Vous êtes responsable de la confidentialité de votre mot de passe et de votre compte et êtes entièrement responsable de toutes les activités qui se produisent sous votre mot de passe ou compte. Vous acceptez de (a) notifier immédiatement Hadaly de toute utilisation non autorisée de votre mot de passe ou compte ou de toute autre violation de sécurité, et (b) vous assurer que vous quittez votre compte à la fin de chaque session. Hadaly ne peut et ne sera pas responsable de toute perte ou dommage résultant de votre non-respect.",
      "termsOfUse81Content":"Nous pouvons réviser et mettre à jour ces Conditions d'Utilisation de temps à autre à notre seule discrétion. Toutes les modifications entrent en vigueur immédiatement lorsque nous les publions et s'appliquent à toutes les utilisations du site par la suite. Votre utilisation continue de Hadaly après la publication des Conditions d'Utilisation révisées signifie que vous acceptez et acceptez les modifications. Vous êtes censé vérifier cette page de temps en temps afin de prendre connaissance de tout changement, car ils vous lient.",
      "termsOfUse82Content":"Toutes les questions relatives à Hadaly et à ces Conditions d'Utilisation, et tout litige ou réclamation découlant de ou lié à eux (dans chaque cas, y compris les litiges ou réclamations non contractuelles), seront régies et interprétées conformément aux lois internes de la Province de Québec, Canada, sans donner effet à aucun choix ou conflit de disposition ou règle de loi (que ce soit de la Province de Québec ou de toute autre juridiction). Tout litige juridique, action ou procédure découlant de, ou lié à, ces Conditions d'Utilisation ou Hadaly sera institué exclusivement dans les tribunaux fédéraux du Canada ou les tribunaux de la Province de Québec, dans chaque cas situé dans la ville de Montréal, bien que nous nous réservons le droit de porter plainte contre vous pour violation de ces Conditions d'Utilisation dans votre pays de résidence ou tout autre pays pertinent. Vous renoncez à toute objection à l'exercice de la juridiction sur vous par ces tribunaux et à la place dans ces tribunaux.",
      "termsOfUse83Content":"La renonciation par Hadaly à une condition ou terme des Conditions d'Utilisation ne sera pas interprétée comme une renonciation continue ou supplémentaire à cette condition ou terme, ni comme une renonciation à toute autre condition ou terme. De plus, le fait que Hadaly ne fasse pas valoir un droit ou une disposition en vertu de ces Conditions d'Utilisation ne constitue pas une renonciation à ce droit ou à cette disposition. Si une disposition des Conditions d'Utilisation est jugée invalide, illégale ou inapplicable pour quelque raison que ce soit par un tribunal ou tout autre tribunal compétent, cette disposition sera soit éliminée, soit limitée au strict minimum, afin que les dispositions restantes des Conditions d'Utilisation demeurent pleinement en vigueur et effectives.",
      "termsOfUse84Content":"Les Conditions d'Utilisation, notre Politique de Confidentialité, ainsi que tout autre avis légal publié par nos soins sur Hadaly, constituent l'accord complet entre vous et Hadaly concernant l'utilisation de la plateforme. Ils remplacent toutes les communications et propositions antérieures ou contemporaines, qu'elles soient électroniques, orales ou écrites, entre vous et Hadaly concernant son utilisation.",
      "termsOfUse9Content":"En soumettant des idées, du contenu, des suggestions, des documents et/ou des propositions ('Contributions') à Hadaly via notre page de contact, vous reconnaissez et acceptez que : (a) vos Contributions ne contiennent pas d'informations confidentielles ou propriétaires ; (b) Hadaly n'est pas tenue à une obligation de confidentialité, explicite ou implicite, à l'égard des Contributions ; (c) Hadaly est en droit d'utiliser ou de divulguer (ou de choisir de ne pas utiliser ou divulguer) ces Contributions à n'importe quelle fin, de n'importe quelle manière, dans n'importe quel média dans le monde entier ; (d) Hadaly peut déjà avoir quelque chose de similaire aux Contributions déjà en cours de considération ou de développement ; (e) vos Contributions deviennent automatiquement la propriété de Hadaly, sans aucune obligation de Hadaly envers vous ; et (f) vous n'avez droit à aucune compensation ou remboursement d'aucune sorte de la part de Hadaly dans quelque circonstance que ce soit.",
      "termsOfUse10Content":"Sur votre demande, votre compte peut être supprimé de Hadaly. Vous pouvez supprimer votre compte à tout moment (si vous n'avez pas d'abonnement payant actif) en visitant votre page Profil. Si vous avez demandé la suppression de votre compte, nous supprimerons toutes les données associées à votre compte. Un compte ne peut pas être supprimé s'il a un abonnement payant actif. Vous acceptez que Hadaly puisse, sans préavis, résilier immédiatement, limiter votre accès ou suspendre votre compte Hadaly, toute adresse e-mail associée, et l'accès aux services de Hadaly. Les motifs de résiliation, de limitation d'accès ou de suspension peuvent inclure, sans s'y limiter, (a) des violations des Conditions d'Utilisation ou d'autres accords ou directives incorporés, (b) des demandes des forces de l'ordre ou d'autres agences gouvernementales, (c) l'arrêt ou la modification substantielle des services de Hadaly (ou d'une partie de ceux-ci), (d) des problèmes techniques ou de sécurité inattendus, (e) des périodes prolongées d'inactivité, (f) et/ou votre implication dans des activités frauduleuses ou illégales. De plus, vous convenez que toutes les résiliations, limitations d'accès et suspensions pour cause seront effectuées à la seule discrétion de Hadaly et que Hadaly ne sera pas responsable envers vous ou tout tiers de toute résiliation de votre compte, de toute adresse e-mail associée, ou de l'accès aux services de Hadaly.",
      "termsOfUse11Content":"En créant un compte sur Hadaly, vous acceptez que Hadaly puisse utiliser votre adresse e-mail pour vous envoyer des matériaux marketing, des avis liés au service, des messages d'informations importantes, des offres spéciales, etc. Vous pouvez vous désabonner en cliquant sur le lien fourni dans les e-mails.   Hadaly peut mettre à jour ces règles à tout moment.",



      "politicsTitle":"Politique de Protection des Données Personnelles de Hadaly",
      "politicsIntro":"Chez Logiciels Hadaly Inc., accessible depuis www.hadaly.ca, l'une de nos principales priorités est la confidentialité de nos visiteurs. Ce document de Politique de Confidentialité contient les types d'informations qui sont collectées et enregistrées par Logiciels Hadaly Inc. et comment nous les utilisons. Si vous avez des questions supplémentaires ou si vous avez besoin de plus d'informations sur notre Politique de Confidentialité, n'hésitez pas à nous contacter. Cette Politique de Confidentialité s'applique uniquement à nos activités en ligne et est valide pour les visiteurs de notre site Web en ce qui concerne les informations qu'ils ont partagées et/ou collectées dans Logiciels Hadaly Inc. Cette politique n'est pas applicable aux informations collectées hors ligne ou via des canaux autres que ce site Web.",
      "politics1Title":"Consentement",
      "politics2Title":"Informations que nous collectons",
      "politics3Title":"Comment nous utilisons vos informations",
      "politics4Title":"Fichiers journaux",
      "politics5Title":"Cookies et balises Web",
      "politics6Title":"Politiques de confidentialité des partenaires publicitaires",
      "politics7Title":"Politiques de confidentialité des tiers",
      "politics8Title":"Loi canadienne sur la protection des renseignements personnels et les documents électroniques (LPRPDE)",
      "politics9Title":"Droits de protection des données (Loi canadienne sur la protection des renseignements personnels et les documents électroniques)",
      "politics10Title":"Données des enfants",
      "politics11Title":"Mises à jour",

      "politicsContent1":"En utilisant notre site Web, vous consentez par la présente à notre Politique de Confidentialité et acceptez ses termes.",
      "politicsContent2":"Les informations personnelles que vous êtes invité à fournir, et les raisons pour lesquelles vous êtes invité à les fournir, vous seront claires au moment où nous vous demandons de fournir vos informations personnelles. Si vous nous contactez directement, nous pouvons recevoir des informations supplémentaires sur vous telles que votre nom, adresse e-mail, numéro de téléphone, le contenu du message et/ou des pièces jointes que vous pouvez nous envoyer, et toute autre information que vous pouvez choisir de fournir. Lorsque vous vous inscrivez pour un compte, nous pouvons demander vos informations de contact, y compris des éléments tels que le nom, le nom de l'entreprise, l'adresse, l'adresse e-mail et le numéro de téléphone.",
      "politicsContent3":"Nous utilisons les informations que nous collectons de diverses manières, y compris pour : Fournir, exploiter et maintenir notre site Web,Améliorer, personnaliser et élargir notre site Web,Comprendre et analyser comment vous utilisez notre site Web,Développer de nouveaux produits, services, fonctionnalités et fonctionnalités,Communiquer avec vous, soit directement soit par l'intermédiaire de l'un de nos partenaires, y compris pour le service client, pour vous fournir des mises à jour et d'autres informations relatives au site Web, et à des fins de marketing et de promotion,Vous envoyer des emails,Trouver et prévenir la fraude",
      "politicsContent4":"Logiciels Hadaly Inc. suit une procédure standard d'utilisation des fichiers journaux. Ces fichiers enregistrent les visiteurs lorsqu'ils visitent les sites Web. Toutes les entreprises d'hébergement font cela et font partie de l'analytique des services d'hébergement. Les informations collectées par les fichiers journaux incluent les adresses de protocole Internet (IP), le type de navigateur, le fournisseur de services Internet (ISP), l'horodatage de la date et de l'heure, les pages de renvoi/sortie et éventuellement le nombre de clics. Ces informations ne sont pas liées à des informations personnellement identifiables. L'objectif des informations est pour l'analyse des tendances, l'administration du site, le suivi des mouvements des utilisateurs sur le site Web et la collecte d'informations démographiques.",
      "politicsContent5":"Comme tout autre site Web, Logiciels Hadaly Inc. utilise des 'cookies'. Ces cookies sont utilisés pour stocker des informations, y compris les préférences des visiteurs, et les pages sur le site Web que le visiteur a accédées ou visitées. L'information est utilisée pour optimiser l'expérience des utilisateurs en personnalisant le contenu de notre page Web en fonction du type de navigateur des visiteurs et/ou d'autres informations.",
      "politicsContent6":"Vous pouvez consulter cette liste pour trouver la Politique de Confidentialité de chacun des partenaires publicitaires de Logiciels Hadaly Inc.Les serveurs d'annonces tiers ou les réseaux publicitaires utilisent des technologies comme les cookies, JavaScript ou les balises Web qui sont utilisées dans leurs publicités respectives et liens qui apparaissent sur Logiciels Hadaly Inc., qui sont envoyés directement au navigateur des utilisateurs. Ils reçoivent automatiquement votre adresse IP lorsque cela se produit. Ces technologies sont utilisées pour mesurer l'efficacité de leurs campagnes publicitaires et/ou pour personnaliser le contenu publicitaire que vous voyez sur les sites Web que vous visitez. Notez que Logiciels Hadaly Inc. n'a pas accès ni contrôle sur ces cookies utilisés par des annonceurs tiers.",
      "politicsContent7":"La Politique de Confidentialité de Logiciels Hadaly Inc. ne s'applique pas aux autres annonceurs ou sites Web. Ainsi, nous vous conseillons de consulter les Politiques de Confidentialité respectives de ces serveurs d'annonces tiers pour obtenir plus d'informations détaillées. Cela peut inclure leurs pratiques et des instructions sur la façon de se désinscrire de certaines options. Vous pouvez choisir de désactiver les cookies à travers les options de votre navigateur individuel. Pour obtenir des informations plus détaillées sur la gestion des cookies avec des navigateurs Web spécifiques, elles peuvent être trouvées sur les sites Web respectifs des navigateurs.",
      "politicsContent8":"En vertu de la LPRPDE, parmi d'autres droits, les consommateurs canadiens ont le droit de : Demander à une entreprise qui collecte des données personnelles d'un consommateur de divulguer les catégories et les pièces spécifiques de données personnelles qu'une entreprise a collectées sur les consommateurs. Demander à une entreprise de supprimer toute donnée personnelle sur le consommateur qu'une entreprise a collectée. Demander à une entreprise qui vend des données personnelles d'un consommateur de ne pas vendre les données personnelles du consommateur. Si vous faites une demande, nous avons un mois pour vous répondre. Si vous souhaitez exercer l'un de ces droits, veuillez nous contacter.",
      "politicsContent9":"Nous souhaitons nous assurer que vous êtes pleinement conscient de tous vos droits de protection des données. Chaque utilisateur a droit à ce qui suit : Le droit d'accès – Vous avez le droit de demander des copies de vos données personnelles. Nous pouvons vous facturer des frais minimes pour ce service. Le droit de rectification – Vous avez le droit de demander que nous corrigions toute information que vous croyez inexacte. Vous avez également le droit de demander que nous complétions les informations que vous croyez incomplètes. Le droit à l'effacement – Vous avez le droit de demander que nous effacions vos données personnelles, sous certaines conditions. Le droit de restreindre le traitement – Vous avez le droit de demander que nous restreignions le traitement de vos données personnelles, sous certaines conditions. Le droit de s'opposer au traitement – Vous avez le droit de vous opposer à notre traitement de vos données personnelles, sous certaines conditions. Le droit à la portabilité des données – Vous avez le droit de demander que nous transférions les données que nous avons collectées à une autre organisation, ou directement à vous, sous certaines conditions. Si vous faites une demande, nous avons un mois pour vous répondre. Si vous souhaitez exercer l'un de ces droits, veuillez nous contacter.",
      "politicsContent10":"Une autre partie de notre priorité est d'ajouter une protection pour les enfants lorsqu'ils utilisent Internet. Nous encourageons les parents et les tuteurs à observer, participer et/ou surveiller et guider leur activité en ligne. Logiciels Hadaly Inc. ne collecte pas sciemment des informations personnellement identifiables d'enfants de moins de 13 ans. Si vous pensez que votre enfant a fourni ce genre d'informations sur notre site Web, nous vous encourageons fortement à nous contacter immédiatement et nous ferons de nos meilleurs efforts pour supprimer rapidement ces informations de nos dossiers.",
      "politicsContent11":"Nous pouvons mettre à jour cette politique de confidentialité à notre discrétion de temps à autre en publiant une nouvelle version sur notre site Web. La version actuelle de cette politique de confidentialité a été modifiée le 1 Janvier 2024.",



    
    }
  },
  "fr": {
    "translation": {
        "navbarButtonCallToAction": "Réserver une démo",
        "navbarButton1": "Entreprise",
        "navbarButton2": "Démarrage",
        "navbarButton3": "Consultant en diligence raisonnable",
        "heroTitle1": "Votre copilote de diligence raisonnable pour évaluer rapidement",
        "heroTitle2": "Deal Redlags",
        "heroDescription": "Notre IA de salle de données se connecte à votre fournisseur de salle de données existant. Elle transforme la structure des dossiers et les noms de fichiers pour les aligner sur vos normes internes, y compris en mettant en évidence toute donnée manquante. Nous fournissons également un chatbot IA génératif pour les questions-réponses côté achat de la salle de données.",
        "heroButton1": "Entrer en contact",
        "heroButton2": "S'abonner",
        "section1Title": "Expérience de rapport rapide de drapeau rouge",
        "section1Subtitle": "Parcourez des milliers de documents non structurés dans votre salle de données pour trouver les risques sous-jacents en temps réel.",
        "section1List1": "Se connecter à votre salle de données",
        "section1List2": "Générer vos rapports de risque",
        "section1List3": "Discuter avec votre salle de données pour obtenir des informations supplémentaires",
        "button1Section1": "Dites m'en plus",
        "target1Section1": "Pour les consultants en diligence raisonnable",
        "section2Title": "Construire une salle de données qualitative",
        "section2Subtitle": "Comme votre salle de données reflète l'organisation de votre entreprise, nous assurons l'identification des risques potentiels dans votre salle de données, aidant votre entreprise à rester bien organisée et toujours prête pour les futures levées de fonds et acquisitions.",
        "section2List1": "Téléchargez ou commencez à construire votre salle de données",
        "section2List2": "Détectez les documents manquants à l'avance",
        "section2List3": "Améliorez le score de qualité de votre salle de données",
        "button1Section2": "Dites m'en plus",
        "section2Link": "Téléchargez votre liste de contrôle de salle de données personnelle",
        "target1Section2": "Pour les startups et PME",
        "section3Title": "Expérience de rapport rapide de drapeau rouge",
        "section3Subtitle": "Parcourez des milliers de documents non structurés dans votre salle de données pour trouver les risques sous-jacents en temps réel.",
        "section3List1": "Se connecter à votre salle de données",
        "section3List2": "Générer vos rapports de risque",
        "section3List3": "Discuter avec votre salle de données pour obtenir des informations supplémentaires",
        "button1Section3": "Dites m'en plus",
        "target1Section3": "Pour les consultants en diligence raisonnable",
        "section4Title": "Construire une salle de données qualitative",
        "section4Subtitle": "Comme votre salle de données reflète l'organisation de votre entreprise, nous assurons l'identification des risques potentiels dans votre salle de données, aidant votre entreprise à rester bien organisée et toujours prête pour les futures levées de fonds et acquisitions.",
        "section4List1": "Téléchargez ou commencez à construire votre salle de données",
        "section4List2": "Détectez les documents manquants à l'avance",
        "section4List3": "Améliorez le score de qualité de votre salle de données",
        "button1Section4": "Dites m'en plus",
        "section4Link": "Téléchargez votre liste de contrôle de salle de données personnelle",
        "target1Section4": "Pour les startups et PME",
        "partners": "Faites confiance aux équipes innovantes",
        "marque": "© 2024 Logiciels Hadaly Inc. Tous droits réservés.",
        "newsletterButton": "S'abonner",
        "newsletterPlaceholder": "Entrez votre e-mail",
        "newsletterTitle": "Bulletin d'information",
        "slogan": "Améliorez votre processus de diligence raisonnable avec l'IA"
        }
}
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;