import { Controller, Post, Body, Param, Get } from '@nestjs/common';
import { CommentsService } from './comments.service';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  async create(@Body('content') content: string, @Body('postId') postId: string, @Body('authorId') authorId: string) {
    return this.commentsService.createComment(content, postId, authorId);
  }

  @Get('post/:postId')
  async getCommentsByPost(@Param('postId') postId: string) {
    return this.commentsService.findByPostId(postId);
  }
}
