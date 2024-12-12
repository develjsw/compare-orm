import { Controller, Get, NotFoundException, Param, ParseIntPipe } from '@nestjs/common';
import { PaymentService } from './servicies/payment.service';
import { PaymentEntity } from '../entities/mysql/payment.entity';

@Controller('orm-typeorm/payments')
export class PaymentController {
    constructor(private readonly paymentService: PaymentService) {}

    @Get('members/:id')
    async findPaymentAndMemberAndGoodsByMemberId(@Param('id', ParseIntPipe) memberId: number) {
        const paymentList: PaymentEntity[] = await this.paymentService.findPaymentAndMemberAndGoodsByMemberId(memberId);

        if (!paymentList.length) {
            throw new NotFoundException();
        }

        return paymentList;
    }
}
