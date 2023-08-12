/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Result" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "price_history" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "address_line" TEXT NOT NULL,
    "neighborhood_name" TEXT NOT NULL,
    "totalArea" INTEGER NOT NULL,
    "coveredArea" INTEGER NOT NULL,
    "uncoveredArea" INTEGER NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "Result_pkey" PRIMARY KEY ("id")
);
