import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { GoodsEntity } from '../../entities/mysql/goods.entity';

@Injectable()
export class GoodsRepository {
    private readonly goodsRepository: Repository<GoodsEntity>;

    constructor(private readonly dataSource: DataSource) {
        this.goodsRepository = dataSource.getRepository(GoodsEntity);
    }

    async findGoodsAll(): Promise<GoodsEntity[]> {
        return await this.goodsRepository.find();
    }
}
