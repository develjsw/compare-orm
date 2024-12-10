import { Injectable } from '@nestjs/common';
import { PaymentRepository } from '../repositories/payment.repository';
import { PaymentEntity } from '../../entities/mysql/payment.entity';

@Injectable()
export class PaymentService {
    constructor(private readonly paymentRepository: PaymentRepository) {}

    async findPaymentAndMemberAndGoodsByMemberId(memberId: number): Promise<PaymentEntity[]> {
        return await this.paymentRepository.findPaymentAndMemberAndGoodsByMemberId(memberId);
    }
}