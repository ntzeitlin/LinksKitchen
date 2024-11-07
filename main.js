const materials = ['Hylian Rice', 'Big Hearty Truffle', 'Tabantha Wheat', 'Raw Prime Meat', 'Hateno Cheese', 'Bird Egg', 'Goat Butter', 'Fresh Milk', 'Cane Sugar', 'Raw Bird Thigh']
const materials2 = ['Raw Prime Meat', 'Hateno Cheese', 'Bird Egg', 'Goat Butter', 'Fresh Milk', 'Cane Sugar', 'Raw Bird Thigh']

const meals = []

const recipes = [
    {
        requiredIngredients: ['Hylian Rice', 'Big Hearty Truffle'],
        finalDish: "Mushroom Rice Balls"
    },
    {
        requiredIngredients: ['Hateno Cheese', 'Bird Egg'],
        finalDish: "Cheesy Omlette"
    },
    {
        requiredIngredients: ['Raw Prime Meat', 'Hylian Rice'],
        finalDish: "Prime Meat and Rice Bowl"
    },
    {
        requiredIngredients: ['Tabantha Wheat', 'Hateno Cheese'],
        finalDish: "Cheesy Hylian Pizza"
    }, 
    {
        requiredIngredients: ['Fresh Milk', 'Cane Sugar', 'Bird Egg'],
        finalDish: "Egg Pudding"
    }, 
    {
        requiredIngredients: ['Tabantha Wheat', 'Cane Sugar', 'Goat Butter', 'Bird Egg'],
        finalDish: "Egg Tart"
    }, 
    {
        requiredIngredients: ['Hylian Rice', 'Raw Prime Meat', 'Bird Egg'],
        finalDish: "Chicken Egg Fried Rice"
    }, 
    {
        requiredIngredients: ['Hylian Rice', 'Goat Butter', 'Bird Egg', 'Raw Bird Thigh'],
        finalDish: "Poultry Pilaf"
    } 

]

// iterate through list of recipes
// check to see if every required recipe ingredient is in ingredientsOnHand
// if every required ingredient is on hand, then push final dish to meals array

const cook = (...ingredientsOnHand) => {
    for (const recipe of recipes) {
        if (recipe.requiredIngredients.every((requiredIngredient) => ingredientsOnHand.includes(requiredIngredient))){
            meals.push(`${recipe.finalDish}`)
        }
    }
}

// test different materials on hand

// cook('Hylian Rice', 'Big Hearty Truffle')
// cook('Hateno Cheese', 'Bird Egg')
// cook('Raw Prime Meat', 'Bird Egg')
// cook('Bird Egg', 'Hateno Cheese')
// cook(materials[0], materials[1])
// cook('Hylian Rice', 'Raw Prime Meat', 'Bird Egg')
cook(...materials2)



console.log('MEALS:')
console.log('---------------')
for (const meal of meals) {
    console.log(meal)
}



