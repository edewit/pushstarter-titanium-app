# pushstarter-titanium-app

Author: Erik Jan de Wit (edewit@redhat.com)     
Level: Intermediate  
Technologies: titanium, appcelerator, Javascript, Push Messages  
Summary: A demonstration of how to receive a push message from RHMAP  
Community Project : [Feed Henry](http://feedhenry.org/)  
Target Product: RedHat Mobile Application Platform aka RHMAP    
Product Versions: RHMAP 3.11.0+   
Source: https://github.com/feedhenry-templates/pushstarter-titanium-app  
Prerequisites: Appcelerator Studio :  4.5.0 or newer

## What is it?

This application will subscribe to a push service running in a RHMAP instance. The user can send messages to the device using RHMAP and view them on the device.  

If you do not have access to a RHMAP instance, you can sign up for a free instance at [https://openshift.feedhenry.com/](https://openshift.feedhenry.com/).

## How do I run it?  

### RHMAP Studio

You can create this project as a template inside of RHMAP Studio. The full tutorial for setting up AeroGear UPS, registering on the Google Cloud Messaging network or iOS, and using the app can be found on the [RedHat Mobile docs](http://docs.feedhenry.com/v3/guides/using_push_notifications.html) site.  

### Build instructions for Open Source Development
If you wish to contribute to this template, the following information may be helpful; otherwise, RHMAP and its build facilities are the preferred solution.

## Build instructions
 * Edit [fhconfig.js](app/lib/fhconfig.js) to include the relevant information from RHMAP.  
 * Choose run in Appcelerator Studio to install on a device  
 
## How does it work?

This demo uses the feedhenry javascript api build for titanium, for the push it uses 2 modules
1. https://github.com/aerogear/AeroGear-Push-Titanium
2. https://github.com/aerogear/aerogear-titanium-push

1 is a commonjs module that uses 2 for android, these have been added to this template already.
To start using push all one has to do is call the push function on the $fh object like so: 

```js

var $fh = require('feedhenry-titanium');
$fh.push(onNotification, success, fail, config);
    
```

The config object can be used to set more options, for more information see the [API documentation](http://docs.feedhenry.com/v3/api/api_push.html)