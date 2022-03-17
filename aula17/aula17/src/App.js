import './App.css';
import BotaoMenu from './components/BotaoMenu';

function App() {
  return (
    <div className="App">
        <header>
            <h1>GabiTube</h1>
            <input type='text' placeholder='Busca'id='campoDeBusca'></input>
        </header>
        <main>
            <nav className='menuVertical'>
                <ul>
                  <BotaoMenu titulo='Início'/>
                  <BotaoMenu titulo='Em alta'/>
                  <BotaoMenu titulo='Inscrições'/>
                  <hr />
                  <BotaoMenu titulo='Biblioteca'/>
                  <BotaoMenu titulo='Histórico'/>
                  <BotaoMenu titulo='Originais'/>
                </ul>
            </nav>
            <section className='painelVideos'>

            <iframe width="250" height="250" src="https://www.youtube.com/embed/8x-M7AkTvrQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <iframe width="250" height="250" src="https://www.youtube.com/embed/XXYlFuWEuKI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <iframe width="250" height="250" src="https://www.youtube.com/embed/rQ7tMWOCQlM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <iframe width="250" height="250" src="https://www.youtube.com/embed/IOoyQFsjkW4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <iframe width="250" height="250" src="https://www.youtube.com/embed/A1RmVl5Vwmk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <iframe width="250" height="250" src="https://www.youtube.com/embed/1__CAdTJ5JU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <iframe width="250" height="250" src="https://www.youtube.com/embed/uLY2M8Woco0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <iframe width="250" height="250" src="https://www.youtube.com/embed/SX99whBV_sE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            </section>
        </main>
        <footer>

        </footer>

    </div>
  );
}

export default App;
