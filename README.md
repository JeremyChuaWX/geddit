# Geddit

A forum web application in Go.

## Features

- P0
  - view all posts in order of creation date
  - search for posts by title
  - create a post
  - view all the comments in a forum post by order of creation date with hierarchy of replies clearly shown
  - add a comment to a post
  - reply to a comment in a post
- P1
  - filter posts by tag
  - add a tag to my post
  - upvote/downvote a post
  - upvote/downvote a comment
- P2
  - edit the contents of my posts, with diffs/versions to display the changes publicly
  - edit the contents of my comments, with diffs/versions to display the changes publicly

## Development

- we use npm to spin up our development environment
  ```bash
  npm run dev
  ```
- remove build artifacts with the following npm script
  ```bash
  npm run clean
  ```
- format template files with the following npm script
  ```bash
  npm run format
  ```

## Documentation

- [Database](<>)
- [API](<>)
- [Frontend](<>)

## Todo

- setup environment variables in go
  - DB connection string
  - template file path (relative to `main.go`)
  - static resources file path (relative to `main.go`)
- fix `password_test.go`
- web controller error handling
- post routes
- comment routes
