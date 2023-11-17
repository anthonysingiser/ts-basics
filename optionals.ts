function printIngredient(quantity: string, ingredient: string, extra?: string) {
    console.log(`${quantity} ${ingredient} ${extra ? `${extra}` : ""}`)
}

printIngredient("1 Cup", "Flour")
printIngredient("1 Cup", "Flour", "Butter")