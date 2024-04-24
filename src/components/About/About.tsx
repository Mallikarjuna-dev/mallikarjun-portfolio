import { Container } from "./styles";
import MallikarjunaAnnigeri from "../../assets/MallikarjunaAnnigeri.png";
import expressIcon from "../../assets/express-icon.svg";
import mongodbIcon from "../../assets/mongodb-icon.svg";
import nextjsIcon from "../../assets/nextjs-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import gitIcon from "../../assets/git-icon.svg";
import npmIcon from "../../assets/npm-icon.svg";
import postmanIcon from "../../assets/postman-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import vercelIcon from "../../assets/vercel-icon.svg";
import netlifyIcon from "../../assets/netlify-icon.svg";
import vscodeIcon from "../../assets/vscode-icon.svg";
import tailwindcssIcon from "../../assets/tailwindcss-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Welcome to my portfolio! I'm Mallikarjuna, a dedicated website
            developer with a passion for crafting unique online experiences.
            Specializing in JavaScript, React, Node.js, HTML, CSS, and Tailwind
            CSS, I bring expertise in both frontend and backend technologies to
            every project.
            {/* Hi there! I'm Vinayak, a website developer with a passion for
            creating custom online experiences for my clients. With a skill set
            including HTML, CSS, JavaScript, and React, I have the tools to
            bring any website vision to life. */}
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.2 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p>
            In addition to my proficiency in MERN stack development, I excel in
            creating dynamic web solutions tailored to your needs. Whether it's
            building robust APIs, integrating third-party services, or
            optimizing performance, I'm committed to delivering exceptional
            results.
            {/* Beyond custom development, I specialize in leveraging MERN stack
            technologies to empower clients to manage and maintain their web
            presence effortlessly. Whether it's building dynamic user interfaces
            or implementing scalable backend solutions, I've got you covered. */}
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          {/* <p>
            So if you're in need of a new website or just looking to revamp your
            current online presence, I'd love to chat and see how I can help.
            Let's bring your website dreams to reality together!
          </p> */}
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          {/* <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
              <img src={wordpress} alt="Wordpress" />
            </ScrollAnimation>
          </div> */}
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={jsIcon} alt="javaScript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={htmlIcon} alt="html5" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={cssIcon} alt="css3" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="reactjs" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={nextjsIcon} alt="nextjs" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={nodeIcon} alt="nodejs" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={mongodbIcon} alt="mongoDB" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={expressIcon} alt="expressjs" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={tailwindcssIcon} alt="tailwindcss" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={boostrapIcon} alt="bootstrap" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={typescriptIcon} alt="typescript" />
            </ScrollAnimation>
          </div>
        </div>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Other skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
              <img src={vscodeIcon} alt="vscode" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={gitIcon} alt="gitbash" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={npmIcon} alt="npm" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
              <img src={vercelIcon} alt="vercel" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
              <img src={netlifyIcon} alt="netlify" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={postmanIcon} alt="postman" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={vueIcon} alt="Vue" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.2 * 1000}>
          <img src={MallikarjunaAnnigeri} alt="Mallikarjuna Annigeri" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
