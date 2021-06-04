import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { IssuesService } from './issues.service';
import { Issue } from './entities/issue.entity';
import { CreateIssueInput } from './dto/create-issue.input';
import { UpdateIssueInput } from './dto/update-issue.input';
import { ArticlesService } from 'src/articles/articles.service';

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
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.issuesService.findOne(id);
  }

  @Mutation(() => Issue)
  updateIssue(@Args('updateIssueInput') updateIssueInput: UpdateIssueInput) {
    return this.issuesService.update(updateIssueInput.id, updateIssueInput);
  }

  @Mutation(() => Issue)
  removeIssue(@Args('id', { type: () => String }) id: string) {
    return this.issuesService.remove(id);
  }

  @Mutation(() => Issue)
  addArticlePost(@Args('idIssue', { type: () => String }) issueId: string, @Args('idArticle', { type: () => String }) articleId: string) {
    return this.issuesService.addArticle(issueId, articleId);
  }

  @Mutation(() => Issue)
  removeArticlePost(@Args('idIssue', { type: () => String }) issueId: string, @Args('idArticle', { type: () => String }) articleId: string) {
    return this.issuesService.removeArticle(issueId, articleId);
  }

}
