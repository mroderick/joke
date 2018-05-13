const viperHTML = require("viperhtml");
const render = viperHTML.wire();

function page(content) {
    return render`<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
        <title>${content.title}</title>
    </head>
    <body>
        <div class="container">
            <div class="row">
                <div class="col">
                    ${content.body}
                </div>
            </div>
        </div>    
    </body>
</html>
`;
}

module.exports.knock = function knock() {
    var html = page({
        title: "Knock, knock",
        body: "Knock, knock"
    }).toString();

    return html;
};

module.exports.whosthere = function whosthere() {
    const form = render`
        <h1>Who is there?</h1>
        <form method="post" action="./we-know">
            <label for="email">Your e-mail</label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="e.g. your.name@example.com">
            <small id="emailHelp" class="form-text text-muted">We will never share your email with anyone else.</small>
            <button type="submit" class="btn btn-primary">Send</button>
        </form>
    `;
    const html = page({
        title: "Who is there?",
        body: form
    }).toString();

    return html;
};

module.exports.weknow = function weknow() {
    var html = page({
        title: "We know",
        body: render`<h1>We know</h1>`
    }).toString();

    return html;
};
