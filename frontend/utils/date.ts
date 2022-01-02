import { format } from "date-fns";
import { ru } from "date-fns/locale";

export const formatCreatedDate = (createdDate: Date | string): string => {
  const date = new Date(createdDate);

  if (date.getFullYear() === new Date().getFullYear()) {
    return format(date, "dd MMMM", { locale: ru });
  } else {
    return format(date, "dd.MM.yyyy", { locale: ru });
  }
};
