#!/bin/bash 

SESSION_TOKEN="123"
URL="www.google.com"

while :;
do
curl \
  -w "\nreq_time_total: %{time_total} status: %{response_code}\n" \
  -H "authorization: Bearer ${SESSION_TOKEN}" \
  $URL \
  -o /dev/nul \
  -s \
  -m 3;

sleep 5;
done

# -w      - write out some text
# -H      - header
# -o NUL  - ouptup to file. Now avoided by null.TO SEE RESPONSE REMOVE IT.
# -s      - silent mode, doesn't show progress meter or error messages.
# -m      - max-time for request to complete - 3 seconds