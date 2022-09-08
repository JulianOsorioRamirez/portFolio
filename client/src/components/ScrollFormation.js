import dGif from "../assets/images/developerGif.gif";
import bGif from "../assets/images/bootcampGif.gif";
import theBridgeLogo from "../assets/images/theBridgeLogo.png";

function Scroll() {
  function platzi () {
    window.location.replace('https://platzi.com/');

  }
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
        <div className="textScroll3">
          <p>
            Mi paso por The Bridge han sido más de 480h en su gran mayoría
            prácticas, donde no solo aprendí el uso y entendimiento de las
            principales <span className="tech">Tecnologías</span> usadas en el sector, si no ademas el trabajo
            en <span className="tech">equipo</span>, la resolución de problemas y la buena comunicación tanto
            con mis compañeros de proyecto como con las distintas verticales que
            forman el <span className="tech">desarrollo</span> de una aplicación web, como UIX, Marketing,
            ciberseguridad etc..
          </p>
        </div>
      </div>
      <div class="scroll-area">
        <p className="pSkills2">Tambien he tomado cursos en un total de 100h en la plataforma educativa <u onClick={platzi}>Platzi.</u></p>
        <p className="pSkills3">Ademas de diferentes cursos en Code Academy, Code wars y OpenWebinars</p>
        <p className="pSkills2">Enfocados en reforzar la algoritmia y razonamiento lógico,El diseño de Webs y los diferentes y actuales FrameWorks de JavaScript</p>
      </div>
    </div>
  );
}
export default Scroll;
