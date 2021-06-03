import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
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

  @Field({nullable: true, description: "Liste d'article de l'issue"})
  articles?: []

}
