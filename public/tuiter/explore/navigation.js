function navigation() {
    return (`
        <div class="list-group">
        <a href="https://en.wikipedia.org/wiki/Dune_(novel)"
           class="list-group-item list-group-item-action">
            Tuiter
        </a>
        <a href="https://en.wikipedia.org/wiki/Dune_(novel)"
           class="list-group-item list-group-item-action">
            Home
        </a>
        <a href="https://en.wikipedia.org/wiki/The_Lord_of_the_Rings"
           class="list-group-item list-group-item-action active">
            Explore
        </a>
        <a href="https://en.wikipedia.org/wiki/The_Forever_War"
           class="list-group-item list-group-item-action">
            Notifications
        </a>
        <a href="https://en.wikipedia.org/wiki/2001:_A_Space_Odyssey_(novel)"
           class="list-group-item list-group-item-action">
            Messages
        </a>
        <a href="https://en.wikipedia.org/wiki/Ender%27s_Game"
           class="list-group-item list-group-item-action disabled">
            Bookmarks
        </a>
    </div>
    <button class="btn btn-primary w-100 mt-1 rounded-pill">
        Tuit
    </button>

    <br/><br/><br/><br/><br/>

    <ul class="list-group">
        <li class="list-group-item active">
            Aliens
        </li>
        <li class="list-group-item">
            <a href="https://www.imdb.com/title/tt0088247"> Terminator</a>
        </li>
        <li class="list-group-item">Blade Runner</li>
        <li class="list-group-item">Lord of the Ring</li>
        <li class="list-group-item disabled">Star Wars</li>
    </ul>
    `)
}

export default navigation;