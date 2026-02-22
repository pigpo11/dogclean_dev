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
                  <img src={service.img} alt={service.title} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="section bg-white features-section-new">
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="section-header-centered">
              <h2 className="scope-title-custom">
                {service.title} <span className="blue-highlight">특장점</span>
              </h2>
            </div>
            <div className="scope-grid-custom">
              {service.features.map((feature, i) => (
                <motion.div key={i} className="scope-item-custom" {...fadeInUp} transition={{ delay: i * 0.05 }}>
                  <div className="scope-icon-box-custom">{feature.icon}</div>
                  <div className="scope-content-custom">
                    <div className="scope-title-wrap-custom">
                      <h5>{feature.title}</h5>
                      <div className="title-underline"></div>
                    </div>
                    <p style={{ whiteSpace: 'pre-line' }}>{feature.desc}</p>
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
            <div className="process-wrapper" style={{ position: 'relative', padding: '60px 0', maxWidth: '1200px', margin: '0 auto' }}>
              <div className="process-timeline-line" style={{
                position: 'absolute',
                top: '85px',
                left: '7%',
                right: '7%',
                height: '2px',
                backgroundColor: '#ddd',
                zIndex: 1,
                overflow: 'hidden'
              }}>
                <motion.div
                  className="process-progress-fill"
                  style={{ height: '100%', backgroundColor: 'var(--primary)', width: 0 }}
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
              </div>
              <div className="process-steps" style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', zIndex: 2 }}>
                {service.process.map((step, i) => (
                  <motion.div
                    key={i}
                    className="process-step-item"
                    style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 15px' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2, duration: 0.5 }}
                  >
                    <div className="step-number-node" style={{
                      width: '50px',
                      height: '50px',
                      backgroundColor: 'var(--primary)',
                      color: 'white',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.1rem',
                      fontWeight: 800,
                      marginBottom: '30px',
                      boxShadow: '0 5px 15px rgba(0, 174, 239, 0.3)',
                      position: 'relative',
                      zIndex: 3
                    }}>
                      <span className="step-num">0{i + 1}</span>
                    </div>
                    <div className="step-content">
                      <p className="step-label" style={{
                        fontSize: '1rem',
                        fontWeight: 800,
                        color: '#333',
                        marginBottom: '25px',
                        height: '2.4rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        lineHeight: '1.2',
                        wordBreak: 'keep-all'
                      }}>{step.label}</p>
                      <div className="step-thumb" style={{
                        width: '100%',
                        aspectRatio: '4 / 3',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
                        backgroundColor: '#f8f9fa'
                      }}>
                        <img src={step.img} alt={step.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Scope & Methods */}
        <section className="section bg-white scope-section">
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="section-header-centered">
              <h2 className="scope-title-custom">
                {service.title} <span className="blue-highlight">범위와 방법</span>
              </h2>
            </div>
            <div className="scope-grid-custom">
              {service.scope.map((item, i) => (
                <motion.div key={i} className="scope-item-custom" {...fadeInUp} transition={{ delay: i * 0.1 }}>
                  <div className="scope-icon-box-custom">{item.icon}</div>
                  <div className="scope-content-custom">
                    <div className="scope-title-wrap-custom">
                      <h5>{item.title}</h5>
                      <div className="title-underline"></div>
                    </div>
                    <p style={{ whiteSpace: 'pre-line' }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing CTA */}
        <section className="section pricing-custom-section">
          <div className="container">
            <div className="pricing-content-wrap">
              <div className="pricing-title-area">
                <div className="pricing-line"></div>
                <h2 className="pricing-title-new">
                  {service.title} <span className="blue-point">가격안내</span>
                </h2>
                <div className="pricing-line"></div>
              </div>

              <div className="pricing-btn-group">
                <a href="tel:1661-0959" className="pricing-btn pricing-btn-grey">1661-0959</a>
                <a href="/estimate" className="pricing-btn pricing-btn-blue">
                  간편 견적 <ArrowRight size={18} style={{ marginLeft: '10px' }} />
                </a>
              </div>

              <p className="pricing-bottom-desc">전화상담으로 보다 정확한 견적을 받아보세요!</p>
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
        .process-wrapper {
          position: relative;
          padding: 60px 0;
          max-width: 1200px;
          margin: 0 auto;
        }
        .process-timeline-line {
          position: absolute;
          top: 83px; /* 숫자 간 정중앙 정렬을 위해 85px에서 83px로 미세 조정 */
          left: 7.2%; /* 첫 번째 원의 정중앙 */
          right: 7.2%; /* 마지막 원의 정중앙 */
          height: 2px;
          background: #ddd; /* 선이 더 잘 보이도록 색상 변경 */
          z-index: 1;
          overflow: hidden;
        }
        .process-progress-fill {
          height: 100%;
          background: var(--primary);
          width: 0;
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
          padding: 0 15px; /* 이미지 간 간격 더 확보 */
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
          font-size: 1.1rem;
          font-weight: 800;
          margin-bottom: 30px;
          box-shadow: 0 5px 15px rgba(0, 174, 239, 0.3);
          position: relative;
          z-index: 3;
        }
        .step-label {
          font-size: 1rem;
          font-weight: 800;
          color: #333;
          margin-bottom: 25px;
          height: 2.4rem;
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 1.2;
          word-break: keep-all;
        }
        .step-thumb {
          width: 100%;
          aspect-ratio: 4 / 3;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 8px 20px rgba(0,0,0,0.08);
          background-color: #f8f9fa;
        }
        .step-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .scope-section {
          border-top: 1px solid #eeeeee;
          padding-top: 100px;
          padding-bottom: 100px;
        }
        .scope-title-custom {
          font-size: 3rem;
          font-weight: 800;
          color: #333;
          margin-bottom: 80px;
        }
        .scope-title-custom .blue-highlight {
          color: #00AEEF;
        }
        .scope-grid-custom {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px 80px;
        }
        .scope-item-custom {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 25px;
          width: 100%;
        }
        .scope-icon-box-custom {
          width: 80px;
          height: 80px;
          background-color: #f8f9fa;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #555;
          border-radius: 12px;
          margin: 0 auto;
        }
        .scope-content-custom {
          width: 100%;
          text-align: center;
        }
        .scope-title-wrap-custom {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 20px;
        }
        .scope-title-wrap-custom h5 {
          font-size: 1.6rem;
          font-weight: 800;
          color: #111;
          margin-bottom: 12px;
        }
        .title-underline {
          width: 100%;
          height: 3px;
          background-color: #00AEEF;
        }
        .scope-content-custom p {
          font-size: 1.1rem;
          color: #777;
          line-height: 1.8;
          word-break: keep-all;
          text-align: left;
          max-width: 380px;
          margin: 0 auto;
        }
        @media (max-width: 768px) {
          .scope-grid-custom {
            grid-template-columns: 1fr;
            gap: 50px;
          }
          .scope-item-custom {
            flex-direction: column;
            gap: 20px;
          }
          .scope-icon-box-custom {
            width: 80px;
            height: 80px;
          }
          .scope-title-custom {
            font-size: 2rem;
          }
        }
        .pricing-custom-section {
          background-color: #f2f7fa;
          padding: 100px 0;
          text-align: center;
        }
        .pricing-content-wrap {
          max-width: 600px;
          margin: 0 auto;
        }
        .pricing-title-area {
          margin-bottom: 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
        }
        .pricing-line {
          width: 140px;
          height: 1px;
          background-color: #d1dadd;
        }
        .pricing-title-new {
          font-size: 2.22rem;
          font-weight: 800;
          color: #333;
          margin: 10px 0;
        }
        .pricing-title-new .blue-point {
          color: #00AEEF;
        }
        .pricing-btn-group {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-bottom: 25px;
        }
        .pricing-btn {
          padding: 15px 45px;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 700;
          text-decoration: none;
          min-width: 220px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .pricing-btn-grey {
          background-color: #808080;
          color: white;
        }
        .pricing-btn-grey:hover {
          background-color: #666666;
          transform: translateY(-2px);
        }
        .pricing-btn-blue {
          background-color: #00AEEF;
          color: white;
        }
        .pricing-btn-blue:hover {
          background-color: #008ec3;
          transform: translateY(-2px);
        }
        .pricing-bottom-desc {
          font-size: 0.95rem;
          color: #666;
          font-weight: 600;
        }
        @media (max-width: 768px) {
          .pricing-btn-group {
            flex-direction: column;
            align-items: center;
          }
          .pricing-btn {
            width: 100%;
            max-width: 300px;
          }
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
