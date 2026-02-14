"use client";

import { motion } from "framer-motion";

export default function Hero() {
  // 사람 얼굴 없이 깨끗하고 화사한 인테리어 이미지
  const bgImageUrl = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop";

  return (
    <section className="hero-container">
      <img
        src={bgImageUrl}
        alt="깨끗한 실내 인테리어"
        className="hero-bg-img"
      />

      <div className="hero-overlay"></div>

      <div className="container hero-content-wrap">
        <motion.div
          className="hero-text-side"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* PREMIUM CLEANING SERVICE 삭제 */}
          <h1 className="hero-maintext">공간을 더 편안하게</h1>
          <p className="hero-desc">
            반려동물 전문 청소 서비스 멍크린이<br />
            여러분의 공간을 깨끗하고 안전하게 만들어 드립니다.
          </p>

        </motion.div>
      </div>

      <style jsx>{`
        .hero-container {
          position: relative;
          width: 100%;
          height: 80vh;
          min-height: 550px;
          display: flex;
          align-items: center;
          color: #fff;
          overflow: hidden;
          background-color: #333;
        }
        .hero-bg-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
        }
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 100%);
          z-index: 1;
        }
        .hero-content-wrap {
          position: relative;
          z-index: 10;
          width: 100%;
        }
        .hero-text-side {
          max-width: 750px;
          display: flex;
          flex-direction: column;
        }
        .hero-maintext {
          font-size: clamp(2.5rem, 6vw, 4.8rem);
          font-weight: 900;
          color: #fff;
          line-height: 1.1;
          display: block;
          background-color: transparent;
          padding: 0;
          box-shadow: none;
          text-shadow: 0 4px 20px rgba(0,0,0,0.5);
          margin-bottom: 50px; /* 마진으로 훨씬 더 확실하게 간격을 줍니다 */
        }
        .hero-desc {
          font-size: 1.25rem;
          line-height: 1.7;
          opacity: 0.95;
          text-shadow: 0 2px 15px rgba(0,0,0,0.6);
          margin-top: 0;
        }

        @media (max-width: 768px) {
          .hero-container {
            height: 60vh;
            min-height: 450px;
          }
          .hero-text-side {
            align-items: center;
            text-align: center;
            margin: 0 auto;
          }
          .hero-maintext {
            font-size: 2.8rem;
          }
          .hero-desc {
            font-size: 1.05rem;
          }
        }
      `}</style>
    </section>
  );
}
