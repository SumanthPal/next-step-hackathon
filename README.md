# next-steps-hackathon


## Inspiration
This spring, one of our team member's cousins fell sick with COVID-19. He had progressively worse symptoms over the course of a few weeks. The sickness eventually got so bad that he struggled to breathe at times. He made the logical decision to visit a hospital. However, he was rejected since the ICU beds were full. Eventually, he recovered, but things could have turned out much worse. Being denied treatment could have meant worse symptoms or potentially death. We thought there must be some way that patients in need of urgent medical attention could find out what hospital with open beds to go to before their condition gets worse.

## What it does
By entering your state and city, Med-Observer will identify the hospitals in your city and provide users with information about the bed count and location of each hospital. The directions to the surrounding hospitals on Google Maps are available as well.

## How we built it
We built Med-Observer's front-end using the react.js javascript library and styled the user interface using CSS animations and TailwindCSS. The back-end was initially done with the Flask micro-web framework in python, but then we switched to a javascript backend for simplicity and efficiency reasons. 
How did we make it work? We used a hospital dataset containing the city, state, and the bed count of the hospital, and then displayed a list of the hospitals in the specific city when it is searched.

## Challenges we ran into
We had high visions and goals for our project, but there were many things that got in the way that we had to overcome. First of all, this was the first time our team members worked together. We have different coding backgrounds, so it was a challenge to find our strengths and coordinate tasks accordingly. This was our group's first time using many of these, including Flask, React.js, and Node.js. It proved difficult to get acquainted with and use these under a time crunch. We also had some trouble finding an adequate server to host our application. It took some research to find the service that we ended up using - Heroku. All of these features required a lot of time to get used to and overcome the learning curve.

## Accomplishments that we're proud of
We're proud of creating a functional, helpful application in a limited time period.

## What we learned
- Web scraping datasets
- How to use React.js and Flask
- How to style the User Interface to our needs
- Connecting the front-end and back-end
- Git control

## What's next for Hospital Bed Tracker
- Creating mobile applications
- Using machine learning to create more accurate hospital bed count predictions
- Displaying the hospital wait times
- Showing the hospital's rating
- Using additional datasets for more information







The app is also hosted on Heroku. Check this link to try it out! https://med-observer.herokuapp.com/
