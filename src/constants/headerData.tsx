import { HeaderPros } from "../components/Header";

export const headerData: HeaderPros[] = [
  {
    title: "Time Université Lance un Nouveau Programme de Master",
    description:
      "Time Université annonce le lancement d'un nouveau programme de Master en Intelligence Artificielle et Big Data, destiné aux étudiants souhaitant se spécialiser dans ces domaines en pleine croissance.",
  },
  {
    title: "Cérémonie de Remise des Diplômes 2024",
    description:
      "La cérémonie de remise des diplômes de Time Université se tiendra le 15 juin 2024 au campus principal. Les familles et amis sont invités à célébrer les réussites des étudiants.",
  },
  {
    title: "Conférence Internationale sur la Technologie Éducative",
    description:
      "Time Université accueillera la Conférence Internationale sur la Technologie Éducative en novembre prochain, réunissant des experts du monde entier pour discuter de l'avenir de l'éducation.",
  },
  {
    title: "Ouverture de la Nouvelle Bibliothèque Digitale",
    description:
      "La nouvelle bibliothèque digitale de Time Université est maintenant accessible. Elle offre aux étudiants un accès illimité à des ressources académiques et scientifiques en ligne.",
  },
  {
    title: "Partenariat avec des Universités Internationales",
    description:
      "Time Université a signé un partenariat avec plusieurs universités internationales pour offrir aux étudiants des opportunités d'échanges académiques et des doubles diplômes.",
  },
  {
    title: "Séminaire sur l'Entrepreneuriat et l'Innovation",
    description:
      "Un séminaire sur l'entrepreneuriat et l'innovation aura lieu en octobre. Il est ouvert aux étudiants, enseignants, et entrepreneurs en herbe pour encourager la création de startups.",
  },
  {
    title: "Journée Portes Ouvertes 2024",
    description:
      "La Journée Portes Ouvertes de Time Université se déroulera le 1er avril 2024. C’est l’occasion pour les futurs étudiants de découvrir les campus et les programmes proposés.",
  },
  {
    title: "Concours de Développement Durable",
    description:
      "Time Université organise un concours sur le développement durable. Les étudiants sont invités à soumettre leurs projets innovants pour réduire l'empreinte carbone du campus.",
  },
  {
    title: "Programme de Mentorat pour les Nouveaux Étudiants",
    description:
      "Un nouveau programme de mentorat a été lancé pour soutenir les étudiants de première année. Les anciens élèves et les professeurs joueront un rôle clé dans ce programme.",
  },
  {
    title: "Bourses d'Études pour les Étudiants Internationaux",
    description:
      "Time Université annonce de nouvelles bourses d'études pour les étudiants internationaux, encourageant ainsi une diversité culturelle sur ses campus.",
  },
];

interface calendarPros {
  title: string;
  description: string;
  day: string;
  month: string;
}

export const calendarData: calendarPros[] = [
  {
    title: "Pré-inscription Licence",
    description:
      "Les étudiants souhaitant s'inscrire au programme de Licence pour l'année académique 2024 peuvent déposer leur dossier de pré-inscription en ligne avant la date limite.",
    day: "15",
    month: "JAN",
  },
  {
    title: "Pré-inscription Mastère",
    description:
      "Les futurs candidats au Mastère sont invités à compléter leur pré-inscription en fournissant leurs relevés de notes et lettres de motivation avant la date du 19 janvier.",
    day: "19",
    month: "JAN",
  },
  {
    title: "Pré-inscription Cycle Préparatoire",
    description:
      "Les élèves intéressés par le Cycle Préparatoire sont appelés à soumettre leur demande de pré-inscription avant le 21 janvier pour commencer leurs études en septembre.",
    day: "21",
    month: "JAN",
  },
  {
    title: "Pré-Inscription Cycle Ingénieur",
    description:
      "Les étudiants en fin de cycle préparatoire ou titulaires d'un diplôme équivalent peuvent postuler au Cycle Ingénieur via la procédure de pré-inscription ouverte jusqu'au 22 janvier.",
    day: "22",
    month: "JAN",
  },
];



interface TitleProps{
  title: string
}
export const Title: TitleProps[] = [
    {
      title: "Chaque Etudiant Participe À Construire un avenir Meilleur, Étape par Étape",
    },
    {
      title: "L'innovation est au cœur de notre parcours académique",
    },
    {
      title: "Nous cultivons l'esprit critique pour un changement positif",
    },
    {
      title: "Chaque voix compte dans la création d'un futur durable",
    },
    {
      title: "L'apprentissage est une aventure collective",
    },
    {
      title: "Nous formons des leaders pour un monde meilleur",
    },
    {
      title: "La collaboration est essentielle pour réussir ensemble",
    },
    {
      title: "L'engagement des étudiants façonne notre communauté",
    },
    {
      title: "Nous croyons en un avenir où chacun a sa place",
    },
    {
      title: "L'engagement des étudiants permet de contribuer à un avenir meilleur",
    },
  ];
  