/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   main.c                                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Bfleury <bfleury@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2016/02/29 16:23:02 by Bfleury           #+#    #+#             */
/*   Updated: 2016/03/01 00:41:46 by Bfleury          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "main.h"

int		main(void)
{
	int n;

	n = 5;
	printf("n = %i\n\nft_ft(n)\n", n);
	ft_ft(&n);
	printf("\nn = %i\n", n);
	return (0);
}
