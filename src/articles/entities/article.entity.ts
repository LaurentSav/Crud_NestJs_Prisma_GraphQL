import { ObjectType, Field, ID } from '@nestjs/graphql';
import { User } from 'src/models/user.model';

@ObjectType()
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
  
}
