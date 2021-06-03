import { CreateIssueInput } from './create-issue.input';
import { InputType, Field, ID, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateIssueInput extends PartialType(CreateIssueInput) {
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

  @Field({nullable: true, description: "Liste d'article de l'issue"})
  articles?: []

}
