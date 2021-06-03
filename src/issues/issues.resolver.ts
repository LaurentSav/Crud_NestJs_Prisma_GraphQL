import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { IssuesService } from './issues.service';
import { Issue } from './entities/issue.entity';
import { CreateIssueInput } from './dto/create-issue.input';
import { UpdateIssueInput } from './dto/update-issue.input';

@Resolver(() => Issue)
export class IssuesResolver {
  constructor(private readonly issuesService: IssuesService) {}

  @Mutation(() => Issue)
  createIssue(@Args('createIssueInput') createIssueInput: CreateIssueInput) {
    return this.issuesService.create(createIssueInput);
  }

  @Query(() => [Issue], { name: 'issues' })
  findAll() {
    return this.issuesService.findAll();
  }

  @Query(() => Issue, { name: 'issue' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.issuesService.findOne(id);
  }

  @Mutation(() => Issue)
  updateIssue(@Args('updateIssueInput') updateIssueInput: UpdateIssueInput) {
    return this.issuesService.update(updateIssueInput.id, updateIssueInput);
  }

  @Mutation(() => Issue)
  removeIssue(@Args('id', { type: () => Int }) id: number) {
    return this.issuesService.remove(id);
  }
}