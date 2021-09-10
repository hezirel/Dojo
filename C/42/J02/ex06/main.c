/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   main.c                                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Bfleury <bfleury@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2016/02/29 12:40:00 by Bfleury           #+#    #+#             */
/*   Updated: 2016/02/29 15:44:27 by Bfleury          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "main.h"

int		ft_putchar(char c)
{
	return (write(1, &c, 1));
}

void	test(int i)
{
	printf("ft_putnbr(%i) :   ", i);
	printf((i >= 0) ? " /" : "/");
	printf("      printf(%i) :\n                ", i);
	ft_putnbr(i);
	printf((i >= 0) ? " /" : "/");
	printf("      %i\n", i);
}

int		main(void)
{
	test(0);
	test(+0);
	test(-0);
	printf("\n\n///////////////////////////////////////////////////////\n\n\n");
	test(5);
	test(+5);
	test(-5);
	printf("\n\n///////////////////////////////////////////////////////\n\n\n");
	test(42);
	test(+42);
	test(-42);
	printf("\n\n///////////////////////////////////////////////////////\n\n\n");
	test(770);
	test(+770);
	test(-770);
	printf("\n\n///////////////////////////////////////////////////////\n\n\n");
	test(2147483647);
	test(+2147483647);
	test(-2147483647);
	printf("\n\n///////////////////////////////////////////////////////\n\n\n");
	test(2147483648);
	test(+2147483648);
	test(-2147483648);
	return (0);
}