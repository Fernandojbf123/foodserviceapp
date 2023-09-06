/*
  Warnings:

  - You are about to drop the `kitchenorder` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `kitchenorder`;

-- CreateTable
CREATE TABLE `Kitchen` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `clientName` VARCHAR(191) NOT NULL,
    `date` VARCHAR(191) NOT NULL,
    `total` DOUBLE NOT NULL,
    `order` JSON NOT NULL,
    `status` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
