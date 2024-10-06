# Typerinth

[![npm](https://img.shields.io/npm/v/modrinth-ts?label=Downloads)](https://www.npmjs.com/package/modrinth-ts) [![npm](https://img.shields.io/npm/dt/modrinth-ts?label=Version)](https://www.npmjs.com/package/modrinth-ts) [![discord](https://dcbadge.vercel.app/api/server/Cc76tYwXvy?style=flat&theme=default-inverted)](https://strassburger.org/discord)

This library is a wrapper around the [Modrinth API](https://docs.modrinth.com/), a platform for Minecraft mods, modpacks, and other content. It is not an official package by Modrinth and not affiliated with Modrinth in any way.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Options](#options)
  - [Projects](#projects)
    - [Get a project by its ID or slug](#get-a-project-by-its-id-or-slug)
    - [Get multiple projects by their IDs or slugs](#get-multiple-projects-by-their-ids-or-slugs)
    - [Get a random selection of projects](#get-a-random-selection-of-projects)
    - [Check if a project id or slug is valid](#check-if-a-project-id-or-slug-is-valid)
  - [Versions](#versions)
    - [Get the versions of a project](#get-the-versions-of-a-project)
    - [Get a version by its ID](#get-a-version-by-its-id)
    - [Get multiple versions by their IDs](#get-multiple-versions-by-their-ids)
    - [Get the version from a file hash](#get-the-version-from-a-file-hash)
  - [Users](#users)
    - [Get a user by their ID or username](#get-a-user-by-their-id-or-username)
    - [Get multiple users by their IDs or usernames](#get-multiple-users-by-their-ids-or-usernames)
    - [Get a user's projects](#get-a-users-projects)
  - [Miscellanous](#miscellanous)
    - [Get tags by its type](#get-tags-by-its-type)
    - [Get a License by its ID](#get-a-license-by-its-id)
    - [Get statistics](#get-statistics)

## Installation

Simply execute the following command in your commandline:

```bash
npm install typerinth
```

## Usage

Import the package like this:

```ts
import { Modrinth } from 'typerinth';
const modrinth = new Modrinth();
```

### Options

You can change the options to tune typerinth to your liking:

```ts
import { Modrinth } from 'typerinth';
const modrinth = new Modrinth({
        baseUrl: "https://api.modrinth.com",
        apiVersion: "v2",
        userAgent: "AppName/Version",
        cache: {
            ttl: 600,
            checkperiod: 120,
            useCache: true
        }
    });
```

Once you have done this, you can use all the following functions as you like.

---

### Projects

#### Get a project by its ID or slug

```ts
const project = await modrinth.getProject("project-id");
```

#### Get multiple projects by their IDs or slugs

```ts
const projects = await modrinth.getProjects(["project-id-1", "project-id-2"]);
```

#### Get a random selection of projects

```ts
const projects = await modrinth.getRandomProjects(5);
```

#### Check if a project ID or slug is valid

```ts
const isValid = await modrinth.checkProjectValidity("project-id");
```

---

### Versions

#### Get the versions of a project

```ts
const versions = await modrinth.getProjectVersions("project-id", {
    loaders: ["forge"],
    gameVersions: ["1.16.5"]
});
```

#### Get a version by its ID

```ts
const version = await modrinth.getVersion("version-id");
```

#### Get multiple versions by their IDs

```ts
const versions = await modrinth.getVersions(["version-id-1", "version-id-2"]);
```

#### Get the version from a file hash

```ts
const version = await modrinth.getVersionFromFileHash("file-hash");
```

---

### Users

#### Get a user by their ID or username

```ts
const user = await modrinth.getUser("user-id");
```

#### Get multiple users by their IDs or usernames

```ts
const users = await modrinth.getUsers(["user-id-1", "user-id-2"]);
```

#### Get a user's projects

```ts
const projects = await modrinth.getUserProjects("user-id");
```

---

### Miscellanous

#### Get tags

Gets tags as described in the [Modrinth API documentation](https://docs.modrinth.com/#tag/tags/operation/categoryList).

```ts
import {TagType} from "typerinth";
const tags = await modrinth.getTag(TagType.Loader);
```

#### Get a License by its ID

```ts
const license = await modrinth.getLicense("license-id");
```

#### Get statistics

```ts
const stats = await modrinth.getStatistics();
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.