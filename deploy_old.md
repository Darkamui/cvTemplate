name: Deploy to VPS

on:
  push:
    branches:
      - master # Change this to your main branch

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: "20" # Use the version your app requires

      - name: Install dependencies
        run: npm install

      - name: Build project
        run: npm run build

      - name: Deploy to VPS
        env:
          SSH_PRIVATE_KEY: ${{ secrets.VPS_SSH_KEY }}
          VPS_HOST: ${{ secrets.VPS_HOST }}
          VPS_USER: ${{ secrets.VPS_USER }}
        run: |
          echo "$SSH_PRIVATE_KEY" > private_key
          chmod 600 private_key
          rsync -avr -e "ssh -i private_key -o StrictHostKeyChecking=no" ./ ${VPS_USER}@${VPS_HOST}:/root/cvtemplate
          ssh -i private_key -o StrictHostKeyChecking=no ${VPS_USER}@${VPS_HOST} << 'EOF'
            cd /root/cvtemplate
            npm install
            npm run build
            pm2 restart cv-template
          EOF
