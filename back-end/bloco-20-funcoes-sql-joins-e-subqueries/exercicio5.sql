-- 5. Escreva uma query que exiba quatro informações: o maior salário, o menor salário, 
-- a soma de todos os salários e a média dos salários. Todos os valores devem ser formatados para ter apenas duas casas decimais.

SELECT ROUND(MAX(SALARY),2) AS 'highest_salary', ROUND(MIN(SALARY),2) AS 'lowest_salary', ROUND(SUM(SALARY),2) AS 'total_salary', ROUND(AVG(SALARY),2) AS 'average_salary' FROM hr.employees;