import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TodoDocument = Todo & Document;

@Schema()
export class Todo {
  @Prop({ require: true })
  title: string;

  @Prop()
  description?: string;

  @Prop()
  completedAt?: Date;

  @Prop({ require: true })
  createAt?: Date;

  @Prop()
  deletedAt?: Date;
}
export const TodoSchema = SchemaFactory.createForClass(Todo);
