import ReactSvg from "../../assets/react.svg";
import "./HomeRoute.css";

export const HomeRoute = () => {
  return (
    <div className="home">
      <img src={ReactSvg} alt="react-icon" />
      <div>Home Example</div>
    </div>
  );
};
