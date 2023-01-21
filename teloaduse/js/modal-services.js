let services = document.getElementsByClassName("service-expand-btn");
// console.log(services)

for(let i = 0; i < services.length; i++) {
    let serviceId = services[i].getAttribute("id");
    let serviceName = serviceId.replace('service-',''); 
    showModal(serviceName)
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    for(i = 0; i < services.length; i++){
        serviceId = services[i].getAttribute("id");
        let modalName = 'modal-' + serviceId;
        let modal = document.getElementById(modalName);

        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function showModal(serviceName) {
    let modalName = "modal-service-" + serviceName;
    let btnName = "service-" + serviceName;
    let closeName = serviceName + "-close";

    // Get the modal
    var modal = document.getElementById(modalName);

    let contactBtn = modal.getElementsByClassName('contact-btn')[0];
    // console.log(contactBtn)

    // Get the button that opens the modal
    var btn = document.getElementById(btnName);

    // Get the <span> element that closes the modal
    var span = document.getElementById(closeName);

    // When the user clicks on the button, open the modal
    btn.addEventListener("click", function() {
        modal.style.display = "block";
    })

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks on contact btn, close the modal
    contactBtn.onclick = function() {
        modal.style.display = "none";
    }
    // // When the user scrolls, close the modal
    // window.onscroll = function(){
    //     modal.style.display = "none";
    // }
}