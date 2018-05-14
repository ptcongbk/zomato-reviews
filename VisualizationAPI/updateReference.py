from pymongo import MongoClient
from flask_cors import CORS, cross_origin

client = MongoClient('localhost', 27017)
db = client.GoogleReviews
yelpDb = client.YelpReviews
tripAdDb = client.TripAdvisorReviews
hotelNames = []
# change ratings wrong in google and remove duplicate
hotels = list(db.Hotels.find())
for s in hotels:
    db.Hotels.update({"HotelId": s["HotelId"]}, {"$set": {"Ratings": str(s["Ratings"])[:3]}})
    if s["Name"] in hotelNames:
        db.Hotels.delete_one({"_id": s["_id"]})
    hotelNames.append(s["Name"])


hotels = list(db.Hotels.find({"YelpId": {"$ne":  None}}))
for s in hotels:
    print(s["HotelId"])
    yelpDb.Hotels.find_one_and_update({"HotelId": s["YelpId"]},{'$set': {'GoogleId': s["HotelId"]}})

hotels = list(db.Hotels.find({"TripAdvisorId": {"$ne":  None}}))
for s in hotels:
    print(s["HotelId"])
    tripAdDb.Hotels.find_one_and_update({"HotelId": s["TripAdvisorId"]},{'$set': {'GoogleId': s["HotelId"]}})
