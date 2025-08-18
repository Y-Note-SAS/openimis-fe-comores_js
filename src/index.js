import messages_en from "./translations/en.json";
import messages_km from "./translations/km.json";
import messages_fr from "./translations/fr.json";
import PublicFosaReport from "./reports/PublicFosaReport";
import PrivateFosaReport from "./reports/PrivateFosaReport"

const DEFAULT_CONFIG = {
  translations: [
    { key: "en", messages: messages_en }, 
    { key: "fr_KM", messages: messages_km},
    { key: "fr", messages: messages_fr }
  ],
  reports: [
    {
      key: "invoice_private_fosa",
      component: PrivateFosaReport,
      isValid: (values) => values.dateFrom && values.dateTo,
      getParams: (values) => ({
        date_from: values.dateFrom,
        date_to: values.dateTo,
        hflocation: values.hflocation?.code ? values.hflocation.code : null,
      }),
    },
    {
      key: "invoice_public_fosa",
      component: PublicFosaReport,
      isValid: (values) => values.dateFrom && values.dateTo,
      getParams: (values) => ({
        date_from: values.dateFrom,
        date_to: values.dateTo,
        hflocation: values.hflocation?.code ? values.hflocation.code : null,
      }),
    }
  ],
};

export const ComoresModule = (cfg) => {
  return { ...DEFAULT_CONFIG, ...cfg };
};
