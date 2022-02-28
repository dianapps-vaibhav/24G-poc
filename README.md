# 24G-poc
Blockchain project POC

## Table of Contents
1. [Disclaimer](#Disclaimer)
2. [Getting started](#Getting)
3. [Installation](#Installation)
4. [Usage](#Usage)
5. [Run](#Run)
6. [Licensing](#Licensing)
7. [Convetions](#Convetions)

## Disclaimer
A short description goes here


## Getting started
Description Goes here


## Installation
### Prerequisites
```sh
    blockchain, node, web3, ethereum
```

### Installing

Move to the base directory (example: `blockchain`)

```sh
cd blockchain
```

Clone the repository and move to the project directory

```sh
git clone https://github.com/dianapps-vaibhav/24G-poc.git
cd 24G-poc
```

### Install dependencies

Install dependencies from the project directory

```sh
npm install
```


## Usage

The scripts are run in the function functionName (of index.js).

The script needs a '.env' file which includes a confidential data. The file is not part of the repository and so the script will not work out-of-the box. However an .env.example file is included to explain the expected format.


## Run

To launch the scripts, run the below command in the terminal:

```sh
npm start
```


## Licensing
License description will go here

## Convetions
### Branch Naming Convetions
A branching strategy is a set of rules, a convention that helps teams and developers – they can follow these rules and conventions to create a new branch, its flow, etc.

#### Feature Branch
```sh
feature-{ticketId}-narration
```

#### Bug Fix Branch
```sh
bugfix-{ticketId}-narration
```

#### Hot Fix Branch
```sh
hotfix-{ticketId}-narration
```

### Commit Message Conventions
Git commit message is the best way to communicate context about a change to fellow developers (and indeed to their future selves). A diff will tell you what changed, but only the commit message can properly tell you why. Developers can follow these rules and conventions to commit a message.

#### Feature Commit Message
```sh
feat: [{ticketId}] commit message <Developers Name>
```

#### Bug Fix Commit Message
```sh
fix: [{ticketId}] commit message <Developers Name>
```
