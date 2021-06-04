-- AlterTable
ALTER TABLE "Article" ADD COLUMN     "authorId" TEXT;

-- AlterTable
ALTER TABLE "Issue" ADD COLUMN     "authorId" TEXT;

-- AddForeignKey
ALTER TABLE "Article" ADD FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Issue" ADD FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
