
import { Link } from "react-router-dom";

interface SectionCardProps {
  title: string;
  description: string;
  icon: string;
  bgColor: string;
  to: string;
}

const SectionCard = ({ title, description, icon, bgColor, to }: SectionCardProps) => {
  return (
    <Link to={to} className={`section-card ${bgColor} text-white`}>
      <img src={icon} alt={title} className="section-icon animate-bounce-slight" />
      <h3 className="text-xl md:text-2xl text-center">{title}</h3>
      <p className="text-center text-white/90">{description}</p>
    </Link>
  );
};

export default SectionCard;
