import { useState } from "react";
import Table from "../../Components/Table";
import { FilterConfig, TableData, TableFilters } from "../../types/users";
import { TableHeader } from "../../Components/Table/TableHeader";
import { formatDateForComparison } from "../../utils/Helpers";
import { data } from "./data";


const columns = [
  { Header: "Name", accessor: "name" },
  { Header: "Account Number", accessor: "accountNumber" },
  { Header: "Account Type", accessor: "accountType" },
  { Header: "Status", accessor: "status" },
  { Header: "Last Activity", accessor: "activity" },
];


const filterConfig: FilterConfig[] = [
    {
        type: "select",
        label: "Account Type",
        key: "accountType",
        options: [
            { label: "Savings", value: "Savings" },
            { label: "Current", value: "Current" }
        ]
    },
    {
        type: "multiSelect",
        label: "Account Status",
        key: "status",
        options: [
            { label: "Active", value: "Active" },
            { label: "Inactive", value: "Inactive" },
            { label: "Locked", value: "Locked" }
        ]
    },
    {
        type: "dateRange",
        label: "Last Activity",
        key: "dateRange"
    }
]

const Users = () => {
    const [filteredData, setFilteredData] = useState<TableData[]>(data)

    const handleSearch = (term: string) => {
        let result = [...data]
        if (term) {
            result = result.filter(item => item.name.toLowerCase().includes(term.toLowerCase()) || item.accountNumber.includes(term))
        }
        setFilteredData(result)
    }

    const handleFilter = (filters: TableFilters) => {
        let result = [...data]

        if (filters.accountType) {
            result = result.filter(item => item.accountType === filters.accountType)
        }

        if (filters.status?.length > 0) {
            result = result.filter(item => filters.status.includes(item.status))
        }

        if (filters.dateRange?.startDate || filters.dateRange?.endDate) {
            result = result.filter(item => {
                const activityDate = formatDateForComparison(item.activity)
                const startDate = filters.dateRange.startDate ? formatDateForComparison(filters.dateRange.startDate) : null
                const endDate = filters.dateRange.endDate ? formatDateForComparison(filters.dateRange.endDate) : null

                if (!activityDate) return false

                if (startDate && endDate) {
                    return activityDate >= startDate && activityDate <= endDate
                } else if (startDate) {
                    return activityDate >= startDate
                } else if (endDate) {
                    return activityDate <= endDate
                }
                return true
            })
        }

        setFilteredData(result)
    }

    return (
        <div className="p-6">
            <TableHeader
                onSearch={handleSearch}
                onFilter={handleFilter}
                filterConfig={filterConfig}
                searchPlaceholder="Search for customer"
            />

            <div className="mt-6">
                <Table columns={columns} data={filteredData} />
            </div>
        </div>
    )
}

export default Users
