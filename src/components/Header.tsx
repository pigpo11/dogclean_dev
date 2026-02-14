"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Smartphone, MessageCircle } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "멍크린 소개", href: "/about" },
    { name: "집청소", href: "/home-cleaning" },
    { name: "상가청소", href: "/commercial-cleaning" },
    { name: "고객후기", href: "/reviews" },
    { name: "견적문의", href: "/estimate" },
    { name: "결제하기", href: "/payment" },
  ];

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container header-container">
        <Link href="/" className="logo">
          <span className="logo-text">멍크린</span>
          <span className="logo-dot">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="nav-link">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <Link href="/login" className="btn-login desktop-only">
            로그인
          </Link>
          <a href="https://pf.kakao.com/_xxxx" target="_blank" rel="noopener noreferrer" className="btn-kakao desktop-only">
            <MessageCircle size={18} fill="currentColor" />
            <span>문의하기</span>
          </a>
        </div>
      </div>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 80px;
          display: flex;
          align-items: center;
          z-index: 1000;
          transition: all 0.3s ease;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(0,0,0,0.05);
        }
        .header.scrolled {
          height: 70px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }
        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }
        .logo {
          display: flex;
          align-items: center;
          font-size: 1.8rem;
          font-weight: 900;
          color: var(--primary);
        }
        .logo-dot {
          color: var(--secondary);
        }
        .desktop-nav {
          display: none;
        }
        .nav-list {
          display: flex;
          gap: 30px;
        }
        .nav-link {
          font-weight: 600;
          font-size: 1.05rem;
          color: var(--text-primary);
          transition: color 0.3s ease;
        }
        .nav-link:hover {
          color: var(--primary);
        }
        .header-actions {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .phone-link {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--primary);
          font-weight: 800;
          font-size: 1.2rem;
        }
        .btn-login {
          font-weight: 600;
          color: var(--text-secondary);
        }
        .btn-kakao {
          display: flex;
          align-items: center;
          gap: 6px;
          background-color: #FEE500;
          color: #3C1E1E;
          padding: 8px 16px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 0.95rem;
          transition: all 0.3s ease;
        }
        .btn-kakao:hover {
          background-color: #FADA0A;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(254, 229, 0, 0.3);
        }
        .desktop-only {
          display: none;
        }
        @media (min-width: 1024px) {
          .desktop-nav {
            display: block;
          }
          .desktop-only {
            display: flex;
          }
        }
      `}</style>
    </header>
  );
}
