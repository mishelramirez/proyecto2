import { Card } from "./Component/Cards";


function App() {
  return <>
    <div>
      <div className="title">
        <p className="title1"> Reliable, efficient delivery</p>
        <h1 className="title2"> Powered by technology</h1>
        <p className="text"> our artificial intelligence powered tools use millons of project data <br /> points  to ensure thet your project successful</p>
      </div>
      <div>
        <Card
          titulo="Supervisor"
          texto="Monitors activity to identify project road blocks"
          src="src/assets/icon-supervisor.svg"
        />
      </div>
    </div>
  </>;
}

export default App;
/*ruta relativa y apbsoluta */
