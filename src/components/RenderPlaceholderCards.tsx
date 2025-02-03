import { Card } from "@mui/material";
// import RecipeCard from "./RecipeCard";

export const RenderPlaceholderCards = (filteredRecipesLength: number, totalRecipesLength: number) => {
  const placeholders = [];
  const itemsPerRow = 3; // 한 줄에 들어갈 카드 개수
  const rowsNeeded = Math.ceil(totalRecipesLength / itemsPerRow);
  const rowsFilled = Math.ceil(filteredRecipesLength / itemsPerRow);
  const emptySlots = (rowsNeeded - rowsFilled) * itemsPerRow;

  console.log('RenderPlaceholderCards 실행됨:', totalRecipesLength, '필터된 레시피 수:', filteredRecipesLength);

  if (emptySlots > 0) {
    for (let i = 0; i < itemsPerRow; i++) {
      placeholders.push(
        <Card
          key={`placeholder-${i}`}
          sx={{
            width: '380px',
            minHeight: '250px',
            opacity: 0,  // 안 보이게 처리
            pointerEvents: 'none', // 클릭 방지
          }}
        />
      );
    }
  }
  return placeholders;
};
