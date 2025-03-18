import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { MainButton } from "../Form/button";

type TableColumn = {
  Header: string;
  accessor: string;
};

type TableProps = {
  columns: TableColumn[];
  data: Record<string, any>[];
};

const Table: React.FC<TableProps> = ({ columns, data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 15;

  // Function to handle page changes
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Get the data for the current page
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  // Conditional class based on status
  const getStatusClass = (status: string) => {
    switch (status) {
      case "Active":
        return "text-green-600 bg-[#EBF4FF]";
      case "Inactive":
        return "text-gray-500 bg-[#EFEFEF]";
        case "Locked":
        return "text-red-600 bg-[#FEEFEE]";
      case "Pending":
        return "text-[#7C4F0C] bg-[#FEF2D8]";
      default:
        return "";
    }
  };

  return (
    <div>
      <table className="min-w-full bg-[#FCFCFC] border border-[#E5E7EB]">
        {/* Table Header */}
        <thead className="bg-gray-100">
          <tr>
            {columns.map((column) => (
              <th
                key={column.accessor}
                className="px-4 py-3 text-left font-semibold text-[#1B1C1F] bg-[#E5E7EB] border-b border-[#E5E7EB]"
              >
                {column.Header}
              </th>
            ))}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {currentRows.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-50">
              {columns.map((column) => (
                <td
                  key={column.accessor}
                  className="px-4 py-3 text-sm font-light text-[#000] border-b border-[#E5E7EB]"
                >
                  {column.accessor === "status" ? (
                    <span
                      className={`px-2 py-1 rounded-md text-xs flex items-center max-w-20 ${getStatusClass(
                        row[column.accessor]
                      )}`}
                    >
                      {" "}
                      <GoDotFill />
                      {row[column.accessor]}
                    </span>
                  ) : (
                    row[column.accessor]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <MainButton
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </MainButton>
        <span>
          Page {currentPage} of {Math.ceil(data.length / rowsPerPage)}
        </span>
        <MainButton
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === Math.ceil(data.length / rowsPerPage)}
        >
          Next
        </MainButton>
      </div>
    </div>
  );
};

export default Table;
