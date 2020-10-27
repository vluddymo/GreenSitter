FROM openjdk:15

ENV ENVIRONMENT=prod

MAINTAINER Wladislaw Moser <wladi.moser@gmail.com>

ADD backend/target/green-sitter.jar app.jar

CMD ["sh", "-c", "java -Dserver.port=$PORT -Dspring.data.mongodb.uri=$MONGODB_URI -Dapi.auth.token=$API_AUTH_TOKEN -Dcloudinary.url=$CLOUDINARY_URL -jar /app.jar"]
