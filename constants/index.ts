import {
  Gamepad2Icon,
  Home,
  Search,
  MonitorCog,
  FileCode,
  FolderUp,
  Settings,
} from "lucide-react";

export const USER_NAVIGATION = [
  {
    title: "Trang chủ",
    url: "/",
    icon: Home,
  },
  {
    title: "Mod",
    url: "/mod",
    icon: Gamepad2Icon,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Cài Đặt",
    url: "/setting",
    icon: Settings,
  }
]

export const USER_DASHBOARD_NAVIGATION = [
  {
    title: 'Thống Kê',
    url: '/dashboard',
    icon: MonitorCog,
  },
  {
    title: 'Bản Mod',
    url: '/mod-list',
    icon: FileCode
  },
  {
    title: "Hàng Chờ",
    url: "/approve-queue",
    icon: FolderUp,
  }
]

