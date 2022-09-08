import gitHupIcone from "../assets/images/mark-github-24@2x.png";
import linkedinIcone from "../assets/images/Linkedin@2x.png";

function Footer () {
    function github () {
        window.location.replace('https://github.com/JulianOsorioRamirez?tab=repositories');
      }
      function linkedin () {
        window.location.replace('https://www.linkedin.com/in/julian-osorio-ramirez-69559a165/');
      }
    return (
        <div>
            <footer className="footer">
         <div className="footerBtn">
         <p class="Call-me">
              Llamame:
              +34 606-871-605
            </p>
            <p class="Call-me">
              Email:
              jurianu1214@gmail.com
            </p>
            <img className="gitIconeImg" onClick={github} src={gitHupIcone} alt="" />
            <img className="gitIconeImg" onClick={linkedin} src={linkedinIcone} alt="" />
         </div>

       </footer>

        </div>
    )
}

export default Footer