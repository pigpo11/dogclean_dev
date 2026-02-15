"use client";

import { useEffect, useState } from "react";
import { loadTossPayments } from "@tosspayments/payment-sdk";
import { CreditCard, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function PaymentPage() {
  const [clientKey] = useState("test_ck_D4yKeq5bgrpoYOn6LJlV8W6vlRe2"); // 테스트 키
  const [quantity, setQuantity] = useState<number | string>(1);
  const unitPrice = 10000;

  const handleQuantityInput = (val: string) => {
    if (val === "") {
      setQuantity("");
      return;
    }
    const num = parseInt(val);
    if (!isNaN(num)) {
      setQuantity(num);
    }
  };

  const validateQuantity = () => {
    const num = typeof quantity === 'string' ? parseInt(quantity) : quantity;
    if (isNaN(num) || num < 1) {
      setQuantity(1);
    } else {
      setQuantity(num);
    }
  };

  const handlePayment = async () => {
    const finalQuantity = typeof quantity === 'string' ? (parseInt(quantity) || 1) : quantity;
    try {
      const tossPayments = await loadTossPayments(clientKey);

      await tossPayments.requestPayment("카드", {
        amount: unitPrice * finalQuantity,
        orderId: `order-${Math.random().toString(36).slice(2, 9)}`,
        orderName: `멍크린 프리미엄 청소 ${finalQuantity > 1 ? `(${finalQuantity}개)` : ""}`,
        customerName: "고객님",
        successUrl: `${window.location.origin}/success`,
        failUrl: `${window.location.origin}/fail`,
      });
    } catch (err) {
      console.error("결제 요청 실패:", err);
    }
  };

  return (
    <div className="payment-page">
      <div className="page-header" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1581578731548-c64695ce6958?auto=format&fit=crop&q=80&w=1920)' }}>
        <div className="container">
          <h1>결제하기</h1>
          <p>프리미엄 서비스를 간편하게 결제하세요</p>
        </div>
      </div>

      <div className="container payment-container">
        <div className="payment-card">
          <div className="product-info">
            <div className="product-badge">Premium Service</div>
            <h2 className="product-name">멍크린 프리미엄 청소</h2>

            <div className="quantity-control">
              <span className="label">구매 수량</span>
              <div className="selector">
                <button type="button" onClick={() => {
                  const current = typeof quantity === 'string' ? (parseInt(quantity) || 0) : quantity;
                  if (current > 1) setQuantity(current - 1);
                }}>−</button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => handleQuantityInput(e.target.value)}
                  onBlur={validateQuantity}
                  min="1"
                />
                <button type="button" onClick={() => {
                  const current = typeof quantity === 'string' ? (parseInt(quantity) || 0) : quantity;
                  setQuantity(current + 1);
                }}>+</button>
              </div>
            </div>

            <div className="price-tag">
              <span className="amount">{(unitPrice * (Number(quantity) || 1)).toLocaleString()}</span>
              <span className="currency">원</span>
            </div>
          </div>

          <div className="service-details">
            <div className="detail-item">
              <CheckCircle2 size={18} color="#00AEEF" />
              <span>컬비(Kirby) 시스템 집중 케어 (수량별 적용)</span>
            </div>
            <div className="detail-item">
              <CheckCircle2 size={18} color="#00AEEF" />
              <span>친환경 세제 및 오존 살균</span>
            </div>
            <div className="detail-item">
              <CheckCircle2 size={18} color="#00AEEF" />
              <span>반려동물 맞춤 전문 클리닝</span>
            </div>
          </div>

          <div className="payment-guide">
            <div className="guide-header">
              <ShieldCheck size={20} color="#059669" />
              <span>안전한 결제 안내</span>
            </div>
            <p>토스페이먼츠의 보안 결제 시스템을 통해 안전하게 처리됩니다.</p>
          </div>

          <button className="pay-btn" onClick={handlePayment}>
            <CreditCard size={20} />
            {(unitPrice * (Number(quantity) || 1)).toLocaleString()}원 결제하기
          </button>
        </div>
      </div>

      <style jsx>{`
        .payment-page {
          min-height: 100vh;
          background-color: #f8fafc;
          padding-bottom: 100px;
        }
        .page-header {
          height: 350px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          background-size: cover;
          background-position: center;
        }
        .page-header h1 {
          font-size: 3.5rem;
          font-weight: 900;
          margin-bottom: 15px;
          text-shadow: 0 4px 10px rgba(0,0,0,0.3);
        }
        .page-header p {
          font-size: 1.25rem;
          opacity: 0.9;
        }
        .payment-container {
          max-width: 600px;
          margin: -80px auto 0;
          position: relative;
          z-index: 10;
        }
        .payment-card {
          background: white;
          border-radius: 24px;
          padding: 50px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.08);
          border: 1px solid rgba(0,0,0,0.05);
        }
        .product-info {
          text-align: center;
          margin-bottom: 40px;
          padding-bottom: 30px;
          border-bottom: 1px dashed #e2e8f0;
        }
        .product-badge {
          display: inline-block;
          padding: 6px 16px;
          background: var(--primary-light);
          color: var(--primary);
          border-radius: 100px;
          font-size: 0.85rem;
          font-weight: 700;
          margin-bottom: 15px;
        }
        .product-name {
          font-size: 2rem;
          font-weight: 800;
          color: #1e293b;
          margin-bottom: 20px;
        }
        .price-tag {
          color: #0f172a;
        }
        .amount {
          font-size: 3rem;
          font-weight: 900;
        }
        .currency {
          font-size: 1.5rem;
          font-weight: 700;
          margin-left: 5px;
        }
        .quantity-control {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          margin-bottom: 25px;
        }
        .quantity-control .label {
          font-size: 0.9rem;
          font-weight: 700;
          color: #64748b;
        }
        .selector {
          display: flex;
          align-items: center;
          background: #f1f5f9;
          padding: 5px;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
        }
        .selector button {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          border: none;
          background: white;
          color: #1e293b;
          font-size: 1.2rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        }
        .selector button:hover {
          background: #f8fafc;
          transform: translateY(-1px);
        }
        .selector input {
          width: 60px;
          text-align: center;
          border: none;
          background: transparent;
          font-size: 1.1rem;
          font-weight: 800;
          color: #1e293b;
          outline: none;
          -moz-appearance: textfield;
        }
        .selector input::-webkit-outer-spin-button,
        .selector input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        .service-details {
          margin-bottom: 40px;
        }
        .detail-item {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 15px;
          color: #475569;
          font-weight: 500;
        }
        .payment-guide {
          background: #f0fdf4;
          padding: 20px;
          border-radius: 16px;
          margin-bottom: 40px;
        }
        .guide-header {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #059669;
          font-weight: 700;
          margin-bottom: 8px;
        }
        .payment-guide p {
          font-size: 0.9rem;
          color: #15803d;
          line-height: 1.5;
        }
        .pay-btn {
          width: 100%;
          height: 60px;
          background: #1e293b;
          color: white;
          border: none;
          border-radius: 16px;
          font-size: 1.15rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          cursor: pointer;
          transition: all 0.3s;
        }
        .pay-btn:hover {
          background: #0f172a;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
        @media (max-width: 768px) {
          .payment-card { padding: 30px; }
          .page-header h1 { font-size: 2.5rem; }
          .amount { font-size: 2.5rem; }
        }
      `}</style>
    </div>
  );
}
