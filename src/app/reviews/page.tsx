"use client";

import { Star, MessageSquare, Image as ImageIcon } from "lucide-react";

export default function ReviewsPage() {
  const reviews = [
    { id: 1, user: "웅이맘", type: "아기맞이청소", rating: 5, date: "2026.02.10", title: "덕분에 안심하고 아기 데려왔어요!", content: "반려견이 두 마리라 털이랑 냄새 걱정이 많았는데, 컬비 장비로 벽지까지 청소해주시는 거 보고 감동받았습니다. 피톤치드 향도 너무 좋고 정말 깨끗해졌어요." },
    { id: 2, user: "초코아빠", type: "이사청소", rating: 5, date: "2026.02.05", title: "전 거주자 반려동물 흔적 싹 사라졌네요", content: "전에 사시던 분이 고양이를 여러 마리 키우셔서 털이랑 냄새가 심했는데, 멍크린에서 오존 살균해주시고 나니까 집이 완전 새집처럼 쾌적해졌습니다." },
    { id: 3, user: "미소사랑", type: "거주청소", rating: 4, date: "2026.01.28", title: "정기적으로 맡겨야겠어요", content: "일반 청소업체랑은 정말 다르네요. 털 한 톨 안 보이게 꼼꼼히 해주셨어요. 바닥 결까지 살려주셔서 너무 만족합니다." },
  ];

  return (
    <div className="container section">
      <div className="review-header">
        <h1 className="section-title">리얼 고객 후기</h1>
        <p>멍크린을 이용하신 고객님들의 생생한 목소리를 확인하세요.</p>
        <button className="btn btn-primary write-btn">후기 작성하기</button>
      </div>

      <div className="review-stats">
        <div className="stat-item">
          <span className="label">전체 평점</span>
          <span className="value">4.9 / 5.0</span>
          <div className="stars">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={18} fill="var(--accent)" color="var(--accent)" />)}
          </div>
        </div>
        <div className="stat-item">
          <span className="label">누적 후기</span>
          <span className="value">1,248건</span>
        </div>
      </div>

      <div className="review-list">
        {reviews.map(r => (
          <div key={r.id} className="review-card">
            <div className="card-header">
              <div className="user-info">
                <span className="user-name">{r.user}</span>
                <span className="service-badge">{r.type}</span>
              </div>
              <div className="rating-info">
                <div className="card-stars">
                  {[...Array(r.rating)].map((_, i) => <Star key={i} size={14} fill="var(--accent)" color="var(--accent)" />)}
                </div>
                <span className="date">{r.date}</span>
              </div>
            </div>
            <h3 className="card-title">{r.title}</h3>
            <p className="card-content">{r.content}</p>
            <div className="card-footer">
              <span className="action"><ImageIcon size={16} /> 사진 2장</span>
              <span className="action"><MessageSquare size={16} /> 댓글 1</span>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .review-header {
          text-align: center;
          margin-bottom: 60px;
        }
        .write-btn {
          margin-top: 30px;
        }
        .review-stats {
          display: flex;
          justify-content: center;
          gap: 100px;
          padding: 40px;
          background: #fff;
          border-radius: 20px;
          margin-bottom: 60px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        }
        .stat-item {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }
        .stat-item .label {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }
        .stat-item .value {
          font-size: 2rem;
          font-weight: 800;
          color: var(--dark-bg);
        }
        .review-list {
          display: grid;
          grid-template-columns: 1fr;
          gap: 30px;
        }
        .review-card {
          background: #fff;
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.03);
          border: 1px solid rgba(0, 0, 0, 0.05);
        }
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        .user-info {
          display: flex;
          align-items: center;
          gap: 15px;
        }
        .user-name {
          font-weight: 700;
          font-size: 1.1rem;
        }
        .service-badge {
          background: var(--background);
          color: var(--primary);
          padding: 4px 12px;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
        }
        .rating-info {
          text-align: right;
        }
        .date {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }
        .card-stars {
          display: flex;
          gap: 2px;
          margin-bottom: 5px;
        }
        .card-title {
          font-size: 1.3rem;
          margin-bottom: 15px;
          color: var(--dark-bg);
        }
        .card-content {
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 25px;
        }
        .card-footer {
          display: flex;
          gap: 20px;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }
        .action {
          display: flex;
          align-items: center;
          gap: 5px;
        }
        @media (max-width: 768px) {
          .review-stats { gap: 40px; padding: 30px 20px; }
          .review-card { padding: 30px 20px; }
          .card-header { flex-direction: column; align-items: flex-start; gap: 10px; }
          .rating-info { text-align: left; }
        }
      `}</style>
    </div>
  );
}
