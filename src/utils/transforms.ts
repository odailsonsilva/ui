import {
  dateIsoToLocal,
  dateLocalToIso,
  dateUTCIsoToLocal,
  dateUTCLocalToIso,
} from "./date";
import {
  currencyFormatter,
  currencyIntFormatter,
  removeMask,
} from "./formatters";

import masker from "vanilla-masker";

export const moneyInputTransform = {
  input: (value: any, roundNumber?: boolean) => {
    if (!value) return "";

    if (isNaN(value) || value === "") return "";
    if (value == "0") {
      return "0";
    }

    const _value = roundNumber
      ? currencyFormatter.format(Math.round(value || 0)).replace("R$ ", "")
      : currencyFormatter.format(value).replace("R$ ", "");

    return _value;
  },
  output: (e: any, onChange: Function, roundNumber?: boolean) => {
    let value = e.target.value;

    if (value === "") {
      onChange(value);
      return;
    }
    if (value === "0") {
      onChange(+value);
      return;
    }

    const isNegative = value.includes("-");

    value = removeMask(value);

    if (value.length === 1) {
      value = "0.0" + value;
    } else {
      value =
        value.slice(0, value.length - 2) +
        "." +
        value.slice(value.length - 2, value.length);
    }

    const output = roundNumber
      ? parseFloat(Math.round(parseFloat(value || 0)).toFixed(2))
      : parseFloat(parseFloat(value).toFixed(2));

    const v = isNaN(output) ? 0 : output;

    onChange(isNegative ? -v : v);
  },
};

export const alphaNumericInputTransform = {
  input: (value: string) => {
    return value || "";
  },
  output: (e: any, onChange: Function) => {
    const rawValue = e.target.value || "";

    const value = rawValue.replace(/\W/g, "");

    onChange(value);
  },
};
export const moneyIntInputTransform = {
  input: (value: any) => {
    //* deve sempre retornar string

    if (isNaN(value)) return "";
    if (value == "0") {
      return "0";
    }

    const _value = currencyIntFormatter
      .format(value)
      .replace("R$ ", "")
      .split(",")[0];

    return _value;
  },
  output: (e: any, onChange: (value: number) => void) => {
    //* formatar para o numero inteiro

    const checkSignal = e.target.value.length > 0 && e.target.value[0];

    let value =
      checkSignal === "-"
        ? checkSignal + removeMask(e.target.value)
        : removeMask(e.target.value);

    const output = parseInt(value, 10);
    const v = isNaN(output) ? 0 : output;

    onChange(v);
  },
};

export const dateInputTransform = {
  input: (value: any) => {
    return (value && dateIsoToLocal(value)) || "";
  },
  output: (e: any, onChange: Function) => {
    //* formatar para o ISO

    const value = dateLocalToIso(e.target.value);

    const v = value ? value : undefined;

    onChange(v);
  },
};
export const dateInputWithResetTimeTransform = {
  input: (value: any) => {
    return (value && dateUTCIsoToLocal(value)) || "";
  },
  output: (e: any, onChange: Function) => {
    //* formatar para o ISO

    const value = dateUTCLocalToIso(e.target.value, true);

    const v = value ? value : undefined;

    onChange(v);
  },
};
export const monthNames = [
  "jan",
  "feb",
  "mar",
  "abr",
  "mai",
  "jun",
  "jul",
  "aug",
  "sep",
  "out",
  "nov",
  "dez",
];
export const monthInputTransform = {
  input: (value?: string) => {
    if (!value) return "";
    const [month, year] = value.split("/");
    const monthIndex = monthNames.findIndex((m) => m == month);
    return `${year}-${(monthIndex + 1).toString().padStart(2, "0")}`;
  },
  output: (e: any, onChange: Function) => {
    const [year, month] = e.target.value.split("-");
    const v = `${monthNames[month - 1]}/${year}`;

    onChange(v);
  },
};

