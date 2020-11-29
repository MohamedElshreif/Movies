export const random_Background = (data) => {
  const backgrounds = [...data],
    randomIndex = Math.floor(Math.random() * backgrounds.length),
    background = { ...backgrounds[randomIndex] };
  return background;
};
