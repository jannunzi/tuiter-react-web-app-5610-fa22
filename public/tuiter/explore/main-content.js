import tuits from "./tuits.js";
import tuitComponent from "./tuit-component.js";
import tabs from "./tabs.js";

const mainContent = () => {
    const result = (`
        <div class="row">
            <div class="col-10">
                <div class="position-relative">
                    <input class="ps-5 form-control rounded-pill" placeholder="Search Tuiter"/>
                    <span class="position-absolute wd-search-tuiter">O-</span>
                </div>
            </div>
            <div class="col-2">
                COG
            </div>
        </div>

        ${tabs()}

        <div class="position-relative">
            <img src="../../images/starship.jpg" width="100%"/>
            <h1 class="position-absolute bottom-0 left-0 text-white">SpaceX's Starship</h1>
        </div>

        <ul class="list-group">
            ${tuits.map(tuit => tuitComponent(tuit)).join('')}
        </ul>

    `)

    return result;
}

export default mainContent;