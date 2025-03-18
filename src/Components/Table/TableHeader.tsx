import React, { useState, useEffect } from "react"
import { CiSearch } from "react-icons/ci"
import { IoFilterSharp } from "react-icons/io5"
import { VscClose } from "react-icons/vsc"
import { FilterConfig, TableFilters, TableHeaderProps } from "../../types"

export const TableHeader: React.FC<TableHeaderProps> = ({
    onSearch,
    onFilter,
    filterConfig = [],
    initialFilters = {},
    searchPlaceholder = "Search"
}: TableHeaderProps) => {
    const [searchTerm, setSearchTerm] = useState("")
    const [showFilters, setShowFilters] = useState(false)
    const [dropdownKey, setDropdownKey] = useState<string | null>(null)
    const [filters, setFilters] = useState<TableFilters>(initialFilters)
    const [tempFilters, setTempFilters] = useState<TableFilters>(initialFilters)

    useEffect(() => {
        if (showFilters) {
            setTempFilters(filters)
        }
    }, [showFilters])

    const handleFilterChange = (key: string, value: any) => {
        setTempFilters(prev => ({
            ...prev,
            [key]: value
        }))
    }

    const handleMultiSelectChange = (key: string, value: string) => {
        setTempFilters(prev => {
            const currentValues = Array.isArray(prev[key]) ? prev[key] : []
            const newValues = currentValues.includes(value) ? currentValues.filter(v => v !== value) : [...currentValues, value]

            return {
                ...prev,
                [key]: newValues
            }
        })
    }

    const resetFilters = () => {
        const emptyFilters = filterConfig.reduce((acc, filter) => {
            acc[filter.key] = filter.type === "multiSelect" ? [] : ""
            return acc
        }, {} as TableFilters)
        setTempFilters(emptyFilters)
    }

    const applyFilters = () => {
        setFilters(tempFilters)
        onFilter(tempFilters)
        setShowFilters(false)
        setDropdownKey(null)
    }

    const cancelFilters = () => {
        setTempFilters(filters)
        setShowFilters(false)
        setDropdownKey(null)
    }

    const getDisplayText = (filter: FilterConfig) => {
        const value = tempFilters[filter.key]
        if (filter.type === "multiSelect") {
            const count = value?.length || 0
            return count === 0 ? "Select options" : `${count} selected`
        }
        return value || "Select options"
    }

    const getActiveFiltersCount = () => {
        return Object.entries(filters).reduce((count, [, value]) => {
            if (Array.isArray(value) && value.length > 0) return count + 1
            if (typeof value === "object" && value !== null) {
                return Object.values(value).some(v => v) ? count + 1 : count
            }
            return value ? count + 1 : count
        }, 0)
    }

    const renderFilterInput = (filter: FilterConfig) => {
        switch (filter.type) {
            case "select":
                return (
                    <select
                        className="w-full border border-gray-300 rounded-md p-2"
                        value={tempFilters[filter.key] || ""}
                        onChange={e => handleFilterChange(filter.key, e.target.value)}
                    >
                        <option value="">Select options</option>
                        {filter.options?.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                )

            case "multiSelect":
                return (
                    <div className="relative" onClick={e => e.stopPropagation()}>
                        <div
                            className="w-full border border-gray-300 rounded-md p-2 cursor-pointer bg-white"
                            onClick={() => setDropdownKey(dropdownKey === filter.key ? null : filter.key)}
                        >
                            {getDisplayText(filter)}
                        </div>

                        {dropdownKey === filter.key && (
                            <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                                <div className="py-1">
                                    {filter.options?.map(option => (
                                        <div
                                            key={option.value}
                                            className="flex items-center px-4 py-2 hover:bg-gray-100"
                                            onClick={() => handleMultiSelectChange(filter.key, option.value)}
                                        >
                                            <input
                                                type="checkbox"
                                                checked={(tempFilters[filter.key] || []).includes(option.value)}
                                                onChange={() => {}}
                                                className="h-4 w-4 text-black border-gray-300 rounded"
                                            />
                                            <label className="ml-2 text-sm text-gray-700">{option.label}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )

            case "dateRange":
                return (
                    <div className="grid grid-cols-2 gap-2">
                        <input
                            type="date"
                            className="w-full border border-gray-300 rounded-md p-2"
                            value={tempFilters[filter.key]?.startDate || ""}
                            onChange={e =>
                                handleFilterChange(filter.key, {
                                    ...tempFilters[filter.key],
                                    startDate: e.target.value
                                })
                            }
                            placeholder="Start Date"
                        />
                        <input
                            type="date"
                            className="w-full border border-gray-300 rounded-md p-2"
                            value={tempFilters[filter.key]?.endDate || ""}
                            onChange={e =>
                                handleFilterChange(filter.key, {
                                    ...tempFilters[filter.key],
                                    endDate: e.target.value
                                })
                            }
                            placeholder="End Date"
                        />
                    </div>
                )
            case "rangeInput":
                return (
                    <div className="grid grid-cols-2 gap-2">
                        <input
                            type="number"
                            className="w-full border border-gray-300 rounded-md p-2"
                            value={tempFilters[filter.key]?.min || ""}
                            onChange={e =>
                                handleFilterChange(filter.key, {
                                    ...tempFilters[filter.key],
                                    min: e.target.value
                                })
                            }
                            placeholder="Min"
                        />
                        <input
                            type="number"
                            className="w-full border border-gray-300 rounded-md p-2"
                            value={tempFilters[filter.key]?.max || ""}
                            onChange={e =>
                                handleFilterChange(filter.key, {
                                    ...tempFilters[filter.key],
                                    max: e.target.value
                                })
                            }
                            placeholder="Max"
                        />
                    </div>
                )

            default:
                return null
        }
    }

    return (
        <>
            {showFilters && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={cancelFilters} />}

            <div className="flex justify-between items-center w-full flex-wrap">
                <div className="w-1/2 md:w-1/3">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder={searchPlaceholder}
                            className="border border-gray-300 rounded-md p-2 pl-10 w-full"
                            value={searchTerm}
                            onChange={e => {
                                setSearchTerm(e.target.value)
                                onSearch(e.target.value)
                            }}
                        />
                        <CiSearch className="absolute text-gray-500 text-xl left-3 top-2.5" />
                    </div>
                </div>

                <div className="flex space-x-4">
                    <div className="relative">
                        <button
                            onClick={() => setShowFilters(true)}
                            className="text-black px-8 pr-4 py-2.5 rounded-md border border-black text-sm"
                        >
                            <span className="ml-1">Filters</span>
                        </button>
                        <IoFilterSharp className="absolute top-3 left-2.5" />
                        {getActiveFiltersCount() > 0 && (
                            <div className="absolute top-0.5 left-3.5 bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">
                                {getActiveFiltersCount()}
                            </div>
                        )}
                    </div>
                 
                </div>
            </div>

            <div
                className={`fixed inset-y-0 right-0 w-[500px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
                    showFilters ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="h-full flex flex-col" onClick={() => setDropdownKey(null)}>
                    <div className="flex justify-between items-center border-b-2 border-gray px-4 py-4">
                        <h3 className="text-lg font-medium">Filters</h3>
                        <button onClick={cancelFilters} className="text-gray-500 hover:text-gray-700">
                            <VscClose size={20} />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto">
                        <div className="space-y-4 p-4">
                            {filterConfig.map(filter => (
                                <div key={filter.key}>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">{filter.label}</label>
                                    {renderFilterInput(filter)}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="border-t-2 border-grayBorder p-4">
                        <div className="flex justify-between">
                            <button onClick={resetFilters} className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800">
                                Reset
                            </button>
                            <div className="flex space-x-2">
                                <button
                                    onClick={cancelFilters}
                                    className="px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
                                >
                                    Cancel
                                </button>
                                <button onClick={applyFilters} className="px-4 py-2 text-sm text-white bg-primary rounded-md">
                                    Apply
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
