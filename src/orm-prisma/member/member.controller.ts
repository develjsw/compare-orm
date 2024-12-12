import { Controller, Get, Query, ValidationPipe } from '@nestjs/common';
import { MemberService } from './servicies/member.service';
import { FindMemberDto } from './dto/find-member.dto';

@Controller('orm-prisma/members')
export class MemberController {
    constructor(private readonly memberService: MemberService) {}

    @Get()
    async findMemberByConditions(@Query(new ValidationPipe()) findMemberDto: FindMemberDto) {
        return await this.memberService.findMemberByConditions(findMemberDto);
    }
}
