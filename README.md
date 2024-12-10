## ORM 비교

- TypeORM vs Prisma


- TypeORM Official Page - [https://typeorm.io](https://typeorm.io)
- Prisma ORM Official Page - [https://www.prisma.io](https://www.prisma.io)


- 사전 준비
  - (공통)
      - 환경변수 사용을 위한 `dotenv` 패키지 설치
      - mysql DB 사용을 위한 `mysql2` 패키지 설치
  - TypeORM
    - TypeORM 설정을 위한 `@nestjs/typeorm` 패키지 설치
    - entity 설정을 위한 `typeorm` 패키지 설치
  - Prisma ORM
    - Prisma 설정을 위한 `prisma` 패키지 설치
    - Prisma 모델 타입 생성을 위한 `@prisma/client` 패키지 설치
    - 초기 설정을 위한 `$ npx prisma init` 명령어 실행
    - `.env` 파일에 DB Connection URL 정보 입력
    - `$ npx prisma db pull` 명령어로 기존 데이터베이스에서 schema.prisma 모델 자동 생성
    - `$ npx prisma generate` 명령어로 schema.prisma 기반으로 자동 타입 생성


### TypeORM vs Prisma 비교

| **항목**           | **TypeORM**                    | **Prisma**                                                                                           |
|------------------|--------------------------------|-----------------------------------------------------------------------------------------------------|
| **TimeZone 설정**  | 가능 (`timezone` 옵션 지원)          | 불가능 (별도의 middleware 구현 필요)                                                               |
| **코드 간결성**       | 상대적으로 복잡함 (레포지토리 패턴 등 코드 추가 필요) | 높은 추상화 수준으로 코드가 간결함 (예: 트랜잭션 처리, 레포지토리 레이어 생략 가능)                 |
| **개발 속도 / 유지보수** | 변경 반영 및 타입 생성 수작업 필요           | `npx prisma db pull`로 DB 변경사항 자동 반영, `npx prisma generate`로 타입 자동 생성 가능            |
| **타입 안정성**       | 직접 정의 필요 (릴레이션 타입 수작업)         | 자동 타입 생성 (릴레이션 타입 포함)으로 컴파일 단계에서 오류 발견 가능, 런타임 오류 감소             |
| **초기 설정 복잡도**    | 복잡 (엔티티 및 데이터베이스 매핑 수작업 필요)    | 간단 (스키마 기반 자동 모델 및 타입 생성)                                                           |
| **레포지토리 레이어**    | 기본적으로 사용                       | 불필요 (직접적인 쿼리 실행 가능)                                                                   |
| **성능**           | 효율적 (1차 캐시 및 쿼리 최적화 지원)         | 효율적이나, 대규모 트래픽 처리 시 성능 비교 필요                                                |
| **트랜잭션 관리**      | QueryRunner를 활용해 수동 구현 필요      | 기본 제공 (`prisma.$transaction`)                                                                  |

### 요약
- **TypeORM** - 유연성과 타임존 설정 등 데이터베이스와의 밀접한 작업에 강점 존재
- **Prisma** - 추상화, 자동화로 코드 작성 및 유지보수를 간소화하고, 타입 안정성을 통해 안정적인 개발 가능
