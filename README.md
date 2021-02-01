Descrição:
Teste realizado para nagro a respeito de uma API para cadastro de alunos e cursos, constando uma assosiação entre os mesmos. A API será capaz de:

A API deverá receber informações pessoais do Aluno, como: nome, cpf e data de nascimento.
Esse aluno deveŕá ser vinculado a pelo menos um curso. 
A API deverá ter um endpoint para listar todos os cursos disponíveis.
A API deverá ter um endpoint para filtrar os cursos disponiveis.
A API deverá ter a possibilidade de exclusão de um Aluno.
A API deverá ter a possibilidade de edição de informacões do Aluno. 

app.post('/courses', createcourses)
app.get('/courses', getallcourses)
app.get('/courses/:id', getcoursesbyid)

app.post('/student', createstudent)
app.get('/student', getallstudents)
app.get('/student/:id', getstudentbyid )
app.delete('/student/:id', delstudentbyid)
app.put('/student/:id', editstudentbyid)

