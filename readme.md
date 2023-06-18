![PMV](https://drx-danwins.us-east-1.linodeobjects.com/drx-danwins/pmc_51525a39.png) 

# Goal
The purpose of this project is to provide a free, locally run alternative to check printing tools that exist on the
internet. Some of these tools charge $1.25 or more to print a check. This is silly as this project was literally
completed in one day and does the same purpose. 

I buy blank check stock from (insert store here) and then use this tool to print checks for all my businesses with
multiple bank accounts. Works like a charm!

## Screenshot
![PMV](https://drx-danwins.us-east-1.linodeobjects.com/drx-danwins/pme_bdb244e4.png) 

Simple Vue App for printing checks on 8.5x11 paper.

## Features
* Printing to Browser
* Fancy signature font (optional)
* Routing and Account number uses official E13B Font
* Run locally to avoid sharing your account number over the internet
* Automatically converts amount of money to english words


# Demo
If you don't want to run the project locally, you can try out the demo version for free. Hosting is not guaranteed to be
up and running in the future though, but I'll keep it up as long as I can. 

[Demo](https://printmechecks.tiiny.site/)

## Requirements
***Must Have Node installed***

## Usage

Clone the repository

```sh
git clone https://github.com/sktzofrenic/printmechecks.git
```
Enter the project directory

```sh
cd printmechecks
```
Install JS dependencies

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

Then go to http://localhost:5173/ in your browser to start printing

