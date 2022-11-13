function project_comp(){
    return `<div id="pconatiner">

    <div id="p-utility"></div>

    <div id="projects-heading">

        <h2>Projects</h2>
        <div>

            <button id="new-project-btn">NEW PROJECT</button>
            <button>INTEGRATION</button>
            <button><i class="fa-solid fa-circle-question"></i></button>

        </div>

    </div>

    <div id="project-stats">

      <div>
        <div class="vertical-bar"></div>
        <div>
            <p>TOTAL AMOUNT OF PROJECTS</p>
            <h1 id="total-projects">0</h1>
        </div>
      </div>

      <div>
        <div class="vertical-bar"></div>
        <div>
            <p>PROJECTS CREATED THIS MONTH</p>
            <h1 id="created-month">0</h1>
        </div>
      </div>

      <div>
        <div class="vertical-bar"></div>
        <div>
            <p>PROJECTS CREATED THIS WEEK</p>
            <h1 id="created-week">0</h1>
        </div>
      </div>

    </div>

    <div id="your-projects">

        <p style="font-size: 13px; color:gray;">PROJECTS</p>

        <div id="filter-projects">

            <div>
                <h4>Project name</h4>
                <input id="project-name" type="text" placeholder="Project name">
            </div>
            <div>
                <h4>Date created</h4>
                <input id="date-created" type="number" placeholder="Date created">
            </div>
            <div>
                <h4>Integration</h4>
                <input id="integration" type="text" placeholder="Integration">
            </div>
            <div>
                <h4>Tasks</h4>
                <input id="tasks" type="text" placeholder="Tasks">
            </div>



        </div>

        <div id="all-projects">

            <!-- append all projects here -->
        </div>


    </div>


</div>
<div id="footer"></div>`
}

export default project_comp