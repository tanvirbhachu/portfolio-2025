
# My Portfolio

This is the codebase for my portfolio that you can go see at https://tanvirbhachu.dev. 

I've built a lot of portfolios in the past — for this one, I wanted something that would last a little longer. I also wanted to play with more creative elements like 3D and other visual effects. 

Another huge thing I really wanted was a blog — I want to get more into posting about my experiences and thoughts and so having a personal blog was the easiest way to achieve that. 

## Technology

I used NextJS + TailwindCSS for everything since that's what I'm most comfortable with.

Now the arguably coolest part is the cool animated 3D effect in the hero section. I made this by myself using https://spline.design/ — but for performance reasons, I also hosted the file within the project so we can prefetch it and avoid lagging or the page loading but no animation occuring.

The blog part was done with https://www.sanity.io/ simply using their free tier.

# Misc

You'll notice that I have a `src/app/blog/feed.xml` route. I saw this in some of the https://tailwindcss.com/plus templates where you create a route to support RSS Feeds. This isn't shown in the UI just yet — I'll likely add it when I add sharing options for the articles.

We're also generating dynamic open graph images using the `api/og` route that recieves a title and just puts it on a pre-defined image. I might extend this to work with dynamic images in the future.

# Future updates

I have a couple things I want to add in the future, thought I should just list them here for the future.

1. Add article sharing options
2. Move the hosting out of Next and use Cloudflare R2 instead
3. Add project-specific pages since projects like https://jadebook.app/ have a lot going for them and exploring them more would be good.
4. Link all the tech badges to their respective websites so people can quickly open and see what they do.