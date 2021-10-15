SELECT * from sakila.city;

/* 4 */
/* Analise a tabela city e encontre a tabela à qual a coluna country_id faz referência.*/ 
/* Ela faz referência à tabela country. */

/* 5 */
/* Após resolver o exercício anterior, responda: qual tipo de relacionamento a tabela city faz com a tabela country ? */
/* muitos pra um, uma vez que exitem várias cidades em um unico país */
/* N:1 /*

/* 6 */
/* Qual tipo de relacionamento a tabela country faz com a tabela city ? */
/* um pra muitos, uma vez que dentro de UM aís existem diversas cidades  */
/* 1:N */

/* 7 */
/* Abra tabela por tabela do banco sakila e encontre no mínimo 3 exemplos de um relacionamentos 1:N ou N:1. */
/* store -> staff
language -> film
film -> language */