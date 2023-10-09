import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";
import Contact from "../../components/ContactUs/Contact";
import { Container } from "react-bootstrap";
import style from "./aboutus.module.css";
import team_img_one from "../../assets/team/about_team.png";

const AboutUs = () => {
  return (
    <div>
      <Header />
      {/* meet team */}
      <section className={style.team_wrapper}>
        <Container className={style.team_container}>
          <h1>
            Meet the <strong>team</strong>
          </h1>
          <div className={style.team_box_wrapper}>
            <div className={style.team_box}>
              <img src={team_img_one} alt="" />
              <h3>Mira Bhandari</h3>
              <p>
                Mira Bhandari is a co-founder of YouSummarise and an ambitious
                entrepreneur who integrates innovation into her academic
                pursuits. Currently a student at South Hampstead High School in
                the UK, she complements her STEM skills with artistic
                endeavours, singing in choirs and competing internationally in
                dance. Mira develops technological solutions to enrich her
                school and community while spearheading sustainability
                initiatives to reduce carbon footprints. Whether launching
                startups, performing on stage, or inventing eco-friendly
                solutions, she leverages her diverse skills to drive change.
              </p>
            </div>
            <div className={style.team_box}>
              <img src={team_img_one} alt="" />
              <h3>Mira Bhandari</h3>
              <p>
                Mira Bhandari is a co-founder of YouSummarise and an ambitious
                entrepreneur who integrates innovation into her academic
                pursuits. Currently a student at South Hampstead High School in
                the UK, she complements her STEM skills with artistic
                endeavours, singing in choirs and competing internationally in
                dance. Mira develops technological solutions to enrich her
                school and community while spearheading sustainability
                initiatives to reduce carbon footprints. Whether launching
                startups, performing on stage, or inventing eco-friendly
                solutions, she leverages her diverse skills to drive change.
              </p>
            </div>
          </div>
        </Container>
      </section>
      <Contact />
      <Footer />
    </div>
  );
};

export default AboutUs;
