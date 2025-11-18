graph = [
    [0, 10, 15, 30],
    [10, 0, 35, 25],
    [15, 35, 0, 30],
    [20, 25, 30, 0]
]

num_cities = len(graph)
start = 0
visited = [False] * num_cities
visited[start] = True

path = [start]
total_distance = 0
current_city = start

for _ in range(num_cities - 1):
    nearest_city = None
    min_distance = float('inf')

    for city in range(num_cities):
        if not visited[city] and graph[current_city][city] < min_distance:
            min_distance = graph[current_city][city]
            nearest_city = city

    path.append(nearest_city)
    visited[nearest_city] = True
    total_distance += min_distance
    current_city = nearest_city

# Return to start
total_distance += graph[current_city][start]
path.append(start)

print("Path:", path)
print("Total Distance:", total_distance)
