import styles from "../styles/navbar.module.css";
import {
  Paper,
  IconButton,
  InputBase,
  InputAdornment,
  Typography,
  Box,
} from "@mui/material";

export default function Navbar(props: any) {
  const { collapsed } = props;
  return (
    <header
      className={styles.navbar}
      style={{ width: collapsed ? "calc(100% - 80px)" : "calc(100% - 250px)" }}
    >
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: "279px",
          height: "36px",
          border: "1px solid  #c1c1c1;",
          boxShadow: "none",
          borderRadius: "4px",
          background: "transparent",
        }}
      >
        <IconButton aria-label="menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M8.25 1.5C11.976 1.5 15 4.524 15 8.25C15 11.976 11.976 15 8.25 15C4.524 15 1.5 11.976 1.5 8.25C1.5 4.524 4.524 1.5 8.25 1.5ZM8.25 13.5C11.1506 13.5 13.5 11.1506 13.5 8.25C13.5 5.34938 11.1506 3 8.25 3C5.34938 3 3 5.34938 3 8.25C3 11.1506 5.34938 13.5 8.25 13.5ZM14.614 13.5533L16.7353 15.6746L15.6746 16.7353L13.5533 14.614L14.614 13.5533Z"
              fill="black"
            />
          </svg>
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          //value={searchInput}
          placeholder={"Search now.."}
          //onChange={onSearchChange}
          // endAdornment={
          //   searchInput && (
          //     <InputAdornment position="end">
          //       <IconButton onClick={handleClear}>
          //         <CloseIcon />
          //       </IconButton>
          //     </InputAdornment>
          //   )
          // }
        />
      </Paper>

      <Box className={styles.icons}>
        <Box className={styles.icons}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M15.535 6.09608L15.3501 6.52034C15.2148 6.83094 14.7852 6.83094 14.6498 6.52034L14.465 6.09608C14.1353 5.3396 13.5416 4.73731 12.8008 4.40781L12.231 4.15442C11.923 4.0174 11.923 3.56911 12.231 3.43209L12.7689 3.19286C13.5288 2.85488 14.1332 2.2303 14.4571 1.44812L14.647 0.989648C14.7794 0.670117 15.2206 0.670117 15.353 0.989648L15.5429 1.44812C15.8669 2.2303 16.4712 2.85488 17.2311 3.19286L17.7689 3.43209C18.077 3.56911 18.077 4.0174 17.7689 4.15442L17.1992 4.40781C16.4584 4.73731 15.8647 5.3396 15.535 6.09608ZM7.5 2.25H10.5V3.75H7.5C5.01472 3.75 3 5.76472 3 8.25C3 10.9575 4.84656 12.7242 9 14.6098V12.75H10.5C12.9853 12.75 15 10.7353 15 8.25H16.5C16.5 11.5637 13.8137 14.25 10.5 14.25V16.875C6.75 15.375 1.5 13.125 1.5 8.25C1.5 4.93629 4.18629 2.25 7.5 2.25Z"
              fill="#1E1E1E"
            />
          </svg>
          <Typography>Chat</Typography>
        </Box>
        <Box className={styles.icons} sx={{ margin: "0 1rem" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M15.75 7.125V9.375C15.75 11.239 12.728 12.75 9 12.75C5.27208 12.75 2.25 11.239 2.25 9.375V7.125C2.25 8.98898 5.27208 10.5 9 10.5C12.728 10.5 15.75 8.98898 15.75 7.125ZM2.25 10.875C2.25 12.739 5.27208 14.25 9 14.25C12.728 14.25 15.75 12.739 15.75 10.875V13.125C15.75 14.989 12.728 16.5 9 16.5C5.27208 16.5 2.25 14.989 2.25 13.125V10.875ZM9 9C5.27208 9 2.25 7.48896 2.25 5.625C2.25 3.76104 5.27208 2.25 9 2.25C12.728 2.25 15.75 3.76104 15.75 5.625C15.75 7.48896 12.728 9 9 9Z"
              fill="#1E1E1E"
            />
          </svg>
          <Typography>Sql</Typography>
        </Box>
        <Box className={styles.icons}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M5 3V19H21V21H3V3H5ZM19.9393 5.93934L22.0607 8.06066L16 14.1213L13 11.121L9.06066 15.0607L6.93934 12.9393L13 6.87868L16 9.879L19.9393 5.93934Z"
              fill="#1E1E1E"
            />
          </svg>
          <Typography>Chart</Typography>
        </Box>
      </Box>

      <div className={styles.icons}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
        >
          <path
            d="M18 15H20V17H0V15H2V8C2 3.58172 5.58172 0 10 0C14.4183 0 18 3.58172 18 8V15ZM16 15V8C16 4.68629 13.3137 2 10 2C6.68629 2 4 4.68629 4 8V15H16ZM7 19H13V21H7V19Z"
            fill="black"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
        >
          <circle cx="19" cy="19" r="19" fill="#D9D9D9" />
        </svg>
        <Typography>User Name </Typography>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
        >
          <path
            d="M7.4999 8.23213L10.5935 5.13855L11.4774 6.02243L7.4999 9.99994L3.52246 6.02243L4.40634 5.13855L7.4999 8.23213Z"
            fill="black"
          />
        </svg>
      </div>
    </header>
  );
}
