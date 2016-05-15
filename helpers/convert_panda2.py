import string, math, sys, os, json

file_path = "D:/Dropbox/PhD/Projects/MyWebSpace/pq/"

# import all circuit data from file
panda_file = open(file_path + "panda-dc-supply")
panda = {}

lines = []

for line in panda_file:
    lines = line.rstrip('\r\n').split('/')

for line in lines:
    h = line.rstrip('\r\n').split(',')
    num = int(h[0])
    mag = float(h[1]) / 2   # roughly normalise magnitudes
    angle = float(h[2])
    if angle > 180.0:
        angle = angle - 360
    if mag > 0:
        seq = 'Processing.data.SEQ.POS'
        if num % 3 == 2:
            seq = 'Processing.data.SEQ.NEG'
        elif num % 3 == 0:
            seq = 'Processing.data.SEQ.ZERO'

        panda[num] = {'freq': num * 50.0,
                    'mag': mag,
                    'phase': angle,
                    'sequence' : seq,
                    'interharmonic': 'false'}
        # print int(h[0]), mag, angle

for h in panda:
    pass

print json.dumps(panda)

panda_file.close()
