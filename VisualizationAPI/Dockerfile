FROM python:3.6       
ADD . /google-reviews-api
WORKDIR /google-reviews-api

RUN pip install -r requirements.txt
ENTRYPOINT ["python", "app.py"]
