/*
  Warnings:

  - Added the required column `photo_url` to the `Result` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Result" ADD COLUMN     "photo_url" TEXT NOT NULL;
