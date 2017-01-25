<code>git clone https://github.com/baleyko/tracery.git && cd tracery && docker-compose up -d</code>
vs
<code>docker pull baleyko/tracery:latest && docker run -i -t --env UPSTREAM=http://google.com -p 8080:80 baleyko/tracery:latest</code>
then
<code>curl http://127.0.0.1:8080</code>