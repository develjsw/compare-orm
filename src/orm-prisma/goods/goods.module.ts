import { Module } from '@nestjs/common';
import { GoodsController } from './goods.controller';
import { GoodsService } from './servicies/goods.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
    imports: [PrismaModule], // PrismaService를 직접 providers에 선언하지 않고, PrismaModule에서 exports된 PrismaService를 주입받아 사용
    controllers: [GoodsController],
    providers: [GoodsService],
    exports: []
})
export class GoodsModule {}
