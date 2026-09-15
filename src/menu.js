export function menu() {
    const content = document.querySelector('#content');
    const section = document.createElement('section');
    section.classList.add('menu');

    const h1 = document.createElement('h1');
    const ul = document.createElement('ul');
    
    const dishes = [
        { name: "Soupe a l'oignon gratinee", price: "$9"},
        { name: "Croque-monsieur, frites maison", price: "$14"},
        { name: "Boeuf bourguignon, puree", price: "$24"},
        { name: "Ratatouille nicoise, riz pilaf", price: "$17"},
        { name: "Tarte Tatin, creme crue", price: "$10"}
    ];

    dishes.forEach((dish) => {
        const li = document.createElement('li');
        li.textContent = `${dish.name} - ${dish.price}`;
        ul.appendChild(li);
    })
    h1.textContent = 'Menu';

    section.appendChild(h1);
    section.appendChild(ul);
    content.appendChild(section);
}