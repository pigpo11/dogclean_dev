"use client";

import Link from "next/link";
import { Instagram, Facebook, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            멍크린<span>.</span>
          </Link>
          <p className="footer-desc">
            반려동물과 함께하는 공간, 청소가 달라야 합니다.
            업계 최고의 장비와 친환경 세제로 안심을 선물합니다.
          </p>
          <div className="social-links">
            <a href="#" className="social-link"><Instagram size={20} /></a>
            <a href="#" className="social-link"><Facebook size={20} /></a>
            <a href="https://blog.naver.com/lisa73333" className="social-link">
              <MessageCircle size={20} />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h4>서비스</h4>
          <ul>
            <li><Link href="/home-cleaning">집청소</Link></li>
            <li><Link href="/commercial-cleaning">상가청소</Link></li>
            <li><Link href="/estimate">견적문의</Link></li>
            <li><Link href="/payment">결제하기</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>고객센터</h4>
          <p className="phone">010-2391-6070</p>
          <p className="phone">010-8353-6587</p>
          <p className="info">평일 09:00 - 18:00</p>
          <p className="info">주말 및 공휴일 휴무</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>Copyright © 멍크린 all rights reserved.</p>
          <div className="bottom-links">
            <Link href="/terms">이용약관</Link>
            <Link href="/privacy">개인정보처리방침</Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background-color: var(--dark-bg);
          color: rgba(255, 255, 255, 0.8);
          padding-top: 80px;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px;
          padding-bottom: 60px;
        }
        .footer-logo {
          font-size: 2rem;
          font-weight: 900;
          color: #fff;
          margin-bottom: 20px;
          display: block;
        }
        .footer-logo span {
          color: var(--primary);
        }
        .footer-desc {
          margin-bottom: 25px;
          line-height: 1.8;
        }
        .social-links {
          display: flex;
          gap: 15px;
        }
        .social-link {
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        .social-link:hover {
          background: var(--primary);
          color: #fff;
        }
        .footer h4 {
          color: #fff;
          font-size: 1.2rem;
          margin-bottom: 25px;
          position: relative;
        }
        .footer h4::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -8px;
          width: 30px;
          height: 2px;
          background: var(--primary);
        }
        .footer ul li {
          margin-bottom: 12px;
        }
        .footer ul li a:hover {
          color: var(--primary);
        }
        .phone {
          font-size: 1.4rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 10px;
        }
        .info {
          font-size: 0.9rem;
          margin-bottom: 5px;
        }
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: 30px 0;
          font-size: 0.9rem;
        }
        .footer-bottom .container {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
        }
        .bottom-links {
          display: flex;
          gap: 20px;
        }
      `}</style>
    </footer>
  );
}
