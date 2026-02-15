"use client";

import Link from "next/link";
import { AlertCircle } from "lucide-react";

export default function FailPage() {
    return (
        <div className="container" style={{ textAlign: 'center', padding: '100px 20px' }}>
            <AlertCircle size={80} color="#ef4444" style={{ margin: '0 auto 30px' }} />
            <h1 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '20px' }}>결제에 실패했습니다.</h1>
            <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '40px' }}>
                결제 도중 오류가 발생했습니다.<br />
                잠시 후 다시 시도해주세요.
            </p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                <Link href="/payment" className="btn btn-primary" style={{ padding: '15px 40px', borderRadius: '30px' }}>다시 시도</Link>
                <Link href="/" className="btn btn-outline" style={{ padding: '15px 40px', borderRadius: '30px' }}>홈으로 이동</Link>
            </div>
        </div>
    );
}
