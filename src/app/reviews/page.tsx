"use client";

export default function ReviewsPage() {
  const reviews = [
    { id: 1, img: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=60&w=600", title: "독일 키엘사 친환경 세제로 안심 케어", desc: "반려동물이 있는 집도 걱정 없는 멍크린 클리닝" },
    { id: 2, img: "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&q=60&w=600", title: "말끔한 새 공간으로의 완벽한 변신", desc: "보이지 않는 미세먼지까지 꼼꼼하게 제거했습니다" },
    { id: 3, img: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&q=60&w=600", title: "이사 전 필수! 프리미엄 입주청소 세트", desc: "멍크린의 전문 장비로 완성하는 깨끗한 첫 시작" },
    { id: 4, img: "https://images.unsplash.com/photo-1585913661204-6204c3c3a9a2?auto=format&fit=crop&q=60&w=600", title: "구석구석 보이지 않는 사각지대까지 해결", desc: "전등 갓 내부부터 하수구 안쪽까지 완벽 살균" },
    { id: 5, img: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=60&w=600", title: "처음부터 끝까지 섬세한 스팀 살균 케어", desc: "독한 화학 약품 대신 고온 스팀으로 안심 살균" },
    { id: 6, img: "https://images.unsplash.com/photo-1581578731548-c64695ce6958?auto=format&fit=crop&q=60&w=600", title: "전문가의 손길로 완성되는 디테일 청소", desc: "사소한 틈새 하나 놓치지 않는 정성스러운 손길" },
    { id: 7, img: "https://images.unsplash.com/photo-1556911220-e156211ca990?auto=format&fit=crop&q=60&w=600", title: "비즈니스 효율을 높이는 쾌적한 사무실 청소", desc: "성동구 지식산업센터 등 대형 사무공간 전문 관리" },
    { id: 8, img: "https://images.unsplash.com/photo-1540331547168-8b63109225b7?auto=format&fit=crop&q=60&w=600", title: "합리적인 가격으로 누리는 최상의 청소 품질", desc: "부담 없는 가격과 압도적인 만족도, 멍크린입니다" },
  ];

  return (
    <div className="reviews-page">
      <div className="page-header" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1556911220-e156211ca990?auto=format&fit=crop&q=80&w=1920)' }}>
        <div className="container">
          <h1>청소후기</h1>
          <p style={{ marginTop: '20px', opacity: 0.9 }}>멍크린이 직접 다녀온 생생한 현장 기록입니다</p>
        </div>
      </div>

      <div className="container section">
        <div className="gallery-grid">
          {reviews.map((r) => (
            <div key={r.id} className="gallery-card">
              <div className="img-wrap">
                <img src={r.img} alt={r.title} />
              </div>
              <div className="content">
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="pagination">
          <button className="active">1</button>
          <button>2</button>
          <button>다음</button>
          <button>마지막</button>
        </div>
      </div>

      <style jsx>{`
        .page-header {
          height: 350px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          background-size: cover;
          background-position: center;
          color: white;
        }
        .page-header h1 {
          font-size: 3.5rem;
          font-weight: 900;
        }
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
        }
        .gallery-card {
          background: #fff;
          border: 1px solid #f0f0f0;
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0,0,0,0.02);
        }
        .gallery-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.08);
          border-color: var(--primary-light);
        }
        .img-wrap {
          aspect-ratio: 4/3;
          overflow: hidden;
        }
        .img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .gallery-card:hover .img-wrap img {
          transform: scale(1.05);
        }
        .content {
          padding: 20px;
        }
        .content h3 {
          font-size: 1.1rem;
          font-weight: 800;
          margin-bottom: 12px;
          color: #1e293b;
          line-height: 1.4;
          word-break: keep-all;
        }
        .content p {
          font-size: 0.9rem;
          color: #64748b;
          line-height: 1.6;
          word-break: keep-all;
        }
        .pagination {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 80px;
        }
        .pagination button {
          padding: 10px 18px;
          border: 1px solid #e2e8f0;
          background: #fff;
          font-size: 0.95rem;
          font-weight: 600;
          color: #64748b;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .pagination button:hover {
          background: #f8fafc;
          border-color: #cbd5e1;
          color: #1e293b;
        }
        .pagination button.active {
          background: var(--primary);
          color: white;
          border-color: var(--primary);
        }
        @media (max-width: 1200px) {
          .gallery-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 900px) {
          .gallery-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .gallery-grid { grid-template-columns: 1fr; }
          .page-header h1 { font-size: 2.5rem; }
        }
      `}</style>
    </div>
  );
}
