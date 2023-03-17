# TabArea Version 2.0 (With Advanced Search)

Live -> <https://tabarea.net/search>

TabArea.net was created by using WGET to scrape TabIt.net's Tablature Area.

WGET simply starts on whatever link you first give it, converts it to a static HTML file, and adds every link present on that page to a list. It repeats this process for every link on the list until it has found every link on the entire website.

For the Tab Area, this process resulted in ~350,000 HTML files, along with the ~44,000 TBT files.

Turning a PHP-based site into a static HTML site can break a lot of features. The most sorely-missed functionality of the scraped version was the ability to search. As one would expect, it is much more difficult to find anything on the site without it.

In early 2023, I learned how to use Puppeteer and thought it would be a perfect tool to scrape TabArea.net, examine each static HTML file, and create a proper database of all the information present on the site. Once that would be complete, I could build a search function. After announcing these plans, TabIt compatriot Ryan Leber let me know that he had already completed this task with an app he built in Python! He sent me the complete SQL dump and it was _exactly_ what I was planning on creating. That part of the work was already done! Score. Thanks Leber.

Once the database was in place, there was still a lot of work to be done.

### Frontend

The TabArea Advanced Search frontend is a React App. This element makes up the majority of the repo.

The Advanced Search page is intended to maintain TabIt's classic Web 1.0 aesthetic. I wanted it look like it had always been a part of the site, despite being powered by React. Since the files this app searches can only be used on a desktop computer, it is designed primarily for use on PC. That said, it should still be entirely usable on mobile.

### Backend

The TabArea Advanced Search backend is written in PHP. These files are in the php_backend folder.

### Other

The python_utils folder contains two scripts. The TabArea update plan involved removing various site functions that were no longer operational after the site had been converted to static HTML files. With these broken elements removed, hundreds of thousands of the HTML files serve absolutely no purpose.

The first script deletes all the unnecessary files. This was a necessity because my OS gets _very_ unhappy if I try to manipulate a folder of that size using normal methods. It makes sense to run this script first so that the second script doesn't waste time processing files that will just end up deleted.

The second script is a find and replace function. The update involved changing identical HTML elements of the remaining 100k files. This removes the broken functions, modifies the header, and adds the new search functions to the sidebar. Imagining changing that many files manually makes my head hurt.
