import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { MemberEntity } from '../../entities/mysql/member.entity';
import { FindMemberDto } from '../dto/find-member.dto';

@Injectable()
export class MemberRepository {
    private readonly memberRepository: Repository<MemberEntity>;

    constructor(private readonly dataSource: DataSource) {
        this.memberRepository = dataSource.getRepository(MemberEntity);
    }

    async findMemberByConditions(dto: FindMemberDto): Promise<MemberEntity[]> {
        const { memberName, nickName, tel, email, member_status } = dto;

        return await this.memberRepository.find({
            where: {
                ...(memberName && { memberName }),
                ...(nickName && { nickName }),
                ...(tel && { tel }),
                ...(email && { email }),
                // 엔티티 속성 이름을 사용해야 하는 것이 원칙, 실제 컬럼명을 입력하면 컴파일 에러가 발생하지만 동작은 된다.
                // 이때 컴파일 에러 발생시 중단시키고자 한다면 tsconfig.json 파일에 "strict": true 옵션을 추가해주면 된다.
                //...(member_status && { member_status })
            },
            order: {
                memberId: 'desc'
            }
        });
    }
}
