"use client"

import { useEffect, useState } from 'react'

import { getAllUsers } from "@/app/actions";
import Users from "@/components/User/UserList";
import { getSession, useSession } from 'next-auth/react';


export default function UsersPage() {
  const {data: session} = useSession();
  const [, setError] = useState();

  const [tableUsers, setTableUsers] = useState([]);

  useEffect(() => {
    const getFetchUsers = async () => {
      try {
        const user_session = await getSession();
        const accessToken = user_session?.user?.accessToken || "";
        const res = await getAllUsers(accessToken);
        const { error } = res;

        if (error) {
          throw new Error(error)
        }

        setTableUsers(res);
      } catch (err) {
        console.error(err)
        setError(() => {
          throw err;
        });
      }
    };
    getFetchUsers();
  }, []);


  return (
      <div className='h-screen text-white'>
        <div className='overflow-y-auto pb-20 self-start'>
          <Users users={tableUsers} />
        </div>
      </div>
  );
}
