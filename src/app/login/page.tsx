"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Lock, LogIn } from "lucide-react";

export default function LoginPage() {
    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("로그인 시도 및 PRD에 명세된 권한 체크 로직이 진행됩니다.");
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="login-header">
                    <h1>환영합니다!</h1>
                    <p>멍크린 회원으로 로그인하여 서비스를 이용하세요.</p>
                </div>

                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="input-field">
                        <Mail size={20} />
                        <input
                            type="email"
                            name="email"
                            placeholder="이메일 주소"
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-field">
                        <Lock size={20} />
                        <input
                            type="password"
                            name="password"
                            placeholder="비밀번호"
                            required
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-options">
                        <label className="checkbox-container">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                            로그인 상태 유지
                        </label>
                        <Link href="#" className="forgot-link">비밀번호 찾기</Link>
                    </div>

                    <button type="submit" className="btn btn-primary login-btn">
                        로그인하기 <LogIn size={18} />
                    </button>
                </form>

                <div className="login-footer">
                    <p>아직 회원이 아니신가요? <Link href="/register">회원가입</Link></p>
                </div>
            </div>

            <style jsx>{`
        .login-container {
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--background);
          padding: 20px;
        }
        .login-box {
          width: 100%;
          max-width: 450px;
          background: #fff;
          padding: 50px 40px;
          border-radius: 30px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
        }
        .login-header {
          text-align: center;
          margin-bottom: 40px;
        }
        .login-header h1 {
          font-size: 2rem;
          margin-bottom: 10px;
          color: var(--dark-bg);
        }
        .login-header p {
          color: var(--text-secondary);
        }
        .login-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .input-field {
          position: relative;
          display: flex;
          align-items: center;
          padding: 0 20px;
          background: #f8f9fa;
          border: 1px solid #eee;
          border-radius: 12px;
          color: var(--text-secondary);
        }
        .input-field input {
          width: 100%;
          padding: 16px 15px;
          border: none;
          background: transparent;
          font-size: 1rem;
          outline: none;
          color: var(--text-primary);
        }
        .form-options {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.9rem;
        }
        .checkbox-container {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
        }
        .forgot-link {
          color: var(--primary);
          font-weight: 600;
        }
        .login-btn {
          padding: 16px;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-top: 10px;
        }
        .login-footer {
          margin-top: 30px;
          text-align: center;
          border-top: 1px solid #eee;
          padding-top: 25px;
          font-size: 0.95rem;
        }
        .login-footer a {
          color: var(--primary);
          font-weight: 700;
        }
      `}</style>
        </div>
    );
}
