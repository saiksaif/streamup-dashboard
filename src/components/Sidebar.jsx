import React, { useState, useEffect }  from 'react'
import { Link } from 'react-router-dom'
import styles from "./styles/sidebar.module.css";

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

import SidebarLink from './SidebarLink';

function Sidebar() {
    return (
        <div className={"flex " + styles.sidebarMain}>
            <div className={"h-screen " + styles.sidebarInner}>
                <div className="flex items-center justify-start mx-6 my-4">
                    {/* <img className="h-10" src="/icons/rocket.svg" /> */}
                    <span className="text-gray-600 ml-4 text-2xl font-bold">
                        StreamUp Dash
                    </span>
                </div>
                <nav className={"mt-6 px-4 w-100 " + styles.sidebarNav}>
                    <SidebarLink href="/" name="Dashboard" icon={<AppsIcon />} />
                    <SidebarLink href="/users" name="Users" icon={<PeopleAltIcon />} />
                    <SidebarLink href="/agencies" name="Agencies" icon={<AssignmentIcon />} />
                    <SidebarLink href="/notifications" name="Notifications" icon={<NotificationsIcon />} />
                    <SidebarLink href="/transactions" name="Transactions" icon={<AttachMoneyIcon />} />
                    <SidebarLink href="/advertisements" name="Advertisements" icon={<SpeakerIcon />} />
                    <SidebarLink href="/news-feed" name="Newsfeeds" icon={<DescriptionIcon />} />
                    <SidebarLink href="/stories" name="Stories" icon={<CameraIcon />} />
                    <SidebarLink href="/banners" name="Banners" icon={<LayersIcon />} />
                    <SidebarLink href="/stores" name="Stores" icon={<LayersIcon />} />
                    <SidebarLink href="/audio-streaming" name="Audio Streaming" icon={<GraphicEqIcon />} />
                    <SidebarLink href="/video-streaming" name="Video Streaming" icon={<GraphicEqIcon />} />
                    <SidebarLink href="/news" name="News" icon={<ReportProblemIcon />} />
                    <SidebarLink href="/blog" name="Blog" icon={<FeedIcon />} />
                    <SidebarLink href="/subscribers" name="Subscribers" icon={<FeedIcon />} />
                    <SidebarLink href="/contact" name="Contact" icon={<LocalPhoneIcon />} />
                    <SidebarLink href="/faqs" name="FAQs" icon={<ErrorIcon />} />
                    <SidebarLink href="/onboard" name="Onboard" icon={<NoteAddIcon />} />
                    <SidebarLink href="/categories" name="Categories" icon={<SubjectIcon />} />
                    <SidebarLink href="/settings" name="Settings" icon={<SettingsIcon />} />
                </nav>
                <hr />
                <div className={styles.sidebarLogout}>
                    <Link className="w-100 text-gray-600 hover:text-gray-800 transition-colors duration-200 flex justify-center py-2 px-8" to="/login">
                        <span className="mx-2 font-medium text-red-500">
                            Logout
                        </span>
                        <LogoutIcon className='text-red-500' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar