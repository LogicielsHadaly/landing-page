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


    }
  },
  "fr": {
    "translation": {
      "heroTitle1": "Votre copilote de diligence raisonnable pour évaluer rapidement",
      "heroTitle2": "Deal Redlags",
      "heroDescription": "Notre IA de salle de données se connecte à votre fournisseur de salle de données existant. Il transforme la structure des dossiers et les noms de fichiers pour s'aligner sur vos normes internes, y compris en mettant en évidence les données manquantes. Nous fournissons également un chatbot IA génératif pour les questions-réponses côté achat de la salle de données.",
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
      "partners": "Faites confiance aux équipes innovantes",
      "marque": "© 2024 Logiciels Hadaly Inc. Tous droits réservés.",
      "newsletterButton": "S'abonner",
      "newsletterPlaceholder": "Entrez votre e-mail",
      "newsletterTitle": "Bulletin d'information",
      "slogan": "Améliorez votre processus de diligence raisonnable avec l'IA",
      "navbarButtonCallToAction": "Réserver une démonstration",
      "navbarButton1": "Société",
      "navbarButton2": "Démarrage",
      "navbarButton3": "Consultant en diligence raisonnable"
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