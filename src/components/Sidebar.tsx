"use client";
import styles from "../styles/sidebar.module.css";
import { Box, IconButton, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";

const commonAnimateCss = {
  scale: 1.1,
  borderRadius: "6px",
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
};

export default function Sidebar(props: any) {
  const { collapsed, setCollapsed } = props;
  return (
    <aside className={`${styles.sidebar} ${collapsed ? styles.collapsed : ""}`}>
      <nav>
        <Box>
          <div
            className={styles.logo}
            style={{
              margin: collapsed ? "10px 0px 20px 10px" : "0px 0px 20px 10px",
            }}
          >
            <motion.div
              initial={{
                filter: "brightness(1) drop-shadow(0 0 0px transparent)",
              }}
              whileHover={{
                filter: "brightness(1.5) drop-shadow(0 0 10px #00bfff)",
              }}
              animate={{
                filter: "brightness(1) drop-shadow(0 0 0px transparent)",
              }} // Reset on hover end
              transition={{ duration: 0.3 }}
            >
              <Image
                src={collapsed ? "/smallLogo.png" : "/logo.png"}
                alt=""
                width={collapsed ? 40 : 187}
                height={collapsed ? 35 : 76}
              />
            </motion.div>
          </div>

          <ul>
            {!collapsed && (
              <Typography
                variant="body1"
                sx={{
                  color: "rgba(0,0,0,0.5)",
                  fontSize: "14px",
                  margin: "2.5rem 0 1rem 1rem",
                }}
              >
                GENERAL
              </Typography>
            )}

            <motion.li
              whileHover={commonAnimateCss}
              transition={{ duration: 0.2 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14 21C13.4477 21 13 20.5523 13 20V12C13 11.4477 13.4477 11 14 11H20C20.5523 11 21 11.4477 21 12V20C21 20.5523 20.5523 21 20 21H14ZM4 13C3.44772 13 3 12.5523 3 12V4C3 3.44772 3.44772 3 4 3H10C10.5523 3 11 3.44772 11 4V12C11 12.5523 10.5523 13 10 13H4ZM9 11V5H5V11H9ZM4 21C3.44772 21 3 20.5523 3 20V16C3 15.4477 3.44772 15 4 15H10C10.5523 15 11 15.4477 11 16V20C11 20.5523 10.5523 21 10 21H4ZM5 19H9V17H5V19ZM15 19H19V13H15V19ZM13 4C13 3.44772 13.4477 3 14 3H20C20.5523 3 21 3.44772 21 4V8C21 8.55228 20.5523 9 20 9H14C13.4477 9 13 8.55228 13 8V4ZM15 5V7H19V5H15Z"
                  fill="#000"
                />
              </svg>
              {!collapsed && <Typography>Dashboard</Typography>}
            </motion.li>
            <motion.li
              whileHover={commonAnimateCss}
              transition={{ duration: 0.2 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M3 9.00886C3 5.69022 5.69071 2.99951 9.00935 2.99951H12C15.3093 2.99951 17.9942 5.67508 18.0093 8.98082H18.9533C20.1037 8.98082 21 9.87713 21 11.0275V14.9902C21 18.3088 18.3093 20.9995 14.9907 20.9995H9.00935C5.69071 20.9995 3 18.3088 3 14.9902V9.00886ZM9.00935 4.99951C6.79528 4.99951 5 6.79479 5 9.00886V14.9902C5 17.2042 6.79528 18.9995 9.00935 18.9995H14.9907C17.2047 18.9995 19 17.2042 19 14.9902V11H18C16.9243 11 16 10.0756 16 9C16 6.78593 14.2141 4.99951 12 4.99951H9.00935ZM8 9C8 8.44772 8.44772 8 9 8H12.5C13.0523 8 13.5 8.44772 13.5 9C13.5 9.55228 13.0523 10 12.5 10H9C8.44772 10 8 9.55228 8 9ZM9 14C8.44772 14 8 14.4477 8 15C8 15.5523 8.44772 16 9 16H15C15.5523 16 16 15.5523 16 15C16 14.4477 15.5523 14 15 14H9Z"
                  fill="black"
                />
              </svg>
              {!collapsed && <Typography>Blog Posts</Typography>}
            </motion.li>
            <motion.li
              whileHover={commonAnimateCss}
              transition={{ duration: 0.2 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
              >
                <path
                  d="M2 9.5C2 9.8134 2.46101 10.3584 3.53047 10.8931C4.91405 11.5849 6.87677 12 9 12C11.1232 12 13.0859 11.5849 14.4695 10.8931C15.539 10.3584 16 9.8134 16 9.5V7.3287C14.35 8.3482 11.8273 9 9 9C6.17273 9 3.64996 8.3482 2 7.3287V9.5ZM16 12.3287C14.35 13.3482 11.8273 14 9 14C6.17273 14 3.64996 13.3482 2 12.3287V14.5C2 14.8134 2.46101 15.3584 3.53047 15.8931C4.91405 16.5849 6.87677 17 9 17C11.1232 17 13.0859 16.5849 14.4695 15.8931C15.539 15.3584 16 14.8134 16 14.5V12.3287ZM0 14.5V4.5C0 2.01472 4.02944 0 9 0C13.9706 0 18 2.01472 18 4.5V14.5C18 16.9853 13.9706 19 9 19C4.02944 19 0 16.9853 0 14.5ZM9 7C11.1232 7 13.0859 6.58492 14.4695 5.89313C15.539 5.3584 16 4.81342 16 4.5C16 4.18658 15.539 3.6416 14.4695 3.10687C13.0859 2.41508 11.1232 2 9 2C6.87677 2 4.91405 2.41508 3.53047 3.10687C2.46101 3.6416 2 4.18658 2 4.5C2 4.81342 2.46101 5.3584 3.53047 5.89313C4.91405 6.58492 6.87677 7 9 7Z"
                  fill="black"
                />
              </svg>
              {!collapsed && <Typography>Database</Typography>}
            </motion.li>

            <motion.li
              whileHover={commonAnimateCss}
              transition={{ duration: 0.2 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M11.0607 6.11097L12.4749 7.52518C15.2086 10.2589 15.2086 14.691 12.4749 17.4247L12.1214 17.7782C9.3877 20.5119 4.95555 20.5119 2.22188 17.7782C-0.511791 15.0446 -0.511791 10.6124 2.22188 7.87874L3.6361 9.293C1.68348 11.2456 1.68348 14.4114 3.6361 16.364C5.58872 18.3166 8.7545 18.3166 10.7072 16.364L11.0607 16.0105C13.0133 14.0578 13.0133 10.892 11.0607 8.9394L9.6465 7.52518L11.0607 6.11097ZM17.7782 12.1214L16.364 10.7072C18.3166 8.7545 18.3166 5.58872 16.364 3.6361C14.4114 1.68348 11.2456 1.68348 9.293 3.6361L8.9394 3.98965C6.98678 5.94227 6.98678 9.1081 8.9394 11.0607L10.3536 12.4749L8.9394 13.8891L7.52518 12.4749C4.79151 9.7413 4.79151 5.30911 7.52518 2.57544L7.87874 2.22188C10.6124 -0.511787 15.0446 -0.511787 17.7782 2.22188C20.5119 4.95555 20.5119 9.3877 17.7782 12.1214Z"
                  fill="black"
                />
              </svg>
              {!collapsed && <Typography>Connection</Typography>}
            </motion.li>
            <motion.li
              whileHover={commonAnimateCss}
              transition={{ duration: 0.2 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M20 17H22V19H2V17H4V10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10V17ZM18 17V10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10V17H18ZM9 21H15V23H9V21Z"
                  fill="black"
                />
              </svg>
              {!collapsed && <Typography>Notifications</Typography>}
              {!collapsed && <span className={styles.badge}>5</span>}
            </motion.li>
          </ul>

          <ul>
            {!collapsed && (
              <Typography
                variant="body1"
                sx={{
                  color: "rgba(0,0,0,0.5)",
                  fontSize: "14px",
                  margin: "2.5rem 0 1rem 1rem",
                }}
              >
                SISYPHUS VENTURES
              </Typography>
            )}

            <motion.li
              whileHover={commonAnimateCss}
              transition={{ duration: 0.2 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14 14.252V16.3414C13.3744 16.1203 12.7013 16 12 16C8.68629 16 6 18.6863 6 22H4C4 17.5817 7.58172 14 12 14C12.6906 14 13.3608 14.0875 14 14.252ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11ZM18 17V14H20V17H23V19H20V22H18V19H15V17H18Z"
                  fill="black"
                />
              </svg>
              {!collapsed && <Typography>User management</Typography>}
            </motion.li>
            <motion.li
              whileHover={commonAnimateCss}
              transition={{ duration: 0.2 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7V8H19.5C20.3284 8 21 8.67157 21 9.5V13H19V10H5V20H13V22H4.5C3.67157 22 3 21.3284 3 20.5V9.5C3 8.67157 3.67157 8 4.5 8H6V7ZM16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8H16V7ZM20.6399 20.1953L21.145 23.1406L18.5 21.75L15.855 23.1406L16.3601 20.1953L14.2202 18.1094L17.1775 17.6797L18.5 15L19.8225 17.6797L22.7798 18.1094L20.6399 20.1953Z"
                  fill="black"
                />
              </svg>
              {!collapsed && <Typography>Security & Access</Typography>}
            </motion.li>
            <motion.li
              whileHover={commonAnimateCss}
              transition={{ duration: 0.2 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M11.0049 2L18.3032 4.28071C18.7206 4.41117 19.0049 4.79781 19.0049 5.23519V7H21.0049C21.5572 7 22.0049 7.44772 22.0049 8V16C22.0049 16.5523 21.5572 17 21.0049 17L17.7848 17.0011C17.3982 17.5108 16.9276 17.9618 16.3849 18.3318L11.0049 22L5.62486 18.3318C3.98563 17.2141 3.00488 15.3584 3.00488 13.3744V5.23519C3.00488 4.79781 3.28913 4.41117 3.70661 4.28071L11.0049 2ZM11.0049 4.094L5.00488 5.97V13.3744C5.00488 14.6193 5.58406 15.7884 6.56329 16.5428L6.75154 16.6793L11.0049 19.579L14.7869 17H10.0049C9.4526 17 9.00488 16.5523 9.00488 16V8C9.00488 7.44772 9.4526 7 10.0049 7H17.0049V5.97L11.0049 4.094ZM11.0049 12V15H20.0049V12H11.0049ZM11.0049 10H20.0049V9H11.0049V10Z"
                  fill="black"
                />
              </svg>
              {!collapsed && <Typography>Payments</Typography>}
            </motion.li>
          </ul>
        </Box>

        <Box>
          <ul>
            {!collapsed && (
              <Typography
                variant="body1"
                sx={{
                  color: "rgba(0,0,0,0.5)",
                  fontSize: "14px",
                  margin: "2.5rem 0 1rem 1rem",
                }}
              >
                OTHERS
              </Typography>
            )}

            <motion.li
              whileHover={commonAnimateCss}
              transition={{ duration: 0.2 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M8.68637 4.00008L11.293 1.39348C11.6835 1.00295 12.3167 1.00295 12.7072 1.39348L15.3138 4.00008H19.0001C19.5524 4.00008 20.0001 4.4478 20.0001 5.00008V8.68637L22.6067 11.293C22.9972 11.6835 22.9972 12.3167 22.6067 12.7072L20.0001 15.3138V19.0001C20.0001 19.5524 19.5524 20.0001 19.0001 20.0001H15.3138L12.7072 22.6067C12.3167 22.9972 11.6835 22.9972 11.293 22.6067L8.68637 20.0001H5.00008C4.4478 20.0001 4.00008 19.5524 4.00008 19.0001V15.3138L1.39348 12.7072C1.00295 12.3167 1.00295 11.6835 1.39348 11.293L4.00008 8.68637V5.00008C4.00008 4.4478 4.4478 4.00008 5.00008 4.00008H8.68637ZM6.00008 6.00008V9.5148L3.5148 12.0001L6.00008 14.4854V18.0001H9.5148L12.0001 20.4854L14.4854 18.0001H18.0001V14.4854L20.4854 12.0001L18.0001 9.5148V6.00008H14.4854L12.0001 3.5148L9.5148 6.00008H6.00008ZM12.0001 16.0001C9.79094 16.0001 8.00008 14.2092 8.00008 12.0001C8.00008 9.79094 9.79094 8.00008 12.0001 8.00008C14.2092 8.00008 16.0001 9.79094 16.0001 12.0001C16.0001 14.2092 14.2092 16.0001 12.0001 16.0001ZM12.0001 14.0001C13.1047 14.0001 14.0001 13.1047 14.0001 12.0001C14.0001 10.8955 13.1047 10.0001 12.0001 10.0001C10.8955 10.0001 10.0001 10.8955 10.0001 12.0001C10.0001 13.1047 10.8955 14.0001 12.0001 14.0001Z"
                  fill="black"
                />
              </svg>
              {!collapsed && <Typography>Setting</Typography>}
            </motion.li>
            <motion.li
              whileHover={commonAnimateCss}
              transition={{ duration: 0.2 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <g clipPath="url(#clip0_1_48)">
                  <path
                    d="M13.0156 5.03431L13.0405 13.0343L11.0405 13.0405L11.0156 5.04056L8.01558 5.04993L11.9999 0.037457L16.0155 5.02494L13.0156 5.03431ZM6.01246 4.05545L6.02092 6.76451C4.78063 8.17866 4.03112 10.0335 4.03746 12.0624C4.05126 16.4807 7.64413 20.0512 12.0624 20.0374C16.4807 20.0236 20.0512 16.4307 20.0374 12.0124C20.031 9.98353 19.27 8.13341 18.0209 6.72704L18.0124 4.01797C20.447 5.83478 22.0272 8.73454 22.0374 12.0062C22.0546 17.5289 17.5915 22.0201 12.0687 22.0373C6.54588 22.0546 2.05472 17.5914 2.03747 12.0686C2.02725 8.79701 3.58927 5.88743 6.01246 4.05545Z"
                    fill="#FF0000"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_48">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(23.9999) rotate(89.8211)"
                    />
                  </clipPath>
                </defs>
              </svg>
              {!collapsed && (
                <Typography sx={{ color: "#FF0000" }}>Log out</Typography>
              )}
            </motion.li>
          </ul>
          <Box sx={{ float: "right" }}>
            <IconButton onClick={() => setCollapsed(!collapsed)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"
                  fill="black"
                />
              </svg>
            </IconButton>
          </Box>
        </Box>
      </nav>
    </aside>
  );
}
