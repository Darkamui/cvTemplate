# Simple CV display app using NextJS,ShadCN/UI & Docker

## Internationalization

- Replace content in en.json & fr.json
- Add language directories and respective json files to add a language (do not forget to add it to i18n config)

## Running

Typical NextJS app

- Run 'npm install'
- To start a local session -> 'npm run dev'

To run with Docker

- Build the image 'docker build -t my-app' (linux)
- Spin a container 'docker run -p -d 3000:3000 my-app my-app-container
