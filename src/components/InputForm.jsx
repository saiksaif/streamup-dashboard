import React from 'react'

function InputForm(props) {
    return (
        <div className="p-6">
            <form action="#">
                {props?.fields?.includes('fullname') ? (
                    <div className="flex flex-row mb-2 gap-2">
                        <div className=" relative ">
                            <input type="text" id="fname" className=" rounded-lg flex-1 appearance-none border border-gray-500 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none" name="fname" placeholder="First Name" />
                        </div>
                        <div className=" relative ">
                            <input type="text" id="lname" className=" rounded-lg flex-1 appearance-none border border-gray-500 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none" name="lname" placeholder="Last Name" />
                        </div>
                    </div>
                ) : null}

                {props?.fields?.includes('email') ? (
                    <div className="flex flex-col mb-2">
                        <div className=" relative ">
                            <input type="email" id="email" className=" rounded-lg flex-1 appearance-none border border-gray-500 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none" name="email" placeholder="Email" />
                        </div>
                    </div>
                ) : null}
                
                {props?.fields?.includes('fullname') ? (
                    <div className="flex flex-row mb-2 gap-2">
                        <div className=" relative w-[100px]">
                            <select type="text" id="code" className=" rounded-lg flex-1 appearance-none border border-gray-500 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none" name="code">
                                <option value="93">+93</option>
                            </select>
                        </div>
                        <div className=" relative ">
                            <input type="text" id="phone" className=" rounded-lg flex-1 appearance-none border border-gray-500 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none" name="phone" placeholder="Phone #" />
                        </div>
                    </div>
                ) : null}

                {props?.fields?.includes('users') ? (
                    <div className="flex flex-col mb-2">
                        <div className=" relative ">
                        <select id="users" className=" rounded-lg flex-1 appearance-none border border-gray-500 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none" placeholder="Users">
                                <option value={null}>Select a User...</option>
                                {props?.users?.map((option, id)=>{
                                return (
                                    <option key={id} value={option.value}>{option.label}</option>
                                )
                            })}
                        </select>
                        </div>
                    </div>
                ) : null}

                {props?.fields?.includes('title') ? (
                    <div className="flex flex-col mb-2">
                        <div className=" relative ">
                            <input type="text" id="title" className=" rounded-lg flex-1 appearance-none border border-gray-500 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none" name="title" placeholder="Title" />
                        </div>
                    </div>
                ) : null}

                {props?.fields?.includes('description') ? (
                    <div className="flex flex-col mb-2">
                        <div className=" relative ">
                            <textarea class="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-500 rounded-lg focus:outline-none" id="description" placeholder="Description" name="description" rows="5" cols="40">
                            </textarea>
                        </div>
                    </div>
                ) : null}

                {props?.fields?.includes('question') ? (
                    <div className="flex flex-col mb-2">
                        <div className=" relative ">
                            <input type="text" id="question" className=" rounded-lg flex-1 appearance-none border border-gray-500 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none" placeholder="Question" />
                        </div>
                    </div>
                ) : null}

                {props?.fields?.includes('answer') ? (
                    <div className="flex flex-col mb-2">
                        <div className=" relative ">
                            <textarea class="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-500 rounded-lg focus:outline-none" id="answer" placeholder="Answer" name="answer" rows="5" cols="40">
                            </textarea>                        
                        </div>
                    </div>
                ) : null}

                {props?.fields?.includes('amount') ? (
                    <div className="flex flex-col mb-2">
                        <div className=" relative ">
                            <input type="number" id="amount" className=" rounded-lg flex-1 appearance-none border border-gray-500 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none" name="amount" placeholder="Amount" />
                        </div>
                    </div>
                ) : null}

                {props?.fields?.includes('thumbnail') ? (
                    <div className="flex flex-col mb-2">
                        <div className=" relative ">
                            <input type="file" id="thumbnail" className=" rounded-lg flex-1 appearance-none border border-gray-500 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none" />
                        </div>
                    </div>
                ) : null}

                {props?.fields?.includes('category') ? (
                    <div className="flex flex-col mb-2">
                        <div className=" relative ">
                        <select id="category" className=" rounded-lg flex-1 appearance-none border border-gray-500 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none" placeholder="Category">
                                <option value={null}>Select an Option...</option>
                            {props?.options?.map((option, id)=>{
                            return (
                                <option key={id} value={option.value}>{option.label}</option>
                            )
                            })}
                        </select>
                        </div>
                    </div>
                ) : null}

                {props?.fields?.includes('type') ? (
                    <div className="flex flex-col mb-2">
                        <div className=" relative ">
                        <select id="type" className=" rounded-lg flex-1 appearance-none border border-gray-500 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none" placeholder="Category">
                                <option value={null}>Select an Option...</option>
                            {props?.typeOptions?.map((option, id)=>{
                            return (
                                <option key={id} value={option.value}>{option.label}</option>
                            )
                            })}
                        </select>
                        </div>
                    </div>
                ) : null}

                <div className="flex w-full my-4">
                    <button type="submit" className="py-2 px-4 bg-black text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none rounded-lg ">
                        {props.actionLabel}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default InputForm