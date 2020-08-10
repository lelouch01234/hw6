/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50730
 Source Host           : localhost:3306
 Source Schema         : exercise

 Target Server Type    : MySQL
 Target Server Version : 50730
 File Encoding         : 65001

 Date: 11/08/2020 00:14:05
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for exercise
-- ----------------------------
DROP TABLE IF EXISTS `exercise`;
CREATE TABLE `exercise` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `reps` int(11) DEFAULT NULL,
  `weight` int(255) DEFAULT NULL,
  `date` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `unit` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of exercise
-- ----------------------------
BEGIN;
INSERT INTO `exercise` VALUES (1, 'test', 1, 11, '01-01-2020', 'kg');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
