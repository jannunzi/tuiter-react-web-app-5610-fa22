function tuitComponent(tuit) {
    return(`
    <li class="list-group-item">
        <div class="row">
            <div class="col-8">
                <div class="text-secondary">
                    ${tuit.title}
                </div>
                <div class="fw-bolder">
                    ${tuit.topic} - 2h
                </div>
                <div class="fw-bolder">
                    ${tuit.tuit}
                </div>
            </div>
            <div class="col-4">
                <img class="float-end" src="../../images/react.png" height="100px">
            </div>
        </div>
    </li>
    `)
}
export default tuitComponent;