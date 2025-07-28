import sound from "../assets/sound";

export const playButtonEnable = () => {
  return new Audio(sound.buttonEnable).play();
};

export const playButtonHover = () => {
  return new Audio(sound.buttonHover).play();
};

export const playDynamiteExplosion = () => {
  return new Audio(sound.dynamiteExplosion).play();
};

export const playEncourage = () => {
  return new Audio(sound.encourage).play();
};

export const playGameStarter = () => {
  return new Audio(sound.game_starter).play();
};

export const playGoldReveal = () => {
  return new Audio(sound.gold_reveal).play();
};

export const playHappy = () => {
  return new Audio(sound.happy).play();
};

export const playIdle = () => {
  return new Audio(sound.idle).play();
};

export const playMainTheme = () => {
  return new Audio(sound.main_theme).play();
};

export const playSad = () => {
  return new Audio(sound.sad).play();
};

export const playSleepy = () => {
  return new Audio(sound.sleepy).play();
};

export const playStoneClick = () => {
  return new Audio(sound.stoneClick).play();
};

export const playStoneHover = () => {
  return new Audio(sound.stoneHover).play();
};

export const playWakeUp = () => {
  return new Audio(sound.wakeUp).play();
};

export const playWin = () => {
  return new Audio(sound.win).play();
};
