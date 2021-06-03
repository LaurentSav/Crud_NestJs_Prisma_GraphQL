import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesResolver } from './articles.resolver';
import { PrismaService } from 'src/services/prisma.service';

@Module({
  providers: [ArticlesResolver, ArticlesService, PrismaService]
})
export class ArticlesModule {}
