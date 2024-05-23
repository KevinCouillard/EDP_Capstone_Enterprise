import csv
import json

csvfile = open('employee_data.csv', 'r')
jsonfile = open('employee_data.json', 'w')

fieldnames = ("employee_id","name","phone","job_role","work_location","salary")
reader = csv.DictReader( csvfile, fieldnames)
for row in reader:
    json.dump(row, jsonfile)
    jsonfile.write('\n')