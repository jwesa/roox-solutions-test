import React from "react";
import Header from "../Header/Header";
import UserCard from "../UserCard/UserCard";

const UserList = () => {
    return (
        <div className="user-list">
            <Header title="Список пользователей" />
            <UserCard />
        </div>
    );
};

export default UserList;
