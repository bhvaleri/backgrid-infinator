This is an extension for [Backgrid.js](http://wyuenho.github.com/backgrid) which
enables infinite paging.

Dependencies
============

[backbone-pageable](http://github.com/wyuenho/backbone-pageable/)

Usage
=====

See the app.js in the example directory.

Assuming you have checked out Backgrid's repository, you can follow these steps in order to see the example:

1. Clone this repository to `backgrid/src/extensions/infinator`.
2. Add `infinator` to the `SUBDIRS` variable in `backgrid/src/extensions/Makefile`.
3. From Backgrid's root directory, type `make dist`.
4. `ln -s ../src/extensions/infinator/example examples/infinator`.
5. Fire up your webserver and point the document root to Backgrid's root directory.
6. Type `http://localhost/examples/infinator/`
