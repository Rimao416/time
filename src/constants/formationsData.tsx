import Preparatoire from "../assets/preparatoir.jpg";
import Ingenieur from "../assets/ingenieur.jpg";
import Licence from "../assets/licence.jpg";
import Master from "../assets/master.jpg";
interface formationsPros {
  title: string;
  image: string;
  description: string;
  link: string;
}
export const formationsData: formationsPros[] = [
  {
    title: "Cycle Préparatoire",
    description:
      " Les bacheliers sont orientés au tronc commun suivant Mathématiques-Physique-Informatique (MPI)",
    image:Preparatoire,
    link: "",
  },
  {
    title: "Cycle Ingenieur",
    description:
      "Ce cycle dure 3 ans et l’admission à ce cycle se fait par voie de concours ouvert aux étudiants inscrits en cycle préparatoire intégré de TIME.",
    image:Ingenieur,
    link: "",
  },
  {
    title: "Cycle Licence",
    description:
      "Ce cycle dure 3 ans et l’admission à ce cycle se fait par voie de concours ouvert aux étudiants inscrits en cycle préparatoire-interro de TIME.",
    image: Licence,
    link: "",
  }
,
  {
    title: "Cycle Master",
    description:
      "Ce cycle dure 2 ans et l’admission à ce cycle se fait par voie de concours ...",
    image: Master,
    link: "",
  }

];
