@echo off
echo "XXXXXXXXXX-¹¤¾ß"

set LIB=D:\aliexpress-alibaba-bin\lib
set CLASSPATH=%LIB%
set CLASSPATH=%CLASSPATH%;%LIB%\aliexpress-api-1.0.0.jar
set CLASSPATH=%CLASSPATH%;%LIB%\commons-codec-1.9.jar
set CLASSPATH=%CLASSPATH%;%LIB%\commons-httpclient-3.1.jar
set CLASSPATH=%CLASSPATH%;%LIB%\commons-logging-1.2.jar
set CLASSPATH=%CLASSPATH%;%LIB%\dbwrapper-1.0.0.jar
set CLASSPATH=%CLASSPATH%;%LIB%\ebean-2.8.1.jar
set CLASSPATH=%CLASSPATH%;%LIB%\fastjson-1.2.17.jar
set CLASSPATH=%CLASSPATH%;%LIB%\httpclient-4.5.2.jar
set CLASSPATH=%CLASSPATH%;%LIB%\httpcore-4.4.4.jar
set CLASSPATH=%CLASSPATH%;%LIB%\junit-3.8.1.jar
set CLASSPATH=%CLASSPATH%;%LIB%\log4j-1.2.17.jar
set CLASSPATH=%CLASSPATH%;%LIB%\mysql-connector-java-5.1.35.jar
set CLASSPATH=%CLASSPATH%;%LIB%\persistence-api-1.0.jar
set CLASSPATH=%CLASSPATH%;%LIB%\poi-3.9.jar
set CLASSPATH=%CLASSPATH%;%LIB%\slf4j-api-1.7.21.jar
set CLASSPATH=%CLASSPATH%;%LIB%\slf4j-log4j12-1.7.21.jar


java -classpath %CLASSPATH% com.tvc.css.Bootstrap run.bat