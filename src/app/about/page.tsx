"use client";

import { Shield, Sparkles, Heart, Zap, Waves, Microscope } from "lucide-react";

export default function AboutPage() {
  const values = [
    { icon: <Shield />, title: "안전", desc: "사람과 반려동물 모두에게 무해한 친환경 세정" },
    { icon: <Sparkles />, title: "전문성", desc: "다년간의 노하우와 최고급 전용 장비 활용" },
    { icon: <Heart />, title: "신뢰", desc: "청소 전후 사진 공유와 투명한 서비스 마인드" },
  ];

  const equipments = [
    { name: "컬비 (KIRBY)", desc: "미세먼지, 진드기, 반려동물 털까지 완벽 흡입" },
    { name: "미코플러", desc: "진공과 스팀이 동시에 가능한 바닥 전문 장비" },
    { name: "오존발생기", desc: "공기 중 세균과 악취 원인을 분해하는 살균기" },
    { name: "피톤치드", desc: "천연 항균 및 탈취 효과의 마무리 케어" },
  ];

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1>반려동물과 사람이 함께<br />행복한 공간을 만듭니다</h1>
          <p>멍크린은 평범한 청소업체가 아닙니다. 반려동물 가정의 특수한 환경을<br />가장 잘 이해하는 동반자로서 최상의 청결을 제공합니다.</p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title">멍크린의 핵심 가치</h2>
          <div className="values-grid">
            {values.map((v, i) => (
              <div key={i} className="value-card">
                <div className="icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="equipment-showcase">
            <div className="text-side">
              <h2 className="title">업계 최고 수준의<br />전문 장비 시스템</h2>
              <p className="desc">멍크린은 일반 청소기로는 해결할 수 없는 깊은 오염까지 찾아냅니다. 고성능 장비 도입에 아낌없이 투자하여 완벽한 결과를 만듭니다.</p>
              <div className="equipment-list">
                {equipments.map((e, i) => (
                  <div key={i} className="eq-item">
                    <h4>{e.name}</h4>
                    <p>{e.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="img-side">
              <div className="eq-box-grid">
                <div className="eq-box"><Zap size={40} /></div>
                <div className="eq-box"><Waves size={40} /></div>
                <div className="eq-box"><Microscope size={40} /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .about-hero {
          background-color: var(--primary);
          color: #fff;
          padding: 120px 0;
          text-align: center;
        }
        .about-hero h1 {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 25px;
        }
        .about-hero p {
          font-size: 1.2rem;
          opacity: 0.9;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
        }
        .value-card {
          text-align: center;
          padding: 40px;
          border-radius: 20px;
          background: var(--background);
        }
        .value-card .icon {
          color: var(--primary);
          margin-bottom: 20px;
          display: inline-block;
          transform: scale(2);
        }
        .value-card h3 {
          font-size: 1.5rem;
          margin-bottom: 15px;
        }

        .equipment-showcase {
          display: flex;
          gap: 60px;
          align-items: center;
        }
        .text-side { flex: 1; }
        .img-side { flex: 1; }
        .title {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 20px;
        }
        .desc {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 40px;
        }
        .eq-item {
          margin-bottom: 25px;
          border-left: 4px solid var(--secondary);
          padding-left: 20px;
        }
        .eq-item h4 {
          font-size: 1.2rem;
          margin-bottom: 5px;
        }
        .eq-box-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .eq-box {
          aspect-ratio: 1;
          background: var(--dark-bg);
          color: var(--secondary);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        @media (max-width: 1024px) {
          .equipment-showcase { flex-direction: column; }
        }
      `}</style>
    </div>
  );
}
