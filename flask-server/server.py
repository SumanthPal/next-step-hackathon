from flask import Flask, request
import json

app = Flask(__name__)


def filter_results(city, state):

    file = open("../app/public/bed_data.json")
    data = json.load(file)

    results = {"HOSPITALS": []}

    for hospital in data["features"]:
        if hospital["properties"]['s'].lower() == state.lower() and hospital["properties"]['c'].lower() == city.lower():
            results["HOSPITALS"].append({
                "Name": hospital["properties"]['n'],
                "Location": hospital["properties"]['a'],
                "City": hospital["properties"]['c'],
                "State": hospital["properties"]['s'],
                "Inpatient beds used": hospital["properties"]['bc'],
                "ICU beds used": hospital["properties"]['ic'],
                "Coordinates": hospital["geometry"]["coordinates"]
            })

    return results


@app.route("/results")
def results():

    if request.method == "POST":

        city = request.form.get("inputRef2")
        state = request.form.get("inputRef")

        return filter_results(city, state)
    return None


if __name__ == "__main__":
    app.run(debug=True)
