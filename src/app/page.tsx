"use client";

import Hero from "@/components/Hero";
import Link from "next/link";
import { Dog, ShieldCheck, Zap, UserCheck, ArrowRight } from "lucide-react";

export default function Home() {
  const highlightItems = [
    { icon: <Dog size={40} />, title: "반려동물 전문", desc: "펫 전용 특화 서비스 및 털 제거 노하우" },
    { icon: <ShieldCheck size={40} />, title: "친환경 살균", desc: "안전한 친환경 세제와 냄새 원인 제거" },
    { icon: <Zap size={40} />, title: "프리미엄 장비", desc: "컬비, 미코플러 등 업계 최고급 전문 장비" },
    { icon: <UserCheck size={40} />, title: "전문 인력", desc: "철저한 교육을 이수한 숙련된 전문가 투입" },
  ];

  const services = [
    { name: "이사청소", href: "/home-cleaning", img: "https://images.unsplash.com/photo-1544450173-8c87998d5f31?q=80&w=1000", desc: "새로운 시작을 위한 완벽한 공간 케어" },
    { name: "거주청소", href: "/home-cleaning", img: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=1000", desc: "함께 숨 쉬는 공간을 더 깨끗하게" },
    { name: "아기맞이청소", href: "/home-cleaning", img: "https://images.unsplash.com/photo-1545659819-76dec714778a?q=80&w=1000", desc: "신생아와 반려동물의 안전을 위한 선택" },
    { name: "상가청소", href: "/commercial-cleaning", img: "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?q=80&w=1000", desc: "애견카페, 동물병원 위생 전문 관리" },
  ];

  return (
    <>
      <Hero />

      {/* Highlights Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="highlights-grid">
            {highlightItems.map((item, index) => (
              <div key={index} className="highlight-card">
                <div className="icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">멍크린 토탈 케어 서비스</h2>
          <div className="services-grid">
            {services.map((item, index) => (
              <Link href={item.href} key={index} className="service-card">
                <div className="service-img" style={{ backgroundImage: `url(${item.img})` }}></div>
                <div className="service-info">
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                  <span className="learn-more">자세히 보기 <ArrowRight size={16} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-box">
            <h2>지금 우리 아이를 위한 청소 상담을 받아보세요</h2>
            <p>전문 상담사가 직접 방문하여 정확한 견적과 최적의 청소 솔루션을 제안해 드립니다.</p>
            <Link href="/estimate" className="btn btn-primary btn-lg">간편 견적 신청하기</Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .highlights-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 30px;
        }
        .highlight-card {
          padding: 40px;
          background: #fff;
          border-radius: 20px;
          text-align: center;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
          border: 1px solid rgba(0, 0, 0, 0.05);
        }
        .highlight-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(255, 140, 66, 0.1);
          border-color: rgba(255, 140, 66, 0.2);
        }
        .highlight-card .icon {
          color: var(--primary);
          margin-bottom: 20px;
        }
        .highlight-card h3 {
          font-size: 1.4rem;
          margin-bottom: 15px;
          color: var(--dark-bg);
        }
        .highlight-card p {
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }
        .service-card {
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }
        .service-card:hover {
          transform: scale(1.02);
        }
        .service-img {
          height: 220px;
          background-size: cover;
          background-position: center;
        }
        .service-info {
          padding: 30px;
        }
        .service-info h3 {
          font-size: 1.5rem;
          margin-bottom: 10px;
          color: var(--dark-bg);
        }
        .service-info p {
          color: var(--text-secondary);
          margin-bottom: 20px;
          font-size: 0.95rem;
        }
        .learn-more {
          display: flex;
          align-items: center;
          gap: 5px;
          color: var(--primary);
          font-weight: 700;
          font-size: 0.9rem;
        }

        .cta-section {
          padding: 100px 0;
          background-color: var(--background);
        }
        .cta-box {
          background: var(--dark-bg);
          padding: 80px 40px;
          border-radius: 40px;
          text-align: center;
          color: #fff;
        }
        .cta-box h2 {
          font-size: 2.5rem;
          margin-bottom: 20px;
        }
        .cta-box p {
          font-size: 1.2rem;
          opacity: 0.8;
          margin-bottom: 40px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        .btn-lg {
          padding: 18px 40px;
          font-size: 1.2rem;
        }

        @media (max-width: 768px) {
          .cta-box h2 { font-size: 1.8rem; }
          .cta-box { padding: 50px 20px; }
        }
      `}</style>
    </>
  );
}
