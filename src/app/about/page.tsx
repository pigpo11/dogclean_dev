"use client";

import {
  Sparkles,
  ShieldCheck,
  Users,
  CheckCircle2,
  Smartphone,
  PhoneCall,
  Phone,
  X,
  LayoutGrid,
  Droplets,
  HardHat,
  Microscope
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const services = [
    { icon: <Users size={32} />, title: "아파트/빌라", desc: "입주/이사 청소 전문\n거주 공간 맞춤형 케어" },
    { icon: <HardHat size={32} />, title: "상가/사무실", desc: "업무 공간의 쾌적함\n정기 관리 및 창업 청소" },
    { icon: <Microscope size={32} />, title: "특수/바닥", desc: "고난도 오염 제거\n바닥 박리 및 코팅 전문" },
  ];

  return (
    <div className="about-page">
      {/* 1. Header Banner */}
      <section className="about-hero" style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&q=80&w=1920)'
      }}>
        <div className="container">
          <motion.h1 {...fadeInUp}>멍크린, 반려동물 전문 케어의 시작</motion.h1>
          <motion.p {...fadeInUp} transition={{ delay: 0.2 }} style={{ fontSize: '1.5rem', marginTop: '20px', fontWeight: 500 }}>
            사랑하는 반려동물을 위한 깨끗한 울타리
          </motion.p>
          <motion.div className="divider" {...fadeInUp} transition={{ delay: 0.3 }}></motion.div>
        </div>
      </section>

      {/* 2. Brand Introduction */}
      <section className="section intro-section">
        <div className="container">
          <div className="section-header small">
            <h2 className="title-with-dots">브랜드 스토리</h2>
          </div>
          <div className="intro-grid-box">
            <div className="intro-grid">
              <motion.div className="intro-logo" {...fadeInUp}>
                <div className="logo-outer-box">
                  <img
                    src="/logo.png"
                    alt="Mungclean Logo"
                    className="intro-logo-img"
                    onError={(e) => (e.currentTarget.src = 'https://placehold.co/300x300?text=Mungclean+Logo')}
                  />
                </div>
              </motion.div>
              <motion.div className="intro-text" {...fadeInUp} transition={{ delay: 0.2 }}>
                <span className="highlight-text">우리의 가족인 반려동물이 머무는 소중한 공간</span>
                <h2>공간의 건강을 디자인하는 <span>멍크린</span></h2>
                <div className="intro-p-wrap">
                  <p>
                    멍크린은 단순한 청소 대행 서비스가 아닙니다.
                    반려동물과 함께 상생하는 공간에서 발생하는 특유의 털, 냄새, 그리고 눈에 보이지 않는 세균까지
                    정교하게 케어하여 삶의 질을 높이는 <strong>'반려동물 토탈 홈케어 솔루션'</strong>입니다.
                  </p>
                  <p>
                    우리는 '내 가족이 머문다'는 마음가짐으로, 반려동물에게도 안전한 친환경 시공법과
                    검증된 전문 장비를 통해 가장 쾌적한 주거 공간을 선물합니다.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2.5 Why Pet Care Section (Newly Added based on image) */}
      <section className="section why-pet-section bg-light" style={{ padding: '100px 0' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">왜 반려동물 전문 케어가 필요할까요?</h2>
            <p>일반적인 청소만으로는 해결하기 어려운 반려동물만의 오염원이 존재합니다.</p>
          </div>
          <div className="why-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '30px',
            marginTop: '60px'
          }}>
            {[
              { title: "미세 털 박멸", desc: "집안 곳곳 벽지 틈 사이에 박힌 강아지와 고양이의 털을 강력흡입하여 제거합니다", icon: "🐕" },
              { title: "냄새 원인 제거", desc: "배어있는 특유의 찌든 냄새를 원인부터 분해하여 제거합니다.", icon: "🫧" },
              { title: "세균/진드기 케어", desc: "황색포도상구균, 곰팡이, 집먼지진드기 등 유해균을 살균합니다.", icon: "🦠" },
              { title: "피부/호흡기 보호", desc: "반려동물과 보호자의 알레르기 및 호흡기 질환을 예방합니다.", icon: "❤️" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="why-card"
                {...fadeInUp}
                transition={{ delay: idx * 0.1 }}
                style={{
                  background: '#fff',
                  padding: '40px 30px',
                  borderRadius: '20px',
                  textAlign: 'center',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '20px' }}>{item.icon}</div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '15px' }}>{item.title}</h4>
                <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: 1.6, wordBreak: 'keep-all' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Expertise & Equipment */}
      <section className="section equipment-section bg-light">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">준비된 전문가가 직접 서비스하는 멍크린</h2>
            <p>보여주기식 청소가 아닌, 보이지 않는 곳까지 완벽하게 케어합니다.</p>
          </div>
          <div className="equipment-simple-grid">
            <motion.div className="equipment-simple-item" {...fadeInUp}>
              <div className="simple-img-box">
                <img src="/kirby_vacuum.png" alt="최첨단 전문 장비 - 컬비 고성능 흡입청소기" />
              </div>
              <div className="simple-text-box">
                <h3>최첨단 전문 장비 보유</h3>
                <p>고성능 흡입청소기, 고성능 스팀기, 오존 살균기 등 각 상황에 맞는 최신 장비를 활용합니다.</p>
              </div>
            </motion.div>
            <motion.div className="equipment-simple-item" {...fadeInUp} transition={{ delay: 0.2 }}>
              <div className="simple-img-box">
                <img src="/detergent.png" alt="독일 키일(KIEHL)사 친환경 세제 사용" />
              </div>
              <div className="simple-text-box">
                <h3>독일 키일(KIEHL)사 친환경 세제 사용</h3>
                <p>120년 전통의 독일 키일사 친환경 세제를 사용하여 가족과 반려동물의 건강까지 생각하는 안전하고 완벽한 클리닝을 약속합니다.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Mungclean's 8-Step Premium Process */}
      <section className="section process-detail-section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '1.25rem', color: 'var(--primary)', fontWeight: 700, marginBottom: '15px' }}>PREMIUM WORKFLOW</h2>
            <h3 style={{ fontSize: '2.8rem', fontWeight: 900, color: '#111', wordBreak: 'keep-all' }}>
              멍크린만의 <span style={{ color: 'var(--primary)' }}>6단계 정밀 케어</span> 공정
            </h3>
            <p style={{ marginTop: '20px', fontSize: '1.15rem', color: '#666' }}>단순한 청소를 넘어 전문 장비와 기술력으로 완벽한 공간을 만듭니다.</p>
          </div>

          <div className="process-timeline-wrap">
            {[
              {
                id: "01",
                title: "오존 산화 시공",
                desc: "오존의 강한 산화력으로 실내 유해가스, 냄새, 세균을 분해하고 저감하는 시공입니다. 포름알데히드, VOC, 세균, 곰팡이를 화학약품 없이 친환경적으로 제거하여 공기질을 개선하는 빠른 효과를 제공합니다.",
                img: "/process_1.png",
                delay: 0
              },
              {
                id: "02",
                title: "바닥 기계장비 청소 및 스팀청소",
                desc: "전용 세제를 도포한 뒤 찌든 때와 냄새를 유발하는 원인균까지 말끔하게 제거합니다. 스팀과 진공 흡입이 동시에 가능한 전문 장비를 사용하여 바닥과 가구 부분을 집중 케어하며 남은 오염물까지 완벽하게 청소합니다.",
                img: "/process_2.png",
                delay: 0.1
              },
              {
                id: "03",
                title: "컬비 디테일 케어",
                desc: "특수 브러시가 장착된 컬비 장비로 벽지 사이사이의 털과 비듬, 진드기, 미세먼지 등 눈에 잘 띄지 않는 오염물까지 꼼꼼히 제거합니다. 벽지, 카펫, 매트리스, 소파 등 집안 구석구석을 빠짐없이 케어합니다.",
                img: "/process_3.png",
                delay: 0.2
              },
              {
                id: "04",
                title: "반응촉진 작업 (냄새 탈취 작업)",
                desc: "청소 후에도 남아 있을 수 있는 냄새의 원인을 제거하기 위해 특수 반응촉진제를 집안 전체 공간에 분사합니다. 공기 중이나 표면에 남은 냄새 성분과 반응하여 냄새를 중화하고 근본적으로 분해합니다.",
                img: "/process_4.png",
                delay: 0.3
              },
              {
                id: "05",
                title: "에어컨 청소 작업",
                desc: "에어컨 오염도에 따라 최적화된 방법으로 진행됩니다. 오염도가 적을 시 필터 세척 및 고압 스팀 케어를 진행하며, 오염도가 심할 경우 내부까지 완전 분해하여 정밀 청소를 진행합니다.",
                img: "/process_5.png",
                delay: 0.4
              },
              {
                id: "06",
                title: "무료 서비스 (Special Kit)",
                desc: "화장실 및 주방 전체 고압 스팀 작업, 피톤치드 연무 작업은 물론, 주방 및 화장실 수전 나노코팅 서비스까지 멍크린만의 특별한 혜택을 제공해 드립니다.",
                img: "/process_6.png",
                delay: 0.5
              }
            ].map((step, idx) => (
              <motion.div
                key={step.id}
                className={`timeline-item ${idx % 2 === 1 ? 'reverse' : ''}`}
                {...fadeInUp}
                transition={{ delay: step.delay }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '60px',
                  marginBottom: '100px'
                }}
              >
                <div className="timeline-img-box" style={{ flex: 1.2 }}>
                  <div style={{
                    width: '100%',
                    minHeight: '450px',
                    background: '#fcfcfc',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    boxShadow: '0 15px 45px rgba(0,0,0,0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid #f0f0f0',
                    position: 'relative'
                  }}>
                    <img
                      src={step.img}
                      alt={step.title}
                      style={{
                        width: '100%',
                        height: 'auto',
                        maxHeight: '600px',
                        objectFit: 'contain',
                        display: 'block'
                      }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          const icon = document.createElement('div');
                          icon.innerHTML = `<span style="color:#aaa; font-weight:600;">[ ${step.id}단계 관련 이미지를 넣어주세요 ]</span>`;
                          parent.appendChild(icon);
                        }
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      top: '20px',
                      left: '20px',
                      background: 'var(--primary)',
                      color: '#fff',
                      padding: '8px 20px',
                      borderRadius: '50px',
                      fontSize: '0.9rem',
                      fontWeight: 800,
                      zIndex: 1
                    }}>STEP {step.id}</div>
                  </div>
                </div>
                <div className="timeline-text-box" style={{ flex: 1, textAlign: 'left' }}>
                  <h4 style={{ fontSize: '1.8rem', fontWeight: 850, color: '#111', marginBottom: '25px', letterSpacing: '-0.5px' }}>{step.title}</h4>
                  <p style={{ fontSize: '1.15rem', lineHeight: 1.8, color: '#555', wordBreak: 'keep-all' }}>
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>





      {/* 8. Contact CTA */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-image-grid">
            <motion.a
              href="tel:1661-0959"
              className="cta-image-link"
              {...fadeInUp}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <img src="/cta_phone.png" alt="전화 상담 문의" className="cta-full-img" />
            </motion.a>

            <motion.a
              href="https://pf.kakao.com/_RxfLKG"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-image-link"
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <img src="/cta_kakao.png" alt="카카오톡 상담 문의" className="cta-full-img" />
            </motion.a>
          </div>
        </div>
      </section>

      <style jsx>{`
        .about-hero {
          height: 350px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          background-size: cover;
          background-position: center;
        }
        .about-hero h1 {
          font-size: 3rem;
          font-weight: 800;
          letter-spacing: -1px;
        }
        .divider {
          width: 60px;
          height: 4px;
          background: var(--primary);
          margin: 20px auto 0;
        }

        .title-with-dots {
          display: inline-block;
          font-size: 1.5rem;
          font-weight: 800;
          position: relative;
          padding: 0 40px;
        }
        .title-with-dots::before, .title-with-dots::after {
          content: "";
          position: absolute;
          top: 50%;
          width: 30px;
          height: 1px;
          background: #333;
        }
        .title-with-dots::before { left: 0; }
        .title-with-dots::after { right: 0; }

        .section-header.small {
          margin-bottom: 40px;
        }

        .intro-grid {
          display: grid;
          grid-template-columns: 360px 1fr;
          gap: 60px;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }
        .intro-logo {
          width: 360px;
        }
        .logo-outer-box {
          background: #fdfdfd;
          border: 1px solid #f0f0f0;
          padding: 30px;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          aspect-ratio: 1 / 1;
          width: 360px;
          height: 360px;
          overflow: hidden;
        }
        .intro-logo-img {
          max-width: 100%;
          max-height: 100%;
          width: auto;
          height: auto;
          display: block;
        }
        .highlight-text {
          color: var(--primary);
          font-size: 1.25rem;
          font-weight: 700;
          display: block;
          margin-bottom: 15px;
        }
        .intro-text h2 {
          font-size: 2.8rem;
          font-weight: 800;
          margin-bottom: 30px;
          line-height: 1.2;
          color: #333;
        }
        .intro-text h2 span { color: var(--primary); }
        .intro-p-wrap p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #555;
          margin-bottom: 20px;
          word-break: keep-all;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }
        .section-header p {
          font-size: 1.2rem;
          color: #777;
        }

        .equipment-simple-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }
        .equipment-simple-item {
          text-align: left;
        }
        .simple-img-box img {
          width: 100%;
          height: 380px;
          object-fit: cover;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          margin-bottom: 25px;
        }
        .simple-text-box h3 {
          font-size: 1.5rem;
          font-weight: 800;
          margin-bottom: 12px;
          color: #333;
        }
        .simple-text-box p {
          color: #666;
          font-size: 1rem;
          line-height: 1.6;
          max-width: 420px;
          word-break: keep-all;
        }

        .principles-section {
          background: #fff;
          padding: 80px 0;
        }
        .principles-title {
          font-size: 2.2rem;
          font-weight: 800;
          color: #333;
          text-align: center;
          margin-bottom: 50px;
        }
        .principles-title span {
          color: var(--primary);
        }
        .principles-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .principle-card {
          border: 1px solid #e0e0e0 !important;
          padding: 60px 30px;
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          text-align: center !important;
          background: #fff;
          transition: transform 0.3s;
        }
        .principle-card:hover { transform: translateY(-5px); }
        .icon-circle-bg {
          width: 140px;
          height: 140px;
          background: #f2f2f2;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 35px;
        }
        .principle-illustration {
          width: 80px;
          height: 80px;
          object-fit: contain;
        }
        .principle-card h4 {
          font-size: 1.6rem;
          font-weight: 800;
          margin-bottom: 20px;
          color: #111;
          text-align: center !important;
        }
        .principle-card p {
          font-size: 1.05rem;
          line-height: 1.7;
          color: #666;
          word-break: keep-all;
          text-align: center !important;
          margin: 0 auto !important;
          max-width: 280px;
        }

        .gallery-header {
          margin-bottom: 30px;
          border-left: 5px solid var(--primary);
          padding-left: 20px;
        }
        .gallery-header h3 {
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--secondary);
        }
        .gallery-grid-4 {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .gallery-grid-4 img {
          width: 100%;
          height: 250px;
          object-fit: cover;
          border-radius: 12px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .floor-special-section {
          background-color: #f0f7ff;
        }
        .floor-content {
          text-align: center;
        }
        .floor-content h2 {
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--primary);
          margin-bottom: 50px;
        }
        .floor-circles {
          display: flex;
          justify-content: center;
          gap: 60px;
          flex-wrap: wrap;
        }
        .circle-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
        }
        .circle-img {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background-size: cover;
          background-position: center;
          border: 4px solid white;
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
        .circle-item span {
          font-size: 1.1rem;
          font-weight: 700;
          color: #444;
        }

        .gallery-row {
          display: flex;
          gap: 40px;
        }
        .gallery-item-half { flex: 1; }
        .gallery-header.small h3 { font-size: 1.5rem; }
        .gallery-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }
        .gallery-grid-2 img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          border-radius: 10px;
        }

        .mt-60 { margin-top: 60px; }
        .no-padding-bottom { padding-bottom: 0; }

        .cta-image-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          max-width: 1240px;
          margin: 0 auto;
        }
        .cta-image-link {
          display: block;
          width: 100%;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 15px 35px rgba(0,0,0,0.1);
          cursor: pointer;
        }
        .cta-full-img {
          width: 100%;
          height: auto;
          display: block;
          transition: filter 0.3s ease;
        }
        @media (max-width: 900px) {
          .cta-image-grid { grid-template-columns: 1fr; padding: 0 20px; }
        }
      `}</style>
    </div >
  );
}
