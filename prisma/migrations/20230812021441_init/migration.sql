/*
  Warnings:

  - Added the required column `bot_id` to the `Result` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Result" ADD COLUMN     "bot_id" INTEGER NOT NULL;
