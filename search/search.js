search.oninput = function search() {
    let search = document.getElementById('search')
    let inputs = document.getElementById('search').value.toLowerCase();
    let prod = document.getElementsByClassName('product')
    console.log(inputs);
    for (let i = 0; i < prod.length; i++) {
        let eachProd = prod[i];

        let eachTitle = document.getElementsByTagName('h3')[i]
        let m = eachTitle.innerHTML.toLowerCase().includes(inputs) || eachTitle.textContent.toLowerCase().includes(inputs)
        if (!m) {
            eachProd.style.display = 'none';
        } else if (m) {
            eachProd.style.display = ""
        }
    }
}