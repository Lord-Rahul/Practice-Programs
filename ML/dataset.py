import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import plotly.express as px
import plotly.graph_objects as go
import os
from collections import Counter
import warnings
warnings.filterwarnings("ignore")

df = pd.read_csv("tmdb_movies.csv")

df.head()

print(df.head())
print(df.tail())
print(df.info())
