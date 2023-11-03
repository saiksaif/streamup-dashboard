import React from "react";

function DataTable() {
  return (
    <div class="container  rounded-2xl shadow-lg overflow-hidden">
          <div class="inline-block min-w-full pb-0">
            <table class="min-w-full leading-normal mb-0 border border-white">
              <thead>
                <tr>
                  <th
                    scope="col"
                    class="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                  >
                    User
                  </th>
                  <th
                    scope="col"
                    class="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                  >
                    Role
                  </th>
                  <th
                    scope="col"
                    class="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                  >
                    Created at
                  </th>
                  <th
                    scope="col"
                    class="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                  >
                    status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <div class="flex items-center">
                      <div class="flex-shrink-0">
                        <a href="#" class="relative block">
                          <img
                            alt="profil"
                            src="/images/person/8.jpg"
                            class="mx-auto object-cover rounded-full h-10 w-10 "
                          />
                        </a>
                      </div>
                      <div class="ml-3">
                        <p class="text-gray-900 whitespace-no-wrap">
                          Jean marc
                        </p>
                      </div>
                    </div>
                  </td>
                  <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <p class="text-gray-900 whitespace-no-wrap">Admin</p>
                  </td>
                  <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <p class="text-gray-900 whitespace-no-wrap">12/09/2020</p>
                  </td>
                  <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <span class="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                      <span
                        aria-hidden="true"
                        class="absolute inset-0 bg-green-200 rounded-full opacity-50"
                      ></span>
                      <span class="relative">active</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <div class="flex items-center">
                      <div class="flex-shrink-0">
                        <a href="#" class="relative block">
                          <img
                            alt="profil"
                            src="/images/person/9.jpg"
                            class="mx-auto object-cover rounded-full h-10 w-10 "
                          />
                        </a>
                      </div>
                      <div class="ml-3">
                        <p class="text-gray-900 whitespace-no-wrap">
                          Marcus coco
                        </p>
                      </div>
                    </div>
                  </td>
                  <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <p class="text-gray-900 whitespace-no-wrap">Designer</p>
                  </td>
                  <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <p class="text-gray-900 whitespace-no-wrap">01/10/2012</p>
                  </td>
                  <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <span class="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                      <span
                        aria-hidden="true"
                        class="absolute inset-0 bg-green-200 rounded-full opacity-50"
                      ></span>
                      <span class="relative">active</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <div class="flex items-center">
                      <div class="flex-shrink-0">
                        <a href="#" class="relative block">
                          <img
                            alt="profil"
                            src="/images/person/10.jpg"
                            class="mx-auto object-cover rounded-full h-10 w-10 "
                          />
                        </a>
                      </div>
                      <div class="ml-3">
                        <p class="text-gray-900 whitespace-no-wrap">
                          Ecric marc
                        </p>
                      </div>
                    </div>
                  </td>
                  <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <p class="text-gray-900 whitespace-no-wrap">Developer</p>
                  </td>
                  <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <p class="text-gray-900 whitespace-no-wrap">02/10/2018</p>
                  </td>
                  <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <span class="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                      <span
                        aria-hidden="true"
                        class="absolute inset-0 bg-green-200 rounded-full opacity-50"
                      ></span>
                      <span class="relative">active</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <div class="flex items-center">
                      <div class="flex-shrink-0">
                        <a href="#" class="relative block">
                          <img
                            alt="profil"
                            src="/images/person/10.jpg"
                            class="mx-auto object-cover rounded-full h-10 w-10 "
                          />
                        </a>
                      </div>
                      <div class="ml-3">
                        <p class="text-gray-900 whitespace-no-wrap">
                          Ecric marc
                        </p>
                      </div>
                    </div>
                  </td>
                  <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <p class="text-gray-900 whitespace-no-wrap">Developer</p>
                  </td>
                  <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <p class="text-gray-900 whitespace-no-wrap">02/10/2018</p>
                  </td>
                  <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <span class="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                      <span
                        aria-hidden="true"
                        class="absolute inset-0 bg-green-200 rounded-full opacity-50"
                      ></span>
                      <span class="relative">active</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <div class="flex items-center">
                      <div class="flex-shrink-0">
                        <a href="#" class="relative block">
                          <img
                            alt="profil"
                            src="/images/person/10.jpg"
                            class="mx-auto object-cover rounded-full h-10 w-10 "
                          />
                        </a>
                      </div>
                      <div class="ml-3">
                        <p class="text-gray-900 whitespace-no-wrap">
                          Ecric marc
                        </p>
                      </div>
                    </div>
                  </td>
                  <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <p class="text-gray-900 whitespace-no-wrap">Developer</p>
                  </td>
                  <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <p class="text-gray-900 whitespace-no-wrap">02/10/2018</p>
                  </td>
                  <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <span class="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                      <span
                        aria-hidden="true"
                        class="absolute inset-0 bg-green-200 rounded-full opacity-50"
                      ></span>
                      <span class="relative">active</span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
    </div>
  );
}

export default DataTable;