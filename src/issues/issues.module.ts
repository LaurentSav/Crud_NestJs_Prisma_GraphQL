import { Module } from '@nestjs/common';
import { IssuesService } from './issues.service';
import { IssuesResolver } from './issues.resolver';
import { PrismaService } from 'src/services/prisma.service';

@Module({
  providers: [IssuesResolver, IssuesService, PrismaService]
})
export class IssuesModule {}
