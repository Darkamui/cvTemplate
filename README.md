# Simple CV display app using NextJS,ShadCN/UI & Docker

## Internationalization

- Replace content in en.json & fr.json
- Replace CV pdf files with your own in their respective public folders
- Add language directories and respective json files to add a language (do not forget to add it to i18n config)

## Running

Typical NextJS app

Output build is done using 'standalone' mode for optimization. For more details: https://nextjs.org/docs/pages/api-reference/next-config-js/output

- Run 'npm install'
- To start a local session -> 'npm run dev'

To run with Docker

- Build the image 'docker build -t my-app' (linux)
- Spin a container 'docker run -p -d 3000:3000 my-app my-app-container
