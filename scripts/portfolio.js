function main() {
  const headerContainerEl = document.querySelector(
    ".header-component-container"
  );
  insertHeaderComponent(headerContainerEl);

  const footerContainerEl = document.querySelector(
    ".footer-component-container"
  );
  insertFooterComponent(footerContainerEl);
}

function connectToApiPortfolio() {
  fetch(
    "https://cdn.contentful.com/spaces/9eckq975r12y/environments/master/entries?access_token=moNXdOHXyYw91xx7JXsj766e4MeK1k8lpX4-0S-JWa0&content_type=apxM4PortfolioPage&order=sys.createdAt"
  )
    .then((response) => response.json())
    .then((data) => dataProcess(data));
}

function dataProcess(apiData) {
  const itemsArray = apiData.items;
  const imgsArray = apiData.includes.Asset;

  const objParams = {
    title: "",
    description: "",
    img: "",
    url: "",
  };

  const itemImgId = {
    item: 0,
    id: "",
  };

  itemsArray.forEach((item, i) => {
    objParams.title = item.fields.title;
    objParams.description = item.fields.text;
    objParams.contentType = item.sys.contentType.sys.id;
    objParams.url = item.fields.url;

    itemImgId.item = i;
    itemImgId.id = item.fields.image.sys.id;

    imgsArray.forEach((img) => {
      if (itemImgId.id == img.sys.id) {
        objParams.img = img.fields.file.url;
      }
    });

    addportfolioItem(objParams);
  });
}

function addportfolioItem(params) {
  const containerTemplateEl = document.querySelector(
    ".card-portfolio-container"
  );
  const itemTemplateEl = document.querySelector(".portfolio-item-template");

  itemTemplateEl.content.querySelector(".card-portfolio__title").textContent =
    params.title;
  itemTemplateEl.content.querySelector(
    ".card-portfolio__description"
  ).textContent = params.description;
  itemTemplateEl.content.querySelector(".card-portfolio__img").src = params.img;
  itemTemplateEl.content.querySelector(".card-portfolio__anchor").href =
    params.url;

  const clone = document.importNode(itemTemplateEl.content, true);
  containerTemplateEl.appendChild(clone);
}

connectToApiPortfolio();

main();
