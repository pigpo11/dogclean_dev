"use client";

import { useParams } from "next/navigation";
import { servicesData } from "../data";
import {
  Phone,
  X,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ServiceDetailPage() {
  const { id } = useParams();
  const service = servicesData.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="section text-center">
        <h1>서비스를 찾을 수 없습니다.</h1>
        <Link href="/services" className="btn btn-primary mt-4">목록으로 돌아가기</Link>
      </div>
    );
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="services-page">
      {/* 1. Header Banner */}
      <section className="services-hero" style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1584622781564-1d9876a1dfd1?auto=format&fit=crop&q=80&w=1920)'
      }}>
        <div className="container">
          <motion.h1 {...fadeInUp}>{service.title}</motion.h1>
          <motion.div className="breadcrumbs" {...fadeInUp} transition={{ delay: 0.2 }}>
            홈 &gt; 전문 청소 소개 &gt; {service.title}
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="service-detail-section">
        {/* Main Category Header */}
        <section className="section bg-white">
          <div className="container" style={{ maxWidth: '1000px' }}>
            <div className="category-title-box">
              <h2>{service.title}</h2>
            </div>
            <div className="intro-card-box">
              <div className="intro-card">
                <div className="intro-text-side">
                  <h3 className="service-title-small">{service.title}</h3>
                  <h4 className="service-subtitle">{service.subtitle}</h4>
                  <p className="service-desc">{service.desc.split('\n').map((line, i) => <span key={i}>{line}<br /></span>)}</p>
                </div>
                <div className="intro-image-side">
                  <img src="https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=800" alt={service.title} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="section bg-light">
          <div className="container">
            <div className="section-header-centered">
              <h2 className="section-title-main">{service.title} <span className="highlight">특장점</span></h2>
            </div>
            <div className="features-grid-8">
              {service.features.map((feature, i) => (
                <motion.div key={i} className="feature-item" {...fadeInUp} transition={{ delay: i * 0.05 }}>
                  <div className="feature-icon-box">{feature.icon}</div>
                  <div className="feature-text">
                    <h5>{feature.title}</h5>
                    <p>{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="section bg-white overflow-hidden">
          <div className="container">
            <div className="section-header-centered">
              <h2 className="section-title-main">{service.title} <span className="highlight">진행 과정</span></h2>
            </div>
            <div className="process-wrapper">
              <div className="process-timeline-line"></div>
              <div className="process-steps">
                {service.process.map((step, i) => (
                  <div key={i} className="process-step-item">
                    <div className="step-number-node">
                      <span className="step-num">0{i + 1}</span>
                    </div>
                    <div className="step-content">
                      <p className="step-label">{step.label}</p>
                      <div className="step-thumb">
                        <img src={step.img} alt={step.label} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Scope & Methods */}
        <section className="section bg-light">
          <div className="container">
            <div className="section-header-centered">
              <h2 className="section-title-main">{service.title} <span className="highlight">범위와 방법</span></h2>
            </div>
            <div className="scope-grid">
              {service.scope.map((item, i) => (
                <motion.div key={i} className="scope-item" {...fadeInUp} transition={{ delay: i * 0.1 }}>
                  <div className="scope-icon-wrap">{item.icon}</div>
                  <div className="scope-text">
                    <h5>{item.title}</h5>
                    <p style={{ whiteSpace: 'pre-line' }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing CTA */}
        <section className="section pricing-cta-section">
          <div className="container">
            <div className="pricing-box">
              <h2 className="pricing-title">{service.title} 가격안내</h2>
              <p className="pricing-subtitle">전화상담으로 보다 정확한 견적을 받아보세요!</p>
              <div className="cta-btns">
                <Link href="/estimate" className="btn btn-dark">간편견적 확인</Link>
                <a href="tel:1661-0959" className="btn btn-primary-outline">전화상담 신청</a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Common Bottom Contact CTA */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-image-grid">
            <motion.a
              href="tel:1661-0959"
              className="cta-image-link"
              {...fadeInUp}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <img src="/cta_phone.png" alt="전화 상담 문의" className="cta-full-img" />
            </motion.a>

            <motion.a
              href="https://pf.kakao.com/_RxfLKG"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-image-link"
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <img src="/cta_kakao.png" alt="카카오톡 상담 문의" className="cta-full-img" />
            </motion.a>
          </div>
        </div>
      </section>

      <style jsx>{`
        .services-hero {
          height: 350px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          background-size: cover;
          background-position: center;
        }
        .services-hero h1 {
          font-size: 3.5rem;
          font-weight: 900;
          letter-spacing: -1.5px;
          margin-bottom: 10px;
        }
        .breadcrumbs {
          font-size: 1.1rem;
          opacity: 0.9;
        }
        .category-title-box {
          text-align: center;
          margin-bottom: 40px;
          padding-top: 50px;
        }
        .category-title-box h2 {
          font-size: 2.22rem;
          font-weight: 800;
          color: #333;
          display: inline-block;
          position: relative;
          padding-bottom: 10px;
        }
        .category-title-box h2::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 3px;
          background: var(--primary);
        }
        .intro-card-box {
          background: #f8f9fa;
          padding: 60px;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.03);
          margin-bottom: 40px;
        }
        .intro-card {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .service-title-small {
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--primary);
          margin-bottom: 20px;
        }
        .service-subtitle {
          font-size: 2.4rem;
          font-weight: 900;
          margin-bottom: 30px;
          line-height: 1.3;
          color: #111;
        }
        .service-desc {
          font-size: 1.15rem;
          line-height: 1.8;
          color: #555;
          word-break: keep-all;
        }
        .intro-image-side img {
          width: 100%;
          height: auto;
          border-radius: 15px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.1);
        }
        .section-header-centered {
          text-align: center;
          margin-bottom: 70px;
        }
        .section-title-main {
          font-size: 2.8rem;
          font-weight: 900;
          color: #111;
        }
        .section-title-main .highlight {
          color: var(--primary);
        }
        .features-grid-8 {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }
        .feature-item {
          background: white;
          padding: 40px 25px;
          border-radius: 20px;
          text-align: center;
          transition: transform 0.3s;
          border: 1px solid #eee;
        }
        .feature-item:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.08);
        }
        .feature-icon-box {
          color: var(--primary);
          margin-bottom: 25px;
          display: flex;
          justify-content: center;
        }
        .feature-text h5 {
          font-size: 1.1rem;
          font-weight: 800;
          margin-bottom: 12px;
          color: #111;
          word-break: keep-all;
        }
        .feature-text p {
          font-size: 0.95rem;
          color: #666;
          line-height: 1.6;
          word-break: keep-all;
        }
        .process-wrapper {
          position: relative;
          padding: 40px 0;
        }
        .process-timeline-line {
          position: absolute;
          top: 75px;
          left: 5%;
          right: 5%;
          height: 2px;
          background: #e9ecef;
          z-index: 1;
        }
        .process-steps {
          display: flex;
          justify-content: space-between;
          position: relative;
          z-index: 2;
        }
        .process-step-item {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 14%;
        }
        .step-number-node {
          width: 50px;
          height: 50px;
          background: var(--primary);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          font-weight: 800;
          margin-bottom: 25px;
          box-shadow: 0 5px 15px rgba(0, 145, 255, 0.3);
        }
        .step-label {
          font-size: 0.95rem;
          font-weight: 800;
          color: #333;
          margin-bottom: 20px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 1.3;
        }
        .step-thumb {
          width: 100%;
          height: 100px;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        .step-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .scope-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }
        .scope-item {
          background: white;
          padding: 35px;
          border-radius: 15px;
          display: flex;
          gap: 25px;
          border: 1px solid #f0f0f0;
          box-shadow: 0 5px 20px rgba(0,0,0,0.02);
        }
        .scope-icon-wrap {
          color: var(--primary);
          opacity: 0.8;
          flex-shrink: 0;
        }
        .scope-text h5 {
          font-size: 1.3rem;
          font-weight: 900;
          margin-bottom: 12px;
          color: #111;
        }
        .scope-text p {
          font-size: 1rem;
          color: #555;
          line-height: 1.7;
        }
        .pricing-cta-section {
          padding-top: 50px;
          padding-bottom: 100px;
        }
        .pricing-box {
          background: #f8f9fa;
          padding: 80px 40px;
          border-radius: 30px;
          text-align: center;
          box-shadow: inset 0 0 40px rgba(0,0,0,0.02);
        }
        .pricing-title {
          font-size: 2.2rem;
          font-weight: 900;
          margin-bottom: 15px;
          color: #111;
        }
        .pricing-subtitle {
          font-size: 1.25rem;
          color: #666;
          margin-bottom: 40px;
        }
        .cta-btns {
          display: flex;
          justify-content: center;
          gap: 20px;
        }
        .btn {
          padding: 18px 45px;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 800;
          transition: all 0.3s;
        }
        .btn-dark {
          background: #333;
          color: white;
        }
        .btn-dark:hover {
          background: #000;
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }
        .btn-primary-outline {
          border: 2px solid var(--primary);
          color: var(--primary);
        }
        .btn-primary-outline:hover {
          background: var(--primary);
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
        .cta-section {
          background: #f8f9fa;
          padding-top: 100px;
          padding-bottom: 100px;
        }
        .cta-image-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          max-width: 1240px;
          margin: 0 auto;
        }
        .cta-image-link {
          display: block;
          width: 100%;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 15px 35px rgba(0,0,0,0.1);
          cursor: pointer;
        }
        .cta-full-img {
          width: 100%;
          height: auto;
          display: block;
          transition: filter 0.3s ease;
        }
        @media (max-width: 768px) {
          .intro-card { grid-template-columns: 1fr; text-align: center; }
          .service-subtitle { font-size: 1.8rem; }
          .section-title-main { font-size: 2rem; }
          .scope-grid { grid-template-columns: 1fr; }
          .services-hero h1 { font-size: 2.5rem; }
          .cta-btns { flex-direction: column; }
          .features-grid-8 { grid-template-columns: repeat(2, 1fr); gap: 15px; }
          .process-steps { flex-direction: column; gap: 40px; align-items: center; }
          .process-step-item { max-width: 100%; width: 100%; }
          .process-timeline-line { display: none; }
          .cta-image-grid { grid-template-columns: 1fr; padding: 0 20px; }
        }
      `}</style>
    </div>
  );
}
