import { Module } from '@nestjs/common';
import { GoodsModule } from './goods/goods.module';
import { PaymentModule } from './payment/payment.module';

@Module({
    imports: [GoodsModule, PaymentModule],
    providers: [],
    exports: []
})
export class OrmPrismaModule {}
