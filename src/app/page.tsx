"use client";

import Hero from "@/components/Hero";
import Link from "next/link";
import {
  ArrowRight,
  MessageSquareText,
  Calculator
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const services = [
    { id: "moving-in", name: "입주청소", desc: "\"새로운 보금자리, 완벽한 시작\"", spritePos: "0 0" },
    { id: "moving-out", name: "이사청소", desc: "\"새로운 공간, 깔끔한 시작!\"", spritePos: "-220px 0" },
    { id: "commercial", name: "상가청소", desc: "\"비즈니스 공간, 청결이 중요한 시작!\"", spritePos: "0 -220px" },
    { id: "interior", name: "인테리어청소", desc: "\"새로운 인테리어, 완벽한 마무리!\"", spritePos: "-220px -220px" },
    { id: "special", name: "특수청소", desc: "\"어려운 청소, 멍크린이 해결합니다!\"", spritePos: "0 0" },
  ];

  return (
    <>
      <Hero />

      {/* Professional Service Intro Section */}
      <section className="section bg-white introduction-section">
        <div className="container">
          <h2 className="section-title centered">전문 청소 소개</h2>
          <div className="services-illustration-grid">
            {services.map((item) => (
              <div key={item.id} className="service-illust-card">
                <h3>{item.name}</h3>
                <p className="service-desc">{item.desc}</p>
                <div className="illust-wrap">
                  <div
                    className="illust-sprite"
                    style={{
                      backgroundPosition: item.spritePos,
                      backgroundImage: "url('/service_illustrations.png?v=3')"
                    }}
                  />
                </div>
                <Link href="/home-cleaning" className="btn-detail-mini">자세히보기</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Info Section (Person with Tablet) */}
      <section className="info-promo-section">
        <div className="container info-promo-container">
          <div className="info-text-side">
            <h2>고객님의 쾌적한 환경을 위해<br />언제나 최선을 다하는 청소 전문 업체</h2>
            <p>
              최신 청소 기법과 장비를 도입하여 다양한 청소 서비스를 제공하며,<br />
              고객님의 필요에 맞춘 맞춤형 서비스를 제공합니다.<br />
              멍크린은 항상 완벽한 청소 결과를 약속합니다.
            </p>
            <Link href="/about" className="btn btn-primary btn-more">
              더보기 <ArrowRight size={18} />
            </Link>
          </div>
          <div className="info-image-side">
            <div className="promo-image-box">
              <img
                src="/professional_cleaner.png"
                alt="전문 청소 전문가"
                className="promo-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Quick Links */}
      <section className="section bottom-links-section">
        <div className="container bottom-links-grid">
          <Link href="/reviews" className="bottom-card">
            <div className="bottom-card-content">
              <h3>청소후기</h3>
              <p>직접 읽어봐야 할 실제 후기!</p>
              <span className="link-action">자세히보기 <ArrowRight size={16} /></span>
            </div>
            <div className="bottom-card-icon">
              <MessageSquareText size={48} />
            </div>
          </Link>
          <Link href="/estimate" className="bottom-card">
            <div className="bottom-card-content">
              <h3>간편 견적</h3>
              <p>간편 견적으로 빠르게 비용을 확인하세요!</p>
              <span className="link-action">문의하기 <ArrowRight size={16} /></span>
            </div>
            <div className="bottom-card-icon">
              <Calculator size={48} />
            </div>
          </Link>
        </div>
      </section>

      <style jsx>{`
        .centered {
          text-align: center;
          font-weight: 800;
          margin-bottom: 60px;
        }
        
        /* Service Illustration Grid */
        .services-illustration-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
        }
        .service-illust-card {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          border: 1px solid #e0e0e0;
          border-radius: 12px;
          padding: 25px 15px 20px;
          transition: all 0.3s ease;
          background: #fff;
        }
        .service-illust-card:hover {
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          transform: translateY(-5px);
          border-color: var(--primary);
        }
        .service-illust-card h3 {
          font-size: 1.25rem;
          font-weight: 800;
          margin-bottom: 8px;
          color: #333;
        }
        .service-desc {
          font-size: 0.85rem;
          color: #888;
          margin-bottom: 15px;
          line-height: 1.4;
        }
        .illust-wrap {
          width: 100%;
          height: 220px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 15px;
          overflow: hidden;
        }
        .illust-sprite {
          width: 220px;
          height: 220px;
          background-size: 440px 440px;
          background-repeat: no-repeat;
        }
        .btn-detail-mini {
          font-size: 0.85rem;
          background-color: #aaa;
          color: #fff;
          padding: 8px 22px;
          border-radius: 6px;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        .btn-detail-mini:hover {
          background-color: var(--primary);
        }

        /* Info Promo Section */
        .info-promo-section {
          background-color: #f5f5f5;
          padding: 100px 0;
          overflow: hidden;
        }
        .info-promo-container {
          display: flex;
          align-items: center;
          gap: 60px;
        }
        .info-text-side {
          flex: 1;
        }
        .info-text-side h2 {
          font-size: 2.2rem;
          font-weight: 800;
          line-height: 1.3;
          margin-bottom: 25px;
          color: #333;
        }
        .info-text-side p {
          font-size: 1.05rem;
          color: #666;
          line-height: 1.7;
          margin-bottom: 40px;
        }
        .btn-more {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 35px;
          border-radius: 50px;
        }
        .info-image-side {
          flex: 1.2;
          position: relative;
        }
        .promo-image-box {
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0,0,0,0.1);
          transform: rotate(2deg);
        }
        .promo-img {
          width: 100%;
          display: block;
        }

        /* Bottom Quick Links */
        .bottom-links-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }
        .bottom-card {
          background-color: #fff;
          border: 1px solid #eee;
          padding: 40px;
          border-radius: 15px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.3s ease;
        }
        .bottom-card:hover {
          box-shadow: 0 15px 35px rgba(0,0,0,0.05);
          transform: translateY(-5px);
          border-color: var(--primary);
        }
        .bottom-card-content h3 {
          font-size: 1.5rem;
          font-weight: 800;
          margin-bottom: 10px;
        }
        .bottom-card-content p {
          font-size: 0.95rem;
          color: #777;
          margin-bottom: 20px;
        }
        .link-action {
          color: var(--primary);
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .bottom-card-icon {
          color: #ddd;
          transition: color 0.3s ease;
        }
        .bottom-card:hover .bottom-card-icon {
          color: var(--primary);
          opacity: 0.2;
        }

        @media (max-width: 1024px) {
          .services-illustration-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
          }
        }
        @media (max-width: 768px) {
          .info-promo-container {
            flex-direction: column;
            text-align: center;
          }
          .services-illustration-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .bottom-links-grid {
            grid-template-columns: 1fr;
          }
          .info-text-side h2 {
            font-size: 1.6rem;
          }
        }
      `}</style>
    </>
  );
}
