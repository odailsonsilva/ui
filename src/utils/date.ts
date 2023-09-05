import datetimeDifference from "datetime-difference";

export const dateIsoToLocal = (date: string, divisor: string = "-"): string => {
  if (!date) return "";

  const [year, month, day] = date.split("T")[0].split("-");

  return `${year}${divisor}${month}${divisor}${day}`;
};
export const dateUTCIsoToLocal = (
  date: string,
  divisor: string = "-"
): string => {
  if (!date) return "";
  const _date = new Date(date);
  const day = `${_date.getUTCDate()}`.padStart(2, "0");
  const month = `${_date.getUTCMonth() + 1}`.padStart(2, "0");
  const year = _date.getUTCFullYear().toString().padStart(4, "0");

  return `${year}${divisor}${month}${divisor}${day}`;
};
export const dateIsoToDateTime = (date: string): string => {
  if (!date) return "";
  const _date = new Date(date);

  const time = _date.toLocaleTimeString().split(":");
  time.pop();

  return `${_date.toLocaleDateString()} ${time.join(":")}`;
};

export const changeDateSeparator = (
  dateLocal: string,
  currentSeparator: string,
  newSeparator: string
) => {
  if (!dateLocal) return "";
  const [year, month, day] = dateLocal.split(currentSeparator);

  return `${year}${newSeparator}${month}${newSeparator}${day}`;
};
export const formatDate = (dateLocal: string, currentSeparator: string) => {
  if (!dateLocal) return "";
  const [year, month, day] = dateLocal.split(currentSeparator);

  return `${day}${currentSeparator}${month}${currentSeparator}${year}`;
};

export const addDaysToCurrentDate = (daysToAdd?: number) => {
  if (daysToAdd) {
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + daysToAdd);

    return dateIsoToLocal(futureDate.toISOString());
  }
};

export const dateLocalToIso = (
  date: string,
  withResetTime?: boolean
): string => {
  if (!date) return "";

  const [_year, month, day] = date.split("-");

  const year = _year.slice(_year.length - 4, _year.length);

  const isoDate = `${year}-${month}-${day}T03:00:00.000Z`;

  return isoDate;
};

export const dateUTCLocalToIso = (
  date: string,
  withResetTime?: boolean
): string => {
  if (!date) return "";
  const _date = new Date();
  const [year, month, day] = date.split("-");
  _date.setDate(+day);
  _date.setMonth(+month - 1);
  _date.setFullYear(+year);

  if (withResetTime) {
    _date.setUTCHours(0, 0, 0, 0);
  }
  return _date.toISOString();
};

export const dateIsoToClient = (date: string) => {
  return changeDateSeparator(formatDate(dateIsoToLocal(date), "-"), "-", "/");
};
export const dateIsoToClientDateTime = (
  date: string,
  divisor: string = "/"
): string => {
  if (!date) return "";
  const _date = new Date(date);
  const day = `${_date.getDate()}`.padStart(2, "0");
  const month = `${_date.getMonth() + 1}`.padStart(2, "0");
  const year = _date.getFullYear();

  return `${day}${divisor}${month}${divisor}${year} ${_date.toTimeString().split(" ")[0]
    }`;
};

export const compareDates = (first: string, second: string): boolean => {
  return new Date(first).getTime() > new Date(second).getTime();
};

export const formatDistance = (date1: Date, date2: Date) => {
  if (!date1 || !date2) return;

  const _date = datetimeDifference(date1, date2);

  if (_date.years > 0) {
    return `${_date.years} ano${_date.years > 1 ? "s" : ""}`;
  }

  if (_date.months > 0) {
    return `${_date.months} ${_date.months > 1 ? "meses" : "mês"}`;
  }

  if (_date.days > 0) {
    return `${_date.days} dia${_date.days > 1 ? "s" : ""}`;
  }

  if (_date.hours > 0) {
    return `${_date.hours} hora${_date.hours > 1 ? "s" : ""}`;
  }

  if (_date.minutes > 0) {
    return `${_date.minutes} minuto${_date.minutes > 1 ? "s" : ""}`;
  }

  if (_date.seconds > 0) {
    return `1 minuto`;
  }

  if (_date.milliseconds > 0) {
    return `1 minuto`;
  }

  return "";
};

export const dateIsoToClientLocale = (date: Date) => {
  const _date = date.toLocaleDateString("pt", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return _date.replaceAll("de ", "");
};
