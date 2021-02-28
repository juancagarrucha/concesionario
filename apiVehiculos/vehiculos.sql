-- phpMyAdmin SQL Dump
-- version 4.9.6
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 13-02-2021 a las 17:22:54
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

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`nombre`, `descripcion`, `img`, `created_at`, `updated_at`) VALUES
('Deportivos', 'Vehiculos veloces y modernos', 'deportivos.png', NULL, NULL),
('Sedan', 'Vehiculos amplios', 'sedan.png', NULL, NULL),
('Motocicletas', 'Vehiculos veloces a dos ruedas', 'motocicletas.png', NULL, NULL),
('4x4', 'Vehiculos robustos y seguros', '4x4.png', NULL, NULL);

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`Codigo`, `Nombre`, `Telefono`, `LimiteCredito`, `userid`, `Direccion`, `Ciudad`, `Pais`, `CodigoPostal`, `created_at`, `updated_at`) VALUES
(1, 'DGPRODUCTIONS GARDEN', '5556901745', 3000.00, NULL, 'False Street 52 2 A', 'San Francisco', 'USA', '24006', NULL, NULL),
(3, 'Gardening Associates', '5557410345', 6000.00, NULL, 'Wall-e Avenue', 'Miami', 'USA', '24010', NULL, NULL),
(4, 'Gerudo Valley', '5552323129', 12000.00, NULL, 'Oaks Avenue nº22', 'New York', 'USA', '85495', NULL, NULL),
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

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `login`, `password`, `nombre`, `apellidos`, `img`, `rol`, `created_at`, `updated_at`) VALUES
(2, 'pepe@gmailcom', '$2y$10$OJ5mCLXN6gHeLCFl7H0DNe/cDZLkJcarego45bFJkuefyqdZW.vCK', 'pepe', 'fernandez', 'jose.png', 'usuario', '2021-01-18 21:16:29', '2021-01-18 21:16:29'),
(4, 'gines@gmail.es', '$2y$10$h6gAndTX2FVdBo3uJqs7werr4RfbMQjBI4jgOWNewS.BOaU12wXYS', 'gines', 'fernandez', 'pepe.png', 'usuario', '2021-01-19 07:59:31', '2021-01-19 07:59:31'),
(6, 'gines@gmail.es', '$2y$10$fvE0SGxr.dgQ0GFeUjtfMeMo5Fg8CojsJw7IlGbtK1VzAX86HgGye', 'gines', 'fernandez', 'pepe.png', 'usuario', '2021-01-26 10:58:14', '2021-01-26 10:58:14');
--
-- Volcado de datos para la tabla `vehiculos`
--

INSERT INTO `vehiculos` (`id`, `nombre`, `marca`, `categoria`, `img`, `Precio`, `created_at`, `updated_at`) VALUES
('1', 'Mustan', 'Ford', 'Deportivos', 'mustan.png', 48810.00, NULL, NULL),
('10', 'R8', 'Audi', 'Deportivos', 'r8.png', 48810.00, NULL, NULL),
('2', 'A5', 'Audi', 'Deportivos', 'a5.png', 45510.00, NULL, NULL),
('3', '320', 'BMW', 'Sedan', '320.png', 50000.00, NULL, NULL),
('4', '550', 'Honda', 'Motocicletas', 'h550.png', 35000.00, NULL, NULL),
('5', 'Hayabusa', 'Suzuki', 'Motocicletas', 'hayabusa.png', 40500.00, NULL, NULL),
('6', 'Passat', 'Sedan', 'Volkswagen', 'passat.png', 48810.00, NULL, NULL),
('7', 'Leon', 'Seat', 'Sedan', 'leon.png', 48810.00, NULL, NULL),
('8', 'X5', 'BMW', '4x4', 'x5.png', 48810.00, NULL, NULL),
('9', 'Q7', 'Audi', '4x4', 'q7.png', 48810.00, NULL, NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
