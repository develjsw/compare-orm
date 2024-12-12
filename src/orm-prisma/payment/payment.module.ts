import { Module } from '@nestjs/common';
import { PaymentController } from './payment.controller';
import { PaymentService } from './servicies/payment.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
    imports: [PrismaModule], // PrismaService를 직접 providers에 선언하지 않고, PrismaModule에서 exports된 PrismaService를 주입받아 사용
    controllers: [PaymentController],
    providers: [PaymentService],
    exports: []
})
export class PaymentModule {}
