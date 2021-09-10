/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_str_is_numeric.c                                :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Bfleury <bfleury@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2016/02/29 04:40:53 by Bfleury           #+#    #+#             */
/*   Updated: 2016/03/02 07:41:06 by Bfleury          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "main.h"

int		ft_str_is_numeric(char *str)
{
	while (*str++)
		if (!(*(str - 1) >= '0' && *(str - 1) <= '9'))
			return (0);
	return (1);
}