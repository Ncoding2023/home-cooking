import React from 'react';
import { RecipeMethodsFilterProps } from '../types/RecipeTypes';
import { CategoryBox, CategoryContainer, CategoryItemMethods, CategoryTitle } from '../styles/RecipeCategoryFilterStyles';
import { Apps ,LocalFireDepartment, OutdoorGrill, Fastfood, PanTool, RiceBowl, Kitchen, Restaurant  } from "@mui/icons-material";
// import FireplaceIcon from '@mui/icons-material/Fireplace';
// import GrillIcon from '@mui/icons-material/Grill';


const RecipeMethodsFilter: React.FC<RecipeMethodsFilterProps> = ({
  selectedRecipeMethods,
  onRecipeMethodsChange,
}) => {
  const methods = [
    { name: "", icon: <Apps /> }, 
    { name: "끓이기", icon: <LocalFireDepartment /> },
    // { name: "끓이기", icon: <SoupKitchen /> },
    { name: "굽기", icon: <OutdoorGrill /> },
    { name: "튀기기", icon: <Fastfood /> },
    { name: "찌기", icon: <RiceBowl /> },
    { name: "볶기", icon: <PanTool /> },
    { name: "기타", icon: <Restaurant /> }
  ];

  return (
    <CategoryContainer>
      <CategoryTitle color='#3E503E'>
      <Kitchen/> <strong>방식</strong>
        </CategoryTitle>
      <CategoryBox>
        {methods.map((method) => (
    <CategoryItemMethods
      key={method.name}
      isActive={selectedRecipeMethods === method.name}
      onClick={() => onRecipeMethodsChange(method.name)}
    >
      {method.icon} 
      <span style={{marginBottom:"10px"}} >{method.name}</span>
    </CategoryItemMethods>
  ))}
    {/* <CategoryItem
      key={method.name}
      isActive={selectedRecipeMethods === method.name}
      onClick={() => onRecipeMethodsChange(method.name)}
    >
      {method.icon} 
      <span style={{marginBottom:"10px"}} >{method.name}</span>
    </CategoryItem> 
  ))}*/}
      </CategoryBox>
    </CategoryContainer>
  );
};

export default RecipeMethodsFilter;