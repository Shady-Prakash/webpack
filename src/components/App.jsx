import '../styles/index.scss';
import Recipes from './Recipes';
import mandela from '../images/mandela.png';
import mandelaSvg from '../images/mandela.svg';

const App = () => {
    return (
        <>
            <section className="hero"></section>
            <main>
                <section>
                    <h1>Oh Hai, React</h1>
                </section>
                <img src={mandela} alt="madela" width="250"/>
                <img src={mandelaSvg} alt="madela" width="250"/>
            </main>

            <Recipes/>
        </>
    )
}

export default App
