import { useNavigate } from 'react-router-dom';

function NoPokemon(){
    const navigate = useNavigate();

    const backHome = () => {
        navigate('/');
    }
    return(
        <div className="flex flex-col">
            <span className="font-bold mb-5 text-3xl">Uh-oh!</span>
            <span className="mb-5">You look lost on your journey.</span>
            <button className="bg-gray-300 rounded-full font-bold text-white" onClick={backHome}>Go back to home</button>
        </div>
    )
}

export default NoPokemon;