function report_comp(){
    return `<div id="reportcontainer">
    <div id="upperpart">
        <div id="logo">
            <h2>Reports</h2>
        </div>
        <div>
            <p id="date">November 10,2022</p>
            <img src="https://img.icons8.com/windows/32/null/calendar.png"/>
            <div id="arrow">
            <img src="images1/arrow.png"/>
            <img src="https://img.icons8.com/ios-filled/50/000000/more-than.png"/>
            </div>
            <div  id="choosedate">
                <div>Day</div>
                <div>Week</div>
                <div>Month</div>
            </div>
            <div id="qus">?</div>
        </div>
    </div>
    <div id="renav">
        <div>OVERVIEW</div>
        <div>COMPARE BY MEMBERS</div>
        <div>COMPARE BY DATE</div>
        <div>EXTRA HOURS</div>
        <div>PROJECT OVERVIEW</div>
        <div>PROJECTS</div>
    </div>
    <div id="filter">
         <div>
            <div>Teams</div>
            <div>Members</div>
         </div>
         <div>APPLY FILTER</div>
    </div>
    <div id="midbox">
        <div>
            <div>
                <p>DESKTIME TIME</p>
                <p>102h 40m</p>
            </div>
        </div>
        <div>
            <div>
                <p>TIME AT WORK</p>
                <p>168h 38m</p>
            </div>
        </div>
        <div>
            <div>
                <p>OFFLINE TIME</p>
                <p>6h 9m</p>
            </div>
        </div>
        <div>
            <div>
                <p>PROJECTS TIME</p>
                <p>67h 90m</p>
            </div>
        </div>
        <div>
            <div>
                <p>EFFECTIVENESS</p>
                <p>49.68%</p>
            </div>
        </div>
        <div>
            <div>
                <p>PRODUCTIVITY</p>
                <p>64.01%</p>
            </div>
        </div>
    </div>
    <div id="level">
       <img src="images1/levels.jpeg" alt="">
    </div>
    <div id="clientbox">
        <div>
            <img src="./assets/productive.png" alt="">
            <hr>
            <p id="productive">VIEW ALL(16)</p>
        </div>
        <div>
            <img src="./assets/unproductive.png" alt="">
            <hr>
            <p id="unproductive">VIEW ALL(16)</p>
        </div>
        <div>
            <img src="./assets/effect.png" alt="">
            <hr>
            <p id="effect">VIEW ALL(16)</p>
           
        </div>
        <div>
            <img src="./assets/desktime.png" alt="">
            <hr>
            <p id="desktime-card">VIEW ALL(16)</p>
            
        </div>
    </div>
    <!-- popup boxes -->
    <!-- box1 -->
    <div id="productive_div" class="modal">
        <div id="pContent" class="popup_content">
            <div class="span_div">
                <h2>Most Productive</h2>
                <span class="close-view-card">&times;</span>
            </div>
            <div>
                <img src="./assets/modal1.png" alt="">
            </div>
        </div>
    </div>
    <!-- box2 -->
    <div id="unproductive_div" class="modal">
        <div id="uContent" class="popup_content">
            <div class="span_div">
                <h2>Most Unproductive</h2>
                <span class="close-view-card">&times;</span>
            </div>
            <div>
                <img src="./assets/upwork.png" alt="">
            </div>
        </div>
    </div>
    <!-- box3 -->
    <div id="effect_div" class="modal">
        <div id="eContent" class="popup_content">
            <div class="span_div">
                <h2>Most Effective</h2>
                <span class="close-view-card">&times;</span>
            </div>
            <div>
                <img src="./assets/effectiveWork.png" alt="">
            </div>
        </div>
    </div>
    <!-- box4 -->
    <div id="desktime_div" class="modal">
       <div id="dContent" class="popup_content">
        <div class="span_div">
            <h2>Total Desktime time</h2>
            <span class="close-view-card">&times;</span>
        </div>
        <div>
            <img src="./assets/desktimeSpend.png" alt="">
        </div>
       </div>
    </div>
 
    <div id="clientdata">
         <div>
            <img src="./assets/new.png" alt="">
            <hr>
            <p>VIEW ALL</p>
         </div>
         <div>
            <img src="./assets/absence.png" alt="">
            <hr>
            <p>VIEW ALL</p>
         </div>
         <div>
            <img src="./assets/third.png" alt="">
            <hr>
            <p>VIEW ALL</p>
         </div>
    </div>
    <div id="product">
        <div><img src="images1/product1.jpeg" alt=""></div>
        <div><img src="images1/product2.jpeg" alt=""></div>
        <div><img src="images1/product3.jpeg" alt=""></div>
    </div>
    </div>
    <div id="footer"></div>`
}


export default report_comp