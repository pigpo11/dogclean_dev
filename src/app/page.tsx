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
  Heart,
  Users,
  HardHat,
  Microscope,
  ShieldCheck,
  Droplets,
  CheckCircle2
} from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      img: "/public_hero.png",
      text1: "반려동물과 사람이 함께 행복한<br />전문 홈클리닝",
      text2: "우리 아이가 숨쉬는 공간,<br />멍크린이 책임집니다",
    },
    {
      img: "/public_hero2.jpeg",
      text1: "특화된 전문장비 도입",
      text2: "보이지 않는 진드기부터<br />털 한 톨까지 완벽 제거",
    },
    {
      img: "/public_hero3.jpeg",
      text1: "친환경 케어 & 오존 살균",
      text2: "친환경 세제로 안심하고 맡기는<br />프리미엄 청소",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const services = [
    { id: "moving", name: "이사청소", desc: "이전 거주자의 흔적을 지우는\n깔끔한 시작!", img: "/services/moving.png" },
    { id: "residential", name: "거주청소", desc: "우리 가족의 건강을 지키는\n프리미엄 케어!", img: "/services/residential.png" },
    { id: "baby", name: "아기맞이청소", desc: "면역력 약한 아기를 위한\n안심 살균!", img: "/services/baby.png" },
    { id: "rainbow", name: "무지개다리 청소", desc: "냄새와 세균 걱정 없는\n쾌적한 펫 환경!", img: "/services/rainbow.png" },
    { id: "commercial", name: "상가청소", desc: "성공을 부르는 청결한\n비즈니스 공간!", img: "/services/commercial.png" },
  ];

  return (
    <>
      {/* 1. Hero Slider */}
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


      {/* 3. Why Pet Care Section */}
      <section id="why-mungclean" className="section why-pet-section bg-light">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">왜 반려동물 전문 케어가 필요할까요?</h2>
            <p>일반적인 청소만으로는 해결하기 어려운 반려동물만의 오염원이 존재합니다.</p>
          </div>
          <div className="why-grid">
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

      {/* 4. Expertise & Equipment */}
      <section id="equipment" className="section equipment-section">
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

      {/* 4.5 Cleaning Scope Section */}
      <section id="scope" className="section scope-section bg-light">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">청소 범위</h2>
            <p>멍크린은 보이지 않는 구석구석까지 세심하게 관리합니다.</p>
          </div>
          <div className="scope-main-grid">
            {[
              {
                title: "1. 방 / 거실",
                img: "/scope_room.png",
                list: [
                  "바닥, 벽, 천장 먼지 및 오염 제거",
                  "신발장, 붙박이장, 수납장 내부 청소",
                  "몰딩, 문틀, 창문틀, 내부 유리창 청소",
                  "전등 커버 탈거 후 내부 청소 (샹들리에 및 디자인 등 제외)",
                  "콘센트, 스위치"
                ]
              },
              {
                title: "2. 화장실 / 욕실",
                img: "/scope_bathroom.png",
                list: [
                  "배수구, 환풍기 탈거 청소",
                  "타일, 바닥, 타일 사이, 천장, 벽면 청소",
                  "욕조, 변기, 세면대, 샤워부스, 수건걸이 청소",
                  "배수구 스팀 살균 소독"
                ]
              },
              {
                title: "3. 주방",
                img: "/scope_kitchen.png",
                list: [
                  "싱크대 상부장/하부장, 싱크대볼 청소",
                  "하부 걸레받이 탈거 후 청소",
                  "가스레인지, 인덕션, 후드, 후드필터 기름때 제거",
                  "주방벽면, 상판, 수납장 내부 청소",
                  "배수구 스팀 살균 소독"
                ]
              },
              {
                title: "4. 베란다 / 다용도실",
                img: "/scope_utility.png",
                list: [
                  "샷시, 내부창, 벽, 바닥, 타일 청소",
                  "배수구 스팀 살균 소독",
                  "배수가 용이한 곳 습식 청소 진행"
                ]
              }
            ].map((item, idx) => (
              <motion.div key={idx} className="scope-item-card" {...fadeInUp} transition={{ delay: idx * 0.1 }}>
                <div className="scope-img-box">
                  <img
                    src={item.img}
                    alt={item.title}
                    onError={(e) => (e.currentTarget.src = `https://placehold.co/600x400?text=${encodeURIComponent(item.title)}`)}
                  />
                </div>
                <h3>{item.title}</h3>
                <ul className="scope-list">
                  {item.list.map((li, i) => (
                    <li key={i}>{li}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Mungclean's 5-Step Premium Process */}
      <section id="process" className="section process-detail-section bg-white">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '1.25rem', color: 'var(--primary)', fontWeight: 700, marginBottom: '15px' }}>PREMIUM WORKFLOW</h2>
            <h3 style={{ fontSize: '2.8rem', fontWeight: 900, color: '#111', wordBreak: 'keep-all' }}>
              멍크린만의 <span style={{ color: 'var(--primary)' }}>5단계 정밀 케어</span> 공정
            </h3>
            <p style={{ marginTop: '20px', fontSize: '1.15rem', color: '#666' }}>단순한 청소를 넘어 전문 장비와 기술력으로 완벽한 공간을 만듭니다.</p>
          </div>

          <div className="process-timeline-wrap">
            {[
              {
                id: "01",
                title: "오존 산화 시공",
                desc: "오존의 강한 산화력으로 실내 유해가스, 냄새, 세균을 분해하고 저감하는 시공입니다. 포름알데히드, VOC, 세균, 곰팡이를 화학약품 없이 친환경적으로 제거하여 공기질을 개선하는 빠른 효과를 제공합니다.",
                img: "/Process_1.jpg",
                delay: 0
              },
              {
                id: "02",
                title: "바닥 기계장비 청소 및 스팀청소",
                desc: "전용 세제를 도포한 뒤 찌든 때와 냄새를 유발하는 원인균까지 말끔하게 제거합니다. 스팀과 진공 흡입이 동시에 가능한 전문 장비를 사용하여 바닥과 가구 부분을 집중 케어하며 남은 오염물까지 완벽하게 청소합니다.",
                img: "/Process_2.gif",
                delay: 0.1
              },
              {
                id: "03",
                title: "컬비 디테일 케어",
                desc: "특수 브러시가 장착된 컬비 장비로 벽지 사이사이의 털과 비듬, 진드기, 미세먼지 등 눈에 잘 띄지 않는 오염물까지 꼼꼼히 제거합니다. 벽지, 카펫, 매트리스, 소파 등 집안 구석구석을 빠짐없이 케어합니다.",
                imgs: ["/Process_3_1.mp4", "/Process_3_2.mp4", "/Process_3_3.mp4"],
                delay: 0.2
              },
              {
                id: "04",
                title: "반응촉진 작업 (냄새 탈취 작업)",
                desc: "청소 후에도 남아 있을 수 있는 냄새의 원인을 제거하기 위해 특수 반응촉진제를 집안 전체 공간에 분사합니다. 공기 중이나 표면에 남은 냄새 성분과 반응하여 냄새를 중화하고 근본적으로 분해합니다.",
                img: "/Process_4.gif",
                delay: 0.3
              },
              {
                id: "05",
                title: "무료 서비스 (Special Kit)",
                desc: "화장실 및 주방 전체 고압 스팀 작업, 피톤치드 연무 작업은 물론, 주방 및 화장실 수전 나노코팅 서비스까지 멍크린만의 특별한 혜택을 제공해 드립니다.",
                imgs: ["/Process_6.gif", "/Process_6_1.jpg", "/Process_6_2.gif", "/Process_6_3.gif"],
                delay: 0.4
              }
            ].map((step, idx) => (
              <motion.div
                key={step.id}
                className="process-step-item"
                {...fadeInUp}
                transition={{ delay: step.delay }}
              >
                <div className="step-title-box">
                  <div className="step-number">STEP {step.id}</div>
                  <h4>{step.title}</h4>
                </div>

                <div className={`step-img-container ${step.imgs ? "multi-imgs" : ""}`}>
                  {step.imgs ? (
                    <div className={`imgs-grid ${step.imgs.length === 3 ? "vertical-stack" : ""}`}>
                      {step.imgs.map((img, i) => (
                        <div key={i} className="grid-img-wrap">
                          {img.endsWith('.mp4') ? (
                            <video
                              src={img}
                              className="grid-img"
                              autoPlay
                              muted
                              loop
                              playsInline
                              preload="auto"
                              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            >
                              <source src={img} type="video/mp4" />
                            </video>
                          ) : (
                            <img
                              src={img}
                              alt={`${step.title} ${i + 1}`}
                              className="grid-img"
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <img
                      src={(step as any).img}
                      alt={step.title}
                      className="single-img"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        const parent = target.parentElement;
                        if (parent) {
                          const icon = document.createElement("div");
                          icon.className = "placeholder-box";
                          icon.innerHTML = `<span style="color:#aaa; font-weight:600;">[ ${step.id}단계 관련 이미지를 넣어주세요 ]</span>`;
                          parent.appendChild(icon);
                        }
                      }}
                    />
                  )}
                </div>

                <div className="step-desc-box">
                  <p>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Professional Service Intro Section */}
      <section id="services-list" className="section bg-light" style={{ backgroundColor: '#f9f9f9', padding: '100px 0' }}>
        <div className="container" style={{ maxWidth: '1400px' }}>
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 className="section-title">전문 청소 소개</h2>
          </div>
          <div className="services-main-grid">
            {services.map((item) => (
              <div key={item.id} className="service-main-card">
                <div className="service-main-info">
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                </div>
                <div className="service-main-img-box">
                  <img src={item.img} alt={item.name} onError={(e) => (e.currentTarget.src = 'https://placehold.co/400x400?text=' + item.name)} />
                </div>
                <div className="service-main-action" style={{ width: '100%', padding: '0 10px' }}>
                  <Link href={`/services/${item.id}`} className="btn btn-primary" style={{ width: '100%', fontSize: '0.95rem', padding: '12px 0', borderRadius: '12px' }}>자세히보기</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Contact CTA */}
      <section className="section cta-section bg-white">
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
          word-break: keep-all;
        }
        .slide-maintext {
          font-size: 4rem;
          font-weight: 900;
          display: block;
          text-shadow: 0 4px 8px rgba(0,0,0,0.5);
          color: #fff !important;
          line-height: 1.2;
          word-break: keep-all;
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

        /* Intro Styles */
        .intro-grid {
          display: grid;
          grid-template-columns: 360px 1fr;
          gap: 60px;
          align-items: center;
          max-width: 1100px;
          margin: 0 auto;
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
        }
        .intro-logo-img {
          max-width: 80%;
          max-height: 80%;
          object-fit: contain;
        }
        .highlight-text {
          color: var(--primary);
          font-size: 1.2rem;
          font-weight: 700;
          display: block;
          margin-bottom: 10px;
        }
        .intro-text h2 {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 25px;
          color: #333;
        }
        .intro-text h2 span { color: var(--primary); }
        .intro-p-wrap p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #555;
          margin-bottom: 15px;
          word-break: keep-all;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }
        .section-title {
          font-size: 2.2rem;
          font-weight: 800;
          margin-bottom: 20px;
          color: #333;
        }
        .section-header p {
          font-size: 1.1rem;
          color: #777;
        }

        .why-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }

        .equipment-simple-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }
        .simple-img-box {
          width: 100%;
          aspect-ratio: 16 / 10;
          border-radius: 12px;
          overflow: hidden;
          background: #f8f8f8;
          margin-bottom: 25px;
          border: 1px solid #eee;
        }
        .simple-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .simple-text-box h3 {
          font-size: 1.5rem;
          font-weight: 800;
          margin-bottom: 15px;
        }
        .simple-text-box p {
          font-size: 1.05rem;
          line-height: 1.6;
          color: #666;
          word-break: keep-all;
        }

        /* Process Step Styles */
        .process-timeline-wrap {
          max-width: 1000px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 100px;
        }
        .process-step-item {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .step-title-box {
          text-align: center;
          margin-bottom: 30px;
        }
        .step-number {
          display: inline-block;
          background: var(--primary);
          color: white;
          padding: 4px 15px;
          border-radius: 20px;
          font-weight: 800;
          font-size: 0.85rem;
          margin-bottom: 15px;
        }
        .step-title-box h4 {
          font-size: 2rem;
          font-weight: 900;
          color: #111;
          letter-spacing: -0.5px;
        }
        .step-img-container {
          width: 100%;
          aspect-ratio: 16 / 10;
          border-radius: 20px;
          overflow: hidden;
          background: #fdfdfd;
          box-shadow: 0 10px 40px rgba(0,0,0,0.08);
          margin-bottom: 35px;
          border: 1px solid #f0f0f0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .step-img-container.multi-imgs {
          aspect-ratio: auto;
        }
        .single-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }
        .imgs-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
          padding: 15px;
          width: 100%;
        }
        .imgs-grid.three-cols {
          grid-template-columns: repeat(3, 1fr);
        }
        .imgs-grid.vertical-stack {
          grid-template-columns: 1fr;
          max-width: 600px;
          margin: 0 auto;
        }
        .grid-img-wrap {
          width: 100%;
          aspect-ratio: 16 / 10;
          border-radius: 12px;
          overflow: hidden;
        }
        .vertical-stack .grid-img-wrap {
          aspect-ratio: 16 / 9;
        }
        .grid-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        .step-desc-box {
          max-width: 720px;
          text-align: center;
          margin: 0 auto;
        }
        .step-desc-box p {
          font-size: 1.15rem;
          line-height: 1.9;
          color: #444;
          word-break: keep-all;
          letter-spacing: -0.02em;
          text-align: center;
          opacity: 0.9;
        }
        .placeholder-box {
          padding: 100px 20px;
          text-align: center;
          background: #f9f9f9;
        }

        /* Services Main Grid */
        .services-main-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
        }
        .service-main-card {
          background: #fff;
          border-radius: 15px;
          padding: 30px 20px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }
        .service-main-info h3 {
          font-size: 1.2rem;
          font-weight: 800;
          margin-bottom: 8px;
        }
        .service-main-info p {
          font-size: 0.85rem;
          color: #777;
          height: 3.5rem;
          margin-bottom: 20px;
          word-break: keep-all;
          white-space: pre-line;
        }
        .service-main-img-box {
          width: 100%;
          aspect-ratio: 1 / 1;
          border-radius: 15px;
          overflow: hidden;
          margin-bottom: 25px;
        }
        .service-main-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .btn-main-detail {
          background: var(--primary);
          color: white;
          padding: 8px 25px;
          border-radius: 25px;
          font-size: 0.9rem;
          font-weight: 700;
          transition: all 0.3s ease;
        }
        .btn-main-detail:hover {
          background: var(--primary-dark);
          transform: translateY(-2px);
        }

        .cta-image-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          max-width: 1240px;
          margin: 0 auto;
        }
        .cta-image-link {
          display: block;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }
        .cta-full-img { width: 100%; height: auto; display: block; }
        
        /* Scope Section Styles */
        .scope-main-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 35px;
          max-width: 1000px;
          margin: 0 auto;
        }
        .scope-item-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          text-align: center;
          padding-bottom: 35px;
          transition: transform 0.3s ease;
          border: 1px solid #f0f0f0;
          display: flex;
          flex-direction: column;
        }
        .scope-item-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.1);
        }
        .scope-img-box {
          width: 100%;
          aspect-ratio: 16 / 10;
          overflow: hidden;
          margin-bottom: 25px;
          background: #f9f9f9;
        }
        .scope-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .scope-item-card h3 {
          font-size: 1.3rem;
          font-weight: 800;
          color: #111;
          margin-bottom: 15px;
          padding: 0 20px;
        }
        .scope-list {
          text-align: left;
          padding: 0 25px;
          margin: 0;
          list-style: none;
          flex-grow: 1;
        }
        .scope-list li {
          font-size: 0.92rem;
          color: #555;
          margin-bottom: 10px;
          position: relative;
          padding-left: 18px;
          line-height: 1.6;
          word-break: keep-all;
        }
        .scope-list li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 8px;
          width: 5px;
          height: 5px;
          background: var(--primary);
          border-radius: 50%;
        }
        .scope-item-card.text-only {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding: 40px 20px;
        }
        .scope-icon-box {
          width: 80px;
          height: 80px;
          background: #f0f9ff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 25px;
        }
        .scope-main-desc {
          color: var(--primary);
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 20px;
        }

        @media (max-width: 1200px) {
          .services-main-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 1024px) {
          .hero-slider { height: 700px; }
          .slide-maintext { font-size: 3rem; }
          .intro-grid { grid-template-columns: 1fr; text-align: center; gap: 40px; }
          .logo-outer-box { width: 240px; margin: 0 auto; }
          .why-grid { grid-template-columns: repeat(2, 1fr); }
          .equipment-simple-grid { grid-template-columns: 1fr; }
          .timeline-item, .timeline-item.reverse { flex-direction: column; text-align: center; gap: 30px; }
          .timeline-img-box, .timeline-text-box { width: 100%; }
        }
        @media (max-width: 768px) {
          .hero-slider { height: 600px; }
          .slide-maintext { font-size: 2.2rem; }
          .slide-subtext { font-size: 1rem; }
          .section-title { font-size: 1.8rem; }
          .why-grid { grid-template-columns: 1fr; }
          .scope-main-grid { grid-template-columns: 1fr; }
          .services-main-grid { grid-template-columns: 1fr; }
          .cta-image-grid { grid-template-columns: 1fr; }
          .step-img-container { min-height: auto; aspect-ratio: auto; }
          .grid-img { height: auto; }
        }
      `}</style>
    </>
  );
}
