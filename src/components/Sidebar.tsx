import { NavLink } from "react-router-dom";
import "./Sidebar.scss";
import {
  HomeOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";

type SidebarItem = {
  icon: any;
  label: string;
  redirectLink: string;
};

const SidebarItem = ({ icon, label, redirectLink }: SidebarItem) => {
  return (
    <NavLink to={redirectLink} className="sidebar__item">
        <div className="sidebar__item-icon">{icon}</div>
        <div className="sidebar__item-label">{label}</div>
    </NavLink>
  );
};

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarItem icon={<HomeOutlined />} label="Home" redirectLink="/home" />
      <SidebarItem
        icon={<NotificationOutlined />}
        label="Notifications"
        redirectLink="/notifications"
      />
      <SidebarItem
        icon={<UserOutlined />}
        label="Profile"
        redirectLink="/profile"
      />
    </div>
  );
};
