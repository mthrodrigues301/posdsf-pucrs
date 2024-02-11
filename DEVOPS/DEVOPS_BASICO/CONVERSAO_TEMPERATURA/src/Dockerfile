## adicionare versao, para garantir que novas versoes n quebrem o programa
FROM node:18.15.0
## cria diretorio de trabalho
WORKDIR /app
## copia arquivos do programa para o diretorio atual /app
COPY package*.json ./
RUN npm install
## copia o resto da solucao para o diretorio /app
COPY . .
EXPOSE 8080
CMD ["node", "server.js"] 