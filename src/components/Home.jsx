import {useNavigate} from 'react-router-dom'

const Home = ( ) => {
    const navigate = useNavigate

    function sayHi () {
       return("Bonjour!! ")
    }

    const handleClick = () => {
        navigate('/');
      }; 

    return (
        <h2 style={{color: 'teal', fontWeight: 'bolder', display:'block', border: '2px gray outset' }}> 
           <button onClick={handleClick()}> Bonjour </button>
        </h2>
    )
}

export default Home 