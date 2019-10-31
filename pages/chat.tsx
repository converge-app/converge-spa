import { NextPage } from "next";
import React from "react";
import DashboardLayout from "../components/layouts/dashboard.layout";
import ChatContent from "../components/content/chat/chat.content";

const ChatPage: NextPage = () => {
  return (
    <DashboardLayout>
      <ChatContent />
    </DashboardLayout>
  );
};

export default ChatPage;
