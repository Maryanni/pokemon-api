import "../App.css";
import pikachu2 from "../assets/images/pikachu2.png";
import { Link } from "react-router-dom";


function Home() {
  return (
    <div className="content flex flex-col items-center">
      <img className="w-64 h-64" src={pikachu2} alt="Pikachu" />
      <span className="font-bold text-2xl">Welcome to Pokédex</span>
      <p className="text-gray m-8 text-center text-lg">
        The digital encyclopedia created by Professor Oak is an invaluable tool
        to Trainers in the Pokémon world.
      </p>
      <Link className="btn bg-red-600 text-white capitalize py-3 px-5 rounded-full font-bold" to="/list">
        Get started
      </Link>
    </div>
  );
}

export default Home;
