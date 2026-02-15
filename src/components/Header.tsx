"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const serviceSubItems = [
    { name: "이사청소", href: "/services#moving" },
    { name: "거주청소", href: "/services#residential" },
    { name: "아기맞이청소", href: "/services#baby" },
    { name: "무지개청소", href: "/services#rainbow" },
    { name: "상가청소", href: "/services#commercial" },
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
            <li>
              <Link href="/about" className="nav-link">멍크린 소개</Link>
            </li>
            <li
              className="nav-item-dropdown"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link href="/services" className="nav-link">
                전문 청소 소개 <ChevronDown size={16} style={{ marginLeft: 4, verticalAlign: 'middle', transition: 'transform 0.3s', transform: isServicesOpen ? 'rotate(180deg)' : 'rotate(0)' }} />
              </Link>
              {isServicesOpen && (
                <div className="dropdown-menu">
                  <div className="dropdown-menu-inner">
                    {serviceSubItems.map((sub) => (
                      <Link key={sub.name} href={sub.href} className="dropdown-item">
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
            <li>
              <Link href="/reviews" className="nav-link">청소후기</Link>
            </li>
            <li>
              <Link href="/estimate" className="nav-link">간편 견적</Link>
            </li>
            <li>
              <Link href="/payment" className="nav-link highlight">결제하기</Link>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <a href="tel:010-8353-6587" className="phone-link desktop-only">
            <Phone size={20} fill="currentColor" />
            <span>010-8353-6587</span>
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
              <li>
                <Link href="/about" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                  멍크린 소개
                </Link>
              </li>
              <li>
                <button
                  className="mobile-nav-link mobile-dropdown-toggle"
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                >
                  전문 청소 소개 <ChevronDown size={20} style={{ transition: 'transform 0.3s', transform: isMobileServicesOpen ? 'rotate(180deg)' : 'rotate(0)' }} />
                </button>
                {isMobileServicesOpen && (
                  <ul className="mobile-sub-list">
                    {serviceSubItems.map((sub) => (
                      <li key={sub.name}>
                        <Link href={sub.href} className="mobile-sub-link" onClick={() => setIsMobileMenuOpen(false)}>
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
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
                <Link href="/payment" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                  결제하기
                </Link>
              </li>
              <li>
                <a href="tel:010-8353-6587" className="mobile-phone-link">
                  <Phone size={20} fill="currentColor" />
                  <span>010-8353-6587</span>
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
          gap: 40px;
          align-items: center;
        }
        .nav-link {
          font-weight: 700;
          font-size: 1.1rem;
          color: #333;
          transition: color 0.3s ease;
          display: inline-flex;
          align-items: center;
        }
        .nav-link:hover {
          color: var(--primary);
        }
        .nav-link.highlight {
          background: var(--primary);
          color: white;
          padding: 8px 20px;
          border-radius: 50px;
          transition: all 0.3s;
        }
        .nav-link.highlight:hover {
          background: var(--primary-dark);
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        /* Dropdown */
        .nav-item-dropdown {
          position: relative;
        }
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          margin-top: 0;
          padding-top: 15px;
          background: transparent;
          z-index: 1001;
          width: 190px;
        }
        .dropdown-menu-inner {
          background: var(--primary);
          border-radius: 12px;
          padding: 10px 0;
          min-width: 220px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
          animation: dropdownFadeIn 0.2s ease forwards;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }
        .dropdown-menu-inner::before {
          content: '';
          position: absolute;
          top: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-bottom: 8px solid var(--primary);
        }
        .dropdown-item {
          display: block;
          padding: 8px 25px;
          color: #fff;
          font-size: 0.95rem;
          font-weight: 700;
          text-align: center;
          transition: background 0.2s;
          width: 100%;
          white-space: nowrap;
          border-bottom: 1px solid rgba(255,255,255,0.2);
        }
        .dropdown-item:last-child {
          border-bottom: none;
        }
        .dropdown-item:hover {
          background: rgba(255,255,255,0.15);
        }
        @keyframes dropdownFadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
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
