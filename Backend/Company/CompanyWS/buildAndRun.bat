@echo off
call mvn clean package
call docker build -t com.mycompany/CompanyWS .
call docker rm -f CompanyWS
call docker run -d -p 9080:9080 -p 9443:9443 --name CompanyWS com.mycompany/CompanyWS