import React from "react";
import ReactStars from "react-rating-stars-component";
import { data2 } from "../data/ProductsInfo";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Hostel = () => {
  const { t } = useTranslation();

  return (
    <div className="products">
      <div className="container-fluid products__main hostels__main">
        <div className="contianer">
          <h2 className="h2__main">
            {t("Best Hostel for")} <span>{t("Pets")}</span>
          </h2>
          <p className="text-center p__main">
            {t(
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, accusamus."
            )}
          </p>
          <div className="row gy-4 pt-5 pt-md-5 d-flex justify-content-center">
            {data2.map((item) => (
              <div className="col-md-4" key={item.index}>
                <div className="products__col hostels__col">
                  <motion.img
                    src={item.img}
                    alt="products"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 3 }}
                    className="img-fluid"
                  />
                  <div className="products__mid py-4 px-1">
                    <motion.h4
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}
                    >
                      {" "}
                      {t(item.name)}
                    </motion.h4>
                    <motion.h5
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}
                      className="pt-2"
                    >
                      {" "}
                      60$
                    </motion.h5>
                    <motion.div
                      className="react__star"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <ReactStars
                        count={5}
                        size={24}
                        activeColor="#ffd700"
                        value={item.rate}
                      />
                    </motion.div>
                  </div>{" "}
                  <div className="buttons  justify-content-center">
                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}
                      className="btn1 cta-01 "
                    >
                      {" "}
                      <span>{t("view cart")}</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hostel;
