import {
  Field,
  ObjectType,
  registerEnumType,
  HideField,
} from '@nestjs/graphql';
import { Post } from './post.model';
import { BaseModel } from './base.model';
import { Article } from 'src/articles/entities/article.entity';
import { Issue } from 'src/issues/entities/issue.entity';

export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
  EDITOR = 'EDITOR'
}

registerEnumType(Role, {
  name: 'Role',
  description: 'User role',
});

@ObjectType()
export class User extends BaseModel {
  email: string;
  firstname?: string;
  lastname?: string;
  role: Role;
  posts: Post[];
  articles: Article[];
  issues: Issue[];
  @HideField()
  password: string;
}
