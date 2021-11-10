# clime

`clime` is a compact and visually appealing avatar of your resume on the command line.

## Usage 

### Clone the repository

Clone this repository using the following command:

```shell
git clone git@github.com:kovid-r/clime.git
```

### Install Node.js dependencies

Make sure you have Node.js >= 14 installed on your machine. Use the following commands to install dependencies if you want to build `package-lock.json` again:

```shell
cd clime
npm install --save
```

### Run `clime`

Run `clime` using the following command:

```shell
node clime.js
```

![Example run of clime](https://cdn-images-1.medium.com/max/1600/1*ppHdhzZ9Sx9GE1E2N5ExaQ.png)

*Color pallette from [Coolors](https://coolors.co/e63946-f1faee-a8dadc-457b9d-1d3557), except that for hyperlinks.*

## Configuration

### `clime.json`

This is a custom representation of your resume. I discovered [jsonresume](https://jsonresume.org/) after I had written a little bit of code. I might additional support for [jsonresume](https://jsonresume.org/) later. Use `clime.json` to add your contact infromation, GitHub username (for GitHub stats), work history, projects, certifications, and social media links.

**Note:** `clime` is currently only tested on `iTerm`. It may not support hyperlink rendition on other terminals. `clime` uses `terminalLink`. Using that, I'll add support for other terminals too.

### `style.json`

Set the `useThis` field to `true`  in this file to force `clime` to use custom specified colors. If `useThis` is set to `false`, `clime` will use the `color-scheme` package by [c0bra](https://github.com/c0bra) and allot colors for a list of 16 colors (this can be tweaked).

## Credits

Inspired by simiar projects done by [anmol908](https://github.com/anmol098) and [jackboberg](https://github.com/jackboberg). 

![Made with love in Australia](https://madewithlove.now.sh/au?heart=true&colorA=%23ff0000&colorB=%2300008b&text=Australia)