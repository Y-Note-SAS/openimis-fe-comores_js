import messages_en from "./translations/en.json";
import PublicFosaReport from "./reports/PublicFosaReport";
import PrivateFosaReport from "./reports/PrivateFosaReport"



const DEFAULT_CONFIG = {
  translations: [{ key: "en", messages: messages_en }],
  reports: [
    {
      key: "invoice_private_fosa",
      component: PublicFosaReport,
      isValid: (values) => values.dateFrom && values.dateTo,
      getParams: (values) => ({
        date_from: values.dateFrom,
        date_to: values.dateTo,
        hflocation: values.hflocation?.code ? values.hflocation.code : 0,
      }),
    },
    {
      key: "invoice_public_fosa",
      component: PrivateFosaReport,
      isValid: (values) => values.dateFrom && values.dateTo,
      getParams: (values) => ({
        date_from: values.dateFrom,
        date_to: values.dateTo,
        hflocation: values.hflocation?.code ? values.hflocation.code : 0,
      }),
    }
  ],
};

export const ComoresModule = (cfg) => {
  return { ...DEFAULT_CONFIG, ...cfg };
};
