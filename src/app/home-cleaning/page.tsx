"use client";

import Link from "next/link";
import { ChevronRight, CheckCircle2 } from "lucide-react";

const services = [
  {
    id: "moving",
    title: "이사청소",
    subtitle: "새로운 보금자리, 완벽한 시작!",
    img: "https://images.unsplash.com/photo-1560067174-c5a3a8f37060?q=80&w=1000",
    desc: "반려동물과 함께 이사할 때, 이전 거주지의 반려동물 흔적(털, 냄새, 오염)을 완벽하게 제거하여 깨끗한 상태로 인도합니다.",
    features: ["전 공간 오존 시공", "바닥/벽지 클리닝", "화장실/주방 집중 세척", "탈취 및 피톤치드 마감"]
  },
  {
    id: "residential",
    title: "거주청소",
    subtitle: "함께 사는 집, 더 깨끗하게",
    img: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=1000",
    desc: "현재 거주 중인 반려동물 가정의 정기적 전문 청소 서비스. 일반 청소로 해결되지 않는 털과 알레르기 유발물질을 전문 장비로 제거합니다.",
    features: ["생활 공간 전체 클리닝", "컬비 디테일 케어", "소파/카펫 케어", "냄새 원인균 집중 살균"]
  },
  {
    id: "baby",
    title: "아기맞이청소",
    subtitle: "가장 축복받아야 할 만남을 위해",
    img: "https://images.unsplash.com/photo-1555252333-978fe3c7e834?q=80&w=1000",
    desc: "면역력이 약한 신생아와 반려동물 모두가 안전하게 생활할 수 있는 환경을 만드는 특별한 프리미엄 청소입니다.",
    features: ["오존 살균 시공", "신생아방 집중 케어", "알레르기 유발물질 완벽 제거", "쿠션매트 세척 및 소독"]
  }
];

export default function HomeCleaningPage() {
  return (
    <div className="container section">
      <h1 className="section-title">집청소 서비스</h1>
      <p className="page-desc">반려동물 가정의 라이프스타일에 맞춘 3가지 특화 서비스를 제공합니다.</p>

      <div className="services-list">
        {services.map((s, i) => (
          <div key={s.id} className={`service-item ${i % 2 === 1 ? "reverse" : ""}`}>
            <div className="content-side">
              <span className="id-badge">0{i + 1}</span>
              <h2>{s.title}</h2>
              <h3>{s.subtitle}</h3>
              <p>{s.desc}</p>
              <ul className="feature-list">
                {s.features.map((f, fi) => (
                  <li key={fi}><CheckCircle2 size={18} /> {f}</li>
                ))}
              </ul>
              <Link href="/estimate" className="btn btn-primary">
                지금 예약하기 <ChevronRight size={18} />
              </Link>
            </div>
            <div className="img-side">
              <div className="placeholder-img" style={{ backgroundImage: `url(${s.img})` }}></div>
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
        .id-badge {
          display: inline-block;
          font-size: 1rem;
          font-weight: 800;
          color: var(--primary);
          margin-bottom: 15px;
        }
        h2 {
          font-size: 2.5rem;
          margin-bottom: 10px;
          color: var(--dark-bg);
        }
        h3 {
          font-size: 1.3rem;
          color: var(--secondary);
          margin-bottom: 25px;
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
          grid-template-columns: 1fr 1fr;
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
        }
        @media (max-width: 1024px) {
          .service-item, .service-item.reverse {
            flex-direction: column;
            gap: 40px;
          }
          .img-side { width: 100%; order: -1; }
          .placeholder-img { height: 300px; }
          h2 { font-size: 2rem; }
        }
      `}</style>
    </div>
  );
}
