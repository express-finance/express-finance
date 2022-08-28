/*
  Warnings:

  - You are about to drop the column `image` on the `User` table. All the data in the column will be lost.
  - Added the required column `email_verified` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "image",
ADD COLUMN     "email_verified" BOOLEAN NOT NULL,
ADD COLUMN     "name" TEXT,
ADD COLUMN     "nickname" TEXT,
ADD COLUMN     "picture" TEXT;
