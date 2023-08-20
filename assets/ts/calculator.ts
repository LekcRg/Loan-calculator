import type { LoanData, TableRow, EarlyPayoff } from '@/types/Calculator';
import { dateUTC, getPrettyDate, parseStringDate, stringToDate } from './dateUtils';

export const calculateMonthly = (state: LoanData):number => {
  if (!state || !state.amount || !state.term || !state.rate) {
    return 0;
  }

  const monthRate = state.rate / 12 / 100;
  const months = state.term * 12;

  const monthlyPayment =
    (state.amount * monthRate * (1 + monthRate) ** months) /
    ((1 + monthRate) ** months - 1);

  if (monthlyPayment && !isNaN(monthlyPayment)) {
    return monthlyPayment;
  }

  return 0;
};

export const calculateTable = (calculateData: LoanData, monthly: number, payoffs: EarlyPayoff[]):TableRow[] => {
  if (!calculateData || !monthly || !calculateData?.amount || !calculateData?.rate || !calculateData?.term) {
    return [];
  }

  let amount = calculateData.amount;
  const result:TableRow[] = [];
  const calcuateDate = stringToDate(calculateData.date);

  if (!calcuateDate) {
    return result;
  }

  let currentDate = calcuateDate;
  let year = calcuateDate.getUTCFullYear();
  let month = calcuateDate.getUTCMonth();
  const day = calcuateDate.getUTCDate();
  let index = 0;

  const msToDay = 1000 * 60 * 60 * 24;

  while (amount > 0) {
    const currentYear = dateUTC(year, 0, 1);
    const nextYear = dateUTC(year + 1, 0, 1);
    const yearDays = (nextYear.getTime() - currentYear.getTime()) / msToDay;

    if (month < 11) {
      month++;
    } else {
      year++;
      month = 0;
    }

    const payoff = payoffs.find(({ date }) => {
      const parsedDate = parseStringDate(date);

      return parsedDate?.month === month && parsedDate?.year === year;
    });
    const payoffAmount = payoff ? payoff.amount : 0;

    const nextDate = dateUTC(year, month, day);
    const monthDays = (nextDate.getTime() - currentDate.getTime()) / msToDay;

    const interest = amount * calculateData.rate * monthDays / yearDays / 100;

    const principal = monthly < amount
      ? monthly - interest
      : amount;
    let ending = monthly < amount ? ((amount - principal) * 100) / 100 : 0;

    if (principal <= 0) {
      return [];
    }

    const baseItem = {
      date: getPrettyDate(nextDate),
    };

    result.push({
      ...baseItem,
      index: index++,
      interest,
      principal,
      isPayoff: false,
      amount: amount > monthly
        ? monthly
        : principal + interest,
      ending: ending > 0
        ? ending
        : 0,
    });

    if (payoff) {
      ending = ending - payoffAmount;

      result.push({
        ...baseItem,
        interest: 0,
        principal: payoffAmount,
        isPayoff: true,
        amount: payoffAmount,
        ending: ending,
      });
    }

    amount = ending;
    currentDate = nextDate;
  }

  return result;
};

export const initialCalculateState = (state?: LoanData) => state || {
  amount: 5000000,
  term: 10,
  rate: 12,
  date: '02.02.2022',
};
