"use client";

import { servicesData } from "./data";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ServicesPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="services-overview-page">
      {/* 1. Header Banner */}
      <section className="services-hero" style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1584622781564-1d9876a1dfd1?auto=format&fit=crop&q=80&w=1920)'
      }}>
        <div className="container">
          <motion.h1 {...fadeInUp}>전문 청소 소개</motion.h1>
          <motion.div className="breadcrumbs" {...fadeInUp} transition={{ delay: 0.2 }}>
            홈 &gt; 전문 청소 소개
          </motion.div>
        </div>
      </section>

      {/* Professional Service Intro Section (Direct match with Homepage) */}
      <section className="section bg-white" style={{ backgroundColor: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '1800px', padding: '0 60px' }}>
          <h2 className="section-title">전문 청소 소개</h2>
          <div className="services-grid">
            {servicesData.map((item) => (
              <div key={item.id} className="service-card">
                <div className="service-card-top">
                  <h3>{item.title}</h3>
                  <p>{item.homepageDesc}</p>
                </div>
                <div className="service-img-wrap">
                  <img src={item.img} alt={item.title} onError={(e) => (e.currentTarget.src = 'https://placehold.co/300x300?text=Cleaning+Image')} />
                </div>
                <Link href={`/services/${item.id}`} className="btn btn-primary" style={{ padding: '8px 30px', fontSize: '0.95rem', minWidth: '140px' }}>자세히보기</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .services-hero {
          height: 350px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          background-size: cover;
          background-position: center;
        }
        .services-hero h1 {
          font-size: 3.5rem;
          font-weight: 900;
          letter-spacing: -1.5px;
          margin-bottom: 10px;
        }
        .breadcrumbs {
          font-size: 1.1rem;
          opacity: 0.9;
        }

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

        @media (max-width: 1024px) {
          .services-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 768px) {
          .services-hero h1 { font-size: 2.5rem; }
          .section-title { font-size: 1.8rem; }
          .services-grid { grid-template-columns: 1fr; }
          .container { padding: 0 20px !important; }
        }
      `}</style>
    </div>
  );
}
