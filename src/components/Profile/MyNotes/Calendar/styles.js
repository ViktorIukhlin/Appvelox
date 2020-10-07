import style from './Calendar.module.css';

function isSelected(day, value){
  return value.isSame(day, "day");
}

export function beforeToday(day){
  return day.isBefore(new Date(), "day")
}

function isToday(day){
  return day.isSame(new Date(), "day")
}

export default function dayStyles(day, value){
  if(beforeToday(day)) return style.before;
  if(isSelected(day, value)) return style.selected;
  if(isToday(day)) return style.today;

  return ""
}