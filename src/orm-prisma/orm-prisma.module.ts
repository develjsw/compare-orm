import { Module } from '@nestjs/common';
import { GoodsModule } from './goods/goods.module';
import { PaymentModule } from './payment/payment.module';
import { MemberModule } from './member/member.module';

@Module({
    imports: [GoodsModule, PaymentModule, MemberModule],
    providers: [],
    exports: []
})
export class OrmPrismaModule {}
