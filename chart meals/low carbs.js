function green(button) {
  button.style.borderColor = "#00ff3c";
}

const mealList = [
  {
    id: "meal1",
    image: "chicken salad.jpg",
    alt: "Meal 1",
    name: "Grilled chicken salad",
    price: "199",
    details: "Enjoy a healthy blend of fresh greens topped with succulent grilled chicken breast strips. Our grilled chicken salad is a nutritious delight, packed with flavor and goodness. With just 350 calories per serving, it's the perfect choice for a balanced meal.",
  },
  {
    id: "meal2",
    image: "caesar.jpg",
    alt: "Meal 2",
    name: "Caesar salad",
    price: "149",
    details: "Indulge in the classic flavors of our Caesar salad, featuring crisp romaine lettuce, tangy Caesar dressing, crunchy croutons, and grated Parmesan cheese. It's a timeless favorite, perfect for a light yet satisfying meal. Each serving contains approximately 300 calories.",
  },
  {
    id: "meal3",
    image: "BBQ-Chicken-burger.png",
    alt: "Meal 3",
    name: "BBQ Chicken Burger",
    price: "229",
    details: "Sink your teeth into our mouthwatering BBQ Chicken Burger, featuring a juicy grilled chicken patty smothered in tangy barbecue sauce, topped with melted cheese, crispy bacon, lettuce, and tomato, all nestled in a soft bun. This hearty burger packs a punch with approximately 500 calories per serving.",
  },
  {
    id: "meal4",
    image: "Basil-Pesto-pastajpg.jpg",
    alt: "Meal 4",
    name: "Pesto Pasta",
    price: "179",
    details: "Savor the rich flavors of our Pesto Pasta, featuring al dente pasta tossed in a creamy basil pesto sauce, garnished with sun-dried tomatoes and freshly grated Parmesan cheese. This comforting dish is both satisfying and flavorful. Each serving contains approximately 400 calories.",
  },
  {
    id: "meal5",
    image: "pasta.jpg",
    alt: "Meal 5",
    name: "Pasta",
    price: "69",
    details: "Enjoy a simple yet delicious pasta dish, featuring your choice of pasta noodles tossed in a savory marinara sauce and topped with grated Parmesan cheese. It's a classic comfort food that never disappoints. Each serving contains approximately 300 calories.",
  },
  {
    id: "meal6",
    image: "veg.jpg",
    alt: "Meal 6",
    name: "Vegetable Stir-fry",
    price: "169",
    details: "Delight in the vibrant flavors of our Vegetable Stir-fry, featuring a colorful medley of fresh vegetables stir-fried to perfection in a savory sauce, served over steamed rice. This dish is both wholesome and satisfying, with approximately 250 calories per serving.",
  },
  {
    id: "meal7",
    image: "sushi.jpg",
    alt: "Meal 7",
    name: "Sushi",
    price: "169",
    details: "Embark on a culinary adventure with our exquisite selection of sushi rolls, meticulously crafted with the freshest ingredients and expert precision. From classic California rolls to innovative specialty rolls, each bite is a burst of flavor and texture. Our sushi is both delicious and nutritious, with approximately 300-400 calories per serving, depending on the variety.",
  },
  // Add more meal data as needed
];


const container = document.querySelector(".container");

mealList.forEach((meal, index) => {
  const mealId = meal.id; // Generating unique meal ID
  const imageId = `image${index + 1}`; // Generating unique image ID

  const mealDiv = document.createElement("div");
  mealDiv.classList.add("meal");
  mealDiv.id = mealId;

  const mealContainer = document.createElement("div");
  mealContainer.classList.add("meal-container");
  mealContainer.innerHTML = `
            <img src="${meal.image}" alt="${meal.alt}" id="${imageId}">
            <h2>${meal.name}</h2>
            <div class="price">${meal.price}</div><br>
        `;
  mealDiv.appendChild(mealContainer);
  console.log(mealId);
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container");
  buttonContainer.innerHTML = `
            <button class="buy-now-button" onclick="buyNow('${mealId}'); green(this)">Buy Now</button>
            <button class="cart-button">Add to Cart</button>
        `;
  mealDiv.appendChild(buttonContainer);

  container.appendChild(mealDiv);
});



  // Find the meal object based on its ID
function buyNow(mealId) {
  console.log("buying now...")
    // Find the meal object based on its ID
    const selectedMeal = mealList.find(meal => meal.id === mealId);

    if (selectedMeal) {
        
        // Update pop-up content with meal details
        document.getElementById('mealName').innerText = selectedMeal.name;
        document.getElementById('popupImage').src = selectedMeal.image;
        // Assuming meal has a details property, you can adjust accordingly
        // document.getElementById('mealDetails').innerText = selectedMeal.details;
        document.getElementById('mealDetails').innerText = selectedMeal.details;
        document.getElementById('mealPrice').innerText = `Price: ${selectedMeal.price}`;

        // Show the pop-up
        document.getElementById('popup').style.display = 'block';
        document.getElementById('popupOverlay').style.display = 'block';
        
    } else {
        console.error("Meal not found with ID:", mealId);
    }
}


function closePopup() {
  // Close the pop-up
  document.getElementById('popup').style.display = 'none';
  document.getElementById('popupOverlay').style.display = 'none';
}


window.addEventListener('scroll', function() {
  let scrolled = window.scrollY;
  let parallaxBg = document.querySelector('.parallax-bg');
  parallaxBg.style.transform = 'translateY(' + scrolled * 0.5 + 'px)';
});
