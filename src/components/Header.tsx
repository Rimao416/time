

export interface HeaderPros {
  title: string;
  description: string;
  image: string;
  link: string;
}
const Header = ({ title, description, image, link }: HeaderPros) => {
  return (
    <>
      <img src={image} alt={image} />
        <div className="header__gradient"></div>
      <div className="header__text">
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={link}>Visiter</a>
      </div>
    </>
  );
};
export default Header;
