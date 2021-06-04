import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../services/prisma.service';
import { IssuesResolver } from './issues.resolver';
import { IssuesService } from './issues.service';

describe('IssuesResolver', () => {
  let resolver: IssuesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IssuesResolver, IssuesService, PrismaService],
    }).compile();

    resolver = module.get<IssuesResolver>(IssuesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
