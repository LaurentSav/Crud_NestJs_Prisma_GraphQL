import { InputType, Int, Field } from '@nestjs/graphql';
import { Article } from 'src/articles/entities/article.entity';

@InputType()
export class CreateIssueInput {
  
  @Field({nullable: true, description: "Date de création de l'issue"})
  createdAt?: Date;

  @Field({nullable: true, description: "Publication de l'issue"})
  published?: boolean

  @Field({nullable: true, description: "Archivation de l'issue"})
  archived?: boolean



}
