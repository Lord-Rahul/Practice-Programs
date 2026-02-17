import random 

populationSize=4
geneLength=5
generations=10
mutationRate=0.1

def fitness(x):
    return x*x

def binaryToDecimal(binary):
    return int(binary,2)

def createChromosome():
    return "".join(random.choice('01') for _ in range(geneLength))

population = [createChromosome() for _ in range(populationSize)]

for gen in range (generations):
    
    fitnessValues = []
    for c in population:
        x= binaryToDecimal(c)
        fitnessValues.append(fitness(x))
        
    sortedPop=sorted(
        zip(population,fitnessValues),
        key=lambda x: x[1],
        reverse=True
        
    )
    
    parent1= sortedPop[0][0]
    parent2= sortedPop[1][0]
    
    point = random.randint(1,geneLength-1)
    
    child1 = parent1[:point]+parent2[point:]
    child2 = parent2[:point]+parent1[point:]
    
    def mutate(chromosome):
        new=''
        for bit in chromosome:
            if random.random()<mutationRate:
                new += '1' if bit == '0' else '0'
            else:
                new +=bit
        return new
    
    child1 = mutate(child1)
    child2= mutate(child2)
    
    population=[parent1,parent2 ,child1,child2]
    
    best = max(population,key=lambda c: fitness(binaryToDecimal(c)))
    bestX = binaryToDecimal(best)
    
    print(f'Generation {gen+1}: Best x = {bestX}, Fitness = {fitness(bestX)}')
    
best = max(population, key=lambda c: fitness(binaryToDecimal(c)))
bestX = binaryToDecimal(best)

print('\n Final Answer : ')
print('x = ' ,bestX)
print('x^2 = ' , fitness(bestX))