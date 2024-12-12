import { Controller, Get, NotFoundException, Param, ParseIntPipe } from '@nestjs/common';
import { PaymentService } from './servicies/payment.service';
import { Prisma } from '@prisma/client';

@Controller('orm-prisma/payments')
export class PaymentController {
    constructor(private readonly paymentService: PaymentService) {}

    @Get('/members/:id')
    async findPaymentAndMemberAndGoodsByMemberId(@Param('id', ParseIntPipe) memberId: number) {
        const payments: Prisma.tb_paymentGetPayload<{ include: { tb_goods: true; tb_member: true } }>[] =
            await this.paymentService.findPaymentAndMemberAndGoodsByMemberId(memberId);

        if (!payments.length) {
            throw new NotFoundException();
        }

        return payments;
    }
}
