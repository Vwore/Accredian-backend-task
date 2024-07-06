-- CreateTable
CREATE TABLE `Referral` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `RefererName` VARCHAR(191) NOT NULL,
    `RefererEmail` VARCHAR(191) NOT NULL,
    `RefreeName` VARCHAR(191) NULL,
    `RefreeEmail` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
