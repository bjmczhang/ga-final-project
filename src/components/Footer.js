import {
  EmailIcon,
  FacebookIcon,
  GithubIcon,
  LinkedInIcon,
  SunIcon,
  YoutubeIcon,
} from "../assets/icons";

const Footer = () => {
  return (
    <div className="container">
      <div className="footer">
        <div className="left">
          <p>&copy; {new Date().getFullYear()} Benjamin Zhang </p>
          <a
            target="_blank"
            href="https://github.com/bjmczhang"
            aria-label="@bjmczhang on github"
            className="social-icon"
          >
            {<GithubIcon />}
          </a>
          <a
            target="_blank"
            href="https://www.youtube.com/@theAceDev"
            aria-label="@theAceDev on youtube"
            className="social-icon"
          >
            {<YoutubeIcon />}
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/benjamin-zhang-965359262/"
            aria-label="@bjmczhang on linkedin"
            className="social-icon"
          >
            {<LinkedInIcon />}
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/benjamin.chao.zhang"
            aria-label="@bjmczhang on facebook"
            className="social-icon"
          >
            {<FacebookIcon />}
          </a>
          <a
            target="_blank"
            href="mailto:bjmczhang@gmail.com"
            aria-label="@bjmczhang email"
            className="social-icon"
          >
            {<EmailIcon />}
          </a>
        </div>
        <div className="right">
          <p>
            <em>
              Disclaimer: 👋 Hi there. I enjoy coding and like to summarize some
              of my personal thoughts. These are my opinions, and not
              necessarily the views of my employer.
            </em>
          </p>
          <p>
            Built with{" "}
            <span>
              <a target="_blank" href="https://react.dev/">
                React
              </a>
            </span>
            . Source code on{" "}
            <span>
              <a target="_blank" href="https://github.com/bjmczhang">
                GitHub
              </a>
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
