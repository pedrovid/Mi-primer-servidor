FROM node
MAINTAINER Pedro Vidal
RUN git clone https://github.com/pedrovid/Mi-primer-servidor.git
ENV HOME /root
ENTRYPOINT cd Mi-primer-servidor
CMD node app2.js 
