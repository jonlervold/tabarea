"""
Takes a folder and deletes files meeting a certain criteria
"""
import os

directory = 'C:/2023-tab-area/www.tabit.net/tabs/'

prefixes = ('login.php', 'newuser.php', 'ratings.php')
i = s = 0

for filename in os.listdir(directory):
    filepath = os.path.join(directory, filename)
    if os.path.isfile(filepath) and filename.startswith(prefixes):
        print('deleting file:', i, filename, sep=' ')
        os.remove(filepath)
        i += 1
    else:
        print('skipping file:', s, filename, sep=' ')
        s += 1
