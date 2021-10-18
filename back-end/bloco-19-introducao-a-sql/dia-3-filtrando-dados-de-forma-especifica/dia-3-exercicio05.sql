/* exercício 05
Escreva uma query para exibir o número de empresas (fornecedores) que contém a letra F no código.
*/

SELECT COUNT(name) FROM PecasFornecedores.Fornecedores
WHERE name LIKE '%F%';