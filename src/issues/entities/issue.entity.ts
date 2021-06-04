import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Article } from '../../articles/entities/article.entity';
import { User } from '../../models/user.model';

@ObjectType('Issue')
export class Issue {
  @Field(type => ID, {description: 'Id'})
  id: string;

  @Field({nullable: true, description: "Date de création de l'issue"})
  createdAt?: Date;

  @Field({nullable: true, description: "Date de mise à jour de l'issue"})
  updatedAt?: Date;

  @Field({nullable: true, description: "Publication de l'issue"})
  published?: boolean

  @Field({nullable: true, description: "Archivation de l'issue"})
  archived?: boolean

  @Field(() => [Article], {nullable: 'itemsAndList', description: "Liste d'article de l'issue"})
  articles: Article[]

  @Field(() => [User], {nullable: true, description: "Auteur de l'article"})
  author?: User

  @Field({nullable: true, description: "Id de l'auteur"})
  authorId?: string
}
