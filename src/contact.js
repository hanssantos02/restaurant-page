export function contact() {
    const content = document.querySelector('#content');
    const section = document.createElement('section');
    section.classList.add('contact');

    const header = document.createElement('h1');

    const infos = [
        { name: "Hans", role: "Manager", number: "123-456-789", email:"totallymyemail@gmail.com"},
        { name: "Sigma", role: "Chef", number: "987-654-321", email:"totallymyemailtoo@gmail.com"},
        { name: "Big Boi", role: "Waiter", number: "321-456-987", email:"probablymyemail@gmail.com"}
    ];

    header.textContent = "Contact Us";

    section.appendChild(header);

    infos.forEach((info) => {
        const h2 = document.createElement('h2');
        const role = document.createElement('p');
        const number = document.createElement('p');
        const email = document.createElement('p');

        h2.textContent = `${info.name}`;
        role.textContent = `${info.role}`;
        number.textContent = `${info.number}`;
        email.textContent = `${info.email}`;

        section.appendChild(h2);
        section.appendChild(role);
        section.appendChild(number);
        section.appendChild(email);
    });
    
    content.appendChild(section);
}