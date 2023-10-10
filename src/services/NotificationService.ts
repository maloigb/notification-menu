import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import { Inotification } from '../store/models/Inotification';


export const notificationAPI = createApi({
    reducerPath: 'notificationAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
    endpoints: (build) => ({
        fetchAllNotification : build.query<Inotification[] | null, number>({
            query: (limit: number = 10 ) => {
                return {
                    url: '/posts',
                    params: {
                        _limit: limit
                    }
                }
            }
        })
    })
});