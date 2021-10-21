-- 10. Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários. Dica: agrupe pelo department_id .

SELECT AVG(SALARY)'average_salary',
 DEPARTMENT_ID,
 COUNT(*) 'total_func'
FROM hr.employees
GROUP BY DEPARTMENT_ID
HAVING `total_func` > 10;
