"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AlertCircle, ArrowLeft, RotateCcw } from "lucide-react";

export default function FailPage() {
    const [params, setParams] = useState<{ code: string; message: string } | null>(null);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get("code");
        const message = urlParams.get("message");

        if (code && message) {
            setParams({ code, message });
        }
    }, []);

    return (
        <div className="fail-page">
            <div className="container" style={{ maxWidth: '600px', margin: '0 auto', padding: '100px 20px' }}>
                <div className="fail-card">
                    <div className="card-header">
                        <AlertCircle size={80} color="#ef4444" />
                        <h1 style={{ fontSize: '2.5rem', fontWeight: 900, marginTop: '30px', marginBottom: '15px' }}>결제에 실패했습니다</h1>
                        <p style={{ fontSize: '1.2rem', color: '#64748b' }}>
                            결제 진행 중 예상치 못한 오류가 발생했습니다.
                        </p>
                    </div>

                    <div className="error-details">
                        <div className="error-row">
                            <span className="label">에러 코드</span>
                            <span className="value code">{params?.code || "UNKNOWN_ERROR"}</span>
                        </div>
                        <div className="error-row">
                            <span className="label">실패 사유</span>
                            <span className="value">{params?.message || "알 수 없는 오류가 발생했습니다."}</span>
                        </div>
                    </div>

                    <div className="next-steps">
                        <div className="btn-group">
                            <Link href="/payment" className="btn btn-primary">
                                <RotateCcw size={18} /> 다시 시도하기
                            </Link>
                            <Link href="/" className="btn btn-outline">
                                <ArrowLeft size={18} /> 홈으로 이동
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .fail-page {
          min-height: 100vh;
          background-color: #fcf8f8;
        }
        .fail-card {
          background: white;
          border-radius: 30px;
          padding: 60px;
          box-shadow: 0 20px 50px rgba(239, 68, 68, 0.05);
          text-align: center;
          border: 1px solid #fee2e2;
        }
        .card-header {
          margin-bottom: 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .error-details {
          background: #fff5f5;
          border-radius: 20px;
          padding: 30px;
          text-align: left;
          margin-bottom: 40px;
          border: 1px solid #fecaca;
        }
        .error-row {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 20px;
        }
        .error-row:last-child {
          margin-bottom: 0;
        }
        .label {
          font-size: 0.85rem;
          font-weight: 700;
          color: #b91c1c;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .value {
          font-weight: 600;
          color: #1e293b;
          line-height: 1.5;
        }
        .value.code {
          font-family: monospace;
          background: white;
          padding: 4px 8px;
          border-radius: 6px;
          display: inline-block;
        }
        .btn-group {
          display: flex;
          gap: 15px;
          justify-content: center;
        }
        .btn-outline {
          border: 1px solid #e2e8f0;
          background: white;
          color: #64748b;
          padding: 15px 30px;
          border-radius: 50px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s;
        }
        .btn-outline:hover {
          background: #f8fafc;
          border-color: #cbd5e1;
        }
        @media (max-width: 600px) {
          .fail-card { padding: 40px 20px; }
          .btn-group { flex-direction: column; }
        }
      `}</style>
        </div>
    );
}
