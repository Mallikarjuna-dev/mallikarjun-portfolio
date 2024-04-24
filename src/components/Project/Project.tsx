import { Container } from "./styles";
// import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg";
import chatApp from "../../assets/chatApp-1.png";
import rodanFields from "../../assets/Rodan+feilds-2.png";
import rentoMojo from "../../assets/rentomojo-3.png";
import essentialsIndia from "../../assets/project-2.png";
import restApi from "../../assets/restapi-5.png";
import nineWest from "../../assets/ninewest-6.png";

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
              <a
                href="https://github.com/Mallikarjuna-dev/livechat-mern"
                target="_blank"
                rel="noreferrer"
              >
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
                  <title>Code</title>
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
              </a>
              <div className="project-links">
                <a
                  href="https://livechat-mern.onrender.com/"
                  target="_blank"
                  rel="noreferrer"
                  title="Demo"
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
                <li>JWT</li>
                <li>socket-io</li>
                <li>Express js</li>
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
              <a
                href="https://github.com/Mallikarjuna-dev/serene-scarecrow-3205"
                target="_blank"
                rel="noreferrer"
              >
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
                  <title>Code</title>
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
              </a>
              <div className="project-links">
                <a
                  href="https://serene-scarecrow-3205.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  title="Demo"
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
                <li>Javascript</li>
                <li>React js</li>
                <li>Redux-Thunk</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Chakra UI</li>
                <li>Json-server</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* RentoMojo Clone - Book Selling Site */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <a
                href="https://github.com/Mallikarjuna-dev/rentomojo-clone"
                target="_blank"
                rel="noreferrer"
              >
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
                  <title>Code</title>
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
              </a>

              <div className="project-links">
                <a
                  href="https://rentomojo-clone-lake.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  title="Demo"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="project-image">
              <img src={rentoMojo} alt="project2" width="100%" height="220px" />
            </div>
            <div className="body">
              <h3>RentoMojo Clone - Online Rental Platform</h3>
              <p>
                RentoMojo is an online rental platform that provides furniture,
                appliances & electronics (mobiles, laptops) on a monthly rental
                basis. providing a wide range of products for rent. My team,
                consisting of four members, built this project within one week
                during the Construct Week at Masai.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Javascript</li>
                <li>React js</li>
                <li>Redux-Thunk</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Chakra UI</li>
                <li>Json-server</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* A Goal Setter Application - Restful API Site */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <a
                href="https://github.com/Mallikarjuna-dev/restAPI_mern"
                target="_blank"
                rel="noreferrer"
              >
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
                  <title>Code</title>
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
              </a>
              <div className="project-links">
                <a
                  href="https://restapi-mern.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  title="Demo"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="project-image">
              <img src={restApi} alt="project2" width="100%" height="220px" />
            </div>
            <div className="body">
              <h3>A Goal Setter Application - Restful API Site</h3>
              <p>
                Developed a dynamic goal-setting application with seamless
                registration, login, & backend integration. Utilizing
                cutting-edge technologies like React, Redux/toolkit, Node.js &
                I've crafted an intuitive user friendly interface.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Javascript</li>
                <li>React js</li>
                <li>Redux-Toolkit</li>
                <li>Node js</li>
                <li>MongoDB</li>
                <li>HTML5</li>
                <li>Express js</li>
                <li>JWT</li>
                <li>CSS3</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* ForestEssentialsIndia - Beauty product Site */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <a
                href="https://github.com/Mallikarjuna-dev/forestessentialsindia"
                target="_blank"
                rel="noreferrer"
              >
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
                  <title>Code</title>
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
              </a>
              <div className="project-links">
                <a
                  href="https://festive-golick-9141f1.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  title="Demo"
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

        {/* ForestEssentialsIndia - Beauty product Site */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <a
                href="https://github.com/Mallikarjuna-dev/ninewest-clone"
                target="_blank"
                rel="noreferrer"
              >
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
                  <title>Code</title>
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
              </a>
              <div className="project-links">
                <a
                  href="https://heuristic-lewin-ff60a9.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  title="Demo"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>

            <div className="project-image">
              <img src={nineWest} alt="project2" width="100%" height="220px" />
            </div>

            <div className="body">
              <h3>Nine-West Clone - Fashion Retailer Site</h3>
              <p>
                A clone of NINE-WEST e-commerce website. Nine West is an
                American online fashion retailer. Initially founded as a fashion
                footwear brand, expanded into handbags, sunglasses, outerwear,
                belts, watches, and more accessories.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Javascript</li>
                <li>Advanced Javascript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
