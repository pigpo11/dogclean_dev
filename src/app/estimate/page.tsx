"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function EstimatePage() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        serviceType: "이사청소",
        address: "",
        area: "",
        petType: "강아지",
        petCount: "1",
        preferredDate: "",
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
        <div className="container section">
            <h1 className="section-title">무료 견적 문의</h1>
            <p className="subtitle">상세한 정보를 입력해 주시면 더 정확한 견적 안내가 가능합니다.</p>

            <form className="estimate-form" onSubmit={handleSubmit}>
                <div className="form-grid">
                    <div className="form-group">
                        <label>이름 *</label>
                        <input type="text" name="name" required placeholder="성함을 입력하세요" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>연락처 *</label>
                        <input type="tel" name="phone" required placeholder="010-0000-0000" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>서비스 유형 *</label>
                        <select name="serviceType" onChange={handleChange}>
                            <option>이사청소</option>
                            <option>거주청소</option>
                            <option>아기맞이청소</option>
                            <option>무지개청소</option>
                            <option>상가청소</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>주소 *</label>
                        <input type="text" name="address" required placeholder="주소를 입력하세요" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>평수 (평) *</label>
                        <input type="number" name="area" required placeholder="예: 24" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>반려동물 종류 *</label>
                        <select name="petType" onChange={handleChange}>
                            <option>강아지</option>
                            <option>고양이</option>
                            <option>강아지+고양이</option>
                            <option>기타</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>반려동물 마릿수 *</label>
                        <input type="number" name="petCount" required defaultValue="1" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>희망 일자</label>
                        <input type="date" name="preferredDate" onChange={handleChange} />
                    </div>
                </div>

                <div className="form-group full-width">
                    <label>추가 요청사항</label>
                    <textarea name="message" rows={5} placeholder="특별히 신경 써야 할 부분이나 궁금한 점을 적어주세요." onChange={handleChange}></textarea>
                </div>

                <div className="form-footer">
                    <p className="notice">* 필수 입력 항목입니다.</p>
                    <button type="submit" className="btn btn-primary submit-btn">
                        견적 문의 신청하기 <Send size={18} />
                    </button>
                </div>
            </form>

            <style jsx>{`
        .subtitle {
          text-align: center;
          color: var(--text-secondary);
          margin-bottom: 50px;
        }
        .estimate-form {
          max-width: 900px;
          margin: 0 auto;
          background: #fff;
          padding: 50px;
          border-radius: 30px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.05);
        }
        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .full-width {
          grid-column: span 2;
          margin-top: 30px;
        }
        label {
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--dark-bg);
        }
        input, select, textarea {
          padding: 15px;
          border: 1px solid #ddd;
          border-radius: 10px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }
        input:focus, select:focus, textarea:focus {
          outline: none;
          border-color: var(--primary);
        }
        .form-footer {
          margin-top: 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .notice {
          font-size: 0.85rem;
          color: var(--error);
        }
        .submit-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 15px 40px;
          font-size: 1.1rem;
        }
        @media (max-width: 768px) {
          .form-grid { grid-template-columns: 1fr; }
          .full-width { grid-column: span 1; }
          .estimate-form { padding: 30px 20px; }
          .form-footer { flex-direction: column; gap: 20px; }
        }
      `}</style>
        </div>
    );
}
