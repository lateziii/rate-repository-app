import { useState, useEffect } from 'react';
 import { useQuery } from '@apollo/client';
 import { GET_USER } from '../graphql/queries';

 const useUser = () => {
     const [user, setUser] = useState();
     const data = useQuery(GET_USER);

     useEffect(() => {
         if (data.data) {
             setUser(data.data.authorizedUser);
         }
     }, [data]);
     return user;
 };

 export default useUser;