let modal = document.querySelector("#modal");
let close = document.getElementsByClassName("close")[0];

function showModal(id) {
    let image_src = document.getElementById(id).firstChild.getAttribute('src');

    let modalImg = document.querySelector("#modal_image");
    modal.style.display = "block";
    modalImg.src = image_src;

}

function closeModal() {
    modal.style.display = "none";
}

function showHide(category) {
    var element = document.querySelector(category);
    if (element.style.display == 'none' || element.style.display == '' ) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  }