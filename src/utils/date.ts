const currentDate = new Date(Date());
export const addDaysToDate = (date: Date, days: number) => {
  const res = new Date(date);
  res.setDate(res.getDate() + days);
  return res;
};

const defaultStartDate = addDaysToDate(currentDate, 1);
const defaultEndDate = addDaysToDate(currentDate, 2);

const formatNbr = (dateElem: number) => {
  if (dateElem < 10) {
    return "0" + dateElem.toString();
  } else {
    return dateElem.toString();
  }
};

export const dateConvert = (date: Date) => {
  const day = formatNbr(date.getDate());
  const month = formatNbr(date.getMonth() + 1);
  const year = date.getFullYear().toString();
  return `${year}-${month}-${day}`;
};

export const getDefaultStartDate = () => dateConvert(defaultStartDate)
export const getDefaultEndDate = ()=>dateConvert(defaultEndDate)
