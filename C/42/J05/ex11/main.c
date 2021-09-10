/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   main.c                                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Bfleury <bfleury@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2016/02/29 09:41:20 by Bfleury           #+#    #+#             */
/*   Updated: 2016/03/02 07:53:45 by Bfleury          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "main.h"

void	test(char *str)
{
	printf("ft_str_is_uppercase(%s) => %i\n", str, ft_str_is_uppercase(str));
}

int		main(void)
{
	test("HELLO");
	printf("________________________________________\n\n");
	test("Hello");
	printf("________________________________________\n\n");
	test("HELLO WORLD");
	printf("________________________________________\n\n");
	test("HELLO2");
	printf("________________________________________\n\n");
	test("HELLO.");
	printf("________________________________________\n\n");
	test("");
	return (0);
}
