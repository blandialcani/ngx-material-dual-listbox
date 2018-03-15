[![Build Status](https://travis-ci.org/blandialcani/ngx-material-dual-listbox.svg?branch=develop)](https://travis-ci.org/blandialcani/ngx-material-dual-listbox)

# NgxMaterialDualListbox

Simple dual list box component to use with your Angular 5 app, along with Angular Material and Flex layout.
 
## [Demo](https://blandialcani.github.io/ngx-material-dual-listbox/docs/)

## Dependencies

You will need:
* Angular 5 
* Angular Material 5
* Flex-layout 5
* [lodash](lodash.com)
* Material Icons (optional)

If you don't have these in your package.json, they will be installed when you install this package, just make sure you have the correct versions.

## Installation

To install this library, run:

```bash
$ npm install @blandium/ngx-material-dual-listbox --save
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import the module
import { NgxMaterialDualListboxModule } from '@blandium/ngx-material-dual-listbox';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Add the module in the impots
    NgxMaterialDualListboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once the library is imported, you can use the  components, directives and pipes in your Angular application:

```html
<ngx-material-duallistbox [items]="items" [descProperty]="'description'" [idProperty]="'id'">
</ngx-material-duallistbox>
```

If you want to use the component with material icons, make sure you have included them in your project. One way to do that is to include this in your intex.html:

```html
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
```
## Attributes


* __items__ - accepts an array of objects which __must__ have an identifying unique property (like _'id'_)
*  __selectedItems__ - the array of selected objects
*  **descProperty** - the property of the object which will be displayed, *default: 'description'*
*  **idProperty** - the property of the object which will be used to compare the objects. It must be unique, *default: 'id'*
*  **height** - the css height property of the dual-listbox, *default: '50vh'*
*  **filterPlaceholder** - filter placeholder, *default: 'Filter'*
*  **showIcons** - boolean to show or not the material icons, *default: 'true'*
*  **addIcon** - the material icon to be displayed on the left side list. If you don't want an icon, pass an empty string to this property, *default: 'add'*
*  **removeIcon** - the material icon to be displayed on the right side list. If you don't want an icon, pass an empty string to this property, *default: 'delete'*
*  **addIconColor** - color of the icon on the left side list, *default: 'black'*
*  **removeIconColor** - color of the icon on the right side list, *default: 'black'*

## License

MIT © [Blandi Alcani](mailto:blandius@gmail.com)
