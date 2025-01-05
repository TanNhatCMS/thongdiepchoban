import defaultLocale from './vi_VN';
import { Locale as DateFnsLocale } from 'date-fns';
export { default as viVN } from './vi_VN';
type PickKeys<T> = {
  [keys in keyof T]?: T[keys];
};

export type Locale = PickKeys<typeof defaultLocale>;
export type CommonLocale = typeof defaultLocale.common;
export type PlaintextLocale = PickKeys<typeof defaultLocale.Plaintext>;
export type PaginationLocale = PickKeys<typeof defaultLocale.Pagination>;
export type TableLocale = CommonLocale;
export type DatePickerLocale = PickKeys<typeof defaultLocale.DatePicker> & CommonLocale;
export type DateRangePickerLocale = PickKeys<typeof defaultLocale.DateRangePicker> & CommonLocale;
export type PickerLocale = typeof defaultLocale.Combobox & CommonLocale;
export type InputPickerLocale = PickerLocale & typeof defaultLocale.InputPicker;
export type UploaderLocale = PickKeys<typeof defaultLocale.Uploader> & CommonLocale;
export type CloseButtonLocale = PickKeys<typeof defaultLocale.CloseButton>;
export type BreadcrumbLocale = PickKeys<typeof defaultLocale.Breadcrumb>;
export type ToggleLocale = PickKeys<typeof defaultLocale.Toggle>;

export interface CalendarLocale extends PickKeys<typeof defaultLocale.Calendar> {
  dateLocale?: DateFnsLocale;
}
