export function home() {
    const content = document.querySelector('#content');
    const section = document.createElement('section');
    section.classList.add("home");
    const h1 = document.createElement('h1');
    const image = document.createElement('img');
    const para1 = document.createElement('p');
    const h2 = document.createElement('h2');
    const para2 = document.createElement('p');
    h1.textContent = 'La Petite Fourchette';
    image.src = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80";
    image.alt = "Warm dining room with set tables at La Petite Fourchette";
    para1.textContent = "La Petite Fourchette is a small neighborhood restaurant serving seasonal French comfort food. Everything is cooked to order, the bread is baked daily, and the dining room is warm, quiet, and unhurried.";
    h2.textContent = "Hours";
    para2.textContent = "Tuesday–Sunday, 5pm–10pm. Walk-ins welcome; reservations recommended on weekends.";

    section.appendChild(h1);
    section.appendChild(image);
    section.appendChild(para1);
    section.appendChild(h2);
    section.appendChild(para2);
    content.appendChild(section);
}