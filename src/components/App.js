import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Home";
import About from "./About";
import AboutCity from "./AboutCity";
import Navbar from "./Navbar";

const cities = [
  {
    paragraph:
      "O panorama tecnológico de São Paulo tem inúmeras oportunidades para os nossos graduados. Vamos te orientar através da nossa extensa rede global de ex-alunos e parceiros de contratação em São Paulo e no resto do mundo.",
    link: "sao-paulo",
    title: "São Paulo",
  },
  {
    paragraph:
      "After a long wait, we are finally back to our in-person activities in Miami! The last couple of years highlighted our ability to adapt, and changed the way we carried out our daily lives. Ironhack prides itself on teaching the skills that provide solutions to these changes, and we continue to offer our exciting range of Part-Time and Full-Time courses. Let us guide you through our extensive network of alumni and hiring partners in Miami and the rest of the world.",
    link: "miami",
    title: "Miami",
  },

  {
    paragraph:
      "El ecosistema tecnológico de rápido crecimiento de Ciudad de México tiene muchas oportunidades para nuestros graduados. Te guiaremos a través de nuestra extensa red global de antiguos alumnos y empresas asociadas en México, así como en el resto del mundo.",
    link: "mexico-city",
    title: "Mexico City",
  },
  {
    paragraph:
      "El explosivo ecosistema tecnológico de Barcelona tiene muchas oportunidades para nuestros graduados. Te guiaremos a través de nuestra extensa red global de antiguos alumnos y empresas asociadas en España, así como en el resto del mundo.",
    link: "barcelona",
    title: "Barcelona",
  },
];

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="container mt-5">
          {/* IMPORTANTE: a barra "/" é obrigatória nos paths" */}
          <Route exact path="/">
            <Home />
          </Route>
          <Switch>
            {/* Forma de renderizar componentes por rotas quando não precisamos passar props */}
            {/* <Route path="/about/:city" component={AboutCity} />
          <Route path="/about" component={About} /> */}
            {/* Outra forma de renderizar passando props */}
            <Route
              path="/about/:city"
              render={(routeProps) => {
                return <AboutCity cities={cities} {...routeProps} />;
              }}
            />
            <Route path="/about">
              <About cities={cities} />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
