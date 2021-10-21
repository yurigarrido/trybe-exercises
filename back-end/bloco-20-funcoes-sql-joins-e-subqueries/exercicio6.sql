-- 6. Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras ( IT_PROG ).

SELECT JOB_ID, COUNT(*) AS 'number_of_programmers' FROM hr.employees
WHERE JOB_ID = 'IT_PROG';