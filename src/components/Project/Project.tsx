import { Container } from "./styles";
// import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg";
import chatApp from "../../assets/chatApp-1.png";
import rodanFields from "../../assets/Rodan+feilds-2.png";
import rentoMojo from "../../assets/rentomojo-3.png";
import essentialsIndia from "../../assets/project-2.png";

import ScrollAnimation from "react-animate-on-scroll";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        {/* LiveChat App - MERN Application */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="40"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://kameleon.co.in/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="project-image1">
              <img src={chatApp} alt="project2" width="100%" height="220px" />
            </div>
            <div className="body">
              <h3>LiveChat App - MERN Application</h3>
              <p>
                Developed a chat application from scratch to Production
                including frontend, backend, production and maintenance using
                MERN stack web development technologies. User Authentication &
                authorization by JWT token and mobile OTP by Firebase/Auth. Real
                time chat & notification feature by Socket.io.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Javascript</li>
                <li>React js</li>
                <li>Node js</li>
                <li>MongoDB</li>
                <li>Firebase-auth</li>
                <li>socket-io</li>
                <li>Tailwindcss</li>
                <li>& Chakra UI</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* Rodan+Fields - Skincare products site */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="40"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://madewithluv.in/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="project-image">
              <img
                src={rodanFields}
                alt="Rodan fields"
                width="100%"
                height="220px"
              />
            </div>
            <div className="body">
              <h3>Rodan+Fields - Skincare products site</h3>
              <p>
                Rodan & Fields also known as R+F, is an American multi-level
                marketing company specializing in skincare products. It uses
                independent consultants to sell its products. I along with my 2
                team members built this project in 5 days time duration in the
                construct week at Masai.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React js</li>
                <li>Javascript</li>
                <li>Redux-Thunk</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Chakra UI</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* RentoMojo Clone - Book Selling Site */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="40"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://justmedicalbooks.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="project-image">
              <img src={rentoMojo} alt="project2" width="100%" height="220px" />
            </div>
            <div className="body">
              <h3>RentoMojo Clone - Book Selling Site</h3>
              <p>
                RentoMojo is an online rental company that offers rental
                services for everything you need, from furniture to appliances.
                It is India's leading rental platform, providing a wide range of
                products for rent. My team, consisting of four members, built
                this project within one week during the Construct Week at Masai.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Javascript</li>
                <li>React js</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Chakra UI</li>
                <li>Json-server</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* ForestEssentialsIndia - Beauty product Site */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="40"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://justmedicalbooks.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="project-image">
              <img
                src={essentialsIndia}
                alt="project2"
                width="100%"
                height="220px"
              />
            </div>
            <div className="body">
              <h3>ForestEssentialsIndia - Beauty product Site</h3>
              <p>
                A clone of Forest Essentials India e-commerce website. Forest
                Essential India is a Indian Ayurvedic Beauty product website. We
                made a fully dynamic website of forestessentialsindia .com
                within 1 week with team of 5 members.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Javascript</li>
                <li>HTML5</li>
                <li>CSS3</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://drrohitdamor.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Dr.Rohit Damor - Online Appointment Booking Site</h3>
              <p>
                This website allows people to easily book appointments with you
                online. It takes just a minute to schedule a meeting. This kind
                of site is helpful for booking appointments and not missing any
                potential clients. You should try this website to see how
                convenient and efficient it is.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://velocityai.vinayaksingh.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>VeloCityAI</h3>
              <p>
                VelocityAI is a website that allows users to get instant answers
                to any question and generate stunning AI pictures using OpenAI's
                GPT-3 and DALL-E model.With VelocityAI, users can type in
                text-based prompts and receive a corresponding response.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Typescript</li>
                <li>Html</li>
                <li>css</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
