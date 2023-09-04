/*
  Warnings:

  - You are about to drop the column `foodorder` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `order` table. All the data in the column will be lost.
  - Added the required column `clientName` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `order` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `order` DROP COLUMN `foodorder`,
    DROP COLUMN `name`,
    ADD COLUMN `clientName` VARCHAR(191) NOT NULL,
    ADD COLUMN `order` JSON NOT NULL;
