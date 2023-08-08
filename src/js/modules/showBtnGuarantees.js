export default () => {
  const list = document.querySelector('.guarantees__list');

  if (list) {
    const listItems = list.querySelectorAll('.guarantees__list-item');
    const listBtn = document.querySelector('.guarantees__btn');
    let counter = list.dataset.quantity;

    if (listItems.length > counter) {
      listBtn.style.display = "flex";
    }

    listItems.forEach((item, i) => {
      if (i >= counter) {
        item.classList.add("hide");
      }
    })

    listBtn.addEventListener('click', function () {

      listItems.forEach((item, i) => {
        if (i >= counter) {
          item.classList.remove("hide");
        }
      })

      if (listBtn.classList.contains("active")) {
        listBtn.classList.remove("active");

        listItems.forEach((item, i) => {
          if (i >= counter) {
            item.classList.add("hide");
          }
        })

        return;
      }

      listBtn.classList.add("active");
    });

  }
}
