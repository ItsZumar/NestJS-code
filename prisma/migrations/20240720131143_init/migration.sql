-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ENGINEER', 'INTERN', 'ADMIN');

-- CreateTable
CREATE TABLE "Emplpoyee" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Emplpoyee_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Emplpoyee_name_key" ON "Emplpoyee"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Emplpoyee_email_key" ON "Emplpoyee"("email");
