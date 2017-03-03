#!/bin/sh
set -e

exec socat -dddd -v TCP-LISTEN:80,bind=0.0.0.0,reuseaddr,fork TCP:$UPSTREAM
