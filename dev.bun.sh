#!/usr/bin/env bun
entry="./src/app.ts";
bun --port=9431 --env-file=./env/.env.local --watch $entry