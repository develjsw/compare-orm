import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { PaymentEntity } from '../../entities/mysql/payment.entity';

@Injectable()
export class PaymentRepository {
    private readonly paymentRepository: Repository<PaymentEntity>;

    constructor(private readonly dataSource: DataSource) {
        this.paymentRepository = dataSource.getRepository(PaymentEntity);
    }

    // 관계를 설정하여 한번에 데이터를 가져오게 되지만 PaymentEntity[] 타입의 반환을 사용하므로
    // 받는 곳에서 relations에 설정한 객체에 접근했을 때 데이터가 없다면 타입에 대한 안정성을 보장받을 수 없음
    async findPaymentAndMemberAndGoodsByMemberId(memberId: number): Promise<PaymentEntity[]> {
        return await this.paymentRepository.find({
            where: {
                memberId
            },
            /*
                [ TypeORM - relation 옵션 ]
                - entity에 @OneToMany, @ManyToOne 등의 데코레이터를 사용해서 관계를 설정한 부분을 통해 relations 배열로 데이터를 한꺼번에 가져올 수 있음
                - Prisma와 달리 relations 배열에 설정한 관계 데이터가 없는 경우에 에러 발생여부를 선택할 수 없으며, 관계 값 자체를 숨김처리하여 반환하지 않음
                    ex) [ { 필드1: 필드값1, 필드2: 필드값2 }, { 필드1: 필드값1, 필드2: 필드값2, tb_goods: { 필드3: 필드값3, 필드4: 필드값4 } } ]
                    따라서 이 부분에서 값을 가져와 처리할 때 해당 객체가 존재하는지 여부를 체크하는 로직을 반드시 작성해줘야 런타임에서 에러가 발생되지 않음(=타입 불안정성)
                - relations에 설정한 엔티티에 대해 타입 검증을 하지 않기 때문에 런타임에서 오류가 발생할 수 있음(=타입 불안정성)
            */
            // relations: ['member', 'emptyTable'] // emptyTable 타입은 미존재하나 컴파일 단계에서 에러를 발생시키지 않음
            relations: ['member', 'goods']
        });
    }
}