import pandas as pd

allHospitals = pd.read_csv(r"C:\Users\akhil\Desktop\next-steps-hackathon\app\src\hospitals.csv")
# allHospitals.pop('Procedure.Hip Knee.Quality')
# allHospitals.pop('Procedure.Hip Knee.Cost')
# allHospitals.pop('Procedure.Pneumonia.Value')
# allHospitals.pop('Procedure.Hip Knee.Value')
# allHospitals.pop('Procedure.Pneumonia.Value')
# allHospitals.pop('Procedure.Pneumonia.Cost')
# allHospitals.pop('Procedure.Pneumonia.Quality')
# allHospitals.pop('Procedure.Pneumonia.Value')


hospitalsInState = allHospitals[allHospitals['Facility.State'].str.contains('CA')]

hospitalsInCity = hospitalsInState[allHospitals['Facility.City'].str.contains('Fremont')]

print("\nHospitals in your city:\n",hospitalsInCity)
print("\nMore hospitals in your state:\n",hospitalsInState)
