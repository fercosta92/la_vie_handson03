insert into `la_vie`.`psicologo` (nome, email, senha, apresentacao) 
	values 
		('teste2', 'teste02@gmail.com', '$2a$10$c04NjSmYFXwKGKIUspL.EuuorMJlFGChlWNqG130yWD5kpT/9FKOC', 'sou o psicologo de teste 02'), -- senhateste2
        ('teste3', 'teste03@gmail.com', '$2a$10$lSg1g98Nz3x7p9slMKscJOifRsArxp/3ueN/47mgSHjxFBqGWB9U.', 'sou o psicologo de teste 03'), -- enhateste3
        ('teste4', 'teste04@gmail.com', '$2a$10$AXnK6BAR1Gti3PzG66s5e.uD3UuseiuIJk8C4rf7xDLvHjK/G0dLu', 'sou o psicologo de teste 04'), -- senhateste4
		('teste5', 'teste05@gmail.com', '$2a$10$TukGe/GAeA8FVRB625S2nO/2pz1639LQPCvx2IKOrwuoS3GIQxtIK', 'sou o psicologo de teste 05'), -- senhateste5
        ('teste6', 'teste06@gmail.com', '$2a$10$/6xMNbbRPf7ED7qSvWEnVOcqE7N/KxFW8RoKLxO7VEJ0sjau6feme', 'sou o psicologo de teste 06')  -- senhateste6
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

	