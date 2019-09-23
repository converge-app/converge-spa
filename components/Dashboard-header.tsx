import React, { useState } from "react";
import {
  IconButton,
  useTheme,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemText,
  Link,
  makeStyles,
  Theme,
  createStyles
} from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import MenuIcon from "@material-ui/icons/Menu";
import Arrow_back from "@material-ui/icons/ArrowBack";
import Chat from "@material-ui/icons/ChatBubbleOutline";
import Email from "@material-ui/icons/EmailOutlined";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth,

      whiteSpace: "nowrap",
      background: "#000",
      color: "#fff"
    }
  })
);

export default function Dashboardheader() {
  const [open, setOpen] = useState(false);
  const classes = useStyles(2);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  const linkStyle = {
    marginRight: 30,
    color: "#fff",
    textDecoration: "none"
  };

  return (
    <nav>
      <hr className="topLine" color="#13A8FE"></hr>

      <div className="grid-container">
        <Arrow_back style={{ color: "#666666", width: 42 }}></Arrow_back>
        <div className="logo_text_block">
          <a
            style={{
              fontSize: 24,
              color: "#FFFFFF",
              textDecoration: "none",
              fontWeight: "bold"
            }}
          >
            Converge
          </a>
        </div>

        <div className="search-field">
          <form>
            <input
              className="input-search"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
          </form>
        </div>
        <div className="navbar-items">
          <Link href="Chat">
            <Chat style={linkStyle}></Chat>
          </Link>
          <Link href="#">
            <Email style={linkStyle}></Email>
          </Link>
          <Link href="Portfolio">
            <img className="user-avatar" src="static/default.png"></img>
          </Link>
        </div>
        <div className="burger-bar-icon">
          <IconButton
            color="inherit"
            onClick={handleDrawerOpen}
            aria-label="open drawer"
            edge="start"
          >
            <MenuIcon></MenuIcon>
          </IconButton>
          <Drawer
            open={open}
            anchor="right"
            className={classes.drawer}
            classes={{
              paper: classes.drawerPaper
            }}
          >
            <div>
              <IconButton onClick={handleDrawerClose}>
                <ChevronRightIcon
                  style={{ color: "#666666" }}
                ></ChevronRightIcon>
              </IconButton>
            </div>
            <Divider
              style={{
                background: "#666666"
              }}
            />
            <List>
              {[
                "Inbox",
                "Starred",
                "Send email",
                <a
                  style={{ textDecoration: "none", color: "#FFF" }}
                  href="Settings"
                >
                  Settings
                </a>
              ].map((text, index) => (
                <ListItem>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
            <Divider
              style={{
                background: "#666666"
              }}
            />
          </Drawer>
        </div>
      </div>

      <style jsx>{`
        .grid-container {
          display: grid;
          grid-template-columns: auto auto;
          grid-template-areas: "img logo-area search-area a a a a a a a a a a portfolio burgerbar";
          margin-top: 20px;
          margin-left: 20px;
          align-items: center;
        }
        .navbar-items {
          grid-area: portfolio;
          justify-self: center;
        }

        .user-avatar {
          width: 40px;
          height: 40px;
          overflow: hidden;
          position: relative;
        }

        .topLine {
          padding: 0;
          margin-top: 0;
          height: 5px;
        }

        .search-field {
          grid-area: search-area;
          margin-left: 350px;
        }
        .input-search {
          border: 1px solid #666666;
          background: #000;
          width: 300px;
          height: 30px;
          color: white;
        }
        .logo_text_block {
          grid-area: logo-area;
          margin-right: 50px;
        }
        .burger-bar-icon {
          grid-area: burgerbar;
          justify-self: center;
        }
      `}</style>

      <style jsx global>
        {`
          body {
            background: #000;
            color: #fff;
            margin: 0 !important;
            padding: 0 !important;
          }
        `}
      </style>
    </nav>
  );
}
