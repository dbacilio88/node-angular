#/app /usr /lib
####### STAGE: DEV DEPS ######
FROM node:19-alpine3.16 AS dev-deps
# cd app
WORKDIR /app
#copy files package.json /app
COPY package.json package.json
#install dependencies
RUN yarn install --frozen-lockfile

####### STAGE: BUILDER ######
FROM node:19-alpine3.16 AS builder
# cd app
WORKDIR /app
#copy files to stage before
COPY --from=dev-deps /app/node_modules ./node_modules
#copy files
COPY . .
#test running
RUN yarn build

####### STAGE: BUILDER ######
FROM nginx:1.23.3 AS prod
#expose port 80
EXPOSE 80
#copy files
COPY --from=builder /app/dist/node-angular /usr/share/nginx/html
#remove config default
RUN rm /etc/nginx/conf.d/default.conf
#copy assets images statics resources
#COPY assets/ /usr/share/nginx/html/assets
#copy config  custom
COPY nginx/nginx.conf /etc/nginx/conf.d/
#command for image execution
CMD ["nginx", "-g", "daemon off;"]