export const cpfCnpjInputTransform = {
  input: (value?: string) => {
    //* deve sempre retornar string

    if (!value) {
      return "";
    }

    const masks = ["999.999.999-99"];

    return dynamicMaskHandler({ masks, lengthCheckPoints: [11], value });
  },
  output: (e: any, onChange: Function) => {
    const value = removeMask(e.target.value) || "";

    if (value.length > 14) return;

    onChange(value);
  },
};
export const phoneInputTransform = {
  input: (value?: string) => {
    //* deve sempre retornar string

    if (!value) {
      return "";
    }

    const masks = ["(99) 9999-9999", "(99) 99999-9999"];

    return dynamicMaskHandler({ masks, lengthCheckPoints: [10], value });
  },
  output: (e: any, onChange: Function) => {
    const value = removeMask(e.target.value) || "";

    if (value.length > 12) return;

    onChange(value);
  },
};
export const cepInputTransform = {
  input: (value?: string) => {
    //* deve sempre retornar string

    if (!value) {
      return "";
    }

    return masker.toPattern(value, "99.999-999");
  },
  output: (e: any, onChange: Function) => {
    const value = removeMask(e.target.value) || "";

    if (value.length > 8) return;

    onChange(value);
  },
};
export const rgInputTransform = {
  input: (value?: string) => {
    //* deve sempre retornar string

    if (!value) {
      return "";
    }

    return masker.toPattern(value, "99.999.999-S");
  },
  output: (e: any, onChange: Function) => {
    const value = removeMask(e.target.value) || "";

    if (value.length > 9) return;

    onChange(value);
  },
};
export const intInputTransform = {
  input: (value: any) => {
    //* deve sempre retornar string

    if (value === 0) {
      return "0";
    }

    if (isNaN(+value) || !value) {
      return "";
    }
    return parseInt(value).toString();
  },
  output: (e: any, onChange: Function) => {
    //* formatar para o numero inteiro

    const output = parseInt(e.target.value, 10);
    const v = isNaN(output) ? undefined : output;

    onChange(v);
  },
};

export const doubleNInputTransform = (decimals: number) => ({
  input: (value: any) => {
    //* deve sempre retornar string
    if (isNaN(value) || value === "" || !value) return "";

    const [wholePart = "00", integralPart = ""] = `${value.toFixed(
      decimals
    )}`.split(".");

    return `${wholePart},${integralPart.padStart(decimals, "0")}`;
  },
  output: (e: any, onChange: Function) => {
    //* formatar para o numero com duas casas decimais
    const value = removeMask(e.target.value);

    if (!value) return onChange(0);

    const integralPart = value.slice(-decimals);
    const wholePart = value.slice(0, value.length - decimals);

    console.log({ value, integralPart, wholePart });
    const formattedValue = +`${wholePart}.${integralPart.padStart(
      decimals,
      "0"
    )}`;

    const output = formattedValue;

    const v = isNaN(output) ? "" : output;

    onChange(v);
  },
});
export const doubleInputTransform = { ...doubleNInputTransform(2) };

export const fileInputTransform = {
  output: (e: any, onChange: Function) => {
    const file: File = e.target.files[0];

    onChange({ file, originalFilename: file.name });
  },
  input: (value: {
    file?: File;
    originalFilename: string;
    filename?: string;
  }) => {
    if (!value?.file) {
      return "";
    }

    const newValue = value?.originalFilename
      ? `C:\\fakepath\\${value.originalFilename}`
      : "";
    return newValue;
  },
};

type TSelectTransform<T = any> = {
  input: (value: T) => string | number | Array<string | number | object>;
  output: (
    e: { target: { value?: string | number | object | undefined | unknown } },
    onChange: (value?: T) => void
  ) => void;
};

export const selectObjectIdTransform: TSelectTransform<{ id: number }> = {
  input: (v) => {
    return v?.id ?? "";
  },
  output: (e, onChange) => {
    onChange(
      e.target?.value && typeof e.target.value === "number"
        ? { id: e.target.value }
        : undefined
    );
  },
};

export const stringLengthInputTransform = (stringLength: number) => ({
  input: (value?: string) => {
    return value || "";
  },
  output: (e: any, onChange: Function) => {
    const value: string = e.target.value || "";

    if (value.length >= stringLength) {
      return onChange(value.slice(0, stringLength));
    }

    return onChange(value);
  },
});

//** https://vanilla-masker.github.io/vanilla-masker/ */

interface IDynamicMaskHandler {
  masks: string[];
  lengthCheckPoints: number[];
  value: string;
}

export const dynamicMaskHandler = ({
  masks,
  lengthCheckPoints,
  value,
}: IDynamicMaskHandler): string => {
  const noMaskValue = removeMask(value) as string;

  const maskIndex = lengthCheckPoints.reduce((acc, curr, index) => {
    if (noMaskValue.length > curr) {
      return index + 1;
    }

    return acc;
  }, 0);

  return masker.toPattern(noMaskValue, masks[maskIndex]);
};
