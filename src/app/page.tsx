"use client";

import Link from "next/link";
import {
  ArrowRight,
  MessageSquareText,
  Calculator,
  Home as HomeIcon,
  Truck,
  Building2,
  Paintbrush,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Heart
} from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      img: "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=1920",
      text1: "반려동물과 사람이 함께 행복한<br />전문 홈클리닝",
      text2: "우리 아이가 숨쉬는 공간,<br />멍크린이 책임집니다",
    },
    {
      img: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80&w=1920",
      text1: "컬비(Kirby) 전용 장비 도입",
      text2: "보이지 않는 진드기부터<br />털 한 톨까지 완벽 제거",
    },
    {
      img: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=1920",
      text1: "친환경 케어 & 오존 살균",
      text2: "무독성 세제로 안심하고 맡기는<br />프리미엄 청소",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const services = [
    { id: "moving", name: "이사청소", desc: "\"이전 거주자의 흔적을 지우는 깔끔한 시작!\"", img: "/services/moving.png" },
    { id: "residential", name: "거주청소", desc: "\"우리 가족의 건강을 지키는 프리미엄 케어!\"", img: "/services/residential.png" },
    { id: "baby", name: "아기맞이청소", desc: "\"면역력 약한 아기를 위한 안심 살균!\"", img: "/services/baby.png" },
    { id: "rainbow", name: "무지개청소", desc: "\"냄새와 세균 걱정 없는 쾌적한 펫 환경!\"", img: "/services/rainbow.png" },
    { id: "commercial", name: "상가청소", desc: "\"성공을 부르는 청결한 비즈니스 공간!\"", img: "/services/commercial.png" },
  ];

  return (
    <>
      {/* Hero Slider */}
      <section className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${slide.img})` }}
          >
            <div className="container-wide">
              <motion.div
                className="slide-content"
                initial={{ opacity: 0, y: 30 }}
                animate={index === currentSlide ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <p className="slide-subtext" dangerouslySetInnerHTML={{ __html: slide.text1 }}></p>
                <h2 className="slide-maintext" dangerouslySetInnerHTML={{ __html: slide.text2 }}></h2>
              </motion.div>
            </div>
          </div>
        ))}
        <button className="slider-nav prev" onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}>
          <ChevronLeft size={40} color="white" />
        </button>
        <button className="slider-nav next" onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}>
          <ChevronRight size={40} color="white" />
        </button>
      </section>

      {/* Professional Service Intro Section */}
      <section className="section bg-white" style={{ backgroundColor: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '1800px', padding: '0 60px' }}>
          <h2 className="section-title">전문 청소 소개</h2>
          <div className="services-grid">
            {services.map((item) => (
              <div key={item.id} className="service-card">
                <div className="service-card-top">
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                </div>
                <div className="service-img-wrap">
                  <img src={item.img} alt={item.name} onError={(e) => (e.currentTarget.src = 'https://placehold.co/300x300?text=Cleaning+Image')} />
                </div>
                <Link href={`/services/${item.id}`} className="btn btn-primary" style={{ padding: '8px 30px', fontSize: '0.95rem', minWidth: '140px' }}>자세히보기</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section" style={{ backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.2) 100%), url(https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=1920)' }}>
        <div className="container about-container">
          <div className="about-text">
            <h2>반려동물과 사람이 함께<br />행복한 멍크린</h2>
            <p>
              컬비 전용 장비와 친환경 세제를 사용하여,<br />
              일반청소로는 해결하기 힘든 반려동물의 털과 미세먼지, 세균까지<br />
              완벽하게 케어하는 반려동물 전문 업체입니다.
            </p>
            <Link href="/about" className="btn btn-primary btn-more">
              더보기 <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="section info-cards-section">
        <div className="container info-cards-grid">
          <div className="info-card">
            <div className="info-card-content">
              <h3>청소 후기</h3>
              <p>직접 읽어봐야 할 실제 후기!</p>
              <Link href="/reviews" className="card-link">자세히보기 <ArrowRight size={14} /></Link>
            </div>
            <div className="info-card-icon">
              <MessageSquareText size={50} strokeWidth={1} color="#aaa" />
            </div>
          </div>
          <div className="info-card">
            <div className="info-card-content">
              <h3>간편 견적</h3>
              <p>간편 견적으로 빠르게 비용을 확인하세요!</p>
              <Link href="/estimate" className="card-link">문의하기 <ArrowRight size={14} /></Link>
            </div>
            <div className="info-card-icon">
              <Calculator size={50} strokeWidth={1} color="#aaa" />
            </div>
          </div>
        </div>
      </section>



      <style jsx>{`
        .hero-slider {
          position: relative;
          height: 900px;
          overflow: hidden;
        }
        .slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          opacity: 0;
          transition: opacity 1s ease-in-out;
          display: flex;
          align-items: center;
        }
        .container-wide {
          width: 90%;
          max-width: 1600px;
          margin: 0 auto;
        }
        .slide.active {
          opacity: 1;
        }
        .slide-content {
          text-align: center;
          color: white;
          width: 100%;
          max-width: none;
        }
        .slide-subtext {
          font-size: 1.5rem;
          font-weight: 300;
          margin-bottom: 20px;
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
          color: #fff !important;
        }
        .slide-maintext {
          font-size: 4rem;
          font-weight: 900;
          display: block;
          text-shadow: 0 4px 8px rgba(0,0,0,0.5);
          color: #fff !important;
        }
        .slider-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0,0,0,0.2);
          border: none;
          padding: 20px 10px;
          cursor: pointer;
          z-index: 10;
        }
        .slider-nav.prev { left: 20px; }
        .slider-nav.next { right: 20px; }

        .section-title {
          font-size: 2.2rem;
          font-weight: 800;
          text-align: center;
          margin-bottom: 50px;
          color: #333;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          border-top: 1px solid var(--border-light);
          border-left: 1px solid var(--border-light);
        }
        .service-card {
          padding: 50px 20px;
          text-align: center;
          border-right: 1px solid var(--border-light);
          border-bottom: 1px solid var(--border-light);
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: background 0.3s;
        }
        .service-card:hover {
          background-color: #f9f9f9;
        }
        .service-card-top h3 {
          font-size: 1.3rem;
          font-weight: 800;
          margin-bottom: 10px;
        }
        .service-card-top p {
          font-size: 0.85rem;
          color: var(--text-muted);
          height: 3rem;
        }
        .service-img-wrap {
          margin: 20px 0;
          width: 100%;
          height: 340px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .service-img-wrap img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          border-radius: 8px;
        }
        .btn-detail {
          background-color: var(--primary) !important;
          color: #ffffff !important;
          padding: 10px 30px;
          border-radius: 50px;
          font-size: 0.95rem;
          font-weight: 700;
          transition: all 0.3s ease;
          border: 1px solid var(--primary);
          display: inline-block;
          text-decoration: none;
          box-shadow: 0 4px 10px rgba(0, 174, 239, 0.2);
        }
        .btn-detail:hover {
          background-color: var(--primary-dark) !important;
          color: #ffffff !important;
          border-color: var(--primary-dark);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 174, 239, 0.35);
        }

        .about-section {
          background-size: cover;
          background-position: center;
          padding: 150px 0;
          position: relative;
        }
        .about-container {
          display: flex;
          align-items: center;
        }
        .about-text {
          max-width: 600px;
          color: white;
        }
        .about-text h2 {
          font-size: 2.8rem;
          font-weight: 900;
          margin-bottom: 30px;
          line-height: 1.3;
          text-shadow: 0 4px 10px rgba(0,0,0,0.5);
        }
        .about-text p {
          color: rgba(255,255,255,0.9);
          font-size: 1.25rem;
          line-height: 1.8;
          margin-bottom: 40px;
          text-shadow: 0 2px 10px rgba(0,0,0,0.3);
        }
        .about-image {
          flex: 1;
        }
        .about-image img {
          width: 100%;
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .info-cards-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }
        .info-card {
          background: white;
          border: 1px solid var(--border-light);
          padding: 40px;
          border-radius: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .info-card h3 {
          font-size: 1.5rem;
          font-weight: 800;
          margin-bottom: 10px;
        }
        .info-card p {
          color: #777;
          margin-bottom: 20px;
        }
        .card-link {
          color: var(--primary);
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 5px;
        }


        .center-btn { text-align: center; }
        .mt-40 { margin-top: 40px; }

        @media (max-width: 1024px) {
          .services-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 768px) {
          .about-section { padding: 80px 0; }
          .about-container { flex-direction: column; text-align: center; justify-content: center; }
          .about-text { margin: 0 auto; width: 100%; }
          .about-text h2 { font-size: 1.8rem; word-break: keep-all; }
          .about-text p { font-size: 1rem; line-height: 1.6; word-break: keep-all; }
          .desktop-only { display: none; }
          .services-grid { grid-template-columns: 1fr; }
          .info-cards-grid { grid-template-columns: 1fr; }
          .slide-maintext { font-size: 2rem; }
        }
      `}</style>
    </>
  );
}
