import React from "react"
import IngredientsList from "./components/IngredientsList"
import ClaudeRecipe from "./components/ClaudeRecipe"
import { getRecipeFromChefClaude, getRecipeFromMistral } from "./ai"

export default function Main() {
    const [ingredients, setIngredients] = React.useState([])
    const [recipe, setRecipe] = React.useState("")
    const [inputValue, setInputValue] = React.useState("")

    async function getRecipe() {
        try {
            const recipeMarkdown = await getRecipeFromChefClaude(ingredients)
            setRecipe(recipeMarkdown)
        } catch (err) {
            console.warn("Claude failed, falling back to Mistral:", err.message)
            try {
                const fallbackRecipe = await getRecipeFromMistral(ingredients)
                setRecipe(fallbackRecipe)
            } catch (fallbackErr) {
                console.error("Both Claude and Mistral failed:", fallbackErr.message)
                setRecipe("Sorry, we couldn't generate a recipe at the moment.")
            }
        }
        setIngredients([]) // Clear ingredients after getting the recipe
    }

    function addIngredient(e) {
        e.preventDefault()
        if (inputValue.trim() === "") return

        setIngredients(prev => [...prev, inputValue.trim()])
        setInputValue("") // clear input field
    }

    return (
        <main>
            <form onSubmit={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                />
                <button type="submit">Add ingredient</button>
            </form>

            {ingredients.length > 0 &&
                <IngredientsList
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                />
            }

            {recipe && <ClaudeRecipe recipe={recipe} />}
        </main>
    )
}
