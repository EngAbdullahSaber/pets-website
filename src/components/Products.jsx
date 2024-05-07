import React from "react";
import ReactStars from "react-rating-stars-component";
import { data } from "../data/ProductsInfo";
import { motion } from "framer-motion";

const Products = () => {
  return (
    <div className="products">
      <div className="container-fluid products__main">
        <div className="contianer">
          <motion.h2
            className="h2__main"
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Best Selling <span>Food & Medicine</span>
          </motion.h2>
          <motion.p
            className="text-center p__main"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            accusamus.
          </motion.p>
          <div className="row gy-4 pt-5 pt-md-5 d-flex justify-content-center">
            {data.map((item) => (
              <div className="col-md-4">
                <div className="products__col">
                  <motion.img
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 3 }}
                    src={item.img}
                    alt="products"
                    className="img-fluid"
                  />
                  <div className="products__mid py-4 px-1">
                    <motion.h4
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}
                    >
                      {" "}
                      {item.name}
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
                  </div>
                  <div className="buttons  justify-content-center">
                    <motion.button
                      className="btn1 cta-01 "
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}
                    >
                      {" "}
                      <span>view cart</span>
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

export default Products;
