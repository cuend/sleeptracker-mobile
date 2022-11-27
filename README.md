--Readme document for _author(s)_, _email(s)_, _UCI id(s)_--
Anthony Martinez, anthomm5@uci.edu, 58472467
David Cuen, cuend@uci.edu, 61157101

1. How many assignment points do you believe you completed (replace the \*'s with your numbers)?

20/20

- 2/2 The ability to log overnight sleep
- 2/2 The ability to log sleepiness during the day
- 2/2 The ability to view these two categories of logged data
- 4/4 Either using a native device resource or backing up logged data
- 4/4 Following good principles of mobile design
- 4/4 Creating a compelling app
- 2/2 A readme and demo video which explains how these features were implemented and their design rationale

2. How long, in hours, did it take you to complete this assignment?

   20+ hours

3. What online resources did you consult when completing this assignment? (list specific URLs)

   - https://javascript.plainenglish.io/ionic-5-charts-graphs-using-chartjs-library-5ce69b83b2a9

4. What classmates or other individuals did you consult as part of this assignment? What did you discuss?

   No one outside of our group.

5. Is there anything special we need to know in order to run your code?

   - Do not run ionic lab locally on firefox, the browser causes unintended behavior in the app
   - Also notifications do not work outside of the simulator

--Aim for no more than two sentences for each of the following questions.--

6. Did you design your app with a particular type of user in mind? If so, whom?

   - No, just a general iPhone user.

7. Did you design your app specifically for iOS or Android, or both?

   No, but we simulate only on iOS for notifications.

8. How can a person log overnight sleep in your app? Why did you choose to support logging overnight sleep in this way?

   They can click the "Start Sleep" button on the log sleep tab and leave it until they wake up.
   OR they can click "Log a previous night's sleep", set when they fell asleep and when they woke up, and click "Log Sleep". We chose to have 2 options of logging sleep because we wanted the user to have the freedom of logging their sleep manually or letting the app time it for them.

9. How can a person log sleepiness during the day in your app? Why did you choose to support logging sleepiness in this way?
   A user can log sleepiness by navigating to the Track Sleepiness tab and using the slider to rate how sleepy they feel between a value of 1 to 7. There is also an optional section to add a note about why they chose their rating, which is limited to 50 characters. We wanted to make logging sleepiness as simple as possible, so we added a slider for ease of rating and logging.

10. How can a person view the data they logged in your app? Why did you choose to support viewing logged data in this way?

    A user can navigate to the View Data tab where two lines graphs are shown displaying the last 5 data logs (irrespective of the date logged for a single log), for overnight logs on top and sleepiness ratings on the bottom. Also, after loggin new data, to refresh the graphs, pull down to reload the tab and the graphs with update to show the new data. We only wanted to show the last 5 points so the graphs are not cluttered, but still show enough to display trends in the logged data.

11. Which feature choose--using a native device resource, backing up logged data, or both?
    We chose to use a native device resource (Notifications).

12. If you used a native device resource, what feature did you add? How does this feature change the app's experience for a user?

    Our native device resource is sending notifications to the user to remind them to log their sleepiness after clicking the "Start Sleep" button on the Log Sleep tab. To reduce the waiting time, the app is set to send a notification one minute after clicking the "Start Sleep" button.

13. If you backed up logged data, where does it back up to?
    N/a

14. How does your app implement or follow principles of good mobile design?

    A useful initial view: When you open the app, you are taken to the Log Sleep page which is the main feature of the app where you can start/end sleep logs or log them manually.

    Error prevention: Slider in the sleepiness log page to prevent values out of range. Limiting text to 50 characters to prevent exessivley large logs. Using a calendar component slider to prevent incorrect dates from being logged.

    Follow platform conventions (iOS): Modeled after other iOS apps, like Spotify and SleepScore for usability features, which consider button placement, UI coloring, and text size/placement to focus in on the main functionality of the app.
