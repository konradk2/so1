import csv
import sys
import json

with open(sys.argv[1], 'r') as csvfile:
    rows = csv.reader(csvfile, delimiter=',', quotechar='"')
    header = rows.__next__()
    j = [dict(zip(header, row)) for row in rows]
    with open(sys.argv[2], 'w') as jsonfile:
        json.dump(j, jsonfile)
