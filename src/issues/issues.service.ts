import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
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
    return this.prisma.issue.findMany({
      include: {
        articles: true
      }
    });
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
      data: {
        ...updateIssueInput,
      },
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

  addArticle(issueId: string, articleId: string){
    this.prisma.article.update({
      data: {
        issue: {connect: {id: issueId}}
      },
      where:{
        id: articleId
      }
    })

    return this.prisma.issue.update({
      data: {
        articles:{connect: {id: articleId}},
      },
      where:{
        id: issueId
      },
      include: {
        articles: true
      }
    })
  }

  removeArticle(issueId: string, articleId: string){
    this.prisma.article.update({
      data: {
        issue: {disconnect: true}
      },
      where:{
        id: articleId
      }
    })

    return this.prisma.issue.update({
      data: {
        articles:{disconnect: {id: articleId}},
      },
      where:{
        id: issueId
      },
      include: {
        articles: true
      }
    })
  }

  publish(issueId: string){
    return this.prisma.issue.update({
      data: {
        published: true,
        archived: false,
      },
      where:{
        id: issueId
      },
      include: {
        articles: true
      }
    })
  }

  archive(issueId: string){
    return this.prisma.issue.update({
      data: {
        published: false,
        archived: true,
      },
      where:{
        id: issueId
      },
      include: {
        articles: true
      }
    })
  }

}
