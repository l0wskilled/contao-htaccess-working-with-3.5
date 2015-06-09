# contao-htaccess-working-with-3.5
https://github.com/hofff/contao-htaccess doesn't work because it uses dc-general, which is only available as of now for contao-core <3.5
and they also have to change the codeMirror editor. 

This is why I set up this old version which still uses the old data container, not the dc-general one.
Edited the used Editor from codeMirror to ace, so it works in contao-core 3.5

Dependencies: MetaPalettes, MultiColumnWizard

You can install the old htaccess via extension repository and overwrite the htaccess folder if you want to be lazy.

Please use https://github.com/hofff/contao-htaccess if it is working for you.
