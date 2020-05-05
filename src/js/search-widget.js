import {
  debounce,
  createAndAttachTextNode,
  appendChildren,
} from "./modules/utils.js";

const searchContainer = document.getElementById("searchContainer");
const searchArea = document.getElementById("searchArea");
const searchBar = document.getElementById("searchBar");

const searchResultsPreview = document.createElement("aside");
searchResultsPreview.id = "searchResultsPreview";

const dispenseSearchResults = (searchCandidates) => {
  searchResultsPreview.innerHTML = "";

  if (searchCandidates.length > 0) {
    searchCandidates.forEach(({ name, relPermalink, description, date }) => {
      const searchCandidateContainer = document.createElement("div");

      const resultParagraph = document.createElement("p");
      const resultAnchor = createAndAttachTextNode("a", name);
      const [postLink] = relPermalink.split("index.json");
      resultAnchor.href = postLink;
      resultParagraph.appendChild(resultAnchor);

      const dateParagraph = createAndAttachTextNode(
        "p",
        date.toString().substring(0, 10)
      );
      dateParagraph.classList.add("small-text");

      const descriptionParagraph = createAndAttachTextNode("p", description);
      descriptionParagraph.classList.add("small-text");

      appendChildren(searchCandidateContainer, [
        resultParagraph,
        dateParagraph,
        descriptionParagraph,
      ]);

      searchResultsPreview.appendChild(searchCandidateContainer);
    });
  }
};

(async () => {
  const { href } = location;

  const postsData = await fetch(href + "index.json");
  const postsJson = await postsData.json();

  const debounceKeyDown = debounce((evt) => {
    const searchTerm = evt.target.value.toLowerCase();

    if (searchTerm.length > 3) {
      searchContainer.appendChild(searchResultsPreview);

      searchResultsPreview.classList.add("appear");

      const searchCandidates = postsJson.data.filter((post) => {
        if (post.name.toLowerCase().includes(searchTerm)) return true;
      });

      dispenseSearchResults(searchCandidates);
    } else if (searchResultsPreview.children.length) {
      searchResultsPreview.innerHTML = "";
      searchContainer.removeChild(searchResultsPreview);
    }
  }, 500);

  searchBar.addEventListener("keyup", debounceKeyDown);
  searchBar.addEventListener("click", debounceKeyDown);

  searchBar.addEventListener(
    "search",
    () => (searchResultsPreview.innerHTML = "")
  );

  document.addEventListener("click", (evt) => {
    if (
      searchResultsPreview.children.length &&
      !evt.target.closest("#searchContainer")
    ) {
      searchResultsPreview.innerHTML = "";
    }
  });

  searchArea.addEventListener("submit", (evt) => evt.preventDefault());
})();
