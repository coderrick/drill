# Drill
![alt text](Assets/drill.png)

## Overview

Drill is a fitness dApp we built at AngelHack Manhattan that promotes Body-weight exercises and peer to peer learning over expensive Gym memberships and personal trainers.

## Installation
`git clone [this repo]`

#Blockchain setup
`cd blockchain/; ./setup.sh`
`testrpc`
`run truffle commands`
dependecies include 

#Database setup
Must have cockroachdb installed!
`cd to db`
`cockroach start --insecure` *must be done in separate terminal
`cockroach sql --insecure --database=drill < schema.sql` *Initializing the db's and tables

# Try it!

Take a look at our Beta web app [HERE!](http://www..com/)

[![Build Status](https://travis-ci.org/coderrick/drill.svg?branch=master)](https://travis-ci.org/coderrick/drill)
