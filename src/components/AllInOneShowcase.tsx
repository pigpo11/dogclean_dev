"use client";

import { motion } from "framer-motion";
import { Plus, Sparkles, ShieldCheck } from "lucide-react";

const CleanArrow = () => (
  <svg width="80" height="32" viewBox="0 0 80 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 16H76M76 16L64 4M76 16L64 28" stroke="#00BFFF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function AllInOneShowcase() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section className="aio-section">
      <div className="aio-container">
        <motion.div {...fadeInUp} className="aio-header">
          <span className="aio-badge">UPGRADE YOUR CLEANING</span>
          <h2 className="aio-main-title">
            이제는 이 모든 걸 <span className="aio-highlight">한 번에</span>
          </h2>
          <p className="aio-subtitle">
            번거롭게 따로 예약하지 마세요. 입주부터 반려동물 케어까지<br />
            멍크린의 <strong style={{ color: "var(--primary)" }}>프리미엄 올인원 서비스</strong>로 완벽하게 해결해 드립니다.
          </p>
        </motion.div>

        <div className="aio-grid-wrap">
          <div className="aio-showcase-grid">
            {/* Left: The Problems */}
            <div className="aio-problem-side">
              <motion.div 
                {...fadeInUp}
                className="aio-problem-card"
              >
                <div className="aio-text-box">
                  <h3 className="aio-card-title">일반 입주청소 따로</h3>
                  <p className="aio-card-desc">미흡한 반려동물 특화 케어와<br />보여주기식 겉핥기 청소</p>
                </div>
              </motion.div>

              <div className="aio-plus-icon">
                <Plus size={24} />
              </div>

              <motion.div 
                {...fadeInUp}
                transition={{ delay: 0.1 }}
                className="aio-problem-card"
              >
                <div className="aio-text-box">
                  <h3 className="aio-card-title">동물 냄새와 털제거 따로</h3>
                  <p className="aio-card-desc">청소 후 별도로 예약해야 하는 번거로움과<br />중복으로 발생하는 추가 비용</p>
                </div>
              </motion.div>
            </div>

            {/* Center: Transition */}
            <div className="aio-transition">
              <CleanArrow />
            </div>

            {/* Right: The Solution */}
            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.3 }}
              className="aio-solution-card"
            >
              <div className="aio-premium-label">PREMIUM ALL-IN-ONE</div>
              <div className="aio-solution-header">
                <h3 className="aio-card-title">멍크린 프리미엄 올인원 서비스</h3>
              </div>
              
              <ul className="aio-features">
                <li>
                  <ShieldCheck size={20} className="aio-check" />
                  <span><strong>입주·냄새·털</strong> 한 번에 해결</span>
                </li>
                <li>
                  <ShieldCheck size={20} className="aio-check" />
                  <span><strong>전문 장비</strong> (컬비, 오존 살균 등) 기본 포함</span>
                </li>
                <li>
                  <ShieldCheck size={20} className="aio-check" />
                  <span><strong>친환경 약제</strong>로 반려동물과 사람 모두 안전</span>
                </li>
                <li>
                  <ShieldCheck size={20} className="aio-check" />
                  <span><strong>수전 나노코팅</strong> 프리미엄 무료 서비스</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .aio-section {
          padding: 120px 0;
          background-color: #ffffff;
          width: 100%;
          display: flex;
          justify-content: center;
        }
        .aio-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .aio-header {
          width: 100%;
          text-align: center;
          margin-bottom: 100px;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          z-index: 10;
        }
        .aio-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px 24px;
          background: #f0f7ff;
          color: #00BFFF;
          font-weight: 800;
          font-size: 1.1rem;
          border-radius: 50px;
          margin: 0 auto 24px auto;
          letter-spacing: 0.08em;
          width: fit-content;
        }
        .aio-main-title {
          font-size: 3.5rem;
          font-weight: 900;
          color: #1a1a1a;
          line-height: 1.2;
          margin-bottom: 32px;
          word-break: keep-all;
          width: 100%;
          text-align: center;
          display: block;
          margin-left: auto;
          margin-right: auto;
        }
        .aio-highlight {
          color: #00BFFF;
        }
        .aio-subtitle {
          font-size: 1.25rem;
          color: #555;
          line-height: 1.8;
          word-break: keep-all;
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
          display: block;
        }

        .aio-grid-wrap {
          width: 100%;
          display: flex;
          justify-content: center;
          margin-top: 100px;
        }
        .aio-showcase-grid {
          display: grid;
          grid-template-columns: minmax(300px, 450px) 120px minmax(300px, 450px);
          align-items: stretch;
          justify-content: center;
          gap: 0;
          width: 100%;
        }

        .aio-problem-side {
          display: flex;
          flex-direction: column;
          gap: 20px;
          align-items: center;
          height: 100%;
        }
        .aio-problem-card {
          width: 100%;
          background: #f9f9fb;
          padding: 50px 30px;
          border-radius: 24px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          text-align: center;
          border: 1px solid #eee;
          flex: 1;
        }
        .aio-card-title {
          font-size: 1.4rem;
          font-weight: 800;
          color: #111;
          margin-bottom: 12px;
          text-align: center;
        }
        .aio-card-desc {
          font-size: 1.05rem;
          color: #666;
          line-height: 1.6;
          word-break: keep-all;
          text-align: center;
        }
        .aio-plus-icon {
          color: #ddd;
        }

        .aio-transition {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 10px;
        }

        .aio-solution-card {
          background: #ffffff;
          padding: 50px 40px;
          border-radius: 32px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.06);
          border: 2px solid #00BFFF;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
        }
        .aio-premium-label {
          position: absolute;
          top: -15px;
          right: 35px;
          background: #00BFFF;
          color: white;
          padding: 6px 20px;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 900;
          box-shadow: 0 4px 12px rgba(0, 191, 255, 0.3);
        }
        .aio-solution-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 40px;
          text-align: center;
        }
        .aio-sparkle {
          color: #00BFFF;
        }
        .aio-features {
          list-style: none;
          padding: 0;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 22px;
          width: fit-content;
          text-align: left;
        }
        .aio-features li {
          display: flex;
          align-items: center;
          gap: 14px;
          font-size: 1.15rem;
          color: #333;
          white-space: nowrap;
        }
        .aio-check {
          color: #00BFFF;
        }

        @media (max-width: 1024px) {
          .aio-showcase-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .aio-transition {
            transform: rotate(90deg);
          }
          .aio-main-title {
            font-size: 2.2rem;
          }
        }
      `}</style>
    </section>
  );
}
