"use client";

import { Shield, Sparkles, Heart, Rocket, Smile, ThumbsUp } from "lucide-react";

export default function AboutPage() {
  const values = [
    { icon: <Sparkles size={40} />, title: "전문성", desc: "다년간의 노하우와 최첨단 장비를 활용한 수준 높은 청소 서비스" },
    { icon: <Shield size={40} />, title: "신뢰", desc: "고객님의 소중한 공간을 내 집처럼 생각하는 정직한 정품 정량 서비스" },
    { icon: <Smile size={40} />, title: "고객만족", desc: "고객님의 한 마디 한 마디에 귀 기울이는 소통 중심 서비스" },
  ];

  return (
    <div className="about-page">
      <section className="about-hero" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1581578731548-c64695ce6958?auto=format&fit=crop&q=80&w=1920)' }}>
        <div className="container">
          <Sparkles size={60} color="#00AEEF" style={{ marginBottom: '20px' }} />
          <h1>공간에 새로운 가치를 더하는<br />멍크린입니다</h1>
          <p>멍크린은 고객님의 쾌적하고 건강한 생활 환경을 위해<br />언제나 최선을 다하는 청소 전문 기업입니다.</p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="brand-intro">
            <h2 className="section-title">멍크린의 약속</h2>
            <div className="values-grid">
              {values.map((v, i) => (
                <div key={i} className="value-card">
                  <div className="icon-circle">{v.icon}</div>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>최첨단 청소 시스템</h2>
              <p>멍크린은 일반적인 청소에 그치지 않습니다. 각 현장의 오염도와 특성에 맞는 전용 세제와 고성능 장비를 사용하여, 보이지 않는 곳의 먼지와 세균까지 완벽하게 제거합니다.</p>
              <ul>
                <li><ThumbsUp size={18} color="#00AEEF" /> 친환경 에코 세제 사용</li>
                <li><ThumbsUp size={18} color="#00AEEF" /> 고온 스팀 살균 케어</li>
                <li><ThumbsUp size={18} color="#00AEEF" /> 오존 탈취 및 살균 서비스</li>
                <li><ThumbsUp size={18} color="#00AEEF" /> 꼼꼼한 사후 관리 시스템</li>
              </ul>
            </div>
            <div className="mission-img">
              <img src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=800" alt="Professional Tool" />
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .about-hero {
          height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          background-size: cover;
          background-position: center;
        }
        .about-hero h1 {
          font-size: 3.5rem;
          font-weight: 900;
          margin-bottom: 25px;
          line-height: 1.2;
        }
        .about-hero p {
          font-size: 1.25rem;
          opacity: 0.9;
        }
        
        .values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          margin-top: 60px;
        }
        .value-card {
          text-align: center;
          padding: 50px 30px;
          background: #fff;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.05);
          transition: transform 0.3s;
        }
        .value-card:hover { transform: translateY(-10px); }
        .icon-circle {
          width: 90px;
          height: 90px;
          background: var(--primary-light);
          color: var(--primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 30px;
        }
        .value-card h3 {
          font-size: 1.5rem;
          margin-bottom: 15px;
          font-weight: 800;
        }
        .value-card p {
          color: #666;
          line-height: 1.6;
        }

        .bg-light { background: #f8f9fa; }

        .mission-content {
          display: flex;
          align-items: center;
          gap: 80px;
        }
        .mission-text { flex: 1; }
        .mission-text h2 {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 30px;
        }
        .mission-text p {
          font-size: 1.1rem;
          color: #555;
          margin-bottom: 30px;
          line-height: 1.8;
        }
        .mission-text ul {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        .mission-text ul li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 700;
          color: #333;
        }
        .mission-img { flex: 1; }
        .mission-img img {
          width: 100%;
          border-radius: 20px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.1);
        }

        @media (max-width: 1024px) {
          .values-grid { grid-template-columns: repeat(2, 1fr); }
          .mission-content { flex-direction: column; gap: 40px; }
        }
        @media (max-width: 768px) {
          .about-hero h1 { font-size: 2.2rem; }
          .values-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
