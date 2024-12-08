import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('tb_member')
export class MemberEntity {
    @PrimaryColumn('int', {
        name: 'member_id'
    })
    memberId: number

    @Column('varchar', {
        name: 'member_name'
    })
    memberName: string

    @Column('varchar', {
        name: 'nick_name'
    })
    nickName: string

    @Column('varchar', {
        name: 'password'
    })
    password: string

    @Column('varchar', {
        name: 'tel'
    })
    tel: string

    @Column('varchar', {
        name: 'email'
    })
    email: string

    @Column('varchar', {
        name: 'member_status'
    })
    memberStatus: string

    @Column('datetime', {
        name: 'reg_date'
    })
    regDate: Date

    @Column('datetime', {
        name: 'mod_date'
    })
    modDate: Date

    @Column('datetime', {
        name: 'del_date'
    })
    delDate: Date

    @Column('datetime', {
        name: 'drop_date'
    })
    dropDate: Date
}