/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `question` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "question_slug_key" ON "question"("slug");
