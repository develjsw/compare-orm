import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { GoodsService } from './servicies/goods.service';

@Controller('orm-typeorm/goods')
export class GoodsController {
    constructor(private readonly goodsService: GoodsService) {}

    @Get()
    async findGoodsAll() {
        return await this.goodsService.findGoodsAll();
    }

    @Get(':id')
    async findGoodsById(@Param('id', ParseIntPipe) goodsId: number) {
        return await this.goodsService.findGoodsById(goodsId);
    }
}