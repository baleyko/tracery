'use strict';

const stream = require('stream');
const net    = require('net');
const url    = require('url');

((downstream, upstream, handler) => {
  net.createServer((client) => {
    let server;
    switch (upstream.protocol) {
      case 'http:':
        server = net.connect(upstream.port || 80, upstream.host, () => {
            handler(client, server);
        });
        break;
      case 'unix:':
        server = net.connect(upstream.href, () => {
            handler(client, server);
        });
        break;
      default:
        throw new Error('Protocol is not supported.');
    }
  }).listen(downstream.port);
}) ({'port': 80}, url.parse(process.env.UPSTREAM), (client, server) => {
    const logfile = new stream.PassThrough();

    client.pipe(server).pipe(logfile);
    server.pipe(client).pipe(logfile).on('finish', () => {
        logfile.pipe(process.stdout);
    });
});
