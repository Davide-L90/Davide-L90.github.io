import profilePic from "./profile.jpg";
import it from "./translations/it.json";
import en from "./translations/en.json";

function Sidebar({language, setLanguage}) {
	
  return (
    <header className="App-header">
      <div className="pic-container pt-3">
        <img src={profilePic} className="profile-pic" alt="face" />
      </div>
      <p className="text-center mb-0 mt-2">14/07/1990</p>
      <p className="text-center mb-0 mt-2">
        <span id="italian" onClick={() => setLanguage(it)}>
          IT
        </span>{" "}
        |{" "}
        <span id="english" onClick={() => setLanguage(en)}>
          EN
        </span>
      </p>
      <hr className="mt-2" />
      <div className="container-fluid pl-0">
        <h1 className="title_white pl-1">
          {language.about}
          <div className="arrow-right"></div>
        </h1>
        <div className="row no-gutters mb-2 pl-3">
          <div className="about_me col-12">{language.aboutDesc}</div>
        </div>
      </div>
      <div className="container-fluid pl-0">
        <h1 className="title_white pl-1">
          {language.contact}
          <div className="arrow-right"></div>
        </h1>
        <div className="row no-gutters mb-2 pl-3">
          <div className="col-1 col-md-2 icon_cnt">
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <div className="col-11 col-md-10">Roma (RM)</div>
        </div>
        <div className="row no-gutters mb-2 pl-3">
          <div className="col-1 col-md-2 icon_cnt">
            <i className="far fa-envelope-open"></i>
          </div>
          <div className="col-11 col-md-10">
            <span id="email_line">davide.lecci90@gmail.com</span>
          </div>
        </div>
        <div className="row no-gutters mb-2 pl-3">
          <div className="col-1 col-md-2">
            <a className="social_icon" href="https://github.com/Davide-L90">
              <i className="fab fa-github"></i>
            </a>
          </div>
          <div className="col-1 col-md-2 ml-2 ml-sm-0">
            <a
              className="social_icon"
              href="https://www.linkedin.com/in/davide-lecci-902858165/"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="container-fluid pl-0">
        <h1 className="title_white pl-1">
          Hard skills
          <div className="arrow-right"></div>
        </h1>
        <div className="row no-gutters pl-3 mb-2">
          <div className="col-4 col-sm-3 col-md-6 col-lg-4">Html</div>
          <div className="col-4 col-sm-3 col-md-6 col-lg-4">CSS</div>
          <div className="col-4 col-sm-3 col-md-6 col-lg-4">Bootstrap</div>
          <div className="col-4 col-sm-3 col-md-6 col-lg-4">JavaScript</div>
          <div className="col-4 col-sm-3 col-md-6 col-lg-4">Vue</div>
          <div className="col-4 col-sm-3 col-md-6 col-lg-4">Storybook</div>
          <div className="col-4 col-sm-3 col-md-6 col-lg-4">JQuery</div>
          <div className="col-4 col-sm-3 col-md-6 col-lg-4">Rest Api</div>
          <div className="col-4 col-sm-3 col-md-6 col-lg-4">SCSS</div>
          <div className="col-4 col-sm-3 col-md-6 col-lg-4">MySql</div>
          <div className="col-4 col-sm-3 col-md-6 col-lg-4">PHP</div>
          <div className="col-4 col-sm-3 col-md-6 col-lg-4">PhpMyAdmin</div>
          <div className="col-4 col-sm-3 col-md-6 col-lg-4">Git</div>
          <div className="col-4 col-sm-3 col-md-6 col-lg-4">Laravel</div>
          <div className="col-4 col-sm-3 col-md-6 col-lg-4">Symfony</div>
          <div className="col-4 col-sm-3 col-md-6 col-lg-4">Burpsuite</div>
          <div className="col-4 col-sm-3 col-md-6 col-lg-4">Wireshark</div>
          <div className="col-4 col-sm-3 col-md-6 col-lg-4">NMap</div>
          <div className="col-4 col-sm-3 col-md-6 col-lg-4">Nessus</div>
          <div className="col-4 col-sm-3 col-md-6 col-lg-4">Shodan</div>
          <div className="col-4 col-sm-3 col-md-6 col-lg-4">Maltego</div>
          <div className="col-4 col-sm-3 col-md-6 col-lg-4">Hydra</div>
          <div className="col-4 col-sm-3 col-md-6 col-lg-4">Metasploit</div>
          <div className="col-4 col-sm-3 col-md-6 col-lg-4">
            John the ripper
          </div>
          <div className="col-4 col-sm-3 col-md-6 col-lg-4">Linux</div>
          <div className="col-4 col-sm-3 col-md-6 col-lg-4">Windows</div>
        </div>
      </div>
      <div className="container-fluid pl-0">
        <h1 className="title_white pl-1">
          Soft skills
          <div className="arrow-right"></div>
        </h1>
        <div className="row no-gutters pl-3 pb-3">
          <div className="col-4 col-md-6">{language.autonomy}</div>
          <div className="col-4 col-md-6">{language.cooperation}</div>
          <div className="col-4 col-md-6">{language.adaptability}</div>
          <div className="col-4 col-md-6">{language.precision}</div>
          <div className="col-4 col-md-6">{language.communication}</div>
          <div className="col-4 col-md-6">{language.empathy}</div>
          <div className="col-4 col-md-6">{language.stress}</div>
        </div>
      </div>
    </header>
  );
}

export default Sidebar;
