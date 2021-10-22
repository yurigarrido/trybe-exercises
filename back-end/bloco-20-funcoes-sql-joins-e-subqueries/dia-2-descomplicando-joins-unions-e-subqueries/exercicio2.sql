-- Exercício 2: Utilizando o INNER JOIN , faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais ( international_sales ) do que vendas nacionais ( domestic_sales ).

SELECT A.title, B.international_sales, B.domestic_sales FROM Pixar.Movies AS A
INNER JOIN Pixar.BoxOffice AS B
ON B.movie_id = A.id
WHERE B.international_sales > B.domestic_sales;

