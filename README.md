# Kalvium MCQ Tab Switcher 🚀🎉

This simple tool helps you switch tabs while taking Kalvium MCQ assessments, so you can listen to music or look things up without any hassle!

## 📋 How to Use

Follow these steps carefully to get everything set up.

### Step 1: Prepare the Kalvium Quiz Tab

1.  Open your Kalvium MCQ quiz page. You will see a popup that says, **"Got it, don't show this info again"**.
2.  **IMPORTANT:** Do NOT click on it. Just leave it as is.

<img width="1917" height="872" alt="image" src="https://github.com/user-attachments/assets/1747f4a7-19e8-49ed-a044-ddca992a2019" />


> #### What if I already clicked it? 🤔
> No worries! You can easily reset it:
> 1.  Right-click anywhere on the Kalvium quiz page and select **Inspect**.
> 2.  Go to the **Application** tab in the developer tools.
> 3.  On the left-hand menu, go to **Local Storage** and select `app.kalvium`.
> 4.  Find the key `quiz-fullscreen-dialog-dismissed` and change its value from `true` back to `false`.

<img width="1919" height="969" alt="image" src="https://github.com/user-attachments/assets/41faccc8-9e9a-41f3-a4bc-0f4671ed301f" />



### Step 2: Start the Process

1.  Now, click the **Start Quiz** or **Retake Quiz** button on the Kalvium page.

<img width="1903" height="879" alt="image" src="https://github.com/user-attachments/assets/8a34542d-2a36-4490-8180-80aa0e366cca" />

2.  In the *same browser window*, open another tab with any website you want (like ChatGPT, your calendar, or YouTube 🎧).
3.  Come back to VS Code. If you haven't already, clone this repository and run `npm i` in your terminal.
4.  In the terminal, type the following command to run the script:
    ```
    node keypress.js
    ```
5.  Quick! You have **5 seconds** to click back into the Kalvium quiz window.
6.  The script will automatically switch you to your other tab. After a few seconds, it will switch you back to the quiz.

## ✨ Enjoy Your Freedom! ✨

And that's it! You can now freely switch between tabs while the quiz is running. Go ahead and listen to some tunes or keep your notes handy. Happy multitasking! 🎶💻🏆

