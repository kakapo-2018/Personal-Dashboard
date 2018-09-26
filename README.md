# Personal-Dashboard

# The secret document 
https://docs.google.com/document/d/1foSdUXSuPDHK0UF--nNuwswwAERuknWz4f_IDAHD9dA/edit?usp=sharing

## Install

```
yarn
yarn knex migrate:latest
yarn knex seed:run
yarn dev
```

## Getting Started
  Deploy boilerplate 
  Investigate NPM packages and alternative frameworks
  
## User Stories

### MVP

    * As a user I'd like to customize my personal dashboard
    * Tests written for the code
    * The Dashboard should contain widgets such as
      - Social feeds, exercise/nutrition info, goals & motivation, graphs (weight/budgeting), world map, basic 
      clock, weather, calender, email
    

### Stretch

    * Drag and drop functionality
    * Ability to change color schemes
    * spotify widget
    * fitness tracking
    * daily language tasks
    * youtube playlist / subscriptions

## React (Client Side)
  | name | purpose |
  | --- | --- |
  | App | Title and Navbar |
  | Header | Names of the team |
 
## Reducers (Client Side)

  | name | purpose |
  | --- | --- |
  | Navigate | Switch pages |
  
## Actions

 | type | data | purpose |
 | --- | --- | --- |
 | WIDGETNAME_ACTIONTYPE| Component_Name | Get information |
 
 ## API (Client - Server)
 
 To be decided
 
 ## DB (Server Side)
 1 table for the user and user preferences (coming at a later stage)
 
## API docs: Request and response formats
Currently in development

## Team Roles

Please refer to the secret document
