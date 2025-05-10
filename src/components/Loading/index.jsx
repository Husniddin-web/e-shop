import React from "react";
import Skeleton from "react-loading-skeleton";
import { motion } from "framer-motion";
import "react-loading-skeleton/dist/skeleton.css";

const fadeIn = {
  hidden: { opacity: 0, y: 10 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
};

const ProductDetailsSkeleton = () => {
  return (
    <div className="container">
      <motion.div
        className="product-details-wrapper"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <motion.div className="product-url" variants={fadeIn}>
          <Skeleton width={150} height={20} />
        </motion.div>

        <motion.div className="details-wrapper" variants={fadeIn}>
          <div className="product-images">
            <div className="images-left">
              {[1, 2, 3].map((_, i) => (
                <motion.div key={i} custom={i} variants={fadeIn}>
                  <Skeleton width={152} height={168} />
                </motion.div>
              ))}
            </div>
            <motion.div className="images-right" variants={fadeIn}>
              <Skeleton width={444} height={530} />
            </motion.div>
          </div>

          <motion.div className="product-info" variants={fadeIn}>
            <motion.div className="product-title" variants={fadeIn}>
              <Skeleton width={300} height={40} />
            </motion.div>

            <motion.div className="rating" variants={fadeIn}>
              <Skeleton width={100} height={20} />
            </motion.div>

            <motion.div className="price" variants={fadeIn}>
              <Skeleton width={80} height={30} />
              <Skeleton width={80} height={30} />
              <Skeleton width={60} height={30} />
            </motion.div>

            <motion.div className="description" variants={fadeIn}>
              <Skeleton count={3} />
            </motion.div>

            <motion.div className="colors" variants={fadeIn}>
              <Skeleton width={120} height={20} />
              <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                {[1, 2, 3].map((_, i) => (
                  <Skeleton key={i} width={30} height={30} circle />
                ))}
              </div>
            </motion.div>

            <motion.div
              className="sizes"
              variants={fadeIn}
              style={{ marginTop: "20px" }}
            >
              <Skeleton width={120} height={20} />
              <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                {[1, 2, 3].map((_, i) => (
                  <Skeleton key={i} width={40} height={40} />
                ))}
              </div>
            </motion.div>

            <motion.div
              className="add-cart"
              variants={fadeIn}
              style={{ marginTop: "20px" }}
            >
              <Skeleton width={120} height={50} />
              <Skeleton width={150} height={50} />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProductDetailsSkeleton;
