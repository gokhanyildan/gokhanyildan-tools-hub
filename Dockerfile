# Base image olarak hafif Alpine Linux kullanıyoruz
FROM node:20-alpine

# Çalışma dizini
WORKDIR /app

# Bağımlılıkları yükle
COPY package*.json ./
RUN npm install

# Kaynak kodları kopyala
COPY . .

# Uygulamayı derle (Production Build)
RUN npm run build

# Next.js varsayılan portu
EXPOSE 3000

# Uygulamayı başlat
CMD ["npm", "start"]