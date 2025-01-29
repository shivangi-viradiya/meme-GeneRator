import trollface from "../Images/troll-face.png";
import "../App.css";

const Header = () => {
  return (
    <header className="header">
      <img src={trollface} alt="trollface" />
      <h1>Meme GeneRator</h1>
    </header>
  );
};

export default Header;
