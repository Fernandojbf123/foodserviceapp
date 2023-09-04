/*
  Warnings:

  - You are about to drop the column `clientName` on the `order` table. All the data in the column will be lost.
  - Added the required column `name` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `order` DROP COLUMN `clientName`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;
