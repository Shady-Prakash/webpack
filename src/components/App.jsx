import '../styles/index.scss';
import Recipes from './Recipes';
import Whatever from './Whatever';


const App = () => {
    return (
        <>
            <section className="hero"></section>
            <main>
                <section>
                    <h1>Oh Hai, React</h1>
                </section>
                
            </main>

            <Recipes/>
            <Whatever/>
        </>
    )
}

export default App
