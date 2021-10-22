-- Exercício 6: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem os títulos dos filmes que possuem avaliação maior que 7.5.

-- USANDO SUBQUERIES
SELECT title FROM Pixar.Movies
WHERE id IN 
	(SELECT movie_id FROM Pixar.BoxOffice WHERE rating > 7.5);
    
-- USANDO INNER JOIN 

SELECT M.title FROM Pixar.Movies M 
INNER JOIN Pixar.BoxOffice B
ON B.movie_id = M.id
WHERE B.rating > 7.5;