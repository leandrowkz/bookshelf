# 📚 Bookshelf (WIP 🚧)
Bookshelf is an opensource books catalog, where you can favorite your books, mark as read or add them to a want to a reading list. Take a look at this project running on https://usebookshelf.app (or https://bookshelf.guide).

<!-- ![Movieshelf showcase](./docs/movieshelf.jpeg) -->

## 📦 Dependencies
- React
- NextJS
- Redux
- Mantine UI

## ⏭️ Running locally
Since this is an free project, you're able to clone this repository and run it locally. The outcome
should be similar to the running website.

This project relies on [Vercel](https://vercel.com), especially for proxying api calls.
So before you start you'll need to [create a Vercel project](https://vercel.com/new) and attach it
to this repository (the copy you made it). You can use it the [Vercel CLI](https://vercel.com/docs/cli)
to do so.

The steps you need to run this locally:
1. Install the [Vercel CLI](https://vercel.com/docs/cli)
2. Create a [new Vercel project](https://vercel.com/new)
3. Run `$ vercel link` to link your copied repository to your vercel created project
4. Run `$ yarn` to install dependencies
5. Run `$ yarn start:dev` to start the project

If everything went right then you will have the project running on the http://localhost:3000.

## 🐞 Monitoring
This project uses [New Relic](https://docs.newrelic.com/) as monitoring tool, to log errors and metrics. If you want to use it, just add the necessary env variables to enable it. Follow New Relic's quick start guide to create a Browser monitoring app on it, then copy the values inside generated script to your `.env` file. If you don't want to enable New Relic in your application, no worries, just leave the related env vars empty.

## ☕ Contribute to this project
Help this project to be bigger by submitting a feature request, working on a new feature or
sponsoring it. Check it out the [project roadmap](https://github.com/users/leandrowkz/projects/3)
and the stay tuned for the upcoming features.
