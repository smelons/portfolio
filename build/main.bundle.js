"use strict";

var _preact = require("preact");

(0, _preact.render)((0, _preact.h)(
    "div",
    { id: "foo" },
    (0, _preact.h)(
        "span",
        null,
        "Hello, world!"
    ),
    (0, _preact.h)(
        "button",
        { onClick: function onClick(e) {
                return alert("hi!");
            } },
        "Click Me"
    )
), document.body);
