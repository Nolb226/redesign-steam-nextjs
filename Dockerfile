
FROM node:20-alpine as base

FROM base as deps

RUN apk add --no-cache libc6-compat

WORKDIR /app

# COPY .npmrc ./
COPY package*.json ./

RUN npm ci

FROM base as builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
# COPY . .

# RUN npx prisma generate
RUN npm run build


FROM base as runner 
COPY --from=builder /app/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# COPY --chown=nextjs:nodejs prisma ./prisma/               
# COPY --chown=nextjs:nodejs docker-bootstrap-app.sh ./

EXPOSE 3000
# RUN chmod +x docker-bootstrap-app.sh
# CMD [ "./docker-bootstrap-app.sh" ]
CMD  ["npm","run","start"]

