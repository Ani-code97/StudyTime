-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 21, 2020 at 09:41 AM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.2.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `studytime`
--

-- --------------------------------------------------------

--
-- Table structure for table `studyinfo`
--

CREATE TABLE `studyinfo` (
  `id` int(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(25) NOT NULL,
  `message` varchar(500) NOT NULL,
  `dt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `studyinfo`
--

INSERT INTO `studyinfo` (`id`, `name`, `email`, `message`, `dt`) VALUES
(0, '', '', '', '2020-08-20 11:06:51'),
(8, '', 'ac@', '', '2020-08-20 11:13:40'),
(9, 'Urmila Roy', 'royu9286@gmail.com', 'I want to learn to code...', '2020-08-20 20:00:58'),
(10, 'Urmila Roy', 'royu9286@gmail.com', 'Aap 8th class mein 11th class ka pdha rhe hain...', '2020-08-20 20:03:34');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `studyinfo`
--
ALTER TABLE `studyinfo`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `studyinfo`
--
ALTER TABLE `studyinfo`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
