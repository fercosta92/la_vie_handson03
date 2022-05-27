CREATE TABLE paciente (
	id INT PRIMARY KEY auto_increment,
  	nome VARCHAR(50) NOT NULL,
  	email VARCHAR(150) NOT NULL,
  	data_nascimento DATE NOT NULL
);

CREATE TABLE psicologo (
	id INT PRIMARY KEY auto_increment,
  	nome VARCHAR(50) NOT NULL,
  	email VARCHAR(150) NOT NULL,
  	senha VARCHAR(30) NOT NULL,
  	apresentacao VARCHAR(255) NOT NULL
);

CREATE TABLE atendimento (
	id INT PRIMARY KEY auto_increment,
 	paciente_id INT NOT NULL,
  	data_atendimento DATE NOT NULL,
  	observacao VARCHAR(255) NOT NULL,
    psicologo_id INT NOT NULL,
  	CONSTRAINT FK_PacienteAtendimento FOREIGN KEY (paciente_id) REFERENCES paciente(id) ON DELETE CASCADE,
  	CONSTRAINT FK_PsicologoAtendimento FOREIGN KEY (psicologo_id) REFERENCES psicologo(id) ON DELETE CASCADE
);