CREATE TABLE Gerentes (
	id_gerente INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(30) NOT NULL,
    supervisiona INT NOT NULL,
    FOREIGN KEY (supervisiona) REFERENCES cuidadores (cuidador_id));