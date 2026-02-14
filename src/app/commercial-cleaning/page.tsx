"use client";

import Link from "next/link";
import { ChevronRight, CheckCircle2, Coffee, Stethoscope, Building2 } from "lucide-react";

const services = [
  {
    id: "pet-cafe",
    title: "애견카페",
    subtitle: "쾌적한 카페, 행복한 반려동물",
    icon: <Coffee size={32} />,
    img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1000",
    desc: "다수의 반려동물이 이용하는 애견카페는 일반 상가보다 위생 관리가 훨씬 까다롭습니다. 영업 종료 후 또는 정기적인 전문 청소를 통해 고객과 반려동물 모두가 안심할 수 있는 환경을 유지합니다.",
    features: ["바닥 심층 세척 및 살균", "소파 및 쿠션 정밀 케어", "반려동물 악취 근본 제거", "주방 및 공용공간 위생 관리"]
  },
  {
    id: "vet-clinic",
    title: "동물병원",
    subtitle: "위생이 생명인 공간, 전문 관리",
    icon: <Stethoscope size={32} />,
    img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000",
    desc: "동물병원은 의료 시설 수준의 최고급 위생이 요구되는 공간입니다. 진료실, 입원실, 대기실 등 각 영역의 특성에 맞는 맞춤형 살균 솔루션을 제공합니다.",
    features: ["의료 영역별 차등 살균", "오존 및 UV 집중 살균", "의료 폐기물 주변 특수 세척", "공기질 정화 및 바이러스 케어"]
  },
  {
    id: "facilities",
    title: "각종시설",
    subtitle: "모든 반려동물 시설, 깨끗하게",
    icon: <Building2 size={32} />,
    img: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=1000",
    desc: "펫호텔, 반려동물 미용실, 훈련소, 펫샵 등 반려동물과 관련된 모든 시설의 특수 오염을 관리합니다. 시설 규모와 운영 형태에 최적화된 청소 프로그램을 설계합니다.",
    features: ["시설별 맞춤 청소 설계", "주기적 정기 관리 프로그램", "대형 견사 및 특수 공간 세척", "검증된 친환경 약품 사용"]
  }
];

export default function CommercialCleaningPage() {
  return (
    <div className="container section">
      <h1 className="section-title">상가청소 서비스</h1>
      <p className="page-desc">전문적인 위생 관리가 필요한 반려동물 관련 사업장을 위한 맞춤형 클리닝 솔루션입니다.</p>

      <div className="services-list">
        {services.map((s, i) => (
          <div key={s.id} className={`service-item ${i % 2 === 1 ? "reverse" : ""}`}>
            <div className="content-side">
              <div className="title-area">
                <span className="icon-badge">{s.icon}</span>
                <div>
                  <h2>{s.title}</h2>
                  <h3>{s.subtitle}</h3>
                </div>
              </div>
              <p>{s.desc}</p>
              <ul className="feature-list">
                {s.features.map((f, fi) => (
                  <li key={fi}><CheckCircle2 size={18} /> {f}</li>
                ))}
              </ul>
              <Link href="/estimate" className="btn btn-primary">
                비즈니스 견적 문의 <ChevronRight size={18} />
              </Link>
            </div>
            <div className="img-side">
              <div className="placeholder-img" style={{ backgroundImage: `url(${s.img})` }}>
                <div className="img-overlay">
                  <span>MungClean Business</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .page-desc {
          text-align: center;
          max-width: 600px;
          margin: 0 auto 80px;
          color: var(--text-secondary);
          font-size: 1.1rem;
        }
        .services-list {
          display: flex;
          flex-direction: column;
          gap: 120px;
        }
        .service-item {
          display: flex;
          align-items: center;
          gap: 60px;
        }
        .service-item.reverse {
          flex-direction: row-reverse;
        }
        .content-side {
          flex: 1;
        }
        .img-side {
          flex: 1;
        }
        .title-area {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 25px;
        }
        .icon-badge {
          width: 70px;
          height: 70px;
          background: var(--background);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 20px;
          border: 1px solid rgba(255, 140, 66, 0.2);
        }
        h2 {
          font-size: 2.2rem;
          margin-bottom: 5px;
          color: var(--dark-bg);
        }
        h3 {
          font-size: 1.2rem;
          color: var(--secondary);
          font-weight: 600;
        }
        p {
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 30px;
          font-size: 1.05rem;
        }
        .feature-list {
          margin-bottom: 40px;
          display: grid;
          grid-template-columns: 1fr;
          gap: 15px;
        }
        .feature-list li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 600;
          color: var(--dark-bg);
        }
        .placeholder-img {
          width: 100%;
          height: 450px;
          background: #eee;
          border-radius: 40px;
          background-size: cover;
          background-position: center;
          position: relative;
          overflow: hidden;
        }
        .img-overlay {
          position: absolute;
          bottom: 40px;
          left: 40px;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(5px);
          padding: 10px 20px;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 800;
          color: var(--dark-bg);
          letter-spacing: 1px;
        }
        @media (max-width: 1024px) {
          .service-item, .service-item.reverse {
            flex-direction: column;
            gap: 40px;
          }
          .img-side { width: 100%; order: -1; }
          .placeholder-img { height: 300px; }
          h2 { font-size: 1.8rem; }
          .title-area { flex-direction: column; align-items: flex-start; }
        }
        @media (min-width: 768px) {
          .feature-list {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </div>
  );
}
