/*
  Warnings:

  - You are about to drop the column `status` on the `projects` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_projects" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "deploy" TEXT NOT NULL,
    "repository" TEXT NOT NULL,
    "stacks" TEXT NOT NULL,
    "keywords" TEXT NOT NULL,
    "visibility" TEXT NOT NULL DEFAULT 'visible',
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_projects" ("created_at", "deploy", "description", "id", "image", "keywords", "name", "repository", "stacks") SELECT "created_at", "deploy", "description", "id", "image", "keywords", "name", "repository", "stacks" FROM "projects";
DROP TABLE "projects";
ALTER TABLE "new_projects" RENAME TO "projects";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
