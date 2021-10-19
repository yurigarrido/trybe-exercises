/* exercicioo 7
Exercício 7 : Exclua da tabela Movies todos os filmes dirigidos por "Andrew Staton".
*/
DELETE FROM Pixar.BoxOffice
WHERE movie_id = 2;

DELETE FROM Pixar.Movies
WHERE director = 'Andrew Staton';