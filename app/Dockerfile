# Step 1: Base image lo - matlab Node.js already installed wala system lo
FROM node:18-alpine

# Step 2: Container ke andar ek folder mein kaam karo
WORKDIR /usr/src/app

# Step 3: Pehle package.json copy karo
COPY package.json ./

# Step 4: Dependencies install karo
RUN npm install

# Step 5: Baaki sara code copy karo
COPY . .

# Step 6: Batao ke app port 3000 use karegi
EXPOSE 3000

# Step 7: Container start hone par ye command chalao
CMD ["node", "app.js"]
