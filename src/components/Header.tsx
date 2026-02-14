"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Smartphone } from "lucide-react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
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
                    <Link href="/login" className="btn-login">
                        로그인
                    </Link>
                    <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <div className={`mobile-nav ${isMenuOpen ? "open" : ""}`}>
                <ul className="mobile-nav-list">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                href={item.href}
                                className="mobile-nav-link"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link href="/login" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
                            로그인
                        </Link>
                    </li>
                </ul>
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
          background: transparent;
        }
        .header.scrolled {
          height: 70px;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
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
          gap: 15px;
        }
        .btn-login {
          font-weight: 600;
          color: var(--text-secondary);
        }
        .mobile-menu-btn {
          color: var(--dark-bg);
        }
        .mobile-nav {
          position: fixed;
          top: 80px;
          left: 0;
          width: 100%;
          background: #fff;
          height: 0;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
        }
        .mobile-nav.open {
          height: auto;
          padding: 20px 0;
        }
        .mobile-nav-list {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }
        .mobile-nav-link {
          font-size: 1.2rem;
          font-weight: 600;
        }
        @media (min-width: 1024px) {
          .desktop-nav {
            display: block;
          }
          .mobile-menu-btn {
            display: none;
          }
        }
      `}</style>
        </header>
    );
}
