import { InputType, Int, Field, ID } from '@nestjs/graphql';
import { Issue } from 'src/issues/entities/issue.entity';

@InputType()
export class CreateArticleInput {

  @Field({nullable: true, description: "Titre de l'article"})
  title?: string;

  @Field({nullable: true, description: "Contenu de l'article"})
  content?: string;

  @Field({nullable: true, description: "Temps de lecture d'un article l'article"})
  reading_time?: number;

  @Field({nullable: true, description: "Date de création de l'article"})
  createdAt?: Date;

  @Field({nullable: true, description: "Publication de l'article"})
  published?: boolean

  @Field({nullable: true, description: "Archivation de l'article"})
  archived?: boolean
  
  @Field(type => ID, {nullable: true, description: "Id de l'issue"})
  issueId?: string
}
