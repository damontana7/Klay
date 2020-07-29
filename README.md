# Klay

The following files are related to the KLAY website, all the different fixes and things written to find common problems on the website.

## Folders and their purpose
1.  Binder cache folder
    1.  This folder contains the solution to the cache. The problem was when a visitor added or removed a product on the wishlist and then came back to the Binder page. The list was not consistent with the latest changes. So, this is a Javascript file to clear cache just on that page.

2.  Search Options
    1.  This folder has all the related changed to the search problems that come with the theme

3.  Speed Improvement 
    2.  This folder has a .htaccess file that sets expiration headers to filetypes to improve the speed score on GTmetrix

3.  Child theme
    3.  This folder has the 'functions.php' file disabling all the ecommerce scripts to imprive speed