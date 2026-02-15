"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function EstimatePage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    area: "",
    serviceType: "입주청소",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("견적 문의가 접수되었습니다. 곧 연락드리겠습니다!");
    console.log(formData);
  };

  return (
    <div className="estimate-page">
      <div className="page-header" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(https://images.unsplash.com/photo-1554900162-273e057adebb?auto=format&fit=crop&q=80&w=1920)' }}>
        <div className="container">
          <h1>간편 견적</h1>
        </div>
      </div>

      <div className="container section">
        <form className="estimate-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>이름 *</label>
            <input type="text" name="name" required placeholder="이름을 입력해주세요" onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>연락처 *</label>
            <input type="tel" name="phone" required placeholder="- 빼고 입력해주세요" onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>주소 *</label>
            <input type="text" name="address" required placeholder="주소를 입력해주세요" onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>평수 *</label>
            <input type="text" name="area" required placeholder="평수를 입력해주세요" onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>서비스명 *</label>
            <select name="serviceType" onChange={handleChange}>
              <option>입주청소</option>
              <option>이사청소</option>
              <option>상가청소</option>
              <option>인테리어청소</option>
              <option>특수청소</option>
            </select>
          </div>

          <div className="form-group">
            <label>문의내용</label>
            <textarea name="message" rows={4} placeholder="원하시는 서비스의 전달사항을 간단히 적어주세요" onChange={handleChange}></textarea>
          </div>

          <div className="privacy-check">
            <label htmlFor="privacy">개인정보취급방침에 동의합니다.</label>
            <input type="checkbox" id="privacy" required />
          </div>

          <button type="submit" className="submit-btn">신청하기</button>
        </form>
      </div>

      <style jsx>{`
                .page-header {
                    height: 300px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-size: cover;
                    background-position: center;
                    color: white;
                    text-align: center;
                }
                .page-header h1 {
                    font-size: 3rem;
                    font-weight: 800;
                }
                .estimate-form {
                    max-width: 800px;
                    margin: 50px auto;
                    background: #fff;
                    padding: 60px;
                    border: 1px solid #eee;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
                    position: relative;
                    z-index: 10;
                    border-radius: 20px;
                }
                .form-group {
                    margin-bottom: 25px;
                }
                .form-group label {
                    display: block;
                    font-weight: 700;
                    margin-bottom: 10px;
                    color: #333;
                }
                input, select, textarea {
                    width: 100%;
                    padding: 12px 15px;
                    border: 1px solid #ddd;
                    font-size: 1rem;
                    outline: none;
                }
                input:focus, select:focus, textarea:focus {
                    border-color: var(--primary);
                }
                .privacy-check {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 12px;
                    margin: 40px 0;
                }
                .privacy-check input[type="checkbox"] {
                    width: auto;
                    cursor: pointer;
                }
                .privacy-check label {
                    font-size: 0.95rem;
                    color: #666;
                    cursor: pointer;
                    user-select: none;
                }
                .submit-btn {
                    width: 150px;
                    height: 50px;
                    margin: 0 auto;
                    display: block;
                    background: var(--primary);
                    color: white;
                    border: none;
                    border-radius: 30px;
                    font-weight: 700;
                    font-size: 1rem;
                    cursor: pointer;
                }
                @media (max-width: 768px) {
                    .estimate-form {
                        margin-top: -50px;
                        padding: 30px 20px;
                    }
                    .page-header h1 { font-size: 2rem; }
                }
            `}</style>
    </div>
  );
}
