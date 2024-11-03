// src/posts/schemas/post.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Post extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  content: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ type: [String] }) // Liste des réponses (id des réponses pour cet exemple)
  replies: string[];
}

export const PostSchema = SchemaFactory.createForClass(Post);
