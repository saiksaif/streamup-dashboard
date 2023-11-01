import React from 'react'
import { Link } from 'react-router-dom'

import AppsIcon from '@mui/icons-material/Apps';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SpeakerIcon from '@mui/icons-material/Speaker';
import DescriptionIcon from '@mui/icons-material/Description';
import CameraIcon from '@mui/icons-material/Camera';
import LayersIcon from '@mui/icons-material/Layers';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import FeedIcon from '@mui/icons-material/Feed';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ErrorIcon from '@mui/icons-material/Error';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import SubjectIcon from '@mui/icons-material/Subject';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

function Sidebar() {
    return (
        <div className="relative bg-white">
            <div className="flex flex-col sm:flex-row sm:justify-around">
                <div className="h-screen w-100 overflow-y-hidden bg-grey-400">
                    <div className="flex items-center justify-start mx-6 my-4">
                        {/* <img className="h-10" src="/icons/rocket.svg" /> */}
                        <span className="text-gray-600 ml-4 text-2xl font-bold">
                            Sidebar
                        </span>
                    </div>
                    <nav className="mt-6 px-4 w-100 overflow-y-scroll">
                        <Link className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-2 transition-colors duration-200  text-gray-600 rounded-lg" to="/">
                            <AppsIcon />
                            <span className="mx-2 font-normal">
                                Dashboard
                            </span>
                            <span className="flex-grow text-right">
                            </span>
                        </Link>
                        <Link className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-2 transition-colors duration-200  text-gray-800 rounded-lg bg-gray-100" to="/users">
                            <PeopleAltIcon />
                            <span className="mx-2 font-normal">
                                Users
                            </span>
                            <span className="flex-grow text-right">
                            </span>
                        </Link>
                        <Link className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-2 transition-colors duration-200  text-gray-600 rounded-lg " to="/agencies">
                            <AssignmentIcon />
                            <span className="mx-2 font-normal">
                                Agencies
                            </span>
                            <span className="flex-grow text-right">
                                <button type="button" className="w-6 h-6 text-xs  rounded-full text-white bg-red-500">
                                    <span className="p-1">
                                        7
                                    </span>
                                </button>
                            </span>
                        </Link>
                        <Link className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-2 transition-colors duration-200  text-gray-600 rounded-lg " to="/notifications">
                            <NotificationsIcon />
                            <span className="mx-2 font-normal">
                                Notifications
                            </span>
                            <span className="flex-grow text-right">
                            </span>
                        </Link>
                        <Link className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-2 transition-colors duration-200  text-gray-600 rounded-lg " to="/notifications">
                            <AttachMoneyIcon />
                            <span className="mx-2 font-normal">
                                Transactions
                            </span>
                            <span className="flex-grow text-right">
                            </span>
                        </Link>
                        <Link className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-2 transition-colors duration-200  text-gray-600 rounded-lg " to="/notifications">
                            <SpeakerIcon />
                            <span className="mx-2 font-normal">
                                Advertisements
                            </span>
                            <span className="flex-grow text-right">
                            </span>
                        </Link>
                        <Link className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-2 transition-colors duration-200  text-gray-600 rounded-lg " to="/notifications">
                            <DescriptionIcon />
                            <span className="mx-2 font-normal">
                                Newsfeeds
                            </span>
                            <span className="flex-grow text-right">
                            </span>
                        </Link>
                        <Link className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-2 transition-colors duration-200  text-gray-600 rounded-lg " to="/notifications">
                            <CameraIcon />
                            <span className="mx-2 font-normal">
                                Stories
                            </span>
                            <span className="flex-grow text-right">
                            </span>
                        </Link>
                        <Link className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-2 transition-colors duration-200  text-gray-600 rounded-lg " to="/notifications">
                            <LayersIcon />
                            <span className="mx-2 font-normal">
                                Banners
                            </span>
                            <span className="flex-grow text-right">
                            </span>
                        </Link>
                        <Link className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-2 transition-colors duration-200  text-gray-600 rounded-lg " to="/notifications">
                            <LayersIcon />
                            <span className="mx-2 font-normal">
                                Stores
                            </span>
                            <span className="flex-grow text-right">
                            </span>
                        </Link>
                        <Link className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-2 transition-colors duration-200  text-gray-600 rounded-lg " to="/notifications">
                            <GraphicEqIcon />
                            <span className="mx-2 font-normal">
                                Audio Streaming
                            </span>
                            <span className="flex-grow text-right">
                            </span>
                        </Link>
                        <Link className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-2 transition-colors duration-200  text-gray-600 rounded-lg " to="/notifications">
                            <GraphicEqIcon />
                            <span className="mx-2 font-normal">
                                Video Streaming
                            </span>
                            <span className="flex-grow text-right">
                            </span>
                        </Link>
                        <Link className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-2 transition-colors duration-200  text-gray-600 rounded-lg " to="/notifications">
                            <ReportProblemIcon />
                            <span className="mx-2 font-normal">
                                News
                            </span>
                            <span className="flex-grow text-right">
                            </span>
                        </Link>
                        <Link className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-2 transition-colors duration-200  text-gray-600 rounded-lg " to="/notifications">
                            <FeedIcon />
                            <span className="mx-2 font-normal">
                                Blog
                            </span>
                            <span className="flex-grow text-right">
                            </span>
                        </Link>
                        <Link className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-2 transition-colors duration-200  text-gray-600 rounded-lg " to="/notifications">
                            <FeedIcon />
                            <span className="mx-2 font-normal">
                                Subscribers
                            </span>
                            <span className="flex-grow text-right">
                            </span>
                        </Link>
                        <Link className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-2 transition-colors duration-200  text-gray-600 rounded-lg " to="/notifications">
                            <LocalPhoneIcon />
                            <span className="mx-2 font-normal">
                                Contact
                            </span>
                            <span className="flex-grow text-right">
                            </span>
                        </Link>
                        <Link className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-2 transition-colors duration-200  text-gray-600 rounded-lg " to="/notifications">
                            <ErrorIcon />
                            <span className="mx-2 font-normal">
                                FAQs
                            </span>
                            <span className="flex-grow text-right">
                            </span>
                        </Link>
                        <Link className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-2 transition-colors duration-200  text-gray-600 rounded-lg " to="/notifications">
                            <NoteAddIcon />
                            <span className="mx-2 font-normal">
                                Onboard
                            </span>
                            <span className="flex-grow text-right">
                            </span>
                        </Link>
                        <Link className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-2 transition-colors duration-200  text-gray-600 rounded-lg " to="/notifications">
                            <SubjectIcon />
                            <span className="mx-2 font-normal">
                                Categories
                            </span>
                            <span className="flex-grow text-right">
                            </span>
                        </Link>
                        <Link className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-2 transition-colors duration-200  text-gray-600 rounded-lg " to="/notifications">
                            <SettingsIcon />
                            <span className="mx-2 font-normal">
                                Settings
                            </span>
                            <span className="flex-grow text-right">
                            </span>
                        </Link>
                    
                        <hr />

                        <Link className="text-gray-600 hover:text-gray-800 transition-colors duration-200 flex items-center py-2 px-8" to="/">
                            <span className="mx-2 font-medium">
                                Logout
                            </span>
                            <LogoutIcon />
                        </Link>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Sidebar