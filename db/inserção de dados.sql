insert into `la_vie`.`psicologo` (nome, email, senha, apresentacao) 
	values 
		('teste', 'teste02@gmail.com', '444', 'sou o psicologo de teste 02'),
        ('teste3', 'teste03@gmail.com', '777', 'sou o psicologo de teste 03'),
        ('teste4', 'teste04@gmail.com', '999', 'sou o psicologo de teste 04'),
		('teste5', 'teste05@gmail.com', '124', 'sou o psicologo de teste 05'),
        ('teste6', 'teste06@gmail.com', '987', 'sou o psicologo de teste 06')
;

insert into `la_vie`.`paciente` (nome, email, data_nascimento) 
	values 
		('Mariana', 'mariana01@gmail.com', '1993/05/01'),
		('Florinda', 'florinda02@gmail.com', '1985/04/07'),
		('Chiquinha', 'chiquinha01@gmail.com', '1975/10/29'),
		('Clotilde', 'clotilde01@gmail.com', '1950/02/02'),
		('Pópis', 'popis01@gmail.com', '1997/07/27')
;

insert into `la_vie`.`atendimento` (paciente_id, data_atendimento, observacao, psicologo_id) 
	values 
		('2', '2022/03/10', 'este paciente vai ficar feliz em breve', '3'),
        ('4', '2022/01/19', 'este paciente foi atendido rapidamente', '1'),
        ('5', '2022/04/13', 'este paciente encontra-se em uma fase bem melhor', '5')
;

	