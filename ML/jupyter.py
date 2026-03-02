import numpy as np
from sklearn.naive_bayes import GaussianNB

X = np.array([[1, 20],
              [2, 21],
              [3, 22],
              [6, 25],
              [7, 26],
              [8, 27]])

y = np.array([0, 0, 0, 1, 1, 1])
model = GaussianNB()
model.fit(X, y)
test = np.array([[4, 23]])
prediction = model.predict(test)
print("Predicted Class:", prediction[0])

