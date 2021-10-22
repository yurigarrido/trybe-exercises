-- Exercício 9: Utilizando o EXISTS , selecione o nome e localização dos cinemas que não possuem filmes em cartaz.

SELECT T.name, T.location FROM Pixar.Theater T 
WHERE NOT EXISTS (
	SELECT * FROM Pixar.Movies
    WHERE Movies.theater_id = T.id);