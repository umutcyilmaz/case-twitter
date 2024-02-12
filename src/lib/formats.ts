export const numberFormat = (value: number): string => {
    let config: Intl.NumberFormatOptions = {};
    if (value > 9999) {
      config = {
        notation: "compact",
        maximumFractionDigits: 1,
      };
    }
    return new Intl.NumberFormat("tr", config).format(value);
  };
  