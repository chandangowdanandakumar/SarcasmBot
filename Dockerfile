FROM tensorflow/tensorflow
WORKDIR /usr/src/app
COPY . .
WORKDIR /NLP 
COPY requirements.txt requirements.txt
# RUN python3 -m pip install -r requirements.txt
EXPOSE 8000
COPY . .
ENTRYPOINT [ "python3","nlp_2.py"]
# ENTRYPOINT [ "python3","manage.py","runserver","0.0.0.0:8000"]