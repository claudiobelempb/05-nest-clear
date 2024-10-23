import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { CreateQuestion } from '../controllers/question-create.controller'

@Injectable()
export class QuestionCreateService {
  constructor(private readonly prisma: PrismaService) {}

  async execute(
    user: string,
    request: CreateQuestion
  ): Promise<CreateQuestion> {
    const { title, content } = request

    const slug = this.convertToslugify(title)

    return await this.prisma.question.create({
      data: {
        authorId: user,
        title,
        content,
        slug,
        active: true,
      },
      select: {
        id: true,
        title: true,
        content: true,
        slug: true,
        active: true,
        createdAt: true,
      },
    })
  }

  private convertToslugify(title: string): string {
    // Normalize the string to remove accents
    const normalizedText = title
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')

    // Convert to lowercase
    const lowerCaseText = normalizedText.toLowerCase()

    // Replace spaces and special characters with hyphens
    const slug = lowerCaseText
      .replace(/[^a-z0-9\s-]/g, '') // Remove invalid characters
      .trim() // Trim whitespace from both ends
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with a single hyphen

    return slug
  }
}
