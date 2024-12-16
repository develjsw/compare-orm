import { IsOptional, IsString } from 'class-validator';

export class FindMemberDto {
    @IsOptional()
    @IsString()
    memberName: string;

    @IsOptional()
    @IsString()
    nickName: string;

    @IsOptional()
    @IsString()
    tel: string;

    @IsOptional()
    @IsString()
    email: string;

    // 테스트 용도로 camelCase가 아닌 snakeCase사용
    @IsOptional()
    @IsString()
    member_status: string;
}
