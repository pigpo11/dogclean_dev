"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CheckCircle, ArrowRight, Receipt, Calendar, User } from "lucide-react";

export default function SuccessPage() {
  const [params, setParams] = useState<{ paymentKey: string; orderId: string; amount: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [confirmed, setConfirmed] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const paymentKey = urlParams.get("paymentKey");
    const orderId = urlParams.get("orderId");
    const amount = urlParams.get("amount");

    if (paymentKey && orderId && amount) {
      setParams({ paymentKey, orderId, amount });

      // 결제 승인 API 호출
      const confirmPayment = async () => {
        try {
          const response = await fetch("/api/payment/confirm", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ paymentKey, orderId, amount }),
          });

          if (response.ok) {
            setConfirmed(true);
          } else {
            const errData = await response.json();
            // 실패 시 /fail 페이지로 리다이렉트 (가이드라인 준수)
            window.location.href = `/fail?message=${errData.message || "결제 승인 실패"}&code=${errData.code || "CONFIRM_ERROR"}`;
          }
        } catch (err) {
          setError("서버와 통신하는 중 오류가 발생했습니다.");
        } finally {
          setLoading(false);
        }
      };

      confirmPayment();
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className="success-page">
        <div className="container" style={{ textAlign: 'center', padding: '150px 20px' }}>
          <div className="loader" style={{ margin: '0 auto 30px' }}></div>
          <h2>결제 정보를 승인하는 중입니다...</h2>
          <style jsx>{`
            .loader {
              border: 5px solid #f3f3f3;
              border-top: 5px solid var(--primary);
              border-radius: 50%;
              width: 50px;
              height: 50px;
              animation: spin 1s linear infinite;
            }
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="success-page">
        <div className="container" style={{ textAlign: 'center', padding: '150px 20px' }}>
          <div style={{ color: '#ef4444', marginBottom: '30px' }}>⚠️ {error}</div>
          <Link href="/payment" className="btn btn-primary">결제 페이지로 다시 이동</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="success-page">
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '100px 20px' }}>
        <div className="success-card">
          <div className="card-header">
            <CheckCircle size={80} color="#22c55e" />
            <h1 style={{ fontSize: '2.5rem', fontWeight: 900, marginTop: '30px', marginBottom: '15px' }}>결제가 완료되었습니다!</h1>
            <p style={{ fontSize: '1.2rem', color: '#64748b' }}>
              멍크린 프리미엄 서비스를 이용해주셔서 감사합니다.
            </p>
          </div>

          {params && (
            <div className="payment-details">
              <h3>결제 정보</h3>
              <div className="detail-row">
                <div className="label-wrap">
                  <Receipt size={18} />
                  <span>주문 번호</span>
                </div>
                <span className="value">{params.orderId}</span>
              </div>
              <div className="detail-row">
                <div className="label-wrap">
                  <Calendar size={18} />
                  <span>결제 금액</span>
                </div>
                <span className="value highlight">{Number(params.amount).toLocaleString()}원</span>
              </div>
              <div className="detail-row">
                <div className="label-wrap">
                  <User size={18} />
                  <span>결제 키</span>
                </div>
                <span className="value truncate">{params.paymentKey}</span>
              </div>
            </div>
          )}

          <div className="next-steps">
            <p>보통 24시간 이내에 전문가가 해피콜로 연락 드립니다.</p>
            <div className="btn-group">
              <Link href="/" className="btn btn-primary">
                홈으로 이동
              </Link>
              <Link href="/services" className="btn btn-outline">
                다른 서비스 보기 <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .success-page {
          min-height: 100vh;
          background-color: #f8fafc;
        }
        .success-card {
          background: white;
          border-radius: 30px;
          padding: 60px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.05);
          text-align: center;
        }
        .card-header {
          margin-bottom: 50px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .payment-details {
          background: #f1f5f9;
          border-radius: 20px;
          padding: 40px;
          text-align: left;
          margin-bottom: 50px;
        }
        .payment-details h3 {
          font-size: 1.25rem;
          font-weight: 800;
          margin-bottom: 25px;
          color: #1e293b;
        }
        .detail-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 18px;
          padding-bottom: 18px;
          border-bottom: 1px solid #e2e8f0;
        }
        .detail-row:last-child {
          margin-bottom: 0;
          padding-bottom: 0;
          border-bottom: none;
        }
        .label-wrap {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #64748b;
          font-weight: 600;
        }
        .value {
          font-weight: 700;
          color: #1e293b;
        }
        .value.highlight {
          color: var(--primary);
          font-size: 1.2rem;
        }
        .value.truncate {
          max-width: 200px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 0.85rem;
          opacity: 0.7;
        }
        .next-steps {
          color: #64748b;
        }
        .next-steps p {
          margin-bottom: 30px;
          font-weight: 500;
        }
        .btn-group {
          display: flex;
          gap: 15px;
          justify-content: center;
        }
        .btn-outline {
          border: 1px solid #e2e8f0;
          background: white;
          color: #64748b;
          padding: 15px 30px;
          border-radius: 50px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s;
        }
        .btn-outline:hover {
          background: #f8fafc;
          border-color: #cbd5e1;
        }
        @media (max-width: 600px) {
          .success-card { padding: 40px 20px; }
          .btn-group { flex-direction: column; }
          .payment-details { padding: 25px; }
          .value.truncate { max-width: 120px; }
        }
      `}</style>
    </div>
  );
}
