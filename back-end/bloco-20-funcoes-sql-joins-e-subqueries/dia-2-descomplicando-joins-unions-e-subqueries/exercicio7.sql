-- Exercício 7: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem as avaliações dos filmes lançados depois de 2009.

-- USANDO SUBQUERY
SELECT rating FROM Pixar.BoxOffice
WHERE movie_id IN ( 
	SELECT id FROM Pixar.Movies
    WHERE year > 2009);
	
-- USANDO INNER JOIN
SELECT B.rating FROM Pixar.BoxOffice B 
INNER JOIN Pixar.Movies M 
ON B.movie_id = M.id
WHERE M.year > 2009;