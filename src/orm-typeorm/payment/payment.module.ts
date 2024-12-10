import { Module } from '@nestjs/common';
import { PaymentController } from './payment.controller';
import { PaymentService } from './servicies/payment.service';
import { PaymentRepository } from './repositories/payment.repository';

@Module({
    imports: [],
    controllers: [PaymentController],
    providers: [PaymentService, PaymentRepository],
    exports: []
})
export class PaymentModule {}
