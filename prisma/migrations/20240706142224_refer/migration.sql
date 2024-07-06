/*
  Warnings:

  - You are about to drop the column `email` on the `referral` table. All the data in the column will be lost.
  - You are about to drop the column `message` on the `referral` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `referral` table. All the data in the column will be lost.
  - Added the required column `RefererEmail` to the `Referral` table without a default value. This is not possible if the table is not empty.
  - Added the required column `RefererName` to the `Referral` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `referral` DROP COLUMN `email`,
    DROP COLUMN `message`,
    DROP COLUMN `name`,
    ADD COLUMN `RefererEmail` VARCHAR(191) NOT NULL,
    ADD COLUMN `RefererName` VARCHAR(191) NOT NULL,
    ADD COLUMN `RefreeEmail` VARCHAR(191) NULL,
    ADD COLUMN `RefreeName` VARCHAR(191) NULL;
