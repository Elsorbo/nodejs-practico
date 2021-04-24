
FROM node:14.16.1

WORKDIR /usr/app

COPY ["./package.json", "./package-lock.json", "./"]

RUN ["npm", "install"]

CMD ["npm", "run", "dev"]
