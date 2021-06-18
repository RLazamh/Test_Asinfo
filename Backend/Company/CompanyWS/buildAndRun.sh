#!/bin/sh
mvn clean package && docker build -t com.mycompany/CompanyWS .
docker rm -f CompanyWS || true && docker run -d -p 9080:9080 -p 9443:9443 --name CompanyWS com.mycompany/CompanyWS