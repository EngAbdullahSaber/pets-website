import React from "react";
import { data } from "../data/MedicalCare";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { storeInfo2 } from "../Redux/Action";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Category = () => {
  const dispatch = useDispatch();
  const handleClick = (item) => {
    dispatch(storeInfo2(item));
  };
  const { t } = useTranslation();
  return (
    <div className="category" id="MedicalCare">
      <div className="container category__main">
        <motion.h2
          className="h2__main text-center"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {t("Top")} <span>{t("Categories")}</span>
        </motion.h2>
        <motion.p
          className="text-center"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
          accusamus.
        </motion.p>
        <Link to="/medicalcare">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 3 }}
            className="row align-items-center"
          >
            {data.map((item) => (
              <div
                className="col-md-3"
                key={item.index}
                onClick={() => handleClick(item)}
              >
                <div className="category__col text-center">
                  <img
                    src={item.img}
                    alt="image category"
                    className="img-fluid"
                  />
                  <h3>{t(item.name)}</h3>
                </div>
              </div>
            ))}
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default Category;
