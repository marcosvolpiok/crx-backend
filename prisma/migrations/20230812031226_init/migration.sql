/*
  Warnings:

  - You are about to drop the column `photo_url` on the `Result` table. All the data in the column will be lost.
  - Added the required column `photoUrl` to the `Result` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Result" DROP COLUMN "photo_url",
ADD COLUMN     "photoUrl" TEXT NOT NULL;
