import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { MemberEntity } from './member.entity';
import { GoodsEntity } from './goods.entity';

@Entity('tb_payment')
export class PaymentEntity {
    @PrimaryColumn('int', {
        name: 'payment_id'
    })
    paymentId: number;

    @Column('int', {
        name: 'member_id'
    })
    memberId: number;

    @Column('int', {
        name: 'goods_id'
    })
    goodsId: number;

    @Column('int', {
        name: 'amount'
    })
    amount: number;

    @Column('char', {
        name: 'payment_status'
    })
    paymentStatus: string;

    @Column('datetime', {
        name: 'reg_date'
    })
    regDate: string;

    @Column('datetime', {
        name: 'mod_date'
    })
    modDate: string;

    @ManyToOne(() => MemberEntity, (member) => member.payments)
    @JoinColumn({ name: 'member_id' })
    member: MemberEntity;

    @ManyToOne(() => GoodsEntity, (goods) => goods.payments)
    @JoinColumn({ name: 'goods_id' })
    goods: GoodsEntity;
}
