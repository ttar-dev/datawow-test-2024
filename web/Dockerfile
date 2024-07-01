FROM --platform=linux/amd64 node:20.11.1-alpine3.19 AS build
WORKDIR /app
COPY package.json package.json
RUN yarn

FROM --platform=linux/amd64 node:20.11.1-alpine3.19 AS release
RUN addgroup -S appgroup && adduser -S appuser -G appgroup --home /app
USER appuser
WORKDIR /app
COPY --from=build --chown=appuser:appgroup /app /app
COPY --chown=appuser:appgroup . .

ENV NEXT_PUBLIC_API_URL=http://api:4200

RUN yarn build
EXPOSE 3000