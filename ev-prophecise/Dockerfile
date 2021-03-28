FROM tiangolo/uvicorn-gunicorn-fastapi:python3.8

COPY ./app /app

WORKDIR /app

RUN apt-get -y update  && apt-get install -y \
  apt-utils \
  build-essential \
  wget \
&& rm -rf /var/lib/apt/lists/*

RUN pip3 install --upgrade setuptools
RUN pip3 install cython
RUN pip3 install numpy
RUN pip3 install pandas
RUN pip3 install matplotlib
RUN pip3 install pystan
RUN pip3 install -r requirements.txt
RUN pip3 install fastapi
RUN pip3 install pydantic
