# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Ajaxify Reddit

There's currently a little known gem out on the internet called [Reddit](https://www.reddit.com). The developers are currently swamped with new feature requests and need your help. They want to test out the Reddit website as a single page application. They have some starter code but haven't had a chance to go much further than that.

## API

Luckily, to access the data for the homepage and other landing pages, all you have to do is append `.json` to the end of the normal URL.

For example:

```
// Homepage
https://www.reddit.com/

// JSON data for the homepage
https://www.reddit.com/.json
```

```
// New Posts Tab
https://www.reddit.com/new/

// JSON data for the 'new' section
https://www.reddit.com/new/.json
```

## Deliverables

- Using Reddit's API, replicate the list of stories for each section. Each story (or article) should have an image, link, and any relevant information.
- By default, when a user opens the app, display the articles for the "hot" section (Reddit's homepage) without the user having to manually call any API request
- Allow the user to click the story link or image to go to the actual URL of the story. Have the web page open in another tab.
- In the navbar, clicking a tab should manipulate the DOM to display those articles rather than redirecting you to a new URL (ex. clicking “Controversial” should display the first 25 controversial articles)
- For now, **don't** worry about giving users the ability to upvote/downvote the story or anything else that can't be done without an access key.
- Make sure to read the below section on Code Quality

## Challenges

- Now that we've redone the original homepage, let's now come up with our own mind blowing UI using Bootstrap, make it responsive.

## Note on Code Quality

Going forward, Code Quality is going to be a factor in grading. It will never be worth more than 10% of the grade, but it's still an important part of writing code. Since you're unlikely to be working completely independently on projects, it's necessary that your code is readable and accessible to other developers. This means:

- Proper indentation of code
- Clear and concise comments about what each chunk of your code do
- Consistent spacing and line-breaks in code

Try to maintain these practices WHILE you're coding, rather than trying to put them all in and the end. You'll find it much easier.
