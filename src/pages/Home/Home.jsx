import React from "react";
import style from "./home.module.css";
import { Container } from "react-bootstrap";
import Contact_us_gif from "../../assets/contactUs/side_img.gif";
import img_one from "../../assets/slider/img_one.png";
import img_two from "../../assets/slider/img_two.png";
import img_three from "../../assets/slider/img_three.png";
import { Swiper, SwiperSlide } from "swiper/react";

const faqs = [
  {
    question: "What is web hosting?",
    answer:
      "Web hosting is a service that stores website files on a server, making them accessible on the internet. Users access websites by typing domain names.",
  },
  {
    question:
      "What is the difference between a domain name and a website hosting service?",
    answer:
      "A domain name is the web address, while website hosting is the service that stores website files. The domain is like an address, hosting is like the physical space for the website.",
  },
  {
    question: "What is responsive web design, and why is it important?",
    answer:
      "Responsive web design ensures websites adapt to various devices and screen sizes, providing a consistent and user-friendly experience, whether on desktops, tablets, or smartphones.",
  },
  {
    question: "Why are SSL certificates important for a website?",
    answer:
      "SSL certificates encrypt data exchanged between users' browsers and a website's server, ensuring secure transmission of sensitive information. This encryption builds user trust and enhances security.",
  },
  {
    question: "What is the significance of SEO for a website?",
    answer:
      "SEO, or Search Engine Optimization, enhances a website's visibility on search engines. It involves optimizing content, keywords, speed, and backlinks to improve search engine rankings, resulting in more organic traffic.",
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
      <section className={style.Contact_us_wrapper}>
        <img
          src={Contact_us_gif}
          alt="no img found"
          style={{
            width: "100%",
            objectFit: "contain",
            height: "30rem",
          }}
        />
        <div className={style.contact_us_right}>
          <Container className={style.contact_us_container}>
            <div>
              <h1>Contact Us</h1>
              <p style={{ color: "white" }}>
                If you have any questions, suggestions, or feedback, please
                don't hesitate to reach out to us. We value your input and are
                committed to enhancing your experience with YouSummarised.
              </p>
            </div>

            <div className={style.contact_us_fields}>
              <input type="text" placeholder="Enter your Name" />
              <input type="text" placeholder="Enter your email..." />
            </div>
            <button className={style.contact_us_btn}>Subscribe</button>
          </Container>
        </div>
      </section>
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
    </div>
  );
};

export default Home;
