import { Injectable } from '@nestjs/common';
import { UpdateArticleInput } from 'src/articles/dto/update-article.input';
import { PrismaService } from 'src/services/prisma.service';
import { CreateIssueInput } from './dto/create-issue.input';
import { UpdateIssueInput } from './dto/update-issue.input';

@Injectable()
export class IssuesService {

  constructor(private readonly prisma: PrismaService){}

  create(createIssueInput: CreateIssueInput) {
    return this.prisma.issue.create({
      data: createIssueInput
    })
  }

  findAll() {
    return this.prisma.issue.findMany();
  }

  findOne(id: string) {
    return this.prisma.issue.findUnique({
      where: {
        id: id
      }
    })
  }

  update(id: string, updateIssueInput: UpdateIssueInput) {
    return this.prisma.issue.update({
      data: UpdateArticleInput,
      where:{
        id: id
      }
    })
  }

  remove(id: string) {
    return this.prisma.issue.delete({
      where:{
        id: id
      }
    })
  }
}
