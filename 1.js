function plus() {
    const elem1 = document.getElementById("n1").value;
    const elem2 = document.getElementById("n2").value;
    document.getElementById("out").textContent = parseInt(elem1) + parseInt(elem2);
}

//getElementById допомагає знайти елемент на сторінці за його ідентифікатором, щоб виконати дії з ним.

//parseInt використовується для перетворення рядка на ціле число, якщо це необхідно.

//innerHTML використовується для отримання або зміни HTML-вмісту елемента.

//textContent використовується для отримання або зміни текстового вмісту елемента без форматування HTML.