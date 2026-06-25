ALTER TABLE `users` ADD `create_at` timestamp DEFAULT (now());--> statement-breakpoint
ALTER TABLE `users` ADD `update_at` timestamp DEFAULT (now());--> statement-breakpoint
ALTER TABLE `threads` ADD `create_at` timestamp DEFAULT (now());--> statement-breakpoint
ALTER TABLE `threads` ADD `update_at` timestamp DEFAULT (now());--> statement-breakpoint
ALTER TABLE `messages` ADD `create_at` timestamp DEFAULT (now());--> statement-breakpoint
ALTER TABLE `messages` ADD `update_at` timestamp DEFAULT (now());