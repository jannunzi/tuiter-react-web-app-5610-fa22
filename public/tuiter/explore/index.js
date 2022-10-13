import navigation from "./navigation.js";
import mainContent from "./main-content.js";

function init() {
    $('#explore').append(`
        <div class="container pt-1">
        <div class="row">
            <div class="col-2">
                ${navigation()}
            </div>
            <div class="col-6">
                ${mainContent()}
            </div>
            <div class="col-4">
                Who to follow
            </div>
        </div>
        <h1>Explore</h1>
        <input placeholder="Search Tuiter"/>
        &#x2699;
        <ul class="wd-nav-tabs">
            <li class="wd-selected">For you</li>
            <li>Trending</li>
            <li>COVID-19</li>
            <li class="wd-selected">News</li>
            <li>Sports</li>
        </ul>
        <div>
            <h3>Trending in Science</h3>
            <h1>Starship</h1>
            <h3>55.5K views</h3>
        </div>
        <div>
            <h3>The NY Times</h3>
            <h1>CNN's Cuomo Conundrum</h1>
            <h3>55.5K views</h3>
<!--            <img src="../../labs/a2/teslabot.jpg"/>-->
        </div>
    </div>
    `)
}
$(init)