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
              { title: "미세 털 박멸", desc: "패브릭 사이사이에 박힌 반려견/반려묘의 털을 강력 흡입하여 제거합니다.", icon: "🐕" },
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
                <img src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=1000" alt="최첨단 전문 장비" />
              </div>
              <div className="simple-text-box">
                <h3>최첨단 전문 장비 보유</h3>
                <p>고성능 스팀기, 산업용 고압 세척기 등 각 상황에 맞는 최신 장비를 활용합니다.</p>
              </div>
            </motion.div>
            <motion.div className="equipment-simple-item" {...fadeInUp} transition={{ delay: 0.2 }}>
              <div className="simple-img-box">
                <img src="https://images.unsplash.com/photo-1550963295-019d8a8a61c5?auto=format&fit=crop&q=80&w=1000" alt="친환경 세제 사용" />
              </div>
              <div className="simple-text-box">
                <h3>친환경 세제 사용</h3>
                <p>가족과 반려동물의 건강을 생각하여 인체에 무해한 검증된 친환경 세제만을 고집합니다.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Mungclean's Principles */}
      <section className="section principles-section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 className="principles-title" style={{ fontSize: '2.5rem', fontWeight: 900 }}>
              <span style={{ color: 'var(--primary)' }}>멍크린</span>의 3대 약속
            </h2>
          </div>
          <div className="principles-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '30px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <motion.div
              className="principle-card"
              {...fadeInUp}
              style={{
                border: '1px solid #eee',
                padding: '60px 30px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                background: '#fff',
                borderRadius: '24px',
                boxShadow: '0 15px 40px rgba(0,0,0,0.03)'
              }}
            >
              <div className="icon-circle-bg" style={{
                width: '120px',
                height: '120px',
                background: '#f8fbfc',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '35px'
              }}>
                <Sparkles size={60} color="var(--primary)" />
              </div>
              <h4 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '20px', color: '#111' }}>특수 살균/소독 기술</h4>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#666', wordBreak: 'keep-all', maxWidth: '300px', margin: '0 auto' }}>
                단순 흡입을 넘어 고온 스팀과 UV 소독을 통해 반려동물이 남긴 보이지 않는 세균까지 완벽하게 제거합니다.
              </p>
            </motion.div>

            <motion.div
              className="principle-card"
              {...fadeInUp}
              transition={{ delay: 0.1 }}
              style={{
                border: '1px solid #eee',
                padding: '60px 30px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                background: '#fff',
                borderRadius: '24px',
                boxShadow: '0 15px 40px rgba(0,0,0,0.03)'
              }}
            >
              <div className="icon-circle-bg" style={{
                width: '120px',
                height: '120px',
                background: '#f8fbfc',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '35px'
              }}>
                <ShieldCheck size={60} color="var(--primary)" />
              </div>
              <h4 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '20px', color: '#111' }}>친환경 케어 솔루션</h4>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#666', wordBreak: 'keep-all', maxWidth: '300px', margin: '0 auto' }}>
                반려동물의 예민한 후각과 피부를 위해 검증된 유기농·친환경 세제만을 사용하여 인체와 동물 모두에게 무해합니다.
              </p>
            </motion.div>

            <motion.div
              className="principle-card"
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              style={{
                border: '1px solid #eee',
                padding: '60px 30px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                background: '#fff',
                borderRadius: '24px',
                boxShadow: '0 15px 40px rgba(0,0,0,0.03)'
              }}
            >
              <div className="icon-circle-bg" style={{
                width: '120px',
                height: '120px',
                background: '#f8fbfc',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '35px'
              }}>
                <Users size={60} color="var(--primary)" />
              </div>
              <h4 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '20px', color: '#111' }}>반려동물 이해 전문가</h4>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#666', wordBreak: 'keep-all', maxWidth: '300px', margin: '0 auto' }}>
                실제 반려동물을 사랑하고 이해하는 전문가들로 구성된 팀이 현장을 방문하여 정성 가득한 케어를 약속합니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Kitchen & Sink Gallery */}
      <section className="section gallery-section no-padding-bottom">
        <div className="container">
          <div className="gallery-header">
            <h3>01. 주방 및 싱크대 케어</h3>
            <p>기름때 제거부터 배수구 살균 소독까지 꼼꼼하게 진행합니다.</p>
          </div>
          <div className="gallery-grid-4">
            <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=600" alt="Kitchen 1" />
            <img src="https://images.unsplash.com/photo-1527515545081-5db817172677?auto=format&fit=crop&q=80&w=600" alt="Kitchen 2" />
            <img src="https://images.unsplash.com/photo-1584622781564-1d9876a1dfd1?auto=format&fit=crop&q=80&w=600" alt="Kitchen 3" />
            <img src="https://images.unsplash.com/photo-1528203323901-4d9d40fe615e?auto=format&fit=crop&q=80&w=600" alt="Kitchen 4" />
          </div>
        </div>
      </section>

      {/* 6. Service Process Section (Newly Added) */}
      <section className="section process-section bg-white" style={{ padding: '100px 0' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">멍크린의 체계적인 서비스 과정</h2>
            <p>보이지 않는 곳까지 완벽하게, 4단계 케어 프로세스로 진행됩니다.</p>
          </div>
          <div className="process-steps" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
            marginTop: '60px',
            position: 'relative'
          }}>
            {[
              { step: "01", title: "현장 오염도 체크", desc: "전문 장비로 오염 상태와 반려동물 흔적을 정밀 분석합니다." },
              { step: "02", title: "딥 클리닝 (건식)", desc: "고성능 헤파 필터 장비로 털, 먼지, 진드기를 강력 흡입합니다." },
              { step: "03", title: "스팀/세척 (습식)", desc: "친환경 세제와 고온 스팀으로 찌든 오염과 냄새를 제거합니다." },
              { step: "04", title: "토탈 살균 소독", desc: "피톤치드 및 UV 살균으로 쾌적한 환경을 완성합니다." }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                className="process-step-item"
                {...fadeInUp}
                transition={{ delay: idx * 0.1 }}
                style={{
                  textAlign: 'center',
                  background: '#f8fbfc',
                  padding: '40px 20px',
                  borderRadius: '20px',
                  border: '1px solid #eef2f5'
                }}
              >
                <div style={{
                  fontSize: '1rem',
                  fontWeight: 900,
                  color: 'var(--primary)',
                  marginBottom: '15px',
                  opacity: 0.5
                }}>STEP {step.step}</div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '15px' }}>{step.title}</h4>
                <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: 1.6, wordBreak: 'keep-all' }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Floor Cleaning Specialization */}
      <section className="section floor-special-section" style={{ backgroundColor: '#f8f9fa', padding: '120px 0' }}>
        <div className="container">
          <motion.div className="floor-content" {...fadeInUp} style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.8rem', fontWeight: 900, marginBottom: '70px', color: '#333' }}>
              반려동물 가족의 고민 <span style={{ color: 'var(--primary)' }}>한번에 해결!</span>
            </h2>
            <div className="floor-circles" style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '40px',
              flexWrap: 'wrap'
            }}>
              <div className="circle-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '25px', width: '230px' }}>
                <div className="circle-img" style={{
                  width: '220px',
                  height: '220px',
                  borderRadius: '50%',
                  backgroundImage: 'url(https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=400)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.12)',
                  border: '6px solid #fff'
                }}></div>
                <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#444', lineHeight: 1.4, wordBreak: 'keep-all' }}>집안 곳곳 박힌<br />반려동물의 미세 털</span>
              </div>
              <div className="circle-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '25px', width: '230px' }}>
                <div className="circle-img" style={{
                  width: '220px',
                  height: '220px',
                  borderRadius: '50%',
                  backgroundImage: 'url(https://images.unsplash.com/photo-1599427303058-f04cbcf4756f?auto=format&fit=crop&q=80&w=400)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.12)',
                  border: '6px solid #fff'
                }}></div>
                <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#444', lineHeight: 1.4, wordBreak: 'keep-all' }}>배어있는 특유의<br />찌든 취기(Odor)</span>
              </div>
              <div className="circle-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '25px', width: '230px' }}>
                <div className="circle-img" style={{
                  width: '220px',
                  height: '220px',
                  borderRadius: '50%',
                  backgroundImage: 'url(https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&q=80&w=400)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.12)',
                  border: '6px solid #fff'
                }}></div>
                <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#444', lineHeight: 1.4, wordBreak: 'keep-all' }}>공기 중 떠다니는<br />비듬과 초미세먼지</span>
              </div>
              <div className="circle-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '25px', width: '230px' }}>
                <div className="circle-img" style={{
                  width: '220px',
                  height: '220px',
                  borderRadius: '50%',
                  backgroundImage: 'url(https://images.unsplash.com/photo-1548128591-2dc04735391a?auto=format&fit=crop&q=80&w=400)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.12)',
                  border: '6px solid #fff'
                }}></div>
                <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#444', lineHeight: 1.4, wordBreak: 'keep-all' }}>알레르기를 유발하는<br />진드기와 유해 세균</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. Additional Galleries */}
      <section className="section gallery-section" style={{ padding: '120px 0' }}>
        <div className="container">
          <div className="gallery-row" style={{ display: 'flex', gap: '40px', marginBottom: '80px' }}>
            <div className="gallery-item-half" style={{ flex: 1 }}>
              <div className="gallery-header small">
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '20px' }}>02. 베란다 및 창틀 케어</h3>
              </div>
              <div className="gallery-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <img src="https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&q=80&w=600" alt="Balcony 1" style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '10px' }} />
                <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=600" alt="Balcony 2" style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '10px' }} />
              </div>
            </div>
            <div className="gallery-item-half" style={{ flex: 1 }}>
              <div className="gallery-header small">
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '20px' }}>03. 욕실 및 살균 케어</h3>
              </div>
              <div className="gallery-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <img src="https://images.unsplash.com/photo-1584622781564-1d9876a1dfd1?auto=format&fit=crop&q=80&w=600" alt="Bathroom 1" style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '10px' }} />
                <img src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=600" alt="Bathroom 2" style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '10px' }} />
              </div>
            </div>
          </div>

          <div className="gallery-row" style={{ marginTop: '80px' }}>
            <div className="gallery-full" style={{ width: '100%' }}>
              <div className="gallery-header small" style={{ marginBottom: '30px' }}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '10px' }}>04. 거실 및 전체 바닥 케어</h3>
                <p style={{ fontSize: '1.1rem', color: '#666' }}>전문 장비를 통해 구석구석 틈새까지 완벽하게 먼지를 흡입하고 물세척을 진행합니다.</p>
              </div>
              <div className="gallery-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <img src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=800" alt="Living 1" style={{ width: '100%', height: '350px', objectFit: 'cover', borderRadius: '15px' }} />
                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800" alt="Living 2" style={{ width: '100%', height: '350px', objectFit: 'cover', borderRadius: '15px' }} />
              </div>
            </div>
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
