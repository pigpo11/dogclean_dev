"use client";

import { useState } from "react";
import { Minus, Plus, CreditCard, ShoppingBag, CheckCircle2 } from "lucide-react";

export default function PaymentPage() {
    const [quantity, setQuantity] = useState(1);
    const pricePerUnit = 10000;
    const totalPrice = pricePerUnit * quantity;

    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value) && value > 0) {
            setQuantity(value);
        } else if (e.target.value === "") {
            setQuantity(0); // Allow empty input temporarily while typing
        }
    };

    const increment = () => setQuantity(prev => prev + 1);
    const decrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

    const handlePayment = () => {
        if (quantity === 0) {
            alert("구매 수량을 1개 이상 선택해주세요.");
            return;
        }
        alert(`총 ${totalPrice.toLocaleString()}원 결제를 시작합니다. (Toss Payments 연동 준비 중)`);
        // 실제 연동 로직은 PRD에 명세된 대로 SDK 호출이 필요합니다.
    };

    return (
        <div className="container section">
            <h1 className="section-title">결제하기</h1>
            <p className="page-desc">멍크린의 프리미엄 청소 서비스를 간편하게 결제하세요.</p>

            <div className="payment-grid">
                <div className="product-card">
                    <div className="product-img">
                        <span className="premium-tag">PREMIUM</span>
                    </div>
                    <div className="product-info">
                        <h2>멍크린 프리미엄 서비스</h2>
                        <p className="product-desc">
                            반려동물 가정에 최적화된 올인원 케어 솔루션입니다.
                            오존 살균, 컬비 디테일 케어, 피톤치드 마감이 모두 포함되어 있습니다.
                        </p>
                        <ul className="service-includes">
                            <li><CheckCircle2 size={16} /> 8단계 정밀 청소 프로세스</li>
                            <li><CheckCircle2 size={16} /> 독일 키엘사 친환경 세제 사용</li>
                            <li><CheckCircle2 size={16} /> 전용 전문 장비 풀케어</li>
                        </ul>
                        <div className="price-tag">
                            <span className="amount">{pricePerUnit.toLocaleString()}</span>
                            <span className="unit">원 / 1회</span>
                        </div>
                    </div>
                </div>

                <div className="checkout-card">
                    <div className="checkout-header">
                        <h3>주문 요약</h3>
                    </div>

                    <div className="checkout-body">
                        <div className="quantity-section">
                            <label>구매 수량</label>
                            <div className="quantity-control">
                                <button className="q-btn" onClick={decrement} aria-label="감소"><Minus size={18} /></button>
                                <input
                                    type="number"
                                    className="q-input"
                                    value={quantity === 0 ? "" : quantity}
                                    onChange={handleQuantityChange}
                                    min="1"
                                />
                                <button className="q-btn" onClick={increment} aria-label="증가"><Plus size={18} /></button>
                            </div>
                        </div>

                        <div className="billing-details">
                            <div className="bill-row">
                                <span>상품 합계</span>
                                <span>{totalPrice.toLocaleString()}원</span>
                            </div>
                            <div className="bill-row">
                                <span>할인 금액</span>
                                <span className="discount">- 0원</span>
                            </div>
                            <div className="bill-row total">
                                <span>최종 결제 금액</span>
                                <span className="total-amount">{totalPrice.toLocaleString()}원</span>
                            </div>
                        </div>

                        <button className="btn btn-primary buy-btn" onClick={handlePayment}>
                            <CreditCard size={20} /> {totalPrice.toLocaleString()}원 결제하기
                        </button>
                        <p className="secure-notice">
                            <ShoppingBag size={14} /> 안전한 토스페이먼츠 결제 시스템을 사용합니다.
                        </p>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .page-desc {
          text-align: center;
          color: var(--text-secondary);
          margin-bottom: 60px;
        }
        .payment-grid {
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 40px;
          align-items: start;
        }
        .product-card {
          background: #fff;
          border-radius: 30px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
          display: flex;
          flex-direction: column;
        }
        .product-img {
          height: 300px;
          background: linear-gradient(135deg, #FF8C42 0%, #FFB382 100%);
          position: relative;
        }
        .premium-tag {
          position: absolute;
          top: 20px;
          left: 20px;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(5px);
          color: #fff;
          padding: 6px 15px;
          border-radius: 50px;
          font-weight: 800;
          font-size: 0.8rem;
          letter-spacing: 1px;
        }
        .product-info {
          padding: 40px;
        }
        .product-info h2 {
          font-size: 2rem;
          margin-bottom: 15px;
          color: var(--dark-bg);
        }
        .product-desc {
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 25px;
        }
        .service-includes {
          margin-bottom: 30px;
          font-size: 0.95rem;
          color: var(--text-primary);
        }
        .service-includes li {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 10px;
        }
        .price-tag {
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--primary);
        }
        .price-tag .unit {
          font-size: 1rem;
          color: var(--text-secondary);
          font-weight: 500;
          margin-left: 5px;
        }

        .checkout-card {
          background: #fff;
          border-radius: 30px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
          position: sticky;
          top: 100px;
        }
        .checkout-header {
          padding: 25px 30px;
          border-bottom: 1px solid #f0f0f0;
        }
        .checkout-header h3 {
          font-size: 1.25rem;
          font-weight: 700;
        }
        .checkout-body {
          padding: 30px;
        }
        .quantity-section {
          margin-bottom: 30px;
        }
        .quantity-section label {
          display: block;
          margin-bottom: 15px;
          font-weight: 700;
          font-size: 0.95rem;
        }
        .quantity-control {
          display: flex;
          align-items: center;
          background: #f8f9fa;
          border-radius: 12px;
          padding: 5px;
          border: 1px solid #eee;
        }
        .q-btn {
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          background: #fff;
          color: var(--dark-bg);
          box-shadow: 0 2px 5px rgba(0,0,0,0.05);
          transition: all 0.2s;
        }
        .q-btn:hover {
          background: var(--primary);
          color: #fff;
        }
        .q-input {
          flex: 1;
          border: none;
          background: transparent;
          text-align: center;
          font-size: 1.2rem;
          font-weight: 700;
          width: 60px;
          outline: none;
          appearance: textfield;
        }
        .q-input::-webkit-outer-spin-button,
        .q-input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        .billing-details {
          margin-bottom: 30px;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        .bill-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.95rem;
          color: var(--text-secondary);
        }
        .discount {
          color: var(--error);
        }
        .total {
          border-top: 1px dashed #ddd;
          padding-top: 20px;
          margin-top: 5px;
          color: var(--dark-bg);
          font-weight: 800;
        }
        .total-amount {
          font-size: 1.5rem;
          color: var(--primary);
        }

        .buy-btn {
          width: 100%;
          padding: 18px;
          font-size: 1.15rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border-radius: 15px;
        }
        .secure-notice {
          text-align: center;
          font-size: 0.8rem;
          color: var(--text-secondary);
          margin-top: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
        }

        @media (max-width: 1024px) {
          .payment-grid {
            grid-template-columns: 1fr;
          }
          .checkout-card {
            position: static;
          }
        }
      `}</style>
        </div>
    );
}
