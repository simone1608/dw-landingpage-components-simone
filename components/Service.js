export default function Service(services) {

    let serviceElement = document.createElement("section");
    serviceElement.classList.add("services");

    services.forEach(function (service) {
        serviceElement.innerHTML += `
            <div class="service">
                <img src="${service.illustration}" alt="" class="service-illustration">
                <h2 class="service-headline">${service.headline}</h2>
                <p class="service-text">${service.text}</p>
                <a href="#" class="service-link">${service.linktext}</a>
            </div>
        `
    })


    return serviceElement
}