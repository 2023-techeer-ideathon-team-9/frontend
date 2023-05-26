# Node.js 이미지를 사용합니다.
FROM node

# 작업 디렉토리를 설정합니다.
WORKDIR /app
COPY . /app/

# 호스트 시스템의 package.json과 package-lock.json을 컨테이너의 작업 디렉토리로 복사합니다.
COPY package*.json ./

# 필요한 npm 패키지를 설치합니다.
RUN npm install

# 소스 코드를 컨테이너의 작업 디렉토리로 복사합니다.
COPY . .

# React 애플리케이션을 빌드합니다.
RUN npm run build

# 개발 서버를 실행합니다.
CMD ["npm", "start"]