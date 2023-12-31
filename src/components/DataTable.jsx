import React from "react";

function DataTable(props) {
  return (
    <div className="container rounded-2xl hover:shadow-xl shadow-lg duration-300 overflow-hidden overflow-x-auto">
      <div className="inline-block w-full">
        <table className="min-w-full leading-normal mb-0">
          <thead>
            <tr>
              {props?.headings?.map((heading, index) => (
                <th
                  key={index}
                  scope="col"
                  className="px-5 py-3 text-sm font-normal text-center text-gray-800 uppercase bg-white border-b border-gray-200"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {props?.rows?.map((row, index) => (
              <tr key={index} className="text-center">
                {!props?.showExtra ? (props?.headings.includes("User") ? (
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 min-w-[120px]">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <a href="#" className="relative block">
                          <img
                            alt="profile"
                            src={row.image}
                            className="mx-auto object-cover rounded-full h-10 w-10 "
                          />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">{row.name}</p>
                      </div>
                    </div>
                  </td>
                ) : null) : (
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 min-w-[120px]">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <a href="#" className="relative block">
                          <img
                            alt="profile"
                            src={row.image}
                            className="mx-auto object-cover rounded-full h-10 w-10 "
                          />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">{row.name}</p>
                      </div>
                    </div>
                  </td>
                )}
      
                {/* {console.log(props.headings.includes("Email"))} */}
                {!props?.showExtra ? (props?.headings.includes("Email") ? (
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 min-w-[150px]">
                    <p className="text-gray-900 whitespace-no-wrap">{row.email}</p>
                  </td>
                ) : null) : (
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 min-w-[150px]">
                    <p className="text-gray-900 whitespace-no-wrap">{row.email}</p>
                  </td>
                )}
                
                {!props?.showExtra ? (props?.headings.includes("Phone") ? (
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 min-w-[110px]">
                    <p className="text-gray-900 whitespace-no-wrap">{row.number}</p>
                  </td>
                ) : null) : (
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 min-w-[110px]">
                    <p className="text-gray-900 whitespace-no-wrap">{row.number}</p>
                  </td>
                )}
                
                {!props?.showExtra ? (props?.headings.includes("Country") ? (
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 min-w-[110px]">
                    <p className="text-gray-900 whitespace-no-wrap">{row.country}</p>
                  </td>
                ) : null) : (
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 min-w-[110px]">
                    <p className="text-gray-900 whitespace-no-wrap">{row.country}</p>
                  </td>
                )}
                
                {!props?.showExtra ? (props?.headings.includes("Date") ? (
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 min-w-[110px]">
                    <p className="text-gray-900 whitespace-no-wrap">{row.date}</p>
                  </td>
                ) : null) : (
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 min-w-[110px]">
                    <p className="text-gray-900 whitespace-no-wrap">{row.date}</p>
                  </td>
                )}
                
                {!props?.showExtra ? (props?.headings.includes("From") ? (
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 min-w-[110px]">
                    <p className="text-gray-900 whitespace-no-wrap">{row.from}</p>
                  </td>
                ) : null) : (
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 min-w-[110px]">
                    <p className="text-gray-900 whitespace-no-wrap">{row.from}</p>
                  </td>
                )}
                
                {!props?.showExtra ? (props?.headings.includes("To") ? (
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 min-w-[110px]">
                    <p className="text-gray-900 whitespace-no-wrap">{row.to}</p>
                  </td>
                ) : null) : (
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 min-w-[110px]">
                    <p className="text-gray-900 whitespace-no-wrap">{row.to}</p>
                  </td>
                )}
                
                {!props?.showExtra ? (props?.headings.includes("Amount") ? (
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 min-w-[110px]">
                    <p className="text-gray-900 whitespace-no-wrap">{row.amount}</p>
                  </td>
                ) : null) : (
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 min-w-[110px]">
                    <p className="text-gray-900 whitespace-no-wrap">{row.amount}</p>
                  </td>
                )}
                
                {!props?.showExtra ? (props?.headings.includes("Thumbnail") ? (
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 min-w-[110px]">
                    <img className="max-w-[100px] max-h-[100px]" src={row.thumbnail} alt="Thumbnail Image" />
                  </td>
                ) : null) : (
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 min-w-[110px]">
                  <img className="max-w-[100px] max-h-[100px]" src={row.thumbnail} alt="Thumbnail Image" />
                  </td>
                )}
                {!props?.showExtra ? (props?.headings.includes("Title") ? (
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 min-w-[110px]">
                    <p className="text-gray-900 whitespace-no-wrap">{row.title}</p>
                  </td>
                ) : null) : (
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 min-w-[110px]">
                    <p className="text-gray-900 whitespace-no-wrap">{row.title}</p>
                  </td>
                )}
                
                {!props?.showExtra ? (props?.headings.includes("Description") ? (
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 min-w-[110px] max-w-[220px] overflow-ellipsis truncate">
                    <p className="text-gray-900 whitespace-no-wrap">{row.description}</p>
                  </td>
                ) : null) : (
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 min-w-[110px] max-w-[220px] overflow-ellipsis truncate">
                    <p className="text-gray-900 whitespace-no-wrap">{row.description}</p>
                  </td>
                )}
                
                {!props?.showExtra ? (props?.headings.includes("Validity") ? (
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 min-w-[110px] max-w-[220px] overflow-ellipsis truncate">
                    <p className="text-gray-900 whitespace-no-wrap">{row.validity}</p>
                  </td>
                ) : null) : (
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 min-w-[110px] max-w-[220px] overflow-ellipsis truncate">
                    <p className="text-gray-900 whitespace-no-wrap">{row.validity}</p>
                  </td>
                )}
                
                {!props?.showExtra ? (props?.headings.includes("Price") ? (
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 min-w-[110px] max-w-[220px] overflow-ellipsis truncate">
                    <p className="text-gray-900 whitespace-no-wrap">{row.price}</p>
                  </td>
                ) : null) : (
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 min-w-[110px] max-w-[220px] overflow-ellipsis truncate">
                    <p className="text-gray-900 whitespace-no-wrap">{row.price}</p>
                  </td>
                )}
                
                {!props?.showExtra ? (props?.headings.includes("Category") ? (
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 min-w-[110px] max-w-[220px] overflow-ellipsis truncate">
                    <p className="text-gray-900 whitespace-no-wrap">{row.category}</p>
                  </td>
                ) : null) : (
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 min-w-[110px] max-w-[220px] overflow-ellipsis truncate">
                    <p className="text-gray-900 whitespace-no-wrap">{row.category}</p>
                  </td>
                )}
                
                {!props?.showExtra ? (props?.headings.includes("Status") ? (
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 min-w-[100px]">
                  <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                    <span
                      aria-hidden="true"
                      className={
                        "absolute inset-0 rounded-full opacity-50" +
                        (row.status ? " bg-green-200" : " bg-red-200")
                      }
                    ></span>
                    <span className="relative">
                      {row.status ? "Active" : "Inactive"}
                    </span>
                  </span>
                </td>
                ) : null) : (
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 min-w-[100px]">
                  <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                    <span
                      aria-hidden="true"
                      className={
                        "absolute inset-0 rounded-full opacity-50" +
                        (row.status ? " bg-green-200" : " bg-red-200")
                      }
                    ></span>
                    <span className="relative">
                      {row.status ? "Active" : "Inactive"}
                    </span>
                  </span>
                </td>
                )}
                
                {!props?.showExtra ? (props?.headings.includes("Type") ? (
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 min-w-[110px]">
                    <p className="text-gray-900 whitespace-no-wrap">{row.type}</p>
                  </td>
                ) : null) : (
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 min-w-[110px]">
                    <p className="text-gray-900 whitespace-no-wrap">{row.type}</p>
                  </td>
                )}

                {!props?.showExtra ? (props?.headings.includes("Admin") ? (
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 min-w-[70px]">
                  <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                    <span
                      aria-hidden="true"
                      className={
                        "absolute inset-0 rounded-full opacity-50" +
                        (row.admin ? " bg-green-200" : " bg-red-200")
                      }
                    ></span>
                    <span className="relative">{row.admin ? "Yes" : "No"}</span>
                  </span>
                </td>
                ) : null) : (
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 min-w-[70px]">
                  <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                    <span
                      aria-hidden="true"
                      className={
                        "absolute inset-0 rounded-full opacity-50" +
                        (row.admin ? " bg-green-200" : " bg-red-200")
                      }
                    ></span>
                    <span className="relative">{row.admin ? "Yes" : "No"}</span>
                  </span>
                </td>
                )}
                
                {!props?.showExtra ? (props?.headings.includes("Agency") ? (
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 min-w-[110px]">
                    <p className="text-gray-900 whitespace-no-wrap">
                      {row.agency ? row.agency : "--"}
                    </p>
                  </td>
                ) : null) : (
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 min-w-[110px]">
                    <p className="text-gray-900 whitespace-no-wrap">
                      {row.agency ? row.agency : "--"}
                    </p>
                  </td>
                )}
                
                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">
                    Edit
                  </a>
                  &nbsp;&nbsp;
                  <a href="#" className="text-red-600 hover:text-red-900">
                    Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataTable;
