export interface TableData {
  name: string;
  accountNumber: string;
  accountType: string;
  status: string;
  activity: string;
}

export interface FilterConfig {
  type: "select" | "multiSelect" | "dateRange" | "rangeInput";
  label: string;
  key: string;
  options?: FilterOption[];
}

export interface FilterOption {
  label: string;
  value: string;
}

export interface TableFilters {
  [key: string]: any;
}

export interface TableHeaderProps {
  onSearch: (term: string) => void;
  onFilter: (filters: TableFilters) => void;
  filterConfig?: FilterConfig[];
  initialFilters?: TableFilters;
  searchPlaceholder?: string;
}
