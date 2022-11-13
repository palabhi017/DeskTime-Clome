function exportPage(){


    return `<div id="utility-1"></div>
    <div id="export">
    <div id="export_para">
        <p class="head">Exports</p>
        <p>Exports is data exported to spreadsheets and sorted into cells and sheets. You can turn to this feature to see much more detailed information on your employee’s time spending habits.
        </p>
        <h4>How to use Exports:</h4>
        <li>
        Choose from 11 different data categories that encompass all DeskTime activities.
        </li>
        <li>
        Download your team’s (as well as your own) productivity data in excel or .csv formats.
        </li>
        <li>Analyze employee performance, share with clients to explain your costs or use in any other way
        </li>
        <li>
        Use the raw data to create custom visualizations via pivot tables, charts, .etc.
        </li>
        <li>
        Add reports with detailed billable hours when invoicing clients.
        </li>
        <li>
        Exports store information for a period of 1 year.
        </li>
        <button class="demo">GOT IT</button>
        <button class="trial">READ MORE</button>
    </div>
    <div>
        <img src="https://desktime.com/static/app/intro/exports.png?v1" alt="" id="export_img">
    </div>
    </div>
    <div id="generate_history">
    <p class="head2">Exports</p>
    <button id="export_btn">GENERATE EXPORT</button>
    <button>EXPORT HISTORY</button>
    <p class="head2">Choose your data set</p>
    <div id="card">
        <!-- 1 -->
        <div class="generate">
            <div class="img">
                <img src="	https://desktime.com/vendor/desktime/exports/img/icons/icons-64-x-64-team-members.svg" alt="">
            </div>
            <div class="gen_data">
                <p>TEAM MEMBER</p>
                <p>Provides information about team member working times, arrival and leaving times, and productivity.</p>
                <p class="gen_green">GENERATE</p>
            </div>
        </div>
        <!-- 2 -->
        <div class="generate">
            <div class="img">
                <img src="https://desktime.com/vendor/desktime/exports/img/icons/icons-64-x-64-applications.svg
                " alt="">
            </div>
            <div class="gen_data">
                <p>APPLICATION</p>
                <p>Shows all of the applications used by the selected employees and the time spent on each.</p>
                <p class="gen_green">GENERATE</p>
            </div>
        </div>
        <!-- 3 -->
        <div class="generate">
            <div class="img">
                <img src="https://desktime.com/vendor/desktime/exports/img/icons/icons-64-x-64-productivity-bar-apps.svg" alt="">
            </div>
            <div class="gen_data">
                <p>PRODUCTIVITY BAR APPS</p>
                <p>Shows the used applications at specific times of the day for a single team member.</p>
                <p class="gen_green">GENERATE</p>
            </div>
        </div>
        <!-- 4 -->
        <div class="generate">
            <div class="img">
                <img src="	https://desktime.com/vendor/desktime/exports/img/icons/icons-64-x-64-windows-title.svg" alt="">
            </div>
            <div class="gen_data">
                <p>WINDOW TITLE</p>
                <p>Provides information about team member working times, arrival and leaving times, and productivity.</p>
                <p class="gen_green">GENERATE</p>
            </div>
        </div>
        <!-- 5 -->
        <div class="generate">
            <div class="img">
                <img src="https://desktime.com/vendor/desktime/exports/img/icons/icons-64-x-64-offline-time.svg" alt="">
            </div>
            <div class="gen_data">
                <p>OFFLINE TIME</p>
                <p>Shows how much offline time each team members has taken each day (or has logged)</p>
                <p class="gen_green">GENERATE</p>
            </div>
        </div>
        <!-- 6 -->
        <div class="generate">
            <div class="img">
                <img src="https://desktime.com/vendor/desktime/exports/img/icons/icons-64-x-64-projects.svg" alt="">
            </div>
            <div class="gen_data">
                <p>PROJECTS</p>
                <p>Shows information on what projects and tasks have been worked on in the selected time period, including their costs.</p>
                <p class="gen_green">GENERATE</p>
            </div>
        </div>
        <!-- 7 -->
        <div class="generate">
            <div class="img">
                <img src="https://desktime.com/vendor/desktime/exports/img/icons/icons-64-x-64-projects-and-team-members.svg" alt="">
            </div>
            <div class="gen_data">
                <p>PROJECTS/TEAM MEMBERS</p>
                <p>Generates data on what projects and tasks each team member has worked on each day and for how long.</p>
                <p class="gen_green">GENERATE</p>
            </div>
        </div>
        <!-- 8 -->
        <div class="generate">
            <div class="img">
                <img src="https://desktime.com/vendor/desktime/exports/img/icons/icons-64-x-64-projects-apps.svg" alt="">
            </div>
            <div class="gen_data">
                <p>PROJECTS/APPS</p>
                <p>Shows what applications have been used by the selected team member(s) while working on each project for each day.</p>
                <p class="gen_green">GENERATE</p>
            </div>
        </div>
        <!-- 9 -->
        <div class="generate">
            <div class="img">
                <img src="https://desktime.com/vendor/desktime/exports/img/icons/icons-64-x-64-absence.svg" alt="">
            </div>
            <div class="gen_data">
                <p>ABSENCES</p>
                <p>Provides an overview of absences and their types taken by team members and who approved those absences</p>
                <p class="gen_green">GENERATE</p>
            </div>
        </div>
        <!-- 10 -->
        <div class="generate">
            <div class="img">
                <img src="https://desktime.com/vendor/desktime/exports/img/icons/icons-64-x-64-work-schedules.svg" alt="">
            </div>
            <div class="gen_data">
                <p>WORK SCHEDULES</p>
                <p>Shows all of the appointed shifts for the selected team members, their arrival times, productivity data and worked hours.</p>
                <p class="gen_green">GENERATE</p>
            </div>
        </div>
        <!-- 11 -->
        <div class="generate">
            <div class="img">
                <img src="https://desktime.com/vendor/desktime/exports/img/icons/icons-64-x-64-overtime.svg" alt="">
            </div>
            <div class="gen_data">
                <p>OVER TIME</p>
                <p>Shows how much overtime team members have worked (time over the minimum hours specified in the settings or shift).</p>
                <p class="gen_green">GENERATE</p>
            </div>
        </div>
    </div>
    </div>
    <div id="footer"></div>`

}

export default exportPage;
