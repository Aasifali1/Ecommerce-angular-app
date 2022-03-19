export class Payment {
    id: number;
    orderId: number;
    paymentDate: string;
    paymentMethod: string;
    transactionId: string;
    stripePaymentId: string;
    paymentStatus: string;
    amount: number;
    email: string;
    receiptUrl: string;
}
