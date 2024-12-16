import { Module } from '@nestjs/common';
import { MemberService } from './servicies/member.service';
import { MemberRepository } from './repositories/member.repository';
import { MemberController } from './member.controller';

@Module({
    imports: [],
    controllers: [MemberController],
    providers: [MemberService, MemberRepository],
    exports: []
})
export class MemberModule {}
