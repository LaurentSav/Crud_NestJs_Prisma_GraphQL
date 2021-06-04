import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Issue } from '../../issues/entities/issue.entity';
import { User } from '../../models/user.model';

@ObjectType('Article')
export class Article {
  
  @Field(type => ID, {description: 'Id'})
  id: string;

  @Field({nullable: true, description: "Titre de l'article"})
  title?: string;

  @Field({nullable: true, description: "Contenu de l'article"})
  content?: string;

  @Field({nullable: true, description: "Temps de lecture d'un article l'article"})
  reading_time?: number;

  @Field({nullable: true, description: "Date de création de l'article"})
  createdAt?: Date;

  @Field({nullable: true, description: "Date de mise à jour de l'article"})
  updatedAt?: Date;

  @Field({nullable: true, description: "Publication de l'article"})
  published?: boolean

  @Field({nullable: true, description: "Archivation de l'article"})
  archived?: boolean

  @Field(() => [Issue], {nullable: true, description: "Issue de l'article"})
  issue?: Issue

  @Field({nullable: true, description: "Id de l'issue"})
  issueId?: string
  
  @Field(() => [User], {nullable: true, description: "Auteur de l'article"})
  author?: User

  @Field({nullable: true, description: "Id de l'auteur"})
  authorId?: string
}
