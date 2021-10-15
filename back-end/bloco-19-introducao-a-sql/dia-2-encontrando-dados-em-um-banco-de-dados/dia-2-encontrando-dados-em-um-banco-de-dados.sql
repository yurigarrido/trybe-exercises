/* exercício 01 */
SELECT 'This is SQL Exercise, Pratice and Solution';

/* exercício 2 */
SELECT 1, 2, 3;

/* exercício 3 */
SELECT 10 + 15;

/* exercício 4 */
SELECT 10 * 3;

/* exercício 5 */
SELECT * FROM Scientists.Scientists;

/* exercício 6 */
SELECT Name AS 'Nome do projeto', Hours AS 'Tempo de Trabalho' FROM Scientists.Projects;

/* exercício 7 */
SELECT Name FROM Scientists.Scientists
ORDER BY Name;

/* exercício 8 */
SELECT Name FROM Scientists.Projects
ORDER BY Name DESC;

/* exercício 9 */
SELECT CONCAT ('O projeto ', Name, ' precisou de ', Hours, ' horas para ser concluido') FROM Scientists.Projects;

/* exercício 10 */
SELECT Name, Hours FROM Scientists.Projects
ORDER BY Hours DESC LIMIT 3;

/* exercício 11 */
SELECT DISTINCT Project FROM Scientists.AssignedTo;

/* exercício 12 */
SELECT Name FROM Scientists.Projects
ORDER BY Hours DESC LIMIT 1;

/* exercício 13 */
SELECT Name FROM Scientists.Projects
ORDER BY Hours ASC LIMIT 1 OFFSET 2;