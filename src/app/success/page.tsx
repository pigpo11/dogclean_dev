"use client";

import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function SuccessPage() {
    return (
        <div className="container" style={{ textAlign: 'center', padding: '100px 20px' }}>
            <CheckCircle size={80} color="#22c55e" style={{ margin: '0 auto 30px' }} />
            <h1 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '20px' }}>결제가 완료되었습니다!</h1>
            <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '40px' }}>
                멍크린 프리미엄 서비스를 이용해주셔서 감사합니다.<br />
                빠른 시일 내에 해피콜로 연락드리겠습니다.
            </p>
            <Link href="/" className="btn btn-primary" style={{ padding: '15px 40px', borderRadius: '30px' }}>홈으로 이동</Link>
        </div>
    );
}
