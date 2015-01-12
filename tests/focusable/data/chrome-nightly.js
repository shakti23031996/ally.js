define(function defineDemoFocusableChromeCanary(require) {
  'use strict';

  // The contents of this file have been collected by running focusable/index.html

  return {
    "platform": {
      "description": "Chrome 41.0.2272.2 on OS X 10.8.5",
      "layout": "Blink",
      "manufacturer": null,
      "name": "Chrome",
      "prerelease": null,
      "product": null,
      "ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.2 Safari/537.36",
      "version": "41.0.2272.2",
      "os": {
        "architecture": 32,
        "family": "OS X",
        "version": "10.8.5"
      }
    },
    "focusable": [
      "BODY",
      "input[type=text]",
      "input[type=password]",
      "input[type=checkbox]",
      "input[type=radio]",
      "input[type=submit]",
      "input[type=reset]",
      "select",
      "textarea",
      "button[type=button]",
      "a[href]",
      "a[href=\"\"]",
      "a[href][tabindex=-1]",
      "area[href].upper",
      "area[href].lower",
      "map.invalid-image area[href].upper",
      "map.invalid-image area[href].lower",
      "a:has([ismap])",
      "iframe",
      "audio[controls]",
      "video[controls]",
      "embed",
      "keygen",
      "details summary",
      "details[open] summary",
      "details[open] a[href]",
      "object[src=swf]",
      "object[src=swf][height=0]",
      "object[src=svg]",
      "object[src=svg][height=0]",
      "svg a[xlink|href]",
      "[contenteditable]:empty",
      "[contenteditable]",
      "[tabindex=-2]",
      "[tabindex=-1]",
      "[tabindex=0]",
      "[tabindex=1]",
      "[tabindex=+2]",
      "[tabindex= +2]",
      "[tabindex=3 ]",
      "[tabindex=3x]",
      "fieldset[tabindex=0][disabled]",
      "fieldset input",
      "{hidden} > a{visible}",
      "{hidden} > {visible} > a",
      "table tbody tr td a",
      "table tbody tr{collapse} td{visible} a",
      "table tbody tr{collapse} td a{visible}",
      "a{flexbox}",
      "[tabindex=\"-1\"]{flexbox}"
    ],
    "focusEvents": [
      "input[type=text]",
      "input[type=password]",
      "input[type=checkbox]",
      "input[type=radio]",
      "input[type=submit]",
      "input[type=reset]",
      "select",
      "textarea",
      "button[type=button]",
      "input[type=text]",
      "a[href]",
      "a[href=\"\"]",
      "a[href][tabindex=-1]",
      "area[href].upper",
      "area[href].lower",
      "map.invalid-image area[href].upper",
      "map.invalid-image area[href].lower",
      "a:has([ismap])",
      "iframe",
      "audio[controls]",
      "video[controls]",
      "embed",
      "keygen",
      "details summary",
      "details[open] summary",
      "details[open] a[href]",
      "object[src=swf]",
      "object[src=swf][height=0]",
      "object[src=svg]",
      "object[src=svg][height=0]",
      "svg",
      "svg a[xlink|href]",
      "svg a[xlink|href] text",
      "svg text",
      "svg rect",
      "[contenteditable]:empty",
      "[contenteditable]",
      "[tabindex=-2]",
      "[tabindex=-1]",
      "[tabindex=0]",
      "[tabindex=1]",
      "[tabindex=+2]",
      "[tabindex= +2]",
      "[tabindex=3 ]",
      "[tabindex=3x]",
      "fieldset[tabindex=0][disabled]",
      "fieldset input",
      "{hidden} > a{visible}",
      "{hidden} > {visible} > a",
      "table tbody tr td a",
      "table tbody tr{collapse} td{visible} a",
      "table tbody tr{collapse} td a{visible}",
      "a{flexbox}",
      "[tabindex=\"-1\"]{flexbox}"
    ],
    "focusRedirection": [
      "label[for=\"label-target\"] --- input[type=text]",
      "fieldset legend --- fieldset input"
    ],
    "noFocusMethod": [],
    "tabOrder": [
      "[tabindex=1]",
      "[tabindex=+2]",
      "[tabindex= +2]",
      "[tabindex=3 ]",
      "[tabindex=3x]",
      "input[type=text]",
      "input[type=password]",
      "input[type=checkbox]",
      "input[type=radio]",
      "input[type=submit]",
      "input[type=reset]",
      "select",
      "textarea",
      "button[type=button]",
      "a[href]",
      "a[href=\"\"]",
      "area[href].upper",
      "area[href].lower",
      "map.invalid-image area[href].upper",
      "map.invalid-image area[href].lower",
      "a:has([ismap])",
      "iframe",
      "audio[controls]",
      "video[controls]",
      "keygen",
      "details summary",
      "details[open] summary",
      "details[open] a[href]",
      "svg a[xlink|href]",
      "[contenteditable]:empty",
      "[contenteditable]",
      "[tabindex=0]",
      "fieldset[tabindex=0][disabled]",
      "fieldset input",
      "{hidden} > a{visible}",
      "{hidden} > {visible} > a",
      "table tbody tr td a",
      "table tbody tr{collapse} td{visible} a",
      "table tbody tr{collapse} td a{visible}",
      "a{flexbox}"
    ],
    "ally": {
      "focusable": [
        "BODY",
        "input[type=text]",
        "input[type=password]",
        "input[type=checkbox]",
        "input[type=radio]",
        "input[type=submit]",
        "input[type=reset]",
        "select",
        "textarea",
        "button[type=button]",
        "a[href]",
        "a[href=\"\"]",
        "a[href][tabindex=-1]",
        "area[href].upper",
        "area[href].lower",
        "map.invalid-image area[href].upper",
        "map.invalid-image area[href].lower",
        "a:has([ismap])",
        "iframe",
        "audio[controls]",
        "video[controls]",
        "embed",
        "keygen",
        "details summary",
        "details[open] summary",
        "details[open] a[href]",
        "object[src=swf]",
        "object[src=swf][height=0]",
        "object[src=svg]",
        "object[src=svg][height=0]",
        "svg a[xlink|href]",
        "[contenteditable]:empty",
        "[contenteditable]",
        "[tabindex=-2]",
        "[tabindex=-1]",
        "[tabindex=0]",
        "[tabindex=1]",
        "[tabindex=+2]",
        "[tabindex= +2]",
        "[tabindex=\"\"]",
        "[tabindex=hello]",
        "[tabindex=3 ]",
        "[tabindex=3x]",
        "fieldset[tabindex=0][disabled]",
        "fieldset input",
        "{hidden} > a{visible}",
        "{hidden} > {visible} > a",
        "table tbody tr td a",
        "table tbody tr{collapse} td{visible} a",
        "table tbody tr{collapse} td a{visible}",
        "a{flexbox}",
        "[tabindex=\"-1\"]{flexbox}"
      ],
      "tabOrder": [
        "[tabindex=1]",
        "[tabindex=+2]",
        "[tabindex= +2]",
        "[tabindex=3 ]",
        "[tabindex=3x]",
        "input[type=text]",
        "input[type=password]",
        "input[type=checkbox]",
        "input[type=radio]",
        "input[type=submit]",
        "input[type=reset]",
        "select",
        "textarea",
        "button[type=button]",
        "a[href]",
        "a[href=\"\"]",
        "area[href].upper",
        "area[href].lower",
        "map.invalid-image area[href].upper",
        "map.invalid-image area[href].lower",
        "a:has([ismap])",
        "iframe",
        "audio[controls]",
        "video[controls]",
        "embed",
        "keygen",
        "details summary",
        "details[open] summary",
        "details[open] a[href]",
        "object[src=swf]",
        "object[src=swf][height=0]",
        "object[src=svg]",
        "object[src=svg][height=0]",
        "svg a[xlink|href]",
        "[contenteditable]:empty",
        "[contenteditable]",
        "[tabindex=0]",
        "fieldset[tabindex=0][disabled]",
        "fieldset input",
        "{hidden} > a{visible}",
        "{hidden} > {visible} > a",
        "table tbody tr td a",
        "table tbody tr{collapse} td{visible} a",
        "table tbody tr{collapse} td a{visible}",
        "a{flexbox}"
      ]
    },
    "jquery": {
      "focusable": [
        "input[type=text]",
        "input[type=password]",
        "input[type=checkbox]",
        "input[type=radio]",
        "input[type=submit]",
        "input[type=reset]",
        "select",
        "textarea",
        "button[type=button]",
        "a[href]",
        "a[href=\"\"]",
        "a[href][tabindex=-1]",
        "area[href].upper",
        "area[href].lower",
        "map.invalid-image area[href].upper",
        "map.invalid-image area[href].lower",
        "a:has([ismap])",
        "details[open] a[href]",
        "object[src=swf]",
        "object[src=swf][height=0]",
        "object[src=svg]",
        "object[src=svg][height=0]",
        "object[usemap]",
        "[tabindex=-2]",
        "[tabindex=-1]",
        "[tabindex=0]",
        "[tabindex=1]",
        "[tabindex=+2]",
        "[tabindex= +2]",
        "[tabindex=\"\"]",
        "[tabindex=3 ]",
        "fieldset[tabindex=0][disabled]",
        "fieldset input",
        "fieldset[disabled] input",
        "table tbody tr td a",
        "table tbody tr{collapse} td a",
        "table tbody tr{collapse} td{visible} a",
        "table tbody tr{collapse} td a{visible}",
        "a{flexbox}",
        "[tabindex=\"-1\"]{flexbox}"
      ],
      "tabOrder": [
        "input[type=text]",
        "input[type=password]",
        "input[type=checkbox]",
        "input[type=radio]",
        "input[type=submit]",
        "input[type=reset]",
        "select",
        "textarea",
        "button[type=button]",
        "a[href]",
        "a[href=\"\"]",
        "area[href].upper",
        "area[href].lower",
        "map.invalid-image area[href].upper",
        "map.invalid-image area[href].lower",
        "a:has([ismap])",
        "details[open] a[href]",
        "object[src=swf]",
        "object[src=swf][height=0]",
        "object[src=svg]",
        "object[src=svg][height=0]",
        "object[usemap]",
        "[tabindex=0]",
        "[tabindex=1]",
        "[tabindex=+2]",
        "[tabindex= +2]",
        "[tabindex=\"\"]",
        "[tabindex=3 ]",
        "fieldset[tabindex=0][disabled]",
        "fieldset input",
        "fieldset[disabled] input",
        "table tbody tr td a",
        "table tbody tr{collapse} td a",
        "table tbody tr{collapse} td{visible} a",
        "table tbody tr{collapse} td a{visible}",
        "a{flexbox}"
      ]
    }
  };
});