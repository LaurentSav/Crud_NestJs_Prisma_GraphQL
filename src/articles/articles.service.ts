import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { CreateArticleInput } from './dto/create-article.input';
import { UpdateArticleInput } from './dto/update-article.input';
import { Article } from './entities/article.entity';

@Injectable()
export class ArticlesService {
constructor(private readonly prisma: PrismaService){}

  async create(data: Prisma.ArticleCreateInput){
    return await this.prisma.article.create({
      data
    });
    
  }

  async findAll() {
    return await this.prisma.article.findMany();
  }

  async findOne(id: string){
    return await this.prisma.article.findUnique(
      {
        where: {
          id: id
        }
      }
    )
  }

  async update(id: string, data: Prisma.ArticleUpdateInput) {
    return await this.prisma.article.update({
      data: data,
      where:{
        id: id
      }
    });
  }

  remove(id: string) {
    return this.prisma.article.delete(
      {
        where:{
          id: id
        }
      }
    )
  }
}
