-- phpMyAdmin SQL Dump
-- version 4.9.6
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 19-03-2021 a las 16:37:16
-- Versión del servidor: 5.7.24
-- Versión de PHP: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `vehiculos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `nombre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `img` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`nombre`, `descripcion`, `img`, `created_at`, `updated_at`) VALUES
('4x4', 'Vehiculos robustos y seguros', '4x4.png', NULL, NULL),
('Deportivos', 'Vehiculos veloces y modernos', 'deportivos.png', NULL, NULL),
('Motocicletas', 'Vehiculos veloces a dos ruedas', 'motocicletas.png', NULL, NULL),
('Sedan', 'Vehiculos amplios', 'sedan.png', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `Codigo` int(11) NOT NULL,
  `Nombre` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Telefono` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `LimiteCredito` double(15,2) NOT NULL,
  `userid` smallint(6) DEFAULT NULL,
  `Direccion` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Ciudad` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Pais` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `CodigoPostal` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`Codigo`, `Nombre`, `Telefono`, `LimiteCredito`, `userid`, `Direccion`, `Ciudad`, `Pais`, `CodigoPostal`, `created_at`, `updated_at`) VALUES
(1, 'DGPRODUCTIONS GARDEN', '5556901745', 3000.00, NULL, 'False Street 52 2 A', 'San Francisco', 'USA', '24006', NULL, NULL),
(3, 'Gardening Associates', '5557410345', 6000.00, NULL, 'Wall-e Avenue', 'Miami', 'USA', '24010', NULL, NULL),
(4, 'Gerudo Valley', '5552323129', 12000.00, 10, 'Oaks Avenue nº22', 'New York', 'USA', '85495', NULL, NULL),
(5, 'Tendo Garden', '55591233210', 600000.00, NULL, 'Null Street nº69', 'Miami', 'USA', '696969', NULL, NULL),
(6, 'Lasas S.A.', '34916540145', 154310.00, NULL, 'C/Leganes 15', 'Fuenlabrada', 'Spain', '28945', NULL, NULL),
(7, 'Beragua', '654987321', 20000.00, NULL, 'C/pintor segundo', 'Madrid', 'España', '28942', NULL, NULL),
(8, 'Club Golf Puerta del hierro', '62456810', 40000.00, NULL, 'C/sinesio delgado', 'Madrid', 'España', '28930', NULL, NULL),
(9, 'Naturagua', '689234750', 32000.00, NULL, 'C/majadahonda', 'Madrid', 'España', '28947', NULL, NULL),
(10, 'DaraDistribuciones', '675598001', 50000.00, NULL, 'C/azores', 'Madrid', 'España', '28946', NULL, NULL),
(11, 'Madrileña de riegos', '655983045', 20000.00, NULL, 'C/Lagañas', 'Madrid', 'España', '28943', NULL, NULL),
(12, 'Lasas S.A.', '34916540145', 154310.00, NULL, 'C/Leganes 15', 'Fuenlabrada', 'Spain', '28945', NULL, NULL),
(13, 'Camunas Jardines S.L.', '34914873241', 16481.00, NULL, 'C/Virgenes 45', 'San Lorenzo del Escorial', 'Spain', '28145', NULL, NULL),
(14, 'Dardena S.A.', '34912453217', 321000.00, NULL, 'C/Nueva York 74', 'Madrid', 'Spain', '28003', NULL, NULL),
(15, 'Jardin de Flores', '654865643', 40000.00, NULL, 'C/ Oña 34', 'Madrid', 'España', '28950', NULL, NULL),
(16, 'Flores Marivi', '666555444', 1500.00, NULL, 'C/Leganes24', 'Fuenlabrada', 'España', '28945', NULL, NULL),
(17, 'Flowers, S.A', '698754159', 3500.00, NULL, 'C/Luis Salquillo4', 'Montornes del valles', 'España', '24586', NULL, NULL),
(18, 'Naturajardin', '612343529', 5050.00, NULL, 'Plaza Magallón 15', 'Madrid', 'España', '28011', NULL, NULL),
(19, 'Golf S.A.', '916458762', 30000.00, NULL, 'C/Estancado', 'Santa cruz de Tenerife', 'España', '38297', NULL, NULL),
(20, 'AYMERICH GOLF MANAGEMENT, SL', '964493072', 20000.00, NULL, 'C/Letardo', 'Barcelona', 'España', '12320', NULL, NULL),
(21, 'Aloha', '916485852', 50000.00, NULL, 'C/Roman 3', 'Canarias', 'España', '35488', NULL, NULL),
(22, 'El Prat', '916882323', 30000.00, NULL, 'Avenida Tibidabo', ' Barcelona', 'España', '12320', NULL, NULL),
(23, 'Sotogrande', '915576622', 60000.00, NULL, 'C/Paseo del Parque', 'Sotogrande', 'España', '11310', NULL, NULL),
(24, 'Vivero Humanes', '654987690', 7430.00, NULL, 'C/Miguel Echegaray 54', 'Humanes', 'España', '28970', NULL, NULL),
(25, 'Fuenla City', '675842139', 4500.00, NULL, 'C/Callo 52', 'Fuenlabrada', 'España', '28574', NULL, NULL),
(26, 'Jardines y Mansiones CACTUS SL', '916877445', 76000.00, NULL, 'Polígono Industrial Maspalomas, Nº52', 'Madrid', 'España', '29874', NULL, NULL),
(27, 'Jardinerías Matías SL', '916544147', 100500.00, NULL, 'C/Francisco Arce, Nº44', 'Madrid', 'España', '37845', NULL, NULL),
(28, 'Agrojardin', '675432926', 8040.00, NULL, 'C/Mar Caspio 43', 'Getafe', 'España', '28904', NULL, NULL),
(29, 'Top Campo', '685746512', 5500.00, NULL, 'C/Ibiza 32', 'Humanes', 'España', '28574', NULL, NULL),
(30, 'Jardineria Sara', '675124537', 7500.00, NULL, 'C/Lima 1', 'Fenlabrada', 'España', '27584', NULL, NULL),
(31, 'Campohermoso', '645925376', 3250.00, NULL, 'C/Peru 78', 'Fuenlabrada', 'España', '28945', NULL, NULL),
(32, 'france telecom', '(33)5120578961', 10000.00, NULL, '6 place d Alleray 15Ã¨me', 'Paris', 'France', '75010', NULL, NULL),
(33, 'Musée du Louvre', '(33)0140205050', 30000.00, NULL, 'Quai du Louvre', 'Paris', 'France', '75058', NULL, NULL),
(35, 'Tutifruti S.A', '2 9261-2433', 10000.00, NULL, 'level 24, St. Martins Tower.-31 Market St.', 'Sydney', 'Australia', '2000', NULL, NULL),
(36, 'FLORES S.L.', '654352981', 6000.00, NULL, 'Avenida España', 'Madrid', 'España', '29643', NULL, NULL),
(37, 'THE MAGIC GARDEN', '926523468', 10000.00, NULL, 'Lihgting Park', 'London', 'United Kingdom', '65930', NULL, NULL),
(38, 'El Jardin Viviente S.L', '2 8005-7161', 8000.00, NULL, '176 Cumberland Street The rocks', 'Sydney', 'Australia', '2003', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `migrations`
--



CREATE TABLE `usuarios` (
  `id` smallint(6) NOT NULL,
  `login` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nombre` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
  `apellidos` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
  `img` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rol` enum('invitado','usuario','gestor','administrador') COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `login`, `password`, `nombre`, `apellidos`, `img`, `rol`, `created_at`, `updated_at`) VALUES
(1, 'antonio@gmail.com', '$2y$10$is56dWiIHe1Wepq3ZHsLKOe0uF6cdfQrVNlRfVxXTezdIYB1zi3gq', 'antonio', 'sanchez', 'antonio.jpg', 'usuario', '2021-02-23 17:37:48', '2021-02-23 17:37:48'),
(2, 'pepe@gmailcom', '$2y$10$OJ5mCLXN6gHeLCFl7H0DNe/cDZLkJcarego45bFJkuefyqdZW.vCK', 'pepe', 'fernandez', 'jose.png', 'usuario', '2021-01-18 20:16:29', '2021-01-18 20:16:29'),
(4, 'gines@gmail.es', '$2y$10$h6gAndTX2FVdBo3uJqs7werr4RfbMQjBI4jgOWNewS.BOaU12wXYS', 'gines', 'fernandez', 'pepe.png', 'usuario', '2021-01-19 06:59:31', '2021-01-19 06:59:31'),
(6, 'gines@gmail.es', '$2y$10$fvE0SGxr.dgQ0GFeUjtfMeMo5Fg8CojsJw7IlGbtK1VzAX86HgGye', 'gines', 'fernandez', 'pepe.png', 'usuario', '2021-01-26 09:58:14', '2021-01-26 09:58:14'),
(10, 'maria@gmail.es', '$2y$10$6sl0Y7coqLw0p8stfn.ws.M6yYlr5032whgBbUdcH3M0Z5R41ZHJa', 'maria', 'fernandez', 'maria.png', 'administrador', '2021-02-14 16:10:51', '2021-02-14 16:10:51'),
(20, 'maria@gmail.es', '$2y$10$sxKpboucTNdj74R4dmekx.JYpPW62jjXXWYSwHGhxcJwVGZZyoS2e', 'maria', 'fernandez', 'maria.png', 'usuario', '2021-02-23 19:35:57', '2021-02-23 19:35:57'),
(30, 'maria@gmail.es', '$2y$10$1A2na4oiuY5s9Tf/P4tqSOfRb2neYvDAZoAqV0Q1AB4SLzgQ.NEw6', 'maria', 'fernandez', 'maria.png', 'usuario', '2021-02-23 19:39:55', '2021-02-23 19:39:55');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vehiculos`
--

CREATE TABLE `vehiculos` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nombre` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `marca` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `categoria` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `img` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Precio` double(10,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `vehiculos`
--

INSERT INTO `vehiculos` (`id`, `nombre`, `marca`, `categoria`, `img`, `Precio`, `created_at`, `updated_at`) VALUES
('1', 'Mustan', 'Ford', 'Deportivos', 'mustan.png', 15810.00, NULL, NULL),
('10', 'R8', 'Audi', 'Deportivos', 'r8.png', 28810.00, NULL, NULL),
('2', 'A5', 'Audi', 'Sedan', 'a5.png', 35510.00, NULL, NULL),
('3', '320', 'BMW', 'Sedan', '320.png', 50000.00, NULL, NULL),
('4', '550', 'Honda', 'Motocicletas', 'h550.png', 12000.00, NULL, NULL),
('5', 'Hayabusa', 'Suzuki', 'Motocicletas', 'hayabusa.png', 8500.00, NULL, NULL),
('6', 'Passat', 'Sedan', 'Volkswagen', 'passat.png', 48810.00, NULL, NULL),
('7', 'Leon', 'Seat', 'Sedan', 'leon.png', 25810.00, NULL, NULL),
('8', 'X5', 'BMW', '4x4', 'x5.png', 48810.00, NULL, NULL),
('9', 'Q7', 'Audi', '4x4', 'q7.png', 48810.00, NULL, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`nombre`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`Codigo`),
  ADD KEY `clientes_userid_foreign` (`userid`);

--
-- Indices de la tabla `migrations`
--

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `vehiculos`
--
ALTER TABLE `vehiculos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `vehiculos_categoria_foreign` (`categoria`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `migrations`
--


--
-- AUTO_INCREMENT de la tabla `oauth_personal_access_clients`
--

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD CONSTRAINT `clientes_userid_foreign` FOREIGN KEY (`userid`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `vehiculos`
--
ALTER TABLE `vehiculos`
  ADD CONSTRAINT `vehiculos_categoria_foreign` FOREIGN KEY (`categoria`) REFERENCES `categorias` (`nombre`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
