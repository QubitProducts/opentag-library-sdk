# Tag Library Repository & Development Tools

## Introduction

[Opentag](https://opentag.qubitproducts.com/QDashboard) hosts an ever-growing number of script tags submitted by vendors and curated by [Qubit](http://www.qubitproducts.com) that makes it easy for webmasters and marketers to get them running on their websites. 

This repository contains these tags in an easy to add and edit format. 

## Full Documentation

- [Guides](https://opentag2.qubitproducts.com/tagsdk/docs/#!/guide/getting_started)
- [Opentag API](https://opentag2.qubitproducts.com/tagsdk/docs/#!/api)

## Quickstart guide

###Requirements

- [Java](https://www.java.com/en/download/) (version 1.5 or higher) 
- [Git](http://git-scm.com/downloads). 

###Contribution process

If you want to contribute code back to this repository, please use the following procedure:

 * Fork this repository (by clicking the fork button above). 
 * Checkout your fork of the repository 

   ```git clone git@github.com:<your git account>/opentag-library-sdk.git```
 
 * Make a branch for the new/altered tag(s) 
 
   ```git checkout -b my-new-tag-name```
 
 * Make your changes against the branch. 
 * Commit changes back to your personal repository 
 
   ```git commit -am "added new tag 'my new tag' " && git push```
 
 * Pull request from your local repository back to the parent repostory. 

 * We will review the changes, ask for any improvements, and if all is well, sync it back to repository. 

 * Users using older versions of your tags will be notified of changes to their implementations when they next log in.

###Building Tag Libraries

As the above process specifies, fork the main repository, and check it out.

Next boot up your build server - this allows communication between our build tool, the file system and git. 

Navigate to your repository, then run:

```
java -jar shared/bin/LibraryWizard.jar --build-and-run libraries/<vendor_name>
```

or (if you are not on Windows):

```
shared/bin/build.sh libraries/<vendor_name>
```

where ```<vendor_name>``` matches a directory in the libraries folder. By default the build server will serve contents using port 8888 (to change the port, use the --port <port number> option).

This will launch a browser showing the tag-library build tool. From here you can edit existing tags, create new versions of tags that will notify users of changes and write tests against your tags.

When you have finished editing your tags, commit them back to your local repository and pull request against our main repository.  
