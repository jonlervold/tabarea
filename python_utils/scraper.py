"""
Replace outdated blocks of TabArea html for all the files at once
"""
import os
import re

directory = 'C:/2023-tab-area/www.tabit.net/tabs'

replacements = [
    # header
    {'f': '<a href="http://www.tabit.net/">Home</a>',
     'r': '''
<a href="../">TabArea Home</a>
<img src="../images/dot.gif" width="12" height="8" alt="|" />
<a href="http://www.tabit.net/" target="_blank">TabIt Home</a>
'''},

    {'f': '<a href="http://www.tabit.net/download.htm">Download</a>',
     'r': '<a href="http://www.tabit.net/download.htm" target="_blank">Download</a>'},

    {'f': '<a href="http://www.tabit.net/faq.htm">FAQ</a>',
     'r': '<a href="http://www.tabit.net/faq.htm" target="_blank">FAQ</a>'},

    {'f': '<a href="http://www.tabit.net/register.htm">Register&nbsp;Online</a>',
     'r': '<a href="http://www.tabit.net/register.htm" target="_blank">Register&nbsp;Online</a>'},

    {'f': '<a href="http://www.tabit.net/regusers.htm">Registered&nbsp;Users</a>',
     'r': '<a href="http://www.tabit.net/regusers.htm" target="_blank">Registered&nbsp;Users</a>'},

    {'f': '<a href="http://www.tabit.net/vb/">Forums</a>',
     'r': '<a href="http://www.tabit.net/vb/" target="_blank">Forums</a>'},

    # show album titles
    {'f': r'<form action="list.php@f=(.+?)</form>',
     'r': ''},

    # sidebar
    {'f': r'<form action="http://www.tabit.net/tabs/goto.php"(.+?)Tab Submission:<br />',
     'r': ''},

    {'f': r'<a href="login.php(.+?)">Log In</a>',
     'r': '''
<form onsubmit="return false;">
    Tab Search <br />
    <input
    type="text"
    style="width: 113px"
    id="tabSearch"
    maxlength="50"
    />
    <button type="button" onclick="runTabSearch()">Go</button>
</form>
<form style="margin-top: 1em" onsubmit="return false;">
    User Search <br />
    <input
    type="text"
    style="width: 113px"
    id="userSearch"
    maxlength="50"
    />
    <button type="button" onclick="runUserSearch()">Go</button>
</form>
<form style="margin-top: 1em" onsubmit="return false;">
    Folder Search <br />
    <input
    type="text"
    style="width: 113px"
    id="folderSearch"
    maxlength="50"
    />
    <button type="button" onclick="runFolderSearch()">Go</button>
</form>
<script>
    function runTabSearch() {
    var userInput = document.getElementById("tabSearch").value;
    window.location.href =
        "../search?tab=" + encodeURIComponent(userInput);
    }
    function runUserSearch() {
    var userInput = document.getElementById("userSearch").value;
    window.location.href =
        "../search?user=" + encodeURIComponent(userInput);
    }
    function runFolderSearch() {
    var userInput = document.getElementById("folderSearch").value;
    window.location.href =
        "../search?folder=" + encodeURIComponent(userInput);
    }
</script>
<br />
<a href="../search">Advanced Search</a>
'''},

    # all folder songs as zip
    {'f': 'Download all songs in this folder as a .zip file',
     'r': ''},

    # all user tabs as zip
    {'f': 'Download all tabs submitted by this user as a .zip file',
     'r': ''},

    # remove rating links
    {'f': 'href="ratings.php@file=',
     'r': ''}
]

i = 0

for filename in os.listdir(directory):
    if filename.endswith('.html'):
        filepath = os.path.join(directory, filename)

        print('modifying', i, filepath, sep=' ')

        with open(filepath, 'r', encoding='iso-8859-1') as f:
            contents = f.read()

        for replacement in replacements:
            contents = re.sub(
                replacement['f'], replacement['r'], contents, flags=re.DOTALL)

        with open(filepath, 'w', encoding='iso-8859-1') as f:
            f.write(contents)

        i += 1
