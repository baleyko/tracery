FROM alpine:3.5

RUN apk -U add socat

COPY docker-entrypoint.sh /
RUN chmod a+x /docker-entrypoint.sh

WORKDIR /app
EXPOSE 80

ENTRYPOINT ["/docker-entrypoint.sh"]
