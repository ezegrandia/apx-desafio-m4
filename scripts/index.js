function main() {
  const headerContainerEl = document.querySelector(
    ".header-component-container"
  );

  insertHeaderComponent(headerContainerEl);
}

function connectToApiContentful() {
  fetch(
    "https://cdn.contentful.com/spaces/9eckq975r12y/environments/master/entries?access_token=moNXdOHXyYw91xx7JXsj766e4MeK1k8lpX4-0S-JWa0&content_type=apxM4Hello&order=sys.createdAt"
  )
    .then((response) => response.json())
    .then((dataHello) => processInfoContentful(dataHello));

  fetch(
    "https://cdn.contentful.com/spaces/9eckq975r12y/environments/master/entries?access_token=moNXdOHXyYw91xx7JXsj766e4MeK1k8lpX4-0S-JWa0&content_type=apxM4AboutMe&order=sys.createdAt"
  )
    .then((response) => response.json())
    .then((dataAboutMe) => processInfoContentful(dataAboutMe));

  fetch(
    "https://cdn.contentful.com/spaces/9eckq975r12y/environments/master/entries?access_token=moNXdOHXyYw91xx7JXsj766e4MeK1k8lpX4-0S-JWa0&content_type=apxM4Services&order=sys.createdAt"
  )
    .then((response) => response.json())
    .then((dataServices) => processInfoContentful(dataServices));
}

function processInfoContentful(apiData) {
  const itemsArray = apiData.items;

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
  });

  if (objParams.contentType == "apxM4Hello") {
    document.querySelector(".hello-section__title").textContent =
      objParams.title;
    document.querySelector(".hello-section__subtitle").textContent =
      objParams.description;
  } else if (objParams.contentType == "apxM4AboutMe") {
    document.querySelector(".about-me__subtitle").textContent = objParams.title;
    document.querySelector(".about-me__text").textContent =
      objParams.description;
  } else if (objParams.contentType == "apxM4Services") {
    const imgsArray = apiData.includes.Asset;

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

      addServiceItem(objParams);
    });
  }
}

function addServiceItem(params) {
  const containerTemplateEl = document.querySelector(".service-item-container");
  const itemTemplateEl = document.querySelector(".services-item-template");

  itemTemplateEl.content.querySelector(".services__subtitle").textContent =
    params.title;
  itemTemplateEl.content.querySelector(".services__text").textContent =
    params.description;
  itemTemplateEl.content.querySelector(".services__img").src = params.img;
  itemTemplateEl.content.querySelector(".services__anchor").href = params.url;

  const clone = document.importNode(itemTemplateEl.content, true);
  containerTemplateEl.appendChild(clone);
}

connectToApiContentful();
main();
