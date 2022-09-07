import dGif from "../assets/images/developerGif.gif";
import bGif from "../assets/images/bootcampGif.gif";
import theBridgeLogo from "../assets/images/theBridgeLogo.png";

function Scroll() {
  return (
    <div class="scroll-container">
      <div class="scroll-area">
        <h2 className="scrollTitle">
          Bootcamp en desarrollo Web, Sabes lo que es?
        </h2>
        <img className="imgCards" src={dGif} />
      </div>
      <div class="scroll-area">
        <p className="textScroll">
          Los bootcamps son un formato <span className="educ">educativo</span>{" "}
          innovador que se han desarrollado como respuesta a la{" "}
          <span className="educ">necesidad</span> de las empresas de contratar
          talento con <span className="hab">habilidades</span> tecnológicas
          básicas y la falta de profesionales o recién graduados con dichas{" "}
          <span className="hab">habilidades</span>. En Estados Unidos ya es una
          fuente principal de{" "}
          <span className="educ">formación y contratación</span> en las áreas de
          desarrollo de <span className="hab">Software</span>,{" "}
          <span className="bd">ciencia de datos</span> y{" "}
          <span className="uix">diseño de experiencia de usuario</span>.
          Empresas como Google, Facebook, Amazon, American Express, IBM,... son
          habituales reclutadores de bootcamps de{" "}
          <span className="educ">escuelas</span> especializadas en este formato.
        </p>
        <img className="imgCards2" src={bGif} />
      </div>
      <div class="scroll-area">
        <img className="imgCards3" src={theBridgeLogo} />
        <p>Mi paso por The Bridge han sido mas de 480h en su gran mayoria practicas, donde no solo aprendi
           el uso y entendimiento de las principales Technologias usadas en el sector, si no ademas el trabajo 
           en equipo, la reolucion de problemas y la buena comunicacion tanto con mis compañeros de proyectos
           como con las distintas verticales que forman el desarrollo de una aplicacion web, como UIX,Marketing, ciberseguridad
           etc..
        </p>
      </div>
      <div class="scroll-area">4</div>
    </div>
  );
}
export default Scroll;
