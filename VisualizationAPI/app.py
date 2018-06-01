from flask import Flask
from flask import jsonify
from flask import request
from pymongo import MongoClient
from flask_cors import CORS, cross_origin

app = Flask(__name__)
client = MongoClient('mongodb://mongo:27017/', 27017)
# client = MongoClient('localhost', 27017)  # when dev, using this


@app.route('/getHotelsByPosition', methods=['GET'])
def getHotelsByPosition():
    position = request.args.get('position')
    keyword = request.args.get('keyword')
    sortBy = request.args.get('sortBy')
    db = client.ZomatoReviews
    hotels = db.Hotels.find(
        {"Position": int(position), "Name": {"$regex": keyword}})
    output = []
    for s in hotels:
        output.append({
            'HotelName': s['Name'],
            'HotelId': s["HotelId"],
            'Reviews': s["Reviews"],
            'Ratings': s["Ratings"],
            'Url':  s["Url"],
            "Position": s["Position"],
            "CostForTwo": s["CostForTwo"],
            "TypeOfRes": s["TypeOfRes"],
            "Cuisines": s["Cuisines"]
        })
    print(sortBy)
    if sortBy == "0":
        output.sort(key=lambda x: x["HotelName"])
    if sortBy == "2":
        output.sort(key=lambda x: x["Ratings"], reverse=True)
    if sortBy == "1":
        output.sort(key=lambda x: x["Ratings"])
    return jsonify({'results': output})


@app.route('/getSummaryInfo', methods=['GET'])
def getHotel():
    hotelId = request.args.get('hotelId')
    db = client.ZomatoReviews
    hotel = db.Hotels.find_one({"HotelId": hotelId})
    data = {
        "Name": hotel["Name"],
        "Address": hotel["Address"],
        "Ratings": hotel["Ratings"],
        "Reviews": hotel["Reviews"],
        "TypeOfRes": hotel["TypeOfRes"],
        "CostForTwo": hotel["CostForTwo"],
        "Cuisines": hotel["Cuisines"]
    }
    return jsonify({'Data': data})


@app.route('/getZomatoReview', methods=['GET'])
def getZomatoReview():
    db = client.GoogleReviews
    zomatoDb = client.ZomatoReviews
    hotelId = request.args.get('hotelId')
    reviews = zomatoDb.Reviews.find({"HotelId": hotelId})
    output = []
    for s in reviews:
        star = str(s["Star"]).replace("stars", "").replace("star", "")
        avatar = "../assets/images/person-icon.png"
        level = ''
        location = ''
        levelText = ''
        if "UserAvatar" in s:
            avatar = s["UserAvatar"]
        if "UserLevel" in s:
            level = s["UserLevel"]
        if "LevelText" in s:
            levelText = s["LevelText"]
        if "UserLocation" in s:
            location = s["UserLocation"]
        output.append({
            'Name': s["Name"],
            'UserLink':  s["UserLink"],
            'UserLevel':  level,
            'LevelText':  levelText,
            'UserAvatar':  avatar,
            'UserLocation':  location,
            'Review':  s["Review"],
            'Star':  star,
            'PublishDate': s["PublishDate"],
        })
    return jsonify({'Data': output})


if __name__ == '__main__':
    CORS(app)
    app.run(debug=True, host='0.0.0.0', threaded=True, port=5006)
