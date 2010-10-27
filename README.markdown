NodeJS RubyConf BR
==================

Its a spike project. Dont have tests. Only for read. I'll rewrite it using TDD, so use it for your own.

Dependencies
------------

* Node 0.2.x+
* npm
* faye
* express
* expresso


Installation
------------
        - Install node from source (http://nodejs.org/#download)
        - Install npm 
          $ curl http://npmjs.org/install.sh | sh
        - Install express 
          $ npm install express
        - Install faye 
          $ npm install faye
        - Install expresso (for tests)
          $ npm install expresso

Runnning
--------

        $ node server.js
        Point your browser to http://localhost:8000/lances.html
       
        Open your terminal and send lances using curl:
        $ curl -X POST -H "Content-Type:application/json" -d '{"equipe":"flamengo","texto":"emerleite"}' http://localhost:8000/lance?token=abc
       
        You can also use de Rails 3 app at: http://github.com/emerleite/rubyconfbr-rubyonnode

Joyent deployment
-----------------

        Create a git repository, and put a server.js file in its root.
        git remote add joyent ssh://node@ipaddr/repo
        git push joyent master
        Optionally:
        ssh node@ipaddr
        In a few minutes the nameservers will propagate your subdomain record and you will be able to access your server at emerleite.no.de. Until then use ipaddr.

Changelog
---------
* 0.0.1 - Spike solution without tests

To-Do
-----

* Refactor with TDD
* Improve layout
* receive youtube video link and render embed

Maintainer
----------

* Emerson Macedo (<http://codificando.com/>)

License:
--------

(The MIT License)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
