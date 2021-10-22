-- 3. Escreva uma query que exiba a média salarial de cada JOB_ID , ordenando pela média salarial em ordem decrescente.
SELECT JOB_ID, AVG(SALARY) AS 'media_salarial'  FROM hr.employees
GROUP BY JOB_ID ORDER BY `media_salarial` DESC;