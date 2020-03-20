# Angular Searchable List

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.7.

# Dependencies

- Angular Material 9

# Installation

`npm install angular-searchable-list`

# Description

## Single List

These are the array of strings or numbers

## Multi List

These are the array of objects of following type

```
[
    {
    name: 'one',
    value: '1'
    },
    {
        name: 'two',
        value: '2'
    }
]
```
# How to use
## Single List
```
<lib-searchable-list type='action' [data]="data" listType='single' [dense]="'dense'" [hoverable]="true" height='100px'></lib-searchable-list>
```
## Multi List
```
<lib-searchable-list type='action' [data]="data" listType='multi' [dense]="'dense'" [hoverable]="true"></lib-searchable-list>
```

# Parameters
* type : It can be `normal` or `action` which provides hovering capability on list items
* data : It can be array of `numbers`, `strings` for `listType: 'single'` or array of `objects` for `listType: 'multi`
* listType : It can be `single` or `multi`
* dense (optional) : It controls the height and padding of the list `dense='dense'`
* hoverable (optional) : It can be true or false `[hoverable]=true/false`
* height (oprtional) : It controls the height of the list

# Bugs
If you counter any bugs then open a bug [https://github.com/diveshpanwar/angular-searchable-list/issues](OPEN ISSUE)