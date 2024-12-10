import { Module } from '@nestjs/common';
import { PaymentController } from './payment.controller';
import { PrismaService } from '../prisma/prisma.service';
import { PaymentService } from './servicies/payment.service';

@Module({
    imports: [],
    controllers: [PaymentController],
    providers: [PrismaService, PaymentService],
    exports: []
})
export class PaymentModule {}