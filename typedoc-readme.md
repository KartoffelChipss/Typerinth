[![npm](https://img.shields.io/npm/v/typerinth?label=Version&color=%23366fb4)](https://www.npmjs.com/package/typerinth) [![npm](https://img.shields.io/npm/dt/typerinth?label=Downloads)](https://www.npmjs.com/package/typerinth) [![discord](https://dcbadge.vercel.app/api/server/Cc76tYwXvy?style=flat&theme=default-inverted)](https://strassburger.org/discord)

This library is a wrapper around the [Modrinth API](https://docs.modrinth.com/), a platform for Minecraft mods, modpacks, and other content. It is not an official package by Modrinth and not affiliated with Modrinth in any way.

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
    userAgent: 'AppName/Version',
    cache: new NodeCache({ stdTTL: 300 }),
});
```

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/KartoffelChipss/Typerinth/blob/main/LICENSE) file for details.
