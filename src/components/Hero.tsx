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
                    <span className="badge">Premium Pet Cleaning Service</span>
                    <h1>반려동물과 함께하는 공간,<br />청소가 달라야 합니다</h1>
                    <p>
                        업계 최고의 세분화된 세정과 살균 시스템으로<br />
                        사람과 반려동물 모두가 행복한 깨끗한 집을 약속합니다.
                    </p>
                    <div className="hero-btns">
                        <Link href="/estimate" className="btn btn-primary">무료 견적 문의하기</Link>
                        <Link href="/about" className="btn btn-outline-white">멍크린 소식보기</Link>
                    </div>
                </motion.div>
            </div>

            <style jsx>{`
        .hero {
          position: relative;
          height: 90vh;
          min-height: 600px;
          background-image: url('https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=2071&auto=format&fit=crop');
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          color: #fff;
        }
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2));
        }
        .hero-content {
          position: relative;
          z-index: 10;
        }
        .text-box {
          max-width: 700px;
        }
        .badge {
          display: inline-block;
          background-color: var(--primary);
          padding: 6px 16px;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 700;
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        h1 {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 900;
          line-height: 1.2;
          margin-bottom: 25px;
        }
        p {
          font-size: 1.25rem;
          line-height: 1.6;
          margin-bottom: 40px;
          opacity: 0.9;
        }
        .hero-btns {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
        }
        .btn-outline-white {
          border: 2px solid #fff;
          color: #fff;
        }
        .btn-outline-white:hover {
          background-color: #fff;
          color: var(--dark-bg);
          transform: translateY(-2px);
        }
        @media (max-width: 768px) {
          .hero {
            height: 80vh;
            text-align: center;
            justify-content: center;
          }
          .hero-overlay {
            background: rgba(0, 0, 0, 0.5);
          }
          .hero-btns {
            justify-content: center;
          }
        }
      `}</style>
        </section>
    );
}
