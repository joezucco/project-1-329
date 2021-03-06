# Project Overview

**PROJECT NAME:** Portfolio Project

**PROJECT AUTHOR:** Joe Zucco

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

| Day   | Deliverable                                  | Status     |
| ----- | -------------------------------------------- | ---------- |
| Day 1 | Project Description                          | Complete   |
| Day 1 | Wireframes / Priority Matrix / Timeline      | Complete   |
| Day 3 | Core Application Structure (HTML, CSS, etc.) | Incomplete |
| Day 4 | MVP & Bug Fixes                              | Incomplete |
| Day 5 | Final Touches                                | Incomplete |
| Day 6 | Present                                      | Incomplete |

## Project Description

I intend to create a simple, sleek, easy-to-read portfolio that seemlessly delivers my content to the user. It will employ Bootstrap and Flexbox to create a dynamic and responsive web design to better showcase my work to the world. Given my background in design, my website will be stylish and aesthetically pleasing. 

## Google Sheet

https://docs.google.com/spreadsheets/d/1CZy5ARuZPmpNls7UiGMzUrNoBKb6aWbpNZcNUI6L6gI/edit#gid=0

## Portfolio I want to Emulate

Search and compare at least 3 profile web sites. Record your findings in the table below and include some aspect of the site that you would like to incorporate into your own site.

| Link To Site                 | One Thing I'd Like To Incorporate                                                                                                                                                                      |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| https://brittanychiang.com/  | Digging the seemless flow of content when scrolling. I like how it's all kept to one page.                                                                                                             |
| https://leerob.io/           | The simplicity is lovely. It'd be extra work but having a Spotify "Now Playing" widget bookend my portfolio would be really cool. I'd like to have optional navigation + socials in my footer as well. |
| http://eloiseressbarrow.com/ | I'd love to make a logo of my name and replace my initial `<h1>Joe Zucco</h1>` when the viewport is limited to mobile.                                                                                 |
| https://mxb.dev/             | Content `<div>`'s in grid respond to smaller viewport sizes by stacking on top of one another. In mobile the content is limited to one column as opposed to four.                                      |

---

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Do not include the actual image and have it render on the page.

- [Mobile] | (https://res.cloudinary.com/dnfumu7j3/image/upload/v1618250388/mobile_fxh9co.png)
- [Desktop] | (https://res.cloudinary.com/dnfumu7j3/image/upload/v1618250388/desktop_hyxuso.png)
- [Tablet] | (https://res.cloudinary.com/dnfumu7j3/image/upload/v1618250387/tablet_mawtum.png)

## Time/Priority Matrix

[My Time/Priority Matrix (Created in Google Sheets)](https://docs.google.com/spreadsheets/d/1NoLFcXH7yQn4thGgKYcNMvri8ZC5BuENQi1RJmcCvzU/edit?usp=sharing)

Include a full list of features that have been prioritized based on the `Time and Priority` Matix. This involves drawing a a square. In the middle of the square, on the x axis draw a line. The most left part of the line should start with 0hrs and the end of the line should include 2hrs. This line will be used to estimate how much time any one feature will take to complete.

Now draw a vertical line on the y axis. The top of this line should have `High` and the bottom `Low`. This line will be used to assign a priority to to each feature you wish to include in the project.

Now create a separate list starting with A and assign it one of the features. Continue to assign each feature a letter. Once complete add each letter to the matrix assigning based on what your feel it's prioirty is an how long it will take to implement. If any one feature takes longer than 2hrs to complete than break it down into smaller tasks and reassign them a new letter.

Once complete tally up the time and determine how long the project will take to complete. Now break those features into MVP and PostMVP so you can guarantee you will have a fully functioning project to demo.

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP. Carefully decid what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.

#### MVP

- Use semantic markup for HTML and CSS, adhering to best practices
- Use CSS GRID to create a multi-column layout
- Use Flexbox for content
- Must be MOBILE first, then tablet and desktop responsive
- Must pull in projects via API call from Google Sheet
- Be deployed and accessible online either via Github Pages, Surge, Render, etc.

#### PostMVP

- Add Spotify "Now Playing" widget to my footer
- Find way to implement pretty typeography into design
- Add full accessibility 

## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into functional components, and by that we mean functions. Try and capture what logic would need to be defined if the game was broken down into the following categories.

Time frames are also key in the development cycle. You have limited time to code all phases of the game. Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

#### MVP

| Component               | Priority | Estimated Time | Actual Time |
| ----------------------- | :------: | :------------: | :---------: |
| Hamburger               |    H     |      3hr       |     .5hr    |
| Project Previews        |    H     |      4hr       |     1hr     |
| Regular Nav             |    H     |      1hr       |     2hr     |
| Adding Form             |    M     |     1.5hr      |     1hr     |
| Other sections and flex |    M     |      3hr       |     2hr     |
| Working with API        |    H     |      6hrs      |     2hr     |
| Responsive              |    H     |      3hr       |     4hr     |
| Social Media Icons      |    L     |      1hr       |     1hr     |
| Cards                   |	   M	 |      2hr       |     4hr     |
| Total                   |    H     |    22.5hrs     |     17.5hrs |

#### PostMVP

| Component             | Priority | Estimated Time | Actual Time |
| --------------------- | :------: | :------------: | :---------: |
| Project Hover         |    L     |      3hr       |     hr     |
| Bootstrap             |    H     |      4hr       |     3hr      |
| Make own icon         |    L     |      4hr       |     hr      |
| Spotify Widget        |	 L	   |	  1hr       |     hrs	  |
| Jump Scroll        	|	 L	   |	  1hr       |     10mins  |
| Total                 |    H     |     20hrs      |     hrs     |

## Additional Libraries

Have used Bootstrap's navbar template for my navigation/responsive hamburger icon and dropdown.

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description

Alex's demonstration helped a lot when writing this code, but I am happy to say that I can explain what it is doing.

```
class MyCard extends HTMLElement {
  constructor() {
    super();

    const name = this.getAttribute("name");
    const git = this.getAttribute("git");
    const live = this.getAttribute("live");
    const img = this.getAttribute("img");
    const description = this.getAttribute("description");

    console.log(name);

    this.innerHTML = `
        <sl-card class="card">
        <h2 slot="header">${name}</h2>
        <img src=${img} alt=${name} slot="image">
        <p class="card-text">${description}</p>
        <sl-button-group class="btn-grp" slot="footer">
          <a href=${git}><sl-button class="sl-btn">Git</sl-button></a>
          <a href=${live}><sl-button class="sl-btn">Live</sl-button></a>
        </sl-button-group>
        </sl-card>
        `;
  }
}
```

## Issues and Resolutions

Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....

**ERROR** Could not get Bootstrap navbar to function
**Solution** Realized I had to put script tags after running the html

## Video Demonstration
https://www.youtube.com/watch?v=6wFFFNmOsWw