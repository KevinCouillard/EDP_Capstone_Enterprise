import csv
import random
from datetime import datetime, timedelta
import json
from faker import Faker

# Generate data for 50 characters
NUM_ROWS = 1000

# Create the CSV file
OUTPUT_FILE = "employee_data.csv"

#Set up faker object
fake = Faker()

# Generate data rows
data_rows = []
for i in range(1, NUM_ROWS + 1):
    # Generate random values for each column
    employee_id = i
    name = fake.name()
    phone = fake.phone_number()
    job_role = random.choice(
        ["Security", "Project Manager", "Custodian", "Human Resources", 
         "Marketing", "Administrative Assistant", "Branch Manager", 
         "Accountant", "Data Analyst", "Graphic Designer", "Database Developer",
         "Chief Information Officer", "CEO", "Actuary", "Information Technology",
         "Telemarketing Representative", "Administrative Specialist", 
         "Recruiter", "Secretary", "General Manager", "Operations Manager",
         "Executive Director", "Maintenance Worker", "Quality Assurance", 
         "Network Engineer", "Mechanical Engineer", "Civil Engineer", "Industrial Engineer"
         "Software Engineer", "Marketing Inter", "SEO", "Communications Specialist"]
    )
    work_location = random.choice(
        ["San Francisco, California", "Austin, Texas", "Rowley, North Carolina",
         "Hartford, Connecticut", "Boston, Massachusetts", "Chicago, Illinois", 
         "Tampa Bay, Florida", "Washington, DC", "London, UK", "Syndney, Australia",
         "Tokyo, Japan"]
    )
    salary = random.randint(30000, 250000)

    # Create the data row
    data_row = [
        employee_id,
        name,
        phone,
        job_role,
        work_location,
        salary
    ]

    # Add the data row to the list
    data_rows.append(data_row)

# Write the data to the CSV file
with open(OUTPUT_FILE, "w", newline="") as file:
    writer = csv.writer(file)
    writer.writerow(
        ["employee_id", "name", "phone", "job_role", "work_location", "salary"]
    )
    writer.writerows(data_rows)

print("Data generation complete.")