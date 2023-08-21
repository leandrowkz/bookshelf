# 📚 Bookshelf
Bookshelf is an opensource books catalog, where users can favorite their books, mark as read or add them to a want to read list. Take a look at this project running on https://usebookshelf.app or https://bookshelf.guide.

<!-- ![Movieshelf showcase](./docs/movieshelf.jpeg) -->

## 📦 Dependencies
This project uses NextJS, Redux, and Mantine UI.

## ⏭️ Running locally
Since this is an free project, you're able to clone this repository and run it locally. The outcome
should be similar to the running website.

This project relies on [Vercel](https://vercel.com), especially for proxying api calls.
So before you start you'll need to [create a Vercel project](https://vercel.com/new) and attach it
to this repository (the copy you made it). You can use it the [Vercel CLI](https://vercel.com/docs/cli)
to do so. After creating and linking a Vercel project to the copy of this repository you need to
create an TMDB apikey and set it on your vercel project.

The steps you need to run this locally:
1. Install the [Vercel CLI](https://vercel.com/docs/cli)
2. Create a [new Vercel project](https://vercel.com/new)
3. Run `$ vercel link` to link your copied repository to your vercel created project
4. Create a [TMDB apikey](https://developers.themoviedb.org/3/getting-started/introduction)
5. Add the variable `REACT_APP_TMDB_API_ACCESS_TOKEN` to your Vercel project, with the value of TDMB apikey
6. Run `$ yarn` to install dependencies
7. Run `$ yarn start:dev` to start the project

If everything went right then you will have the project running on the http://localhost:3000.

## 🐞 Monitoring
This project uses [New Relic](https://docs.newrelic.com/) as monitoring tool, to log errors and metrics. If you want to use it, just add the necessary env variables to enable it. Follow New Relic's quick start guide to create a Browser monitoring app on it, then copy the values inside generated script to your `.env` file. If you don't want to enable New Relic in your application, no worries, just leave the related env vars empty.

## ☕ Contribute to this project
Help this project to be bigger by submitting a feature request, working on a new feature or
sponsoring it. Check it out the [project roadmap](https://github.com/users/leandrowkz/projects/3)
and the stay tuned for the upcoming features.
