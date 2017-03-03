'use strict';

const stream = require('stream');
const net    = require('net');
const url    = require('url');

const upstream = url.parse(process.env.UPSTREAM);

net.createServer((client) => {
  let server = net.connect(upstream.port || 80, upstream.host, () => {
    const logfile = new stream.PassThrough();
    client.pipe(server).pipe(logfile);
    server.pipe(client).pipe(logfile).on('finish', () => {
      logfile.pipe(process.stdout);
    });
  });
}).listen(80);
