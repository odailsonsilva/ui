export const removeMask = (cpf_cnpj: string) => {
  if (!cpf_cnpj) return;
  return cpf_cnpj.replace(/[^\d]+/g, "");
};

export const formatToIdObject = (object: any, fieldName: string) => {
  if (!object[fieldName] || !object) {
    return;
  }

  if (typeof object[fieldName] === "number") return { id: object[fieldName] };

  return object[fieldName];
};
export const formatFromIdObject = (
  object: any,
  fieldName: string
): undefined | number => {
  if (!object[fieldName] || !object[fieldName]?.id) {
    return;
  }

  return object[fieldName].id;
};

export function formatBytes(bytes: number, decimals = 2) {
  if (bytes === 0) return "0 Bytes";

  const kb = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(kb));

  return parseFloat((bytes / Math.pow(kb, i)).toFixed(dm)) + " " + sizes[i];
}

export const { format: formatNumberToApi } = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
});

export const percentageFormatter = new Intl.NumberFormat("pt-BR", {
  style: "percent",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
export const intFormatter = new Intl.NumberFormat("pt-BR", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});
export const currencyIntFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
export const intCurrencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
export const formatNumberWithComma = (value: any) =>
  new Intl.NumberFormat("pt-BR", { maximumFractionDigits: 2 })
    .format(value)
    .replace(".", ",");

export const dataSheetFormatter = (
  value: any,
  isOneDecimalPlace?: boolean
): string => {
  const formatedNumber = Intl.NumberFormat("pt-BR", {
    maximumFractionDigits: 2,
  })
    .format(value || "")
    .replace(",", ".");

  if (isOneDecimalPlace) {
    return Number(formatedNumber).toFixed(1);
  }

  return formatedNumber;
};

export interface ITelefone {
  ddd: { ddd: string; descricao: string };
  ddi: { ddi: string; descricao: string };
  telefone: string;
}
export const getPhoneInfo = (telefone: ITelefone | undefined) => {
  const ddi = telefone?.ddi?.ddi ? +telefone?.ddi?.ddi : "";
  const ddd = telefone?.ddd?.ddd ? +telefone?.ddd?.ddd : "";
  const phone = telefone?.telefone || "";

  return { ddi, ddd, phone };
};
export const getFullPhone = (telefone: ITelefone | undefined) => {
  const { ddi, ddd, phone } = getPhoneInfo(telefone);

  return `${ddi}${ddd}${phone}`;
};
export const getDDDPhone = (telefone: ITelefone | undefined) => {
  const { ddd, phone } = getPhoneInfo(telefone);

  return `${ddd}${phone}`;
};

export const formatAccountNumber = (
  accountNumber?: string,
  dv?: string
): string => {
  const normalizedAccount = removeMask(accountNumber || "");
  if (!normalizedAccount) return "";

  if (dv) {
    return `${normalizedAccount} - ${dv}`;
  }

  const len = normalizedAccount.length;
  const formattedAccountNumber =
    normalizedAccount.substring(0, len - 1) +
    "-" +
    normalizedAccount.substring(len - 1);

  return formattedAccountNumber;
};
