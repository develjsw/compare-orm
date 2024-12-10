import { Module } from '@nestjs/common';
import { GoodsController } from './goods.controller';
import { PrismaService } from '../prisma/prisma.service';
import { GoodsService } from './servicies/goods.service';

@Module({
    imports: [],
    controllers: [GoodsController],
    providers: [PrismaService, GoodsService],
    exports: []
})
export class GoodsModule {}