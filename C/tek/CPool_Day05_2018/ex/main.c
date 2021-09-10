#include <stdio.h>
#include <stdlib.h>

int my_compute_factorial_it (int a)
{
	int z = 1;
	int x = 1;
	if (a < 0)
		return 0;
	while (x < a)
	{
		z = z * (x + 1);
		printf("Valeur de x = %d\nvaleur de Z = %d\n", x, z);
		x++;
	}
	return z;
}

int main(int argc, char **argv)
{
	int nb;
	nb = atoi(argv[1]);
	printf("Factorielle de %d vaut %d\n", nb, my_compute_factorial_it(nb));
	return 0;
}
