# A statically generated blog built with Yext Content and Pages

This is a blog starter for learning how to author content in the Yext Content Graph using AI computed markdown fields.

The templates for the home page and blog pages are in the `/templates` folder.

## Demo

https://hopefully-thirsty-rattler.pgsdemo.com/

## How to use this repo

1. [Create a Yext Hitchhikers Playground Account](https://hitchhikers.yext.com/create-playground-account).
2. You will need to add a few early access features to you account. Click on the account icon on the bottom left of the platform and then click on Account Settings. Here you will need to turn on 2 Early Access Features:

   - **Preview Feature: Markdown and Lexical Rich-Text Field Types**
   - **Preview Feature: Computed Field Values**

   You can follow along with this [video](https://www.loom.com/share/a72ae1b8c52c4fe391482ceac8bde49b?sid=b55caaf6-d556-4ae1-8ae5-616b4b92d3ea).

3. Download the [Yext CLI](https://hitchhikers.yext.com/docs/cli/installation/installation?target=hh-docs-cli-installation-installation)
4. Run `yext init -u sandbox {Your Yext Account ID}` . You can find your Yext account Id in the URL of your account. Example: If your account URL is [`https://sandbox.yext.com/s/3217294/home`](https://sandbox.yext.com/s/3217294/home) your account ID is [`3217294`](https://sandbox.yext.com/s/3217294/home) .
5. Run `yext pages new` . Select the following options:

```
Would you like to create a new repo or link an existing GitHub repo? Create a new repo
Which starter repository would you like to use? Blog Starter
What would you like to call your new Pages repo? {Your Repo Name}
Would you like to setup a remote GitHub repository for delete-me? Y
Would you like to install dependencies for {Your Repo Name}? Y
Would you like to populate your account with seed data? Y
```

6. At this point, you have added the required data to your account and your project is ready go! `cd` into your project directory and run `npm run dev` to run your project locally.

## Learn More

The following resources may be helpful:

[Pages Templates](https://hitchhikers.yext.com/docs/pages/templates/)

[Repo Structure](https://hitchhikers.yext.com/docs/pages/repo-structure/)
