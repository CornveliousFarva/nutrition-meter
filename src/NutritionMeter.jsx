import React, { useState, useEffect } from "react";
import "./NutritionMeter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { 
  faEdit, 
  faTrashAlt, 
  faUtensils, 
  faPlus, 
  faMinus, 
  faTimes, 
} from "@fortawesome/free-solid-svg-icons";

const NutritionMeter = () => {
    const defaultItemsDisplayed = [
        {
            id: 1,
            name: "Chicken Sandwich",
            calories: 200,
            protein: 0.2,
            carbs: 20,
            fat: 3,
            quantity: 1,
        },
    ];

    const [nutritionItems, setNutritionItems] = useState(defaultItemsDisplayed);
    const [newItem, setNewItem] = useState({
        name: "",
        calories: "",
        protein: "",
        carbs: "",
        fat: "",
    })

    const [editItem, setEditItem] = useState(null);
    const [totalCalories, setTotalCalories] = useState(0);
    const [showWarning, setShowWarning] = useState(false);
    const [inputError, setInputError] = useState(false);

    useEffect(() => {
      const calculateTotalCalories = nutritionItems.reduce(
        (total, item) => total + parseFloat(item.calories) * item.quantity, 0
      );
      
      setTotalCalories(calculateTotalCalories);

      if (calculateTotalCalories > 1000) {
        setShowWarning(true);
      } else {
        setShowWarning(false);
      }
    }, [nutritionItems])

    
}