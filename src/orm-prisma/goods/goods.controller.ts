import { Controller, Get, NotFoundException, Param, ParseIntPipe } from '@nestjs/common';
import { tb_goods as Goods } from '@prisma/client';
import { GoodsService } from './servicies/goods.service';

@Controller('orm-prisma/goods')
export class GoodsController {
    constructor(private readonly goodsService: GoodsService) {}

    @Get()
    async findGoodsAll() {
        const goodsList: Goods[] = await this.goodsService.findGoodsAll();
        // const testCase1 = goodsList.filter((goods: Goods) => goods.member_id == 1) // goods 모델 객체에 member_id는 없으므로 Error 발생

        if (!goodsList.length) {
            throw new NotFoundException();
        }

        return goodsList;
    }

    @Get(':id')
    async findGoodsById(@Param('id', ParseIntPipe) goodsId: number) {
        const goods: Goods = await this.goodsService.findGoodsById(goodsId);
        // const testCase2: number = goods.goods_id; // 값이 없는경우 Error 발생

        if (!goods) {
            throw new NotFoundException();
        }

        return goods;
    }
}