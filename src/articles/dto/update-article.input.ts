import { CreateArticleInput } from './create-article.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';
import { Issue } from 'src/issues/entities/issue.entity';

@InputType()
export class UpdateArticleInput extends PartialType(CreateArticleInput) {
  @Field()
  id: string;

  @Field({nullable: true, description: "Titre de l'article"})
  title?: string;

  @Field({nullable: true, description: "Contenu de l'article"})
  content?: string;

  @Field({nullable: true, description: "Temps de lecture d'un article l'article"})
  reading_time?: number;

  @Field({nullable: true, description: "Date de mise à jour de l'article"})
  updatedAt?: Date;

  @Field({nullable: true, description: "Publication de l'article"})
  published?: boolean

  @Field({nullable: true, description: "Archivation de l'article"})
  archived?: boolean

  @Field(type => ID, {nullable: true, description: "Id de l'issue"})
  issueId?: string
}
