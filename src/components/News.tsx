import Ai from "../assets/ai.jpg"; 
import Startup from "../assets/startups.jpg"; 
import Chercheur from "../assets/chercheurs.jpg"; 
import Realite from "../assets/realite.jpg"; 
import Informatique from "../assets/informatique.jpg"; 
interface NewsProps {
    image: string;
    title: string;
    description: string;
    link: string;
}

export const NewsData: NewsProps[] = [
    {
        title: "Un nouveau modèle d'IA révolutionne le traitement du langage naturel",
        image: Ai,
        description: "Un nouveau modèle d'intelligence artificielle, entraîné sur un vaste ensemble de données, établit de nouvelles références dans la compréhension du langage humain, améliorant ainsi l'expérience des chatbots et des traductions.",
        link: ""
    },
    {
        title: "Les startups technologiques prospèrent malgré la crise économique",
        image: Startup,
        description: "Malgré les défis économiques mondiaux, les startups technologiques continuent de prospérer, beaucoup se concentrant sur les solutions de télétravail et la durabilité.",
        link: ""
    },
    {
        title: "Des chercheurs développent une technologie de batterie écologique",
        image: Chercheur,
        description: "Une avancée dans la technologie des batteries pourrait offrir des solutions énergétiques plus durables, remplaçant les composants traditionnels au lithium-ion par des matériaux respectueux de l'environnement.",
        link: ""
    },
    {
        title: "La réalité virtuelle va transformer l'avenir de l'éducation",
        image: Realite,
        description: "Les experts prédisent que la réalité virtuelle deviendra une pierre angulaire de l'éducation moderne, permettant aux étudiants d'explorer des événements historiques et des concepts scientifiques complexes de manière immersive.",
        link: ""
    },
    {
        title: "Nouvelle avancée dans le domaine de l'informatique quantique",
        image: Informatique,
        description: "Les scientifiques ont franchi une nouvelle étape dans l'informatique quantique, nous rapprochant potentiellement de la résolution des problèmes les plus complexes au monde en une fraction de temps.",
        link: ""
    }
];
