import styles from './HeroStyles.module.css';
import ihzaPic from '../../assets/ihza.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import whatsappLight from '../../assets/wa-light.png';
import whatsappDark from '../../assets/wa-dark.png';
import linkedinDark from '../../assets/linkedin-dark.svg';
import igDark from '../../assets/ig-dark.png';
import igLight from '../../assets/ig-light.png';
import fbLight from '../../assets/fb-light.png';
import fbDark from '../../assets/fb-dark.png';
// import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const whatsappIcon = theme === 'light' ? whatsappLight : whatsappDark;
  const instagramIcon = theme === 'light' ? igLight : igDark;
  const fbIcon = theme === 'light' ? fbLight : fbDark;


  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={ihzaPic}
          className={styles.hero}
          alt="Profile picture of Ihza"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Ihza
          <br />
          Mahendra
          <br />
          Sofyan
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://wa.me/089692070270/" target="_blank">
            <img src={whatsappIcon} alt="WhatsApp icon" />
          </a>
          <a href="https://www.instagram.com/ihza6661/" target="_blank">
            <img src={instagramIcon} alt="Instagram icon" />
          </a>
          <a href="https://www.facebook.com/Casablancas6661/" target="_blank">
            <img src={fbIcon} alt="facebook icon" />
          </a>
          {/* <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a> */}
          {/* <a href="https://github.com/" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a> */}
          {/* <a href="https://linkedin.com/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a> */}
        </span>
        <p className={styles.description}>
        </p>
        {/* <a href='https://www.instagram.com/ihza6661/' target='blank'>
          <button className="hover">Follow</button>
        </a> */}
      </div>
    </section>
  );
}

export default Hero;
