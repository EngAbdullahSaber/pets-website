import React from "react";
import { useTranslation } from "react-i18next";
import imag1 from "../assets/assets/dog-bg-ZFqMikDp.png";
import wave from "../assets/assets/layer-1MnSLsjs.png";
import { motion } from "framer-motion";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="hero">
        <div className="container-fluid hero__main md:px-5 px-2 g-0" id="About">
          <div className="container g-0">
            <div className=" row gx-0 align-items-center">
              <div className="col-md-6">
                <motion.div
                  className="hero__col1"
                  initial={{ opacity: 0, y: -100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  <h3>{t("We care for pets")}</h3>
                  <h1>
                    {t("best")} <span>{t("pet product")}</span>{" "}
                    {t("and medicine")}
                  </h1>
                  <p>
                    {t(
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fuga et reprehenderit architecto, maiores illo deleniti incidunt in amet laboriosam, adipisci, nobis consectetur ea blanditiis? Quam autem voluptatibus quo quis praesentium porro dignissimos, nisi esse voluptate velit laudantium delectus minima quia, qui, asperiores eaque labore id tenetur atque mollitia. Ab."
                    )}
                  </p>

                  <div className="buttons">
                    <button
                      className="btn1 cta-01"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal1"
                    >
                      <span>{t("Create Profile")}</span>
                    </button>
                  </div>
                </motion.div>
              </div>
              <div className="col-md-6">
                <div className="hero__col2 text-center">
                  <img src={imag1} alt="image banner" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wave">
        <img src={wave} alt="wave" className="img-fluid" />
      </div>
    </>
  );
};

export default Hero;
