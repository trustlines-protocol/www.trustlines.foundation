# Build image with:
#
#   docker build . -t preview.trustlines.foundation
#
# Then run
#
#  docker run -p 8080:80 --rm -it preview.trustlines.foundation
#
# and go to http://localhost:8080

FROM nginx
COPY dist/ /usr/share/nginx/html
