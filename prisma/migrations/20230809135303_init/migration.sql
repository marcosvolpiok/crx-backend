-- CreateTable
CREATE TABLE "Search" (
    "id" SERIAL NOT NULL,
    "priceMin" INTEGER NOT NULL,
    "priceMax" INTEGER NOT NULL,
    "rooms" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "Search_pkey" PRIMARY KEY ("id")
);
