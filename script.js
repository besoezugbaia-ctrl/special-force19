
const artworks = [
    { title: "სამუშაო მაგიდა", longTitle: "ხის ზედაპირი, რომელიც სიმყუდროვესა და ორგანიზებულობას აძლევს სივრცეს.", link: "#" },
    { title: "რვეული/დღიური", longTitle: "მაგიდის ცენტრში დევს ტყავის ყდიანი რვეული, რომელსაც ეტყობა ხარისხიანი ნამუშევრის დახვეწილი დეტალები", link: "#" },
    { title: "საზომი ხელსაწყოები", longTitle: "მაგიდაზე განთავსებულია შავი ფერის კუთხსაზომი (სახაზავი), რაც მიუთითებს იმაზე, რომ ეს სივრცე ხშირად გამოიყენება ტექნიკური ან საპროექტო სამუშაოებისთვის.", link: "#" },
    { title: "სამუშაო ნივთები", longTitle: "გვერდით ჩანს თეთრი მარკერი ან კალამი, ხოლო მაგიდის კიდეზე მოჩანს საფულე ან პატარა ჩასადები, რაც სივრცეს ყოველდღიურ, გამოყენებით ხასიათს სძენს.", link: "#" },
    { title: "ინტერიერი", longTitle: "ფონში ჩანს თანამედროვე დიზაინის ნარინჯისფერი სკამი თხელი ფეხებით, რაც კლასიკურ ხის მაგიდასთან ერთად კონტრასტულ და მოდურ ვიზუალს ქმნის.", link: "#" },
    { title: "დასკვნა", longTitle: "მთლიანობაში, ეს სურათი აღწერს სამუშაო მაგიდის ესთეტიკას, რომელიც ხასიათდება სისუფთავით, ორგანიზებულობით და შემოქმედებითი პროცესისთვის მზადყოფნით.", link: "#" }
];

const listSection = document.getElementById('images-list');

artworks.forEach(art => {
    const card = document.createElement('div');
    card.className = 'card';
    
    card.innerHTML = `
        <img src="https://fastly.picsum.photos/id/534/1000/800.jpg?hmac=tFbU1nZ2RnQNroI_ToBhH-LFB8KNjyWoc3bVv5G9Wkw" alt="${art.title}">
        <h3>${art.title}</h3>
        <div class="extra-info">
            <p>${art.longTitle}</p>
            <a href="${art.link}">See more details</a>
        </div>
        <div class="buttons">
            <button class="details-btn">see more details</button>
            <button class="remove-btn">remove card</button>
        </div>
    `;

    card.querySelector('.remove-btn').addEventListener('click', () => card.remove());
    
    card.querySelector('.details-btn').addEventListener('click', (e) => {
        const info = card.querySelector('.extra-info');
        info.style.display = info.style.display === 'block' ? 'none' : 'block';
    });

    listSection.appendChild(card);
});