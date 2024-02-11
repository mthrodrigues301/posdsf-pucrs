## docker build -t <nome do container> -f Dockerfile .
## docker build -t <nome da conta hub.docker>/<nome do container>:<tag de versao> -f Dockerfile .
## docker containar run -it <nome do container>

FROM ubuntu
RUN apt update
## para utilizar o comando 'ifconfig'
RUN apt install net-tools --yes
RUN apt install vim --yes
RUN apt install curl --yes

## rodar sem cache
## RUN apt update && apt install net-tools --yes && apt install vim --yes && apt install curl --yes