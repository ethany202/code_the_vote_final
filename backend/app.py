from flask import Flask, render_template, request, jsonify
from flask_cors import CORS



def parse_string(str):
    val_user = 0
    for num in str:
        val_user += int(num)
    if val_user>=32:
        return("./components/TrumpResult.js")
    elif val_user>=26:
        return("./components/SteinResult.js")
    elif val_user>=16:
        return("./components/KennedyResult.js")
    else:
        return("./components/BidenResult.js")
    

def generate_result(score):
    score = int(score)
    if score>=32:
        return "Trump"
    elif score>=26:
        return "Stein"
    elif score>=16:
        return "Kennedy"
    else:
        return "Biden"
    
app = Flask(__name__)
CORS(app)

@app.route("/home", methods=["POST", "GET"])
def home():
    if request.method=="GET":
        print("GET REQUEST")
        return render_template("home.html")
    elif request.method=="POST":
        print("POST REQUEST")


@app.route("/send-responses", methods=["POST"])
def sendResponses():
    #answers = request.form.get("answers")
    #print(answers)
    response = request.get_json()
    answers = response['answers']
    #"POST SUCCESS"
    print(generate_result(answers))
    return jsonify({"results": generate_result(answers)})


if __name__ == "__main__":
    app.run(debug=True)

