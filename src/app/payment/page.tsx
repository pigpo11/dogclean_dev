"use client";

import { useEffect, useState, useRef } from "react";
import { loadTossPayments, ANONYMOUS } from "@tosspayments/tosspayments-sdk";
import { CreditCard, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function PaymentPage() {
  const clientKey = process.env.NEXT_PUBLIC_TOSS_PAYMENTS_CLIENT_KEY || "test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm";
  const [quantity, setQuantity] = useState<number | string>(1);
  const [useCoupon, setUseCoupon] = useState(false);
  const unitPrice = 10000;
  const couponDiscount = 5000;

  const [ready, setReady] = useState(false);
  const [widgets, setWidgets] = useState<any>(null);

  const getAmount = () => {
    const q = typeof quantity === 'string' ? (parseInt(quantity) || 1) : quantity;
    const baseAmount = unitPrice * q;
    return useCoupon ? Math.max(0, baseAmount - couponDiscount) : baseAmount;
  };

  useEffect(() => {
    async function fetchPaymentWidgets() {
      try {
        const tossPayments = await loadTossPayments(clientKey);
        // 비회원 결제 방식 적용
        const widgets = tossPayments.widgets({ customerKey: ANONYMOUS });

        setWidgets(widgets);
      } catch (error) {
        console.error("Error fetching payment widgets:", error);
      }
    }

    fetchPaymentWidgets();
  }, [clientKey]);

  useEffect(() => {
    async function renderWidgets() {
      if (widgets == null) return;

      // 금액 설정
      await widgets.setAmount({
        currency: "KRW",
        value: getAmount(),
      });

      // 결제 수단 렌더링
      await widgets.renderPaymentMethods({
        selector: "#payment-method",
        variantKey: "DEFAULT",
      });

      // 이용약관 렌더링
      await widgets.renderAgreement({
        selector: "#agreement",
        variantKey: "AGREEMENT",
      });

      setReady(true);
    }

    renderWidgets();
  }, [widgets]);

  // 수량 또는 쿠폰 변경 시 금액 업데이트
  useEffect(() => {
    if (widgets && ready) {
      widgets.setAmount({
        currency: "KRW",
        value: getAmount(),
      });
    }
  }, [quantity, useCoupon, widgets, ready]);

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
    if (widgets == null || !ready) return;

    try {
      await widgets.requestPayment({
        orderId: `order-${Math.random().toString(36).slice(2, 11)}`,
        orderName: `멍크린 프리미엄 청소${Number(quantity) > 1 ? ` (${quantity}개)` : ""}`,
        successUrl: `${window.location.origin}/success`,
        failUrl: `${window.location.origin}/fail`,
        customerEmail: "customer123@gmail.com",
        customerName: "고객님",
        customerMobilePhone: "01012341234",
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

            <div className="coupon-box" style={{ marginBottom: '20px', textAlign: 'left', padding: '15px', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontSize: '0.95rem', fontWeight: 600, color: '#475569' }}>
                <input
                  type="checkbox"
                  checked={useCoupon}
                  onChange={(e) => setUseCoupon(e.target.checked)}
                  style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                />
                5,000원 할인 쿠폰 적용
              </label>
            </div>

            <div className="price-tag">
              <span className="amount">{(getAmount()).toLocaleString()}</span>
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

          {/* Toss Payments Widget UI */}
          <div id="payment-method" style={{ marginBottom: '30px' }} />
          <div id="agreement" style={{ marginBottom: '30px' }} />

          <div className="payment-guide">
            <div className="guide-header">
              <ShieldCheck size={20} color="#059669" />
              <span>안전한 결제 안내</span>
            </div>
            <p>토스페이먼츠의 보안 결제 시스템을 통해 안전하게 처리됩니다.</p>
          </div>

          <button
            className="pay-btn"
            onClick={handlePayment}
            disabled={!ready}
            style={{ opacity: ready ? 1 : 0.6, cursor: ready ? 'pointer' : 'not-allowed' }}
          >
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
          max-width: 650px;
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
        .amount {
          font-size: 3rem;
          font-weight: 900;
          color: #0f172a;
        }
        .currency {
          font-size: 1.5rem;
          font-weight: 700;
          margin-left: 5px;
          color: #0f172a;
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
          transition: all 0.3s;
        }
        .pay-btn:hover:not(:disabled) {
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
