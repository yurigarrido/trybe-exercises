-- Exercício 8: Utilizando o EXISTS , selecione o nome e localização dos cinemas que possuem filmes em cartaz.

SELECT T.name, T.location FROM Pixar.Theater T
WHERE EXISTS (
	SELECT M.theater_id FROM Pixar.Movies M
    INNER JOIN Pixar.Theater T
    ON M.theater_id = T.id);
    
-- OUTRA ALTERNATIVA

SELECT T.name, T.location FROM Pixar.Theater T 
WHERE EXISTS (
	SELECT * FROM Pixar.Movies
    WHERE Movies.theater_id = T.id);