import { Card } from "./Component/Cards";


function App() {
  return <>
    <div>
      <div className="title">
        <p className="title1"> Reliable, efficient delivery</p>
        <h1 className="title2"> Powered by technology</h1>
        <p className="text"> our artificial intelligence powered tools use millons of project data <br /> points  to ensure thet your project successful</p>
      </div>
      <div className="container">
        <div className="card1">
          <Card
            titulo="Supervisor"
            texto="Monitors activity to identify project  road blocks"
            img="imagen1"
          />
        </div>
        <div className="contenedor2">
          <div className="card2">
            <Card
              titulo="Team Builder"
              texto="Scans our talent network to create the optimal team for your project"
              img="imagen2"/>
          
          </div>

          <div className="card3">
            <Card
              titulo="Karma"
              texto=" Regularly evaluates our telent to ensure quality"
              img="imagen3" />
          </div>
          </div>
        <div className="card4">
          <Card
            titulo="Calculator"
            texto="Uses data from past projects to provide better delivery estimates"
            img="imagen4"
          />
        </div>
      </div>
    </div>
  </>;
}

export default App;
/*ruta relativa y apbsoluta */
