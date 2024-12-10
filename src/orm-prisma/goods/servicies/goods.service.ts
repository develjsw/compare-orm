import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { tb_goods as Goods } from '@prisma/client';

@Injectable()
export class GoodsService {
    constructor(private readonly prisma: PrismaService) {}

    async findGoodsAll(): Promise<Goods[]> {
        return this.prisma.tb_goods.findMany();
    }

    async findGoodsById(goods_id: number): Promise<Goods> {
        return this.prisma.tb_goods.findUnique({
            where: {
                goods_id
            }
        });
    }
}
