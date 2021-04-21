
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 04/18/2021 23:09:17
-- Generated from EDMX file: C:\Users\Rubén\source\repos\proyecto-g1c-tursarg-dev-team\Proyecto TursArg\TursArg\Models\Model1.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [BDTursArg];
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------


-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[USUARIOS]', 'U') IS NOT NULL
    DROP TABLE [dbo].[USUARIOS];
GO
IF OBJECT_ID(N'[dbo].[CIUDADES]', 'U') IS NOT NULL
    DROP TABLE [dbo].[CIUDADES];
GO

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'USUARIOS'
CREATE TABLE [dbo].[USUARIOS] (
    [idUsuario] int IDENTITY(1,1) NOT NULL,
    [urlFotoUsuario] varchar(100)  NULL,
    [nombreUsuario] varchar(50)  NULL,
    [nombre] varchar(50)  NULL,
    [apellido] varchar(50)  NULL,
    [telefono] bigint  NULL,
    [email] varchar(100)  NULL,
    [contrasenia] varchar(260)  NULL,
    [rolAdmin] bit  NULL,
    [Token] varchar(250)  NULL
);
GO

-- Creating table 'CIUDADES'
CREATE TABLE [dbo].[CIUDADES] (
    [codPostal] int IDENTITY(1,1) NOT NULL,
    [descripcionCiudad] varchar(100)  NULL,
    [nombreCiudad] varchar(50)  NULL,
    [urlUbicacionCiudad] varchar(150)  NULL,
    [urlfotoCiudad1] varchar(150)  NULL,
    [urlfotoCiudad2] varchar(150)  NULL,
    [urlfotoCiudad3] varchar(150)  NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [idUsuario] in table 'USUARIOS'
ALTER TABLE [dbo].[USUARIOS]
ADD CONSTRAINT [PK_USUARIOS]
    PRIMARY KEY CLUSTERED ([idUsuario] ASC);
GO

-- Creating primary key on [codPostal] in table 'CIUDADES'
ALTER TABLE [dbo].[CIUDADES]
ADD CONSTRAINT [PK_CIUDADES]
    PRIMARY KEY CLUSTERED ([codPostal] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------