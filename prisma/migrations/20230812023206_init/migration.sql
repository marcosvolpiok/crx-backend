/*
  Warnings:

  - You are about to drop the column `status` on the `Result` table. All the data in the column will be lost.
  - Added the required column `status_id` to the `Result` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Result" DROP COLUMN "status",
ADD COLUMN     "status_id" TEXT NOT NULL;
