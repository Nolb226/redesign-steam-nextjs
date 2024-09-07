-- CreateTable
CREATE TABLE `App` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `release_date` DATETIME(3) NOT NULL,
    `required_age` INTEGER NOT NULL DEFAULT 0,
    `background` VARCHAR(191) NOT NULL,
    `price` DOUBLE NOT NULL,
    `dlc_count` INTEGER NOT NULL,
    `detailed_description` VARCHAR(191) NOT NULL,
    `about_the_game` VARCHAR(191) NOT NULL,
    `short_description` VARCHAR(191) NOT NULL,
    `reviews` VARCHAR(191) NOT NULL,
    `header_image` VARCHAR(191) NOT NULL,
    `website` VARCHAR(191) NOT NULL,
    `support_url` VARCHAR(191) NOT NULL,
    `support_email` VARCHAR(191) NOT NULL,
    `windows` BOOLEAN NOT NULL,
    `mac` BOOLEAN NOT NULL,
    `linux` BOOLEAN NOT NULL,
    `recommendations` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Language` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Publisher` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Developer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tag` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Genre` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Spec` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(191) NOT NULL,
    `appId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Review` (
    `userId` VARCHAR(191) NOT NULL,
    `appId` INTEGER NOT NULL,
    `posted_time` DATETIME(3) NOT NULL,
    `recommend` BOOLEAN NOT NULL,
    `review_content` VARCHAR(191) NOT NULL,
    `yes_vote` INTEGER NOT NULL,
    `no_vote` INTEGER NOT NULL,
    `funny_vote` INTEGER NOT NULL,
    `award_vote` INTEGER NOT NULL,

    PRIMARY KEY (`userId`, `appId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PlayedGame` (
    `userId` VARCHAR(191) NOT NULL,
    `appId` INTEGER NOT NULL,
    `play_time` INTEGER NOT NULL,
    `last_played` DATETIME(3) NOT NULL,

    PRIMARY KEY (`userId`, `appId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `profile_name` VARCHAR(191) NOT NULL,
    `real_name` VARCHAR(191) NULL,
    `custom_url` VARCHAR(191) NULL,
    `country` VARCHAR(191) NOT NULL,
    `avatar_url` VARCHAR(191) NOT NULL,
    `summary` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_AppToTag` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_AppToTag_AB_unique`(`A`, `B`),
    INDEX `_AppToTag_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_AppToGenre` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_AppToGenre_AB_unique`(`A`, `B`),
    INDEX `_AppToGenre_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_AppToLanguage` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_AppToLanguage_AB_unique`(`A`, `B`),
    INDEX `_AppToLanguage_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_App_Publisher` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_App_Publisher_AB_unique`(`A`, `B`),
    INDEX `_App_Publisher_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_App_Developer` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_App_Developer_AB_unique`(`A`, `B`),
    INDEX `_App_Developer_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_UserFriends` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_UserFriends_AB_unique`(`A`, `B`),
    INDEX `_UserFriends_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Spec` ADD CONSTRAINT `Spec_appId_fkey` FOREIGN KEY (`appId`) REFERENCES `App`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AppToTag` ADD CONSTRAINT `_AppToTag_A_fkey` FOREIGN KEY (`A`) REFERENCES `App`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AppToTag` ADD CONSTRAINT `_AppToTag_B_fkey` FOREIGN KEY (`B`) REFERENCES `Tag`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AppToGenre` ADD CONSTRAINT `_AppToGenre_A_fkey` FOREIGN KEY (`A`) REFERENCES `App`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AppToGenre` ADD CONSTRAINT `_AppToGenre_B_fkey` FOREIGN KEY (`B`) REFERENCES `Genre`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AppToLanguage` ADD CONSTRAINT `_AppToLanguage_A_fkey` FOREIGN KEY (`A`) REFERENCES `App`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AppToLanguage` ADD CONSTRAINT `_AppToLanguage_B_fkey` FOREIGN KEY (`B`) REFERENCES `Language`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_App_Publisher` ADD CONSTRAINT `_App_Publisher_A_fkey` FOREIGN KEY (`A`) REFERENCES `App`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_App_Publisher` ADD CONSTRAINT `_App_Publisher_B_fkey` FOREIGN KEY (`B`) REFERENCES `Publisher`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_App_Developer` ADD CONSTRAINT `_App_Developer_A_fkey` FOREIGN KEY (`A`) REFERENCES `App`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_App_Developer` ADD CONSTRAINT `_App_Developer_B_fkey` FOREIGN KEY (`B`) REFERENCES `Developer`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_UserFriends` ADD CONSTRAINT `_UserFriends_A_fkey` FOREIGN KEY (`A`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_UserFriends` ADD CONSTRAINT `_UserFriends_B_fkey` FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
