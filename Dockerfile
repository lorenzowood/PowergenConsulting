FROM httpd
COPY . /usr/local/apache2/htdocs
COPY ./my-httpd.conf /usr/local/apache2/conf/httpd.conf

