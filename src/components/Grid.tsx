import { motion } from "framer-motion";

export interface GridProps {
  title: string;
  image: string;
  className?: string;
  isHovered?: boolean; // Indique si l'élément est survolé
  isLarge?: boolean; // Indique si l'élément est agrandi par défaut
  onHover: () => void; // Fonction de gestion du survol
  onLeave: () => void; // Fonction de gestion du retrait de la souris
}

export const Grid = ({ title, image, className, isHovered, isLarge, onHover, onLeave }: GridProps) => {
  return (
    <motion.div
      className={`item ${className} ${isLarge ? "grid__item--large" : ""}`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      
      transition={{ duration: 0.3, ease: "easeInOut",type:"spring" }}
      layout
      initial={{ opacity: 0.8 }}
      animate={{ opacity: 1, scale: isHovered ? 1.2 : 1 }}
    >
      <img src={image} alt={title} />
      <div className="text-overlay">{title.toUpperCase()}</div>
    </motion.div>
  );
};
