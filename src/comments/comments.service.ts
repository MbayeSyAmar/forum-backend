import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comment } from './schemas/comments.schema';

@Injectable()
export class CommentsService {
  constructor(@InjectModel(Comment.name) private commentModel: Model<Comment>) {}

  async createComment(content: string, postId: string, authorId: string): Promise<Comment> {
    const author = authorId || 'anonyme';
    const newComment = new this.commentModel({ content, postId, authorId: author });
    return newComment.save();
  }

  async findByPostId(postId: string): Promise<Comment[]> {
    return this.commentModel.find({ postId }).exec();
  }
}
