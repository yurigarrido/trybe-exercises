SELECT CONCAT(A.nome, 'é cuidada por ', C.nome) AS 'tal bixo é cuidado por'  FROM Zoologica.Animal A
INNER JOIN Zoologica.cuidadores C
ON A.id_animal = C.id_animais_supervisionados;