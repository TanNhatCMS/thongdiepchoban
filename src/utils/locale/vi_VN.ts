import vi from 'date-fns/locale/vi';

const DateTimeFormats = {
  sunday: 'CN',
  monday: 'T2',
  tuesday: 'T3',
  wednesday: 'T4',
  thursday: 'T5',
  friday: 'T6',
  saturday: 'T7',
  ok: 'OK',
  today: 'Hôm nay',
  yesterday: 'Hôm qua',
  now: 'Now',
  hours: 'Giờ',
  minutes: 'Phút',
  seconds: 'Giây',
  formattedMonthPattern: 'MMM, yyyy',
  formattedDayPattern: 'dd MMM, yyyy',
  shortDateFormat: 'd-M-yyyy',
  shortTimeFormat: 'hh:mm aa',
  dateLocale: vi as any
};

const Combobox = {
  noResultsText: 'No results found',
  placeholder: 'Select',
  searchPlaceholder: 'Tìm Kiếm',
  checkAll: 'Tất Cả'
};

const CreatableComboBox = {
  ...Combobox,
  newItem: 'New item',
  createOption: 'Create option "{0}"'
};

export default {
  code: vi.code,
  common: {
    loading: 'Đang tải...',
    emptyMessage: 'No data found',
    remove: 'Remove',
    clear: 'Clear'
  },
  Plaintext: {
    unfilled: 'Unfilled',
    notSelected: 'Not selected',
    notUploaded: 'Not uploaded'
  },
  Pagination: {
    more: 'More',
    prev: 'Previous',
    next: 'Next',
    first: 'First',
    last: 'Last',
    limit: '{0} / page',
    total: 'Total Rows: {0}',
    skip: 'Go to{0}'
  },
  DateTimeFormats,
  Calendar: DateTimeFormats,
  DatePicker: DateTimeFormats,
  DateRangePicker: {
    ...DateTimeFormats,
    last7Days: 'Last 7 Days'
  },
  Combobox,
  InputPicker: CreatableComboBox,
  TagPicker: CreatableComboBox,
  Uploader: {
    inited: 'Initial',
    progress: 'Uploading',
    error: 'Error',
    complete: 'Finished',
    emptyFile: 'Empty',
    upload: 'Upload',
    removeFile: 'Remove file'
  },
  CloseButton: {
    closeLabel: 'Đóng'
  },
  Breadcrumb: {
    expandText: 'Show path'
  },
  Toggle: {
    on: 'Mở',
    off: 'Đóng'
  }
};
