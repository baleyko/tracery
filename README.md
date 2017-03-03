# Tracery - nano tcp proxy server that outputs all the request and response data to stdout.

You can pass TCP socket address as an upstream for this proxy.

```shell
$ git clone https://github.com/baleyko/tracery.git && cd tracery && docker-compose up
```

either

```shell
$ docker run -it --rm --env UPSTREAM=google.com:80 -p 8080:80 baleyko/tracery:latest
```

and try

```shell
curl http://YOUR_DOCKER_MACHINE_IP:8080</code>
```
