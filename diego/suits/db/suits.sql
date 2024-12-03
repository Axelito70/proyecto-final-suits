-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 03, 2024 at 07:36 AM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `suits`
--

-- --------------------------------------------------------

--
-- Table structure for table `menu_dia`
--

CREATE TABLE `menu_dia` (
  `id` int NOT NULL,
  `nombre_platillo` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `componentes` text COLLATE utf8mb4_general_ci NOT NULL,
  `fecha_agregado` date NOT NULL,
  `imagen_url` varchar(255) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `menu_dia`
--

INSERT INTO `menu_dia` (`id`, `nombre_platillo`, `precio`, `componentes`, `fecha_agregado`, `imagen_url`) VALUES
(4, 'papas', 60.00, 'papas con chile ', '2024-12-17', 'https://img-global.cpcdn.com/recipes/f2ac46bb6c0b4872/680x482cq70/papas-calduditas-con-chile-rojo-y-queso-panela-foto-principal.jpg'),
(5, 'papas', 20.00, 'chiles rellenos con chichi', '2222-02-22', 'https://mylatinatable.com/wp-content/uploads/2016/05/chiles-rellenos-2-1024x674.jpg'),
(6, 'Pozole', 50.00, 'Carne de pollo o de cerdo', '2024-12-03', 'https://www.gastrolabweb.com/u/fotografias/m/2023/8/8/f1280x720-50878_182553_5050.jpg'),
(7, 'Sopa', 30.00, 'Salsa de tomate', '2024-12-03', 'https://mmmole.com/wp-content/uploads/2021/10/sopa-de-fideo-5-1.jpg'),
(8, 'Pizza', 100.00, 'Hawaiana, peperoni, tres carnes', '2024-12-03', 'https://rosadito.mx/cdn/shop/articles/pizza-1700097118380_f06b285e-8bf9-4b73-a7ce-1d4c98825cb2_1200x.jpg?v=1701974679');

-- --------------------------------------------------------

--
-- Table structure for table `t_producto`
--

CREATE TABLE `t_producto` (
  `id_producto` int NOT NULL,
  `producto` varchar(200) COLLATE utf8mb4_general_ci NOT NULL,
  `precio` decimal(10,0) NOT NULL,
  `unidades` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `t_producto`
--

INSERT INTO `t_producto` (`id_producto`, `producto`, `precio`, `unidades`) VALUES
(22, 'leche', 15, 6);

-- --------------------------------------------------------

--
-- Table structure for table `t_usuario`
--

CREATE TABLE `t_usuario` (
  `id_usuario` int NOT NULL,
  `nombre` varchar(200) COLLATE utf8mb4_general_ci NOT NULL,
  `apellido` varchar(200) COLLATE utf8mb4_general_ci NOT NULL,
  `usuario` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `password` text COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `t_usuario`
--

INSERT INTO `t_usuario` (`id_usuario`, `nombre`, `apellido`, `usuario`, `password`) VALUES
(28, 'axel', 'sanchez', 'depredadorr70@gmail.com', '$2y$10$eoGB.U3lP/GWdqUgkg6wfuswJnOU7uz85r5WXt6Gi.JoctC5jzWSK'),
(29, 'Misael', 'Juarez ', 'misael2745@gmail.com', '$2y$10$qbxqlabfB5zoRCarY7H4DOrxOGAsnntqz8/nGLJz.BfcGzPW1ohqu');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `menu_dia`
--
ALTER TABLE `menu_dia`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `t_producto`
--
ALTER TABLE `t_producto`
  ADD PRIMARY KEY (`id_producto`);

--
-- Indexes for table `t_usuario`
--
ALTER TABLE `t_usuario`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `menu_dia`
--
ALTER TABLE `menu_dia`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `t_producto`
--
ALTER TABLE `t_producto`
  MODIFY `id_producto` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `t_usuario`
--
ALTER TABLE `t_usuario`
  MODIFY `id_usuario` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
