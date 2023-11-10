import React from 'react'

function WebsiteSettings() {
    return (
        <form class="container w-100 rounded-lg mx-auto shadow-md">
            <div class="space-y-6 bg-white rounded-lg">
                <div class="w-full p-4 space-y-4 text-gray-500 md:space-y-0">
                    <h2 class="max-w-sm md:w-1/3">
                        Title
                    </h2>
                    <div class="max-w- mx-auto w-100">
                        <div class=" relative ">
                            <input type="text" id="user-info-email" class=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" placeholder="Title" />
                        </div>
                    </div>
                    <br />

                    <h2 class="max-w-sm md:w-1/3">
                        Short Intro
                    </h2>
                    <div class="max-w- mx-auto w-100">
                        <div class=" relative ">
                        <textarea className='rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent' name="" id="" cols="30" rows="4" placeholder="Short Intro" ></textarea>
                        </div>
                    </div>
                    <br />

                    <h2 class="max-w-sm md:w-1/3">
                        About
                    </h2>
                    <div class="max-w- mx-auto w-100">
                        <div class=" relative ">
                            <textarea className='rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent' name="" id="" cols="30" rows="4" placeholder="About" ></textarea>
                            {/* <input type="text" id="user-info-email" class=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" placeholder="Email" /> */}
                        </div>
                    </div>
                    <br />

                    <h2 class="max-w-sm md:w-1/3">
                        About Page
                    </h2>
                    <div class="max-w- mx-auto w-100">
                        <div class=" relative ">
                        <textarea className='rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent' name="" id="" cols="30" rows="4" placeholder="About Page" ></textarea>
                        </div>
                    </div>
                    <br />

                    <div className='flex flex-row gap-2'>
                        <div className='w-2/4'>
                            <h2 class="max-w-sm md:w-1/3">
                                Email
                            </h2>
                            <div class="max-w- mx-auto w-100">
                                <div class=" relative ">
                                    <input type="email" id="user-info-email" class=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" placeholder="Email" />
                                </div>
                            </div>
                        </div>
                        <div className='w-2/4'>
                            <h2 class="max-w-sm md:w-1/3">
                                Phone
                            </h2>
                            <div class="max-w- mx-auto w-100">
                                <div class=" relative ">
                                    <input type="text" id="user-info-email" class=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" placeholder="Phone" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />

                    <h2 class="max-w-sm md:w-1/3">
                        Copyright
                    </h2>
                    <div class="max-w- mx-auto w-100">
                        <div class=" relative ">
                        <textarea className='rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent' name="" id="" cols="30" rows="4" placeholder="Copyright" ></textarea>
                        </div>
                    </div>
                </div>
                <hr />
                <div class="w-full p-4 space-y-4 text-gray-500 md:space-y-0">
                    <h2 class="max-w-sm md:w-1/3">
                        Meta Title
                    </h2>
                    <div class="max-w- mx-auto w-100">
                        <div class=" relative ">
                            <input type="text" id="user-info-email" class=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" placeholder="Meta Title" />
                        </div>
                    </div>
                    <br />

                    <h2 class="max-w-sm md:w-1/3">
                        Meta Description
                    </h2>
                    <div class="max-w- mx-auto w-100">
                        <div class=" relative ">
                        <textarea className='rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent' name="" id="" cols="30" rows="4" placeholder="Meta Description" ></textarea>
                        </div>
                    </div>
                    <br />
                    <h2 class="max-w-sm md:w-1/3">
                        Author
                    </h2>
                    <div class="max-w- mx-auto w-100">
                        <div class=" relative ">
                            <input type="text" id="user-info-email" class=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" placeholder="Author" />
                        </div>
                    </div>
                    <br />
                    <h2 class="max-w-sm md:w-1/3">
                        Website
                    </h2>
                    <div class="max-w- mx-auto w-100">
                        <div class=" relative ">
                            <input type="text" id="user-info-email" class=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" placeholder="Website" />
                        </div>
                    </div>
                </div>
                <hr />
                <div class="w-full p-4 space-y-4 text-gray-500 md:space-y-0">
                    <h2 class="max-w-sm md:w-1/3">
                        User Terms and Conditions
                    </h2>
                    <div class="max-w- mx-auto w-100">
                        <div class=" relative ">
                        <textarea className='rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent' name="" id="" cols="30" rows="5" placeholder="User Terms and Conditions" ></textarea>
                        </div>
                    </div>
                    <br />
                    
                    <h2 class="max-w-sm md:w-1/3">
                        Agent Terms and Conditions
                    </h2>
                    <div class="max-w- mx-auto w-100">
                        <div class=" relative ">
                        <textarea className='rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent' name="" id="" cols="30" rows="5" placeholder="Agent Terms and Conditions" ></textarea>
                        </div>
                    </div>
                    <br />
                    
                    <h2 class="max-w-sm md:w-1/3">
                        Host Terms and Conditions
                    </h2>
                    <div class="max-w- mx-auto w-100">
                        <div class=" relative ">
                        <textarea className='rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent' name="" id="" cols="30" rows="5" placeholder="Host Terms and Conditions" ></textarea>
                        </div>
                    </div>
                    <br />
                    
                    <h2 class="max-w-sm md:w-1/3">
                        Agency Terms and Conditions
                    </h2>
                    <div class="max-w- mx-auto w-100">
                        <div class=" relative ">
                        <textarea className='rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent' name="" id="" cols="30" rows="5" placeholder="Agency Terms and Conditions" ></textarea>
                        </div>
                    </div>
                    <br />
                    
                    <h2 class="max-w-sm md:w-1/3">
                        Country Head Terms and Conditions
                    </h2>
                    <div class="max-w- mx-auto w-100">
                        <div class=" relative ">
                        <textarea className='rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent' name="" id="" cols="30" rows="5" placeholder="Country Head Terms and Conditions" ></textarea>
                        </div>
                    </div>
                    <br />
                    
                    <h2 class="max-w-sm md:w-1/3">
                        Admin Terms and Conditions
                    </h2>
                    <div class="max-w- mx-auto w-100">
                        <div class=" relative ">
                        <textarea className='rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent' name="" id="" cols="30" rows="5" placeholder="Admin Terms and Conditions" ></textarea>
                        </div>
                    </div>
                </div>
                <hr />
                <div class="w-full p-4 space-y-4 text-gray-500 md:space-y-0">
                    <h2 class="max-w-sm md:w-1/3">
                        Facebook Link
                    </h2>
                    <div class="max-w- mx-auto w-100">
                        <div class=" relative ">
                            <input type="text" id="user-info-email" class=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" placeholder="Facebook Link" />
                        </div>
                    </div>
                    <br />
                    <h2 class="max-w-sm md:w-1/3">
                        Twitter Link
                    </h2>
                    <div class="max-w- mx-auto w-100">
                        <div class=" relative ">
                            <input type="text" id="user-info-email" class=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" placeholder="Twitter Link" />
                        </div>
                    </div>
                    <br />
                    <h2 class="max-w-sm md:w-1/3">
                        LinkedIn Link
                    </h2>
                    <div class="max-w- mx-auto w-100">
                        <div class=" relative ">
                            <input type="text" id="user-info-email" class=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" placeholder="LinkedIn Link" />
                        </div>
                    </div>
                    <br />
                    <h2 class="max-w-sm md:w-1/3">
                        Instagram Link
                    </h2>
                    <div class="max-w- mx-auto w-100">
                        <div class=" relative ">
                            <input type="text" id="user-info-email" class=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" placeholder="Instagram Link" />
                        </div>
                    </div>
                </div>
                <hr />
                <div class="w-full p-4 space-y-4 text-gray-500 md:space-y-0">
                    <h2 class="max-w-sm md:w-1/3">
                        Appstore Link
                    </h2>
                    <div class="max-w- mx-auto w-100">
                        <div class=" relative ">
                            <input type="text" id="user-info-email" class=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" placeholder="Appstore Link" />
                        </div>
                    </div>
                    <br />
                    <h2 class="max-w-sm md:w-1/3">
                        Playstore Link
                    </h2>
                    <div class="max-w- mx-auto w-100">
                        <div class=" relative ">
                            <input type="text" id="user-info-email" class=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" placeholder="Playstore Link" />
                        </div>
                    </div>
                </div>
                <hr />
                <div class="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
                    <button type="submit" class="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                        Save
                    </button>
                </div>
            </div>
        </form>
    )
}

export default WebsiteSettings