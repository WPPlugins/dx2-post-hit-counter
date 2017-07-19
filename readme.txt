=== Plugin Name ===
Contributors: dx2systems
Tags: comments, hit, count, traffic, page views
Requires at least: 3.0.1
Tested up to: 4.7.3
Stable tag: 1.3
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
Donate link: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=DVVCVRAT66Q5L

A lightweight counter to track the number of hits on all posts on the website.

== Description ==

This hit counter is a light weight way to track the hits on all posts, including custom post types on your Wordpress blog. The plugin uses ajax to count the hit which means it will have no affect on the speed of which the page loads. This also leads to a much more reliable hit count as the hit is not actually counted until the page has loaded. To the end user this hit counter will have almost no affect on the pages load speed. 

Your traffic stats are can be viewed quickly from the dashboard widget that will give you a daily overview of the most popular posts along with the total hits on the website for the past few days.

When logged in as an administrator you will be able to see the number of hits that a page has from the Wordpress admin title bar. When editing the post you will also be able to see the number of hits the page has received and have the ability to reset the counter if needed. Admin hits will be automatically be discounted to save the hit count being inflated due to testing or other general use of the site by any of the administrators. 

A few notes about the sections above:

*   Light weight method to count page hits.
*   AJAX powered recording system
*   Dashboard widget for traffic overview
*   Administration tools to manage hits


https://dx2systems.com/

== Installation ==

1. Upload the plugin files to the `/wp-content/plugins/dx2posthitcounter` directory, or install the plugin through the WordPress plugins screen directly.
2. Activate the plugin through the 'Plugins' screen in WordPress
3. The plugin with automatically begin doing the rest. 


== Frequently Asked Questions ==

= How long does it take for stats to update =

Stats are updated in real time. If you get a hit, the dashboard widget and post will immediately detect the update. When the page is refreshed the updated value will be displayed. 

== Screenshots ==

1. Global page view overview graph. This will show you the global hits for the past few days along with the most popular posts of the current day with the hit count.
2. Hit counts can be easily reset from the admin menu if there has been something that has inflated the score artificially and you want to reset it.

== Changelog ==

= 1.0 =
* Initial Release

= 1.1 =
* Updated Store listing
* Fixed big that would cause a jquery error when load order was changed
* Added a menu page to show top 50 posts of the day

= 1.2 =
Fixed major jQuery bug

= 1.3 = 
Fixed bug where the chart javascrpt would cause visual composers editor to throw errors
Added support for a network endable on a multisite
Added a multisite dashboard widget where it will gather the hit totals from all sites across the network
== Upgrade Notice ==

= 1.0 =
First stable release. 

= 1.1 =
Store listing modified.

= 1.2 = 
Bug fixes

= 1.3 = 
Bug fixes
Better multisite support