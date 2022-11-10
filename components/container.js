function container() {
  return ` <div id="container">

    <div id="side_navbar">

      <div id="image_div">
        <img src="/assets/Screenshot 2022-11-09 111625.png" alt="">
      </div>

       <div class="navTab" id="desktime">
        <i class="fa-solid fa-desktop"></i>
        <h3>My Dashboard</h3>
       </div>

       <div class="navTab" id="projects">
        <i class="fa-solid fa-list-check"></i>
                <h3>Projects</h3>
       </div>
       
       <div class="navTab" id="work-sch">
        <i class="fa-solid fa-clock"></i>
        <h3>Work Schedules </h3>
        <i class="fa-solid fa-star"></i>
       </div>
       <div class="navTab" id="booking">
        <i class="fa-solid fa-ticket"></i> 
        <h3>Booking</h3>
        <i class="fa-solid fa-star"></i>
       </div>
       <div class="navTab" id="ac">
        <i class="fa-regular fa-calendar"></i>
        <h3>Absence Calender</h3>
        <i class="fa-solid fa-star"></i>
       </div>
       <div class="navTab" id="reports">
        <i class="fa-regular fa-flag"></i> 
        <h3>Reports</h3>
       </div>
       <div class="navTab" id="exports">
        <i class="fa-solid fa-file-export"></i>          
          <h3>Exports</h3>
          
       </div>
       <div class="navTab" id="settings">
        <i class="fa-solid fa-gear"></i>            <h3>Settings</h3>
       </div>


    </div>

    <div id="side_page">

        <div id="top_navbar">

            <div>
                <h3>Free trial active - 15 days left</h3>
                <button id="sn">SUBSCRIBE NOW</button>
                <button id="bd">BOOK A DEMO</button>
            </div>
            <div>
                <div>
                    <i id="menu" class="fa-solid fa-bars"></i>
                    <div id="search-bar">
                        <input type="text" placeholder="Search item">
                        <i class="fa-solid fa-magnifying-glass"></i>

                    </div>
                </div>
                <div>

                </div>
                <div>
                    <i class="fa-solid fa-bell"></i>
                    <p id="username">Username</p>
                    <div id="icon">U</div>
                    <i id="logout" class="fa-solid fa-right-from-bracket"></i>
                </div>
            </div>


        </div>

        <div id="content">

       


        </div>




    </div>

   



</div>`;
}

export default container;
