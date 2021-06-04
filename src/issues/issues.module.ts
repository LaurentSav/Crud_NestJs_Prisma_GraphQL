import { Module } from '@nestjs/common';
import { IssuesService } from './issues.service';
import { IssuesResolver } from './issues.resolver';
import { PrismaService } from '../services/prisma.service';

@Module({
  providers: [IssuesResolver, IssuesService, PrismaService],
  exports: [IssuesService, PrismaService]
})
export class IssuesModule {}
