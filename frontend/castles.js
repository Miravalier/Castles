function setPageHash(hash) {
    window.location.replace(window.location.href.split('#')[0] + `#${hash}`);
}

function renderPage() {
    const page = window.location.hash.substring(1).split("/")[0];

    let pageFound = false;
    for (const pageLink of document.querySelectorAll("#page-select .page")) {
        const pageBody = document.querySelector(`#page-display .page[data-page="${pageLink.dataset.page}"]`);
        if (pageLink.dataset.page == page) {
            pageFound = true;
            pageLink.classList.add("active");
            pageBody.classList.add("active");
        }
        else {
            pageLink.classList.remove("active");
            pageBody.classList.remove("active");
        }
        pageLink.addEventListener("click", () => {
            setPageHash(pageLink.dataset.page);
        });
    }

    if (!pageFound) {
        setPageHash("rules");
    }

    if (page == "decks") {
        renderDecksPage();
    }
}

function renderDecksPage() {
    const deck = window.location.hash.substring(1).split("/")[1];

    let deckFound = false;
    for (const deckLink of document.querySelectorAll("#deck-select .deck")) {
        const deckBody = document.querySelector(`#deck-display .deck[data-deck="${deckLink.dataset.deck}"]`);
        if (deckLink.dataset.deck == deck) {
            deckFound = true;
            deckBody.classList.add("active");
        }
        else {
            deckBody.classList.remove("active");
        }
        deckLink.addEventListener("click", () => {
            setPageHash(`decks/${deckLink.dataset.deck}`);
        });
    }

    if (deckFound) {
        document.querySelector("#deck-select").classList.remove("active");
    }
    else {
        document.querySelector("#deck-select").classList.add("active");
    }
}

document.addEventListener("DOMContentLoaded", renderPage);
window.addEventListener("hashchange", renderPage);
