import { HeaderPros } from "../components/Header";

export const headerData: HeaderPros[] = [
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Lorem Ipsum Consectetur Adipiscing Elit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
  },
  {
    title: "Lorem Ipsum Sed Do Eiusmod Tempor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
  },
  {
    title: "Lorem Ipsum Ut Enim Ad Minim Veniam",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
  },
  {
    title: "Lorem Ipsum Quis Nostrum Exercitationem",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
  },
  {
    title: "Lorem Ipsum Proident, Sunt In Culpa",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit.",
  },
  {
    title: "Lorem Ipsum Vivamus At Nulla",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat consequat arcu, sit amet dictum nisi.",
  },
  {
    title: "Lorem Ipsum Morbi Tempus Felis",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non lectus nec nisi pretium auctor ut ut eros.",
  },
  {
    title: "Lorem Ipsum Curabitur Convallis",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula diam a orci sollicitudin, a tincidunt dui.",
  },
  {
    title: "Lorem Ipsum Phasellus In Gravid",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus convallis erat nec quam convallis, ut gravida lacus faucibus.",
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    day: "15",
    month: "JAN",
  },
  {
    title: "Pré-inscription Mastère",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    day: "19",
    month: "JAN",
  },
  {
    title: "Pré-inscription Cycle Préparatoire",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
    day: "21",
    month: "JAN",
  },
  {
    title: "Pré-Inscription Cycle Ingénieur",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
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
  