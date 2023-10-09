import React from "react";
import style from "./home.module.css";
import { Container } from "react-bootstrap";
import img_one from "../../assets/slider/img_one.png";
import img_two from "../../assets/slider/img_two.png";
import img_three from "../../assets/slider/img_three.png";
import { Swiper, SwiperSlide } from "swiper/react";
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";
import svg_one from "../../assets/Third_Section/third_section_one_img.svg";
import svg_two from "../../assets/Third_Section/third_section_img_two.svg";
import svg_three from "../../assets/Third_Section/third_section_img_three.svg";
import Contact from "../../components/ContactUs/Contact";
const faqs = [
  {
    question: "What types of videos can be summarized?",
    answer:
      "Videos on diverse topics, including education, news, and more, can be summarized.",
  },
  {
    question: "Can I customize the length of the summary?",
    answer: "Yes, you can customize summary length based on preferences.",
  },
  {
    question:
      "Why did I receive an error message that states a summary cannot be provided?",
    answer:
      "Error messages may occur due to video complexity or technical issues.",
  },
  {
    question: "Are the summaries 100% accurate?",
    answer: "Summaries aim for accuracy but may vary. Review for context.",
  },
  {
    question: "Can the tool summarize in other languages?",
    answer: "The tool supports summarization in multiple languages.",
  },
  {
    question: "What languages do you support when writing content?",
    answer: "Content writing is supported in various languages.",
  },
];

const breakpoints = {
  320: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  400: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  480: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  786: {
    slidesPerView: 2,
    spaceBetween: 30,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  1280: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
};

const slider_img = [
  img_one,
  img_two,
  img_three,
  img_one,
  img_two,
  img_three,
  img_one,
  img_two,
  img_three,
];
const Home = () => {
  return (
    <div>
      <Header />
      {/* Third Section */}
      <section className={style.third_section_wrapper}>
        <Container className={style.third_sec_container}>
          <div>
            <img src={svg_one} alt="no img" />
            <h3>Get the Most Out of Your Time</h3>
            <p>
              Reading summaries gives you faster access to key information
              compared to watching lengthy videos when time is scarce.
            </p>
          </div>
          <div>
            <img src={svg_one} alt="no img" />
            <h3>Get the Most Out of Your Time</h3>
            <p>
              Reading summaries gives you faster access to key information
              compared to watching lengthy videos when time is scarce.
            </p>
          </div>
          <div>
            <img src={svg_one} alt="no img" />
            <h3>Get the Most Out of Your Time</h3>
            <p>
              Reading summaries gives you faster access to key information
              compared to watching lengthy videos when time is scarce.
            </p>
          </div>
        </Container>
      </section>
      {/* summarise Animation */}
      <span className={style.scroll_text}>
        <div className={style.marquee}>
          <div>
            <h1>
              * you summerise * you summerise * you summerise* you summerise *
              you summerise * you summerise* you summerise * you summerise * you
              summerise
            </h1>
          </div>
        </div>
        <div className={style.marquee_second}>
          <div>
            <h1 className={style.marquee_second_para}>
              * you summerise * you summerise * you summerise* you summerise *
              you summerise * you summerise* you summerise * you summerise * you
              summerise
            </h1>
          </div>
        </div>
      </span>
      {/* <!-- FAQ,s Area...... --> */}
      <section className={style.section_five_wrapper}>
        <Container className={style.faqs_container}>
          <h1>FAQ</h1>

          <div className={style.faq}>
            {faqs.map((ans, index) => (
              <div
                style={{
                  padding: "1rem 0rem",
                  position: "relative",
                }}
                key={index}
              >
                <input
                  type="checkbox"
                  id={index}
                  name="q"
                  className={style.questions}
                />
                <label className={style.question}>
                  <div
                    className="d-flex align-items-center pe-5 w-100"
                    style={{ position: "relative" }}
                  >
                    <h5 className="m-0">{ans.question}</h5>
                    <label htmlFor={index} className={style.plus}>
                      +
                    </label>
                  </div>
                </label>
                <div className={style.answers}>{ans.answer}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      {/* <!-- Contact-us Area...... --> */}
      <Contact />
      {/* {Organization area} */}
      <section className={style.section_two_wrapper}>
        <Swiper breakpoints={breakpoints} className={style.section_two_swiper}>
          {slider_img.map((img, index) => (
            <SwiperSlide
              style={{
                width: "auto",
                padding: "0rem 1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "auto",
              }}
              key={index}
            >
              <img
                src={img}
                style={{
                  width: "10rem",
                  height: "12rem",
                  objectFit: "cover",
                }}
                alt="brand images"
                className={style.section_two_swiper_images}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
