function timeAlways(){
    return `<div id="utility">

    </div>

    <div id="date-sort">
        <div>
            <h2>My Dashboard</h2>
        </div>
        <div>
            <p id="date">November 10, 2022 </p>
            <i class="fa-solid fa-calendar-days"></i>
            <i class="fa-solid fa-chevron-left"></i>
            <i class="fa-solid fa-chevron-right"></i>

            <table id="date-buttons">
                <tr>
                    <td>Date</td>
                    <td>Week</td>
                    <td>Month</td>
                </tr>
            </table>

            <button>
                <i class="fa-solid fa-circle-question"></i>
            </button>

        </div>
    </div>

    <div id="stats">

    </div>


    <img id="productive-image" src="/assets/productive_bar.png" alt="">

    <div id="productive_apps">

        <h5>PRODUCTIVE APPS &nbsp <span id="pa-time">3 h 45m 6s</span></h5>
        <div> No data collected</div>

    </div>

    <div id="unproductive_apps">

        <h5>UNPRODUCTIVE APPS &nbsp <span id="upa-time">3 h 45m 6s</span></h5>
        <div>No data collected</div>

    </div>

    <div id="neutral_apps">

        <h5>NEUTRAL APPS &nbsp <span id="na-time">3 h 45m 6s</span></h5>
        <div>No data collected</div>

    </div>

    <img id="categories-image" src="/assets/categories_graph.png" alt="">

    <div id="footer">

    </div>`
}

export default timeAlways