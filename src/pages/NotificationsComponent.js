"use client";
import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function isSeen(item) {
  return isSeen in item;
}

const getTime = (timestamp) => {
  const date = new Date(timestamp);

  return `created on ${
    date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear()
  }`;
};

export default function NotificationsComponent({ unSeenCount, items }) {
  const data = items.map((item, idx) => {
    return {
      id: idx,
      message: item.message.text,
      timestamp: getTime(item.created_on),
      read: isSeen(item),
    };
  });

  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardHeader
        title="Notifications"
        action={
          <IconButton aria-label="notifications">
            <NotificationsIcon />
          </IconButton>
        }
      />
      <CardContent>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "16px",
          }}
        >
          <Typography variant="body2">
            You have {unSeenCount} unseen notifications
          </Typography>
        </div>
        <List sx={{ maxHeight: 300, overflow: "auto" }}>
          {data.map((notification) => (
            <ListItem
              key={notification.id}
              alignItems="flex-start"
              sx={{ opacity: notification.read ? 0.6 : 1 }}
            >
              <ListItemIcon sx={{ minWidth: "30px" }}>
                <FiberManualRecordIcon
                  sx={{
                    fontSize: "small",
                    color: notification.read ? "grey.500" : "primary.main",
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary={notification.message}
                secondary={notification.timestamp}
                primaryTypographyProps={{ variant: "body2" }}
                secondaryTypographyProps={{ variant: "caption" }}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
