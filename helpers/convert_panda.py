import string, math, sys, os

file_path = "D:/Dropbox/PhD/Projects/MyWebSpace/pq/"

# import all circuit data from file
panda_file = open(file_path + "panda")
panda = {}

for line in panda_file:
    values = line.rstrip('\r\n').split(',')
    mag = float(values[1]) * 4
    angle = float(values[2])
    if angle > 180.0:
        angle = angle - 360
    panda[int(values[0])] = (mag, angle)
    print int(values[0]), mag

panda_file.close()
