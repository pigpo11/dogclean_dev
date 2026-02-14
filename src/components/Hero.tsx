"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <motion.div
          className="text-box"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-text-wrapper">
            <span className="hero-subtext">Make the space safer</span>
            <h1 className="hero-maintext">공간을 더 안전하게</h1>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          height: 80vh;
          min-height: 500px;
          background-image: url('https://images.unsplash.com/photo-1581578731522-4a00f2e05391?q=80&w=2071&auto=format&fit=crop');
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          text-align: center;
        }
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.3);
        }
        .hero-content {
          position: relative;
          z-index: 10;
        }
        .hero-text-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }
        .hero-subtext {
          font-size: 1.5rem;
          font-weight: 500;
          letter-spacing: 1px;
        }
        .hero-maintext {
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 900;
          background-color: var(--primary);
          padding: 5px 30px;
          border-radius: 10px;
          line-height: 1.2;
        }
        @media (max-width: 768px) {
          .hero-subtext {
            font-size: 1.1rem;
          }
          .hero-maintext {
            font-size: 2rem;
            padding: 5px 15px;
          }
        }
      `}</style>
    </section>
  );
}
