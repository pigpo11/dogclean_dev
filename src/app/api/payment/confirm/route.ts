import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: Request) {
    try {
        const { paymentKey, orderId, amount } = await request.json();

        const secretKey = process.env.TOSS_PAYMENTS_SECRET_KEY || "test_gsk_docs_OaPz8L5KdmQXkzRz3y47BMw6";
        const basicToken = Buffer.from(`${secretKey}:`).toString("base64");

        const response = await axios.post(
            "https://api.tosspayments.com/v1/payments/confirm",
            {
                orderId,
                amount,
                paymentKey,
            },
            {
                headers: {
                    Authorization: `Basic ${basicToken}`,
                    "Content-Type": "application/json",
                },
            }
        );

        // 결제 승인 성공 시 로직 (예: DB 업데이트 등)을 여기에 구현할 수 있습니다.
        console.log("결제 승인 성공:", response.data);

        return NextResponse.json(response.data, { status: 200 });
    } catch (error: any) {
        const errorData = error.response?.data || { message: "Internal Server Error" };
        console.error("결제 승인 실패:", errorData);
        return NextResponse.json(errorData, { status: error.response?.status || 500 });
    }
}
