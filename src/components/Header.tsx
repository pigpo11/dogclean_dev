"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const serviceSubItems = [
    { name: "이사청소", href: "/services/moving" },
    { name: "거주청소", href: "/services/residential" },
    { name: "아기맞이청소", href: "/services/baby" },
    { name: "무지개다리 청소", href: "/services/rainbow" },
    { name: "상가청소", href: "/services/commercial" },
  ];

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container header-container">
        <Link href="/" className="logo">
          <img src="/logo.png" alt="멍크린 로고" className="logo-img" />
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {serviceSubItems.map((sub) => (
              <li key={sub.name}>
                <Link href={sub.href} className="nav-link">
                  {sub.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/reviews" className="nav-link">청소후기</Link>
            </li>
            <li>
              <Link href="/estimate" className="nav-link">간편 견적</Link>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <a href="tel:1661-0959" className="phone-link desktop-only">
            <Phone size={20} fill="currentColor" />
            <span>1661-0959</span>
          </a>
          <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <nav className="mobile-nav">
            <ul className="mobile-nav-list">
              {serviceSubItems.map((sub) => (
                <li key={sub.name}>
                  <Link href={sub.href} className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                    {sub.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/reviews" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                  청소후기
                </Link>
              </li>
              <li>
                <Link href="/estimate" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                  간편 견적
                </Link>
              </li>
              <li>
                <a href="tel:1661-0959" className="mobile-phone-link">
                  <Phone size={20} fill="currentColor" />
                  <span>1661-0959</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}

      <style jsx global>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 90px;
          display: flex;
          align-items: center;
          z-index: 1000;
          transition: all 0.3s ease;
          background: #ffffff;
          border-bottom: 1px solid #f0f0f0;
          box-shadow: 0 2px 15px rgba(0, 0, 0, 0.08);
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
          text-decoration: none;
        }
        .logo-img {
          height: 70px;
          width: auto;
          object-fit: contain;
          display: block;
        }
        .desktop-nav {
          display: none;
        }
        .nav-list {
          display: flex;
          gap: 20px;
          align-items: center;
        }
        .nav-link {
          font-weight: 700;
          font-size: 1.1rem;
          color: #333;
          transition: color 0.3s ease;
          display: inline-flex;
          align-items: center;
          white-space: nowrap;
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
          gap: 10px;
          color: var(--primary);
          font-weight: 800;
          font-size: 1.4rem;
          text-decoration: none;
        }
        .mobile-menu-btn {
          display: block;
          color: #333;
        }
        
        .mobile-menu {
          position: fixed;
          top: 90px;
          left: 0;
          width: 100%;
          height: calc(100vh - 90px);
          background: #fff;
          z-index: 999;
          padding: 40px 20px;
          overflow-y: auto;
        }
        .mobile-nav-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .mobile-nav-link {
          font-size: 1.5rem;
          font-weight: 800;
          color: #333;
          text-align: left;
          width: 100%;
        }
        .mobile-dropdown-toggle {
          display: flex;
          align-items: center;
          gap: 8px;
          background: none;
          border: none;
          cursor: pointer;
          font-family: inherit;
          padding: 0;
        }
        .mobile-sub-list {
          margin-top: 12px;
          padding-left: 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          border-left: 3px solid var(--primary);
        }
        .mobile-sub-link {
          font-size: 1.2rem;
          font-weight: 600;
          color: #555;
          padding: 4px 12px;
        }
        .mobile-sub-link:hover {
          color: var(--primary);
        }
        .mobile-phone-link {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--primary);
          margin-top: 20px;
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
          .mobile-menu-btn {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
