import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({
  currentPage,
  totalCount,
  pageSize,
  onPageChanged,
  users,
  followingInProgress,
  followUser,
  unfollowUser,
  ...props
}) => {
  return (
    <div>
      <Paginator
        currentPage={currentPage}
        totalCount={totalCount}
        pageSize={pageSize}
        onPageChanged={onPageChanged}
      />
      <div>
        {users.map((user) => (
          <User
            user={user}
            key={user.id}
            followingInProgress={followingInProgress}
            followUser={followUser}
            unfollowUser={unfollowUser}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
