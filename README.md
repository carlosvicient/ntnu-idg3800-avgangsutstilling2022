# ntnu-idg3800-avgangsutstilling2022

## How to run

### Studio

- Send mail to Cornelius on teams to get access to sanity.

- npm install -g @sanity/cli
- sanity login
- choose github w/e

- cd studio folder
- npm i
- sanity start

### frontend

- cd frontend Folder
- npm i
- npm start

### information

The studio is deployed so only use gatsby `http://localhost:8000/___graphql` to query the sanity database

## Folder structure

Cite: https://www.sanity.io/blog/how-to-structure-your-code-repository-in-a-sanity-io-project

**_Services has not been added yet_**

```
project-folder/
├── studio/
│ ├── config/
│ ├── plugins/
│ ├── schemas/
│ ├── static/
│ ├── .gitignore
│ ├── README.md
│ ├── package.json
│ └── sanity.json
├── frontend/
│ ├── components/
│ ├── lib/
│ ├── pages/
│ ├── static/
│ ├── .gitignore
│ ├── README.md
│ └── package.json
├── services/
│ ├── rss-feed/
│ │ ├── .gitignore
│ │ ├── index.js
│ │ ├── package.js
│ │ └── README.md
│ └── README.md
├── .gitignore
└── README.md
```
