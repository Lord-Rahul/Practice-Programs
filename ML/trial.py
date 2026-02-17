import random

population_size = 4
gene_length = 5
generations = 10
mutation_rate = 0.1

def fitness(x):
    return x * x


def binary_to_decimal(binary):
    return int(binary, 2)


def create_chromosome():
    return ''.join(random.choice('01') for _ in range(gene_length))

population = [create_chromosome() for _ in range(population_size)]

for gen in range(generations):


    fitness_values = []
    for c in population:
        x = binary_to_decimal(c)
        fitness_values.append(fitness(x))

    
    sorted_pop = sorted(
        zip(population, fitness_values),
        key=lambda x: x[1],
        reverse=True
    )

    parent1 = sorted_pop[0][0]
    parent2 = sorted_pop[1][0]

    point = random.randint(1, gene_length-1)

    child1 = parent1[:point] + parent2[point:]
    child2 = parent2[:point] + parent1[point:]

    def mutate(chromosome):
        new = ""
        for bit in chromosome:
            if random.random() < mutation_rate:
                new += '1' if bit == '0' else '0'
            else:
                new += bit
        return new

    child1 = mutate(child1)
    child2 = mutate(child2)


    population = [parent1, parent2, child1, child2]


    best = max(population, key=lambda c: fitness(binary_to_decimal(c)))
    best_x = binary_to_decimal(best)

    print(f"Generation {gen+1}: Best x = {best_x}, Fitness = {fitness(best_x)}")


best = max(population, key=lambda c: fitness(binary_to_decimal(c)))
best_x = binary_to_decimal(best)

print("\nFinal Answer:")
print("x =", best_x)
print("x^2 =", fitness(best_x))