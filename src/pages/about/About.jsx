import { styles } from "./About.style";

const About = () => {
  return (
    <div style={styles.container}>
      <div style={styles.aboutBox}>
        <h2 style={styles.title}>HI, I'M ABDULLAH,</h2>
        <h4 style={styles.content}>
          Hello! I'm a Full Stack Developer with a passion for the world of
          software development. I'm committed to learning something new every
          day and continuously working on projects. Software development has
          become a passion for me, and I strive to further cultivate this
          passion with each project. I particularly focus on web and mobile
          application development. I have experience in both frontend and
          backend development. I'm proficient in technologies such as HTML, CSS,
          JavaScript, React, Node.js, and MongoDB. I also have a knack for
          quickly adapting to new technologies.
        </h4>
        <div style={styles.icons} className="icon">
          <a
            class="fa-brands fa-twitter fa-2x"
            type="button"
            href="https://twitter.com"
            target="_blank"
          ></a>
          <a
            class="fa-brands fa-facebook fa-2x"
            type="button"
            href="https://facebook.com"
            target="_blank"
          ></a>
          <a
            class="fa-brands fa-github fa-2x"
            type="button"
            href="https://github.com"
            target="_blank"
          ></a>
          <a
            class="fa-brands fa-youtube fa-2x"
            type="button"
            href="https://youtube.com"
            target="_blank"
          ></a>
          <a
            class="fa-brands fa-instagram fa-2x"
            type="button"
            href="https://instagram.com"
            target="_blank"
          ></a>
        </div>
      </div>
    </div>
  );
};

export default About;
