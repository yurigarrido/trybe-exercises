-- Exercício 1: Utilizando o INNER JOIN , encontre as vendas nacionais ( domestic_sales ) e internacionais ( international_sales ) de cada filme.

SELECT A.movie_id AS 'id_film', A.domestic_sales, B.international_sales FROM Pixar.BoxOffice AS A
INNER JOIN Pixar.BoxOffice AS B
ON A.movie_id = B.movie_id;