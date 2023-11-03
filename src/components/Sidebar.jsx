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

import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SpeakerOutlinedIcon from '@mui/icons-material/SpeakerOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import CameraOutlinedIcon from '@mui/icons-material/CameraOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';

import SidebarLink from './SidebarLink';

function Sidebar() {
    return (
        <div className={"flex " + styles.sidebarMain}>
            <div className={"h-screen " + styles.sidebarInner}>
                <div className="flex items-center justify-start mx-6 mt-4 mb-0">
                    <img className="h-10" src="/icon.png" />
                    <span className="text-gray-600 ml-4 text-2xl font-bold">
                        StreamUp
                    </span>
                </div>
                <nav className={"mt-6 px-4 w-100 pt-1 " + styles.sidebarNav}>
                    <SidebarLink href="/" name="Dashboard" icon={<GridViewOutlinedIcon />} />
                    <SidebarLink href="/users" name="Users" icon={<PeopleAltOutlinedIcon />} />
                    <SidebarLink href="/agencies" name="Agencies" icon={<AssignmentOutlinedIcon />} />
                    <SidebarLink href="/notifications" name="Notifications" icon={<NotificationsActiveOutlinedIcon />} />
                    <SidebarLink href="/transactions" name="Transactions" icon={<AttachMoneyIcon />} />
                    <SidebarLink href="/advertisements" name="Advertisements" icon={<SpeakerOutlinedIcon />} />
                    <SidebarLink href="/news-feeds" name="Newsfeeds" icon={<FeedOutlinedIcon />} />
                    <SidebarLink href="/stories" name="Stories" icon={<CameraOutlinedIcon />} />
                    <SidebarLink href="/banners" name="Banners" icon={<LayersOutlinedIcon />} />
                    <SidebarLink href="/stores" name="Stores" icon={<StoreOutlinedIcon />} />
                    <SidebarLink href="/audio-streaming" name="Audio Streaming" icon={<GraphicEqIcon />} />
                    <SidebarLink href="/video-streaming" name="Video Streaming" icon={<SmartDisplayOutlinedIcon />} />
                    <SidebarLink href="/news" name="News" icon={<NewspaperOutlinedIcon />} />
                    <SidebarLink href="/blog" name="Blog" icon={<BookOutlinedIcon />} />
                    <SidebarLink href="/subscribers" name="Subscribers" icon={<SummarizeOutlinedIcon />} />
                    <SidebarLink href="/contact" name="Contact" icon={<CallOutlinedIcon />} />
                    <SidebarLink href="/faqs" name="FAQs" icon={<LiveHelpOutlinedIcon />} />
                    <SidebarLink href="/onboard" name="Onboard" icon={<NoteAddOutlinedIcon />} />
                    <SidebarLink href="/categories" name="Categories" icon={<SubjectIcon />} />
                    <SidebarLink href="/settings" name="Settings" icon={<SettingsIcon />} />
                </nav>
                <hr />
                <div className={styles.sidebarLogout + ' my-3'}>
                    <Link 
                    className="w-100 mx-4 text-gray-600 text-red-500 rounded-lg hover:text-white hover:bg-red-500 transition-colors duration-200 flex justify-center py-2 px-8" 
                    to="/login">
                        <span className="mx-2 font-medium">
                            Logout
                        </span>
                        <LogoutIcon className='' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar