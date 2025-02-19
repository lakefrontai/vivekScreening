import styles from "../styles/navbar.module.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <input type="text" placeholder="Search now..." />
      <div className={styles.icons}>
        <NotificationsIcon />
        <AccountCircleIcon />
        <span>User Name ▼</span>
      </div>
    </header>
  );
}
